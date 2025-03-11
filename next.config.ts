const { withContentlayer } = require("next-contentlayer");
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeThirdPartyScripts: true,
  experimental: {
    nextScriptWorkers: true,
    turbo: {
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.imgur.com" }, { protocol: "https", hostname: "i.ibb.co" }, {protocol: "https", hostname: "i.postimg.cc"},{ protocol: "https", hostname: "images.pexels.com"},{protocol: "https", hostname: "avatar.iran.liara.run"}, { protocol : "https", hostname: "media.licdn.com"}],
  },
  async rewrites() {
    return [
      {
        source: '/api/notion',
        destination: 'https://api.notion.com/v1',
      },
    ];
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;",
          },
          { key: "Access-Control-Allow-Credentials", value: "*" },
          { key: "Access-Control-Allow-Origin", value: "no-cors" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(withContentlayer(nextConfig));