---
title: Project Deployment
icon: rocket
order: 7
category:
  - Cookbook
  - Tutorial
  - Get Started
tag:
  - Project Deployment
---

This tutorial guides you on how to deploy a VuePress project.

<!-- more -->

## Build Project

Once you complete the initial development of the project locally, you can build the website using the `pnpm docs:build` command.

If you are using the theme template, the website content will be output to the `.vuepress/dist` folder under the VuePress project directory. These files are the final output of VuePress.

You can deploy the contents of this folder to your website's server. The easiest way to do this is to upload to GitHub and enable GitHub Pages.

After the action finishes, you should go to the GitHub repository settings to choose `gh-pages` as the source for GitHub Pages.

## Deploy to GitHub Pages

If you're using the theme template, and you choose to create a GitHub workflow during setup, the only thing you need to do is set the correct [base option](https://vuejs.press/reference/config.html#base).

- If you are going to publish to `https://<USERNAME>.github.io/`, you must upload the entire project to the `https://github.com/<USERNAME>/<USERNAME>.github.io` repository. You don't need to make any changes in this case, since `base` defaults to `"/"`.

- If your repository link is in a normal format like `https://github.com/<USERNAME>/<REPO>`, the website will be published to `https://<USERNAME>.github.io/<REPO>/`, so you need to set `base` to `"/<REPO>/"`.

## Other Deployment Methods

For other deployment methods, please refer to [VuePress → Deployment](https://vuejs.press/guide/deployment.html).
