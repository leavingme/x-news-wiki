---
type: "X Tweet"
title: "AI 自己写\"定理证明蓝图\"：Goedel-Architect 拿 DeepSeek-V4-Flash 把 Lean 4 推到 99%"
description: "**Princeton 把形式化定理证明从递归分解改成\"先画依赖图再并行证明\"**  - Goedel-Architect 框架先生成定义/引理的依赖图（蓝图），再并行证明开放引理，遇失败时回流修订蓝图 - 用开源 DeepSeek-V4-Flash 作 backbone，成绩推到 99%（原文截断，确切数字待补） - 解决传统递归分解在死胡同上打转的痛点 - 价值：开源模型 + agentic "
resource: "https://x.com/i/status/2067615820511871122"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-18T16:18:59.445Z"
x_tweet_id: "2067615820511871122"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-18T14:30:00.000Z"
x_engagement:
  likes: 7
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# AI 自己写"定理证明蓝图"：Goedel-Architect 拿 DeepSeek-V4-Flash 把 Lean 4 推到 99%

## 摘要

**Princeton 把形式化定理证明从递归分解改成"先画依赖图再并行证明"**

- Goedel-Architect 框架先生成定义/引理的依赖图（蓝图），再并行证明开放引理，遇失败时回流修订蓝图
- 用开源 DeepSeek-V4-Flash 作 backbone，成绩推到 99%（原文截断，确切数字待补）
- 解决传统递归分解在死胡同上打转的痛点
- 价值：开源模型 + agentic 框架，把数学证明推向工业化流水线


gakki 锐评：形式化证明一直缺的不是"模型能推几步"，而是"卡住后怎么脱困"。Goedel-Architect 的解法把策略控制提到模型之外，是务实的工程思路。但 99% 这个数字需要看完整论文再判断是覆盖度还是子集得分。

## 原文

What if an AI could write its own blueprint to prove math theorems? 

Princeton researchers introduce Goedel-Architect, a new agentic framework for formal theorem proving in Lean 4.

Instead of recursively decomposing lemmas (which can loop on dead ends), it first generates a dependency graph of definitions and lemmas—a blueprint—then proves each open lemma in parallel, refining the blueprint when a lemma fails. 

Using the open-weight DeepSeek-V4-Flash as backbone, Goedel-Architect achieves 99.2% on MiniF2F-test and 75.6% on PutnamBench. With a natural-language proof to seed harder problems, it hits 100% on MiniF2F, 88.8% on PutnamBench, and solves 4/6 IMO 2025, 11/12 Putnam 2025, and 3/6 USAMO 2026—state-of-the-art for an open-source pipeline at up to 500x lower cost.

Goedel-Architect: Streamlining Formal Theorem Proving with Blueprint Generation and Refinement

Paper: https://t.co/2ydhfVAxIM

Our report: https://t.co/fRQQkpzbDy

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-18T14:30:00.000Z
- **抓取时间**: 2026-06-18T16:18:59.445Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 7 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2067615820511871122) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
