---
type: "source"
title: "个人信源治理：FreshRSS + Claude Code 手搓专属数据库"
description: "**[核心逻辑]** 解决 Agent 联网搜索质量低下的方案：构建基于 PostgreSQL 的 RSS 数据库，通过扩展提升 AI 调用的上下文质量。"
resource: "https://x.com/i/status/2023052495589908838"
tags:
  - "x-news"
  - "highlights"
  - "author:libukai"
timestamp: "2026-02-16T01:00:41.094Z"
x_tweet_id: "2023052495589908838"
x_author: "李不凯正在研究"
x_handle: "libukai"
x_created_at: "2026-02-15T15:11:16.000Z"
x_engagement:
  likes: 73
  retweets: 10
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2023052495589908838"
created: "2026-02-15"
updated: "2026-06-26"
sha256: "448d4ad9e303ff5b91a382ffe9eb8b5500713b82b52583bfd390a6288e1fc0a8"
sources:
  - "/sources/highlights/2026-02-16/00__libukai__个人信源治理-freshrss-claude-code-手搓专属数据库.md"
---

# 个人信源治理：FreshRSS + Claude Code 手搓专属数据库

## 摘要

**[核心逻辑]** 解决 Agent 联网搜索质量低下的方案：构建基于 PostgreSQL 的 RSS 数据库，通过扩展提升 AI 调用的上下文质量。

## 原文

终于赶在蛇年结束之前，完成了一件拖沓很久的事：基于 RSS 把个人专属的优质信息获取和持久存储机制建立起了。

之所以要做这件事情，最核心的出发点是在用 Obsidian + Claudian 构建 AI 写作工具的时候， 发现通过 Agent Skill 调用 Claude Code 内置的网络搜索的结果质量太低了，导致产出的草稿质量总达不到我的要求。

想了想，反正我就专注在 AI 领域，干脆自己筛选信息源做一个自己专用的信源数据库好了。

于是乎，我选择了 FreshRSS 作为这套系统的基础。作为 一个灵活性极强的老牌 RSS 工具，FreshRSS 的最大优势是可以选择 PostgreSQL 作为数据库，并且适配 Google Reader 提供了完善的 API 调用接口。这就意味着，我在 Agent Skill 中可以通过多种方式来调用数据库中的内容，在 AI 进行写作时提供优质的背景上下文。

另外一方面，我也准备把个人的深度阅读需求都集中到 FreshRSS 上来解决。

要感谢 FreshRSS 完备的扩展体系，开发一个扩展非常容易且能实现几乎任何功能。虽然市面上的现有插件质量都不咋样，但现在有了 Claude Code 咱根据需求自己手搓就行了。

为了提升阅读体验，我自己手搓了四个扩展：

- ThreePanesView：独立文章详情，扩展为三栏阅读
- TitleFilter：过滤 Feed 文章，可灵活选择黑白名单的
- ContentFilter：清理文章详情中广告内容 
- Feed Style：为每个 Feed 自定义展示样式

有了这四个扩展的加持，FreshRSS 现在的阅读体验超过了任何同类产品，完全有资格说一句不服来战，🤛

至于订阅的 RSS，目前主要由以下几个来源构成：

- 今天看啥：最稳定的微信公众号订阅服务
- Morerss：汇总了还在坚持的独立博客
- Rsshub：主要是自己写路由转化想要的网站内容
- Rssbox：把英文/越南语的 RSS 转化为中文

在过去的一年里，我最大的体会就是精力已经跟不上能力提升了，注意力才是未来最珍贵的资本。

要想马到成功，就先从减少无效阅读，提升信息获取质量开始吧。


## 元信息

- **作者**: 李不凯正在研究 ([@libukai](https://x.com/libukai))
- **发布时间**: 2026-02-15T15:11:16.000Z
- **抓取时间**: 2026-02-16T01:00:41.094Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 73 · 🔄 10 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2023052495589908838) — @libukai (李不凯正在研究)
[2] [Author page](/entities/authors/libukai.md)
