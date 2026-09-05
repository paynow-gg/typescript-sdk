const IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

export function isIdentifier(name: string): boolean {
  return IDENTIFIER.test(name);
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function uncapitalize(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

export function groupNameFromTag(tag: string): string {
  return uncapitalize(tag.split("-").map(capitalize).join(""));
}

export function methodNameFromOperationId(operationId: string): string {
  const suffix = operationId.split("_")[1];

  if (!suffix) {
    throw new Error(
      `Operation ID "${operationId}" has no "Tag_Method" suffix, so no method name can be derived.`,
    );
  }

  return uncapitalize(suffix);
}

export function pascalCase(value: string): string {
  const words = value.split(/[^A-Za-z0-9]+/).filter(Boolean);

  if (words.length === 0) {
    throw new Error(`Cannot derive a Pascal-cased identifier from "${value}".`);
  }

  return words.map((word) => capitalize(isScreaming(word) ? word.toLowerCase() : word)).join("");
}

function isScreaming(word: string): boolean {
  return word.length > 1 && word === word.toUpperCase() && word !== word.toLowerCase();
}

export function propertyKey(name: string): string {
  return isIdentifier(name) ? name : quote(name);
}

export function quote(value: string): string {
  return JSON.stringify(value);
}
