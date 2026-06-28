<script lang="ts">
    import type { PageData } from './$types';
    import { renderMarkdown } from '$lib/markdown';

    let { data }: { data: PageData } = $props();

    let html = $derived(renderMarkdown(data.post.content as string));
</script>

<svelte:head>
    <title>{data.post.title} • Azin</title>
    <meta name="description" content={data.post.excerpt} />
</svelte:head>

<main class="page">
    <div class="container">
        <header class="header">
            <a class="back" href="/blog">← Blog</a>

            <h1>{data.post.title}</h1>

            <p class="description">
                {data.post.excerpt}
            </p>

            <div class="meta">
                {#if data.post.publishedLabel}
                    <span>{data.post.publishedLabel}</span>
                    <span>•</span>
                {/if}

                <span>{data.post.readTime}</span>
            </div>

            {#if data.post.authors?.length}
                <div class="authors">
                    {#each data.post.authors as author}
                        <a class="author" href={author.github} target="_blank" rel="noopener noreferrer">
                            {#if author.avatar}
                                <img src={author.avatar} alt={author.name}/>
                            {/if}

                            <div>
                                <div class="name">{author.name}</div>
                                {#if author.role}
                                    <div class="role">{author.role}</div>
                                {/if}
                            </div>
                        </a>
                    {/each}
                </div>
            {/if}
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
		font-family:
			Inter,
			system-ui,
			sans-serif;
	}

	.page {
		min-height: 100vh;
		padding: 4rem 2rem 6rem;
		background: #09090b;
	}

	.container {
		width: min(1500px, 100%);
		margin: 0 auto;
		animation: fadeIn .25s ease-out;
	}

	.authors {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
	}

	.author {
		display: flex;
		align-items: center;
		gap: .8rem;

		padding: .75rem 1rem;

		background: #0d0d10;

		border: 1px solid #27272a;

		border-radius: 12px;

		color: inherit;

		text-decoration: none;

		transition:
			border-color .2s,
			transform .2s;
	}

	.author:hover {
		border-color: #38bdf8;
		transform: translateY(-2px);
	}

	.author img {
		width: 44px;
		height: 44px;
		border-radius: 999px;
		object-fit: cover;
	}

	.name {
		font-weight: 600;
		color: white;
	}

	.role {
		font-size: .85rem;
		color: #71717a;
		text-transform: capitalize;
	}

	.header {
		max-width: 850px;
		margin-bottom: 4rem;
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: .4rem;
		margin-bottom: 2rem;
		color: #38bdf8;
		text-decoration: none;
		font-weight: 600;
	}

	.back:hover {
		text-decoration: underline;
	}

	h1 {
		margin: 0;
		font-size: clamp(3.5rem, 8vw, 6rem);
		font-weight: 900;
		line-height: 1;
		letter-spacing: -.05em;
	}

	.description {
		margin-top: 1.5rem;
		font-size: 1.25rem;
		line-height: 1.8;
		color: #a1a1aa;
	}

	.meta {
		display: flex;
		gap: .6rem;
		margin-top: 1.5rem;
		color: #71717a;
		font-size: .85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: .08em;
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
		color: white;
	}
	:global(.blog h2) {
		margin-top: 4rem;
		margin-bottom: 1rem;
		font-size: 2.3rem;
		font-weight: 800;
		letter-spacing: -.03em;
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
	:global(.blog table) {
		width: 100%;
		border-collapse: collapse;
		margin: 2rem 0;
	}

	:global(.blog th) {
		color: white;
		font-weight: 700;
	}

	:global(.blog th),
	:global(.blog td) {
		padding: .9rem;
		border-bottom: 1px solid #27272a;
	}
	:global(.blog blockquote) {
		margin: 2rem 0;

		padding-left: 1rem;

		border-left: 3px solid #38bdf8;

		color: #a1a1aa;
	}
</style>