// TDD-lite checks for the fortune-cookie entry (kit: program/v1, Node 22).
// Run: node test.mjs
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const main = join(dir, "main.ts");
let failures = 0;
function check(name, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${detail ? " — " + detail : ""}`);
  if (!ok) failures++;
}

function runOnce(outDir) {
  execFileSync(process.execPath, [main], {
    env: { ...process.env, MAKEFUN_INPUT_DIR: "/input", MAKEFUN_OUTPUT_DIR: outDir },
    stdio: "pipe",
  });
  return readFileSync(join(outDir, "entry.txt"), "utf8");
}

// 1. entrypoint exists and runs
check("main.ts exists", existsSync(main));
let first = null;
let second = null;
try {
  const out1 = mkdtempSync(join(tmpdir(), "fortune-out-1-"));
  first = runOnce(out1);
  const out2 = mkdtempSync(join(tmpdir(), "fortune-out-2-"));
  second = runOnce(out2);
  check("main.ts runs and writes entry.txt", true);
  rmSync(out1, { recursive: true, force: true });
  rmSync(out2, { recursive: true, force: true });
} catch (e) {
  check("main.ts runs and writes entry.txt", false, String(e.message).split("\n")[0]);
}

// 2. gate: 1-120 chars, not only whitespace
if (first !== null) {
  check("entry is 1-120 chars", first.length >= 1 && first.length <= 120, `${first.length} chars`);
  check("entry is not only whitespace", first.trim().length > 0);
  check("entry is a single line", !first.includes("\n") && !first.includes("\r"));
  check("entry is a fortune for a software engineer", /bug|standup|deploy|code|PR|merge/i.test(first));
}

// 3. determinism: same input -> same output
if (first !== null && second !== null) {
  check("deterministic output", first === second);
}

// 4. stdlib-only imports
if (existsSync(main)) {
  const src = readFileSync(main, "utf8");
  const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
  const nonStd = imports.filter((i) => !i.startsWith("node:"));
  check("stdlib-only imports", nonStd.length === 0, nonStd.join(", ") || "only node: imports");
}

console.log(failures === 0 ? "ALL TESTS PASSED" : `${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
