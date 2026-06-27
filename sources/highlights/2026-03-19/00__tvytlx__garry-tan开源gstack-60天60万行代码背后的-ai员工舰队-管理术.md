---
type: "X Tweet"
title: "Garry Tan开源gstack：60天60万行代码背后的「AI员工舰队」管理术"
description: "**[AI Coding从个人工具升级为团队编排系统]** • 15个Markdown定义的slash command虚拟员工，覆盖需求分析、代码审查、QA测试全链路 • /qa命令是核心突破：真实浏览器自动化测试→修复→回归测试闭环，支撑12个agent并行 • Think→Plan→Build→Review→Test→Ship流程标准化，AI工程从「Vibe」走向「纪律」  gakki锐评：Y"
resource: "https://x.com/i/status/2034480427759792570"
tags:
  - "x-news"
  - "highlights"
  - "author:tvytlx"
timestamp: "2026-03-19T12:43:08.784Z"
x_tweet_id: "2034480427759792570"
x_author: "Xiao Tan"
x_handle: "tvytlx"
x_created_at: "2026-03-19T04:01:47.000Z"
x_engagement:
  likes: 323
  retweets: 74
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
---

# Garry Tan开源gstack：60天60万行代码背后的「AI员工舰队」管理术

## 摘要

**[AI Coding从个人工具升级为团队编排系统]**
• 15个Markdown定义的slash command虚拟员工，覆盖需求分析、代码审查、QA测试全链路
• /qa命令是核心突破：真实浏览器自动化测试→修复→回归测试闭环，支撑12个agent并行
• Think→Plan→Build→Review→Test→Ship流程标准化，AI工程从「Vibe」走向「纪律」

gakki锐评：YC掌门人用自身实践证明：AI Coding的瓶颈不是模型能力，而是流程设计——当「虚拟员工」有了清晰的职责边界和验收标准，并行开发才从 chaos 变成 leverage。

## 原文

YC CEO Garry Tan 说他过去 60 天写了 60 万行生产代码。每天 1-2 万行，35% 是测试，同时还在全职管 YC。

然后他把方法开源了。

工具叫 gstack，核心思路是像管一个团队一样管 AI。

他用 Claude Code 造了 15 个"虚拟员工"——全是 Markdown 写的 slash command：

/office-hours：先把你的需求打回去重新想。你说"我要做个日程 app"，它说"你真正想要的是 AI 私人助理"
/review：像 staff engineer 审代码，能过 CI 但会炸生产的 bug 它帮你标出来
/qa：打开真实浏览器，像用户一样点，发现 bug → 修复 → 写回归测试 → 再验一遍
他说 /qa 是最大的突破——有了这个能力，他从同时跑 6 个 agent 扩到了 12 个。

日常状态：10-15 个并行 sprint，不同功能、不同分支、不同 agent 同时跑。能并行不是因为模型更强，是因为有流程——Think → Plan → Build → Review → Test → Ship，每一步知道上一步做了什么。没有流程，10 个 agent 就是 10 份混乱。

MIT 协议，完全免费。

一个问题留给大家：如果一个人真的能做到 20 人的产出，"团队"这个概念会变成什么？

https://t.co/i91ekEONSM


## 元信息

- **作者**: Xiao Tan ([@tvytlx](https://x.com/tvytlx))
- **发布时间**: 2026-03-19T04:01:47.000Z
- **抓取时间**: 2026-03-19T12:43:08.784Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 323 · 🔄 74 · 💬 8 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2034480427759792570) — @tvytlx (Xiao Tan)
