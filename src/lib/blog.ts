export type Author = {
	id: string;
	name: string;
	github?: string;
	avatar?: string;
	role?: string;
};

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	readTime: string;
	publishedAt: string | null;
	publishedLabel: string | null;
	draft: boolean;
	authors: Author[];
	content: string;
};

type BlogFrontmatter = {
	title?: string;
	excerpt?: string;
	read_time?: string | number;
	published_at?: string;
	draft?: boolean;
	authors?: string;
};

const AUTHORS = {
	spatulari: {
		id: "spatulari",
		name: "Spatulari",
		github: "https://github.com/spatulari",
		avatar: "https://avatars.githubusercontent.com/u/206748761?v=4",
		role: "founder"
	},
	pascalecu: {
		id: "pascalecu",
		name: "Ștefan",
		github: "https://github.com/pascalecu",
		avatar: "https://avatars.githubusercontent.com/u/165364995?v=4",
		role: "founder"
	},
	zapaxe: {
		id: "zapaxe",
		name: "Zapaxe",
		github: "https://github.com/zapaxe",
		avatar: "https://avatars.githubusercontent.com/u/95616484?v=4",
		role: "founder"
	},
	twlve: {
		id: "twlve",
		name: "twlve",
		github: "https://github.com/yydev-official",
		avatar: "https://avatars.githubusercontent.com/u/242444168?v=4",
		role: "founder"
	},
	bryson: {
		id: "brysonak",
		name: "bryson",
		github: "https://github.com/brysonak",
		avatar: "https://avatars.githubusercontent.com/u/264277691?v=4",
		role: "founder"
	},
	alien: {
		id: "alien",
		name: "Alien",
		github: "https://github.com/just-another-alien",
		avatar: "https://avatars.githubusercontent.com/u/109413186?v=4",
		role: "founder"
	},
} satisfies Record<string, Author>;

const blogModules = import.meta.glob('/src/md/blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

function titleFromSlug(slug: string) {
	return slug
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}

function stripMarkdown(source: string) {
	return source
		.replace(/^---[\s\S]*?---\s*/m, '')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
		.replace(/\[[^\]]+]\([^)]+\)/g, '$1')
		.replace(/^#{1,6}\s+/gm, '')
		.replace(/^\s*[-*+]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/[>*_~|]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function parseFrontmatter(source: string) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

	if (!match) {
		return {
			frontmatter: {} as BlogFrontmatter,
			content: source
		};
	}

	const frontmatter: BlogFrontmatter = {};

	for (const rawLine of match[1].split(/\r?\n/)) {
		const line = rawLine.trim();

		if (!line || line.startsWith('#')) {
			continue;
		}

		const separatorIndex = line.indexOf(':');

		if (separatorIndex === -1) {
			continue;
		}

		const key = line.slice(0, separatorIndex).trim() as keyof BlogFrontmatter;
		const rawValue = line.slice(separatorIndex + 1).trim();
		const unquoted = rawValue.replace(/^['"]|['"]$/g, '');

		if (key === 'draft') {
			frontmatter.draft = unquoted.toLowerCase() === 'true';
			continue;
		}

		if (key === 'read_time') {
			const numericValue = Number(unquoted);
			frontmatter.read_time = Number.isFinite(numericValue) ? numericValue : unquoted;
			continue;
		}

		frontmatter[key] = unquoted;
	}

	return {
		frontmatter,
		content: source.slice(match[0].length)
	};
}

function formatReadTime(value: BlogFrontmatter['read_time'], content: string) {
	if (typeof value === 'number' && Number.isFinite(value)) {
		return `${value} min read`;
	}

	if (typeof value === 'string' && value.length > 0) {
		return /\bread\b/i.test(value) ? value : `${value} min read`;
	}

	const plainText = stripMarkdown(content);
	const words = plainText.split(/\s+/).filter(Boolean).length;
	const readingMinutes = Math.max(1, Math.round(words / 200));
	return `${readingMinutes} min read`;
}

function formatPublishedLabel(value: string | undefined) {
	if (!value) {
		return null;
	}

	const parsed = new Date(value);

	if (Number.isNaN(parsed.getTime())) {
		return value;
	}

	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}).format(parsed);
}

function parseAuthors(value: string | undefined): Author[] {
	if (!value) {
		return [];
	}

	return value
		.split(",")
		.map((author) => author.trim())
		.map((id) => AUTHORS[id as keyof typeof AUTHORS])
		.filter((author): author is Author => author !== undefined);
}

function toBlogPost(path: string, source: string): BlogPost {
	const slug = path.split('/').pop()?.replace('.md', '') ?? 'post';
	const { frontmatter, content } = parseFrontmatter(source);
	const headingMatch = content.match(/^#\s+(.+)$/m);
	const plainText = stripMarkdown(content);
	const title = frontmatter.title || headingMatch?.[1]?.trim() || titleFromSlug(slug);
	const excerpt =
		frontmatter.excerpt ||
		(plainText.slice(0, 180).trimEnd() + (plainText.length > 180 ? '...' : ''));
	const publishedAt = frontmatter.published_at || null;

	return {
		slug,
		title,
		excerpt,
		readTime: formatReadTime(frontmatter.read_time, content),
		publishedAt,
		publishedLabel: formatPublishedLabel(frontmatter.published_at),
		draft: frontmatter.draft === true,
		authors: parseAuthors(frontmatter.authors),
		content
	};
}

const blogPosts = Object.entries(blogModules)
	.map(([path, source]) => toBlogPost(path, source))
	.filter((post) => !post.draft)
	.sort((a, b) => {
		if (a.publishedAt && b.publishedAt) {
			return b.publishedAt.localeCompare(a.publishedAt);
		}

		if (a.publishedAt) {
			return -1;
		}

		if (b.publishedAt) {
			return 1;
		}

		return a.title.localeCompare(b.title);
	});

export function getAllBlogPosts() {
	return blogPosts;
}

export function getBlogPost(slug: string) {
	return blogPosts.find((post) => post.slug === slug);
}
