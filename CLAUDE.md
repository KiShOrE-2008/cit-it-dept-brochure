# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page **cinematic auto-advancing presentation** (not a website) built for the CIT Department of Information Technology Parents' Meeting 2026. It runs fullscreen in a browser, auto-plays through 8 scenes on a timer, and is driven live by a presenter via keyboard/control deck. React 19 + Vite 8 + Tailwind CSS v4 + framer-motion. Plain JSX — no TypeScript, no router, no test framework.

## Commands

```bash
npm install
npm run dev       # Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the built dist/
npm run lint      # oxlint (config in .oxlintrc.json)
```

There is no test runner configured — don't invent one or claim tests pass.

Lint currently emits 4 known warnings (two unused vars in the seed script, `set-state-in-effect` in `AnimatedCounter`, and `toggleFullscreen` self-capture in `PresentationShell`). Zero errors — treat any *new* warning as yours.

### Seeding Supabase

Tables must exist first — run [supabase_schema.sql](supabase_schema.sql) in the Supabase SQL Editor, then:

```bash
node scripts/seedSupabaseDirect.js   # reads .env itself; upserts placements + achievements
```

The script prefers `SUPABASE_SERVICE_ROLE_KEY`, falling back to `VITE_SUPABASE_ANON_KEY`.

## Architecture

### The shell owns everything

[PresentationShell.jsx](src/components/presentation/PresentationShell.jsx) is the single orchestrator. [App.jsx](src/App.jsx) just mounts it. It holds all presentation state (`currentScene`, `isPlaying`, `speed`, `elapsed`, `isFullscreen`) and implements:

- **Autoplay timer** — a 100ms interval accumulates `elapsed`; at `speed` seconds (default 22) it advances and wraps from the last scene back to 0.
- **Auto-scroll** — the *same* timer writes `container.scrollTop` directly, easing the active scene's scroll container to the bottom over `speed * 0.85` seconds. Scenes taller than the viewport are meant to reveal themselves this way.
- **Boundary-aware wheel navigation** — `handleWheel` lets the scene scroll natively until it hits top/bottom, only then flipping scenes, throttled to 700ms. Don't add competing scroll handlers inside scenes.
- **Keyboard** — Space toggles play, arrows navigate, `f` toggles fullscreen.
- **Transitions** — `AnimatePresence mode="wait"` keyed on `currentScene`, with an opacity/scale/blur cinematic wipe.

### The deck is defined in two places that must stay in sync

The deck is **not** derived from the filesystem. It is defined by two structures inside `PresentationShell` that must be edited **in lockstep**:

1. `sceneTitles` — the array whose `.length` *is* `totalScenes`, feeding the header and the jump menu.
2. `renderSceneContent(index)` — the switch mapping index → component.

Adding, removing, or reordering a scene means touching both; a title with no matching case renders a blank scene that still consumes its full `speed` seconds.

Current deck — 8 scenes, filenames aligned to deck order:

| # | Scene | Source of truth |
|---|---|---|
| 1 | `Scene01Welcome` | `presentationData` |
| 2 | `Scene02CollegeDept` | `presentationData` |
| 3 | `Scene03VisionMission` | `presentationData.vision` |
| 4 | `Scene04AcademicToppers` | `academicToppers` |
| 5 | `Scene05Hackathons` | Supabase `achievements` + `hackathonFeatures` |
| 6 | `Scene06Events` | `presentationData.events` |
| 7 | `Scene07Placements` | Supabase `placements` |
| 8 | `Scene08DepartmentGlance` | `presentationData.departmentGlance` |

### Scene contract

Every scene is a **named** export (`export const SceneNNName = ...`, no default exports anywhere in `src/components/`) taking `{ isActive }` — used to gate framer-motion `animate` props and `AnimatedCounter` restarts. Scenes are self-contained full-height sections that import their own slice of `src/data/` directly; the shell passes no data down. `Scene01Welcome` additionally takes `onStartClick`.

Scenes that read Supabase seed `useState` with the local dataset and overwrite it from an async fetch in `useEffect`, guarded by a `cancelled` flag. This keeps the deck fully functional offline — important for a live presentation where the venue network may not cooperate.

### Data layer

