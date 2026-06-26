---
type: "X Tweet"
title: "MSA 记忆突破：40 亿参数模型如何在长记忆任务上碾压 2350 亿参数 RAG"
description: "**[AI 记忆机制正在经历从「外挂检索」到「内生长记忆」的范式迁移]** • 记忆容量从 16K 扩展到 1 亿 token（6000 倍增长），准确率仅下降 9%，成本仅需 2 张 A800 • 40 亿参数小模型击败 2350 亿参数 RAG 系统，证明「记忆架构」比「模型规模」更能决定长程任务表现 • 独立可插拔设计意味着任何模型都能「外挂」这套记忆系统，RAG 赛道面临底层逻辑被颠覆的风"
resource: "https://x.com/i/status/2035892318461710398"
tags:
  - "x-news"
  - "highlights"
  - "author:imaxichuhai"
timestamp: "2026-03-23T12:43:25.503Z"
x_tweet_id: "2035892318461710398"
x_author: "阿西_出海（2.0版）"
x_handle: "imaxichuhai"
x_created_at: "2026-03-23T01:32:08.000Z"
x_engagement:
  likes: 68
  retweets: 14
  replies: 11
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# MSA 记忆突破：40 亿参数模型如何在长记忆任务上碾压 2350 亿参数 RAG

## 摘要

**[AI 记忆机制正在经历从「外挂检索」到「内生长记忆」的范式迁移]**
• 记忆容量从 16K 扩展到 1 亿 token（6000 倍增长），准确率仅下降 9%，成本仅需 2 张 A800
• 40 亿参数小模型击败 2350 亿参数 RAG 系统，证明「记忆架构」比「模型规模」更能决定长程任务表现
• 独立可插拔设计意味着任何模型都能「外挂」这套记忆系统，RAG 赛道面临底层逻辑被颠覆的风险

gakki 的锐评：RAG 的护城河是「检索效率」，MSA 的护城河是「选择性地记住什么」。当AI能自己决定什么值得记、什么可以忘，真正的长期陪伴型 Agent 才算有了技术底座。

## 原文

EverMind 团队做了个叫 MSA 的技术，能让 AI 的记忆容量从 16K 直接扩到 1 亿，而且准确率只掉了不到 9%。

它的核心思路是让 AI 学会挑重点记，从底层改造记忆机制。更关键的是，这套记忆系统是独立的，可以插到任何模型上用。

抓到几个亮点：

• 记忆容量扩大了 6000 多倍（16K → 1 亿）
• 40 亿参数的小模型，干赢了 2350 亿参数的 RAG 系统
• 成本很友好：2 张 A800 显卡就能跑 1 亿 token

如果这个效果能在实际应用中复现，对需要长期记忆的场景（个人助理、企业知识库、多轮对话）确实有价值。

论文和代码都已开源：https://t.co/TYTEuwTbsG

上周刚刚论文通过，后续源码和模型都会开放发布，感兴趣的可以关注


## 元信息

- **作者**: 阿西_出海（2.0版） ([@imaxichuhai](https://x.com/imaxichuhai))
- **发布时间**: 2026-03-23T01:32:08.000Z
- **抓取时间**: 2026-03-23T12:43:25.503Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 68 · 🔄 14 · 💬 11 · 🔖 0 · 👁 0
- **关联主题**: [agent-memory-optimization](/concepts/agent-memory-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2035892318461710398) — @imaxichuhai (阿西_出海（2.0版）)
[2] [Author page](/entities/authors/imaxichuhai.md)
[3] [Related topic](/concepts/agent-memory-optimization.md)
