---
type: "X Tweet"
title: "OpenAI补完MCP最后一公里：隧道模式让内网MCP服务器安全出站"
description: "**OpenAI推出Secure MCP Tunnel，通过「反过来」的思路解决企业内网MCP调用难题。**  核心逻辑：不在防火墙开口子，而是让内网的tunnel-client主动拉出一条加密HTTPS出站通道，ChatGPT/Codex的请求经由OpenAI隧道入口转发给内网MCP服务器，结果沿原路返回。  信息增量：此前MCP协议解决了「LLM怎么调用工具」，但从未解决「怎么调用公司不愿公开"
resource: "https://x.com/i/status/2059708948085932386"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-05-27T19:18:12.983Z"
x_tweet_id: "2059708948085932386"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-05-27T18:50:55.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# OpenAI补完MCP最后一公里：隧道模式让内网MCP服务器安全出站

## 摘要

**OpenAI推出Secure MCP Tunnel，通过「反过来」的思路解决企业内网MCP调用难题。**

核心逻辑：不在防火墙开口子，而是让内网的tunnel-client主动拉出一条加密HTTPS出站通道，ChatGPT/Codex的请求经由OpenAI隧道入口转发给内网MCP服务器，结果沿原路返回。

信息增量：此前MCP协议解决了「LLM怎么调用工具」，但从未解决「怎么调用公司不愿公开的工具」。Secure MCP Tunnel补上了这层安全路径，企业内部系统接入ChatGPT有了官方通道。

gakki锐评：这是MCP生态走向企业级基础设施的标志信号。中转层（OpenRouter）和隧道层（Secure MCP Tunnel）都在抢「企业AI中间件」这个位置——LLM本身的战争打完了，战场正在转移到「怎么让LLM安全可控地调用一切」。

## 原文

OpenAI推出一个Secure MCP Tunnel（安全 MCP 隧道） 的功能

可以让ChatGPT和Codex 调用公司内网里的 MCP 服务器

同时防止数据泄露...

具体原理：

OpenAI 的解法：反过来，不让外面进来，让里面主动出去
具体怎么跑通的：

1、你在公司内网装一个叫 tunnel-client 的小程序，它能直接连到你的内部 MCP 服务器

2、3、这个小程序主动向 OpenAI 拉一条加密通道，走的是普通 HTTPS 出站

4、ChatGPT 想调用你的 MCP 服务器时，把请求扔到 OpenAI 这头的隧道入口

5、内网那头的 tunnel-client 一直"挂着"等活儿，看到有请求就转给本地 MCP 服务器

6、拿到结果，沿原路送回去

这是 OpenAI 在补企业级 MCP 的最后一公里。MCP 协议本身解决的是"LLM 怎么调用工具"，但一直没解决"怎么调用一个公司不愿意公开的工具"。Secure MCP Tunnel 把这层补齐了，企业里那些原本因为安全顾虑没法接入 ChatGPT 的内部系统，现在有了官方路径。

技术思路上类似 ngrok、Cloudflare Tunnel 那种"反向隧道"，只是 OpenAI 把它做成了原生功能，跟组织和 workspace 的权限体系打通。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-05-27T18:50:55.000Z
- **抓取时间**: 2026-05-27T19:18:12.983Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2059708948085932386) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
