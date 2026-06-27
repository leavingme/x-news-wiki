---
type: "X Tweet"
title: "YC总裁开源gstack：硅谷顶级投资人的「AI团队管理」方法论"
description: "**[从Vibe Coding到Structured Agent：12人格分工打破单AI瓶颈]** • 核心洞察：让AI同时当CEO+PM+Tech Lead+Designer=什么都做不精——人类都做不到，模型更不行 • 12个Skill对应12个角色，每个只干一件事且干到极致：CEO想方向、偏执工程师做Code Review、发布工程师管上线 • 技术细节：刻意不用MCP，坚持CLI-nati"
resource: "https://x.com/i/status/2035717633803190647"
tags:
  - "x-news"
  - "news"
  - "author:sitinme"
timestamp: "2026-03-23T00:43:10.340Z"
x_tweet_id: "2035717633803190647"
x_author: "sitin"
x_handle: "sitinme"
x_created_at: "2026-03-22T13:58:00.000Z"
x_engagement:
  likes: 77
  retweets: 15
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "claude-code-natural-language-workflow"
x_source: "crawler"
---

# YC总裁开源gstack：硅谷顶级投资人的「AI团队管理」方法论

## 摘要

**[从Vibe Coding到Structured Agent：12人格分工打破单AI瓶颈]**
• 核心洞察：让AI同时当CEO+PM+Tech Lead+Designer=什么都做不精——人类都做不到，模型更不行
• 12个Skill对应12个角色，每个只干一件事且干到极致：CEO想方向、偏执工程师做Code Review、发布工程师管上线
• 技术细节：刻意不用MCP，坚持CLI-native——暗示Agent工具的最小可行形态仍应是Unix哲学

**gakki锐评：** Garry Tan在用VC的 Portfolio思维管Agent：分散投资、专业分工、只看结果。这是对「让AI什么都干」的Vibe Coding原教旨主义的直接反驳。

## 原文

硅谷 YC 总裁 Garry Tan 把自己在用的 Claude Code 工作流直接开源了，项目叫 gstack。

一句话：以前是“一个 AI 打工人”，现在是“一个 AI 团队”。

我们用 Claude Code，很容易犯一个错误：什么都让它干。你一句话丢过去：“帮我做个 App”，它就开始写。
最后的结果通常是——能跑，但不高级。
功能有了，但产品不清晰；代码能用，但不优雅；页面能看，但不精致。

本质问题其实很简单：你让一个 AI 同时当 CEO + PM + Tech Lead + Designer + QA。
人类都做不到，更别说模型了。

gstack 解决这个问题的方式很“硅谷”：直接拆角色。
它内置了 12 个 Skill，对应 12 个人格：CEO 想方向、Tech Lead 定方案、设计师看体验、偏执工程师做 code review、发布工程师负责上线……
每个角色只干一件事，而且干到极致。

我自己在折腾 OpenClaw / 多 Agent 的时候，也慢慢发现一件事：AI 的上限，不是模型，而是“分工”。

更细节一点的地方也挺有意思，比如它没有用 MCP 去做浏览器操作，而是直接搞了个 CLI 工具。

原因也很现实：MCP 每次通信要带一堆协议，Token 消耗特别重。
但 CLI 直接走命令行，纯文本输入输出，干净又省钱。
这种“工程味很重”的优化，其实才是能长期跑生产的关键。

如果你把 gstack 的流程串起来看，其实就是一条完整的“AI 开发流水线”：
想法 → CEO 过一遍
方案 → Tech Lead 审一遍
开发 → Claude 写
质量 → 偏执工程师挑刺
测试 → QA 跑
上线 → 一键发版
复盘 → 每周总结

这已经不是“写代码”了，而是在模拟一个完整的公司。


## 元信息

- **作者**: sitin ([@sitinme](https://x.com/sitinme))
- **发布时间**: 2026-03-22T13:58:00.000Z
- **抓取时间**: 2026-03-23T00:43:10.340Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 77 · 🔄 15 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2035717633803190647) — @sitinme (sitin)
