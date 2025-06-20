---
title: 内置组件
icon: puzzle-piece
order: 4
category:
  - 组件
tag:
  - 组件
  - Markdown
---

通过 `vuepress-plugin-components`，你可以在 Markdown 文件中导入并使用一些组件。

可用组件:

- ArtPlayer: 由 ArtPlayer 驱动的视频播放器。
- Badge: 多彩的徽章组件
- BiliBili: 嵌入 BiliBili 视频
- CodePen: 嵌入 CodePen 演示
- PDF: 嵌入 PDF 查看器
- Share: 通过社交媒体分享当前页面
- StackBlitz: 嵌入 StackBlitz 演示
- SiteInfo: 显示站点
- VPBanner: 一个横幅组件
- VPCard: 一个卡片组件
- VidStack: 由 VidStack 驱动的音频/视频播放器

为了启用组件，你需要将 `plugins.components.components` 设置为一个组件名的数组。

<!-- more -->

::: note

`<Badge />` 是默认可用的，以便与 `@vuepress/theme-default` 行为一致。

:::

```ts twoslash {7-20} title=".vuepress/theme.ts"
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  plugins: {
    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
      ],
    },
  },
});
```

## 杂项

### Badge

支持自定义颜色的徽章。

::: preview 徽章类型

- <Badge text="tip" type="tip" vertical="middle" />
- <Badge text="warning" type="warning" vertical="middle" />
- <Badge text="danger" type="danger" vertical="middle" />
- <Badge text="important" type="important" vertical="middle" />
- <Badge text="info" type="info" vertical="middle" />
- <Badge text="note" type="note" vertical="middle" />

:::

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/utilities/badge.html">Badge</ProjectLink> 页面。

### SiteInfo

<!-- @include: @components/zh/guide/content/site-info.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/content/site-info.html">SiteInfo</ProjectLink> 页面。

### Share

<!-- @include: @components/zh/guide/utilities/share.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/utilities/share.html">Share</ProjectLink> 页面。

## 媒体

### VidStack

> 先安装 `vidstack@next` 。

<!-- @include: @components/zh/guide/media/vid-stack.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/media/vid-stack.html">VidStack</ProjectLink> 页面。

### PDF

PDF 浏览器组件。

<!-- @include: @components/zh/guide/media/p-d-f.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/media/p-d-f.html">PDF</ProjectLink> 页面。

### BiliBili

在 Markdown 文件中嵌入 B 站视频。

<!-- @include: @components/zh/guide/media/bili-bili.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/media/bili-bili.html">BiliBili</ProjectLink> 页面。

### ArtPlayer

> 先安装 `artplayer` 。

<!-- @include: @components/zh/guide/media/art-player.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/media/art-player.html">ArtPlayer</ProjectLink> 页面。

## 代码相关

### CodePen

一个允许你嵌入 CodePen 演示的组件。

<!-- @include: @components/zh/guide/code/code-pen.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/code/code-pen.html">CodePen</ProjectLink> 页面。

### StackBlitz

在 Markdown 文件中嵌入 StackBlitz 演示。

<!-- @include: @components/zh/guide/code/stack-blitz.md#demo -->

有关可用属性，请参阅 <ProjectLink name="components" path="/zh/guide/code/stack-blitz.html">StackBlitz</ProjectLink> 页面。
