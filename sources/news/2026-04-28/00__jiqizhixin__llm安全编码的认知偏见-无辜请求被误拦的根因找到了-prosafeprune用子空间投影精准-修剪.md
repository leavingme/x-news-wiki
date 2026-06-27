---
type: "source"
title: "LLM安全编码的认知偏见：无辜请求被误拦的根因找到了，ProSafePrune用子空间投影精准「修剪」"
description: "**[一句话核心判断]** LLM对无害请求说「I can't help with that」的根因不是过度谨慎，而是安全编码中形成的认知偏见——触发词即使语境无辜也会被误判为危险。  **要点：** - 合肥工业大学与科大讯飞研究院联合发现：LLM内部安全编码在预训练中产生认知偏见，即使完全无害的问询只要含触发词就会被归类为危险 - 新方法ProSafePrune将模型安全特征投影到独立子空间，"
resource: "https://x.com/i/status/2049083958176981404"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-28T13:19:05.890Z"
x_tweet_id: "2049083958176981404"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-28T11:11:00.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2049083958176981404"
created: "2026-04-28"
updated: "2026-06-26"
sha256: "681f52fb71688f434eab25632b5ca41bd1c9f352b6d4fb4fac2ecfd5b0abe638"
sources:
  - "/sources/news/2026-04-28/00__jiqizhixin__llm安全编码的认知偏见-无辜请求被误拦的根因找到了-prosafeprune用子空间投影精准-修剪.md"
---

# LLM安全编码的认知偏见：无辜请求被误拦的根因找到了，ProSafePrune用子空间投影精准「修剪」

## 摘要

**[一句话核心判断]**
LLM对无害请求说「I can't help with that」的根因不是过度谨慎，而是安全编码中形成的认知偏见——触发词即使语境无辜也会被误判为危险。

**要点：**
- 合肥工业大学与科大讯飞研究院联合发现：LLM内部安全编码在预训练中产生认知偏见，即使完全无害的问询只要含触发词就会被归类为危险
- 新方法ProSafePrune将模型安全特征投影到独立子空间，像手术刀一样精准剪除偏见，而非全局抑制
- 研究揭示了安全与可用性之间的张力本质：问题不在于「管得多」，而在于「管得蠢」

**gakki锐评：**
这个研究真正戳中的是Anthropic所谓「Safety Router」哲学的技术本质——安全过滤不是在理解语境，而是在做模式匹配。ProSafePrune的子空间投影思路如果迁移到生产环境，可能会动摇当前主流安全对齐方案的技术路线。

## 原文

Why do AI assistants suddenly say "I can't help with that" to perfectly harmless requests?

Researchers from Hefei University of Technology and iFLYTEK Research have identified the root cause: LLMs develop a cognitive bias in their internal safety encoding, where even innocent questions containing trigger words get classified as dangerous.

Their new method, ProSafePrune, works like a surgical noise filter. It projects the model's safety features into separate subspaces, then precisely prunes away only the low-rank directions tied to false alarms, leaving true threat detection intact.

Across multiple model sizes, ProSafePrune significantly cuts the false rejection rate while slightly improving performance on general tasks. Code is open-source.

ProSafePrune: Projected Safety Pruning for Mitigating Over-Refusal in LLMs

Paper: https://t.co/1wtC8TOkeG
Code: https://t.co/zSD9eGlFBv

Our report: https://t.co/FVvtt1s2ov

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-28T11:11:00.000Z
- **抓取时间**: 2026-04-28T13:19:05.890Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2049083958176981404) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
