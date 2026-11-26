// Fortune Cookie Funnies for Engineers — make.fun entry.
// Writes one fortune-cookie line for a software engineer to
// $MAKEFUN_OUTPUT_DIR/entry.txt (stdlib only, deterministic).
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const FORTUNE =
  "The bug you feared all week takes 4 minutes to fix. Telling standup about it takes 3 hours.";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir; // No input data for this competition; the fortune is fixed.

// Resolve from the script location, never from the working directory.
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), FORTUNE, "utf8");
