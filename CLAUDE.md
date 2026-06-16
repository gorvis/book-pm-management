# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This is an **educational repository** for the textbook *Practical Product Management in the Age of AI & Post-Truth* by Guinevere Orvis. It is **not a commercial product**. The running case study is **Pulse**, a deliberately minimal personal health tracker that students clone, study, and extend as they work through the book.

Students contribute to this repo. Prefer clarity and simplicity over cleverness — code here is meant to be read and learned from. Keep changes small and well-scoped, and preserve Pulse's intentionally minimal surface area unless a change explicitly calls for more.

## Repository layout

This is a single repo with the app alongside book materials. Most code work happens in `pulse/`.

| Folder | Contents |
|--------|----------|
| `pulse/` | **The Pulse web app** (React + Vite). All app development happens here. |
| `artifacts/` | Product-file templates & examples (the book's deliverables) |
| `prompts/` | Versioned prompt files used in the book |
| `docs/` | Setup notes, repo rules, and architecture decisions |
| `readers/` | Reader/student work, organized by GitHub handle (`readers/<handle>/`) |

> Note: `book-pm-management-app/src/` is an empty placeholder — it is **not** the app. The app is `pulse/`.

## Commands

All app commands run from the `pulse/` directory:

```bash
cd pulse
npm install        # install dependencies
npm run dev        # Vite dev server — http://localhost:5173/book-pm-management/
npm run build      # production build to pulse/dist/
npm run preview    # serve the production build locally
```

There is currently **no test runner and no linter configured**. Don't claim tests pass — there are none to run.

## Deployment

`pulse/` is built and deployed to GitHub Pages automatically by `.github/workflows/deploy.yml` on every push to `main`. The workflow runs `npm ci` + `npm run build` inside `pulse/` and publishes `pulse/dist`.

Because the app is served from a subpath, `vite.config.js` sets `base: '/book-pm-management/'`. Keep this in mind for any asset paths or links — the dev server and the deployed site both live under `/book-pm-management/`.

## Architecture

The app is a small client-only SPA. There is **no backend, no database, and no accounts** — everything lives in the browser.

- **Entry point** — `src/main.jsx` mounts `<App>` inside MUI's `ThemeProvider` + `CssBaseline`, and loads the Space Grotesk / Inter web fonts.
- **`src/App.jsx`** is the root. There is **no router**: navigation is plain view-index state (`0=Dashboard`, `1=Log`, `2=History`) so the app works on GitHub Pages without server-side routing. App also owns the Settings dialog and edit/quick-add flows.
- **`src/hooks/useEntries.js`** is the single source of truth for data. It exposes `{ entries, add, update, remove, clearAll, loadSampleData }`, backed by `localStorage` under the key `pulse.entries`. On first run (or corrupted storage) it auto-loads generated sample data. **Route all entry mutations through this hook** — don't touch `localStorage` directly elsewhere.
- **`src/data/seed.js`** generates ~14 days of realistic sample entries with timestamps relative to today, so charts always look populated.
- **`src/components/`** — presentational/feature components: `Nav` (responsive Tabs on desktop, `BottomNavigation` on mobile via `useMediaQuery('(max-width:600px)')`), `Dashboard`, `LogForm`, `History`, `MetricCard`, `TrendChart`, `PulseLine`.

### Entry data model

Every record (sample or user-created) has the same shape:

```js
{
  id,          // uuid (from the `uuid` package)
  type,        // 'food' | 'steps' | 'water' | 'sleep'
  value,       // number
  unit,        // 'kcal' | 'steps' | 'ml' | 'hours'
  note,        // string (free text, e.g. meal name)
  timestamp,   // ISO 8601 string
}
```

The four `type` values (food, steps, water, sleep) are the core domain. Any feature touching entries should handle all four consistently.

## UI / styling conventions

- Use **React** and **Material UI (MUI v6)** for all UI. Build with MUI components rather than hand-rolled HTML/CSS, and use MUI's `sx` prop / theme for styling.
- Charts use **Recharts**. Pull colors from the design tokens exported by `src/theme.js` (`import { tokens } from '../theme'`) so charts match the theme.
- The look is a **dark, mono-violet theme** ("a quiet control panel at night") defined centrally in `src/theme.js`. Headings use **Space Grotesk** (uppercase, letter-spaced); body uses **Inter**. Add or change visual styling through the theme, not scattered inline overrides, so the aesthetic stays consistent.
- Respect accessibility cues already in place — e.g. `prefers-reduced-motion` gates the logo animation, and interactive elements carry `aria-label`s and stable `id`s.

## Contributing conventions

- Work happens off `main`; the GitHub Pages deploy triggers on merge to `main`.
- Student/reader deliverables (artifacts, prompts) go under `readers/<your-github-handle>/`.
- **Do not add AI/assistant attribution** to commits, PR descriptions, or code comments (no "Generated with…" / "Co-Authored-By" assistant lines).
