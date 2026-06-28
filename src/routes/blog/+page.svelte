<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const cardSpeedAnimation = 0.25;
</script>

<svelte:head>
	<title>Blog • Azin</title>
	<meta
		name="description"
		content="Development logs, compiler updates, and articles from the Azin project."
	/>
</svelte:head>

<div class="page">
	<main class="hero">
		<h1>
			<span class="accent">B</span>log
		</h1>

		<p class="description">
			Development logs, compiler updates, design decisions, and everything happening around
			the Azin language.
		</p>

		<div class="grid">
			{#each data.posts as post, i}
				<a
					class="card"
					href="/blog/{post.slug}"
					style={`animation-delay: ${i * cardSpeedAnimation}s`}
				>
					<div class="meta">
						{#if post.publishedLabel}
							<span>{post.publishedLabel}</span>
							<span>•</span>
						{/if}
						<span>{post.readTime}</span>
					</div>

					<h2>{post.title}</h2>
					<p>{post.excerpt}</p>
				</a>
			{/each}
		</div>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #09090b;
		font-family:
			Inter,
			system-ui,
			sans-serif;
	}

	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background: #09090b;
		color: white;
	}

	.hero {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4rem 2rem;
		text-align: center;
		animation: fadeIn 0.25s ease-out;
	}

	h1 {
		margin: 0;
		font-size: clamp(4rem, 9vw, 6.5rem);
		font-weight: 900;
		letter-spacing: -0.05em;
	}

	.accent {
		color: #38bdf8;
	}

	.description {
		margin-top: 1.5rem;
		max-width: 650px;
		font-size: 1.2rem;
		color: #a1a1aa;
		line-height: 1.7;
		animation: fadeIn 0.25s ease-out;
	}

	.grid {
		margin-top: 4rem;
		width: min(900px, 100%);
		display: grid;
		gap: 1.25rem;
		animation: fadeIn 0.5s ease-out forwards;
	}

	.card {
		opacity: 0;
		display: block;
		text-align: left;
		text-decoration: none;
		padding: 1.5rem;
		border-radius: 14px;
		border: 1px solid #27272a;
		background: #0d0d10;
		color: inherit;

		transition:
			border-color .2s,
			background .2s,
			transform .2s;

		animation: fadeInCard 0.5s ease-out forwards;
	}

	.card:hover {
		border-color: #38bdf8;
		background: #111114;
		transform: translateY(-2px);
	}

	.meta {
		display: flex;
		gap: .45rem;
		font-size: .8rem;
		font-weight: 600;
		color: #71717a;
		text-transform: uppercase;
		letter-spacing: .08em;
	}

	.card h2 {
		margin: .85rem 0 .65rem;
		font-size: 1.35rem;
		color: white;
		line-height: 1.3;
	}

	.card p {
		margin: 0;
		color: #a1a1aa;
		line-height: 1.6;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeInCard {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>