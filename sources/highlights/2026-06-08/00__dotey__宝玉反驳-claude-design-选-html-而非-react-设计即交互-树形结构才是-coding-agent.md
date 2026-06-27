---
type: "X Tweet"
title: "宝玉反驳「Claude Design 选 HTML 而非 React」：设计即交互，树形结构才是 Coding Agent 的真接口"
description: "**[一句话核心判断]** Claude Design 的技术选型之争，本质是「设计稿」与「交互稿」的范式分歧——HTML 是像素，React 才是可被 Agent 操作的语义结构。  要点： - 设计稿不是静态图纸，需要根据数据动态变化 UI（UX 交互设计），HTML 难以承载，React 的组件化天然契合 - 巨型 HTML 文件上下文不可拆、不可复用，复杂场景下重构成本爆炸；React 把"
resource: "https://x.com/i/status/2063779728360698168"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-08T01:18:36.528Z"
x_tweet_id: "2063779728360698168"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-08T00:26:45.000Z"
x_engagement:
  likes: 10
  retweets: 2
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-design-tool"
x_source: "crawler"
---

# 宝玉反驳「Claude Design 选 HTML 而非 React」：设计即交互，树形结构才是 Coding Agent 的真接口

## 摘要

**[一句话核心判断]** Claude Design 的技术选型之争，本质是「设计稿」与「交互稿」的范式分歧——HTML 是像素，React 才是可被 Agent 操作的语义结构。

要点：
- 设计稿不是静态图纸，需要根据数据动态变化 UI（UX 交互设计），HTML 难以承载，React 的组件化天然契合
- 巨型 HTML 文件上下文不可拆、不可复用，复杂场景下重构成本爆炸；React 把页面切成小组件，单点修改无需加载全量
- React 树形结构 = 设计 → 代码的天然映射层，Coding Agent 可直接对齐；HTML 则是割裂的两套逻辑


宝玉的反驳切中要害：当 AI Coding 进入「设计稿直接交付」阶段，谁能把设计语义结构化，谁就拥有 Agent 时代的护城河。HTML 派把"渲染"当目标，React 派把"可被 Agent 操作"当目标——后者才是终局。

## 原文

> 为什么选 HTML，而不是 React

选 HTML 而不是 react 这个观点我是不认同的。

第一个原因是设计稿它是需要关联数据有交互的，能根据数据去动态地变更 UI，这点 HTML 是做不好的。

像 Claude Design 它不仅仅是一个 UI 设计工具，更是一个 UX 交互设计工具

第二个呢，当你的 UI 复杂到一定程度，你一定是要拆的。如果你是一个巨大的 HTML，其实你要重构或者是更改的话会非常的麻烦，因为它不可能把整个的 HTML 文件给加载进去。

而使而使用 react 的话，它可以把页面拆成若干个很小的小组件，这样的话你一方面可以重用，另外的话如果你要修改，你只要加载其中的一个小组件就可以了，它对上下文要求是没有那么高的。

还有一点是用 react 的话，它天然地就把设计划分成了一个结构化的树形的结构，当基于这个设计稿去开发的时候，对 coding agent 的话它是很好用的。而如果你是一个巨大的 HTML，它不是一个结构化的，它的实现跟设计会是比较割裂的，当你的设计稿去修改的时候，你很难再去跟你的代码有一个映射或者是同步

至于文章中说到的理由，说因为模型要把注意力放在保证 react 的运行准确率上，这个在以前也许是成立的，但以现在的大模型能力，这一点来说已经不是什么问题了


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-08T00:26:45.000Z
- **抓取时间**: 2026-06-08T01:18:36.528Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 10 · 🔄 2 · 💬 6 · 🔖 0 · 👁 0
- **关联主题**: [claude-design-tool](/concepts/claude-design-tool.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2063779728360698168) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/claude-design-tool.md)
