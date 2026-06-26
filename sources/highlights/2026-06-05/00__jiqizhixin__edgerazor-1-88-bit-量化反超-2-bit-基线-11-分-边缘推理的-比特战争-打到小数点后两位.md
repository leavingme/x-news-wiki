---
type: "X Tweet"
title: "EdgeRazor 1.88-bit 量化反超 2-bit 基线 11 分：边缘推理的\"比特战争\"打到小数点后两位"
description: "南大+微软发布 EdgeRazor 框架，把 Qwen3-0.6B 压到 1.88-bit，性能反超最优 2-bit 基线 11.27 分。  - 混合精度蒸馏 + 量化感知训练，按模块差异化分配 bit-width - 重点特征筛选 + 人写/AI 生成数据平衡训练，缓解低比特下的能力塌方 - 边缘小模型进入\"亚 2-bit\"实用区间，手机端跑 Qwen3 系列的门槛继续下移 - 进一步验证 J"
resource: "https://x.com/i/status/2062950830681063750"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-05T19:19:08.586Z"
x_tweet_id: "2062950830681063750"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-05T17:33:00.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "edge-inference-optimization"
x_source: "crawler"
---

# EdgeRazor 1.88-bit 量化反超 2-bit 基线 11 分：边缘推理的"比特战争"打到小数点后两位

## 摘要

南大+微软发布 EdgeRazor 框架，把 Qwen3-0.6B 压到 1.88-bit，性能反超最优 2-bit 基线 11.27 分。

- 混合精度蒸馏 + 量化感知训练，按模块差异化分配 bit-width
- 重点特征筛选 + 人写/AI 生成数据平衡训练，缓解低比特下的能力塌方
- 边缘小模型进入"亚 2-bit"实用区间，手机端跑 Qwen3 系列的门槛继续下移
- 进一步验证 Jevons 悖论：单次推理更省电 → 调用频次暴涨 → 总算力盘不降反升


gakki 锐评：比特数从营销数字变成工程纪律——能压到 1.88 还能赢 2-bit 的 11 分，说明"小模型怕垃圾、大模型不怕"这条 Scale Law 反直觉结论，在量化路径上同样成立。Gemma 4 之后的下一战场，是 bit-width 战争，而 Qwen3 已经成为边缘研究的共同底座。

## 原文

Wow, AI models can run on your phone without losing smarts!

Researchers from Nanjing University and Microsoft AI present EdgeRazor — a lightweight framework that uses mixed-precision quantization-aware distillation. 

It assigns different bit-widths to different parts of the model, selects only the most important features to learn from, and balances training on both human-written and AI-generated data. 

Result: a 1.88-bit Qwen3-0.6B beats the best 2-bit baselines by 11.27 points and even surpasses 3-bit methods by 4.38. Training costs drop 4–10x, and at 1.58 bits storage shrinks from 1.11 GB to 0.19 GB while decoding speeds up 15x.

EdgeRazor: A Lightweight Framework for Large Language Models via Mixed-Precision Quantization-Aware Distillation

Paper: https://t.co/tZahyynqgX
Code: https://t.co/JFvKsexlqF

Our report: https://t.co/XRJzRdM73y

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-05T17:33:00.000Z
- **抓取时间**: 2026-06-05T19:19:08.586Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [edge-inference-optimization](/concepts/edge-inference-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2062950830681063750) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/edge-inference-optimization.md)