`src/data/` holds the static, hand-verified datasets and is the source of truth at runtime:

- [presentationData.js](src/data/presentationData.js) — college/dept copy, `heroImages`, `stats`, `vision` (quote + 5 `mission` statements), `events` (5 records), `departmentGlance` (9 tiles), plus several keys left over from retired scenes (`internships`, `conference`, `faculty`, `infrastructure`, `studentCare`, `achievements`, `hackathonsList`) that nothing currently renders.
- [placements.js](src/data/placements.js) — 47 student placement records with **numeric** `package` values, plus `formatPackage()`, `computePlacementMetrics()`, `getHighestPackageData()`, `getTopCompanies()`, and a curated `recruiterList`.
- [achievements.js](src/data/achievements.js) — 19 competition records grouped by `year` (`"II"`/`"III"`/`"IV"`), plus `computeAchievementStats()` and `locationsList`.
- [academicToppers.js](src/data/academicToppers.js) — **generated**, see below.
- [hackathonFeatures.js](src/data/hackathonFeatures.js) — maps storage image keys to achievement rows.

Derived numbers come from `compute*()` helpers called at render time, never from stored aggregates — update the record arrays and the totals follow.

**A stale duplicate `data/` exists at the repo root.** Its `.js` files are not imported by anything and already lag `src/data/`. It also holds the real source documents (`events.md`, `department_glance.md`, `vission_and_vission.md`, and the results `.xlsx`). Always edit `src/data/` for code; treat root `data/*.md|xlsx` as inputs.

### Academic toppers are generated, not hand-written

[academicToppers.js](src/data/academicToppers.js) is extracted from `data/II - III - IV - IT-SEM RESULT_ANALYSIS (1).xlsx`. The app never reads `.xlsx` at runtime. Regenerating requires care — the sheets are not uniform:

- Sheet→year: `sheet1` = II IT (Sem III), `sheet5` = III IT (Sem V), `sheet9` = IV IT (Sem VII).
- **Column layouts differ.** II/III: GPA `[17]`, credits `[15]`, full load 23. IV: GPA `[14]`, credits `[12]`, full load 16.
- **Filter to full-credit students before ranking.** Without it the IV IT sheet ranks students who completed only 5 of 16 credits (GPA 10.00) above everyone else. This drops IV IT from 123 rows to 60.
- The `CGPA` column reads `62` on every row in all sheets — an artifact, not data. Only semester GPA is usable. IV IT's `P/F` column reads `F` for all 123 rows and is likewise unusable.
- Ranking is GPA desc, tie-break by register number, cut at top 5. **Ties land on the rank-5 boundary in all three years**, so four students with GPAs identical to a listed topper are currently excluded — see the plan file for names if this needs revisiting.

### Supabase

[dataService.js](src/services/dataService.js) is the only module that talks to Supabase:

- `getAssetImageUrl(imageKey, localFallbackPath)` — resolves an image from Storage, falling back to a local `/assets/*.png`. Scenes additionally guard with an `onError` handler that swaps back to the local file.
- `getPlacementsData()` / `getAchievementsData()` — query the tables and fall back to the local datasets on any error, with row normalizers reconciling camelCase JS names against Postgres's lowercased columns.

