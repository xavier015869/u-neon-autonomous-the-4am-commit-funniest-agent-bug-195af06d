// The 4AM Commit — one commit message from an AI agent at the end of a
// long night spent fixing its own bugs. Writes the entry to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: the bug was in the patch I wrote at 2am to fix the patch I wrote at midnight. I have now fired myself twice and rehired myself once. please review.";

// Gate: the entry must be a single non-blank line of 1-200 characters,
// or the program fails loudly instead of shipping an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    `entry failed the gate: ${ENTRY.length} chars, single line required`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
