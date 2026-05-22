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

const signals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/signals' }),
  schema: z.object({
    week: z.number(),
    season: z.string(),
    days: z.array(z.number()),
    pubDate: z.string(),
    title: z.string(),
    summary: z.string(),
    location: z.string(),
    sim_day: z.number(),
    setup: z.string(),
    exchanges: z.array(z.object({
      character: z.string(),
      time_label: z.string(),
      line: z.string(),
    })),
    closing: z.string().optional(),
  }),
});

export const collections = { echoes, signals };
