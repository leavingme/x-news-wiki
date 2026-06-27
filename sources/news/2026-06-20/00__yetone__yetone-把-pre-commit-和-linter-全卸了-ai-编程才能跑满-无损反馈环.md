---
type: "source"
title: "yetone：把 pre-commit 和 linter 全卸了，AI 编程才能跑满「无损反馈环」"
description: "**传统工程护栏正在变成 AI 编码的速度税。**  - yetone 主张：pre-commit hook 和 GitHub workflow 里的 linter / formatter 必须全部卸载，否则会拖垮 lossless feedback loop。 - 核心论据：AI 编程的迭代瓶颈已从「人」转移到「钱」和「机器」——频繁的格式 / lint 失败会触发额外 LLM 调用，把 tok"
resource: "https://x.com/i/status/2068279377377562725"
tags:
  - "x-news"
  - "news"
  - "author:yetone"
timestamp: "2026-06-20T13:18:11.459Z"
x_tweet_id: "2068279377377562725"
x_author: "yetone"
x_handle: "yetone"
x_created_at: "2026-06-20T10:26:44.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2068279377377562725"
created: "2026-06-20"
updated: "2026-06-26"
sha256: "eca5ebab9cc255f5663bc6bdad50618fa2fd3034ab5190687468adaee216c066"
sources:
  - "/sources/news/2026-06-20/00__yetone__yetone-把-pre-commit-和-linter-全卸了-ai-编程才能跑满-无损反馈环.md"
---

# yetone：把 pre-commit 和 linter 全卸了，AI 编程才能跑满「无损反馈环」

## 摘要

**传统工程护栏正在变成 AI 编码的速度税。**

- yetone 主张：pre-commit hook 和 GitHub workflow 里的 linter / formatter 必须全部卸载，否则会拖垮 lossless feedback loop。
- 核心论据：AI 编程的迭代瓶颈已从「人」转移到「钱」和「机器」——频繁的格式 / lint 失败会触发额外 LLM 调用，把 token 预算烧在重跑上，而不是用户真正想要的代码改动。
- 隐性结论：format/lint 这类「为人类协作设计」的护栏，本质上假设了「人类是写代码的主体」，而 Agent-first 范式下，主体已切换为 LLM，护栏需要重新设计甚至后置到 review 阶段。

hakki 锐评：这是一条典型的「AI 原生工程纪律」微观点——它的价值不在结论对错，而在逼问「你现在的护栏到底在保护谁」。如果 lint 失败导致的是 LLM 重跑而非人类重读，那这条护栏大概率是反向的 token 黑洞。

## 原文

@ManofPluto 我说的可是 pre-commit 以及 GitHub workflow 中的 linter 跟 formatter 通通都要卸载掉。不然很影响 lossless feedback loop 的速度，基本上迭代的瓶颈变成了你跟你的钱（因为频繁的 Format 跟 Lint 导致的额外的 LLM 调用）跟你的机器本身。


## 元信息

- **作者**: yetone ([@yetone](https://x.com/yetone))
- **发布时间**: 2026-06-20T10:26:44.000Z
- **抓取时间**: 2026-06-20T13:18:11.459Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2068279377377562725) — @yetone (yetone)
[2] [Author page](/entities/authors/yetone.md)
