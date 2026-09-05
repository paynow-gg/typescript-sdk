import { pascalCase, propertyKey, quote } from "./naming.js";
import type { IrGroup, IrModule, IrOperation, IrType, JsonSchema } from "./normalize.js";
import {
  createContext,
  renderDocLines,
  renderJsDoc,
  renderProperties,
  type SchemaContext,
  schemaToTs,
} from "./schema.js";

const HEADER = "// Generated from OpenAPI spec. Do not edit by hand.";

export function emitTypes(module: IrModule): string {
  const ctx = context(module);
  return [HEADER, ...module.types.map((type) => renderType(type, ctx))].join("\n\n");
}

export function emitClient(module: IrModule): string {
  const ctx = context(module);

  return [
    HEADER,
    renderImports(module),
    ...module.groups.map((group) => renderResource(group, ctx)),
    renderClientClass(module),
    renderOptions(module),
    renderFactory(module),
  ].join("\n\n");
}

function context(module: IrModule): SchemaContext {
  const schemas: Record<string, JsonSchema> = {};

  for (const type of module.types) {
    schemas[type.name] = type.schema;
  }

  return createContext(schemas, module.name);
}

function renderType(type: IrType, ctx: SchemaContext): string {
  const declaration = type.isInterface
    ? `export interface ${type.name} {\n${renderProperties(type.schema, ctx)}}`
    : `export type ${type.name} = ${schemaToTs(type.schema, ctx)};`;

  return join(renderJsDoc(type.schema), declaration);
}

function renderImports(module: IrModule): string {
  const used = new Set(
    module.groups.flatMap((group) => group.operations.flatMap((operation) => operation.usedTypes)),
  );

  const lines = [
    `import { HttpClient } from "../../runtime/http.js";`,
    `import type { ClientOptions, RequestOptions } from "../../runtime/options.js";`,
  ];

  if (used.size > 0) {
    lines.push(`import type { ${[...used].sort().join(", ")} } from "./types.js";`);
  }

  return lines.join("\n");
}

function renderResource(group: IrGroup, ctx: SchemaContext): string {
  return [
    `export class ${group.className} {`,
    `constructor(private readonly http: HttpClient) {}`,
    ...group.operations.map((operation) => renderMethod(operation, ctx)),
    `}`,
  ].join("\n\n");
}

function renderMethod(operation: IrOperation, ctx: SchemaContext): string {
  const args: string[] = [];
  const parts: string[] = [];

  for (const param of operation.pathParams) {
    args.push(`${param.name}: ${schemaToTs(param.schema, ctx)}`);
  }

  if (operation.pathParams.length > 0) {
    parts.push(`path: { ${operation.pathParams.map((param) => param.name).join(", ")} }`);
  }

  if (operation.body) {
    const optional = operation.body.required ? "" : "?";

    args.push(`body${optional}: ${schemaToTs(operation.body.schema, ctx)}`);
    parts.push("body");
  }

  if (operation.queryTypeName) {
    const optional = operation.queryParams.some((param) => param.required) ? "" : "?";

    args.push(`query${optional}: ${operation.queryTypeName}`);
    parts.push("query");
  }

  args.push(
    `opts?: ${operation.headerTypeName ? `RequestOptions<${operation.headerTypeName}>` : "RequestOptions"}`,
  );

  parts.push("opts");

  const call = `this.http.request<${operation.returnType}>(${quote(operation.httpMethod)}, ${quote(operation.path)}, { ${parts.join(", ")} })`;

  return join(
    renderMethodDoc(operation),
    `${operation.methodName}(${args.join(", ")}): Promise<${operation.returnType}> {\nreturn ${call};\n}`,
  );
}

function renderMethodDoc(operation: IrOperation): string {
  const lines: string[] = [];

  if (operation.summary) {
    lines.push(...operation.summary.split("\n"));
  }

  if (operation.description && operation.description !== operation.summary) {
    if (lines.length > 0) {
      lines.push("");
    }

    lines.push(...operation.description.split("\n"));
  }

  for (const param of operation.pathParams) {
    const description = param.schema.description;

    if (typeof description === "string") {
      lines.push(`@param ${param.name} ${description.split("\n")[0]}`);
    }
  }

  return renderDocLines(lines);
}

function renderClientClass(module: IrModule): string {
  return [
    `/** Typed client for the PayNow ${module.name} API. */`,
    `export class ${pascalCase(module.name)}Client {`,
    `/** Escape hatch for endpoints this SDK does not model. */`,
    `readonly $http: HttpClient;`,
    "",
    ...module.groups.map((group) => `readonly ${propertyKey(group.name)}: ${group.className};`),
    "",
    `constructor(http: HttpClient) {`,
    `this.$http = http;`,
    ...module.groups.map((group) => `this.${group.name} = new ${group.className}(http);`),
    `}`,
    `}`,
  ].join("\n");
}

function renderOptions(module: IrModule): string {
  const pascal = pascalCase(module.name);
  const lines: string[] = [];

  if (module.auth) {
    lines.push(
      `/** ${module.auth.description} */`,
      `${module.auth.option}${module.auth.required ? "" : "?"}: string;`,
    );
  }

  if (module.inject) {
    lines.push(`/** ${module.inject.description} */`, `${module.inject.option}: string;`);
  }

  return [
    `/** Options accepted by {@link create${pascal}Client}. */`,
    `export interface ${pascal}ClientOptions extends ClientOptions {`,
    ...lines,
    `}`,
  ].join("\n");
}

function renderFactory(module: IrModule): string {
  const pascal = pascalCase(module.name);
  const inject = module.inject;
  const body = [`const headers: Record<string, string> = { ...options.headers };`];

  for (const header of inject?.header ?? []) {
    body.push(`headers[${quote(header)}] = options.${inject?.option};`);
  }

  if (module.auth) {
    const assignment = `headers.Authorization = \`${module.auth.scheme} \${options.${module.auth.option}}\`;`;

    body.push(
      module.auth.required ? assignment : `if (options.${module.auth.option}) {\n${assignment}\n}`,
    );
  }

  const config = [
    `baseUrl: options.baseUrl,`,
    `timeoutMs: options.timeoutMs,`,
    `fetch: options.fetch,`,
    `headers,`,
  ];

  if (inject) {
    const defaults = inject.path.map((name) => `${name}: options.${inject.option}`).join(", ");

    config.push(`pathDefaults: { ${defaults} },`);
  }

  return [
    `/** Creates a ${pascal}Client that authenticates and scopes every request. */`,
    `export function create${pascal}Client(options: ${pascal}ClientOptions): ${pascal}Client {`,
    ...body,
    `return new ${pascal}Client(new HttpClient({`,
    ...config,
    `}));`,
    `}`,
  ].join("\n");
}

function join(doc: string, declaration: string): string {
  return doc ? `${doc}\n${declaration}` : declaration;
}
