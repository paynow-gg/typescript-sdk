import { propertyKey, quote } from "./naming.js";
import type { JsonSchema } from "./normalize.js";

const REF_PREFIX = "#/components/schemas/";

const KNOWN_KEYWORDS = new Set(
  `$ref additionalProperties allOf anyOf default deprecated description enum example examples
   exclusiveMaximum exclusiveMinimum format items maxItems maxLength maximum minItems minLength
   minimum nullable oneOf pattern properties readOnly required title type uniqueItems writeOnly`.split(
    /\s+/,
  ),
);

const STRUCTURAL_KEYWORDS = ["properties", "items", "additionalProperties", "required"];

export interface SchemaContext {
  schemas: Record<string, JsonSchema>;
  used: Set<string>;
  location: string;
}

export function createContext(
  schemas: Record<string, JsonSchema>,
  location: string,
): SchemaContext {
  return { schemas, used: new Set(), location };
}

export function resolveRef(schema: JsonSchema, ctx: SchemaContext): JsonSchema {
  let current = schema;

  for (let depth = 0; typeof current.$ref === "string"; depth += 1) {
    if (depth > 16) {
      throw new Error(`${ctx.location}: $ref chain is too deep, likely circular.`);
    }

    current = ctx.schemas[refName(current.$ref, ctx)] as JsonSchema;
  }

  return current;
}

export function schemaToTs(schema: JsonSchema, ctx: SchemaContext): string {
  for (const keyword of Object.keys(schema)) {
    if (!KNOWN_KEYWORDS.has(keyword) && !keyword.startsWith("x-")) {
      throw new Error(`${ctx.location}: unhandled schema keyword "${keyword}".`);
    }
  }

  if (typeof schema.$ref === "string") {
    const name = refName(schema.$ref, ctx);

    ctx.used.add(name);

    return name;
  }

  const composed = schema.oneOf ?? schema.anyOf;

  if (Array.isArray(composed)) {
    return union(composed.map((member) => schemaToTs(member as JsonSchema, ctx)));
  }

  if (Array.isArray(schema.allOf)) {
    return combine(
      schema.allOf.map((member) => schemaToTs(member as JsonSchema, ctx)),
      " & ",
    );
  }

  const types = (
    schema.type === undefined ? [] : Array.isArray(schema.type) ? schema.type : [schema.type]
  ) as string[];

  if (Array.isArray(schema.enum)) {
    return renderEnum(schema.enum, types, ctx);
  }

  if (types.length === 0) {
    if (STRUCTURAL_KEYWORDS.some((keyword) => keyword in schema)) {
      throw new Error(`${ctx.location}: schema has no "type" and no composition keyword.`);
    }

    return "unknown";
  }

  return union(types.map((type) => renderType(type, schema, ctx)));
}

export function renderProperties(schema: JsonSchema, ctx: SchemaContext): string {
  const properties = (schema.properties ?? {}) as Record<string, JsonSchema>;
  const required = new Set((schema.required ?? []) as string[]);
  const lines: string[] = [];

  for (const [name, property] of Object.entries(properties)) {
    const doc = renderJsDoc(property);

    if (doc) {
      lines.push(doc);
    }

    lines.push(
      `${propertyKey(name)}${required.has(name) ? "" : "?"}: ${schemaToTs(property, ctx)};`,
    );
  }

  return lines.length === 0 ? "" : `${lines.join("\n")}\n`;
}

export function renderJsDoc(schema: JsonSchema): string {
  const lines: string[] = [];

  if (typeof schema.description === "string") {
    lines.push(...schema.description.split("\n"));
  }

  for (const tag of ["format", "pattern", "minimum", "maximum"]) {
    const value = schema[tag];

    if (typeof value === "string" || typeof value === "number") {
      lines.push(`@${tag} ${value}`);
    }
  }

  const enumDescriptions = schema["x-enumDescriptions"];

  if (enumDescriptions && typeof enumDescriptions === "object") {
    for (const [member, text] of Object.entries(enumDescriptions as Record<string, unknown>)) {
      lines.push(`- \`${member}\`: ${String(text)}`);
    }
  }

  if (schema.example !== undefined) {
    lines.push(`@example ${JSON.stringify(schema.example)}`);
  }

  if (schema.readOnly === true) {
    lines.push("@readonly Set by the API; ignored on write.");
  }

  if (schema.deprecated === true) {
    lines.push("@deprecated");
  }

  return renderDocLines(lines);
}

export function renderDocLines(lines: string[]): string {
  if (lines.length === 0) {
    return "";
  }

  return ["/**", ...lines.map((line) => ` * ${line}`.trimEnd()), " */"].join("\n");
}

export function isInterfaceShape(schema: JsonSchema): boolean {
  const additional = schema.additionalProperties;

  return (
    schema.type === "object" &&
    schema.enum === undefined &&
    schema.allOf === undefined &&
    schema.oneOf === undefined &&
    schema.anyOf === undefined &&
    Object.keys((schema.properties ?? {}) as Record<string, unknown>).length > 0 &&
    (additional === undefined || typeof additional === "boolean")
  );
}

function refName(ref: string, ctx: SchemaContext): string {
  const name = ref.startsWith(REF_PREFIX) ? ref.slice(REF_PREFIX.length) : "";

  if (!(name in ctx.schemas)) {
    throw new Error(`${ctx.location}: $ref "${ref}" does not resolve to a component schema.`);
  }

  return name;
}

function renderType(type: string, schema: JsonSchema, ctx: SchemaContext): string {
  switch (type) {
    case "null":
      return "null";
    case "boolean":
      return "boolean";
    case "integer":
    case "number":
      return "number";
    case "string":
      return "string";
    case "array":
      return schema.items === undefined
        ? "Array<unknown>"
        : `Array<${schemaToTs(schema.items as JsonSchema, ctx)}>`;
    case "object":
      return renderObject(schema, ctx);
    default:
      throw new Error(`${ctx.location}: unsupported schema type "${type}".`);
  }
}

function renderObject(schema: JsonSchema, ctx: SchemaContext): string {
  const properties = (schema.properties ?? {}) as Record<string, JsonSchema>;
  const additional = schema.additionalProperties;
  const index =
    additional !== undefined && typeof additional !== "boolean"
      ? `Record<string, ${schemaToTs(additional as JsonSchema, ctx)}>`
      : undefined;

  if (Object.keys(properties).length === 0) {
    return index ?? (additional === false ? "Record<string, never>" : "Record<string, unknown>");
  }

  const literal = `{\n${renderProperties(schema, ctx)}}`;

  return index ? `${literal} & ${index}` : literal;
}

function renderEnum(values: unknown[], types: string[], ctx: SchemaContext): string {
  const members = values.map((value) => {
    if (typeof value === "string") {
      return quote(value);
    }

    if (typeof value === "number" || typeof value === "boolean" || value === null) {
      return String(value);
    }

    throw new Error(`${ctx.location}: unsupported enum member ${JSON.stringify(value)}.`);
  });

  if (types.includes("null") && !members.includes("null")) {
    members.push("null");
  }

  return union(members);
}

function union(members: string[]): string {
  const unique = [...new Set(members)];
  const ordered = [
    ...unique.filter((member) => member !== "null"),
    ...unique.filter((member) => member === "null"),
  ];

  return combine(ordered, " | ");
}

function combine(members: string[], separator: string): string {
  if (members.length === 0) {
    return "never";
  }

  if (members.length === 1) {
    return String(members[0]);
  }

  return members
    .map((member) => (/[|&]/.test(member) && !member.startsWith("(") ? `(${member})` : member))
    .join(separator);
}
