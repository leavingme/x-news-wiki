---
type: "source"
title: "skills-toggle：Claude Code 生态的「Skills 减负工具」，解决 Token 膨胀隐患"
description: "**随着 Claude Code Skills 目录膨胀，每个 skill 消耗 ~100 tokens 的问题已成为实际工程痛点，skills-toggle 给出了最小化干预的解法。** - TUI 界面支持单个勾选启用/禁用，也支持通配符批量操作（如 `disable 'actix-*'`） - 原理极简：将不用的 skill 目录移至 `.disabled/`，Claude Code 不扫描"
resource: "https://x.com/i/status/2028506485387649151"
tags:
  - "x-news"
  - "highlights"
  - "author:BadUncleX"
timestamp: "2026-03-03T01:07:04.858Z"
x_tweet_id: "2028506485387649151"
x_author: "BadUncle"
x_handle: "BadUncleX"
x_created_at: "2026-03-02T16:23:28.000Z"
x_engagement:
  likes: 12
  retweets: 1
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2028506485387649151"
created: "2026-03-02"
updated: "2026-06-26"
sha256: "987577357504536d73a8aebda03e38fae5c82e18c13593cb7ac98bcbb4cfa85e"
sources:
  - "/sources/highlights/2026-03-03/00__BadUncleX__skills-toggle-claude-code-生态的-skills-减负工具-解决-token-膨胀隐患.md"
---

# skills-toggle：Claude Code 生态的「Skills 减负工具」，解决 Token 膨胀隐患

## 摘要

**随着 Claude Code Skills 目录膨胀，每个 skill 消耗 ~100 tokens 的问题已成为实际工程痛点，skills-toggle 给出了最小化干预的解法。**
- TUI 界面支持单个勾选启用/禁用，也支持通配符批量操作（如 `disable 'actix-*'`）
- 原理极简：将不用的 skill 目录移至 `.disabled/`，Claude Code 不扫描该子目录，移动操作原子化、失败自动回滚
- 侧面印证 Skills 生态已有规模效应：能积攒「几百个 skill」说明 skills 分发正在走向碎片化

gakki：这类工具的出现是生态成熟的信号，也是警报——当 token 管理需要专门工具介入，说明 Claude Code 的 context 架构已触及普通用户的认知天花板。

## 原文

发布了一个小工具：skills-toggle

用 Claude Code 的 skills 功能久了，~/.claude/skills/ 目录会积攒几百个 skill，每个都会往 system prompt 塞 ~100 tokens。session 越来越重，但大部分 skill 当下根本用不到。

做了个 TUI 工具来管理它们——勾选启用，取消禁用：

> skills-toggle

  [x] bun
  [x] nextjs
  [ ] actix-web-basics      *
  [ ] actix-web-database     *
  [x] deep-modules

  Enabled: 280 | Disabled: 35 | Changed: 2

也支持批量操作：
skills-toggle disable 'actix-*'
skills-toggle enable 'flutter-*'

原理很简单：把不用的 skill 目录移到 .disabled/，Claude Code 不会扫描这个子目录。所有移动操作是原子的，失败会自动回滚。

安装：
brew tap BUNotesAI/skills-toggle
brew install skills-toggle

GitHub: https://t.co/vtFGkOLzMR


## 元信息

- **作者**: BadUncle ([@BadUncleX](https://x.com/BadUncleX))
- **发布时间**: 2026-03-02T16:23:28.000Z
- **抓取时间**: 2026-03-03T01:07:04.858Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 12 · 🔄 1 · 💬 3 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-ecosystem](/concepts/claude-code-ecosystem.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2028506485387649151) — @BadUncleX (BadUncle)
[2] [Author page](/entities/authors/badunclex.md)
[3] [Related topic](/concepts/claude-code-ecosystem.md)
