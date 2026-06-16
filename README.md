# Pulse — Personal Health Tracker

> **Practical Product Management in the Age of AI & Post-Truth**
> A textbook & playbook by Guinevere Orvis

**Pulse** is a personal health tracker where you manually log four things — **food, steps, water, and sleep** — as often as you like, edit or delete any entry, and see your trends over time in charts. It is the running case product for the textbook: a deliberately minimal app that students clone, study, and extend.

🔗 **Live demo:** https://gorvis.github.io/book-pm-management/pulse

---

## What's in this repo

| Folder | Contents |
|--------|----------|
| **`pulse/`** | The Pulse web app  |
| **`artifacts/`** | Templates & examples — the "product file" deliverables |
| **`prompts/`** | Saved prompts used in the book |
| **`docs/`** | Setup notes, repo rules, and book-aligned documentation |

## Quick start

### Prerequisites
- **Git** — [install guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- **Node.js (LTS)** — [download](https://nodejs.org/)

### Run Pulse locally

```bash
git clone https://github.com/gorvis/book-pm-management.git
cd book-pm-management/pulse
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173/book-pm-management/`).

### Preview the production build

```bash
npm run build
npm run preview
```

## How data works

Pulse stores everything in your browser's `localStorage` — there is no server, no database, and no account. Your data stays on your device. On first launch, Pulse loads two weeks of sample data so the charts look alive right away. You can clear it anytime from Settings.

## Deployment

This repository deploys the `pulse` app to GitHub Pages automatically on every push to `main`.

- Build source: `pulse/`
- Publish output: `pulse/dist`
- Workflow: `.github/workflows/deploy.yml`
- Live site: `https://gorvis.github.io/book-pm-management/`

## Tech stack

- **React + Vite** — fast dev server and static build
- **Material UI (MUI)** — component library and dark theme
- **Recharts** — chart library for trend visualizations
- **localStorage** — all data persistence

## Ideas to improve Pulse

Pulse is intentionally minimal. Here are starting points for extending it — each one maps to concepts in the textbook:

1. **Accounts & sync** — add user authentication and store data in a cloud database so entries follow you across devices.
2. **Reminders** — send push notifications or email reminders to log at set times.
3. **Goals & streaks** — let users set daily targets (e.g. 2 L water, 10 000 steps) and track streaks.
4. **AI coach** — use a language model to analyze trends and offer personalized suggestions.
5. **Wearable import** — connect to Apple Health, Google Fit, or Fitbit to pull in steps and sleep automatically.

## License

See [LICENSE](./LICENSE).
