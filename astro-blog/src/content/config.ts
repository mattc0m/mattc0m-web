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
		dateRange: z.string(),
		layoutType: z.string().optional(),
		logoImage: z.string().optional(),
	}),
});

const codesnippet = defineCollection({
	schema: z.object({
		title: z.string(),
		href: z.string(),
		thumbnailUrl: z.string(),
		logoUrl: z.string().optional(),
		hrefTarget: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const figmatip = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		href: z.string(),
		thumbnailUrl: z.string(),
		ctaText	: z.string().optional(),
		logoUrl: z.string().optional(),
		hrefTarget: z.string().optional(),
		tags: z.array(z.string()).optional(),
		videoEmbed: z.string().optional(),
		additionalScreens: z.array(z.string()).optional(),
		linktoInstagram: z.string().optional(),
		linktoFacebook: z.string().optional(),
		linktoLinkedIn: z.string().optional(),
		linktoTwitter: z.string().optional(),
		linktoThreads: z.string().optional(),
		linktoTikTok: z.string().optional(),
		linktoCodePen: z.string().optional(),
	}),
});

export const collections = { blog, portfolio, codesnippet, figmatip };