import type { AuthConfig, InjectConfig, SpecConfig } from "./config.js";

import {
  capitalize,
  groupNameFromTag,
  isIdentifier,
  methodNameFromOperationId,
  pascalCase,
} from "./naming.js";

import {
  createContext,
  isInterfaceShape,
  resolveRef,
  type SchemaContext,
  schemaToTs,
} from "./schema.js";

const JSON_MEDIA_TYPE = "application/json";
const PLACEHOLDER = /\{([^}]+)\}/g;
const HTTP_METHODS = new Set(["get", "put", "post", "delete", "patch", "head", "options"]);

export type JsonSchema = Record<string, unknown>;

export interface OpenApiDocument {
  paths?: Record<string, Record<string, RawOperation>>;
  webhooks?: Record<string, Record<string, RawOperation>>;
  components?: { schemas?: Record<string, JsonSchema> };
}

export interface RawOperation {
  operationId?: string;
  tags?: string[];
  summary?: string;
  description?: string;
  deprecated?: boolean;
  parameters?: RawParameter[];
  requestBody?: RawContent;
  responses?: Record<string, RawContent>;
  [extension: string]: unknown;
}

export interface RawContent {
  description?: string;
  required?: boolean;
  content?: Record<string, { schema?: JsonSchema }>;
}

export interface RawParameter {
  name: string;
  in: string;
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  schema?: JsonSchema;
}

export interface OperationEntry {
  path: string;
  method: string;
  operation: RawOperation;
}

export interface IrType {
  name: string;
  schema: JsonSchema;
  isInterface: boolean;
}

export interface IrParam {
  name: string;
  schema: JsonSchema;
  required: boolean;
}

export interface IrOperation {
  operationId: string;
  httpMethod: string;
  path: string;
  group: string;
  methodName: string;
  summary: string | undefined;
  description: string | undefined;
  pathParams: IrParam[];
  queryParams: IrParam[];
  body: { schema: JsonSchema; required: boolean } | undefined;
  queryTypeName: string | undefined;
  headerTypeName: string | undefined;
  returnType: string;
  usedTypes: string[];
}

export interface IrGroup {
  name: string;
  className: string;
  operations: IrOperation[];
}

export interface IrModule {
  name: string;
  typesOnly: boolean;
  inject: InjectConfig | undefined;
  auth: AuthConfig | undefined;
  types: IrType[];
  groups: IrGroup[];
}

export function entriesFromPaths(
  paths: Record<string, Record<string, RawOperation>> | undefined,
): OperationEntry[] {
  const entries: OperationEntry[] = [];

  for (const [path, item] of Object.entries(paths ?? {})) {
    for (const [method, operation] of Object.entries(item)) {
      if (HTTP_METHODS.has(method)) {
        entries.push({ path, method, operation });
      }
    }
  }

  return entries;
}

export function buildModule(
  config: SpecConfig,
  schemas: Record<string, JsonSchema>,
  entries: OperationEntry[],
): IrModule {
  const extraTypes: IrType[] = [];
  const groups = new Map<string, IrGroup>();

  for (const { path, method, operation } of entries) {
    if (config.typesOnly) {
      extraTypes.push(webhookPayload(config.name, path, operation));

      continue;
    }

    if (operation.deprecated === true || operation["x-gitbook-ignore"] === true) {
      continue;
    }

    const built = buildOperation(config, schemas, path, method, operation, extraTypes);
    const group = groups.get(built.group) ?? {
      name: built.group,
      className: `${pascalCase(built.group)}Resource`,
      operations: [],
    };

    groups.set(built.group, group);
    group.operations.push(built);
  }

  const types = [
    ...Object.entries(schemas).map(([name, schema]) => ({
      name,
      schema,
      isInterface: isInterfaceShape(schema),
    })),
    ...extraTypes,
  ].sort(byName);
  const sortedGroups = [...groups.values()].sort(byName);

  for (const group of sortedGroups) {
    group.operations.sort((a, b) => a.methodName.localeCompare(b.methodName));
  }

  assertUnique(
    types,
    (type) => type.name,
    (name) => `${config.name}: type "${name}" is emitted more than once.`,
  );
  assertUnique(
    sortedGroups,
    (group) => group.className,
    (name, previous, current) =>
      `${config.name}: groups "${previous.name}" and "${current.name}" both emit class "${name}".`,
  );

  for (const group of sortedGroups) {
    assertUnique(
      group.operations,
      (operation) => operation.methodName,
      (name, previous, current) =>
        `${config.name}: operations "${previous.operationId}" and "${current.operationId}" both map to ${group.name}.${name}().`,
    );
  }

  return {
    name: config.name,
    typesOnly: config.typesOnly === true,
    inject: config.inject,
    auth: config.auth,
    types,
    groups: sortedGroups,
  };
}

