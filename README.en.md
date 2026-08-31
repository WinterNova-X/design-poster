# Design Poster · Photo to Brand Packaging Identity Poster

![License](https://img.shields.io/badge/license-MIT-111111?style=flat-square)
![Skill](https://img.shields.io/badge/Skill-Agent-8CA9C0?style=flat-square)
![Format](https://img.shields.io/badge/format-3%3A4%20integrated%20board-B9CFE0?style=flat-square)
![Palette](https://img.shields.io/badge/palette-mist%20blue%20%2B%20dusty%20rose-C99A96?style=flat-square)

> 🌏 **中文说明: [README.md](./README.md)**

A design skill for AI agent environments (Claude Code / Codex / ZCode): it turns **each photo you upload** into a standalone **brand packaging identity presentation board** — by default an **integrated full board**: the photo subject's silhouette, pose and light are distilled into core graphics woven through the entire poster and applied across 5–8 packaging carriers, forming one coherent, extensible brand visual system.

It is not a filter and not a photo-to-illustration converter: the photo is the **seed**, the poster is the **system** — the photo grows graphics, the graphics grow a whole packaging language, all inside one board.

**Preview** (images live in `assets/`, generated from real campus × brand test runs):

<p>
  <img src="./assets/preview-01.png" width="32%" alt="Design Poster preview 1: MIXUE × UESTC SIGNAL 1956">
  <img src="./assets/preview-02.png" width="32%" alt="Design Poster preview 2: Chengdu College of Arts and Sciences WENLI">
  <img src="./assets/preview-03.png" width="32%" alt="Design Poster preview 3: MIXUE × Shanghai Jiao Tong University SNOW & SOURCE">
</p>

## What It Does

```text
┌──────────────────────────────┐
│ Headline (minimal mark or    │
│ marketing headline, optional)│
│  ┌──────┐ ┌──────┐ ┌──────┐  │
│  │ bag ★│ │ cup  │ │ box ★│  │  ← hero trio; the photo subject
│  └──────┘ └──────┘ └──────┘  │    is distilled into graphics
│  small items grid (tags,     │  ← mixed sizes, scale contrast,
│  tickets, stickers…)         │    negative space
│  ──────────────────────────  │
│  elements │ palette │ craft ││  ← info strip
└──────────────────────────────┘
   3:4 vertical · integrated board (default)
```

The photo no longer occupies its own zone: the subject's silhouette, pose and
light become a core mark printed on every carrier, sharing one palette, one
material language and one typography system with the rest of the board.

- **One poster per photo, never a collage.** Multiple photos each run the full pipeline and are numbered in order.
- Whether the source is a person, animal, plant, building, object, food, vehicle, or landscape, the packaging language is built from the photo itself — no fixed product combos, no repeated templates, no e-commerce display feel.

## 30-Second Start

```bash
# ZCode users
git clone https://github.com/WinterNova-X/design-poster.git ~/.zcode/skills/design-poster

# Claude Code users
git clone https://github.com/WinterNova-X/design-poster.git ~/.claude/skills/design-poster
```

Or paste this to any AI agent with shell access:

```text
Please install the design-poster skill. Clone
https://github.com/WinterNova-X/design-poster to ~/.zcode/skills/design-poster,
then verify SKILL.md and references/ exist.
```

Then upload a photo and say:

```text
Turn this photo into a packaging identity poster.
```

More prompts to try:

```text
Make a poster from this cat photo; the hero package should be a paper bag.
These two photos each get their own poster — do not combine them.
For this architecture photo, make sure the carrier set includes tickets.
```

## Highlights

- 🧩 **Integrated full board** — the photo subject is distilled into graphics woven through the entire board; no hard split
- ✏️ **Distillation, not copying** — 1 core mark + 1–2 supporting elements + 1 pattern, derived rather than traced from the photo
- 📦 **Theme-adaptive carriers** — 7 subject types × 28 carrier phrases; 5–8 items and 1–2 hero packages per run; no combo reuse across consecutive posters
- 🎨 **Locked palette** — powder / mist / sky blue over ivory / cream / beige / grey-green, with dusty rose accents capped at 10%
- 📄 **Real paper craft** — matte paper, textured card, glassine, embossing, die-cuts, folds; plastic gloss and exaggerated 3D rejected
- 🔤 **Typography as structure** — the title appears in full at most twice; vertical tags, curved labels, edge-running and seal-printed text; all copy is finalized before generation to prevent gibberish
- 🧪 **Graded QA** — P0 veto items + P1 core + P2 bonus checklist before delivery

## Good Fit / Poor Fit

**✅ Good fit**: pet and portrait keepsake posters, small-shop brand proposals, craft and cultural packaging concepts, travel and architecture visualization, showing a client how one photo grows into a brand

**❌ Poor fit**: portrait retouching, e-commerce hero images, pixel-faithful photo restoration, multi-image collages, data-dense infographic posters

## Color System

The locked palette is where series coherence comes from — **hue customization is not allowed**; only area and composition may change. Full values in [`references/color-system.md`](./references/color-system.md).

| Family | Colors | Area |
|------|------|------|
| Primary | powder blue `#B9CFE0` · mist blue `#8CA9C0` · sky blue `#A5C3D9` · airy cold blue `#CBDCE8` | 30–45% |
| Ground | ivory `#F4EFE6` · cream `#F7F3EA` · light beige `#E9E2D4` · soft grey-green `#C3CCC0` · architectural neutral `#D8D5CE` | 50–65% |
| Accent | dusty rose `#C99A96` / muted blush `#D9AFA7` (pick one as lead) | ≤10% |

If the source photo is warm-toned, it stays warm: the top half keeps its warmth while the packaging system holds the palette — a deliberate evidence-versus-system contrast.

## Carrier Library (by subject)

| Subject | Hero packages | Standard / bonus carriers |
|------|------|------|
| People / pets | paper bag, rigid box | hang tag, sticker sheet, postcard, badge, wrapping paper |
| Plants / florals | floral sleeve, seed box | seed packet, care card, round label, bookmark |
| Food / drinks | takeaway bag, meal box | cup sleeve, seal sticker, menu card, matchbox |
| Architecture / space | ticket booklet, guide sleeve | ticket, postcard, room sign, accordion leaflet |
| Objects / products | insert box, gift box set | slipcase, spec card, seal sticker, tote |
| Travel / transit | boarding-pass ticket, map fold | luggage tag, stickers, badge, stamp-fold |
| Landscapes | poster slipcase, stamp-fold | ticket, postcard set, print card, wrapping paper |

English prompt phrases and combination rules per carrier: [`references/carriers.md`](./references/carriers.md).

## Workflow

1. **Upload photo(s)** — each becomes its own poster
2. **Photo analysis** — subject type, 3 identifying features, light and color atmosphere, extension direction for 3:4
3. **Brand DNA** — core mark / supporting elements / pattern / English title / copy set
4. **Carrier selection** — read `references/carriers.md`, choose 5–8 by theme
5. **Layout and color** — presentation-board grid + locked palette + photo color mapping
6. **Copy finalization** — read `references/typography.md`, place every text item
7. **Prompt assembly** — read `references/prompt-templates.md`, output Chinese + English versions
8. **QA** — check against `references/checklist.md`; all P0 items must pass

If the agent environment can generate images, it generates directly; otherwise it delivers both finalized prompts for any image-to-image model (GPT-4o, Jimeng, Nano Banana, Midjourney, …).

## Copy Library

Pick a title style by subject type; numbers and category names mix freely:

| Subject | Title examples |
|------|-----------|
| People / pets | `MIST CAT` · `GOOD DOG` · `HER SUMMER` · `LITTLE NORTH` |
| Plants / florals | `SLOW BLOOM` · `FIELD 12` · `GREEN ROOM` |
| Food / drinks | `SLOW BAKE` · `DAILY LOAF` · `NO.7 KILN` |
| Architecture / space | `OLD WALL` · `NORTH PIER` · `GATE 9` |
| Travel / transit | `TRANSIT 24` · `PAPER ROADS` · `GOTO ISLAND` |
| Landscapes | `TIDE LINES` · `PALE HILLS` · `FIRST SNOW` |

- **Numbers**: `No.01` · `Edition 24` · `EST. 2026` · `VOL.3`
- **Category names**: `PAPER GOODS` · `BOTANICAL` · `BAKERY` · `FIELD NOTES` · `TRANSIT`
- **Micro notes**: `handle with care` · `keep in a cool place` · `slow baked, small batch` · `printed on recycled paper`

## Troubleshooting

When a render goes wrong, add the fix sentence at the indicated spot and regenerate:

| Symptom | Likely cause | Fix |
|------|--------|------|
| Subject stretched / warped / face changed | Weak top-half fidelity clause | Add to TOP: `preserve the subject exactly as photographed, no stretching, no warping, no repaint` |
| Looks like an e-commerce display | Carriers written as "a set of merchandise" | List carriers one by one + add: `presentation board layout, modular grid, generous negative space, not a product display` |
| Gibberish / invented text | Copy not finalized before generation | Write every string explicitly, end with: `All text exactly as specified, no other invented text`; if it persists, switch to GPT-4o / Nano Banana or generate a text-free version and overlay copy in a layout tool |
| Colors drift or turn muddy | Palette not named | Name every palette color per the template, keep `small dusty rose accents only` |
| Boxes turn plastic / 3D-rendered | Material wording too weak | Add: `matte paper craft only, no plastic gloss, no strong reflections, no exaggerated 3D render` |

## Repository Layout

```text
design-poster/
├── SKILL.md                        ← main skill file: workflow and rules
├── README.md                       ← Chinese guide
├── README.en.md                    ← this file
├── references/
│   ├── board-variant.md             ← integrated full-board layout (default) + marketing headline layer
│   ├── carriers.md                 ← carrier library: 7 subject types × phrases and combos
│   ├── color-system.md             ← locked palette, hex values, ratios, photo mapping
│   ├── typography.md               ← copy roles, placement patterns, anti-gibberish phrasing
│   ├── prompt-templates.md         ← CN/EN prompt skeletons and per-subject hooks
│   └── checklist.md                ← P0/P1/P2 graded QA checklist
├── scripts/
│   └── validate-repo.mjs           ← repo structure validator (used by CI)
├── docs/
│   └── design-notes.md             ← design rationale
├── assets/                         ← preview images (add before publishing)
└── .github/                        ← issue / PR templates and CI
```

## Design Principles

1. **Evidence vs. system** — the top half is photographic evidence; the bottom half is the brand system grown from it; they must share at least one color or graphic echo
2. **Distill, don't copy** — the bottom half shows graphic assets, never cropped or traced photo
3. **The palette is the identity** — every carrier shares one palette; only area and placement change
4. **Text is structure** — placement changes per carrier; titles are not stickers; all copy is finalized first
5. **Board over display** — grid, alignment, scale contrast, negative space; e-commerce feel and mockup dumps are rejected
6. **Carriers must be explained by the theme** — no fixed category list; the set regrows from each photo
7. **Paper first** — light exists only to reveal paper thickness and folds; plastic gloss is a veto

## Roadmap

- [ ] Real generated examples and preview images
- [ ] Carrier clusters for night markets, rainy streets, and other niche scenes
- [ ] A dark palette variant for night photos
- [ ] Multi-language subtitle typesetting rules (vertical Japanese / Korean)

## FAQ

**Do I need design experience?**
No. Upload a photo and ask "turn this into a poster" — the agent runs the pipeline.

**Want the original photo kept on top?**
**What if my environment cannot generate images?**
The skill outputs finalized Chinese and English prompts. Paste one prompt together with the original photo into any image-to-image model, one photo at a time.

**Why is copy finalized before generation?**
Image models hallucinate text. The skill writes every string and its placement into the prompt and appends "All text exactly as specified, no other invented text."

**Why can't I change the palette?**
Series coherence and the premium look come from constraint. Changing hues slides toward cheap product rendering; variety comes from shifting areas and placements within the palette.

**Text still renders as gibberish?**
Prefer models with stronger typography (GPT-4o / Nano Banana), or generate a text-free version and overlay the finalized copy in a layout tool.

**How do I update?**
Run `git pull` inside the skill directory.

## Contributing

Bugs, new carriers, new scenes, prompt improvements — issues and PRs welcome. Please prefer:

- New carriers go into `references/carriers.md` with an English phrase and target subject type
- Palette edits may only nudge lightness / saturation — no new hues
- New text placements go into `references/typography.md` with an English phrase
- Prompt changes update both the skeletons and the mistake table in `references/prompt-templates.md`
- Lessons learned go into `references/checklist.md` at the right severity

Run `node scripts/validate-repo.mjs` when the repo structure changes.

## License

MIT © 2026 WinterNova
