import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  site: process.env.SITE_URL ?? "https://pbthang.github.io",
  output: "static",
  vite: {
    build: { sourcemap: true },
  },
});
