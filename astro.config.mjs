import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // site: "https://friendlytechcorner.netlify.app",
  integrations: [tailwind(), react()],
  adapter: netlify(),
});
