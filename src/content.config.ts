import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const rawHtmlBlock = z.object({
  _type: z.literal("raw_html"),
  label: z.string(),
  content: z.string(),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    _schema: z.literal("page_builder"),
    title: z.string(),
    description: z.string(),
    content_blocks: z.array(rawHtmlBlock),
  }),
});

export const collections = { pages };
