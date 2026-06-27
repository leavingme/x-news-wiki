---
type: "source"
title: "Vercel 开源 Open Agents：大型代码仓库上的编程 Agent 难题终于有了企业级参考实现"
description: "**[一句话核心判断]**  Vercel 开源的 Open Agents 不是又一个 Demo，而是 Stripe、Spotify、Block 这些公司\"AI 软件工厂\"实战经验的提炼——它解决的不是\"能不能跑\"，而是\"在大型代码库里怎么跑\"。  **要点：** - 核心问题：现成编程 Agent 在大代码仓库上表现不行，也不了解公司内部知识体系 - 架构亮点：Agent 与沙箱生命周期解耦，三"
resource: "https://x.com/i/status/2043904844608532640"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-14T12:47:45.723Z"
x_tweet_id: "2043904844608532640"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-14T04:11:03.000Z"
x_engagement:
  likes: 430
  retweets: 76
  replies: 21
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2043904844608532640"
created: "2026-04-14"
updated: "2026-06-26"
sha256: "228e9d7a27d7834d7b6b1c9c300d714677a75edd05efd8cf48cc3f09706daa97"
sources:
  - "/sources/highlights/2026-04-14/00__dotey__vercel-开源-open-agents-大型代码仓库上的编程-agent-难题终于有了企业级参考实现.md"
---

# Vercel 开源 Open Agents：大型代码仓库上的编程 Agent 难题终于有了企业级参考实现

## 摘要

**[一句话核心判断]**

Vercel 开源的 Open Agents 不是又一个 Demo，而是 Stripe、Spotify、Block 这些公司"AI 软件工厂"实战经验的提炼——它解决的不是"能不能跑"，而是"在大型代码库里怎么跑"。

**要点：**
- 核心问题：现成编程 Agent 在大代码仓库上表现不行，也不了解公司内部知识体系
- 架构亮点：Agent 与沙箱生命周期解耦，三件事各自演进——这是生产级部署的关键设计
- 工具调用从沙箱外部操作，而非 Agent 运行在沙箱内，这避免了绑定演进问题

**gakki 的锐评：**
把沙箱和 Agent 解耦这个设计选择，透露的是 Vercel 从真实生产环境中学到的教训——很多开源 Agent 方案恰恰死在这个耦合上。对于想自建企业 Agent 平台的公司，这个开源项目值得认真读架构。

## 原文

Vercel 开源了 Open Agents，一个用来搭建企业自有编程 Agent 平台的参考实现。

CEO Guillermo Rauch 说：现成的编程 Agent 在大型代码仓库上表现不行，也不了解你公司的知识体系和内部流程，所以 Stripe、Spotify、Block 这些公司都在造自己的 AI 软件工厂。

Open Agents 绑定了 Vercel 自家的 Fluid、Workflow、Sandbox 和 AI Gateway 这套底座。但不管怎么说，Open Agents 给了一个可以直接 fork 的起点。

架构分三层：前端负责会话和认证，Agent 作为持久化工作流运行在 Vercel 上，沙箱提供隔离的代码执行环境。一个关键设计是 Agent 不跑在沙箱里面，而是从外部通过工具调用（文件读写、Shell 命令、搜索等）操作沙箱。这样 Agent 的生命周期、沙箱的生命周期、模型的选择，三件事互不绑定，各自演进。

功能上已经比较完整：支持对话驱动的编程 Agent、沙箱快照恢复、仓库克隆和分支操作、自动提交和发 PR、会话分享，甚至还有语音输入。

对于正在考虑自建编程 Agent 的技术团队，这省了从零搭架子的功夫。对于没有这个需求的开发者，这个项目的架构设计本身也值得看看，尤其是 Agent 和执行环境分离这个思路，几乎是当前所有 Agent 框架都在趋同的方向。

对比下 Anthropic 的 Managed Agents。

Vercel 的 Open Agents 是开源参考实现，给你一套可以 fork 的代码，自己部署、自己改。Anthropic 的 Managed Agents 是全托管服务，你通过 API 定义 Agent 的行为，基础设施全部由 Anthropic 运行，连沙箱、状态管理、错误恢复都不用操心。

有意思的是，两者在架构核心上达成了同一个共识：Agent 和执行环境必须分离。Vercel 的文档里专门强调"the agent is not the sandbox"，Agent 从外部通过工具调用操作沙箱。Anthropic 的工程博客用了一个更形象的说法，把 Agent 拆成"大脑"和"手"，大脑（模型和调度循环）不住在容器里，通过接口远程操控沙箱。

Anthropic 的工程博客还解释了为什么要这么做：早期他们把所有东西塞进一个容器，结果容器变成了"宠物"（Pet），挂了就什么都丢了，调试还得钻进去看，而容器里又有用户数据，安全上也过不去。拆开之后，容器变成了"牲口"（Cattle），坏了就换一个，会话日志（Session）独立存储在外面，随时可以恢复。

除了架构哲学，两者的差异很明显：

模型锁定方面，Open Agents 不绑定模型，你可以接任何 LLM。Managed Agents 只能用 Claude 系列模型，但换来的是 Anthropic 在 harness 层面做的 prompt caching、上下文压缩、自动恢复这些优化，这些东西自己搭很难做好。

成本结构方面，Open Agents 的成本是你自己的基础设施费用加上模型 API 调用费。Managed Agents 是三层计费：模型 token 费 + 每小时 0.08 美元的运行时费（按毫秒计，空闲不收费）+ 网页搜索每千次 10 美元。

控制权方面，Open Agents 给你完整源码，怎么改都行，但搭建和维护是你的事。Managed Agents 上手快（有人说 30 分钟就能跑起来），但你被限制在 Anthropic 提供的 API 能力范围内。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-14T04:11:03.000Z
- **抓取时间**: 2026-04-14T12:47:45.723Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 430 · 🔄 76 · 💬 21 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2043904844608532640) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
