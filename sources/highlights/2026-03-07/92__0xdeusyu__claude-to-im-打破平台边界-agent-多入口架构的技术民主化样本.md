---
type: "X Tweet"
title: "Claude-to-IM 打破平台边界：Agent 多入口架构的技术民主化样本"
description: "**[长轮询架构颠覆「公网依赖」迷思]**  藏师傅的 Claude-to-IM Skill 用本地 spawn + 长轮询实现 Telegram↔Claude Code 的无缝对接，全程无需公网 IP、NAT 穿透或额外云服务——这意味着任何用户都能在 5 分钟内将自己的 Claude Code 变成「跨平台 Agent」。  **关键突破：** • 通信层：长轮询取代传统 Webhook，绕过"
resource: "https://x.com/i/status/2029922289408692314"
tags:
  - "x-news"
  - "highlights"
  - "author:0xdeusyu"
timestamp: "2026-03-07T01:27:33.799Z"
x_tweet_id: "2029922289408692314"
x_author: "Rainman"
x_handle: "0xdeusyu"
x_created_at: "2026-03-06T14:09:22.000Z"
x_engagement:
  likes: 246
  retweets: 45
  replies: 14
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 92
x_related_topic: "agent-multi-platform"
x_source: "crawler"
---

# Claude-to-IM 打破平台边界：Agent 多入口架构的技术民主化样本

## 摘要

**[长轮询架构颠覆「公网依赖」迷思]**

藏师傅的 Claude-to-IM Skill 用本地 spawn + 长轮询实现 Telegram↔Claude Code 的无缝对接，全程无需公网 IP、NAT 穿透或额外云服务——这意味着任何用户都能在 5 分钟内将自己的 Claude Code 变成「跨平台 Agent」。

**关键突破：**
• 通信层：长轮询取代传统 Webhook，绕过家庭网络基础设施限制
• 认证层：复用本地已登录的 claude CLI，零额外配置成本
• 架构层：Telegram Bot → daemon → SDK → spawn CLI 的极简链路

**影响边界：** 这不是「又一个 Telegram Bot」，而是证明了 Agent 入口的去中心化技术路径已经成熟——平台方（Telegram/Discord/飞书）不再拥有入口垄断权。

---

**gakki 锐评：** 当 Skill 可以把任意聊天软件变成 Claude 的前端，Anthropic 的「平台中立」策略才是真正的入口收割。其他模型厂商还在争 API 定价，Claude 已经在抢用户的「默认交互习惯」了。

## 原文

今天用了藏师傅的 Claude-to-IM Skill，直接在 Telegram 上跟 Claude Code 对话，真的震惊了，太好用了。

好奇研究了一下原理，结果收获了一个突破性的认知。

架构原理

它的核心是 Anthropic 官方的 Claude Agent SDK。这个 SDK 不是云服务，就是一个本地 npm 库。它做的事情很简单：通过 spawn 调用你本机已经登录好的 claude CLI，复用你现有的认证信息。本质上就是给你的 Claude Code 加了一个 Telegram 前端。

整条链路：

Telegram Bot → daemon 进程 → Claude Agent SDK → spawn 本地 claude CLI → Anthropic API → 原路返回

全程没有额外的"服务"，都是本地进程之间的通信。

通信方式

这是最让我震惊的部分。我一直以为做这种"外面发消息、家里电脑执行"的事情，一定需要公网 IP、端口映射、NAT 穿透这些基础设施。

但实际上完全不需要。

它用的是长轮询（Long Polling）— 你的电脑主动去问 Telegram 服务器"有没有新消息"，有就拿回来处理，没有就挂起等着，过几十秒再问。所有连接都是从你的电脑往外发的，跟你用浏览器上网一个道理。不需要公网 IP，不需要开端口，NAT 后面也完全没问题。

仔细想想，微信、邮箱客户端、手机推送通知……其实都是这个原理。不是别人来找你，是你一直在问别人。

运行条件

当然也有限制。因为所有事情都跑在你本机，所以电脑必须保持开机、联网、代理开着（如果你需要代理才能访问 Telegram 的话）。电脑关机或休眠，bot 就没响应了。

daemon 进程由 macOS 的 launchd 托管，挂了会自动重启，这点不用担心。想彻底脱离本机，就得把这套东西部署到云服务器上。

总结

以前觉得做东西一定要先把基础设施搞好，公网、NAT、服务器这些。但这次让我意识到，有些事情只需要你的电脑开着就行了，单向发起连接就够了。很多事情没有想象中那么复杂。


## 元信息

- **作者**: Rainman ([@0xdeusyu](https://x.com/0xdeusyu))
- **发布时间**: 2026-03-06T14:09:22.000Z
- **抓取时间**: 2026-03-07T01:27:33.799Z
- **精选类别**: ✨ 亮点
- **优先级**: 92
- **互动**: ❤️ 246 · 🔄 45 · 💬 14 · 🔖 0 · 👁 0
- **关联主题**: [agent-multi-platform](/concepts/agent-multi-platform.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2029922289408692314) — @0xdeusyu (Rainman)
[2] [Author page](/entities/authors/0xdeusyu.md)
[3] [Related topic](/concepts/agent-multi-platform.md)
