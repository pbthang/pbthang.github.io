# Pbthang's Portfolio

[![Deploy to GitHub Pages](https://github.com/pbthang/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/pbthang/Portfolio/actions/workflows/deploy.yml)

My personal portfolio developed with [Astro](https://astro.build), [TailwindCSS](https://tailwindcss.com) and [three.js](https://threejs.org) — designed as a "Silkscreen" PCB board (see `DESIGN.md`) —, built as a static site and deployed to [GitHub Pages](https://pbthang.github.io/) by the `Deploy to GitHub Pages` workflow on every push to `main`.

## ✏️ Editing content

All site content lives in the repo — no CMS or environment variables are required.

| What | Where |
| :-- | :-- |
| Name, role, bio, hero typewriter lines, contacts, playlist, metadata | `src/data/profile.ts` |
| Education / Experience / Others timelines | `src/data/timeline.ts` |
| Skill cards | `src/data/skills.ts` |
| Project carousel | `src/data/projects.ts` |
| Profile photo and project images | `public/images/` |
| Resume PDF | `public/files/` (update the path in `profile.resume` when replacing) |

The site URL defaults to `https://pbthang.github.io`; set `SITE_URL` at build time to generate the sitemap and Open Graph tags for a different host (e.g. Netlify).

The hero laptop renders only while visible in the viewport and browser tab. It uses a 30 FPS cap and lower-resolution rendering on mobile, and redraws only on asset loads or resize when reduced motion is enabled. Rendering settings live in `src/lib/laptop.ts`.

The terminal biography is visible immediately in both the page and laptop screen, without character-by-character typing. The role heading retains its typewriter animation.

UI icons are inline SVGs defined in `src/components/Icon.astro`; no icon font is downloaded.

Project thumbnails are generated at 320, 640, and 960 pixels wide as WebP files by `npm run images` (automatically before dev/start/build). Keep originals in `public/images/projects/`; generated files in its `responsive/` subdirectory are ignored by Git. Browsers select a thumbnail using `srcset` and the grid's responsive sizes.

Scroll navigation caches section positions and batches updates per animation frame, remeasuring on layout resize and font loading. Analytics events are queued immediately, with Google's script loaded during idle time after page load; very short visits may end before it loads. GitHub Pages controls HTTP cache lifetimes; changing those requires a different host or a caching proxy.

## 🚀 Project Structure

Inside of your project, you'll see the following folders and files:

```txt
/
├── public/
│   ├── files/          # resume PDF
│   ├── images/         # profile photo, project images
│   ├── laptop/         # three.js model + textures for the hero
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/           # all site content (profile, timeline, skills, projects)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── utils/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Astro

[Documentation](https://docs.astro.build)
