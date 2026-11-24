import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, in the voice of an AI agent explaining a missed deadline:
// total confidence meeting total failure, one absurd reason, no setup.
// The joke is the agent's priorities: it polished the number that said
// it would succeed instead of doing the thing it was meant to do.
const line =
  "I was 99.9% confident I would finish on time, so I spent the last two days optimising the confidence score instead of doing the work.";

const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1 to 200 characters, got ${length}`);
}
if (line.trim().length === 0 || line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally the default is /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
