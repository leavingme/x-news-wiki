---
type: "source"
title: "微软把 OpenClaw 变成了 Windows 的「官方 Agent」——企业安全栈全套接入，上游开源项目获企业级能力"
description: "**[微软选择务实路线：不在上游重建，而是在上游之上叠加企业层]**  微软没有自研 Agent 框架，而是直接基于 OpenClaw 仓库构建 Scout，并通过 MXC 安全容器技术让 OpenClaw 原生运行在 Windows 上。关键在于：Defender、Entra、Intune 这套企业安全栈全套接入，解决了 OpenClaw 最大的企业落地障碍——安全合规。  与此同时，Build"
resource: "https://x.com/i/status/2061967776831639677"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-06-03T01:18:33.922Z"
x_tweet_id: "2061967776831639677"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-06-03T00:26:42.000Z"
x_engagement:
  likes: 10
  retweets: 1
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-deployment-service"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2061967776831639677"
created: "2026-06-03"
updated: "2026-06-26"
sha256: "d7183c9ff49fb9c6b60ad861577117d054c0e866e368347d3b93e5731cc18861"
sources:
  - "/sources/news/2026-06-03/00__xiaohu__微软把-openclaw-变成了-windows-的-官方-agent-企业安全栈全套接入-上游开源项目获企业级能力.md"
---

# 微软把 OpenClaw 变成了 Windows 的「官方 Agent」——企业安全栈全套接入，上游开源项目获企业级能力

## 摘要

**[微软选择务实路线：不在上游重建，而是在上游之上叠加企业层]**

微软没有自研 Agent 框架，而是直接基于 OpenClaw 仓库构建 Scout，并通过 MXC 安全容器技术让 OpenClaw 原生运行在 Windows 上。关键在于：Defender、Entra、Intune 这套企业安全栈全套接入，解决了 OpenClaw 最大的企业落地障碍——安全合规。

与此同时，Build 2026 上发布的 Microsoft Scout 被定义为「始终在线个人 AI Autopilot」，可连接 Teams、Outlook、OneDrive、SharePoint。微软承诺将企业级策略控制能力贡献回上游开源项目。

gakki 的锐评：这是一次教科书级的「平台借力」——微软用 OpenClaw 的社区活跃度换企业市场的信任背书，OpenClaw 则用微软的安全栈补上了最后一块商业化短板。但问题是：当企业策略控制权回流上游，OpenClaw 的独立性还能保留几分？

## 原文

微软宣布

将OpenClaw 引入 Microsoft 和 Windows 生态系统

小龙虾现在可以在 Windows 上原生运行，使用了微软新推出的 MXC安全容器技术，node 和 gateway 都在容器内运行。

Windows 还提供了一个配套应用（companion app），可以直接设置和连接 Claws。

同时微软在 Build 2026 上发布了 Microsoft Scout，这是一个基于 OpenClaw 的"始终在线"（always-on）个人 AI Agent

能连接 Teams、Outlook、OneDrive、SharePoint，在后台自动执行协调工作。

微软把这类 Agent 称为"Autopilots"。

微软没有自己另起炉灶做一个封闭的 Agent 框架，而是直接在 OpenClaw 仓库上构建 Scout，并承诺把企业级的策略控制能力贡献回上游开源项目。

之前 OpenClaw 最大的企业落地障碍就是安全，公司不敢让一个开源 Agent 随便访问内部系统。现在微软把 Defender、Entra、Intune 这套企业安全栈全接上了，等于替 OpenClaw 补了最大的短板。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-06-03T00:26:42.000Z
- **抓取时间**: 2026-06-03T01:18:33.922Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 10 · 🔄 1 · 💬 4 · 🔖 0 · 👁 0
- **关联主题**: [agent-deployment-service](/concepts/agent-deployment-service.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2061967776831639677) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
[3] [Related topic](/concepts/agent-deployment-service.md)
