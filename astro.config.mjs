import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";

// 1. Import these Node utilities to map absolute paths safely
import { fileURLToPath, URL } from "node:url";

const siteUrl = import.meta.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app";

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
    // 2. Add the resolve block back, using the safe URL parser
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
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