---
type: "source"
title: "Symlink统一多工具Skills目录：跨工具Skills碎片化有了务实解法"
description: "**Skills跨工具管理第一次有了工程化的权宜方案。**  - 余温将~/.codex/skills/设为唯一源头，Claude Code和Cursor的skills目录全部symlink同步 - 解决了改一个Skill要手动同步三份的核心痛点 - 额外写了skill-manage工具处理全局/项目级切换   锐评：symlink是当前最务实的过渡解——真正的终局是Skills格式标准化，类似p"
resource: "https://x.com/i/status/2069643170363679231"
tags:
  - "x-news"
  - "news"
  - "author:gkxspace"
timestamp: "2026-06-24T07:18:55.970Z"
x_tweet_id: "2069643170363679231"
x_author: "余温"
x_handle: "gkxspace"
x_created_at: "2026-06-24T04:45:58.000Z"
x_engagement:
  likes: 7
  retweets: 1
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2069643170363679231"
created: "2026-06-24"
updated: "2026-06-26"
sha256: "91bb430b29c756ac78c1eccab844ce98e9e7f1932a330a278d37a9180c7a2a3a"
sources:
  - "/sources/news/2026-06-24/00__gkxspace__symlink统一多工具skills目录-跨工具skills碎片化有了务实解法.md"
---

# Symlink统一多工具Skills目录：跨工具Skills碎片化有了务实解法

## 摘要

**Skills跨工具管理第一次有了工程化的权宜方案。**

- 余温将~/.codex/skills/设为唯一源头，Claude Code和Cursor的skills目录全部symlink同步
- 解决了改一个Skill要手动同步三份的核心痛点
- 额外写了skill-manage工具处理全局/项目级切换


锐评：symlink是当前最务实的过渡解——真正的终局是Skills格式标准化，类似package.json级别的跨框架兼容，谁先定义标准谁吃生态。

## 原文

同时用好几个编程工具的人，skills 管理确实很麻烦

我之前也是很乱，/.claude/skills、/.codex/skills、~/.cursor/skills 各写各的，改一个要手动同步好几份

现在把 ~/.codex/skills/ 做唯一源头，Claude Code 和 Cursor 的 skills 目录全部 symlink 过去。只需要一处修改。

全局或者项目级的skill都可以这样搞。我还特意写了个skill-manage去做这件事。


## 元信息

- **作者**: 余温 ([@gkxspace](https://x.com/gkxspace))
- **发布时间**: 2026-06-24T04:45:58.000Z
- **抓取时间**: 2026-06-24T07:18:55.970Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 7 · 🔄 1 · 💬 3 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2069643170363679231) — @gkxspace (余温)
[2] [Author page](/entities/authors/gkxspace.md)
