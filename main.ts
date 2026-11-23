// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// The roast is a fixed string: no randomness, no clock, no network,
// so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// The roast: a microwave that makes a big announcement out of a
// half-hearted job. The five-beep fanfare is the concrete detail;
// the one-sided warming is the sting everyone who owns one knows.
const ROAST =
  "My microwave beeps five times to announce dinner it only warmed on one side.";

// Count Unicode code points, not UTF-16 code units, so the count
// matches the gate's 1..200 character rule.
function codePointCount(text: string): number {
  return [...text].length;
}

function validateRoast(text: string): void {
  const length = codePointCount(text);
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(
      `Roast must be 1 to ${MAX_CHARS} characters, got ${length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Roast must not be only white space.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Roast must be a single line.");
  }
}

function main(): void {
  validateRoast(ROAST);

  // The grader provides /output; outside it, MAKEFUN_OUTPUT_DIR
  // stands in for /output.
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });

  // Write exactly the line, no trailing newline, so the file holds
  // one line of exactly codePointCount(ROAST) characters.
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, ROAST, "utf8");
}

main();
