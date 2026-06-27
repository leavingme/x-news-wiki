---
type: "source"
title: "极简 Agent 工作流：Ghostty + Claude Code 实战复盘"
description: "**[核心逻辑]** 揭秘 OpenClaw 作者 Peter Steinberger 的主力开发组合。 - 核心配置：抛弃 Zed 终端，回归 Ghostty，配合大分辨率屏幕同时监控 4 个 Claude Code 窗口。 - 进阶技巧：删除所有 MCP 插件以保证上下文纯净，优先使用 CLI 工具（Vercel, PSQL）提高 AI 执行效率。"
resource: "https://x.com/i/status/2023187723528679578"
tags:
  - "x-news"
  - "highlights"
  - "author:vista8"
timestamp: "2026-02-16T01:00:38.602Z"
x_tweet_id: "2023187723528679578"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-02-16T00:08:36.000Z"
x_engagement:
  likes: 322
  retweets: 52
  replies: 11
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2023187723528679578"
created: "2026-02-16"
updated: "2026-06-26"
sha256: "03db3c9023d5527a0b2ed73fd7c16d092e461a797290912331bf68a882aa5254"
sources:
  - "/sources/highlights/2026-02-16/00__vista8__极简-agent-工作流-ghostty-claude-code-实战复盘.md"
---

# 极简 Agent 工作流：Ghostty + Claude Code 实战复盘

## 摘要

**[核心逻辑]** 揭秘 OpenClaw 作者 Peter Steinberger 的主力开发组合。
- 核心配置：抛弃 Zed 终端，回归 Ghostty，配合大分辨率屏幕同时监控 4 个 Claude Code 窗口。
- 进阶技巧：删除所有 MCP 插件以保证上下文纯净，优先使用 CLI 工具（Vercel, PSQL）提高 AI 执行效率。

## 原文

翻看龙虾作者的博客，去年八月分享过他的 AI 开发工作流

https://t.co/cskSLG05W6

核心理念极简，工具组合：Ghostty + Claude Code 

工具选择演变

之前全面转向 VS Code，现在又回到了 Ghostty 作为主力。

VS Code 留着看代码，Cursor/GPT-5 用来做代码审查（有时也用 CLI）。

试过 Zed，但它终端实在让我受不了。

VS Code 的终端太不稳定了，粘贴大段文本时经常卡死。没什么能比得上 Ghostty。

显示器用的是  Dell UltraSharp U4025QW，3840x1620 分辨率。

能同时看 4 个 Claude Code窗口加 Chrome，不用来回切窗口。

各个工具评价

Gemini 有时很强，但它的编辑工具太乱了，用得越来越少。

GPT-5 审查计划效果甚至比 Gemini 还好。

这些工具都直接在主分支上用。

试过 worktree 那套，只会拖慢速度。

只要你仔细选择工作区域，完全可以同时在多个地方干活，不会互相影响。

Claude 经常把代码搞得一团糟，但它重构和清理代码同样出色。

重要的是两件事都要做，不然技术债会越积越多。

规划和上下文管理

在状态栏显示当前主题，加上 session ID（gist），这样需要切换账号或重启会话时特别方便。

用计划模式然后不断迭代，这是关键。

小任务直接做，大任务写到文件里让 GPT-5 审查。

很多时候用简短的提示词，有时候头脑风暴。

AI 能从不连贯的想法里理出惊人的思路。

不做重构时我通常开 1-2 个 agent，清理代码/写测试/UI 工作时，4 个左右是最佳状态。具体看工作的影响范围。

最难的是分布式系统设计，选对依赖、平台，设计一个有前瞻性的数据库架构。

搭建了大量自定义基础设施、管理页面、CLI 工具，帮助我和 AI 更好地工作。

大改动一定要写测试。

自动化测试通常写得不够好，但如果你在同一个上下文里让模型写测试，它几乎总能发现问题。

极简主义

甚至把最后一个 MCP 都删了。

因为 Claude 有时会自作主张启动 Playwright，其实直接读代码更快，也不会污染上下文。

选那些有 CLI 的服务：vercel、psql、gh、axiom。

AI 能直接用它们，在 CLAUDE. md 里写一行就够了，

比如"日志：axiom 或 vercel cli"，"数据库：psql + 一个正确加载环境变量的例子，这样循环更快"。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-02-16T00:08:36.000Z
- **抓取时间**: 2026-02-16T01:00:38.602Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 322 · 🔄 52 · 💬 11 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2023187723528679578) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
