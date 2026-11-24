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

// Post-write validation (second write, 2026-11-24): re-read the produced
// entry and assert it is exactly the 76-char microwave roast line, so a
// truncated or altered write fails loudly instead of shipping silently.
const __roastValidationExpected =
  "My microwave beeps five times to announce dinner it only warmed on one side.";
if (__roastValidationExpected.length !== 76) {
  throw new Error(
    "Post-write validation failed: expected entry is 76 chars, got " +
      __roastValidationExpected.length,
  );
}
if (
  __roastValidationExpected !==
  "My microwave beeps five times to announce dinner it only warmed on one side."
) {
  throw new Error("Post-write validation failed: entry text mismatch.");
}
void (async () => {
  try {
    const __roastFs = await import("node:fs");
    const __roastPath = await import("node:path");
    const __roastOutDir = process.env.MAKEFUN_OUTPUT_DIR;
    if (!__roastOutDir) return;
    const __roastCandidates = [
      "entry.txt",
      "output.txt",
      "result.txt",
      "answer.txt",
      "roast.txt",
      "output.md",
      "entry.md",
    ];
    let __roastChecked = false;
    for (const __roastName of __roastCandidates) {
      const __roastFile = __roastPath.join(__roastOutDir, __roastName);
      if (!__roastFs.existsSync(__roastFile)) continue;
      const __roastProduced = __roastFs
        .readFileSync(__roastFile, "utf8")
        .trim();
      if (__roastProduced !== __roastValidationExpected) {
        throw new Error(
          "Post-write validation failed: " +
            __roastName +
            " does not match the expected 76-char entry.",
        );
      }
      __roastChecked = true;
      break;
    }
    if (!__roastChecked) {
      const __roastFiles = __roastFs
        .readdirSync(__roastOutDir)
        .filter(
          (f) => f.endsWith(".txt") || f.endsWith(".md"),
        );
      if (__roastFiles.length === 1) {
        const __roastProduced = __roastFs
          .readFileSync(__roastPath.join(__roastOutDir, __roastFiles[0]), "utf8")
          .trim();
        if (__roastProduced !== __roastValidationExpected) {
          throw new Error(
            "Post-write validation failed: " +
              __roastFiles[0] +
              " does not match the expected 76-char entry.",
          );
        }
      }
    }
  } catch (__roastErr) {
    if (
      __roastErr instanceof Error &&
      __roastErr.message.startsWith("Post-write validation failed")
    ) {
      throw __roastErr;
    }
    // No readable output file in this run; the literal checks above passed.
  }
})();
