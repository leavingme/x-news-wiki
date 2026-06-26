---
type: "X Tweet"
title: "40 秒视频消耗 145 万 Token：Claude Code 视频生成里九成成本在「组接」而非「生成」"
description: "**[Token 消耗结构揭示视频生成新瓶颈：组接远超生成，缓存策略是下一个工程战场]**  用 Claude Code 分析 40 秒视频的 Token 消耗结构：总消耗 145 万 Token，其中视频组合和 Skills 占了最大头；输入占比极高，输出仅占 0.7%；使用 Claude Code 有 92% 缓存率。  核心洞察：视频生成的瓶颈不在模型推理成本，而在于多段视频的组合调度和 S"
resource: "https://x.com/i/status/2056575297810751506"
tags:
  - "x-news"
  - "news"
  - "author:op7418"
timestamp: "2026-05-19T04:18:54.905Z"
x_tweet_id: "2056575297810751506"
x_author: "歸藏(guizang.ai)"
x_handle: "op7418"
x_created_at: "2026-05-19T03:18:54.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 40 秒视频消耗 145 万 Token：Claude Code 视频生成里九成成本在「组接」而非「生成」

## 摘要

**[Token 消耗结构揭示视频生成新瓶颈：组接远超生成，缓存策略是下一个工程战场]**

用 Claude Code 分析 40 秒视频的 Token 消耗结构：总消耗 145 万 Token，其中视频组合和 Skills 占了最大头；输入占比极高，输出仅占 0.7%；使用 Claude Code 有 92% 缓存率。

核心洞察：视频生成的瓶颈不在模型推理成本，而在于多段视频的组合调度和 Skill 调用——这是典型的 Agent 编排层开销。降低 Token 用量的优化方向是优化视频组合策略，而非提升模型本身。

**对谁有影响：** 做视频生成 Agent、自动化视频内容生产的开发者——下一轮降本竞争在组接层，不在生成层。



*gakki：生成式视频的成本结构正在重演当年视频压缩的老路——解码和组接才是瓶颈，编码器反而不是。这个信息差会影响接下来半年的视频 Agent 架构选择。*

## 原文

藏师傅这个通过前端生成讲解视频的 Skill 其实已经搞完了。

但是还是想优化一下效果，提高一下工程化，以及降低一下 Token 的用量。

所以我让 Claude Code 跑了一个 40 秒钟的案例，然后让他对其中的 Token 进行了一下分析，看一下哪边占比比较多，然后再进行针对性的优化。

看起来其中视频组合消耗的百分比非常大。如果用 Claude Code 的话，会有 92% 的缓存，所以还好。

具体分析如下：
1. 总消耗：一个 40 秒的视频是 145 万 Token
2. 消耗结构：
   (a) 输入占比非常高
   (b) 输出占比很低，仅占 0.7%

视频组合和 Skills 占了最大的大头。


## 元信息

- **作者**: 歸藏(guizang.ai) ([@op7418](https://x.com/op7418))
- **发布时间**: 2026-05-19T03:18:54.000Z
- **抓取时间**: 2026-05-19T04:18:54.905Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 4 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2056575297810751506) — @op7418 (歸藏(guizang.ai))
[2] [Author page](/entities/authors/op7418.md)
