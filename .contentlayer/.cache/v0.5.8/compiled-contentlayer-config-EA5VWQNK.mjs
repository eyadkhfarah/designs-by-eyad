// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("portfolio/").slice(1).join("/")
  }
};
var ProtoDesign = defineDocumentType(() => ({
  name: "ProtoDesign",
  filePathPattern: `portfolio/designs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: true
    },
    Protype: {
      type: "string"
    },
    Unofficial: {
      type: "boolean",
      required: true
    },
    Date: {
      type: "string",
      required: true
    },
    website: {
      type: "string"
    },
    BGColor: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var ProtoWeb = defineDocumentType(() => ({
  name: "ProtoWeb",
  filePathPattern: `portfolio/web/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    thumbnail: {
      type: "string",
      required: true
    },
    Protype: {
      type: "string"
    },
    Date: {
      type: "string"
    },
    stack: {
      type: "list",
      of: {
        type: "string"
      },
      required: true
    },
    website: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [ProtoWeb, ProtoDesign],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  ProtoDesign,
  ProtoWeb,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-EA5VWQNK.mjs.map
