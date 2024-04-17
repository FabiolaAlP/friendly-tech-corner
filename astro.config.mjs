import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// import netlify from "@astrojs/netlify";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  // adapter: netlify(),
  site: "https://friendlytechcorner.netlify.app",
  // server: {
  //   format: "directory",
  //   port: 80,
  // },
  env: {
    WP_GRAPHQL: import.meta.env.WP_GRAPHQL
  },
  adapter: node({
    mode: "standalone"
  })
});