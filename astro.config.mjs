// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

import node from "@astrojs/node";

import vercel from "@astrojs/vercel";

const siteUrl =
  import.meta.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],

    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },

  site: siteUrl,

  integrations: [
    react(),
    partytown(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          ar: 'ar-EG',
        },
      },
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2022-02-24"),
    }),
  ],

  output: 'server', 
  adapter: vercel(),
});