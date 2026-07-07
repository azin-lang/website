<svelte:head>
	<title>{author.name} • Azin</title>

	<meta
		name="description"
		content={`${author.name} — ${role} of the Azin project.`}
	/>
</svelte:head>

<script lang="ts">
	import { page } from "$app/state";
	import { AUTHORS } from "$lib/authors";
	import { getFounder } from "$lib/founders";
	import { renderMarkdown } from "$lib/markdown";

	const slug = page.params.slug as keyof typeof AUTHORS;

	const author = AUTHORS[slug];
	const founder = getFounder(slug);

	if (!author || !founder) {
		throw new Error("Founder not found.");
	}

	const role = author.role?.replace(/^./, (c) => c.toUpperCase()) ?? "Founder";

	const html = $derived(renderMarkdown(founder.content));
</script>

<main class="page">
	<div class="container">
		<header class="header">
			<img
				class="avatar"
				src={author.avatar}
				alt={author.name}
			/>

			<h1>{author.name}</h1>

			<p class="role">{role}</p>

			<div class="links">
				{#if founder.github}
					<a
						href={founder.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				{/if}

				{#if founder.website}
					<a
						href={founder.website}
						target="_blank"
						rel="noopener noreferrer"
					>
						Website
					</a>
				{/if}
			</div>
		</header>

		<article class="blog">
			{@html html}
		</article>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		background: #09090b;
		color: white;
		font-family: Inter, system-ui, sans-serif;
	}

	.page {
		min-height: 100vh;
		padding: 4rem 2rem 6rem;
		background: #09090b;
	}

	.container {
		width: min(850px, 100%);
		margin: 0 auto;
		animation: fadeIn .25s ease-out;
	}

	.header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.avatar {
		width: 128px;
		height: 128px;
		border-radius: 999px;
		object-fit: cover;
		border: 2px solid #27272a;
		margin-bottom: 1.5rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(3rem, 7vw, 4.5rem);
		font-weight: 900;
		line-height: 1;
		letter-spacing: -.04em;
	}

	.role {
		margin-top: .8rem;
		color: #38bdf8;
		font-size: 1.05rem;
		font-weight: 600;
		text-transform: capitalize;
	}

	.links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: .75rem;
		margin-top: 2rem;
	}

	.links a {
		padding: .75rem 1.2rem;
		border: 1px solid #27272a;
		border-radius: 12px;
		background: #0d0d10;
		color: white;
		text-decoration: none;
		transition:
			border-color .2s,
			transform .2s;
	}

	.links a:hover {
		border-color: #38bdf8;
		transform: translateY(-2px);
	}

	.blog {
		font-size: 1.08rem;
		line-height: 1.9;
	}

	:global(.blog h1) {
		margin-top: 4rem;
		margin-bottom: 1rem;
		font-size: 2.8rem;
		font-weight: 900;
		line-height: 1.1;
		letter-spacing: -.03em;
	}

	:global(.blog h2) {
		margin-top: 4rem;
		margin-bottom: 1rem;
		font-size: 2.3rem;
		font-weight: 800;
	}

	:global(.blog h3) {
		margin-top: 3rem;
		font-size: 1.7rem;
		font-weight: 700;
	}

	:global(.blog p),
	:global(.blog li) {
		color: #d4d4d8;
		line-height: 1.9;
	}

	:global(.blog ul),
	:global(.blog ol) {
		padding-left: 1.5rem;
	}

	:global(.blog a) {
		color: #38bdf8;
		text-decoration: none;
	}

	:global(.blog a:hover) {
		text-decoration: underline;
	}

	:global(.blog pre) {
		margin: 2rem 0;
		padding: 1.4rem 1.6rem;
		background: #0d0d10;
		border: 1px solid #27272a;
		border-radius: 14px;
		overflow-x: auto;
	}

	:global(.blog code) {
		font-family:
			"Cascadia Code",
			Consolas,
			monospace;
	}

	:global(.blog :not(pre) > code) {
		padding: .15rem .45rem;
		background: #18181b;
		border: 1px solid #27272a;
		border-radius: 6px;
	}

	:global(.blog blockquote) {
		margin: 2rem 0;
		padding-left: 1rem;
		border-left: 3px solid #38bdf8;
		color: #a1a1aa;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>