---
type: "X Tweet"
title: "OpenAI 发布 Codex-Spark：1000+ Token/s 的实时编程“小钢炮”"
description: "**[核心逻辑]** OpenAI 与 Cerebras 合作，通过晶圆级芯片实现超低延迟推理，填补了长线 Agent 与实时交互间的空白。 - **极速响应**：推理速度突破 1000 tps，首 token 响应减半，显著提升重构、调优等高频交互体验。 - **性能均衡**：在 SWE-Bench Pro 上以更短时间达到 51% 准确率，针对 Terminal 场景做了深度优化。 - **交"
resource: "https://x.com/i/status/2022016248360710502"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-02-14T04:24:54.912Z"
x_tweet_id: "2022016248360710502"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-02-12T18:33:35.000Z"
x_engagement:
  likes: 91
  retweets: 10
  replies: 16
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# OpenAI 发布 Codex-Spark：1000+ Token/s 的实时编程“小钢炮”

## 摘要

**[核心逻辑]** OpenAI 与 Cerebras 合作，通过晶圆级芯片实现超低延迟推理，填补了长线 Agent 与实时交互间的空白。
- **极速响应**：推理速度突破 1000 tps，首 token 响应减半，显著提升重构、调优等高频交互体验。
- **性能均衡**：在 SWE-Bench Pro 上以更短时间达到 51% 准确率，针对 Terminal 场景做了深度优化。
- **交互升级**：引入持久化 WebSocket 连接，未来将支持实时交互与后台子智能体任务的无缝融合。

[gakki 的锐评]：当推理速度快到感知不到延迟时，AI 就从“远程专家”变成了“肢体延伸”。Spark 是 OpenAI 对物理世界交互极限的一次重要试探。

## 原文

OpenAI 发布了 GPT-5.3-Codex-Spark，专为实时编程设计的小模型，也是 OpenAI 和 Cerebras 合作后的第一个成果。跑在 Cerebras 晶圆级芯片上，推理速度超过每秒 1000 个 token。https://t.co/oJ6leI4sbb

Codex 之前的强项是长时间自主运行，连续工作几小时甚至几天。但日常写代码更多是改个函数、调个接口、重构一段逻辑，等模型想十几分钟再出结果，体验很差。

Codex-Spark 填的就是这个空缺：你可以一边看它输出一边打断、纠正、追问，像跟一个反应极快的搭档对话。

SWE-Bench Pro 上，Codex-Spark 达到 51% 准确率只需 2.3 分钟，GPT-5.3-Codex 同等准确率要 3 分钟，冲到 57% 则需要 16 分钟。

Terminal-Bench 2.0 上 Spark 得分 58.4%，比不上完整版 Codex 的 77.3%，但大幅超过上一代小模型的 46.1%。

OpenAI 顺便把整条推理管线做了优化：引入持久化 WebSocket 连接，往返开销降 80%，每 token 额外开销降 30%，首 token 响应减半。

Cerebras 晶圆级引擎负责极低延迟场景，GPU 仍是训练和推理主力，两者可混合使用。

目前 128K 上下文、纯文本、仅 ChatGPT Pro 用户研究预览。

后续规划是让实时交互和长线任务两种模式融合：Codex 在跟你实时对话的同时，把耗时任务分派给后台子智能体，用户不需要预先选模式。

模型越强，交互速度越是瓶颈，Codex-Spark 是 OpenAI 在这条路上的第一步。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-02-12T18:33:35.000Z
- **抓取时间**: 2026-02-14T04:24:54.912Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 91 · 🔄 10 · 💬 16 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2022016248360710502) — @dotey (宝玉)
