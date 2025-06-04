---
title: Runtime Setup
icon: leaf
order: 1
category:
  - Cookbook
  - Tutorial
  - Get Started
tag:
  - Runtime
---

This tutorial guides you through setting up a VuePress runtime environment.

<!-- more -->

## Editor

You need an editor to edit your project. We recommend using VS Code to write and run your VuePress projects.

1. Click the blue button on the left of the [Download page](https://code.visualstudio.com/) to download.

1. Double-click the installation package to open.

1. Agree to the User Agreement.

1. In the installation options, make sure to **select all** the following options:

   Check **Add to directory context menu**, **Add to file context menu**, **Register code as a supported file editor**, **Add to path**.

1. After the initial startup of VS Code, if Git is not installed in advance, it may prompt that Git software is not found. Just ignore it.

## Node.js

::: info Introduction

[Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

:::

You need to download and install the latest long-term support (LTS) release.

1. Click the download button on the [official website](https://nodejs.org/en/).
1. Run the installer, keep all default settings, and proceed through all steps to finish.

::: warning

If you are a complete beginner, please do not change the default installation directory.

Node.js itself will only take up a few dozen megabytes of space!

:::

After you install Node.js, enable corepack with the following command (Windows users need to run with administrator privileges):

```bash
corepack enable
```

::: tip

We recommend using pnpm as your package manager, because VuePress and VuePress Theme Hope both use pnpm to manage dependencies.

Some features of pnpm ensure that you have the correct dependencies, and it can also speed up your installation.

:::
