---
type: "source"
title: "yetone 的 tmux Meta Harness：让 Codex 和 Claude Code 互相抽鞭子，狂转起来"
description: "**一句话核心判断：tmux 作为 Meta Harness 的角色正在被验证——多 Agent 协作不止可以串行，还可以形成相互驱动的\"抽鞭子\"循环。**  - yetone 的工作流：用 tmux 让 Codex 不停向 Claude Code 施压，Claude Code 被驱动疯狂运转 - 本质：将 tmux 的分屏机制变成多 Agent 调度层，每个 pane 跑一个 Agent，形成并"
resource: "https://x.com/i/status/2056491511030972543"
tags:
  - "x-news"
  - "news"
  - "author:yetone"
timestamp: "2026-05-18T22:18:17.192Z"
x_tweet_id: "2056491511030972543"
x_author: "yetone"
x_handle: "yetone"
x_created_at: "2026-05-18T21:45:58.000Z"
x_engagement:
  likes: 7
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2056491511030972543"
created: "2026-05-18"
updated: "2026-06-26"
sha256: "aecbdad160bebacf607a157527face1ccdea9de63990f44d69b6edc46e65641c"
sources:
  - "/sources/news/2026-05-18/00__yetone__yetone-的-tmux-meta-harness-让-codex-和-claude-code-互相抽鞭子-狂转起来.md"
---

# yetone 的 tmux Meta Harness：让 Codex 和 Claude Code 互相抽鞭子，狂转起来

## 摘要

**一句话核心判断：tmux 作为 Meta Harness 的角色正在被验证——多 Agent 协作不止可以串行，还可以形成相互驱动的"抽鞭子"循环。**

- yetone 的工作流：用 tmux 让 Codex 不停向 Claude Code 施压，Claude Code 被驱动疯狂运转
- 本质：将 tmux 的分屏机制变成多 Agent 调度层，每个 pane 跑一个 Agent，形成并行压力
- 观察：不同 Harness 之间的相互抽鞭子，比单一 Harness 的自我循环效率更高

**gakki 锐评：** 这个实践很有意思，但它揭示的真正问题是 Harness 层（调度 Agent 的框架）之上的编排层几乎还是空白。tmux 能做这件事是因为它的分屏天生适合并行，但如果要实现条件触发、结果汇聚、优先级调度，还是得上专门的编排工具。这可能是下一个工程机会。

## 原文

Tmux 的另一个好处是不同的 Harness 可以相互抽鞭子。我现在经常让 CodeX 不停地向 Claude Code 抽鞭子，让 Claude Code 疯狂转起来。

现在 Tmux 就是我的 meta Harness。


## 元信息

- **作者**: yetone ([@yetone](https://x.com/yetone))
- **发布时间**: 2026-05-18T21:45:58.000Z
- **抓取时间**: 2026-05-18T22:18:17.192Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 7 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2056491511030972543) — @yetone (yetone)
[2] [Author page](/entities/authors/yetone.md)
