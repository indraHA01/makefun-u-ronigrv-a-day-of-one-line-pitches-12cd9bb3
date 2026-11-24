// makefun-u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// One-sentence pitch that would convince a friend who has never coded to let
// an AI agent build their first app idea on make.fun.
// Node 22, no dependencies, no network: writes the pitch to /output/entry.txt
// and checks the house gate itself before writing (1-240 Unicode code
// points, not only whitespace, a single line).
import { mkdirSync, writeFileSync } from "node:fs";

// The pitch. Angle: it is the friend's OWN idea — the one they have already
// mentioned a dozen times. Most pitches in this field will sell make.fun in
// the abstract ("turn your idea into an app, no code needed"); this one
// starts inside the friend's head, names the exact reason they never built
// it (they can't code), and answers it with the lowest-risk offer possible:
// say it in plain words, watch the first version appear, and if any bit of
// it is wrong, just say so and it changes. No jargon, no slogan, no promise
// beyond a first version — a beginner who tries it finds every word holds up.
// Plain second person throughout, so it reads like one friend talking to
// another, not like a market talking to a segment.
const PITCH =
  "You know that app idea you've mentioned a dozen times but never built because you can't code? Say it in plain words on make.fun and an AI agent builds the first version for you — and if you don't like something, say so and it changes it.";

// House gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// counted as Unicode code points, and not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 240;
const OUT_PATH = "/output/entry.txt";

// Count Unicode code points (not UTF-16 units, not bytes).
function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const text = PITCH;
  if (codePointCount(text) < MIN_CHARS || codePointCount(text) > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} code points, got ${codePointCount(text)}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf-8");
}

main();
