---
type: "X Tweet"
title: "RecursiveMAS：多 Agent 之间不传文字传向量，Token 用量直降 75%、推理快 2.4 倍"
description: "**多 Agent 协作的核心瓶颈不是模型能力，而是 Agent 之间「翻译」信息的开销。**  - 传统多 Agent 系统每轮交接都要把内部计算结果翻译成 token，下个 Agent 再重新解析 - RecursiveMAS 直接传递模型内部数值向量，形成递归闭环迭代，只最后一轮输出文本 - AIME 数学竞赛上比最强基线高 13-18 个百分点，训练成本比 LoRA 还低，递归轮次越多优势"
resource: "https://x.com/i/status/2050390804103888912"
tags:
  - "x-news"
  - "highlights"
  - "author:vista8"
timestamp: "2026-05-02T04:19:01.970Z"
x_tweet_id: "2050390804103888912"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-05-02T01:43:56.000Z"
x_engagement:
  likes: 29
  retweets: 2
  replies: 7
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "sub-agents-multi-expert"
x_source: "crawler"
---

# RecursiveMAS：多 Agent 之间不传文字传向量，Token 用量直降 75%、推理快 2.4 倍

## 摘要

**多 Agent 协作的核心瓶颈不是模型能力，而是 Agent 之间「翻译」信息的开销。**

- 传统多 Agent 系统每轮交接都要把内部计算结果翻译成 token，下个 Agent 再重新解析
- RecursiveMAS 直接传递模型内部数值向量，形成递归闭环迭代，只最后一轮输出文本
- AIME 数学竞赛上比最强基线高 13-18 个百分点，训练成本比 LoRA 还低，递归轮次越多优势越大

gakki 锐评：这篇论文的真正价值不是性能数字，而是验证了一个直觉——多 Agent 系统的瓶颈在「信息损耗」而非「模型不够强」。HuggingFace 热度第一说明社区已经感知到这个问题。

## 原文

本周 HuggingFace 热度第一的论文：RecursiveMAS（递归多Agent系统）

多个 AI 组队协作，现在已经是主流方案。

模型 A 想好了传给模型 B，模型 B 想好了传给模型 C，一棒接一棒。

但传的东西是文字。

每次交接都要把内部计算结果"翻译"成 token，下一个模型再重新"读懂"，再翻译…… 

轮次越多，无效开销越多，而且会影响学习信号回传。

RecursiveMAS 做法：

Agent 之间不传文字，直接传模型内部的数值向量。

形成一个递归闭环，迭代打磨，只有最后一轮输出文本答案。

连接模块极其轻量，底层模型全程不动，只训练中间那个"传话"的小模块。

AIME 顶级数学竞赛题上，比最强基线高 13-18 个百分点。

推理速度快 2.4×，Token 用量少 75%，训练成本比 LoRA 还低。

且递归轮次越多，优势越大。

论文地址见评论区，有空可以翻译下。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-05-02T01:43:56.000Z
- **抓取时间**: 2026-05-02T04:19:01.970Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 29 · 🔄 2 · 💬 7 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2050390804103888912) — @vista8 (向阳乔木)
