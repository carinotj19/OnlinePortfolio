# TJ Cariño — Create Workshop Portfolio

An interactive React + Three.js portfolio built around a workshop/contraption interface inspired by the mechanical language of the Create mod.

## Direction

The workshop is the interface rather than a decorative background:

- persistent Three.js machinery with gears, shafts, belts, funnels, crates, and andesite/brass materials
- scroll position and scroll velocity influence the machine camera and rotational speed
- project hover routes into the workshop state
- UI panels use the same mechanical visual language as the scene
- light/dark themes and reduced-motion handling remain supported

The motion architecture takes lessons from my Kairos redesign experiments while keeping the visual language specific to this portfolio.

## Portfolio Content

- Full-Stack Web Developer positioning
- professional experience at Pixel Motion, Atis Software, and CriminTech
- featured engineering work led by CabKit3D, Stock Sage, and ShelterSync
- grouped frontend, backend/CMS, data, testing, deployment, and cloud skills
- B.S. Computer Science, University of the Cordilleras, August 2025

## Stack

- React 19
- Vite 7
- Three.js
- CSS custom properties
- native IntersectionObserver / requestAnimationFrame motion orchestration
- GitHub Pages

## Run Locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run build
```

Production output is generated in `dist/`.
