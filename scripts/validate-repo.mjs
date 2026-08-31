#!/usr/bin/env node
// Repository integrity validator for design-poster.
// Checks SKILL.md frontmatter, required files, and that every
// references/ file mentioned in SKILL.md actually exists.
// Usage: node scripts/validate-repo.mjs

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

// --- SKILL.md frontmatter ---
const skillPath = join(root, "SKILL.md");
check(existsSync(skillPath), "SKILL.md is missing");

let skill = "";
if (existsSync(skillPath)) {
  skill = readFileSync(skillPath, "utf8");
  check(skill.startsWith("---"), "SKILL.md must start with YAML frontmatter");
  const fmMatch = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  check(fmMatch !== null, "SKILL.md frontmatter is not closed with ---");
  if (fmMatch) {
    const fm = fmMatch[1];
    const name = fm.match(/^name:\s*(.+)$/m);
    check(name !== null, "frontmatter is missing 'name'");
    if (name) {
      const dirName = root.split(/[/\\]/).pop();
      check(
        name[1].trim() === dirName,
        `frontmatter name '${name[1].trim()}' does not match directory '${dirName}'`
      );
    }
    const desc = fm.match(/^description:\s*(.+)$/m) || fm.match(/^description:\s*>-?\s*$/m);
    check(desc !== null, "frontmatter is missing 'description'");
  }
}

// --- required files ---
for (const f of [
  "README.md",
  "README.en.md",
  "LICENSE",
  "CONTRIBUTING.md",
  ".gitignore",
  "references/carriers.md",
  "references/color-system.md",
  "references/typography.md",
  "references/prompt-templates.md",
  "references/checklist.md",
]) {
  check(existsSync(join(root, f)), `required file missing: ${f}`);
}

// --- references mentioned in SKILL.md must exist ---
const mentioned = [...skill.matchAll(/references\/([\w-]+\.md)/g)].map((m) => m[1]);
for (const ref of new Set(mentioned)) {
  check(
    existsSync(join(root, "references", ref)),
    `SKILL.md mentions references/${ref} but the file does not exist`
  );
}

// --- orphan references (exist but never mentioned anywhere) ---
if (existsSync(join(root, "references"))) {
  for (const f of readdirSync(join(root, "references"))) {
    const mentionedAnywhere =
      mentioned.includes(f) ||
      ["README.md", "README.en.md", "docs"].some((doc) => {
        const p = join(root, doc);
        try {
          if (typeof doc === "string" && doc.endsWith(".md")) {
            return readFileSync(p, "utf8").includes(`references/${f}`);
          }
          return true; // docs/ directory: skip deep check
        } catch {
          return false;
        }
      });
    if (!mentionedAnywhere) warnings.push(`references/${f} is not referenced by SKILL.md or README`);
  }
}

// --- leaked local paths ---
for (const [file, content] of [["SKILL.md", skill]]) {
  if (/C:\\\\Users|\/Users\/34155/.test(content)) {
    errors.push(`${file} contains a leaked local absolute path`);
  }
}

// --- report ---
if (warnings.length) {
  for (const w of warnings) console.warn(`WARN: ${w}`);
}
if (errors.length) {
  for (const e of errors) console.error(`ERROR: ${e}`);
  console.error(`\n${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exit(1);
}
console.log(`OK: design-poster repository structure is valid (${warnings.length} warning(s))`);
