---
type: "X Tweet"
title: "Anthropic 工程师下场揭 Claude Code 缓存黑盒子：遥测关闭导致缓存缩水 12 倍不是「作恶」而是精细化调优"
description: "**[Claude Code 缓存逻辑首次被内部人详细拆解]**  Claude Code 关闭遥测后缓存从 1 小时骤降至 5 分钟，社区传言「Anthropic 用隐私换性能」， Anthropic 工程师 Boris Cherny 亲自下场澄清：1 小时缓存并不无条件更好，写入成本高于读取——如果你只跑一次查询就走了，付了写入高价却没享受反复读取的便宜价，反而浪费。Anthropic 一直在"
resource: "https://x.com/i/status/2043737757915209956"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-04-14T00:45:14.581Z"
x_tweet_id: "2043737757915209956"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-13T17:07:06.000Z"
x_engagement:
  likes: 255
  retweets: 18
  replies: 18
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Anthropic 工程师下场揭 Claude Code 缓存黑盒子：遥测关闭导致缓存缩水 12 倍不是「作恶」而是精细化调优

## 摘要

**[Claude Code 缓存逻辑首次被内部人详细拆解]**

Claude Code 关闭遥测后缓存从 1 小时骤降至 5 分钟，社区传言「Anthropic 用隐私换性能」， Anthropic 工程师 Boris Cherny 亲自下场澄清：1 小时缓存并不无条件更好，写入成本高于读取——如果你只跑一次查询就走了，付了写入高价却没享受反复读取的便宜价，反而浪费。Anthropic 一直在按使用场景做精细化分层：子任务（subagent）很少被恢复，给它 1 小时缓存白花钱，这类查询默认 5 分钟；API 用户目前也没默认开启 1 小时缓存，还在测试阶段。

缓存策略本质是成本与频率的权衡，不是「好与坏」的二选一。

gakki：Claude Code 的缓存是个「按需分配」的动态系统，不是某些人渲染的「邪恶商业设计」。但这也暴露了一个更大的问题——Claude Code 的缓存策略从未被官方系统性地文档化，每一次都是社区自己挖、官方被动澄清。这种信息不对称，才是真正值得警惕的「技术黑盒子」。

## 原文

开发者 Can Vardar 发现，Claude Code 里如果关闭遥测（telemetry，即向 Anthropic 回传使用数据），提示缓存时间会从 1 小时骤降到 5 分钟，他算了笔账说这相当于隐私换 12 倍性能，给 Anthropic 扣了个邪恶公司的帽子。

这条推文传开后，Anthropic 工程师 Boris Cherny 出来做了详细回应。

Claude Code 的缓存策略一直是个黑盒子，Boris 的这条推文把里面的细节讲的比较清楚了，推荐可以仔细看看。

他先澄清了一个误解：1 小时缓存并不是无条件更好。缓存写入成本更高、读取成本更低，划不划算取决于你怎么用。如果你只是跑了一次查询就走了，1 小时缓存反而浪费钱，因为你付了写入的高价却没享受到反复读取的便宜价。

实际上 Anthropic 一直在根据使用场景做精细化调整。比如子任务（subagent）很少被恢复，给它 1 小时缓存纯属白花钱，所以这类查询就保留 5 分钟。API 用户目前也没有默认开启 1 小时缓存，还在测试阶段。

关掉遥测导致缓存变短，Boris 说这其实是个连带效应：遥测关闭后，客户端的实验开关也跟着失效了，系统读到的就是默认值 5 分钟。换句话说，这不是故意惩罚，是技术实现上的耦合问题。

Boris 还透露了后续计划：很快会把部分查询的客户端默认值改成 1 小时，同时提供环境变量让用户自己强制切换 1 小时或 5 分钟。

至于12 倍性能差距，Boris 说远没有那么夸张，实际节省的 Token 量并不大。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-13T17:07:06.000Z
- **抓取时间**: 2026-04-14T00:45:14.581Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 255 · 🔄 18 · 💬 18 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2043737757915209956) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
