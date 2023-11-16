import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/**@type {import("contentlayer/source-files").ComputedFields} */

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `src/protfolio/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    thumnail: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}));
