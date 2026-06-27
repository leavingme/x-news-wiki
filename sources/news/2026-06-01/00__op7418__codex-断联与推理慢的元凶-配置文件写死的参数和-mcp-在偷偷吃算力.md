---
type: "X Tweet"
title: "Codex 断联与推理慢的元凶：配置文件写死的参数和 MCP 在偷偷吃算力"
description: "**[一句话核心判断]**  Codex 推理慢甚至断联很可能不是网络问题，而是配置文件里埋了硬编码参数和强制加载的 MCP，导致每次推理都在做无用功。  **信息增量：** - 归藏发现：同一网络环境下 Mac Studio 跑 Codex 飞快，另一台机器巨慢，最终定位到是 config 文件里写死了两个参数 + 两个必须加载的 MCP - 解法简单到反直觉：让 Codex 自己检查配置文件，"
resource: "https://x.com/i/status/2061335964992323744"
tags:
  - "x-news"
  - "news"
  - "author:op7418"
timestamp: "2026-06-01T07:18:36.225Z"
x_tweet_id: "2061335964992323744"
x_author: "歸藏(guizang.ai)"
x_handle: "op7418"
x_created_at: "2026-06-01T06:36:06.000Z"
x_engagement:
  likes: 14
  retweets: 0
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex 断联与推理慢的元凶：配置文件写死的参数和 MCP 在偷偷吃算力

## 摘要

**[一句话核心判断]**

Codex 推理慢甚至断联很可能不是网络问题，而是配置文件里埋了硬编码参数和强制加载的 MCP，导致每次推理都在做无用功。

**信息增量：**
- 归藏发现：同一网络环境下 Mac Studio 跑 Codex 飞快，另一台机器巨慢，最终定位到是 config 文件里写死了两个参数 + 两个必须加载的 MCP
- 解法简单到反直觉：让 Codex 自己检查配置文件，描述具体表现即可定位问题

**影响评估：**
这是一个被严重低估的工程陷阱——随着 Claude Code、Codex 等工具普及，配置文件里的硬编码会形成隐形的性能瓶颈，用户容易归因到网络或模型本身，而忽略配置层面的问题。


gakki 锐评：配置文件的 tech debt 是 Agent 工具的暗面。当工具越来越聪明，承载它的配置文件却越来越臃肿，这种不对称性迟早会成为大规模部署的绊脚石。

## 原文

妈的，终于搞定我的 Codex 断联和推理慢的问题了！

我有一台电脑上的 Codex 推理速度巨慢，即使开了快速模式也很慢，还有一个问题就是经常连不上。

我一直以为是自己的网络有问题，但它和我的 Mac Studio 处于同一个网络环境，Mac Studio 运行就非常快。

结果今天发现，是我的 config 配置文件有问题。里面写死了两个参数，还写死了两个必须加载的 MCP，导致速度巨慢。

如果你也有类似问题的话，我推荐让你的 Codex 自己检查一下配置文件。你只需要跟它描述具体的表现就行。


## 元信息

- **作者**: 歸藏(guizang.ai) ([@op7418](https://x.com/op7418))
- **发布时间**: 2026-06-01T06:36:06.000Z
- **抓取时间**: 2026-06-01T07:18:36.225Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 14 · 🔄 0 · 💬 5 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2061335964992323744) — @op7418 (歸藏(guizang.ai))
[2] [Author page](/entities/authors/op7418.md)
