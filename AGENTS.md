# AGENTS.md

## Project overview

Single-page portfolio site — Vite + React 19 + Tailwind CSS v4 + Framer Motion + Lucide React. Static deployment target (Vercel). Built incrementally across stages; see `PROJECT_STATE.md` and `TODO.md` before any session.

## First steps in any session

1. Read `PROJECT_STATE.md` (current stage, decisions, known issues, next task).
2. Read `TODO.md` (running task list).
3. Read `README.md` (setup, folder structure, content editing).
4. Run `npm install` then `npm run dev` to verify current state.

## Commands

| Task | Command |
|---|---|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview prod build | `npm run preview` |
| Lint | `npm run lint` (oxlint, **not** ESLint) |

No typecheck, test, or formatter commands exist. Lint is the only verification step.

## Key conventions

- **All editable content** (name, role, technologies, bio, skills, social links) lives in `src/data/portfolio.js`. Edit that file; do not hardcode text in components.
- **Tailwind v4**: no `tailwind.config.js`. Design tokens are in `src/index.css` under `@theme` and consumed as Tailwind utilities (e.g. `bg-blue-600`, `text-blue-glow`). Do not hardcode hex values in components.
- **Linter**: oxlint with `.oxlintrc.json` (React plugins enabled). Not ESLint.
- **Icons**: `lucide-react` for most icons. `BrandIcons.jsx` provides hand-authored GitHub/LinkedIn SVGs (lucide-react v1 dropped trademarked logos).
- **Animations**: Framer Motion. `prefers-reduced-motion` is respected globally and in `TechBackground` and `TypingTechnologies`.
- **Sections** live in `src/sections/`, reusable UI pieces in `src/components/`.
- After meaningful changes, update `PROJECT_STATE.md` and `TODO.md`.

## Hard rules

- Never invent personal details (employers, titles, dates, achievements). Use `YOUR_*` placeholders in `src/data/portfolio.js`.
- No fake skill percentage bars.
- Dark palette only (near-black base, blue accents). No full-page blue.
- No hard border/ring around the profile photo.
- Full responsiveness at 320/375/425/768/1024/1280/1440px+. No horizontal scroll.
