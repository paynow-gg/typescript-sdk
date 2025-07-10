import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";

const OPTIONAL_PATH_PARAMS = ["storeId", "store_id"];
const OPTIONAL_HEADERS = ["x-paynow-store-id"];

async function generate(name: string, endpoint: string) {
  const specResponse = await fetch(endpoint);
  const spec = await specResponse.json();

  if (spec.paths) {
    for (const path in spec.paths) {
      for (const method in spec.paths[path]) {
        const operation = spec.paths[path][method];

        // Re-map the Operation ID so it's cleaner...

        if (operation.operationId) {
          const parts = operation.operationId.split("_");

          const tag = operation.tags[0]
            .split("-")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");

          operation.operationId = tag + (parts[1] ? `_${parts[1]}` : "");
        }

        // Filter out the optional headers & paramaters

        if (operation.parameters) {
          operation.parameters = operation.parameters.filter((param: any) => {
            if (
              param.in === "path" &&
              OPTIONAL_PATH_PARAMS.includes(param.name)
            ) {
              return false;
            }

            if (
              param.in === "header" &&
              OPTIONAL_HEADERS.some(
                (h) => h.toLowerCase() === param.name?.toLowerCase(),
              )
            ) {
              return false;
            }

            return true;
          });
        }
      }
    }
  }

  const ast = await openapiTS(spec);
  const output = astToString(ast);

  // Map the operation IDs to the URL

  const operationMapping: Record<string, { method: string; path: string }> = {};

  for (const [path, pathItem] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(pathItem as any)) {
      const operationId = (operation as any).operationId;

      if (operationId) {
        operationMapping[operationId] = {
          method: method.toUpperCase(),
          path: path,
        };
      }
    }
  }

  const contents =
    output +
    `\n\nexport const operationMappings = ${JSON.stringify(operationMapping, null, 2)} as const;\n`;

  fs.writeFileSync(`./src/generated/${name}.ts`, contents);
}

generate(
  "management",
  "https://api.paynow.gg/swagger/management-api/openapi.json",
);

generate(
  "storefront",
  "https://api.paynow.gg/swagger/storefront-api/openapi.json",
);
