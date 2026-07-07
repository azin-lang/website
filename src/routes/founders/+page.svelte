<svelte:head>
	<title>Founders • Azin</title>
	<meta
		name="description"
		content="Meet the founders of the Azin programming language."
	/>
</svelte:head>

<script lang="ts">
	import { AUTHORS } from "$lib/authors";

	const founders = Object.values(AUTHORS)
		.filter((author) => author.role === "founder")
		.sort((a, b) => a.name.localeCompare(b.name));	
</script>

<div class="page">
	<main class="hero">
		<h1>
			<span class="accent">F</span>ounders
		</h1>

		<p class="description">
			The people behind Azin.
		</p>

		<div class="grid">
			{#each founders as founder, i}
				<a
					class="card"
					href={`/founders/${founder.id}`}
					style={`animation-delay: ${i * 0.1}s`}
				>
					<img
						class="avatar"
						src={founder.avatar}
						alt={founder.name}
					/>

					<h2>{founder.name}</h2>

					<span class="role">
						{founder.role?.replace(/^./, c => c.toUpperCase())}

					</span>
				</a>
			{/each}
		</div>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #09090b;
		font-family: Inter, system-ui, sans-serif;
		color: white;
	}

	.page {
		min-height: 100vh;
	}

	.hero {
		max-width: 1000px;
		margin: 0 auto;
		padding: 4rem 2rem;
		text-align: center;
	}

	h1 {
		margin: 0;
		font-size: clamp(4rem, 8vw, 6rem);
		font-weight: 900;
		letter-spacing: -.05em;
	}

	.accent {
		color: #38bdf8;
	}

	.description {
		margin: 1.5rem auto 0;
		max-width: 650px;
		color: #a1a1aa;
		line-height: 1.7;
		font-size: 1.1rem;
	}

	.grid {
		margin-top: 4rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.25rem;
	}

	.card {
		opacity: 0;
		text-decoration: none;
		color: inherit;
		padding: 1.75rem;
		border-radius: 14px;
		border: 1px solid #27272a;
		background: #0d0d10;
		transition:
			transform .2s,
			border-color .2s,
			background .2s;
		animation: fadeIn .4s ease forwards;
		text-align: center;
	}

	.card:hover {
		transform: translateY(-3px);
		border-color: #38bdf8;
		background: #111114;
	}

	.avatar {
		width: 96px;
		height: 96px;
		border-radius: 50%;
		object-fit: cover;
		display: block;
		margin: 0 auto 1rem;
		border: 2px solid #27272a;
	}

	h2 {
		margin: 0;
		font-size: 1.35rem;
	}

	.role {
		display: inline-block;
		margin-top: .75rem;
		padding: .35rem .75rem;
		border-radius: 999px;
		background: #1f2937;
		color: #38bdf8;
		font-size: .85rem;
		font-weight: 500;
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
</style>