---
type: "X Tweet"
title: "飞书 + Claude Code 桥接方案：日常IM成为Agent工作流入口的轻量验证"
description: "**[飞书正在成为国内团队接入Claude Code的最小摩擦入口]**  这个开源项目 feishu-claude-code-bridge 实现了飞书与Claude Code的双向连接：用户可以在飞书智能体中发送推文链接，触发Claude Code抓取并翻译内容，结果直接回写为飞书文档；也可以把飞书消息一键转发给智能体，Claude Code处理过程实时同步并以卡片形式展示确认节点。配置仅需两条"
resource: "https://x.com/i/status/2058084478459826432"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-05-23T07:19:03.648Z"
x_tweet_id: "2058084478459826432"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-23T07:15:51.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 飞书 + Claude Code 桥接方案：日常IM成为Agent工作流入口的轻量验证

## 摘要

**[飞书正在成为国内团队接入Claude Code的最小摩擦入口]**

这个开源项目 feishu-claude-code-bridge 实现了飞书与Claude Code的双向连接：用户可以在飞书智能体中发送推文链接，触发Claude Code抓取并翻译内容，结果直接回写为飞书文档；也可以把飞书消息一键转发给智能体，Claude Code处理过程实时同步并以卡片形式展示确认节点。配置仅需两条npx命令+扫码。

**gakki 判断：这是一个「IM作为Agent编排入口」的工程验证，而非新产品发布。**它的价值在于展示了飞书作为日常协作工具可以直接承载Agent调用——没有新App，没有独立工作台，用户不需要切换上下文。这类「嵌入现有工作流的轻量连接」会比独立的Agent平台更早在中国团队中普及。但目前还停留在工具层，没有触及组织协作范式的改变。

## 原文

如果你同时用飞书和 Claude Code 的话，Zara Zhang这个开源项目 feishu-claude-code-bridge 值得一试，它可以让你在飞书里面直接连接 Claude Code，从飞书指挥 Claude Code，反过来也能借助 Claude Code 新建、编辑飞书文档。

举例来说，我可以通过和飞书智能体对话，发送推文连接，让它抓取推文并翻译成中文，再把结果创建成飞书文档。

或者说你在飞书上收到一条消息，也可以一键转发给飞书智能体，它会通过 Claude Code 做后续处理，并且实时将处理过程通过消息同步给你，如果有需要确认的，还能通过卡片的形式在飞书中展示。

连接步骤很简单，打开飞书本地客户端（网页版不行），然后在命令行窗口执行：
> npx -y lark-channel-bridge@latest run （第一次需要配置 App 凭证，后面可以跳过这一步）
> 和
> npx -y lark-channel-bridge@latest run

就可以通过扫码或者浏览器打开 URL 创建智能体、连接 Claude Code

按照网页提示创建应用和授权，连接上就可以在飞书的会话看到新建的智能助手。然后直接发送消息。

有个细节做的很好，就是它可以设置 Claude Code 对应的 Workspace（工作区），也就是运行 Claude Code 的目录，这样你所有操作结果都会在 Workspace，也可以读取 Workspace 下的文件、CLAUDE.md 设置、Skills、Hooks 等等，跟你直接用 Claude Code 操作几乎没差别。

一些具体的指令可以看项目文档，说的很清楚。

工作原理其实不复杂，它是一个“飞书消息 ↔ 本机 Claude Code CLI”的桥，或者说翻译。飞书负责收发消息，bridge 常驻本机，收到消息后整理成 prompt，通过 “claude -p ”这样的命令行启动本机的 Claude CLI 处理，再把 Claude 的流式输出更新回飞书。

这种项目的价值，不仅说你可以将飞书和 Claude Code 打通，还可以发掘出很多新的可能，比如你也可以让飞书和本机的小龙虾、Codex、Cursor 连接起来，在飞书界面中操作它们，它们反过来也能借助飞书 cli 操作飞书。

开源项目有个好处就是你可以照葫芦画瓢，如果你想参考它做一些自己的机器人，可以把代码库发给 Coding Agent，帮你定制化一个自己的版本。

比如说这两个是其他网友做过的把 Codex 接入飞书的 bridge 项目，用起来也是一样的：
https://t.co/cKLfCDfskP
https://t.co/zCPoISnudz

有一点要提醒的是，Bridge 使用的是claude -p模式，自 2026 年 6 月 15 日起，Claude 订阅计划对 claude -p 和 Agent SDK 的使用将独立计费，不走订阅额度。如果你是用 API，不受影响。或者也可以考虑使用上面的 Codex bridge 项目。

项目地址：https://t.co/7BWMwz6p3s


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-23T07:15:51.000Z
- **抓取时间**: 2026-05-23T07:19:03.648Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2058084478459826432) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
