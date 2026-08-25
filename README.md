# Jeevi — Software Engineer Portfolio

A premium, futuristic single-page portfolio for a Software Engineer,
built as a real product rather than a generic template.

**Status:** Stage 2 of 8 complete (Navbar + Hero). See `PROJECT_STATE.md`
for full detail and `TODO.md` for the task list.

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`,
  config lives in `src/index.css` under `@theme` — no
  `tailwind.config.js`)
- [Framer Motion](https://motion.dev/) for animation
- [Lucide React](https://lucide.dev/) for icons (plus two hand-authored
  brand icons for GitHub/LinkedIn, since lucide-react v1 removed
  trademarked logo icons)

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

## Deployment

Built for static deployment on [Vercel](https://vercel.com/):

1. Push this repo to GitHub.
2. Import it in Vercel — framework preset "Vite" is auto-detected.
3. Build command: `npm run build`. Output directory: `dist`.

No environment variables or backend are required at this stage.

## Folder Structure

```
src/
├── components/       Reusable pieces (Navbar, icons, cards, etc.)
├── sections/         Full page sections (Hero, About, Skills, ...)
├── data/
│   └── portfolio.js  Single source of truth for all editable content
├── assets/           Images and static assets
├── App.jsx
└── main.jsx
```

## Editing Content

All personal content — name, role, technologies, bio, skills,
experience, projects, and contact/social links — lives in
**`src/data/portfolio.js`**. Edit that file; you should not need to
touch component code to update text or links.

To add a real profile photo, drop the image in `src/assets/` and set:

```js
photo: new URL('../assets/your-file.jpg', import.meta.url).href
```

in the `profile` object inside `src/data/portfolio.js`.

## Continuing Development (for future Claude sessions or contributors)

This project is built incrementally across multiple sessions. Before
making any change:

1. Read `PROJECT_STATE.md` — the project's permanent memory (current
   stage, decisions made, known issues, next task).
2. Read `TODO.md` — the running task list.
3. Inspect the actual source code — don't assume prior work is
   missing or needs rebuilding.
4. Make the smallest clean change that accomplishes the request.
5. Update `PROJECT_STATE.md` and `TODO.md` after any meaningful change.

Never invent personal details (employers, titles, dates, achievements).
Missing information should stay as a clearly-named placeholder
(`YOUR_EMAIL`, `YOUR_GITHUB`, etc.) in `src/data/portfolio.js`.
