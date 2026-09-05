import type { SpecConfig } from "./config.js";
import {
  entriesFromPaths,
  type JsonSchema,
  type OpenApiDocument,
  type OperationEntry,
} from "./normalize.js";

export interface LoadedSpec {
  schemas: Record<string, JsonSchema>;
  operations: OperationEntry[];
}

export async function loadSpec(config: SpecConfig): Promise<LoadedSpec> {
  const response = await fetch(config.url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${config.name} spec from ${config.url}: ${response.status}.`);
  }

  const document = (await response.json()) as OpenApiDocument;

  return {
    schemas: document.components?.schemas ?? {},
    operations: entriesFromPaths(config.typesOnly ? document.webhooks : document.paths),
  };
}
