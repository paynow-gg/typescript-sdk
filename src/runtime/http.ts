import { PayNowApiError } from "./errors.js";
import type { ClientOptions, RequestOptions } from "./options.js";

export interface HttpClientConfig extends ClientOptions {
  pathDefaults?: Record<string, string>;
}

export interface RequestParts {
  path?: Record<string, unknown>;
  query?: Record<string, unknown>;
  body?: unknown;
  opts?: RequestOptions<Record<string, string>>;
}

const DEFAULT_BASE_URL = "https://api.paynow.gg";

export class HttpClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;
  private readonly pathDefaults: Record<string, string>;
  private readonly timeoutMs: number | undefined;
  private readonly fetchImpl: typeof globalThis.fetch | undefined;

  constructor(config: HttpClientConfig = {}) {
    this.baseUrl = (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    this.headers = { ...config.headers };
    this.pathDefaults = { ...config.pathDefaults };
    this.timeoutMs = config.timeoutMs;
    this.fetchImpl = config.fetch;
  }

  async request<T>(method: string, pathTemplate: string, init: RequestParts = {}): Promise<T> {
    const url = new URL(this.baseUrl + resolvePath(pathTemplate, init.path, this.pathDefaults));

    appendQuery(url.searchParams, init.query);

    const hasBody = init.body !== undefined;
    const headers: Record<string, string> = { accept: "application/json" };

    if (hasBody) {
      headers["content-type"] = "application/json";
    }

    mergeHeaders(headers, this.headers);
    mergeHeaders(headers, init.opts?.headers);

    const timeoutMs = init.opts?.timeoutMs ?? this.timeoutMs;
    const signal = combineSignals(init.opts?.signal, timeoutMs);
    const fetchImpl = this.fetchImpl ?? globalThis.fetch;

    const response = await fetchImpl(url, {
      method,
      headers,
      body: hasBody ? JSON.stringify(init.body) : undefined,
      ...(signal ? { signal } : {}),
    });

    if (!response.ok) {
      throw new PayNowApiError(response, await readBody(response));
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await readBody(response)) as T;
  }
}

function resolvePath(
  template: string,
  values: Record<string, unknown> | undefined,
  defaults: Record<string, string>,
): string {
  return template.replace(/\{([^}]+)\}/g, (_match, name: string) => {
    const value = values?.[name] ?? defaults[name];

    if (value === undefined || value === null || value === "") {
      throw new Error(
        `Cannot build request path "${template}": no value for path parameter "${name}".`,
      );
    }

    return encodeURIComponent(String(value));
  });
}

function appendQuery(search: URLSearchParams, query: Record<string, unknown> | undefined): void {
  if (!query) {
    return;
  }

  for (const key of Object.keys(query).sort()) {
    const value = query[key];

    if (value === undefined || value === null) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) {
          search.append(key, stringifyQueryValue(item));
        }
      }

      continue;
    }

    if (typeof value === "object") {
      appendDeepObject(search, key, value as Record<string, unknown>);

      continue;
    }

    search.append(key, stringifyQueryValue(value));
  }
}

function appendDeepObject(
  search: URLSearchParams,
  key: string,
  value: Record<string, unknown>,
): void {
  for (const [innerKey, innerValue] of Object.entries(value)) {
    if (innerValue !== undefined && innerValue !== null) {
      search.append(`${key}[${innerKey}]`, stringifyQueryValue(innerValue));
    }
  }
}

function stringifyQueryValue(value: unknown): string {
  return typeof value === "boolean" ? (value ? "true" : "false") : String(value);
}

function mergeHeaders(target: Record<string, string>, source: Record<string, string> | undefined) {
  if (!source) {
    return;
  }

  for (const [key, value] of Object.entries(source)) {
    if (value === undefined || value === null) {
      continue;
    }

    target[key.toLowerCase()] = value;
  }
}

function combineSignals(signal: AbortSignal | undefined, timeoutMs: number | undefined) {
  const timeout =
    timeoutMs !== undefined && timeoutMs > 0 ? AbortSignal.timeout(timeoutMs) : undefined;

  if (signal && timeout) {
    return AbortSignal.any([signal, timeout]);
  }

  return signal ?? timeout;
}

async function readBody(response: Response): Promise<unknown> {
  const text = await response.text();

  if (text.length === 0) {
    return undefined;
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
