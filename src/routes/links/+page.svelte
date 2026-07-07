<svelte:head>
	<title>Links • Azin</title>
	<meta
		name="description"
		content="Official Azin project links."
	/>
</svelte:head>

<script lang="ts">
	const year = new Date().getFullYear();

	const links = [
		{
			title: 'Documentation',
			description: 'Language guide, API reference, and tutorials.',
			url: 'https://docs.azin-lang.org'
		},
		{
			title: 'GitHub',
			description: 'Source code, issues, and development progress.',
			url: 'https://github.com/azin-lang/azin'
		},
		{
			title: 'Discord',
			description: 'The official Azin Discord server',
			url: 'https://discord.gg/HVhCevjAxR'
		},
		{
			title: 'Founders',
			description: 'Meet the people who founded and maintain the Azin project.',
			url: '/founders'
		},
		{
			title: 'Contributors',
			description: 'Everyone who has contributed to Azin.',
			url: 'https://github.com/azin-lang/Azin/graphs/contributors?from=3%2F28%2F2026'
		}
	];
</script>

<div class="page">
	<main class="hero">
		<h1>
			<span class="accent">A</span>zin
		</h1>

		<p class="description">
			Everything related to the Azin project in one place.
		</p>

		<div class="grid">
			{#each links as link, i}
				<a class="card" href={link.url} style={`animation-delay: ${i * 0.25}s`}>
					<h2>{link.title}</h2>
					<p>{link.description}</p>
				</a>
			{/each}
		</div>
	</main>

	<footer>
		© {year} Azin Language Project
	</footer>
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
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.25rem;
		animation: fadeIn 0.5s ease-out forwards;
	}

	.card {
		opacity: 0;
		text-align: left;
		text-decoration: none;
		padding: 1.5rem;
		border-radius: 14px;
		border: 1px solid #27272a;
		background: #0d0d10;
		transition:
			border-color .2s,
			transform .2s,
			background .2s;
		animation: fadeInCard 0.5s ease-out forwards;	
	}

	.card:hover {
		border-color: #38bdf8;
		background: #111114;
		transform: translateY(-2px);
	}

	.card h2 {
		margin: 0;
		font-size: 1.25rem;
		color: white;
	}

	.card p {
		margin-top: 0.75rem;
		color: #a1a1aa;
		line-height: 1.6;
	}

	footer {
		padding: 2rem;
		text-align: center;
		font-size: 0.9rem;
		color: #52525b;
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
		
	/* was yoinked too */
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