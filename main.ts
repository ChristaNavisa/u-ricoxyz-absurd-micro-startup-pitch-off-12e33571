import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "GhostTyper: while your agent waits for your next prompt, it ghostwrites breakup texts for people too lazy to dump their situationship, at $5 a text with no follow-up questions asked.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function validateEntry(entry: string): void {
  const len = [...entry].length;
  if (len < 1 || len > 200 || entry.trim().length === 0) {
    throw new Error(`entry must be 1-200 characters, got ${len}`);
  }
}

function writeEntry(outDir: string, entry: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
}

validateEntry(ENTRY);
writeEntry(resolveOutDir(), ENTRY);
