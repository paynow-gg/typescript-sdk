export interface RequestOptions<H = Record<string, string>> {
  headers?: H & Record<string, string>;
  signal?: AbortSignal;
  timeoutMs?: number;
}

export interface ClientOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
  timeoutMs?: number;
  fetch?: typeof globalThis.fetch;
}
