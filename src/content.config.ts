import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const echoes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/echoes' }),
  schema: z.object({
    day: z.number(),
    season: z.string(),
    title: z.string(),
    pubDate: z.string(),
    summary: z.string().optional(),
    scenes: z.array(z.object({
      character: z.string(),
      location: z.string(),
      excerpt: z.string(),
    })).optional(),
  }),
});

export const collections = { echoes };
