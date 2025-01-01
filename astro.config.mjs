import { config as dotenvConfig } from "dotenv";

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";
import sanity from "@sanity/astro";

dotenvConfig();

// https://astro.build/config
export default defineConfig({
  //TODO: Remove output server and use sanity hooks instead !!
  output: "server",
  integrations: [
    tailwind(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-01-07",
    }),
  ],
  adapter: vercel({
    edgeMiddleware: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});
