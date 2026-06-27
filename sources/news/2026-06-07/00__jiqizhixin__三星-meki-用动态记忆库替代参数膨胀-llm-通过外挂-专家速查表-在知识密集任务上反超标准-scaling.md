---
type: "X Tweet"
title: "三星 MeKi：用动态记忆库替代参数膨胀，LLM 通过外挂「专家速查表」在知识密集任务上反超标准 scaling"
description: "**MeKi 提出「Memory-based Expert Knowledge Injection」，把专家知识做成可动态检索的外挂记忆库，让模型去 reference 而不是 memorize。**  - 核心思路：不再靠堆参数让模型学会所有知识，而是给 LLM 一个动态 memory bank 作为 cheat sheet，按需查询。 - 在 reasoning 和 factual recal"
resource: "https://x.com/i/status/2063695738417406075"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-07T19:18:37.814Z"
x_tweet_id: "2063695738417406075"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-07T18:53:00.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 三星 MeKi：用动态记忆库替代参数膨胀，LLM 通过外挂「专家速查表」在知识密集任务上反超标准 scaling

## 摘要

**MeKi 提出「Memory-based Expert Knowledge Injection」，把专家知识做成可动态检索的外挂记忆库，让模型去 reference 而不是 memorize。**

- 核心思路：不再靠堆参数让模型学会所有知识，而是给 LLM 一个动态 memory bank 作为 cheat sheet，按需查询。
- 在 reasoning 和 factual recall 这类知识密集任务上，效率与准确度都超过同等规模的标准 scaling 方法。
- 隐含信号：当 scaling law 的边际收益开始递减，「检索式记忆」可能比「参数化记忆」更适合下一阶段的知识注入。

MeKi 本质上是把 RAG 的思路从「文档级」推进到「专家知识级」——如果这条路走通，会直接动摇「模型越大越聪明」的算力叙事，对端侧推理和开源小模型都是结构性利好。

## 原文

Want to scale LLMs without skyrocketing compute costs?

Samsung presents MeKi: Memory-based Expert Knowledge Injection.

Instead of making models bigger to learn everything, MeKi gives LLMs a dynamic memory bank of expert knowledge. Think of it as a cheat sheet the model can reference, not memorize.

Outperforms standard scaling methods in efficiency and accuracy, especially on knowledge-intensive tasks like reasoning and factual recall.

MeKi: Memory-based Expert Knowledge Injection for Efficient LLM Scaling

Paper: https://t.co/p6nJAUVjsh
Project: https://t.co/m1344W4X42

Our report: https://t.co/3zjBs7iB2F

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-07T18:53:00.000Z
- **抓取时间**: 2026-06-07T19:18:37.814Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2063695738417406075) — @jiqizhixin (机器之心 JIQIZHIXIN)
