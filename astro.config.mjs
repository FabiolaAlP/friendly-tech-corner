import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// import netlify from "@astrojs/netlify";
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // output: "hybrid",
  // // adapter: netlify(),
  // site: "https://friendlytechcorner.netlify.app",
  // server: {
  //   port: 80,
  // },
  env: {
    URL_TEST: import.meta.env.URL_TEST,
  },
});
