---
type: "source"
title: "三行代码修复 3272 次无限重试：Claude Code 泄露源码揭露「算力黑洞」根因"
description: "**一句话核心判断：** Claude Code 的 token 消耗异常不是模型贵，是 bug——autoCompact 机制在失败后无限重试，最高记录 3272 次，这是典型的工程债务外化给用户的案例。  - 泄露源码被丢给 Codex 分析，找到了元凶：autoCompact 机制失败后无上限重试，没有任何熔断机制。 - 修复方法：三行代码，加一个 MAX_CONCURRENT_FAILUR"
resource: "https://x.com/i/status/2039191460256612770"
tags:
  - "x-news"
  - "highlights"
  - "author:imyouhu"
timestamp: "2026-04-01T05:14:52.285Z"
x_tweet_id: "2039191460256612770"
x_author: "CatFly"
x_handle: "imyouhu"
x_created_at: "2026-04-01T04:01:45.000Z"
x_engagement:
  likes: 645
  retweets: 94
  replies: 24
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2039191460256612770"
created: "2026-04-01"
updated: "2026-06-26"
sha256: "51d31b1ab93a17e9da8aac8ceb6e164ea663ccd30f5fac87a84160a94c5e5fb1"
sources:
  - "/sources/highlights/2026-04-01/00__imyouhu__三行代码修复-3272-次无限重试-claude-code-泄露源码揭露-算力黑洞-根因.md"
---

# 三行代码修复 3272 次无限重试：Claude Code 泄露源码揭露「算力黑洞」根因

## 摘要

**一句话核心判断：** Claude Code 的 token 消耗异常不是模型贵，是 bug——autoCompact 机制在失败后无限重试，最高记录 3272 次，这是典型的工程债务外化给用户的案例。

- 泄露源码被丢给 Codex 分析，找到了元凶：autoCompact 机制失败后无上限重试，没有任何熔断机制。
- 修复方法：三行代码，加一个 MAX_CONCURRENT_FAILURES = 3 的限制。代价是用户为此烧了数月算力。
- 「用两下就触发限速」的投诉大量存在，其中相当一部分是这个隐藏 bug 在后台偷跑 token。

gakki 锐评：一个上限判断语句本应在第一版代码里就存在，却需要靠源码泄露才能发现——这不是意外，是闭源软件在 token 经济学下的隐性成本：用户为 bug 付钱，还以为是模型贵。


## 原文

Claude Code 源码泄露事件后续越来越精彩了。
有人拿泄露的源码丢给 OpenAI 的 Codex 分析，竟然找到了 Claude Code 疯狂消耗 token 的元凶——autoCompact（自动上下文压缩）机制在失败后会无限重试，完全没有上限。据源码注释记录，曾有会话连续失败高达 3272
 次。
修复方法简单到离谱：加一个 MAX_CONSECUTIVE_AUTOCOMPACT_FAILURES = 3 的限制，连续失败 3 次就停止重试。三行代码，搞定。

打完补丁后，这位老哥表示使用额度恢复正常了——之前被吐槽的"用两下就触发限速"，很可能有一部分就是这个 bug 在背后偷偷烧 token。
仓库地址放下面了。


## 元信息

- **作者**: CatFly ([@imyouhu](https://x.com/imyouhu))
- **发布时间**: 2026-04-01T04:01:45.000Z
- **抓取时间**: 2026-04-01T05:14:52.285Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 645 · 🔄 94 · 💬 24 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2039191460256612770) — @imyouhu (CatFly)
[2] [Author page](/entities/authors/imyouhu.md)