function webhookPayload(module: string, event: string, operation: RawOperation): IrType {
  const schema = operation.requestBody?.content?.[JSON_MEDIA_TYPE]?.schema;

  if (!schema) {
    throw new Error(`${module}: webhook "${event}" has no ${JSON_MEDIA_TYPE} request body.`);
  }

  const description = operation.summary ?? operation.description;

  return {
    name: `${pascalCase(event)}Payload`,
    schema: description && !schema.description ? { ...schema, description } : schema,
    isInterface: isInterfaceShape(schema),
  };
}

function buildOperation(
  config: SpecConfig,
  schemas: Record<string, JsonSchema>,
  path: string,
  method: string,
  operation: RawOperation,
  extraTypes: IrType[],
): IrOperation {
  const operationId = operation.operationId;

  if (!operationId) {
    throw new Error(`${config.name}: ${method.toUpperCase()} ${path} has no operationId.`);
  }

  const location = `${config.name}: ${operationId}`;
  const tag = operation.tags?.[0];

  if (!tag) {
    throw new Error(`${location} has no tag to group it by.`);
  }

  const group = groupNameFromTag(tag);
  const methodName = methodNameFromOperationId(operationId);
  const prefix = `${pascalCase(group)}${capitalize(methodName)}`;
  const ctx = createContext(schemas, location);

  const declared = operation.parameters ?? [];
  
  const pathParams = collectPathParams(config, location, path, declared, ctx);

  const queryParams = declared
    .filter((param) => param.in === "query")
    .map((param) => toParam(param, location));

  const headerParams = declared
    .filter((param) => param.in === "header" && !isInjectedHeader(config, param.name))
    .map((param) => toParam(param, location));

  const body = collectBody(location, operation, ctx);

  if (body && queryParams.length > 0) {
    throw new Error(
      `${location} declares both a request body and query parameters; the generator has no signature for that.`,
    );
  }

  const queryTypeName = queryParams.length > 0 ? `${prefix}Query` : undefined;
  const headerTypeName = headerParams.length > 0 ? `${prefix}Headers` : undefined;

  if (queryTypeName) {
    extraTypes.push(parameterType(queryTypeName, queryParams, "Query parameters"));
  }

  if (headerTypeName) {
    extraTypes.push(parameterType(headerTypeName, headerParams, "Request headers"));
  }

  return {
    operationId,
    httpMethod: method.toUpperCase(),
    path,
    group,
    methodName,
    summary: operation.summary,
    description: operation.description,
    pathParams,
    queryParams,
    body,
    queryTypeName,
    headerTypeName,
    returnType: resolveReturnType(location, operation, ctx),
    usedTypes: [...ctx.used, queryTypeName, headerTypeName].filter((name) => name !== undefined),
  };
}

