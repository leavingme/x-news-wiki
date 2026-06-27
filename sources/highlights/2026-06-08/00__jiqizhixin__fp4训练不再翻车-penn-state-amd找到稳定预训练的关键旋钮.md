---
type: "X Tweet"
title: "FP4训练不再翻车：Penn State+AMD找到稳定预训练的关键旋钮"
description: "**原生 FP4硬件训练 LLM长期翻车的根因被定位——问题不在前向/激活梯度，而在权重梯度的量化处理，确定性 Hadamard旋转稳定一切。**  - Penn State 与 AMD联合攻关，证明权重梯度量化才是发散主因 -随机 tricks全部失效，确定性 Hadamard旋转让 Llama3.1-8B 在 C4 上稳定完成预训练 -硬件采用 AMD MI355X，验证非 NVIDIA路径同"
resource: "https://x.com/i/status/2063817792772592004"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-08T04:19:11.305Z"
x_tweet_id: "2063817792772592004"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-08T02:58:00.000Z"
x_engagement:
  likes: 15
  retweets: 1
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-training-cost-collapse"
x_source: "crawler"
---

# FP4训练不再翻车：Penn State+AMD找到稳定预训练的关键旋钮

## 摘要

**原生 FP4硬件训练 LLM长期翻车的根因被定位——问题不在前向/激活梯度，而在权重梯度的量化处理，确定性 Hadamard旋转稳定一切。**

- Penn State 与 AMD联合攻关，证明权重梯度量化才是发散主因
-随机 tricks全部失效，确定性 Hadamard旋转让 Llama3.1-8B 在 C4 上稳定完成预训练
-硬件采用 AMD MI355X，验证非 NVIDIA路径同样可行
- FP4时代从推理端正式延伸到训练端，成本曲线再下台阶


gakki锐评：每次"训练成本减半"最终都会被推理端再吃一半，Jevons悖论在算力领域是铁律——别把 FP4 当利好算显卡股，它就是下一轮通缩的预告片。

## 原文

Why does full FP4 training of large language models often fail? 

Researchers from Penn State and AMD cracked the puzzle. 

They found that quantizing weight gradients (not forward or activation gradient passes) is the main cause of divergence. While stochastic tricks failed, deterministic Hadamard rotations stabilized training. 

This breakthrough enabled stable Llama 3.1-8B pretraining on the C4 dataset using native FP4 hardware (AMD MI355X GPUs).

Pretraining large language models with MXFP4 on Native FP4 Hardware

Paper: https://t.co/ncBO3DTXyT

Our report: https://t.co/r1YIRnZ50x


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-08T02:58:00.000Z
- **抓取时间**: 2026-06-08T04:19:11.305Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 15 · 🔄 1 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2063817792772592004) — @jiqizhixin (机器之心 JIQIZHIXIN)
