

New contributors can become productive much sooner because there are fewer language features and fewer pitfalls to learn.

### Great tooling

Go comes with excellent tooling out of the box.

Formatting, testing, benchmarking, profiling, documentation generation, dependency management, and cross compilation are all built into the toolchain.

Instead of spending time fighting build systems or configuring development environments, we can spend that time building Azin.

### Fast builds

Compiler development involves rebuilding the project constantly.

Go has very fast compile times and incremental package builds, which means less waiting and a much smoother development experience.

### Concurrency

Modern compilers perform many tasks independently, such as parsing files, loading packages, dependency analysis, type checking, and other compilation stages.

Go makes writing concurrent code straightforward with goroutines and channels, making it much easier to take advantage of modern CPUs when the time comes.

### Simpler memory management

Go has automatic memory management, so we do not have to spend time dealing with manual allocation or ownership models.

That lets us focus on building compiler features instead of debugging memory issues.

### Strong standard library

Go's standard library is extensive and practical.

Many things we would otherwise have to implement ourselves are already available, keeping the compiler simpler and easier to maintain.---
title: Rewrite in Go
excerpt: We have decided to rewrite the bootstrap compiler in Go.
read_time: 4
published_at: 2026-07-10
draft: false
authors: spatulari
---

As the title says, we have decided to rewrite the **bootstrap compiler** in Go.

This a decision we made today. Over the past few weeks we have been building the compiler in C++, and while we learned a lot from it, we also realized it was slowing us down more than helping us.

Our current goal is simple: get a working bootstrap compiler so we can iterate on the language itself. Once Azin is mature enough, we plan to write a self-hosted compiler in Azin. The Go compiler is not the final destination. It is the tool that will help us get there.

## Why rewrite?

The biggest reason is contributor accessibility.

C++ is an amazing language, but it is also a very large and complicated one. Right now, only a few people on the team are comfortable contributing to the compiler. In practice, most of the work ends up being done by one or two people.

That is not a good place to be for an open source language project.

We want people to be able to jump in, fix bugs, improve diagnostics, work on the parser, or add new language features without spending weeks learning the implementation language first.

A compiler is a project that will live for years, so maintainability matters just as much as performance. Choosing a language that more contributors can understand and work with means the project can grow much faster.

## Why Go?

Go gives us the balance we were looking for.

### Easy to learn

Most of our contributors already know C or C++. Go is a very approachable language for people coming from those backgrounds, and its language specification is relatively small.

New contributors can become productive much sooner because there are fewer language features and fewer pitfalls to learn.

### Great tooling

Go comes with excellent tooling out of the box.

Formatting, testing, benchmarking, profiling, documentation generation, dependency management, and cross compilation are all built into the toolchain.

Instead of spending time fighting build systems or configuring development environments, we can spend that time building Azin.

### Fast builds

Compiler development involves rebuilding the project constantly.

Go has very fast compile times and incremental package builds, which means less waiting and a much smoother development experience.

### Concurrency

Modern compilers perform many tasks independently, such as parsing files, loading packages, dependency analysis, type checking, and other compilation stages.

Go makes writing concurrent code straightforward with goroutines and channels, making it much easier to take advantage of modern CPUs when the time comes.

### Simpler memory management

Go has automatic memory management, so we do not have to spend time dealing with manual allocation or ownership models.

That lets us focus on building compiler features instead of debugging memory issues.

### Strong standard library

Go's standard library is extensive and practical.

Many things we would otherwise have to implement ourselves are already available, keeping the compiler simpler and easier to maintain.

### Better for growing the project

As Azin grows, we want more people to contribute.

Go is widely used, easy to read, and easy to pick up. Lowering the barrier to entry means more people can participate, review code, and help move the project forward.

## What happens next?

Over the coming weeks we will be rebuilding the bootstrap compiler in Go.

The knowledge we gained from the C++ implementation is not being thrown away. We now have a much better understanding of the architecture, the language design, and how we want the compiler to evolve.

Once Azin reaches a point where it is capable of compiling itself, we will begin work on a self-hosted compiler written in Azin.
