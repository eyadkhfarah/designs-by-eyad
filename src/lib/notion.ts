import "server-only";
import { Client } from "@notionhq/client";
import React from "react";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const NOTION_API_KEY = process.env.YOUR_NOTION_API_KEY;
const NOTION_API_KEY_BLOG = process.env.YOUR_NOTION_BLOG_API_KEY;
const NOTION_BLOG_DATABASE_ID = process.env.YOUR_NOTION_DATABASE_BLOG_ID;

export const notionForm = new Client({
  auth: NOTION_API_KEY,
});

export const notionBlog = new Client({
  auth: NOTION_API_KEY_BLOG,
});

export const fetchPosts = React.cache(() => {
  return notionBlog.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
    filter: {
      property: "Status",
      status: {
        equals: "Live",
      },
    },
  }); // 10 seconds cache duration
});

export const fetchPostSlug = React.cache((slug: string) => {
  return notionBlog.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  })
  .then((res) => res.results[0] as PageObjectResponse | undefined)
});

export const fetchPostBlocks = React.cache((pageId: string) => {
    return notionBlog.blocks.children.list({
      block_id: pageId,

    })
    .then((res) => res.results as BlockObjectResponse[])
})
