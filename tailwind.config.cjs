/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        board: "#0E1420",
        "board-2": "#141C2B",
        legend: "#F2F4F7",
        "legend-2": "#A3AEBE",
        steel: "#5B6472",
        gold: "#C9A24A",
        "gold-2": "#E3C46E",
        copper: "#7A5E2A",
      },
      fontFamily: {
        sans: ["Schibsted Grotesk", "system-ui", "sans-serif"],
        mono: ["Azeret Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
