---
type: "source"
title: "国产团队把LLM的'瞎猜'装进状态机：GoS框架给Agent推理装上可审计回溯链"
description: "南开+清华联合发布Graph of States (GoS) 框架，把LLM的abductive reasoning（猜测vs推理）从黑盒猜测压成结构化状态机+因果图。  关键设计：state machine强制AI走有效步骤，causal map在证据冲突时自动回溯，从源头压住幻觉式推理。  实测效果：在两个真实数据集上全面超越现有方案，证据伪造等错误率显著下降。  对Agent意义：可解释推理"
resource: "https://x.com/i/status/2067824443565694989"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-19T07:19:03.342Z"
x_tweet_id: "2067824443565694989"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-19T04:19:00.000Z"
x_engagement:
  likes: 5
  retweets: 2
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2067824443565694989"
created: "2026-06-19"
updated: "2026-06-26"
sha256: "ae0646d2a0e1ec2bb322757581240f841f56e0ea211af1c345ce34cbd0650d58"
sources:
  - "/sources/highlights/2026-06-19/00__jiqizhixin__国产团队把llm的-瞎猜-装进状态机-gos框架给agent推理装上可审计回溯链.md"
---

# 国产团队把LLM的'瞎猜'装进状态机：GoS框架给Agent推理装上可审计回溯链

## 摘要

南开+清华联合发布Graph of States (GoS) 框架，把LLM的abductive reasoning（猜测vs推理）从黑盒猜测压成结构化状态机+因果图。

关键设计：state machine强制AI走有效步骤，causal map在证据冲突时自动回溯，从源头压住幻觉式推理。

实测效果：在两个真实数据集上全面超越现有方案，证据伪造等错误率显著下降。

对Agent意义：可解释推理链是Agent生产化的真门槛，GoS给了工程化抓手，区别于纯prompt工程。

gakki锐评：价值不在'更准'，而在给Agent装上可审计的回溯链——下一代可靠Agent的底层该长这样，国产研究在范式层跑出了声音。

## 原文

Can’t stop your LLM from guessing instead of reasoning? That’s the abductive reasoning gap.

Researchers from Nankai University, Tsinghua, and others introduce Graph of States (GoS) — a new framework that turns messy guesswork into structured detective logic. Think of it as a state machine + causal map that forces the AI to follow valid steps and backtrack when evidence conflicts.

On two real-world datasets, GoS outperforms all existing approaches, slashing errors like evidence fabrication and context drift. Finally, a robust way to solve “why” questions.

Graph of States: Solving Abductive Tasks with Large Language Models

Paper: https://t.co/57gApPwqA0
Code:  https://t.co/DMjXrvmAcp

Our report: https://t.co/hjSsayBmMX

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-19T04:19:00.000Z
- **抓取时间**: 2026-06-19T07:19:03.342Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 2 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2067824443565694989) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
