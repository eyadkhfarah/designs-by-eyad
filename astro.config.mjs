import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';
import vercel from "@astrojs/vercel";

export default defineConfig({
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com' }],
  },
  
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://designs-by-eyad.vercel.app",

  integrations: [
    react(),
    partytown(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2026-06-23"),
    }),
  ],

  output: 'static', 
  
  adapter: vercel(),
});