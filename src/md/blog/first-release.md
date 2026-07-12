---
title: Azin 0.1.0
excerpt: Announcing Azin 0.1.0
published_at: 2026-07-12
read_time: 1
draft: false
authors: spatulari
---

Today marks the first public release of **Azin**.

After months of designing the language, building the compiler, refining the syntax, and laying the groundwork for the project, **Azin 0.1.0** is now available as the first public preview release.

This is an exciting milestone, not because the language is finished, but because it has reached the point where people can download it, write programs, compile them, and begin experimenting with the ideas behind Azin.


## What is Azin?

Azin is a modern systems programming language focused on structural clarity, low-level control, and human readability.

Rather than trying to reinvent programming entirely, Azin aims to provide a language that feels familiar while removing unnecessary complexity. The goal is straightforward: make systems programming easier to read, easier to maintain, and enjoyable to work with without sacrificing performance.

Although the language is still in active development, this release establishes the foundation that future versions will continue to build upon.

## What's Included in 0.1.0

Version 0.1.0 introduces the first usable version of the language and compiler.

Some of the major features include:

* Function declarations
* Variables with type inference
* Explicit type annotations
* Integer, floating-point, character and string literals
* Function calls
* Arithmetic expressions
* Conditional statements (`if` / `else`)
* Return statements
* Semantic analysis
* Static type checking
* Type inference
* Native executable generation through C
* C interoperability using `importc`

A simple Azin program now looks like this:

```azin
importc "stdio.h"

fn square(x: int): int do
    return x * x
end

fn main: int do
    var result = square(12)

    printf("Hello from Azin!\n")

    return result
end
```

The compiler translates Azin into portable C code before compiling it into a native executable, allowing the language to leverage mature C toolchains such as GCC and Clang.

## Compiler Progress

The compiler has grown significantly since development began.

What started as a lexer has evolved into a complete compilation pipeline capable of:

* Lexical analysis
* Parsing
* Abstract syntax tree generation
* Semantic analysis
* Symbol resolution
* Type inference
* Static type checking
* C code generation

While there is still a great deal of work ahead, this represents an important foundation for the future of the language.

## Introducing the Zed Extension

Alongside the compiler, we're also releasing the official **Zed** extension.

The extension provides syntax highlighting for Azin source files and is available in the [**azin-lang/zed**](https://github.com/azin-lang/zed) repository.

As the language evolves, the extension will continue to improve with additional highlighting rules, editor support, and future language tooling.

This is only the beginning of Azin's editor ecosystem, with support for additional editors planned in the future.

## Still Early

Although 0.1.0 is the first public release, Azin should still be considered an early preview.

The language is **not yet production-ready**.

Many features are still planned, including:

* Loops
* Structs (they kinda work but not well)
* Enums
* Modules
* A growing standard library
* Better diagnostics
* Improved tooling
* Formatting tools
* Language server support
* Additional editor integrations

Syntax may evolve before the eventual 1.0 release as the language continues to mature.

## Open Development

One of Azin's core principles is developing in the open.

Discussions about language design, compiler implementation, and future features all happen publicly, allowing anyone to follow development, report issues, suggest improvements, or contribute code.

Every release moves the project one step closer to a complete systems programming language.

## Looking Ahead

Version 0.1.0 is only the beginning.

Future releases will continue expanding the language, improving the compiler, growing the tooling ecosystem, and making Azin a better experience for developers.

There is still a long road ahead, but today's release is an important milestone for the project.

If you'd like to follow development, experiment with the language, or contribute, now is a great time to get involved.

Thank you to everyone who has supported Azin so far. Here's to the next milestone.
