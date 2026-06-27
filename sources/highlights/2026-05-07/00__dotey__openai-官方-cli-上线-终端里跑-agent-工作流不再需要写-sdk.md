---
type: "X Tweet"
title: "OpenAI 官方 CLI 上线：终端里跑 Agent 工作流不再需要写 SDK"
description: "**OpenAI 终于把终端入口做成了官方一等公民。**  - 开源 `openai-cli`，Apache 2.0，支持 Homebrew/Go 安装，命令走资源化结构（如 `openai responses create`） - 内置所有 Cloud Tools（web 搜索、代码解释器、文件检索、图像生成），Agent 风格工作流可直接命令行跑通 - 输出支持 JSON/YAML/JSONL"
resource: "https://x.com/i/status/2052512560264380737"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-07T22:19:09.939Z"
x_tweet_id: "2052512560264380737"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-07T22:15:02.000Z"
x_engagement:
  likes: 0
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# OpenAI 官方 CLI 上线：终端里跑 Agent 工作流不再需要写 SDK

## 摘要

**OpenAI 终于把终端入口做成了官方一等公民。**

- 开源 `openai-cli`，Apache 2.0，支持 Homebrew/Go 安装，命令走资源化结构（如 `openai responses create`）
- 内置所有 Cloud Tools（web 搜索、代码解释器、文件检索、图像生成），Agent 风格工作流可直接命令行跑通
- 输出支持 JSON/YAML/JSONL 等 Unix 结构化格式，内建 GJSON 字段抽取，原生管道串联
- 图像生成/编辑、语音转录、TTS 一行命令完成，管理类操作也整合进 CLI

这是 OpenAI 对 Anthropic Claude Code 和 Google Gemini CLI 的正式回应。CLI 正在成为 AI Agent 的标准交互界面，但 OpenAI 入场晚了半年以上，能否追回生态劣势取决于工具链的打磨速度。

## 原文

OpenAI 上线了官方命令行工具 openai-cli，开发者可以直接在终端里调 API，不用再写 SDK 代码。

项目开源在 GitHub (openai/openai-cli)，Apache 2.0 协议，可通过 Homebrew 或 Go 安装。命令走资源化结构，比如 openai responses create --input "..." --model <model> 这样的写法。

工具的几个核心能力：

调用 Responses API，并且支持所有 cloud tools，也就是 OpenAI 托管的内置工具，包括 web 搜索、代码解释器、文件检索、图像生成等。换句话说，agent 风格的工作流也能直接从命令行跑通。

输出走 Unix 风格的结构化格式（JSON、YAML、JSONL、pretty、raw 等），可以管道串联，再配合 GJSON 语法直接抽字段，跟 jq 类似，但是内建。

图像生成、图像编辑、语音转录、TTS 这些原本要写 Python 调 SDK 的事情，一行命令就能完成。

管理类操作也整合进去了，可以创建 project、配发 API key，对运维和团队管理者比较友好。

文件传参用 @ file.ext 语法，跟 curl 习惯一致；二进制内容可以用 @data:// 显式 base64 编码。

发布的人是 jxnlco（jason liu），他在 X 上把这个项目定性为 "small ship / passion project"，暗示是相对轻量的发布，更多文档稍后放出。

之前 OpenAI 官方只有 Python、Node 等语言 SDK，纯命令行用户要么裸写 curl，要么自己包脚本。这次把 SDK 能力直接搬到 shell 里，能拼进现有的自动化流程，也方便服务器端和 CI/CD 场景。

很适合 Agent 使用。

https://t.co/8vkfbaalC0


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-07T22:15:02.000Z
- **抓取时间**: 2026-05-07T22:19:09.939Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 0 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2052512560264380737) — @dotey (宝玉)
