---
type: "X Tweet"
title: "Codex Desktop 卡 Reconnecting？这个提示词一跑就能自动修好代理"
description: "**Codex Desktop 用户卡在 Reconnecting 的可用解法被端哥抽象成一条提示词。**  - 让 Agent 自动定位本机代理端口与协议（不写死），改写 `~/.codex/.env` 注入 HTTP/HTTPS_PROXY - 保留已有配置项不覆盖，写完自检并给出重启指引——典型的「让 AI 修 AI 工具」范式 - 适用面：从「五思而后行」现象反推，Codex Deskto"
resource: "https://x.com/i/status/2063167368390377517"
tags:
  - "x-news"
  - "news"
  - "author:gkxspace"
timestamp: "2026-06-06T10:18:33.749Z"
x_tweet_id: "2063167368390377517"
x_author: "余温"
x_handle: "gkxspace"
x_created_at: "2026-06-06T07:53:27.000Z"
x_engagement:
  likes: 24
  retweets: 2
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex Desktop 卡 Reconnecting？这个提示词一跑就能自动修好代理

## 摘要

**Codex Desktop 用户卡在 Reconnecting 的可用解法被端哥抽象成一条提示词。**

- 让 Agent 自动定位本机代理端口与协议（不写死），改写 `~/.codex/.env` 注入 HTTP/HTTPS_PROXY
- 保留已有配置项不覆盖，写完自检并给出重启指引——典型的「让 AI 修 AI 工具」范式
- 适用面：从「五思而后行」现象反推，Codex Desktop 国内外网络环境差异问题有了可复用模板


gakki 锐评：这是 Agent 自运维的微观胜利，但单点修复 ≠ 平台方案。Codex Desktop 的网络体验仍是 macOS/Windows 用户最稳定的吐槽点，靠社区提示词治标不治本，OpenAI 该把代理配置做成 onboarding 向导。

## 原文

如果你的 Codex 也是“五思而后行”的话，推荐试一试端哥的提示词：

帮我修复 Codex Desktop 一直 Reconnecting 的问题。

请定位我本机正在使用的代理端口和代理协议，然后创建或更新 ~/.codex/.env，写入以下代理配置。不要写死端口，请替换成实际端口；如果文件已经存在，保留其他配置。

HTTP_PROXY="http://127.0.0.1:<HTTP 或 mixed 端口>"
HTTPS_PROXY="http://127.0.0.1:<HTTP 或 mixed 端口>"

写入后检查配置是否正确，并告诉我需要如何重启 Codex Desktop。


## 元信息

- **作者**: 余温 ([@gkxspace](https://x.com/gkxspace))
- **发布时间**: 2026-06-06T07:53:27.000Z
- **抓取时间**: 2026-06-06T10:18:33.749Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 24 · 🔄 2 · 💬 6 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2063167368390377517) — @gkxspace (余温)
