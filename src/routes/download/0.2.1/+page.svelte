<svelte:head>
    <title>Azin 0.2.1</title>

    <meta
        name="description"
        content="Download Azin 0.2.1, a stability update with improved diagnostics, semantic analysis, parser recovery, and compiler reliability."
    />
</svelte:head>

<script lang="ts">
	const year = new Date().getFullYear();
</script>

<div class="page">
	<main class="hero">
		<span class="badge">Maintenance Release</span>

        <h1>Azin <span class="accent">0.2.1</span></h1>

        <p class="description">
            Azin 0.2.1 is a maintenance release focused on compiler stability,
            improved diagnostics, stronger semantic analysis, and numerous parser
            and code generation fixes.
        </p>

        <div class="buttons">
            <a href="https://github.com/azin-lang/Azin/releases/download/v0.2.1/azc.exe" class="primary">Download for Windows</a>
            <a href="https://github.com/azin-lang/Azin/releases/download/v0.2.1/azc" class="primary">Download for Linux</a>
        </div>

        <div class="links">
            <a href="https://github.com/azin-lang/Azin/releases/tag/v0.2.1">View Release →</a>
            <span>•</span>
            <a href="https://github.com/azin-lang/Azin">Source Code →</a>
        </div>
		<p class="released">Released July 15, 2026</p>
	</main>

	<div class="divider"></div>

	<section class="section">
		<h2>Installation</h2>

		<p>
			Download the latest archive, extract it and add the executable to your PATH.
		</p>

		<pre><code>azc --version

Azin Compiler 0.2.1</code></pre>
	</section>

    <section class="section">
        <h2>Highlights</h2>

        <div class="features">
            <div class="card">
                <div class="icon">🛠️</div>
                <h3>Improved Semantic Analysis</h3>
                <p>
                    Stronger type checking, function analysis, and better validation
                    of programs before code generation.
                </p>
            </div>

            <div class="card">
                <div class="icon">💬</div>
                <h3>Better Diagnostics</h3>
                <p>
                    Clearer compiler errors with improved parser recovery, helping
                    you identify and fix issues faster.
                </p>
            </div>

            <div class="card">
                <div class="icon">⚡</div>
                <h3>Compiler Stability</h3>
                <p>
                    Numerous parser, semantic analysis, and code generation fixes
                    make Azin more reliable than ever.
                </p>
            </div>
        </div>
    </section>

<section class="section">
	<h2>Changelog</h2>

	<h3>Added</h3>

    <ul>
        <li>Improved parser error recovery</li>
        <li>Improved semantic analysis</li>
        <li>Better binary operator type checking</li>
        <li>Improved return type validation</li>
        <li>Improved identifier resolution diagnostics</li>
        <li>Improved parser support for parenthesized expressions</li>
        <li>Fixed several code generation edge cases</li>
        <li>Numerous compiler bug fixes and stability improvements</li>
    </ul>

	<h3>Improved</h3>

    <ul>
        <li>More informative compiler diagnostics</li>
        <li>More robust parser recovery</li>
        <li>Better semantic validation</li>
        <li>Cleaner handling of invalid syntax</li>
        <li>General compiler reliability</li>
    </ul>

	<h3>Known Issues</h3>

	<ul>
		<li>The language is still pre-1.0 and syntax may change.</li>
		<li>The standard library is non-existent.</li>
		<li>Diagnostics are continuously being improved.</li>
	</ul>
</section>

    <section class="section">
        <h2>Fibonacci in Azin</h2>

    <pre><code>importc "stdio"

fn fibonacci(n: int) do
    if n &lt; 1 then
        return n
    end

    return fibonacci(n - 1) + fibonacci(n - 2)
end

fn main: int do
    var mut i = 0

    loop
        printf("%d\n", fibonacci(i))

        if i == 10 then
            stop
        end

        i = i + 1
    end

    return 0
end</code></pre>
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
	min-height:70svh;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	text-align:center;
	padding:5rem 2rem;
	box-sizing:border-box;
	animation:fadeIn .5s ease-out;
}

.badge{
	padding:.45rem .9rem;
	border-radius:999px;
	background:#082f49;
	color:#7dd3fc;
	font-size:.9rem;
	font-weight:600;
	margin-bottom:2rem;
}

.accent{
	color:#38bdf8;
}

h1{
	margin:0;
	font-size:clamp(4rem,10vw,6rem);
	font-weight:900;
	letter-spacing:-.05em;
}

.description{
	max-width:760px;
	margin-top:2rem;
	color:#a1a1aa;
	line-height:1.8;
	font-size:1.2rem;
}

.released{
	margin-top:2rem;
	color:#71717a;
}

.buttons{
	display:flex;
	gap:1rem;
	margin-top:3rem;
	flex-wrap:wrap;
}

.primary,
.secondary{
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
	max-width:900px;
	margin:auto;
	padding:4rem 2rem;
	width:100%;
	box-sizing:border-box;
}

.section h2{
	margin:0 0 1rem;
	font-size:2rem;
}

.section h3{
	margin-top:2rem;
}

.section p,
.section li{
	color:#a1a1aa;
	line-height:1.8;
}

.features{
	display:grid;
	grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
	gap:1.5rem;
	margin-top:2rem;
}
.card{
	padding:1.5rem;
	border-radius:14px;
	border:1px solid #27272a;
	background:#0d0d10;
	transition:border-color .2s,background .2s,transform .2s;
}

.card:hover{
	border-color:#38bdf8;
	background:#111114;
	transform:translateY(-2px);
}

.card h3{
	margin:0;
	font-size:1.2rem;
	color:white;
}

.card p{
	margin-top:.75rem;
	color:#a1a1aa;
	line-height:1.6;
}

.icon{
	font-size:2rem;
	margin-bottom:.75rem;
}

pre{
	margin-top:1.5rem;
	padding:1.5rem;
	background:#0d0d10;
	border:1px solid #27272a;
	border-radius:14px;
	overflow-x:auto;
}

code{
	font-family:
		"JetBrains Mono",
		"Fira Code",
		Consolas,
		monospace;
	font-size:.95rem;
	color:#e4e4e7;
}

ul{
	padding-left:1.5rem;
}

footer{
	margin-top:auto;
	padding:2rem;
	text-align:center;
	font-size:.9rem;
	color:#71717a;
}

@media (max-width:700px){

	.hero{
		min-height:auto;
		padding:4rem 1.5rem;
	}

	.buttons{
		flex-direction:column;
		width:100%;
	}

	.primary,
	.secondary{
		width:100%;
		box-sizing:border-box;
		text-align:center;
	}

	.features{
		grid-template-columns:1fr;
	}
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

.links{
	margin-top:1.5rem;
	display:flex;
	gap:.75rem;
	align-items:center;
	justify-content:center;
}

.links a{
	color:#38bdf8;
	text-decoration:none;
	font-weight:500;
}

.links a:hover{
	color:#7dd3fc;
}

.links span{
	color:#52525b;
}
</style>