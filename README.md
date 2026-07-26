# Lumière Dental Studio — dental-demo-4

An Awwwards-style concept website for a luxury dental clinic in Gota,
Ahmedabad. Built as a portfolio/demo piece.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- GSAP + ScrollTrigger (pinned sections, scroll-driven reveals)
- Lenis (smooth scroll)
- Framer Motion (micro-interactions)
- React Three Fiber + Drei (the persistent 3D tooth)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via
`.github/workflows/deploy.yml`. Enable Pages in the repo settings
(Settings → Pages → Source: GitHub Actions) once the first workflow
run completes.

## Notes

- All imagery is CSS-gradient placeholder art (no external image
  assets), ready to be swapped for real clinic photography.
- Motion respects `prefers-reduced-motion`, and the pinned
  scroll-storytelling sections (Technology, Gallery) gracefully
  degrade to static stacked layouts below `lg`.
