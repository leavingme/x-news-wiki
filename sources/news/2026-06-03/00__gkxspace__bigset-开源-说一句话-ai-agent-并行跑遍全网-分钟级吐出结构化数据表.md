---
type: "source"
title: "Bigset 开源：说一句话，AI Agent 并行跑遍全网，分钟级吐出结构化数据表"
description: "**[数据采集工程的壁垒正在被自然语言接口夷平]**  Bigset 开源项目实现：用自然语言描述数据需求，系统自动派遣多 Agent 并行爬取各网站，几分钟后汇总为结构化表格。背后是三层架构——编排 Agent 发现实体，并行子 Agent 各自调研，工具预算 6 次封顶，数据来源可追溯。AGPL-3.0 开源，自托管，用自己的 API Key。  相比 Exa 付费服务，BigSet 不限主题"
resource: "https://x.com/i/status/2061961813076709668"
tags:
  - "x-news"
  - "news"
  - "author:gkxspace"
timestamp: "2026-06-03T01:18:33.923Z"
x_tweet_id: "2061961813076709668"
x_author: "余温"
x_handle: "gkxspace"
x_created_at: "2026-06-03T00:03:00.000Z"
x_engagement:
  likes: 9
  retweets: 3
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2061961813076709668"
created: "2026-06-03"
updated: "2026-06-26"
sha256: "5feee8cd81acda230b2395a502a248b0be189a56dd6fd6d9188e5c8cdbae4c35"
sources:
  - "/sources/news/2026-06-03/00__gkxspace__bigset-开源-说一句话-ai-agent-并行跑遍全网-分钟级吐出结构化数据表.md"
---

# Bigset 开源：说一句话，AI Agent 并行跑遍全网，分钟级吐出结构化数据表

## 摘要

**[数据采集工程的壁垒正在被自然语言接口夷平]**

Bigset 开源项目实现：用自然语言描述数据需求，系统自动派遣多 Agent 并行爬取各网站，几分钟后汇总为结构化表格。背后是三层架构——编排 Agent 发现实体，并行子 Agent 各自调研，工具预算 6 次封顶，数据来源可追溯。AGPL-3.0 开源，自托管，用自己的 API Key。

相比 Exa 付费服务，BigSet 不限主题，覆盖公司/人/论文之外的任意领域。实际测试：一句提示词，拿到完整 B2B SaaS 工具表格。

gakki 的锐评：爬虫→Schema 设计→去重→定时维护，这套苦力活长期以来是数据工程的门槛。BigSet 把这个链条压缩成「一句话」，等于宣告：能上网的 AI Agent 可以替代大部分低价值数据采集工作。但可溯源性只是相对的——「来源可追溯」在 AGPL 框架下如何落地，才是真正的工程挑战。

## 原文

发现一个很疯狂的开源工具，你输一句话描述你要什么数据，它派出一群 AI Agent 并行跑到各个网站上调研，几分钟后汇总成一张结构化表格给你

其实数据都摆在网上，但想变成一张能用的表格，历来都是苦力活，过去这是一个工程项目：
拼搜索、写爬虫、设计 Schema、去重，再加个定时任务保持更新，每个数据集都要重来一遍。

Exa 融了 2.5 亿验证了一件事：这个距离可以缩短到一句话。
但 Websets 目前只覆盖公司、人和论文。而且都是cacheddata

@Tiny_Fish 开源了一个叫 Bigset 的东西，做同样的事，但不限主题。

我试了一句：“提供免费层或 Freemium 方案的热门 B2B SaaS 工具，包含名称、类别、免费层概要和定价页面。”几分钟后拿到一张完整的表。

背后是真正的多 Agent 架构：编排 Agent 发现实体，并行子 Agent 各自调研，工具预算 6 次封顶，数据来源可追溯。整个代码库 AGPL-3.0 开源，自托管，用你自己的 Key。

如果 BigSet 对你有用，记得去 GitHub repo 点个 star → https://t.co/YlK9H2ekTu


## 元信息

- **作者**: 余温 ([@gkxspace](https://x.com/gkxspace))
- **发布时间**: 2026-06-03T00:03:00.000Z
- **抓取时间**: 2026-06-03T01:18:33.923Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 9 · 🔄 3 · 💬 6 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2061961813076709668) — @gkxspace (余温)
[2] [Author page](/entities/authors/gkxspace.md)
