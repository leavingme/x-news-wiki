---
type: "source"
title: "Opus Ultra Code 模式登场：并发 Subagent 从工具特性变为基础设施"
description: "**一线判断：数百并发 Subagent 的常态化，标志着 Agent 编排从演示进入生产阶段。**  昨晚 Opus 上线的 Dynamic Workflows 允许单次启动数百个并发 Subagent，处理代码库级调研、庞大报告生成等重量任务。触发方式简单——提示词含 workflow 即可，或主动启动 Ultra Code 模式。  关键约束：Ultra Code 模式单次对话生效，重启后回"
resource: "https://x.com/i/status/2060186234518184286"
tags:
  - "x-news"
  - "highlights"
  - "author:op7418"
timestamp: "2026-05-29T04:18:35.870Z"
x_tweet_id: "2060186234518184286"
x_author: "歸藏(guizang.ai)"
x_handle: "op7418"
x_created_at: "2026-05-29T02:27:29.000Z"
x_engagement:
  likes: 27
  retweets: 3
  replies: 11
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "multi-agent-framework-ecosystem-comparison"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2060186234518184286"
created: "2026-05-29"
updated: "2026-06-26"
sha256: "ecd7e2b44a53d2293fc3003d585b361f4ae0ed2909ac0b62895ff0ffb75f8ac5"
sources:
  - "/sources/highlights/2026-05-29/00__op7418__opus-ultra-code-模式登场-并发-subagent-从工具特性变为基础设施.md"
---

# Opus Ultra Code 模式登场：并发 Subagent 从工具特性变为基础设施

## 摘要

**一线判断：数百并发 Subagent 的常态化，标志着 Agent 编排从演示进入生产阶段。**

昨晚 Opus 上线的 Dynamic Workflows 允许单次启动数百个并发 Subagent，处理代码库级调研、庞大报告生成等重量任务。触发方式简单——提示词含 workflow 即可，或主动启动 Ultra Code 模式。

关键约束：Ultra Code 模式单次对话生效，重启后回落 X-HIGH。官方不建议直接改代码，建议用于「量大但基础」的任务。


**gakki：大规模并发 Subagent 的约束不在技术，在边界感。官方建议用于调研而非改写，是工程上的克制，也是对复杂性的诚实。**

## 原文

相较于 Opus 4.8，昨晚动态工作流（Dynamic Workflows）的发布，我感觉意义更重大一些。

它延续了那套并发的 Subagent 逻辑，但启动的 Subagent 可能多达数百个，能帮你完成一些非常重、规模非常大的任务。比如：

1. 调研你整个代码库的问题
2. 快速收集并生成一份庞大的调研报告

看起来官方并不太建议拿它直接去改动代码，而是用它处理一些比较基础但工作量巨大的任务，通过并发的形式来大幅加快处理速度。

触发方式：

1. 更新以后，只要提示词里带 workflow 就会触发。
2. 启动 Ultra Code 模式。启动后，任何任务都会帮你规划一个动态工作流。

注意：Ultra Code 模式启动后，仅在当前单次对话生效。如果重启，系统会退回到 X-HIGH 的推理模式。


## 元信息

- **作者**: 歸藏(guizang.ai) ([@op7418](https://x.com/op7418))
- **发布时间**: 2026-05-29T02:27:29.000Z
- **抓取时间**: 2026-05-29T04:18:35.870Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 27 · 🔄 3 · 💬 11 · 🔖 0 · 👁 0
- **关联主题**: [multi-agent-framework-ecosystem-comparison](/concepts/multi-agent-framework-ecosystem-comparison.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2060186234518184286) — @op7418 (歸藏(guizang.ai))
[2] [Author page](/entities/authors/op7418.md)
[3] [Related topic](/concepts/multi-agent-framework-ecosystem-comparison.md)
