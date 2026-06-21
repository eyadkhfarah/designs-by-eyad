import { Client } from "@notionhq/client";

const NOTION_API_KEY = import.meta.env.YOUR_NOTION_API_KEY;
const NOTION_API_KEY_BLOG = import.meta.env.YOUR_NOTION_BLOG_API_KEY;
const NOTION_API_KEY_ARTWORK = import.meta.env.YOUR_NOTION_ARTWORK_API_KEY;

export const notionForm = new Client({
  auth: NOTION_API_KEY,
});

export const notionBlog = new Client({
  auth: NOTION_API_KEY_BLOG,
});

export const notionArtwork = new Client({
  auth: NOTION_API_KEY_ARTWORK,
});