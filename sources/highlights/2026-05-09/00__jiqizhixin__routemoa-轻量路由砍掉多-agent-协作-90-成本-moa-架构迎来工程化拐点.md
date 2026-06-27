---
type: "X Tweet"
title: "RouteMoA：轻量路由砍掉多 Agent 协作 90% 成本，MoA 架构迎来工程化拐点"
description: "**多 Agent 协作的成本瓶颈正在被轻量路由策略打破，而不是靠堆更多模型。**  - 上海交大、港中文、腾讯、南洋理工联合提出 RouteMoA：用轻量打分器预判每个模型对当前 query 的潜力，再用混合裁判精炼结果，无需额外推理 - 相比标准 Mixture-of-Agents，成本降低 89.8%，延迟降低 63.6%——这不是渐进优化，是架构级重构 - 核心洞察：Agent 编排的效率"
resource: "https://x.com/i/status/2053125337270407620"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-09T16:18:41.639Z"
x_tweet_id: "2053125337270407620"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-09T14:50:00.000Z"
x_engagement:
  likes: 8
  retweets: 2
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "multi-agent-framework-ecosystem-comparison"
x_source: "crawler"
---

# RouteMoA：轻量路由砍掉多 Agent 协作 90% 成本，MoA 架构迎来工程化拐点

## 摘要

**多 Agent 协作的成本瓶颈正在被轻量路由策略打破，而不是靠堆更多模型。**

- 上海交大、港中文、腾讯、南洋理工联合提出 RouteMoA：用轻量打分器预判每个模型对当前 query 的潜力，再用混合裁判精炼结果，无需额外推理
- 相比标准 Mixture-of-Agents，成本降低 89.8%，延迟降低 63.6%——这不是渐进优化，是架构级重构
- 核心洞察：Agent 编排的效率提升方向不是"跑更多模型"，而是"少跑、跑对"

gakki 锐评：MoA 的工程化痛点一直是成本和延迟，RouteMoA 用"先预测再执行"的思路给出了一个优雅解。如果这个方向被验证，多 Agent 架构的经济性将从"奢侈方案"变成"默认选项"。

## 原文

What if you could boost AI agent collaboration while slashing costs by nearly 90%?

Researchers from SJTU, CUHK, Tencent, and NTU present RouteMoA. 

Instead of running every model first, a lightweight scorer predicts each model’s potential from the query alone, then a mix of judges refines those scores using only existing outputs — no extra inference needed.

Result: RouteMoA outperforms standard Mixture-of-Agents across diverse tasks, cutting costs by 89.8% and latency by 63.6% in large-scale model pools.

RouteMoA: Dynamic Routing without Pre-Inference Boosts Efficient Mixture-of-Agents

Paper: https://t.co/FUptRQ7TJ6
Code: https://t.co/UluDvlZVaK

Our report: https://t.co/XjhMPBSaI0

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-09T14:50:00.000Z
- **抓取时间**: 2026-05-09T16:18:41.639Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 2 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2053125337270407620) — @jiqizhixin (机器之心 JIQIZHIXIN)
