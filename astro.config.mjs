import { config as dotenvConfig } from 'dotenv';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';

import sitemap from '@astrojs/sitemap';

dotenvConfig();

// https://astro.build/config
export default defineConfig({
  //TODO: Remove output server and use sanity hooks instead !!
  output: 'server',
  site: 'https://www.barboranovakova.cz/',
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    tailwind(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-01-07',
    }),
    sitemap(),
  ],
  adapter: vercel({
    edgeMiddleware: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});
