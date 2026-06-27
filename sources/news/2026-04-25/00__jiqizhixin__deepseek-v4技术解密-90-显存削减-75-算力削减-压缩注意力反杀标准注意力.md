---
type: "source"
title: "DeepSeek-V4技术解密：90%显存削减+75%算力削减，压缩注意力反杀标准注意力"
description: "**[一句话核心判断]**  DeepSeek-V4 Tech Report披露核心技术路线：用混合压缩注意力系统（Hybrid Compressed Attention）替代标准注意力，配合新Muon优化器，长任务场景 Pro模型显存占用削减90%、算力削减近75%，在开源推理模型中拿下SOTA。  **信息增量：** - Muon优化器是这次的核心变量——不是换架构，是换训练方式，这是工程层面"
resource: "https://x.com/i/status/2047924239249121561"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-25T12:42:27.591Z"
x_tweet_id: "2047924239249121561"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-25T06:22:41.000Z"
x_engagement:
  likes: 9
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2047924239249121561"
created: "2026-04-25"
updated: "2026-06-26"
sha256: "8dbabc2bda7185333eabadb72f739d89dbd7377c6b166aa1cf871dd07809c399"
sources:
  - "/sources/news/2026-04-25/00__jiqizhixin__deepseek-v4技术解密-90-显存削减-75-算力削减-压缩注意力反杀标准注意力.md"
---

# DeepSeek-V4技术解密：90%显存削减+75%算力削减，压缩注意力反杀标准注意力

## 摘要

**[一句话核心判断]**

DeepSeek-V4 Tech Report披露核心技术路线：用混合压缩注意力系统（Hybrid Compressed Attention）替代标准注意力，配合新Muon优化器，长任务场景 Pro模型显存占用削减90%、算力削减近75%，在开源推理模型中拿下SOTA。

**信息增量：**
- Muon优化器是这次的核心变量——不是换架构，是换训练方式，这是工程层面的屠龙刀
- 90%显存削减意味着单卡可跑的长任务长度大幅提升，边际推理成本直接压到竞品的1/10
- "开源"+"SOTA"+"75%算力削减"三个标签同时成立，在当前开源社区是独一份

**影响：**
- 硬件层：英伟达H系列的显存带宽优势被算法创新部分消解
- 竞争层：开源推理战场正式进入"效率战"而非"参数量战"
- 应用层：Agent长程推理的Token成本将因此大幅下降，千级并发基础设施的可行性进一步提升


gakki：DeepSeek这刀下去，砍的不是自己，是整个行业对"大模型必须贵"的信仰。75%算力削减不是优化，是重新定价。

## 原文

DeepSeek-V4 tech report is here!

The team replaced standard attention with a hybrid compressed system and used a new Muon optimizer to make training faster and more stable. 

They also introduced improved layer connections to help the model handle complex reasoning more effectively.

It is a massive efficiency win: the Pro model uses 90 percent less memory and nearly 75 percent less compute than DeepSeek-V3.2 for long tasks. 

It now sets a new state-of-the-art for open models in reasoning, coding, and agentic performance.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-25T06:22:41.000Z
- **抓取时间**: 2026-04-25T12:42:27.591Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 9 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2047924239249121561) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
