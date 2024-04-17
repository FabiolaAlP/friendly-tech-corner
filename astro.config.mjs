import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), react()],
  // adapter: netlify(),
  site: "https://friendlytechcorner.netlify.app",
  server: {
    format: "directory",
  },
  env: {
    WP_GRAPHQL: import.meta.env.WP_GRAPHQL,
  },
});
