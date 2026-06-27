---
type: "source"
title: "Learn Claude Code 开源：12 节课拆解 Agent 的「最小循环」"
description: "**Agent 不是魔法，而是一个可以被理解的循环。**  - 开源项目 Learn Claude Code 用 12 节课从零搭建 AI Agent，每节课增加一层机制（规划、子任务拆分、上下文压缩、多 Agent 协作） - 核心洞察：所有 AI 编程 Agent 的底层都是「用户→模型→工具→执行→反馈」的同一循环，最小实现不到 30 行 - 学习路径设计体现「渐进式披露」原则：先理解核心机"
resource: "https://x.com/i/status/2032613262525644985"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-03-14T00:42:37.486Z"
x_tweet_id: "2032613262525644985"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-03-14T00:22:20.000Z"
x_engagement:
  likes: 2619
  retweets: 605
  replies: 50
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 85
x_related_topic: "agent-fundamentals-education"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2032613262525644985"
created: "2026-03-14"
updated: "2026-06-26"
sha256: "7216c25584d55a476508e2360340961d63ff8da9ded15042844953ef1b48a8f2"
sources:
  - "/sources/highlights/2026-03-14/85__dotey__learn-claude-code-开源-12-节课拆解-agent-的-最小循环.md"
---

# Learn Claude Code 开源：12 节课拆解 Agent 的「最小循环」

## 摘要

**Agent 不是魔法，而是一个可以被理解的循环。**

- 开源项目 Learn Claude Code 用 12 节课从零搭建 AI Agent，每节课增加一层机制（规划、子任务拆分、上下文压缩、多 Agent 协作）
- 核心洞察：所有 AI 编程 Agent 的底层都是「用户→模型→工具→执行→反馈」的同一循环，最小实现不到 30 行
- 学习路径设计体现「渐进式披露」原则：先理解核心机制，再叠加复杂度
- 这一教育资源降低了 Agent 技术的认知门槛，推动「DIY Agent」文化的普及

**gakki 锐评**：当「Agent 原理教育」从黑箱走向透明，我们正在培养第一代「Agent 原生开发者」。

## 原文

Learn Claude Code 是真做的好，强烈推荐👍 
项目作者：@baicai003

很多人用 Claude Code 或 Cursor 写代码，觉得 AI 编程助手很神奇，但如果问一句"它到底是怎么工作的"，大部分人答不上来。

Learn Claude Code 这个开源项目做的事情很简单：用 12 节课，从零开始搭一个类似 Claude Code 的 AI Agent，每节课只加一个机制，每个机制都有可运行的 Python 代码。

这个项目的核心洞察是：所有 AI 编程 Agent 的底层都是同一个循环。用户发消息给模型，模型决定要不要调用工具，调用了就执行，把结果喂回去，继续循环，直到模型觉得任务完成了。

整个 Agent 的最小实现不到 30 行代码。剩下的一切，规划、子任务拆分、上下文压缩、多 Agent 协作、工作目录隔离，都是在这个循环上面一层一层叠加的。12 节课就是这 12 层。

学习路径设计得很讲究。

前两节搞定核心循环和工具调用

第三节加入计划能力（没有计划的 Agent 会跑偏）

第四到六节处理子 Agent、技能加载和上下文压缩（上下文窗口是有限的，不压缩大项目根本跑不动）

第七八节做任务持久化和后台执行，最后四节进入多 Agent 协作：组队、通信协议、自主领取任务、工作目录隔离。从一个人干活，到一个团队协作，复杂度是渐进的。

项目配了一个交互式 Web 平台（https://t.co/ZyubKItvQK），有步骤图解、源码查看器和文档，支持英文、中文、日文三种语言。

文档风格是"心智模型优先"：先讲问题是什么，再讲解决方案，配 ASCII 图，最后是最小可运行代码。

对想搞懂 AI Agent 内部原理的开发者来说，这可能是目前最好的从零到一的学习路径。不需要什么前置知识，有 Python 基础就能跟。

学完之后再去看 Claude Code 或者任何 Agent 框架的源码，会发现都和这个教程介绍的差不多。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-03-14T00:22:20.000Z
- **抓取时间**: 2026-03-14T00:42:37.486Z
- **精选类别**: ✨ 亮点
- **优先级**: 85
- **互动**: ❤️ 2619 · 🔄 605 · 💬 50 · 🔖 0 · 👁 0
- **关联主题**: [agent-fundamentals-education](/concepts/agent-fundamentals-education.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2032613262525644985) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/agent-fundamentals-education.md)
