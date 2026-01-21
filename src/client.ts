import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type CreateAxiosDefaults,
} from "axios";

type SuccessType<T> = T extends {
  responses: { 200: { content: { "application/json": infer R } } };
}
  ? R
  : T extends {
        responses: { 201: { content: { "application/json": infer R } } };
      }
    ? R
    : T extends { responses: { 204: any } }
      ? void
      : never;

type HasRequiredKeys<T> = keyof T extends never
  ? false
  : T extends Record<string, any>
    ? {} extends T
      ? false
      : true
    : false;

type MapToAxiosConfig<T extends { parameters?: any; requestBody?: any }> = Omit<
  AxiosRequestConfig,
  "params" | "headers" | "data" | "url"
> &
  (T["parameters"] extends { query?: infer Q }
    ? Q extends never
      ? { params?: any }
      : Q extends undefined
        ? { params?: any }
        : HasRequiredKeys<Q> extends true
          ? { params: Q }
          : { params?: Q }
    : { params?: any }) & {
    headers?: T["parameters"] extends { header?: infer H }
      ? H extends never
        ? AxiosRequestConfig["headers"]
        : H extends undefined
          ? AxiosRequestConfig["headers"]
          : H & AxiosRequestConfig["headers"]
      : AxiosRequestConfig["headers"];
  } & ([Required<T>["requestBody"]] extends [never]
    ? { data?: any }
    : Required<T>["requestBody"] extends {
          content: { "application/json": infer B };
        }
      ? HasRequiredKeys<B> extends true
        ? { data: B }
        : { data?: B }
      : { data?: any }) &
  (T["parameters"] extends { path?: infer P }
    ? P extends never
      ? {}
      : P extends undefined
        ? {}
        : P extends Record<string, any>
          ? { path: P }
          : {}
    : {});

type AllOptional<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? true : false;
}[keyof T] extends true
  ? true
  : false;

type GroupedOperations<T extends Record<string, any>> = {
  [K in keyof T as K extends `${infer Prefix}_${string}`
    ? Uncapitalize<Prefix>
    : never]: {
    [Op in keyof T as Op extends `${Capitalize<K extends `${infer P}_${string}` ? P : never>}_${infer Method}`
      ? Uncapitalize<Method>
      : never]: Op extends keyof T
      ? AllOptional<MapToAxiosConfig<T[Op]>> extends true
        ? (
            config?: MapToAxiosConfig<T[Op]>,
          ) => Promise<AxiosResponse<SuccessType<T[Op]>>>
        : (
            config: MapToAxiosConfig<T[Op]>,
          ) => Promise<AxiosResponse<SuccessType<T[Op]>>>
      : never;
  };
};

export function createClient<T extends Record<string, any>>(
  operationMappings: Record<string, { method: string; path: string }>,
  defaultHeaders?: Record<string, string>,
  pathReplacements?: Record<string, string>,
  options?: CreateAxiosDefaults,
): GroupedOperations<T> {
  const client = axios.create({
    baseURL: "https://api.paynow.gg",
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options?.headers,
      ...defaultHeaders,
    },
    paramsSerializer: {
      indexes: null,
    },
  });

  return new Proxy({} as GroupedOperations<T>, {
    get: (_, prop: string) => {
      return new Proxy(
        {},
        {
          get: (_, methodName: string) => {
            const prefix = prop.charAt(0).toUpperCase() + prop.slice(1);

            const method =
              methodName.charAt(0).toUpperCase() + methodName.slice(1);

            const operationId = `${prefix}_${method}`;

            return async (config?: any) => {
              const mapping =
                operationMappings[
                  operationId as keyof typeof operationMappings
                ];

              if (!mapping) {
                throw new Error(`Operation ${operationId} not found`);
              }

              let url = mapping.path;

              if (pathReplacements) {
                for (const [key, value] of Object.entries(pathReplacements)) {
                  url = url.replace(new RegExp(`{${key}}`, "g"), value);
                }
              }

              if (config?.path) {
                url = url.replace(
                  /{(\w+)}/g,
                  (_, key) => config.path[key] ?? `{${key}}`,
                );
              }

              return client.request({
                ...config,
                url,
                method: mapping.method,
                data: config?.data ?? undefined,
              });
            };
          },
        },
      );
    },
  });
}
