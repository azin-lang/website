import { AUTHORS } from "$lib/authors";
import { renderMarkdown } from "$lib/markdown";

type FounderFrontmatter = {
	website?: string;
	github?: string;
};

export type FounderPage = {
	author: keyof typeof AUTHORS;
	content: string;
	website?: string;
	github?: string;
};

const founderModules = import.meta.glob("/src/md/founders/*.md", {
	query: "?raw",
	import: "default",
	eager: true
}) as Record<string, string>;

function parseFrontmatter(source: string) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

	if (!match) {
		return {
			frontmatter: {} as FounderFrontmatter,
			content: source
		};
	}

	const frontmatter: FounderFrontmatter = {};

	for (const rawLine of match[1].split(/\r?\n/)) {
		const line = rawLine.trim();

		if (!line || line.startsWith("#")) {
			continue;
		}

		const separatorIndex = line.indexOf(":");

		if (separatorIndex === -1) {
			continue;
		}

		const key = line.slice(0, separatorIndex).trim() as keyof FounderFrontmatter;
		const value = line
			.slice(separatorIndex + 1)
			.trim()
			.replace(/^['"]|['"]$/g, "");

		frontmatter[key] = value || undefined;
	}

	return {
		frontmatter,
		content: source.slice(match[0].length)
	};
}

function toFounder(path: string, source: string): FounderPage {
	const id = path.split("/").pop()!.replace(".md", "");
	const { frontmatter, content } = parseFrontmatter(source);

	return {
		author: id as keyof typeof AUTHORS,
		content: renderMarkdown(content),
		website: frontmatter.website,
		github: frontmatter.github
	};
}

const founderPages = Object.fromEntries(
	Object.entries(founderModules).map(([path, source]) => {
		const founder = toFounder(path, source);
		return [founder.author, founder];
	})
) as Record<keyof typeof AUTHORS, FounderPage>;

export function getFounder(id: keyof typeof AUTHORS) {
	return founderPages[id];
}

export function getAllFounders() {
	return Object.values(founderPages);
}