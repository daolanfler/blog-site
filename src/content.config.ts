import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    pageTitle: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.date().transform((v) => new Date(v.valueOf() - 8 * 60 * 60 * 1000)),
    updateDate: z
      .date()
      .transform((v) => new Date(v.valueOf() - 8 * 60 * 60 * 1000))
      .optional(),
    relatedPosts: z.array(reference("blog")).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
