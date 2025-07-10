import { defineConfig } from "orval";

const cleanOperationName = (operationId: string) => {
  const withoutNamespace = operationId.replace(
    /^(get|post|put|patch|delete)(Storefront|Stores)/i,
    "$1",
  );

  return withoutNamespace.charAt(0).toLowerCase() + withoutNamespace.slice(1);
};

const filterOperationsWithoutId = (openApiDoc: any) => {
  Object.values(openApiDoc.paths || {}).forEach((pathItem: any) => {
    Object.keys(pathItem).forEach((method) => {
      if (pathItem[method] && !pathItem[method].operationId) {
        delete pathItem[method];
      }
    });
  });

  return openApiDoc;
};

export default defineConfig({
  storefront: {
    input: {
      target:
        "https://api.staging.paynow.gg/swagger/storefront-api/openapi.json",
      override: {
        transformer: filterOperationsWithoutId,
      },
    },
    output: {
      baseUrl: "https://api.paynow.gg",
      target: "./src/generated/storefront.ts",
      client: "axios-functions",
      mode: "single",
      override: {
        operationName: (operation) =>
          cleanOperationName(operation.operationId || "unknownOperation"),
      },
    },
  },
  management: {
    input: {
      target:
        "https://api.staging.paynow.gg/swagger/management-api/openapi.json",
      override: {
        transformer: filterOperationsWithoutId,
      },
    },
    output: {
      baseUrl: "https://api.paynow.gg",
      target: "./src/generated/management.ts",
      client: "axios-functions",
      mode: "single",
      override: {
        operationName: (operation) =>
          cleanOperationName(operation.operationId || "unknownOperation"),
      },
    },
  },
});
