---
type: "X Tweet"
title: "Claude Code Max「烧钱补贴」真相：5000美元成本论被证伪，API零售价≠实际算力成本"
description: "**[算力成本认知纠偏：Anthropic的Unit Economics可能被严重误读]**  - Martin Alderson通过OpenRouter上开放权重模型的定价反推，证实Anthropic实际算力成本远低于API零售价（差距可达10倍量级） - 以Qwen 3.5 397B和Kimi K2.5的定价为参照，同等规模模型在覆盖GPU成本后仍有利润，说明$5000/月的估算基于错误假设 "
resource: "https://x.com/i/status/2031367127920255153"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-03-11T12:42:44.575Z"
x_tweet_id: "2031367127920255153"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-03-10T13:50:38.000Z"
x_engagement:
  likes: 131
  retweets: 12
  replies: 30
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 90
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
---

# Claude Code Max「烧钱补贴」真相：5000美元成本论被证伪，API零售价≠实际算力成本

## 摘要

**[算力成本认知纠偏：Anthropic的Unit Economics可能被严重误读]**

- Martin Alderson通过OpenRouter上开放权重模型的定价反推，证实Anthropic实际算力成本远低于API零售价（差距可达10倍量级）
- 以Qwen 3.5 397B和Kimi K2.5的定价为参照，同等规模模型在覆盖GPU成本后仍有利润，说明$5000/月的估算基于错误假设
- 这一澄清对理解AI Coding市场的可持续性至关重要：如果Max套餐并非「流血补贴」，则意味着高端AI编程助手可能已进入可盈利区间

 Anthropic的真实成本结构仍是黑箱，但「十倍差价」的论证足以让我们重新审视：那些宣称「AI公司在烧钱换市场」的叙事，是否也建立在类似的认知偏差之上？

## 原文

Forbes 一篇关于 Cursor 的报道里提到，Anthropic 每月 200 美元的 Claude Code Max 套餐，会消耗大约 5000 美元的算力。这个数字被到处转发，很多人当成了 Anthropic 在烧钱补贴的铁证。

但 Martin Alderson 写了篇文章 "No, it doesn't cost Anthropic $5k per Claude Code user" 反驳，他的核心观点是：
1. 那个 5000 美元算的是 API 零售价格，不是实际计算成本，这两个概念差了一个数量级。
2. 平均下来每个用户消耗并没有那么高

他的验证方法很简单：去看 OpenRouter 上同等规模的开放权重模型定价。Qwen 3.5 397B 在阿里云上的价格，输入每百万 token 0.39 美元，输出 2.34 美元，大约是 Opus 4.6 API 定价的十分之一。Kimi K2.5 也差不多。这些供应商都要覆盖 GPU 成本还要赚钱，不是在做慈善。

按这个比例算，一个重度用户按 API 零售价消耗了 5000 美元的 token，Anthropic 的实际计算成本大约是 500 美元，最极端情况下每月亏 300 美元，不是 4800 美元。而且绝大多数用户远远用不到上限。

他引用了 Anthropic 自己的 /cost 命令数据：开发者平均每天 API 等价消费约 6 美元，按实际成本算就是每月 18 美元的服务成本。

那个 5000 美元的数字其实来自 Cursor 的内部分析。对 Cursor 来说这个数字确实是真实负担，因为它要按 Anthropic 的 API 零售价买 Opus 4.6 的使用权。但对 Anthropic 自己来说，推理成本和零售价之间有巨大的利润空间。

Anthropic 在平均每个 Claude Code 订阅用户上很可能是盈利的。花钱多是因为训练模型和招人，不是因为给用户跑推理。

https://t.co/RP9gT7Gnfr


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-03-10T13:50:38.000Z
- **抓取时间**: 2026-03-11T12:42:44.575Z
- **精选类别**: ✨ 亮点
- **优先级**: 90
- **互动**: ❤️ 131 · 🔄 12 · 💬 30 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2031367127920255153) — @dotey (宝玉)
