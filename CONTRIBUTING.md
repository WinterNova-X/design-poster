# Contributing

Thanks for helping improve `design-poster`.

This project is a Skill for AI agents that turn photos into brand packaging identity posters. The most useful contributions are specific, reproducible, and backed by real generated output.

## Before Opening an Issue

Check whether the problem belongs to one of these buckets:

- Top-half fidelity: the photo subject is stretched, repainted, or over-graded.
- Division drift: the 50/50 split is ignored or the ratio is wrong.
- Bottom-half quality: carriers look like an e-commerce display, graphics are photo copies, or the layout is a mockup dump.
- Palette drift: colors fall outside the locked family or dusty rose exceeds 10%.
- Typography: gibberish text, repeated title stamps, or invented copy.
- Documentation: installation, prompts, or references are unclear.

The generated image plus the final prompt are far more useful than a description alone.

## Pull Request Guidelines

Keep PRs focused. A small fix with a before/after poster is easier to review than a large rewrite.

- New carriers go into `references/carriers.md` with an English prompt phrase, a target subject type, and a note on size/orientation contrast.
- Palette edits may only nudge lightness or saturation within the existing family — no new hues.
- New text placements go into `references/typography.md` with an English phrase and a target carrier.
- Prompt skeleton changes must update both the English and Chinese skeletons and the mistake table in `references/prompt-templates.md`.
- Workflow changes go into `SKILL.md` and must keep the step numbering intact.
- Lessons learned go into `references/checklist.md` at the matching severity (P0 / P1 / P2).

## Validation

Run the repository validator when files or links change:

```bash
node scripts/validate-repo.mjs
```

For rule changes, run the full SKILL.md workflow on at least one real photo (a person/pet case and one non-portrait case are ideal) and attach the results.

## Good PRs Usually Include

- A short summary of the problem.
- The exact files changed.
- Before / after generated posters when rules change.
- A note on which image model produced the results.

## Style Notes

This Skill is opinionated by design: the locked palette, the 50/50 division, and the finalized-copy rule exist because constraints make AI-generated posters more reliable. When in doubt, preserve the existing constraints and improve the workflow around them.
