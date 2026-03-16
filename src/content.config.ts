import { defineCollection, z } from 'astro:content';
// 1. Import the glob loader
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // 2. Define the loader for your markdown files
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishDate: z.coerce.date(),
    image: image().optional(),
  }),
});

export const collections = { projects };