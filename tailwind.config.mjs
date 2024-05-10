/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        "light-primary": "#CB997E",
        "light-secondary": "#DDBEA9",
        "light-accent": "#B7B7A4",
        "light-bg": "#F2E9E4",
        "light-bg-alt": "#EAE0D5",
        "light-text": "#403D39",
        "dark-primary": "#A5A58D",
        "dark-secondary": "#6B728E",
        "dark-accent": "#CB997E",
        "dark-bg": "#403D39",
        "dark-bg-alt": "#2F2E2E",
        "dark-text": "#F2E9E4",
      },
    },
  },
};
