---
type: "X Tweet"
title: "DeepSeek V4 Flash 首日即跑通 Apple Silicon：158B MoE 在 Mac Studio 上实现 56 tok/s"
description: "**DeepSeek V4 Flash（158B-A13B MoE）在发布当天即通过 rapid-mlx 在 Apple Silicon 上实现本地推理，2-bit 量化下 56 tok/s，8 种压力场景 7/8 通过。**  - 1M 上下文支持在本地端兑现，Mac Studio 91GB 即可跑 2-bit 版本 - Day-0 适配速度说明社区对 DeepSeek 开源生态的投入已形成正循"
resource: "https://x.com/Raullen/status/2049487657898754214"
tags:
  - "x-news"
  - "news"
  - "author:Raullen"
timestamp: "2026-04-29T16:17:56.745Z"
x_tweet_id: "2049487657898754214"
x_author: "raullen.eth"
x_handle: "Raullen"
x_created_at: "2026-04-29T13:55:09.000Z"
x_engagement:
  likes: 82
  retweets: 34
  replies: 43
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "ai-trend-digest"
---

# DeepSeek V4 Flash 首日即跑通 Apple Silicon：158B MoE 在 Mac Studio 上实现 56 tok/s

## 摘要

**DeepSeek V4 Flash（158B-A13B MoE）在发布当天即通过 rapid-mlx 在 Apple Silicon 上实现本地推理，2-bit 量化下 56 tok/s，8 种压力场景 7/8 通过。**

- 1M 上下文支持在本地端兑现，Mac Studio 91GB 即可跑 2-bit 版本
- Day-0 适配速度说明社区对 DeepSeek 开源生态的投入已形成正循环
- 本地部署让 DeepSeek 从 API 服务商延伸为「可拥有的基座模型」

gakki 锐评：当 158B 模型在消费级硬件上跑到 56 tok/s，「算力民主化」就不再是口号——这是开源模型对抗 API 定价权的实物证据。

## 原文

Day-0 DeepSeek V4 Flash on Apple Silicon. 🍎

158B-A13B mixture-of-experts, 1M context, running on a Mac Studio:
• 56 tok/s @ 2-bit DQ (~91 GB)
• 31 tok/s @ 8-bit (~136 GB)
• 7/8 stress scenarios PASS

rapid-mlx 0.6.4:
$ pip install -U rapid-mlx
$ rapid-mlx serve deepseek-v4-flash

https://t.co/MAWcFRVeJT

@deepseek_ai @mlx_community


## 元信息

- **作者**: raullen.eth ([@Raullen](https://x.com/Raullen))
- **发布时间**: 2026-04-29T13:55:09.000Z
- **抓取时间**: 2026-04-29T16:17:56.745Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 82 · 🔄 34 · 💬 43 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/Raullen/status/2049487657898754214) — @Raullen (raullen.eth)
