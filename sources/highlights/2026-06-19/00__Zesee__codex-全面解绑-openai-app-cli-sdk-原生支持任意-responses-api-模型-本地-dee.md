---
type: "X Tweet"
title: "Codex 全面解绑 OpenAI：App/CLI/SDK 原生支持任意 Responses API 模型，本地 DeepSeek 也能跑"
description: "**Codex 不再是 OpenAI 模型的专属壳，工作流层彻底开放**  - Codex 负责人 Tibo 宣布：Codex App、CLI、SDK 全部支持 OpenAI Responses API 兼容模型，不只是 CLI 的 hack 配置 - 意味着 Codex 的 agent loop、tools、session 管理可叠加到任何开源/本地模型上（教程已用 Ollama + DeepS"
resource: "https://x.com/i/status/2067878437616832644"
tags:
  - "x-news"
  - "highlights"
  - "author:Zesee"
timestamp: "2026-06-19T10:19:32.846Z"
x_tweet_id: "2067878437616832644"
x_author: "Rachel🥥"
x_handle: "Zesee"
x_created_at: "2026-06-19T07:53:33.000Z"
x_engagement:
  likes: 25
  retweets: 0
  replies: 24
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex 全面解绑 OpenAI：App/CLI/SDK 原生支持任意 Responses API 模型，本地 DeepSeek 也能跑

## 摘要

**Codex 不再是 OpenAI 模型的专属壳，工作流层彻底开放**

- Codex 负责人 Tibo 宣布：Codex App、CLI、SDK 全部支持 OpenAI Responses API 兼容模型，不只是 CLI 的 hack 配置
- 意味着 Codex 的 agent loop、tools、session 管理可叠加到任何开源/本地模型上（教程已用 Ollama + DeepSeek 跑通）
- 改 ~/.codex/config.toml 一行配置即可切默认 provider，Agent 编排层与模型层正式解耦


gakki 锐评：这是 Codex 从「Codex 模型」变成「Codex 工作流」的关键一步——把 Claude Code 的多模型路由痛点直接反过来打。当模型越来越同质化，谁掌握 Agent 编排层，谁就掌握分发权。

## 原文

终于可以换脑子了：Codex原生支持其他模型！（附教程）

Codex 负责人 Tibo在X上宣布了一个重磅新闻，Codex App、CLI 和 SDK 都可以搭配其他模型使用。
￼
只要模型平台支持 OpenAI Responses API，就可以接进 Codex。

这句话的重点是：
不是只有 Codex CLI。
不是只有某个 hack 配置。
而是 App、CLI、SDK 都可以。

你可以把 Codex 的工作流，接到本地开源模型上。

比如 DeepSeek。

下面直接用 Ollama + DeepSeek 跑一遍。
先装 Ollama。
然后拉一个 DeepSeek 模型：

ollama pull deepseek-r1:8b

如果你本地已经有别的 DeepSeek 模型，也可以用自己的模型名。比如：
ollama list
看一下本地模型叫什么。

接下来打开 Codex 配置：
macOS / Linux：
~/.codex/config.toml
Windows：
C:\Users\<你的用户名>\.codex\config.toml
加一行默认 OSS provider：
oss_provider = "ollama"

官方文档里写得很直接：
oss_provider = "ollama" # or "lmstudio"
意思是，你后面只要用 --oss 启动 Codex，它就会默认走 Ollama。

然后测试：
codex --oss -m deepseek-r1:8b
这时候 Codex 用的就不是 OpenAI 模型了。
而是你本地 Ollama 里的 DeepSeek。

想非交互跑一次，也可以这样：
codex --oss --local-provider ollama -m deepseek-r1:8b exec "读一下这个项目，告诉我入口文件在哪里"

想让它 review 当前未提交代码：
codex --oss --local-provider ollama -m deepseek-r1:8b review --uncommitted
这就是最短路径：
1Ollama 跑 DeepSeek
2Codex 配 oss_provider
3启动时加 --oss

完整一点就是：
ollama pull deepseek-r1:8b
codex --oss --local-provider ollama -m deepseek-r1:8b

如果你用 LM Studio，也差不多。

这里最容易误解的一点是：
这不是普通的 API provider 配置。
之前那套 wire_api = "responses"，更适合接远程兼容 Responses API 的模型平台。
但这次官方 OSS mode 讲的是本地开源模型 provider。

也就是 Ollama / LM Studio 这种。

所以这次更新也很明确：
Codex App、CLI 和 SDK 可以搭配开源模型使用，不限于 OpenAI 模型。

而最快验证方式就是：
用 Ollama 跑 DeepSeek。
再用 Codex 的 --oss 接上它。

这一下，Codex 还是那个会读仓库、跑命令、review 代码的 Codex。
但脑子可以换成本地开源模型了。


## 元信息

- **作者**: Rachel🥥 ([@Zesee](https://x.com/Zesee))
- **发布时间**: 2026-06-19T07:53:33.000Z
- **抓取时间**: 2026-06-19T10:19:32.846Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 25 · 🔄 0 · 💬 24 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2067878437616832644) — @Zesee (Rachel🥥)
[2] [Author page](/entities/authors/zesee.md)
