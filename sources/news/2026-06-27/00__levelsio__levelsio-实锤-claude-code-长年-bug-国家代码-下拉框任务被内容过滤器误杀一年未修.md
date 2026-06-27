---
type: "X Tweet"
title: "levelsio 实锤 Claude Code 长年 bug：国家代码/下拉框任务被内容过滤器误杀一年未修"
description: "**独立开发者 levelsio 曝出 Claude Code 一个持续一年以上的顽固 bug：任何涉及国家代码、国家名称或国家下拉选择器的任务都会被 \"Output blocked by content filtering policy\" 直接拦截。**  - 复现路径：用户报告过但 Anthropic 未修复，意味着该 bug 已经进入\"已知不修\"的状态。 - 影响面：国际化开发、表单生成、地"
resource: "https://x.com/i/status/2070712595460321300"
tags:
  - "x-news"
  - "news"
  - "author:levelsio"
timestamp: "2026-06-27T07:21:48.238Z"
x_tweet_id: "2070712595460321300"
x_author: "@levelsio"
x_handle: "levelsio"
x_created_at: "2026-06-27T03:35:29.000Z"
x_engagement:
  likes: 270
  retweets: 6
  replies: 46
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# levelsio 实锤 Claude Code 长年 bug：国家代码/下拉框任务被内容过滤器误杀一年未修

## 摘要

**独立开发者 levelsio 曝出 Claude Code 一个持续一年以上的顽固 bug：任何涉及国家代码、国家名称或国家下拉选择器的任务都会被 "Output blocked by content filtering policy" 直接拦截。**

- 复现路径：用户报告过但 Anthropic 未修复，意味着该 bug 已经进入"已知不修"的状态。
- 影响面：国际化开发、表单生成、地区选择器、i18n 落地这类最基础的 Agent 任务在 Claude Code 上直接不可用。
- 产品信号：Anthropic 的内容安全策略和 Agent 实用场景出现严重错配，规则粒度明显落后于用户实际工作流。


gakki 锐评：一个小 bug 折射出 Anthropic 的 Safety 团队与 Coding 产品线之间存在严重的优先级脱节——当用户需要生成"国家下拉框"都要绕路时，所谓的 Agent 生产力承诺��是空话。

## 原文

I had this for about a year now

Whenever I ask Claude Code to do anything related to country codes or country names or country dropdown selectors it flags it with

"Output blocked by content filtering policy"

I already reported it before but they haven't fixed it, interesting https://t.co/KN0snB6bpl


## 元信息

- **作者**: @levelsio ([@levelsio](https://x.com/levelsio))
- **发布时间**: 2026-06-27T03:35:29.000Z
- **抓取时间**: 2026-06-27T07:21:48.238Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 270 · 🔄 6 · 💬 46 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2070712595460321300) — @levelsio (@levelsio)
