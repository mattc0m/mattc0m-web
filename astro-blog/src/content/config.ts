import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const portfolio = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		jobTitle: z.string(),
		// Transform string to Date object
		dateRange: z.string(),
		logoImage: z.string().optional(),
	}),
});

export const collections = { blog, portfolio };