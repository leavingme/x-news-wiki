---
type: "X Tweet"
title: "Oxford+英伟达 KV-CAT：把 KV 压缩从「推理后补救」前移到「训练阶段原生压缩」"
description: "**KV Cache 压缩的工程范式正在从 post-hoc 转向训练期原生。**  - Oxford / Technion / AITHYRA / NVIDIA 联合提出 KV-CAT：在 continued pretraining 阶段随机 mask KV slot，强制模型依赖更少的缓存条目 - 相比 post-hoc quantization / pruning，训练阶段就学会的「可压缩性"
resource: "https://x.com/i/status/2066074160372355369"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-14T10:18:59.216Z"
x_tweet_id: "2066074160372355369"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-14T08:24:00.000Z"
x_engagement:
  likes: 16
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Oxford+英伟达 KV-CAT：把 KV 压缩从「推理后补救」前移到「训练阶段原生压缩」

## 摘要

**KV Cache 压缩的工程范式正在从 post-hoc 转向训练期原生。**

- Oxford / Technion / AITHYRA / NVIDIA 联合提出 KV-CAT：在 continued pretraining 阶段随机 mask KV slot，强制模型依赖更少的缓存条目
- 相比 post-hoc quantization / pruning，训练阶段就学会的「可压缩性」让后续压缩效果显著提升
- 直接命中 Agent 长上下文、KV 内存爆炸的工程痛点


gakki 锐评：方向对了，但 paper 没披露「训练阶段压缩」是否带来质量回归——是效率换智能还是真免费午餐，得等 ablation 数据说话。

## 原文

What if your AI’s memory didn’t have to balloon with every extra sentence?

University of Oxford, Technion, AITHYRA, and NVIDIA introduce KV-Compression Aware Training (KV-CAT) — a method that forces transformers to learn more compressible key-value caches during training, not just after.

By randomly masking KV slots during continued pretraining, KV-CAT nudges models to rely on fewer memory entries, making post-hoc compression far more effective.

Result: KV-CAT beats existing compression methods on retrieval, long-context QA, and perplexity — all while using the same or smaller memory budget.

Training Transformers for KV Cache Compressibility

Paper: https://t.co/rj9Ch1mEIp

Our report: https://t.co/0OPEEai2ss


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-14T08:24:00.000Z
- **抓取时间**: 2026-06-14T10:18:59.216Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 16 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2066074160372355369) — @jiqizhixin (机器之心 JIQIZHIXIN)
