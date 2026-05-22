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
    summary: z.string().optional(),
    header: z.object({
      scenes: z.number(),
      solos: z.number(),
      pairs: z.number(),
      first_occurrences: z.number(),
      characters: z.number(),
    }),
    town_paragraph: z.string(),
    notable_events: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })),
    vitals: z.object({
      scene_ratio: z.string(),
      scene_ratio_trend: z.string(),
      top_location: z.string(),
      dominant_pair: z.string(),
      total_pairs: z.number(),
    }),
    character_pulse: z.array(z.object({
      character: z.string(),
      top_location: z.string(),
      top_partner: z.string(),
      scenes: z.number(),
      watch_note: z.string(),
    })),
    emergent_behaviors: z.array(z.object({
      label: z.string(),
      body: z.string(),
      excerpt: z.string().optional(),
    })),
    open_questions: z.array(z.string()),
  }),
});

export const collections = { echoes, signals };
