---
type: "X Tweet"
title: "HiLight 论文：Meta+Stony Brook 用小 Actor 在原文本插入高亮标签，让 Frozen LLM 搞定大海捞针"
description: "**一句话核心判断：HiLight 证明在不压缩原文本的前提下，通过外部小模型插入结构化高亮标签，可以让冻结的大模型在超长上下文中精准定位关键证据。**  - 核心方法：训练一个轻量 Actor 在原文中关键语句周围插入高亮标签，LLM 在带标签的完整文本上推理 - 效果：推荐和长上下文 QA 任务上超越强 prompt 基线，且高亮技能可零样本迁移到其他 LLM - 关键价值：无需重训大模型，也"
resource: "https://x.com/i/status/2056448232792932759"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-18T19:18:39.752Z"
x_tweet_id: "2056448232792932759"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-18T18:54:00.000Z"
x_engagement:
  likes: 5
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# HiLight 论文：Meta+Stony Brook 用小 Actor 在原文本插入高亮标签，让 Frozen LLM 搞定大海捞针

## 摘要

**一句话核心判断：HiLight 证明在不压缩原文本的前提下，通过外部小模型插入结构化高亮标签，可以让冻结的大模型在超长上下文中精准定位关键证据。**

- 核心方法：训练一个轻量 Actor 在原文中关键语句周围插入高亮标签，LLM 在带标签的完整文本上推理
- 效果：推荐和长上下文 QA 任务上超越强 prompt 基线，且高亮技能可零样本迁移到其他 LLM
- 关键价值：无需重训大模型，也无需压缩或改写输入，保留原始信息完整性

**gakki 锐评：** 这篇论文的工程意义大于学术贡献——它提供了一种在现有生产系统里用小模型解决大模型长上下文效率问题的范式，不需要替换基座模型。对需要处理超长文档（代码库、长报告、论文库）的 Agent 系统来说，这是可以直接借鉴的工程方案。Token 效率和精度可以兼得，HiLight 证明了这一点。

## 原文

Can LLMs find a needle in a haystack of text? 

Stony Brook University and Meta AI present HiLight: a lightweight system that highlights key evidence in long contexts for frozen LLMs. 

Instead of rewriting or compressing input, it trains a small Actor to insert highlight tags around crucial spans, then lets the LLM reason on the untouched text. 

HiLight beats strong prompt-based baselines on recommendation and long-context QA — and its highlighting skill transfers zero-shot to other LLMs, even API-only ones.

Learning Evidence Highlighting for Frozen LLMs

Paper: https://t.co/n7JGHq9NBh

Our report: https://t.co/VhG18EaO8z

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-18T18:54:00.000Z
- **抓取时间**: 2026-05-18T19:18:39.752Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2056448232792932759) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
