import { defineConfig } from "astro/config";
import { readFile, writeFile } from "node:fs/promises";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    // Astro 2.1 predates the built-in inlineStylesheets option.
    {
      name: "inline-homepage-css",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          const page = new URL("index.html", dir);
          let html = await readFile(page, "utf8");
          for (const match of html.matchAll(/<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)"\s*\/?>/g)) {
            const css = await readFile(new URL(`.${match[1]}`, dir), "utf8");
            html = html.replace(match[0], () => `<style>${css}</style>`);
          }
          await writeFile(page, html);
        },
      },
    },
  ],
  site: process.env.SITE_URL ?? "https://pbthang.github.io",
  output: "static",
  vite: {
    build: { sourcemap: true },
  },
});
