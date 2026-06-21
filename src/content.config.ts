import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const web = defineCollection({
  loader: glob({ base: "src/content/portfolio/web", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    website: z.string(),
    Protype: z.string(),
    Date: z.date(),
    stack: z.array(z.string()),
  }),
});

const design = defineCollection({
  loader: glob({ base: "src/content/portfolio/designs", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    website: z.string(),
    Unofficial: z.boolean().optional(),
    Protype: z.string(),
    Date: z.date(),
    BGColor: z.string().optional(),
  }),
});

export const collections = { web, design };
