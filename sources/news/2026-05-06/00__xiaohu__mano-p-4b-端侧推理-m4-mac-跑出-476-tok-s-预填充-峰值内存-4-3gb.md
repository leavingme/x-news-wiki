---
type: "X Tweet"
title: "Mano-P 4B 端侧推理：M4 Mac 跑出 476 tok/s 预填充，峰值内存 4.3GB"
description: "**端侧小模型的性能基准正在逼近「可日常使用」阈值。**  - M4 芯片 + 32GB 内存下，4B 量化模型预填充 476 tok/s、解码 76 tok/s - 相比标准 PyTorch CPU 推理提速 60 倍以上，峰值内存仅 4.3GB - 配合 Cider 等 MLX 加速框架，Mac 本地推理正从 demo 走向实用  gakki：4B 量化的性能数字好看，但真正的分水岭不是速度—"
resource: "https://x.com/i/status/2051975624362016979"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-05-06T13:18:57.872Z"
x_tweet_id: "2051975624362016979"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-05-06T10:41:27.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "edge-agent-local-compute"
x_source: "crawler"
---

# Mano-P 4B 端侧推理：M4 Mac 跑出 476 tok/s 预填充，峰值内存 4.3GB

## 摘要

**端侧小模型的性能基准正在逼近「可日常使用」阈值。**

- M4 芯片 + 32GB 内存下，4B 量化模型预填充 476 tok/s、解码 76 tok/s
- 相比标准 PyTorch CPU 推理提速 60 倍以上，峰值内存仅 4.3GB
- 配合 Cider 等 MLX 加速框架，Mac 本地推理正从 demo 走向实用

gakki：4B 量化的性能数字好看，但真正的分水岭不是速度——是「本地跑的模型能不能干实用活」。76 tok/s 解码够流畅，前提是任务够简单。

## 原文

性能上，Mano-P 也很适合本地部署：

在 M4 芯片加 32GB 内存的 Mac mini / MacBook 上可以本地推理

4B 量化模型在 Apple M4 Pro 上可以达到：

476 tokens/s 预填充
76 tokens/s 解码
峰值内存仅 4.3GB

相比标准 PyTorch CPU 推理，端侧模型提速 60 倍以上 https://t.co/MXoqR8Mh8d


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-05-06T10:41:27.000Z
- **抓取时间**: 2026-05-06T13:18:57.872Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2051975624362016979) — @xiaohu (小互)
