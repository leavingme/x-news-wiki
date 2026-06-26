---
type: "X Tweet"
title: "Cursor Composer 2 许可证争议暴露 AI 工具合规雷区"
description: "**[开源合规成为 AI 工具生死线]** • Cursor 承认 Composer 2 基于 Kimi K2.5，但试图通过推理服务商 Fireworks「间接合规」，法律逻辑站不住脚 • 月收超 2000 万美元需显式标注的义务直接指向终端产品，而非中间托管方 • 此案例揭示 AI Coding 工具的隐藏风险：模型授权链路与商业条款的错配可能引发诉讼  — 这不是 Cursor 一家的事。所"
resource: "https://x.com/i/status/2035067094090526746"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-03-21T09:05:18.632Z"
x_tweet_id: "2035067094090526746"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-03-20T18:52:59.000Z"
x_engagement:
  likes: 18
  retweets: 2
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-coding-open-source-compliance"
x_source: "crawler"
---

# Cursor Composer 2 许可证争议暴露 AI 工具合规雷区

## 摘要

**[开源合规成为 AI 工具生死线]**
• Cursor 承认 Composer 2 基于 Kimi K2.5，但试图通过推理服务商 Fireworks「间接合规」，法律逻辑站不住脚
• 月收超 2000 万美元需显式标注的义务直接指向终端产品，而非中间托管方
• 此案例揭示 AI Coding 工具的隐藏风险：模型授权链路与商业条款的错配可能引发诉讼

—
这不是 Cursor 一家的事。所有基于开源模型构建商业产品的团队都该重新审计授权链路，「通过合作伙伴合规」的侥幸心理可能带来致命反噬。

## 原文

针对为什么没有点名 KIMI 的质疑，Lee 随后发了第二条推文，这次直接点了名："KIMI K2.5"，承认这就是 Composer 2 的基座模型，并重申 Cursor 正在通过推理合作伙伴（比如 Fireworks）的条款遵守许可证，还表示个人对开源模型心怀感激。
https://t.co/pqR0YLdITe

问了下 Claude "通过推理合作伙伴条款遵守许可证"这个说法在法律逻辑上是不是站的住：

---

"通过推理合作伙伴条款遵守许可证"这个说法，在法律逻辑上站不太住。

Fireworks 是一家模型推理托管服务商，Cursor 通过 Fireworks 的基础设施来部署和运行模型。Fireworks 的服务条款管的是 Cursor 和 Fireworks 之间的商业关系：定价、算力、SLA 这些东西。而 Kimi K2.5 的修改版 MIT 许可证，义务直接指向的是最终面向用户的商业产品：如果你的产品月收入超过 2000 万美元，你必须在产品界面上醒目展示"Kimi K2.5"。

这是两层完全不同的法律关系。Fireworks 的条款解决的是"谁来跑这个模型"，Kimi 的许可证管的是"用这个模型做的产品怎么标注"。用前者来满足后者，就像租了一间厨房就觉得不用遵守食品安全法一样，混淆了基础设施合规和产品层合规。

许可证原文写得很明确：义务主体是"你的商业产品或服务"，覆盖范围包括"衍生作品"。不管 Cursor 在 Kimi K2.5 上跑了多少轮强化学习，只要基座来自 Kimi K2.5，最终产品就是衍生作品。而 Cursor 月收入 1.67 亿美元，是触发门槛的 8 倍多。该在界面上标注"Kimi K2.5"的是 Cursor 这个产品，不是 Fireworks 的后台。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-03-20T18:52:59.000Z
- **抓取时间**: 2026-03-21T09:05:18.632Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 18 · 🔄 2 · 💬 6 · 🔖 0 · 👁 0
- **关联主题**: [ai-coding-open-source-compliance](/concepts/ai-coding-open-source-compliance.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2035067094090526746) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/ai-coding-open-source-compliance.md)
