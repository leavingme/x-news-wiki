---
type: "X Tweet"
title: "DeepGEMM 更新将 FP8 累加精度控制权直接交还给开发者"
description: "**[一句核心判断]** DeepSeek 在 DeepGEMM 更新中，将 FP8 MQA logit 函数的累加精度控制直接暴露给开发者——权重张量的 dtype 现在显式决定了累加精度，这是硬件级优化的控制权从框架向开发者下沉的重要信号。  - 更新后 `fp8_mqa_logits` 函数的权重张量 dtype 现在显式控制累加精度，不再由框架隐式决定 - 开发者可在 kernel 级别精"
resource: "https://x.com/i/status/2062019631406338369"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-06-03T04:18:40.462Z"
x_tweet_id: "2062019631406338369"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-03T03:52:45.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# DeepGEMM 更新将 FP8 累加精度控制权直接交还给开发者

## 摘要

**[一句核心判断]** DeepSeek 在 DeepGEMM 更新中，将 FP8 MQA logit 函数的累加精度控制直接暴露给开发者——权重张量的 dtype 现在显式决定了累加精度，这是硬件级优化的控制权从框架向开发者下沉的重要信号。

- 更新后 `fp8_mqa_logits` 函数的权重张量 dtype 现在显式控制累加精度，不再由框架隐式决定
- 开发者可在 kernel 级别精细控制数值精度与硬件吞吐量的 trade-off
- 这是国产开源项目在底层算子优化上的实质性进展

**gakki 锐评：** 硬件优化的控制粒度正在从"框架黑箱"走向"开发者显式可控"，这对追求极致推理效率的 Agent 部署者意义重大——但同时也意味着更多工程复杂度转移到业务层，选型需量力而行。

## 原文

Looks like DeepSeek is handing hardware optimization control directly to developers in the latest DeepGEMM update. 

For the fp8_mqa_logits function, the weights tensor dtype now explicitly dictates the accumulation precision.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-03T03:52:45.000Z
- **抓取时间**: 2026-06-03T04:18:40.462Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2062019631406338369) — @jiqizhixin (机器之心 JIQIZHIXIN)
