---
type: "X Tweet"
title: "Flue：第一个「Agent Harness」框架诞生，Claude Code架构被抽象成可编程基础设施"
description: "**Flue将Claude Code的核心交互范式（自主规划→执行→反馈）抽象为纯TypeScript框架，无TUI/GUI，100% headless可编程。** - 直接命名「Harness」概念，验证了Harness Engineering从方法论到工程实现的演进路径 - 「No baked-in assumption like requiring a human operator」——这是"
resource: "https://x.com/FredKSchott/status/2050274923852210397"
tags:
  - "x-news"
  - "news"
  - "author:FredKSchott"
timestamp: "2026-05-02T07:18:14.739Z"
x_tweet_id: "2050274923852210397"
x_author: "fks"
x_handle: "FredKSchott"
x_created_at: "2026-05-01T18:03:28.000Z"
x_engagement:
  likes: 2845
  retweets: 251
  replies: 136
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "ai-trend-digest"
---

# Flue：第一个「Agent Harness」框架诞生，Claude Code架构被抽象成可编程基础设施

## 摘要

**Flue将Claude Code的核心交互范式（自主规划→执行→反馈）抽象为纯TypeScript框架，无TUI/GUI，100% headless可编程。**
- 直接命名「Harness」概念，验证了Harness Engineering从方法论到工程实现的演进路径
- 「No baked-in assumption like requiring a human operator」——这是对Claude Code最大限制的精准解构
- 开源headless Agent框架的出现意味着：Agent编排层正在从产品功能降级为基础设施

gakki 锐评：当有人把你的产品命名为「框架」并开源，说明你的产品已经成为行业参照系。Flue对Claude Code的意义，类似Next.js对React——不是替代，是生态确认。

## 原文

Introducing Flue — The First Agent Harness Framework

Flue is a TypeScript framework for building the next generation of agents, designed around a built-in agent harness. 

Flue is like Claude Code, but 100% headless and programmable. There's no baked in assumption like requiring a human operator to function. No TUI. No GUI. Just TypeScript.

But using Flue feels like using Claude Code. The agents you build act autonomously to solve problems and complete tasks. They require very little code to run. Most of the "logic" lives in Markdown: skills and context and AGENTS.md.

Flue is like Astro or Next.js for agents (not surprising, given my background 🙃). It's not another AI SDK. It's a proper runtime-agnostic framework. Write once, build, and deploy your agents anywhere (Node.js, Cloudflare, GitHub Actions, GitLab CI/CD, etc).

We originally built Flue to power AI workflows inside of the Astro GitHub repo. But then @_bgiori got his hands on it, and we realized that every agent needs a framework like Flue, not just us.

Check it out! It's early, but I'm curious to hear what people think. Are agents ready for their library -> framework moment?


## 元信息

- **作者**: fks ([@FredKSchott](https://x.com/FredKSchott))
- **发布时间**: 2026-05-01T18:03:28.000Z
- **抓取时间**: 2026-05-02T07:18:14.739Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2845 · 🔄 251 · 💬 136 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/FredKSchott/status/2050274923852210397) — @FredKSchott (fks)
[2] [Author page](/entities/authors/fredkschott.md)
