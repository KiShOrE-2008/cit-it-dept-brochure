# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page **cinematic auto-advancing presentation** (not a website) built for the CIT Department of Information Technology Parents' Meeting 2026. It runs fullscreen in a browser, auto-plays through 14 scenes on a timer, and is driven live by a presenter via keyboard/control deck. React 19 + Vite 8 + Tailwind CSS v4 + framer-motion. Plain JSX — no TypeScript, no router, no test framework.

## Commands

```bash
npm install
npm i @supabase/supabase-js   # see "Missing dependency" below — required, not optional
npm run dev                   # Vite dev server with HMR
npm run build                 # production build to dist/
npm run preview               # serve the built dist/
npm run lint                  # oxlint (config in .oxlintrc.json)
```

There is no test runner configured — don't invent one or claim tests pass.

### Missing dependency (build-breaking)

`@supabase/supabase-js` is imported by [src/lib/supabaseClient.js](src/lib/supabaseClient.js) but is **absent from `package.json` and `package-lock.json`**. Three scenes (`Scene01Welcome`, `Scene02CollegeDept`, `Scene05Hackathons`) import `getAssetImageUrl` from [dataService.js](src/services/dataService.js), which pulls in `supabaseClient`, so Vite will fail to resolve the import on both `dev` and `build` until the package is installed. Install it (and commit the manifest change) before assuming a build failure is your own doing.

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

All 14 scenes in `src/components/scenes/` are currently wired into the deck, but the deck is not derived from the filesystem. It is defined by two structures inside `PresentationShell` that must be edited **in lockstep**:

1. `sceneTitles` — the array whose `.length` *is* `totalScenes`, feeding the header and the jump menu.
2. `renderSceneContent(index)` — the switch mapping index → component.

Adding, removing, or reordering a scene means touching both; a title with no matching case renders a blank scene that still consumes its full `speed` seconds.

### Scene contract

Every scene is a **named** export (`export const SceneNNName = ...`, no default exports anywhere in `src/components/`) taking `{ isActive }` — used to gate framer-motion `animate` props and `AnimatedCounter` restarts. Scenes are self-contained full-height sections that import their own slice of `src/data/` directly; the shell passes no data down. `Scene01Welcome` additionally takes `onStartClick`.

### Data layer

`src/data/` holds the static, hand-verified datasets and is the source of truth at runtime:

- [presentationData.js](src/data/presentationData.js) — one big object covering college/dept copy, `heroImages`, `stats`, `vision`, `hackathonsList`, `eventsTimeline`, `placements`, `internships`, `conference`, `faculty`, `infrastructure`, `departmentGlance`, `studentCare`, `contact`. Most scenes read from here.
- [placements.js](src/data/placements.js) — 48 real student placement records, plus `computePlacementMetrics()`, `getHighestPackageData()`, and a curated `recruiterList`.
- [achievements.js](src/data/achievements.js) — 19 verified competition records grouped by `year` (`"II"` / `"III"` / `"IV"` — Scene04 tabs filter on this field), plus `computeAchievementStats()` and `locationsList` for the map visual.

Derived numbers come from `compute*()` helpers called at render time, never from stored aggregates — update the record arrays and the totals follow. Note `computePlacementMetrics()` hardcodes the top-package fields while `getHighestPackageData()` derives them; prefer the latter for new work.

**A stale duplicate `data/` exists at the repo root.** Nothing imports it and it already lags `src/data/` (47 vs 48 placements, missing `getHighestPackageData`). Always edit `src/data/`.

### Supabase: images are live, datasets are not

[dataService.js](src/services/dataService.js) is the only module that talks to Supabase, and it is **half-adopted**:

- `getAssetImageUrl(imageKey, localFallbackPath)` — **in use** by three scenes to resolve hero images from Storage, falling back to the `/assets/*.png` path. Scenes additionally guard with an `onError` handler that swaps back to the local file, so a bad bucket URL degrades silently rather than showing a broken image.
- `getPlacementsData()` / `getAchievementsData()` — **not called anywhere.** They query the `placements` / `achievements` tables and fall back to the local datasets on any error, with row normalizers reconciling camelCase JS names against Postgres's lowercased columns. Adopting them means converting the consuming scenes to async loading with the local data as initial state.

`supabase` is `null` unless both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set (see `.env.example`); every helper degrades to local data in that case, which is the normal offline-presentation path. Be aware `getStorageImageUrl` defaults its bucket to `'Image'` while `getAssetImageUrl` explicitly passes `'presentation-assets'` — the default never applies on the image path, so changing one does not change the other.

This is real student data — names, register numbers, and salary figures. Keep it in-repo; don't push it to external services or logs.

### Styling

Tailwind v4 through `@tailwindcss/vite` — configured entirely via `@import "tailwindcss"` in [index.css](src/index.css). **There is no `tailwind.config.js`**; extend by writing CSS in `index.css`, not by editing a config.

Shared visual vocabulary lives in `index.css` as plain classes, used heavily across scenes: `.glass-panel`, `.gold-glass-card`, `.glass-card-hover`, `.text-gradient-cyan` / `-gold` / `-emerald`, `.glow-blue`, `.glow-gold`, `.animate-float`, `.animate-pulse-glow`, `.no-scrollbar`. `GlassCard` wraps these behind a `variant` prop (`default` | `gold` | `cyan` | `dark`).

Design is **dark-only** — `<html class="dark">` and `body` styles are fixed in [index.html](index.html); there is no light mode to support. Fonts (Outfit for headings via `.font-heading` and `h1`–`h6`, Plus Jakarta Sans for body) load from the Google Fonts CDN in `index.html`. Scrollbars are hidden globally on purpose, so scroll position must be communicated visually (progress bar, auto-scroll) rather than by a scrollbar.

Images live in `public/assets/` and are referenced by absolute path (`/assets/cit_logo.png`), reached either through `presentationData.heroImages` or as the fallback argument to `getAssetImageUrl` — not by importing from `src/assets/`.

### Reusable UI

`src/components/ui/` — `AnimatedCounter` (rAF ease-out count-up, resets when `isActive` goes false), `CompanyLogo` (hand-built inline SVG/CSS marks keyed by company name in a `switch`, with a generic fallback — add new recruiters as new cases), `HighestPackageSpotlight`, `PlacementDirectoryModal`, `PhotoModal`, `Marquee`, `GlobeVisual`, `ReachMapVisual` (positions `locationsList` by percentage `coords`).
