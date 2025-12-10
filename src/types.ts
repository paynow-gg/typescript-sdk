export type ExtractJsonRequestBodies<T> = {
  [K in keyof T]: {
    [M in keyof T[K]]: T[K][M] extends {
      requestBody: { content: { "application/json": infer C } };
    }
      ? C
      : never;
  }[keyof T[K]];
};
