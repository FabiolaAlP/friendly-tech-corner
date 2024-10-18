import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
export default defineConfig({
  integrations: [tailwind(), react(), icon({
    include: {
      'skill-icons': ["*"],
      'simple-icons': ["expo"],
      'mdi': ["sql-query"]
    },
  }),],
  env: {
    URL_TEST: import.meta.env.URL_TEST,
  },
});
