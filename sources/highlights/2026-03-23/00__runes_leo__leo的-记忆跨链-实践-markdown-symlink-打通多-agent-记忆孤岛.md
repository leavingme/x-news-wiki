---
type: "source"
title: "Leo的「记忆跨链」实践：Markdown + symlink 打通多 Agent 记忆孤岛"
description: "**[AI 记忆互操作性进入工程化落地阶段]** • Leo 用 markdown + 两层同步机制，让 Claude Code、Codex、OpenClaw 共享同一份 today.md，解决「切工具需从头解释」的痛点 • 核心洞察：记忆同步的价值不在「AI 记住什么」，而在于降低上下文切换的认知成本 • 方案可迁移性强——换模型只需改同步脚本路径，实现「记忆层与模型层解耦」  gakki 锐评"
resource: "https://x.com/i/status/2035751176453472430"
tags:
  - "x-news"
  - "highlights"
  - "author:runes_leo"
timestamp: "2026-03-23T00:43:10.339Z"
x_tweet_id: "2035751176453472430"
x_author: "Leo"
x_handle: "runes_leo"
x_created_at: "2026-03-22T16:11:17.000Z"
x_engagement:
  likes: 326
  retweets: 68
  replies: 18
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2035751176453472430"
created: "2026-03-22"
updated: "2026-06-26"
sha256: "5b3913e92b1127b72a33638b21e2dfa4e2d2cbc0d7b3d209904cda60acb86d92"
sources:
  - "/sources/highlights/2026-03-23/00__runes_leo__leo的-记忆跨链-实践-markdown-symlink-打通多-agent-记忆孤岛.md"
---

# Leo的「记忆跨链」实践：Markdown + symlink 打通多 Agent 记忆孤岛

## 摘要

**[AI 记忆互操作性进入工程化落地阶段]**
• Leo 用 markdown + 两层同步机制，让 Claude Code、Codex、OpenClaw 共享同一份 today.md，解决「切工具需从头解释」的痛点
• 核心洞察：记忆同步的价值不在「AI 记住什么」，而在于降低上下文切换的认知成本
• 方案可迁移性强——换模型只需改同步脚本路径，实现「记忆层与模型层解耦」

gakki 锐评：这是 Agent 生态从「各自为政」走向「互通有无」的关键一步，记忆互操作性将成为下一代 Agent 基建的必争之地。

## 原文

同时用 Claude Code、Codex、OpenClaw，怎么让它们共享记忆？

我的方案很土：一套 markdown 文件 + 两层自动同步。

核心是 today.md。每个 session 开始自动读，结束自动写。OpenClaw 本地助手通过 symlink 共享同一份文件，每 5 分钟 cron 把项目状态、目标、踩坑记录同步过去，自动生成快照注入它的 system prompt。Codex 做代码审查时按需带上下文。

记忆层就是 markdown 文件，不绑任何平台。之前用 Gemini 当辅助也是这套，换模型只需要改同步脚本的目标路径。

跑了几个月，最大的体会：记忆同步的价值不在"AI 记住了什么"，在于你切工具的时候不用从头解释一遍。


## 元信息

- **作者**: Leo ([@runes_leo](https://x.com/runes_leo))
- **发布时间**: 2026-03-22T16:11:17.000Z
- **抓取时间**: 2026-03-23T00:43:10.339Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 326 · 🔄 68 · 💬 18 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2035751176453472430) — @runes_leo (Leo)
[2] [Author page](/entities/authors/runes-leo.md)
