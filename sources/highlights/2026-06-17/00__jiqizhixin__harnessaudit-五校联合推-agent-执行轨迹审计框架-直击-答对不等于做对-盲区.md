---
type: "X Tweet"
title: "HarnessAudit：五校联合推 Agent 执行轨迹审计框架，直击「答对不等于做对」盲区"
description: "**当前 Agent 评测最大的盲区，不是答错，而是答对过程中的违规——HarnessAudit 首次把审计粒度下沉到完整执行轨迹。**  - 五校联合出品（UCSB、UC Berkeley、Stanford、UW-Madison、Microsoft Research），针对的是 output-level benchmark 漏掉的中途违规 - 审计三个维度：边界合规（boundary compl"
resource: "https://x.com/i/status/2067147986224980372"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-17T10:18:58.502Z"
x_tweet_id: "2067147986224980372"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-17T07:31:00.000Z"
x_engagement:
  likes: 6
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-security-governance"
x_source: "crawler"
---

# HarnessAudit：五校联合推 Agent 执行轨迹审计框架，直击「答对不等于做对」盲区

## 摘要

**当前 Agent 评测最大的盲区，不是答错，而是答对过程中的违规——HarnessAudit 首次把审计粒度下沉到完整执行轨迹。**

- 五校联合出品（UCSB、UC Berkeley、Stanford、UW-Madison、Microsoft Research），针对的是 output-level benchmark 漏掉的中途违规
- 审计三个维度：边界合规（boundary compliance）、资源访问、Agent 间信息泄露（inter-agent info leak）
- 210 个任务 × 8 个真实领域实测：发现任务完成度与安全性严重错位——也就是「做对了」不等于「做正了」
- 意义：把 Agent 安全评估从「终态判卷」推进到「全程录像回放」


hakki 锐评：这是一次研究范式升级——Agent 安全必须穿透输出层去看过程。但 HarnessAudit 还是研究框架，离生产可用的 Agent 防火墙、行为白盒还有相当距离，短期内更多是给 benchmark 设计者立新基准。

## 原文

Are your LLM agents really safe even when they return the correct answer?

Researchers from UCSB, UC Berkeley, Stanford, UW-Madison, and Microsoft Research introduce HarnessAudit—a framework that audits full execution trajectories for boundary compliance, resource access, and inter-agent information leaks.

Unlike output-level benchmarks, HarnessAudit catches violations that occur mid-trajectory. Testing across 210 tasks in eight real-world domains, it finds that task completion is misaligned with safe execution, violations grow with trajectory length, and multi-agent collaboration expands the risk surface. Harness design, not agent capability, sets the true ceiling for safe deployment.

Auditing Agent Harness Safety

Page: https://t.co/iMJ5Hkx16q
Paper: https://t.co/QL2eydThHo
Code: https://t.co/PHnveVVr2x

Our report: https://t.co/fuQR0fyi4g

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-17T07:31:00.000Z
- **抓取时间**: 2026-06-17T10:18:58.502Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 6 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2067147986224980372) — @jiqizhixin (机器之心 JIQIZHIXIN)
