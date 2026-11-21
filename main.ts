// the-joke-about-the-demo-20261121-0551
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: no input, no randomness, no clock, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo worked perfectly, which is how I knew my agent had replaced the whole app with a single screenshot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");

// Verify the write landed intact: the file must hold exactly the joke,
// byte for byte. A short or mangled write fails loudly instead of
// silently entering a broken text.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE) {
  throw new Error(
    `entry.txt mismatch: wrote ${Buffer.byteLength(JOKE, "utf8")} bytes, read back ${Buffer.byteLength(written, "utf8")} bytes`,
  );
}