**The storage bucket is `Image`** (verified: it responds with object-level `NoSuchKey`, while a bucket that doesn't exist returns `NoSuchBucket`). An earlier `presentation-assets` bucket does **not** exist — if you see that string reappear, it's a regression.

`supabase` is `null` unless both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set (see `.env.example`); every helper degrades to local data in that case, which is the normal offline path. There is no `.env` in the repo.

The four `hackathon_*.jpg` keys in [hackathonFeatures.js](src/data/hackathonFeatures.js) are **inferred and unverified** — anonymous bucket listing requires an API key. If a hackathon photo doesn't appear, list the bucket and correct `imageKey`; nothing else needs to change. Matching prefers `achievementId` over `competition` because two rows share the BuildFest name (a 1st and a 3rd prize entry).

### Privacy constraint

The datasets contain real student names, register numbers, and salary figures. **`Scene07Placements` deliberately renders company-level data only** — no names, no register numbers. Keep it that way; the aggregation helper `getTopCompanies()` returns no identity fields by design. Note that `placementsData` is still bundled as the offline fallback, so names exist in the JS bundle even though nothing displays them.

### Styling

The visual identity is **Illuminated Ledger** — a leather-bound convocation record lit with jewel pigments and real gold leaf. It came from the `design-upgrade` branch (merged) and was then pushed for contrast and weight, because the audience is parents in a hall, not designers at a monitor.

Tailwind v4 through `@tailwindcss/vite`. **There is no `tailwind.config.js`** — the palette and type roles are defined as `@theme` tokens in [index.css](src/index.css), which is what generates `text-brass-bright`, `bg-ink-raised`, `border-line` and friends. Extend by adding tokens there, never by adding a config file, and never by reaching for stock Tailwind colours (`slate-*`, `cyan-*`, `amber-*`) — they are off-palette and will look wrong.

- **Ground:** `ink` / `ink-raised` / `ink-deep`.
- **Text:** `parchment` is the working text colour. `parchment-dim` is for metadata only, `parchment-faint` for the faintest annotation. If a parent needs to read it, it is `parchment`.
- **Jewel inks:** `brass`, `oxblood`, `verdigris`, `sapphire`, each with `-soft` and `-bright` variants. `-bright` is the projector-legible one used for headings and figures.
- **Each scene is assigned one chapter ink** so the deck visibly changes colour as it advances: 01 brass, 02 sapphire, 03 verdigris, 04 brass, 05 oxblood, 06 sapphire, 07 verdigris, 08 brass.

`.gilt` is the signature: a layered metallic gradient with a slow specular sweep, clipped to text (`.gilt-bar` for rules and blocks). **Reserve it for the single most important figure in a scene** — the top GPA, the highest package. Using it more than once per scene destroys the effect.

Type: Fraunces (display, `font-display`, set at 700–800), Source Serif 4 (body, `font-body`), IBM Plex Mono (data and labels, `font-mono`). Loaded from the Google Fonts CDN in [index.html](index.html); add weights there before using them. `.tabular-lining` for any figure that sits in a column.

Motion is centralised in [lib/motion.js](src/lib/motion.js) — `stage` (parent, staggers children), `fadeUp`, `riseMask`, `drawRule`, `drawRuleV`. Scenes compose these as framer-motion `variants` and drive them with `animate={isActive ? 'show' : 'hidden'}`; don't hand-roll per-element delays. `prefers-reduced-motion` is honoured globally, including the gilt sweep.

Images live in `public/assets/` and are referenced by absolute path (`/assets/cit_logo.png`), reached either through `presentationData.heroImages` or as the fallback argument to `getAssetImageUrl` — not by importing from `src/assets/`.

### Reusable UI

`src/components/ui/` is deliberately small — only what the 8 scenes use:

- `SceneHeader` — the recurring masthead: drawn rule + mono kicker in the chapter ink, then a heavy display headline revealing line by line. `accentLine` inks one line of the title. Every content scene opens with this.
- `Figure` — a struck number over a tracked mono label. Takes `tone`, `size`, and `gilt`; wraps `AnimatedCounter` when the value is numeric.
- `Panel` — a bordered leaf with a top rule. `variant="wash"` tints lightly, `variant="block"` carries real colour weight.
- `LedgerRow` — label left, figure right, for anything that is fundamentally a record.
- `MaskReveal` — wraps a line of text so the parent `stage` drives its rise.
- `AnimatedCounter` — rAF ease-out count-up; resets when `isActive` goes false.
- `CompanyLogo` — Microsoft keeps its authentic four-square mark; every other recruiter resolves to an initials seal in the given `tone`, so a new company needs no code.

`Atmosphere` (static paper grain + vignette) and `FolioSpine` (the permanent left-edge book spine carrying scene title and progress) live in `src/components/presentation/` and are mounted once by the shell.

Components for retired scenes (`GlassCard`, `GlobeVisual`, `ReachMapVisual`, `PhotoModal`, `Marquee`, `HighestPackageSpotlight`, `PlacementDirectoryModal`, `CinematicAchievementSpotlight`) were deleted — recover from git history rather than rewriting if a scene comes back.
