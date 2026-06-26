---
type: "X Tweet"
title: "宝玉实操Claude Design→Code：git diff 做桥梁，一句话完成 Swift UI 同步"
description: "**Claude Design 与 Claude Code 之间的 git diff 工作流首次有了完整可复现的工程样例。**  - 视频字幕编辑器：标题文字从单行改两行，设计稿修改后导出 zip 即可在项目中 git diff 看到精确变更 - 给 Claude Code 一句提示：「参考 design 目录下的相关变更，对 UI 进行变更」，Claude 自动读 diff、定位修改点、改 Sw"
resource: "https://x.com/i/status/2065940342264770589"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-14T01:18:51.816Z"
x_tweet_id: "2065940342264770589"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-13T23:32:15.000Z"
x_engagement:
  likes: 29
  retweets: 1
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-design-disruption"
x_source: "crawler"
---

# 宝玉实操Claude Design→Code：git diff 做桥梁，一句话完成 Swift UI 同步

## 摘要

**Claude Design 与 Claude Code 之间的 git diff 工作流首次有了完整可复现的工程样例。**

- 视频字幕编辑器：标题文字从单行改两行，设计稿修改后导出 zip 即可在项目中 git diff 看到精确变更
- 给 Claude Code 一句提示：「参考 design 目录下的相关变更，对 UI 进行变更」，Claude 自动读 diff、定位修改点、改 Swift 代码
- 宝玉强调全程主要在 Claude Design 上操作，Claude Code 只做收口同步——设计稿仍是 source of truth


gakki 锐评：这条工作流把「设计→代码」从"双向打架"变成了"单向收敛"，design.md / data.js 这类纯文本设计协议正在悄悄吃掉 Figma 的护城河——可版本化才是 LLM 时代的硬通货。

## 原文

举一个具体的用 Claude Design 更新设计和代码的例子

我有一个视频字幕编辑器工具，是 Claude Design 做的设计，之前标题文字和下面的信息是放在一行，标题一长就放不下，于是我就让它变成两行。

图1 是我在设计稿上做的修改，修改好了后导出下载 zip 文件，放到项目中，用 git diff 很容易看到做了哪些变更（图2）

然后一句简单的提示给 Claude Code：
> 参考设计稿 design 目录下的相关变更，对 UI 进行变更

Claude 自己通过 git diff 去分析变更，然后找出所有设计稿修改了的位置，自己帮我修改了相应的 Swift 代码，任务完成！（图4是修改后的效果）

全程我主要是在 Claude Design 上修改，然后需要手工去同步一下。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-13T23:32:15.000Z
- **抓取时间**: 2026-06-14T01:18:51.816Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 29 · 🔄 1 · 💬 4 · 🔖 0 · 👁 0
- **关联主题**: [claude-design-disruption](/concepts/claude-design-disruption.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2065940342264770589) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/claude-design-disruption.md)
