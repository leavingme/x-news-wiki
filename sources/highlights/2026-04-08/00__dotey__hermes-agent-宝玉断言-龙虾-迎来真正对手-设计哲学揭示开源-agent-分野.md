---
type: "X Tweet"
title: "Hermes Agent：宝玉断言「龙虾」迎来真正对手，设计哲学揭示开源 Agent 分野"
description: "**【一句话核心判断】** Hermes Agent 上线两月斩获近 30k GitHub Stars，Nous Research 交出了 OpenClaw 遇上的第一份有质量的竞品答卷。  **信息增量：** - 核心差异在于架构哲学：OpenClaw 是 Gateway（消息路由与渠道管理），Hermes 是 Engine（围绕 Agent 自身执行循环和 closed learning lo"
resource: "https://x.com/i/status/2041585514873037167"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-08T00:43:36.100Z"
x_tweet_id: "2041585514873037167"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-07T18:34:52.000Z"
x_engagement:
  likes: 1709
  retweets: 359
  replies: 66
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Hermes Agent：宝玉断言「龙虾」迎来真正对手，设计哲学揭示开源 Agent 分野

## 摘要

**【一句话核心判断】**
Hermes Agent 上线两月斩获近 30k GitHub Stars，Nous Research 交出了 OpenClaw 遇上的第一份有质量的竞品答卷。

**信息增量：**
- 核心差异在于架构哲学：OpenClaw 是 Gateway（消息路由与渠道管理），Hermes 是 Engine（围绕 Agent 自身执行循环和 closed learning loop 设计）
- OpenClaw 解决「如何把消息送达 Agent」，Hermes 解决「如何让 Agent 越来越强」
- 两者都支持多渠道、多模型切换、MIT 协议，但分层逻辑完全不同

**gakki 锐评：**
宝玉这篇最值钱的不是 Stars 数字，是点出了判断框架优劣的第一性原理——不是功能罗列，而是「你把什么放在架构中心」。网关思维做聚合，引擎思维做进化，这是两种完全不同的产品路线图。

---

**Related Subtopic:** agent-tools-and-orchestration

## 原文

Hermes Agent 势头很猛，这几天推荐的人很多，可以关注一下。我自己安装试用了还可以。

Hermes Agent 是由 Nous Research 在今年 2 月底开源的 AI 智能体框架，上线不到两个月，GitHub 星标已经接近三万。这个项目被社区认为是 OpenClaw（龙虾）上线以来，第一个真正意义上的竞争对手。

两者都是自托管的开源智能体，都能接入 Telegram、Discord、Slack、WhatsApp 等聊天平台，都支持多模型切换，都走 MIT 协议。但设计哲学完全不同。

【1】龙虾是网关，Hermes 是引擎

OpenClaw 的核心是一个 Gateway（网关守护进程），负责统一管理会话、路由和渠道连接，像一个调度中心，把你的各种聊天应用连接到 AI agent。你可以理解为它是一个“多渠道个人助理操作系统”。

Hermes Agent 的核心则是 agent 自身的执行循环。它不是围绕“怎么把消息送到 agent”来设计的，而是围绕“agent 怎么变得越来越强”来设计的。官方管这叫 closed learning loop（闭环学习循环）。

【2】会自己写技能的 agent

这是 Hermes 最有意思的地方。当它完成一个复杂任务（通常涉及五次以上工具调用）后，会把整个过程沉淀成一份结构化的技能文档，存成 Markdown 文件。下次遇到类似任务，直接加载这份技能，不用从头解决。

更关键的是，这些技能在使用过程中会自我迭代。如果 agent 在执行技能时发现了更好的方法，它会自动更新技能文档。有 Reddit 用户反馈，agent 在两小时内自动生成了三份技能文档后，重复性研究任务的速度提升了 40%。

OpenClaw 也有技能系统，但主要依赖人工编写和社区贡献的技能市场 ClawHub。Hermes 这边等于把“写技能”这件事也交给了 agent 自己。

【3】记忆体系的差异

两者都声称有跨会话记忆能力，但实现方式不同。

Hermes 用 SQLite 数据库配合全文检索，把所有历史对话存下来，需要时通过搜索加摘要召回。它把记忆分成两层：一层是常驻的关键信息（写在 MEMORY.md 里，每次对话都带上），另一层是全量历史检索（容量无限，按需调用）。

OpenClaw 的记忆则是工作区里的 Markdown 文件，走的是“文件即记忆”的路线，通过语义检索工具来查找。在上下文压缩前会执行一次静默记忆写入，防止压缩丢信息。

简单说，Hermes 更像是给 agent 装了一个搜索引擎式的大脑，OpenClaw 更像是给它一个笔记本。

【4】安全思路也不一样

Hermes 搞了一套五层纵深防御：用户授权、危险命令审批、容器隔离、凭据过滤、上下文注入扫描。默认对高风险操作（比如执行终端命令、写文件）要人工审批，超时未批准就自动拒绝。

OpenClaw 这边则更强调信任模型和配置审计。它提供了 openclaw security audit 命令，可以一键扫描网关配置的安全隐患。但 OpenClaw 在安全方面的历史记录不太好看，今年 2 月被曝出多个高危漏洞，13.5 万个实例暴露在公网上，技能市场也有超过 300 个恶意技能被发现。

【5】要不要换或者选哪一个

如果你日常用的 Agent 已经顺手，没必要。如果你之前的龙虾主要是 claude code 的授权现在用不了可以试试这个，但不能保证继续用多久。如果喜欢折腾想试试不同的选择，也可以试试。

如果你想要一个“多渠道助理平台”，接入各种聊天工具，用社区现成的技能市场，OpenClaw 的生态更成熟，34.6 万星标不是白来的。

如果你更关心 agent 的长期进化能力，想让它用得越久越聪明，或者你是做 AI 研究的，需要生成训练轨迹、跑强化学习实验，Hermes 的架构更对口。它还内建了一个兼容 OpenAI API 的服务端，可以直接作为后端接入 Open WebUI 等第三方界面。

Hermes 跑在 5 美元一个月的 VPS 上就够用，也支持 Docker、SSH 远程、Modal 等 serverless 方案。安装只需要一行 curl 命令。

安装不复杂，参考官方文档即可：https://t.co/LeLSL0czFD

爱马仕的英文也是 Hermes。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-07T18:34:52.000Z
- **抓取时间**: 2026-04-08T00:43:36.100Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1709 · 🔄 359 · 💬 66 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2041585514873037167) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
