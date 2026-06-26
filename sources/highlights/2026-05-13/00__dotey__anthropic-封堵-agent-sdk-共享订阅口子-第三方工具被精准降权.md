---
type: "X Tweet"
title: "Anthropic 封堵 Agent SDK 共享订阅口子：第三方工具被精准降权"
description: "**[Anthropic 正在系统性地收紧 API 共享边界，第三方 Agent 工具成为代价]**  Anthropic 新政策封堵了 Agent SDK、claude -p 等渠道共享 Claude 订阅的最后一个口子。名义上提供「额外额度」用于程序化调用，Pro 仅 20 美元/Max 20x 仅 200 美元——相比 200 美元月订阅费，这个「额外」额度简直是嘲讽。按自定价算，Pro 的"
resource: "https://x.com/i/status/2054664841412092392"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-13T22:19:01.080Z"
x_tweet_id: "2054664841412092392"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-13T20:47:26.000Z"
x_engagement:
  likes: 18
  retweets: 0
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Anthropic 封堵 Agent SDK 共享订阅口子：第三方工具被精准降权

## 摘要

**[Anthropic 正在系统性地收紧 API 共享边界，第三方 Agent 工具成为代价]**

Anthropic 新政策封堵了 Agent SDK、claude -p 等渠道共享 Claude 订阅的最后一个口子。名义上提供「额外额度」用于程序化调用，Pro 仅 20 美元/Max 20x 仅 200 美元——相比 200 美元月订阅费，这个「额外」额度简直是嘲讽。按自定价算，Pro 的 20 美元约等于六七百万输入 token 或一百多万输出 token，几轮 Agent 循环即见底。

OpenClaw 这类基于 Agent SDK 的第三方工具被精准影响。Anthropic 正在用额度分配的细粒度控制，把用户引导回官方工具链。

gakki：这是平台方对 Agent 经济自主权的经典收编动作——给的口子越小，第三方生态越依赖。Max 20x 用户每月付 200 美元，拿到的程序化额度仅 200 美元，这个比例本身就是一种态度宣言。

## 原文

还记得上次 Claude 停掉了 Claude Code 订阅在 OpenClaw 的调用吗？甚至连 claude -p 这种调用都限制了，不能再共享 Claude 订阅。

但当还留了个口子，就是基于 Claude Agent SDK 和 claude -p 还是能跑能共享订阅额度的。

现在他们有一个新的方案，把这个口子也堵上了。美名其曰给你额外额度用于程序化调用，也就是 Agent SDK、claude -p 命令行、Claude Code GitHub Actions、以及 Conductor 和 OpenClaw 这类基于 Agent SDK 的第三方工具。

但实际上额度小的可怜，Pro 20 美元，Max 5x 100 美元，Max 20x 200 美元，Team 标准席位 20 美元一人，Team 高级席位 100 美元一人。

按 Anthropic 自己的 API 价格算，Pro 的 20 美元用 Sonnet 只够大约六七百万 token 输入或一百多万 token 输出，几轮密集的 agent 循环就见底。Max 20x 用户每月付 200 美元订阅费，拿到的 SDK credit 正好也是 200 美元。

关键在于变化方向。之前 SDK 和交互式聊天共用订阅套餐的 rate limit（速率限制），Claude Code 重度用户能在订阅价格下跑出远超 200 美元等价的 API 用量，这是订阅模式的吸引力所在。现在 SDK 端被按美元封顶，相当于把这块超额价值收回去了。Anthropic 在帮助文档里也挑明：团队跑生产级共享自动化的，应该转去 Claude Developer Platform 用 API key 按量付费，订阅套餐"不是为这个场景设计的"。

受冲击最大的是第三方工具用户。之前用 OpenClaw、Conductor 这类基于 Agent SDK 的 agent 工具的人，本质上是"用订阅价跑高频自动化"。新政之下，这条路只剩 credit 那一点点额度可走，烧完要么转 extra usage（额外用量，按 API 价付钱）继续跑，要么停到下个月 credit 重置。

不受影响的部分：API key 用户照旧按量付费；交互式 Claude Code（终端和 IDE 里手敲那种）、Claude Cowork，以及网页/桌面/手机端的 Claude 聊天，都继续走原本的订阅限额。

6 月 8 日 Anthropic 会给符合条件的用户发邮件领取，6 月 15 日生效。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-13T20:47:26.000Z
- **抓取时间**: 2026-05-13T22:19:01.080Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 18 · 🔄 0 · 💬 9 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2054664841412092392) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
