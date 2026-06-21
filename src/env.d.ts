/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Public
  readonly PUBLIC_SITE_URL: string;

  // Private
  readonly YOUR_NOTION_API_KEY: string;
  readonly YOUR_NOTION_DATABASE_ID: string;
  readonly YOUR_NOTION_BLOG_API_KEY: string;
  readonly YOUR_NOTION_ARTWORK_API_KEY: string;
  readonly YOUR_NOTION_DATABASE_ARTWORK_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
