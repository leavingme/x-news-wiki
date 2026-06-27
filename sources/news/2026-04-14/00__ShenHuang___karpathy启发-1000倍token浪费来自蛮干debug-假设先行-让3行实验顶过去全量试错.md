---
type: "source"
title: "Karpathy启发：1000倍token浪费来自蛮干debug，「假设先行」让3行实验顶过去全量试错"
description: "**一句话核心判断：AI debug的核心瓶颈不是代码能力，而是人类不擅长在动手前先约束假设空间——这是Token时代最高性价比的工程认知升级。**  受Karpathy auto-research启发，在DEBUG.md列5个假设后，第3个假设无反对证据 → 3行实验 → 根因确认 → 5分钟修复。之前蛮干浪费的Token比最终修bug多了1000倍。4条铁律：假设先于代码、同方向失败2次强制换"
resource: "https://x.com/i/status/2043469166418735204"
tags:
  - "x-news"
  - "news"
  - "author:ShenHuang_"
timestamp: "2026-04-14T00:45:15.346Z"
x_tweet_id: "2043469166418735204"
x_author: "Shen Huang"
x_handle: "ShenHuang_"
x_created_at: "2026-04-12T23:19:49.000Z"
x_engagement:
  likes: 1841
  retweets: 181
  replies: 45
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2043469166418735204"
created: "2026-04-12"
updated: "2026-06-26"
sha256: "37bba5cd4030502fb47f922a3a2bc5e71e9c166e4807c01f06e0db2e6976d3ac"
sources:
  - "/sources/news/2026-04-14/00__ShenHuang___karpathy启发-1000倍token浪费来自蛮干debug-假设先行-让3行实验顶过去全量试错.md"
---

# Karpathy启发：1000倍token浪费来自蛮干debug，「假设先行」让3行实验顶过去全量试错

## 摘要

**一句话核心判断：AI debug的核心瓶颈不是代码能力，而是人类不擅长在动手前先约束假设空间——这是Token时代最高性价比的工程认知升级。**

受Karpathy auto-research启发，在DEBUG.md列5个假设后，第3个假设无反对证据 → 3行实验 → 根因确认 → 5分钟修复。之前蛮干浪费的Token比最终修bug多了1000倍。4条铁律：假设先于代码、同方向失败2次强制换假设、证据写文件防上下文压缩丢失推理链、每次最多改5行。

这本质上是把「科学研究方法」强制嵌入AI Coding工作流——对复杂系统的根因分析有普适价值。

## 原文

上周花了好几亿 token debug 一个 race condition，全失败。

后来受 Karpathy auto-research 启发，只加了一句话："把所有假设和证据写到 DEBUG.md。"

AI 列了 5 个假设。其中第 3 个没有任何反对证据。

3 行实验 → 根因确认 → 5 分钟修完。

之前蛮干浪费的 token 比最后修 bug 多了 1000 倍。

血泪教训总结的 4 条 debug 规则：
1. 改代码之前必须先列假设
2. 每次实验最多改 5 行
3. 所有证据写文件 — 防上下文压缩丢掉推理链
4. 同一方向失败 2 次 → 强制换假设

已经写成 Claude Code / Gemini Cli skill 开源了更新在我的 Github：https://t.co/PTw0FdefXL


## 元信息

- **作者**: Shen Huang ([@ShenHuang_](https://x.com/ShenHuang_))
- **发布时间**: 2026-04-12T23:19:49.000Z
- **抓取时间**: 2026-04-14T00:45:15.346Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1841 · 🔄 181 · 💬 45 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2043469166418735204) — @ShenHuang_ (Shen Huang)
[2] [Author page](/entities/authors/shenhuang.md)
