---
type: "X Tweet"
title: "OpenAI Codex CLI 推出 /goal 命令：跨轮次目标持久化，Agent 终于不再「失忆」"
description: "**Codex CLI 0.128.0 引入 Ralph Loop 的 /goal 命令，让 Agent 具备跨会话目标驱动能力。**  - 用户设定目标后，Agent 会持续执行直到完成，不再依赖单轮对话的上下文窗口 - 只需在 config.toml 中启用 `goals = true`，无需手搓 shell 脚本或 git 作为外部记忆 - 目前仅限终端 CLI，桌面端尚未跟进，但方向已明确"
resource: "https://x.com/i/status/2050028108787450148"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-01T04:19:20.727Z"
x_tweet_id: "2050028108787450148"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-01T01:42:43.000Z"
x_engagement:
  likes: 250
  retweets: 33
  replies: 20
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-tools-and-orchestration"
x_source: "crawler"
---

# OpenAI Codex CLI 推出 /goal 命令：跨轮次目标持久化，Agent 终于不再「失忆」

## 摘要

**Codex CLI 0.128.0 引入 Ralph Loop 的 /goal 命令，让 Agent 具备跨会话目标驱动能力。**

- 用户设定目标后，Agent 会持续执行直到完成，不再依赖单轮对话的上下文窗口
- 只需在 config.toml 中启用 `goals = true`，无需手搓 shell 脚本或 git 作为外部记忆
- 目前仅限终端 CLI，桌面端尚未跟进，但方向已明确：Agent 的「意志力」正在被工程化

锐评：这是 Agent 编排从「问答式」向「任务式」跃迁的关键基础设施。/goal 不只是个命令，它是 OpenAI 对「Agent 应该有持续性」这个命题的工程回答。

## 原文

OpenAI 官方推出 Ralph loop 功能了，给 Codex CLI 加了个 /goal 命令。也就是说：你定个目标，它就一直跑，跨多轮不丢，不达目的不停。

这是 0.128.0 版本里的新东西，要在 ~/.codex/config.toml 的 [features] 段写一句 goals = true 才能启用。

[features]  
goals = true

目前只在终端 CLI 上有，桌面 App 还没跟上。

现在不用自己手搓 shell 脚本，不用配 git 当外部记忆，也不用敲 --dangerously-bypass-approvals-and-sandbox，直接 /goal 就行。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-01T01:42:43.000Z
- **抓取时间**: 2026-05-01T04:19:20.727Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 250 · 🔄 33 · 💬 20 · 🔖 0 · 👁 0
- **关联主题**: [agent-tools-and-orchestration](/concepts/agent-tools-and-orchestration.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2050028108787450148) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/agent-tools-and-orchestration.md)
