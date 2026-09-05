import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname } from "node:path";
import { OUTPUT_DIR, SPECS } from "./gen/config.js";
import { emitClient, emitTypes } from "./gen/emit.js";
import { loadSpec } from "./gen/load.js";
import { buildModule } from "./gen/normalize.js";

async function generate(): Promise<void> {
  rmSync(OUTPUT_DIR, { recursive: true, force: true });

  for (const config of SPECS) {
    const spec = await loadSpec(config);
    const module = buildModule(config, spec.schemas, spec.operations);

    write(`${OUTPUT_DIR}/${config.name}/types.ts`, emitTypes(module));

    if (module.typesOnly) {
      console.log(`${config.name}: ${module.types.length} types`);

      continue;
    }

    write(`${OUTPUT_DIR}/${config.name}/client.ts`, emitClient(module));

    const methods = module.groups.reduce((total, group) => total + group.operations.length, 0);

    console.log(
      `${config.name}: ${module.types.length} types, ${module.groups.length} groups, ${methods} methods`,
    );
  }

  format(OUTPUT_DIR);
}

function write(path: string, contents: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${contents.replace(/\r\n/g, "\n").trimEnd()}\n`, "utf8");
}

function format(path: string): void {
  const biome = createRequire(__filename).resolve("@biomejs/biome/bin/biome");
  execFileSync(process.execPath, [biome, "check", "--write", path], { stdio: "inherit" });
}

generate().catch((error: unknown) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
});
