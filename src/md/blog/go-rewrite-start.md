---
## title: Beginning the Go Rewrite
excerpt: The first lines of code have been written. Here is>
read_time: 3
published_at: 2026-07-11
draft: true
authors: twlve
---

Following up on our decision to shift away from C++,
we have officially kicked off the rewrite of the Azin
bootstrap compiler in Go. The repository has been
restructured, the first modules are landing, and the
foundations of the new architecture are taking
shape. Our singular focus right now is
velocity—building a clean, maintainable pipeline so
we can get to a self-hosted compiler as efficiently
as possible. Here is a look at what we’ve built so
far and how the new codebase is structured.

## Layout of the New Compiler
We are leveraging Go's strict package boundaries to
ensure the compiler remains highly modular from day
one. Instead of a monolithic layout, each distinct
phase of the compilation process lives in its own
isolated package under `internal/`: *
**`cmd/compiler`**: The main entry point. It handles
CLI flags, manages the overall compilation workflow,
and prints debugging metadata. * **`internal/fs`**:
Dedicated to robust file system operations,
including strict verification of the `.az` file
extension. * **`internal/lexer`**: The tokenizer
phase. It ingests raw source bytes and converts them
into structured token streams. *
**`internal/diagnostics`**: The central
error-reporting hub designed to handle pipeline
failures gracefully rather than relying on unhandled
crashes.

## Keeping it Lightweight and Toolchain-Ready
One of our immediate wins with Go has been the
integration of robust developer tooling. We have
already introduced a completely overhauled GitHub
Actions CI workflow that automatically handles the
heavy lifting across Linux, macOS, and Windows: *
**Automated Linting and Formatting**: Code
formatting verification is strictly enforced via
`gofmt` to keep the codebase pristine across all
contributors. * **Static Verification**: Integrated
`go vet` and test pipelines to catch syntax errors
or typing mismatches instantly on every push. *
**Cross-Platform Delivery**: Compiling native `azc`
binaries smoothly across entirely different
operating system targets.

## Next Steps: The Parser
With the lexer stabilized and generating structured
token output, we are moving directly into the
parsing stage. The goal for the upcoming days is
mapping out our Abstract Syntax Tree (AST) structure
and plugging the parser into our `diagnostics`
error-reporting engine. Every stage of the compiler
will cleanly pass down diagnostic states, making it
incredibly accessible for new contributors to jump
in and improve compiler messages.

If you want to get your hands dirty with the new Go impleme>
check out the repository, run `go test ./...`,
or drop by the [Discord Server](https://discord.gg/CQYmqVPB>
