<svelte:head>
	<title>Downloads • Azin</title>
	<meta
		name="description"
		content="Download the latest releases of the Azin programming language."
	/>
</svelte:head>

<script lang="ts">
	const year = new Date().getFullYear();
</script>

<div class="page">
	<main class="hero">
		<h1>Downloads</h1>

		<p class="description">
			Get the latest release of the Azin programming language. Every release has
			its own page containing downloads, installation instructions and a full
			changelog.
		</p>

		<div class="buttons">
			<a href="/download/0.2.1" class="primary">Download Azin 0.2.1</a>
			<a href="/download/latest" class="secondary">Latest Release →</a>
		</div>
	</main>

	<div class="divider"></div>

	<section class="section">
		<h2>Supported Platforms</h2>

		<div class="grid">
			<div class="card">
				<div class="icon">🪟</div>
				<h3>Windows</h3>
				<p>Officially supported.</p>
			</div>

			<div class="card">
				<div class="icon">🐧</div>
				<h3>Linux</h3>
				<p>Officially supported.</p>
			</div>

			<div class="card">
				<div class="icon">🍎</div>
				<h3>macOS</h3>
				<p>Officially supported.</p>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Release History</h2>

		<a class="release" href="/download/0.2.1">
			<div>
				<h3>0.2.1</h3>
				<p>Maintenance release.</p>
				<span>July 15, 2026</span>
			</div>

			<strong>View →</strong>
		</a>

		<a class="release" href="/download/0.2.0">
			<div>
				<h3>0.2.0</h3>
				<p>First public preview release.</p>
				<span>July 14, 2026</span>
			</div>

			<strong>View →</strong>
		</a>

		<a class="release" href="/download/0.1.0">
			<div>
				<h3>0.1.0</h3>
				<p>First public preview release.</p>
				<span>July 12, 2026</span>
			</div>

			<strong>View →</strong>
		</a>
	</section>

	<footer>
		© {year} Azin Language Project
	</footer>
</div>

<style>
:global(body){
	margin:0;
	background:#09090b;
	font-family:Inter,system-ui,sans-serif;
}

.page{
	min-height:100vh;
	background:#09090b;
	color:white;
	display:flex;
	flex-direction:column;
}

.hero{
	min-height:60svh;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	text-align:center;
	padding:4rem 2rem;
	animation:fadeIn .5s ease-out;
}

h1{
	margin:0;
	font-size:clamp(4rem,9vw,6rem);
	font-weight:900;
	letter-spacing:-.05em;
}

.description{
	max-width:760px;
	margin-top:1.5rem;
	font-size:1.2rem;
	line-height:1.8;
	color:#a1a1aa;
}

.buttons{
	display:flex;
	gap:1rem;
	margin-top:3rem;
	flex-wrap:wrap;
}

.primary,.secondary{
	padding:1rem 2rem;
	border-radius:10px;
	text-decoration:none;
	font-weight:600;
	transition:.2s;
}

.primary{
	background:#0ea5e9;
	color:white;
}

.primary:hover{
	background:#38bdf8;
}

.secondary{
	border:1px solid #27272a;
	color:#d4d4d8;
}

.secondary:hover{
	border-color:#38bdf8;
	color:white;
}

.divider{
	height:1px;
	background:linear-gradient(90deg,transparent,#27272a,transparent);
	max-width:1100px;
	width:100%;
	margin:auto;
}

.section{
	max-width:1000px;
	width:100%;
	margin:auto;
	padding:4rem 2rem;
	box-sizing:border-box;
}

.section h2{
	margin:0 0 2rem;
	font-size:2rem;
}

.grid{
	display:grid;
	grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
	gap:1.5rem;
}

.card,.release{
	border:1px solid #27272a;
	background:#0d0d10;
	border-radius:14px;
	padding:1.5rem;
	transition:.2s;
}

.card:hover,.release:hover{
	border-color:#38bdf8;
	transform:translateY(-2px);
}

.release{
	display:flex;
	justify-content:space-between;
	align-items:center;
	text-decoration:none;
	color:white;
	gap:2rem;

	margin-bottom: 1rem;
}

.release h3,.card h3{
	margin:0;
}

.release p,.card p{
	color:#a1a1aa;
	line-height:1.6;
	margin:.75rem 0;
}

.release span{
	color:#71717a;
	font-size:.9rem;
}

.icon{
	font-size:2rem;
	margin-bottom:.5rem;
}

footer{
	padding:2rem;
	text-align:center;
	color:#71717a;
	font-size:.9rem;
}

@keyframes fadeIn{
	from{
		opacity:0;
		transform:translateY(12px);
	}
	to{
		opacity:1;
		transform:translateY(0);
	}
}
</style>