---
type: "source"
title: "tweet2skill 开源：上下文压缩层如何让 Agent Token 成本下降 90%"
description: "**[RAG 和 Agent 的「预处理层」正在成为新的工程焦点，多模态信息强制摘要化是破局点]**  • 解决核心痛点：冗长推特串、杂乱视频字幕直接丢给OpenClaw导致幻觉和高Token账单 • 技术方案：图文/视频先压缩成高密度语义摘要，再传给底层模型，Pipeline更优雅 • 实测节省90% Token成本，同时降低幻觉风险  这是典型的「中间件层」创新——不碰大模型本身，但在数据入口"
resource: "https://x.com/i/status/2032487038180905040"
tags:
  - "x-news"
  - "highlights"
  - "author:laodi888"
timestamp: "2026-03-14T00:42:37.894Z"
x_tweet_id: "2032487038180905040"
x_author: "俺是你牛爷爷"
x_handle: "laodi888"
x_created_at: "2026-03-13T16:00:46.000Z"
x_engagement:
  likes: 34
  retweets: 0
  replies: 32
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 88
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2032487038180905040"
created: "2026-03-13"
updated: "2026-06-26"
sha256: "e6b60a268f7049081cdfddd8fc3e6c8eed569024ffa5fea3615a0f136c7814e8"
sources:
  - "/sources/highlights/2026-03-14/88__laodi888__tweet2skill-开源-上下文压缩层如何让-agent-token-成本下降-90.md"
---

# tweet2skill 开源：上下文压缩层如何让 Agent Token 成本下降 90%

## 摘要

**[RAG 和 Agent 的「预处理层」正在成为新的工程焦点，多模态信息强制摘要化是破局点]**

• 解决核心痛点：冗长推特串、杂乱视频字幕直接丢给OpenClaw导致幻觉和高Token账单
• 技术方案：图文/视频先压缩成高密度语义摘要，再传给底层模型，Pipeline更优雅
• 实测节省90% Token成本，同时降低幻觉风险

这是典型的「中间件层」创新——不碰大模型本身，但在数据入口做减法。当大家都在卷模型能力时，有人专注做「信息蒸馏」，这往往是基础设施成熟的信号。

## 原文

刷到 @DeFiTeddy2020 老师的分享，发现了个挺有 Geek 精神的开源项目。

最近每天晚上睡前爱去各大平台扒 AI 的最新 Paper 和开源库，信息源太散，看得很心累。跑去体验了下这推文里提到的 https://t.co/Hz3IFlm6Ch，第一印象是 UI 极其克制，纯粹的信息流展示，连个多余的像素都没有，聚合逻辑也很清晰。

但我最感兴趣的是它那个配套的 Skill 接口。
它解决了一个目前我们在做 RAG（检索增强生成）或者构建 AI Agent 时非常头疼的问题：上下文冗余。如果你直接把冗长的推特串、甚至杂乱无章的视频字幕丢进 OpenClaw，大模型很容易“幻觉”或者丢失关键点，而且 Token 账单会很恐怖。

这个 Skill 相当于加了一个“预处理层（Pre-processing）”，把多模态的信息（图文/视频）先强制压缩成高密度的语义摘要，再传给底层模型。这不仅是省钱（实测能省 90% 左右的 Token），更重要的是它让整个数据处理的 Pipeline 变得非常优雅。

喜欢自己折腾 AI 工作流的朋友，一定要去扒一下它的源码玩玩。


## 元信息

- **作者**: 俺是你牛爷爷 ([@laodi888](https://x.com/laodi888))
- **发布时间**: 2026-03-13T16:00:46.000Z
- **抓取时间**: 2026-03-14T00:42:37.894Z
- **精选类别**: ✨ 亮点
- **优先级**: 88
- **互动**: ❤️ 34 · 🔄 0 · 💬 32 · 🔖 0 · 👁 0
- **关联主题**: [agent-memory-optimization](/concepts/agent-memory-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2032487038180905040) — @laodi888 (俺是你牛爷爷)
[2] [Author page](/entities/authors/laodi888.md)
[3] [Related topic](/concepts/agent-memory-optimization.md)
