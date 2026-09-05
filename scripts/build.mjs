import { execFileSync } from "node:child_process";
import { rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

function run(bin, args) {
  execFileSync(process.execPath, [require.resolve(bin), ...args], { stdio: "inherit" });
}

run("tsx/cli", ["src/generate.ts"]);

rmSync("dist", { recursive: true, force: true });

for (const project of ["tsconfig.cjs.json", "tsconfig.esm.json"]) {
  run("typescript/bin/tsc", ["-p", project]);
}

writeFileSync("dist/cjs/package.json", `${JSON.stringify({ type: "commonjs" }, null, 2)}\n`);
writeFileSync("dist/esm/package.json", `${JSON.stringify({ type: "module" }, null, 2)}\n`);
