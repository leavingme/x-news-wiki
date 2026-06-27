---
type: "source"
title: "OpenAI Agents SDK 内置沙箱 + Harness：开发者终于不用自己搭底层环境了"
description: "**[一键部署梦碎？OpenAI 开始「收编」Agent 运行环境]**  OpenAI Agents SDK 最新升级加入两个关键组件：内置沙箱执行环境（支持 Cloudflare/Vercel/Modal/E2B 等主流厂商）和 Manifest 统一配置层（S3/GCS/Azure Blob 挂载）。这意味着文件读写、代码执行、依赖安装、状态保存这些底层能力，SDK 自己包圆了。  以前开发"
resource: "https://x.com/i/status/2044474625510318235"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-16T00:43:36.366Z"
x_tweet_id: "2044474625510318235"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-15T17:55:09.000Z"
x_engagement:
  likes: 178
  retweets: 23
  replies: 12
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "openai-super-app-strategy"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2044474625510318235"
created: "2026-04-15"
updated: "2026-06-26"
sha256: "15a643fec62389e6652491806713e4f99dacbfcef17b083f066be13f5d85ac07"
sources:
  - "/sources/highlights/2026-04-16/00__dotey__openai-agents-sdk-内置沙箱-harness-开发者终于不用自己搭底层环境了.md"
---

# OpenAI Agents SDK 内置沙箱 + Harness：开发者终于不用自己搭底层环境了

## 摘要

**[一键部署梦碎？OpenAI 开始「收编」Agent 运行环境]**

OpenAI Agents SDK 最新升级加入两个关键组件：内置沙箱执行环境（支持 Cloudflare/Vercel/Modal/E2B 等主流厂商）和 Manifest 统一配置层（S3/GCS/Azure Blob 挂载）。这意味着文件读写、代码执行、依赖安装、状态保存这些底层能力，SDK 自己包圆了。

以前开发者用 OpenAI 模型搭 Agent，模型强但环境得自己造。现在 SDK 直接给了一个「交钥匙」的受控执行环境，从本地调试到生产部署只需一套配置。

**gakki锐评：** OpenAI 正在用「平台整合」换「开发者锁定」——Harness 是个好功能，但它同时在把 Agent 开发的主导权从社区收回到 SDK 层。这和 Anthropic 开放 API 边界、让社区自己搭 Harness 的思路完全相反。两套哲学，哪个对？看你站在开发者生态还是平台控制的角度。

## 原文

OpenAI 的 Agents SDK 最近做了一次重要升级，增加了两个关键功能：内置沙箱执行环境和模型原生执行框架（Harness）。这次更新的目标，是帮助开发者更容易地创建安全可靠、能长时间稳定运行的 Agent。

以前开发者使用 OpenAI 的模型来搭建 Agent 时，模型本身的能力虽然够强，但实际运行环境却需要自己搭建。比如文件读写、代码执行、依赖安装、状态保存等基础功能都需要开发者手动处理，费时费力。

现在，SDK 自带沙箱执行环境，Agent 可以在这个统一受控的环境里读写文件、运行代码命令、自动安装依赖，还能保存状态。开发者再也不用从头开始搭建底层环境。

这个沙箱环境支持很多常见的云厂商，包括 Cloudflare、Vercel、Modal、E2B、Daytona 等，也允许开发者接入自己的解决方案。

此外，SDK 还提供了一个名叫 Manifest 的统一配置层，可以挂载本地文件或云存储空间，比如 S3、Google Cloud Storage 和 Azure Blob。从本地开发调试到正式生产上线，开发者只需一套配置就能搞定。

另一个亮点是 SDK 采用了模型原生的 Harness 架构，这种设计将 Agent 的状态保存和计算执行分离开来。这样一来，即便运行 Agent 的容器意外崩溃，也能快速恢复状态，继续执行任务，无需从头开始。此外，这种状态外置的做法也能有效保护敏感数据和凭证，避免因提示注入等安全漏洞导致数据泄露。

除了以上这些功能，SDK 还内置了 MCP 工具调用、Skills 渐进式能力暴露、AGENTS.md 自定义指令、Shell 工具命令执行、Apply Patch 文件编辑工具和灵活的记忆系统。这些以前需要开发者自己用 LangChain 等通用框架组合或手写的功能，现在全部内置在 SDK 中，由 OpenAI 针对自家模型专门优化。Oscar Health 的工程师反馈称，使用新的 SDK 才真正实现了临床记录处理工作流在生产环境中的稳定运行，远超此前尝试过的方案。

放眼行业，类似的生态竞争越来越激烈：Anthropic 推出了 Claude Code，Google 提供了 Agent Development Kit（ADK），现在 OpenAI 也将自家的 SDK 从轻量级框架升级为带沙箱、带状态管理的完整开发平台。对于开发者来说，选择哪个平台生态可能会比单纯选模型本身更关键。

当前 SDK 支持 Python，TypeScript 支持也正在开发中。所有 OpenAI API 用户均可直接使用，计费方式维持不变，仍然按照 Token 和工具调用标准收费。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-15T17:55:09.000Z
- **抓取时间**: 2026-04-16T00:43:36.366Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 178 · 🔄 23 · 💬 12 · 🔖 0 · 👁 0
- **关联主题**: [openai-super-app-strategy](/concepts/openai-super-app-strategy.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2044474625510318235) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/openai-super-app-strategy.md)
