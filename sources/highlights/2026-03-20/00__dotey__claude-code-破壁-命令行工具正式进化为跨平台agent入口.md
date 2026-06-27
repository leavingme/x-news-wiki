---
type: "X Tweet"
title: "Claude Code「破壁」：命令行工具正式进化为跨平台Agent入口"
description: "**[Claude Code从开发者工具升级为通用Agent交互层]** • Channels功能实质是将Telegram/Discord变成Agent的远程控制端，打破CLI的物理边界 • 支持图片/文件传输（TG 50MB、Discord 250MB）、消息编辑更新、历史消息拉取，功能完备度超预期 • 白名单+配对验证的安全设计，为企业级多用户协作铺路  Agent的交互界面正在从「专用客户端"
resource: "https://x.com/i/status/2034775175414133127"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-03-20T00:42:56.532Z"
x_tweet_id: "2034775175414133127"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-03-19T23:33:00.000Z"
x_engagement:
  likes: 162
  retweets: 21
  replies: 38
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-multi-platform"
x_source: "crawler"
---

# Claude Code「破壁」：命令行工具正式进化为跨平台Agent入口

## 摘要

**[Claude Code从开发者工具升级为通用Agent交互层]**
• Channels功能实质是将Telegram/Discord变成Agent的远程控制端，打破CLI的物理边界
• 支持图片/文件传输（TG 50MB、Discord 250MB）、消息编辑更新、历史消息拉取，功能完备度超预期
• 白名单+配对验证的安全设计，为企业级多用户协作铺路

Agent的交互界面正在从「专用客户端」向「嵌入现有社交基础设施」迁移。这对纯做Agent入口的创业公司不是好消息——用户不需要新应用，他们要在微信、Telegram里直接使唤Agent。

## 原文

Claude Code 新增 Channels 功能：Telegram、Discord 消息可直接推送到编码会话

Anthropic 为其命令行编码工具 Claude Code 推出了一项新功能 Channels（频道）。简单说，它让你在 Telegram 或 Discord 上发消息，就能直接触达正在运行的 Claude Code 会话，Claude 读取后还能通过同一频道回复，相当于把聊天软件变成了 Claude Code 的远程遥控器。

技术上，Channel 是一种 MCP 服务器插件，负责把外部事件"推"进会话。目前官方提供 Telegram 和 Discord 两个插件，另有一个本地演示用的 fakechat。安装流程是标准的插件三步：安装、配置凭证、启动时加上 --channels 参数。用户也可以自行开发适配其他平台的 Channel。

安全方面，每个 Channel 都维护一个发送者白名单，只有经过配对验证的用户 ID 才能推送消息，其他人直接被静默丢弃。企业和团队版用户还需要管理员在后台开启 channelsEnabled 设置才能使用。

目前 Channels 还处于研究预览阶段，只接受 Anthropic 官方维护的白名单插件，协议和命令语法后续可能调整。

这个功能的实际意义在于：开发者不用一直盯着终端，可以通过手机上的 Telegram 或 Discord 随时给 Claude Code 下指令、接收反馈，配合后台运行模式，离开工位也能让 Claude 持续干活。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-03-19T23:33:00.000Z
- **抓取时间**: 2026-03-20T00:42:56.532Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 162 · 🔄 21 · 💬 38 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2034775175414133127) — @dotey (宝玉)
