import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

/* ─── Primitive Notion field shapes ─────────────────────────────────────────── */

export type NotionRichText = Array<{
  plain_text: string;
  href: string | null;
  annotations?: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
}>;

export type NotionTitle = Array<{
  plain_text: string;
  href: string | null;
}>;

export type NotionSelect = {
  id: string;
  name: string;
  color: string;
} | null; // select can be null if not set

export type NotionMultiSelect = Array<{
  id: string;
  name: string;
  color: string;
}>;

export type NotionDate = {
  start: string;
  end: string | null;
  time_zone: string | null;
} | null; // date can be null if not set

export type NotionFile = {
  name: string;
} & (
  | { type: "file"; file: { url: string; expiry_time: string } }
  | { type: "external"; external: { url: string } }
);

/* ─── Helper to extract the URL from a NotionFile ───────────────────────────── */

export function getNotionFileUrl(file: NotionFile): string {
  return file.type === "file" ? file.file.url : file.external.url;
}

/* ─── Database property map ─────────────────────────────────────────────────── */

/**
 * The shape of the `properties` object on a blog post page.
 * Used by fetchPosts(), BlogSqr, and the blog [slug] page.
 */
export type BlogProperties = {
  Name: { title: NotionTitle };
  Slug: { rich_text: NotionRichText };
  Subtitle: { rich_text: NotionRichText };
  Category: { select: NotionSelect };
  Publication: { date: NotionDate };
  Thumbnail: { files: NotionFile[] };
  Tags: { multi_select: NotionMultiSelect };
  Status: { status: NotionSelect };
};

/* ─── Full blog post page ────────────────────────────────────────────────────── */

/**
 * A Notion page object narrowed to our blog database schema.
 * Extends PageObjectResponse so it carries id, created_time, etc.
 */
export type NotionPage = Omit<PageObjectResponse, "properties"> & {
  properties: BlogProperties;
};

/* ─── Lightweight shape for list views ──────────────────────────────────────── */

/**
 * Used by fetchPosts() return type and getStaticPaths().
 * Only the fields needed to render a card or generate a slug path.
 */
export type NotionBaseProperties = Pick<
  NotionPage,
  "id" | "created_time" | "properties"
>;

/* ─── Component prop types ───────────────────────────────────────────────────── */

/** Props for BlogSqr and similar card components */
export type NotionProps = {
  post: NotionBaseProperties;
};

/* ─── Artwork database ───────────────────────────────────────────────────────── */

export type ArtworkProperties = {
  Name: {
    id: string;
    type: "title";
    title: NotionTitle;
  };
  Image: {
    id: string;
    type: "files";
    files: NotionFile[];
  };
};

export type ArtworkPage = Omit<PageObjectResponse, "properties"> & {
  properties: ArtworkProperties;
};
