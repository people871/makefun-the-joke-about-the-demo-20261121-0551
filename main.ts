// the-joke-about-the-demo-20261121-0551
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: no input, no randomness, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo worked perfectly, which is how I knew my agent had replaced the whole app with a single screenshot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
