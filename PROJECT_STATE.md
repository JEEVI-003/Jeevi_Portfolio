# PROJECT_STATE.md

This file is the project's permanent memory. Read this, TODO.md, and
README.md at the start of every session before touching code.

---

## Current Stage

**Stage 2 complete** (Navbar + Hero). Stages 3–8 not started.

## Current Status

Working, builds cleanly, dev server runs without errors. Only the Hero
section exists as real content; all other sections are empty anchor
placeholders (`<div id="about" />`, etc.) so navbar smooth-scroll links
resolve without breaking.

## Completed Work

- Vite + React project scaffolded.
- Tailwind CSS v4 configured via `@tailwindcss/vite` plugin (no
  `tailwind.config.js` needed — tokens live in `src/index.css` under
  `@theme`).
- Framer Motion and Lucide React installed.
- Folder architecture created: `components/`, `sections/`, `data/`,
  `assets/`.
- `src/data/portfolio.js` created as the single source of truth for
  editable content (name, role, technologies, nav links, socials, and
  stubs for about/skills/experience/projects/contact used by later
  stages).
- Design token system defined in `src/index.css` (`@theme` block):
  colors, fonts, focus states, scrollbar, reduced-motion handling.
- Components built:
  - `Navbar.jsx` — sticky, scroll-aware background/blur, active-section
    highlighting via `IntersectionObserver`, animated underline,
    mobile hamburger menu with smooth open/close.
  - `TechBackground.jsx` — canvas-based node/connection network,
    the Hero's signature visual. Density scales down on mobile,
    freezes under `prefers-reduced-motion`.
  - `TypingTechnologies.jsx` — terminal-style looping typing/erasing
    animation cycling through `heroTechnologies`. Falls back to a
    slower non-character-by-character cycle under reduced motion.
  - `ProfilePhoto.jsx` — soft ambient blue glow (no hard border/ring),
    gentle float animation, subtle scale on hover. Falls back to a
    placeholder icon if `profile.photo` is null.
  - `BrandIcons.jsx` — inline GitHub/LinkedIn SVG icons (lucide-react
    v1 dropped trademarked brand icons, so these are hand-authored to
    match the icon set's visual weight).
- `sections/Hero.jsx` built: staged Framer Motion entrance (background
  → photo → name → role → typing → description → CTAs), desktop
  split layout (text left / photo right), mobile stacked layout
  (photo → name → role → typing → description → buttons), CTA buttons
  (View Projects, Contact Me), social icon links.
- `index.html` updated with title, meta description, theme-color, and
  Open Graph tags.
- Production build verified (`npm run build` succeeds, no errors).

## In Progress

Nothing actively in progress. Stage 2 is done and stable.

## Next Task

**Stage 3: About + Skills sections.**

- Build `sections/About.jsx` using `about.paragraphs` from
  `src/data/portfolio.js`. Recruiter-readable, no invented claims.
- Build `sections/Skills.jsx` using `skillGroups` from the data file.
  Use cards/badges — explicitly no fake percentage bars.
- Build supporting components (`SectionHeading.jsx`, `SkillCard.jsx`)
  under `src/components/`.
- Wire both into `App.jsx`, replacing the `<div id="about" />` and
  `<div id="skills" />` placeholders.
- Add scroll-triggered reveal animation (fade/slide/stagger) per
  section, distinct rhythm from the Hero's entrance.
- Update this file and TODO.md afterward.

## Design Decisions

- **Palette**: near-black base (`--color-bg: #05070d`, alt
  `#080b12`, surface `#0b0f17`), blue accents
  (`--color-blue-600: #2563eb`, `--color-blue-500: #3b82f6`,
  glow `--color-blue-glow: #60a5fa`). All tokens live in
  `src/index.css` under `@theme` and are consumed as Tailwind
  utilities (`bg-blue-600`, `text-blue-glow`, etc.) — do not
  hardcode hex values in components.
- **Typography**: `Space Grotesk` for display/headings (name, role,
  section titles), `Inter` for body copy, `JetBrains Mono` for the
  typing animation and small eyebrow/label text — a deliberate nod to
  a software engineer's world (terminal/code) without going
  full "hacker" neon.
- **Signature element**: the canvas network background in the Hero
  (`TechBackground.jsx`) paired with the terminal-style typing text.
  This is the one place the design "shows off" — everything else
  stays disciplined and quiet.
- **Photo treatment**: soft layered blur glow (`blur-3xl` /
  `blur-2xl`) at low opacity, rounded-rect mask, gentle continuous
  float (`animate-float`, 6s ease-in-out). Explicitly no hard
  ring/border per the brief.

## Animation Decisions

- Hero entrance uses a single `container` variant with
  `staggerChildren` so elements arrive in sequence (background is
  already running → photo → eyebrow → name → role → typing →
  description → CTAs → social icons) rather than firing all at once.
- Typing animation timing: 90ms/char typing, 45ms/char erasing,
  1200ms hold, 300ms pause before the next word — tuned to feel
  readable, not rushed.
- `prefers-reduced-motion` is respected in three places: global CSS
  (collapses all animation/transition durations), `TechBackground`
  (freezes node movement, keeps static network), and
  `TypingTechnologies` (swaps character-by-character typing for a
  slower full-word cycle).

## Responsive Decisions

- Hero grid: `grid-cols-1` on mobile (photo → text stacked, photo
  first for visual priority), `md:grid-cols-[1.15fr_0.85fr]` on
  desktop (text left, photo right) — a real mobile composition, not a
  shrunk desktop one.
- `TechBackground` node density is computed from viewport width
  (fewer particles under 640px, more at ≥1024px) to keep mobile
  performant.
- Navbar collapses to a hamburger menu below `md`; menu closes
  automatically after a link is clicked.

## Files Changed

```
vite.config.js                        (added @tailwindcss/vite plugin)
index.html                            (SEO meta, title, OG tags)
src/index.css                         (full rewrite — design tokens, keyframes)
src/App.jsx                           (full rewrite — Navbar + Hero + placeholders)
src/main.jsx                          (removed App.css import)
src/App.css                           (deleted — unused)
src/data/portfolio.js                 (new)
src/components/Navbar.jsx             (new)
src/components/TechBackground.jsx     (new)
src/components/TypingTechnologies.jsx (new)
src/components/ProfilePhoto.jsx       (new)
src/components/BrandIcons.jsx         (new)
src/sections/Hero.jsx                 (new)
```

## Known Issues

- `profile.photo` is `null` by default — Hero shows a placeholder
  icon until a real photo is added (see "How To Continue" below).
- Social links (`social.github`, `social.linkedin`, `contact.email`,
  `contact.phone`) are placeholder strings (`YOUR_GITHUB`, etc.).
  `IconLink` in `Hero.jsx` automatically disables/dims links that
  still start with `YOUR_`.
- No `og-image.png` exists yet at `/public/og-image.png` — the
  Open Graph tag references a file that doesn't exist. Add one in a
  later polish pass (Stage 8) or earlier if useful for sharing.

## Pending Improvements

- Real profile photo.
- Real social/contact links.
- About/Skills/Experience/Projects/Contact content (Stages 3–6).
- Scroll animations for all sections (Stage 7).
- Full accessibility and performance pass (Stage 7).
- Deployment to Vercel (Stage 8).

## Important Requirements (do not drop these)

- Never invent experience, companies, job titles, or achievements —
  only use what the user explicitly provides.
- No fake skill percentage bars.
- Deep black / charcoal base, blue accents only — never make the
  whole page blue.
- No hard border/ring around the profile photo.
- All personal data stays centralized in `src/data/portfolio.js`.
- Full responsiveness at 320/375/425/768/1024/1280/1440px+, no
  horizontal scroll, no broken animations.

## How To Continue

1. Read this file, `TODO.md`, and `README.md`.
2. Run `npm install` then `npm run dev` to see current state.
3. To add a real profile photo: drop the image in `src/assets/`,
   import it in `src/data/portfolio.js`
   (`photo: new URL('../assets/your-file.jpg', import.meta.url).href`).
4. To add real links: edit `social` and `contact` objects in
   `src/data/portfolio.js`.
5. Proceed with Stage 3 (About + Skills) as described above, or
   whatever the user explicitly requests next.
6. After any meaningful change: update this file's relevant sections
   and update `TODO.md`.
