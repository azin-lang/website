<svelte:head>
	<title>Azin</title>
	<meta
		name="description"
		content="A modern systems programming language. (In Development)"
	/>
</svelte:head>

<script lang="ts">
	const year = new Date().getFullYear();
</script>

<div class="page">
	<main class="hero">

		<h1>
			<span class="accent">A</span>zin
		</h1>

		<p class="description">
			A modern systems programming language currently in development.
		</p>

		<div class="buttons">
			<a href="https://docs.azin-lang.org" class="primary">
				Documentation
			</a>

			<a href="https://github.com/azin-lang/azin" class="secondary">
				GitHub
			</a>
		</div>
	</main>

	<div class="divider"></div>

	<section class="features">
		<div class="card">
			<div class="icon">⚡</div>
			<h3>Performant</h3>
			<p>
				Azin is designed with zero-cost abstractions, predictable performance,
				and efficient native code generation in mind.
			</p>
		</div>

		<div class="card">
			<div class="icon">📖</div>
			<h3>Readable</h3>
			<p>
				Clean syntax focused on clarity, making large codebases easier to read
				and maintain.
			</p>
		</div>

		<div class="card">
			<div class="icon">🌍</div>
			<h3>Open Source</h3>
			<p>
				Every part of Azin is developed in public with community discussion,
				contributions and transparency.
			</p>
		</div>
	</section>

	<section class="section">
		<h2>Why Azin?</h2>

		<p>
			Azin is being designed as a modern systems programming language with a strong
			focus on clarity, performance, and developer experience. While the language is
			still under active development, its goal is to provide predictable behavior,
			straightforward syntax, and tooling that feels fast and enjoyable to use.
		</p>
	</section>

	<section class="section">
		<h2>Current Status</h2>

		<p>
			Azin is not yet production-ready. The compiler, standard library,
			documentation, and tooling are still in the early stages of development. At
			the moment, only the lexer has been implemented. The language syntax is
			currently being refined through discussions in the
			<a href="https://azin-lang.org/discord" class="underline">Discord server</a>, after which work
			on the parser will begin. Until then, features and syntax should be expected
			to evolve.
		</p>
	</section>

	<section class="section">
		<h2>Open Source</h2>

		<p>
			The entire project is developed in the open. Contributions, feedback, bug
			reports, and discussions are welcome as the language continues to grow.
		</p>
	</section>

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
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 5rem 2rem;
		box-sizing: border-box;
		animation: fadeIn .5s ease-out;
	}

	.hero::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 180px;
		background: linear-gradient(
			to bottom,
			transparent,
			#09090b
		);
		pointer-events: none;
	}
	
	.accent {
		color: #38bdf8;
	}

	h1 {
		margin: 0;
		font-size: clamp(5rem, 11vw, 8rem);
		font-weight: 900;
		letter-spacing: -.05em;
		line-height: 0.95;
	}

	.description {
		max-width: 720px;
		margin-top: 2rem;
		font-size: 1.35rem;
		line-height: 1.7;
		color: #a1a1aa;
		animation: fadeIn 0.5s ease-out;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		margin-top: 3.5rem;
		animation: fadeIn 1s ease-out;
	}

	.primary,
	.secondary {
		padding: 1rem 2rem;
		border-radius: 10px;
		font-weight: 600;
		text-decoration: none;
		transition: .2s;
	}

	.primary {
		background: #0ea5e9;
		color: white;
	}

	.primary:hover {
		background: #38bdf8;
	}

	.secondary {
		border: 1px solid #27272a;
		color: #d4d4d8;
	}

	.secondary:hover {
		border-color: #38bdf8;
		color: white;
	}

	footer {
		padding: 2rem;
		text-align: center;
		font-size: .9rem;
		color: #71717a;
	}

	.section {
		max-width: 900px;
		margin: 0 auto;
		padding: 5rem 2rem;
		animation: fadeIn .6s ease-out;
	}

	.section h2 {
		margin: 0 0 1rem;
		font-size: 2rem;
		font-weight: 700;
	}

	.section p {
		margin: 0;
		color: #a1a1aa;
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.divider {
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent,
			#27272a,
			transparent
		);
		max-width: 1100px;
		margin: 0 auto;
	}

	.underline {
		color: #38bdf8;
		text-decoration: underline;
		text-decoration-color: rgba(56, 189, 248, 0.5);
		text-underline-offset: 3px;
		transition: color .2s ease, text-decoration-color .2s ease;
	}

	.underline:hover {
		color: #7dd3fc;
		text-decoration-color: currentColor;
	}

	.underline:visited {
		color: #60a5fa;
	}

	.underline:focus-visible {
		outline: 2px solid #38bdf8;
		outline-offset: 4px;
		border-radius: 4px;
	}

	.features {
		max-width: 1100px;
		margin: 0 auto;
		padding: 5rem 2rem;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
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

	.card h3 {
		margin: 0;
		font-size: 1.25rem;
		color: white;
	}

	.card p {
		margin-top: 0.75rem;
		color: #a1a1aa;
		line-height: 1.6;
	}

	.icon {
		font-size: 2rem;
	}

	/* yoinked straight out of https://spatulari.com */
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
			transform: translateY(20px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>