function collectPathParams(
  config: SpecConfig,
  location: string,
  path: string,
  declared: RawParameter[],
  ctx: SchemaContext,
): IrParam[] {
  const params: IrParam[] = [];

  for (const match of path.matchAll(PLACEHOLDER)) {
    const name = String(match[1]);
    const param = declared.find((candidate) => candidate.in === "path" && candidate.name === name);

    if (!param) {
      throw new Error(
        `${location}: path template "${path}" uses "{${name}}", which is not a declared path parameter.`,
      );
    }

    if (config.inject?.path.includes(name)) {
      continue;
    }

    if (!isIdentifier(name)) {
      throw new Error(
        `${location}: path parameter "${name}" is not a valid TypeScript identifier.`,
      );
    }

    const built = toParam(param, location);

    schemaToTs(built.schema, ctx);
    params.push(built);
  }

  return params;
}

function collectBody(location: string, operation: RawOperation, ctx: SchemaContext) {
  const content = operation.requestBody?.content;

  if (!content) {
    return undefined;
  }

  const schema = content[JSON_MEDIA_TYPE]?.schema;

  if (!schema) {
    throw new Error(`${location}: request body declares no ${JSON_MEDIA_TYPE} schema.`);
  }

  schemaToTs(schema, ctx);

  const required = ((resolveRef(schema, ctx).required ?? []) as string[]).length > 0;

  return { schema, required };
}

function resolveReturnType(location: string, operation: RawOperation, ctx: SchemaContext): string {
  const responses = operation.responses ?? {};
  const successCodes = Object.keys(responses).filter((code) => /^2\d\d$/.test(code));

  if (successCodes.length === 0) {
    throw new Error(`${location}: no 2xx response is declared.`);
  }

  const withContent = successCodes.filter((code) => responses[code]?.content !== undefined);

  for (const code of withContent) {
    const mediaTypes = Object.keys(responses[code]?.content ?? {});

    if (mediaTypes.length !== 1 || mediaTypes[0] !== JSON_MEDIA_TYPE) {
      throw new Error(
        `${location}: response ${code} declares content types ${JSON.stringify(mediaTypes)}; only ${JSON_MEDIA_TYPE} is supported.`,
      );
    }
  }

  if (withContent.length > 1) {
    throw new Error(
      `${location}: ${JSON.stringify(withContent)} all carry a response body, so the return type is ambiguous.`,
    );
  }

  if (withContent.length === 0) {
    return "void";
  }

  const code = String(withContent[0]);
  const schema = responses[code]?.content?.[JSON_MEDIA_TYPE]?.schema;

  if (!schema) {
    throw new Error(`${location}: response ${code} declares ${JSON_MEDIA_TYPE} with no schema.`);
  }

  const rendered = schemaToTs(schema, ctx);

  return successCodes.includes("204") ? `${rendered} | undefined` : rendered;
}

function parameterType(name: string, params: IrParam[], description: string): IrType {
  const properties: Record<string, JsonSchema> = {};
  const required = params.filter((param) => param.required).map((param) => param.name);

  for (const param of params) {
    properties[param.name] = param.schema;
  }

  return {
    name,
    schema: { type: "object", properties, required, description },
    isInterface: false,
  };
}

function toParam(param: RawParameter, location: string): IrParam {
  if (!param.schema) {
    throw new Error(`${location}: parameter "${param.name}" has no schema.`);
  }

  return {
    name: param.name,
    schema: {
      ...param.schema,
      ...(param.description ? { description: param.description } : {}),
      ...(param.deprecated === true ? { deprecated: true } : {}),
    },
    required: param.required === true,
  };
}

function isInjectedHeader(config: SpecConfig, name: string): boolean {
  return (
    config.inject?.header.some((header) => header.toLowerCase() === name.toLowerCase()) === true
  );
}

function byName(a: { name: string }, b: { name: string }): number {
  return a.name.localeCompare(b.name);
}

function assertUnique<T>(
  items: T[],
  key: (item: T) => string,
  conflict: (name: string, previous: T, current: T) => string,
): void {
  const seen = new Map<string, T>();

  for (const item of items) {
    const name = key(item);
    const previous = seen.get(name);

    if (previous) {
      throw new Error(conflict(name, previous, item));
    }

    seen.set(name, item);
  }
}
