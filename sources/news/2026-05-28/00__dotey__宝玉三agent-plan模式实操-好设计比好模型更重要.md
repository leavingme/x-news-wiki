---
type: "X Tweet"
title: "宝玉三Agent Plan模式实操：好设计比好模型更重要"
description: "**[一句话核心判断]** 三Agent并行Plan→选设计→借鉴其他版本→相位执行，这套工作流本质是\"设计即代码\"而非\"代码即代码\"。  **信息增量：** 1. 复杂任务应先让 Codex/Claude Code/Cursor 并行写 Plan，用最好的模型 2. 选设计不选答案——满意则直接执行，不满意则把其他版本设计发给它借鉴 3. 复杂Plan应分Phases，每个phase明确验证方法"
resource: "https://x.com/i/status/2059773942500298934"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-28T01:18:54.757Z"
x_tweet_id: "2059773942500298934"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-27T23:09:11.000Z"
x_engagement:
  likes: 117
  retweets: 18
  replies: 24
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 宝玉三Agent Plan模式实操：好设计比好模型更重要

## 摘要

**[一句话核心判断]**
三Agent并行Plan→选设计→借鉴其他版本→相位执行，这套工作流本质是"设计即代码"而非"代码即代码"。

**信息增量：**
1. 复杂任务应先让 Codex/Claude Code/Cursor 并行写 Plan，用最好的模型
2. 选设计不选答案——满意则直接执行，不满意则把其他版本设计发给它借鉴
3. 复杂Plan应分Phases，每个phase明确验证方法，保存为Markdown+素材引用
4. 执行阶段可用便宜模型兜底，设计阶段省不得

**gakki 锐评：** 多Agent Plan本质是把"模型选型"变成"设计选秀"——但问题是，如果三个Agent都平庸，那最优解是换提示词而不是选最不差的。

## 原文

用好 Coding Agent，重点是两头，尤其是开头的部分，如果一开始就走偏了后面怎么改都改不好。

比如我要开发一个新功能，首先不是直接叫给 Agent 去写，会把需求简单整理一下，发给三个不同的 Agent（Codex、Claude Code、Cursor），打开 Plan 模式去帮我写 Plan，这里要用最好的模型。

都写完了之后我去看看谁的最好，以及其他版本有什么可取的地方。GPT 5.5 和 Claude Opus 4.7 并不是谁总是最好，选好了设计后，再把另外两个设计也发给它，让它借鉴一下。当然都不满意就要反复调整提示词多轮讨论。

如果是简单的 Plan，直接就可以开始做了。

如果是复杂的 Plan，让它设计成几个 Phases，每个 phase 说清楚要求和验证的方法，保存成一个 Markdown 文档，把相关的素材也都引用上。

偷懒一点就用 /goal 把 plan 文件发给它，让它按照 Phases 执行，担心 Agent 跑偏就每一步完成人工去审核一下，及时纠偏。

写代码有条件当然用最好的模型，但如果像节约成本，便宜一点的模型也是可以的，毕竟设计好了、有明确的验收标准，偏不到哪里去。

最后代码 Review 不需要太多 Agent 去，GPT-5.5 这种就够了，重点是看是不是符合设计要求以及代码质量有没有问题。

这其实很像一个几个高水平的架构师，一人出一套系统设计方案，你来拍板，然后交给程序员去执行，最后让高水平的程序员或者架构师 review 一下代码。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-27T23:09:11.000Z
- **抓取时间**: 2026-05-28T01:18:54.757Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 117 · 🔄 18 · 💬 24 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2059773942500298934) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
