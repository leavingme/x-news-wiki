---
type: "source"
title: "OpenSquilla开源：智能模型路由+本地向量检索，把Token成本降低90%的工程实现"
description: "**[OpenSquilla用智能路由+本地向量检索组合拳，在Agent层实现了Token消耗的系统性压缩]**  向阳乔木推荐的开源项目OpenSquilla针对Agent Token成本高企这个痛点给出了完整工程解法：智能模型路由（简单任务用便宜模型，复杂任务自动升级）+本地向量检索（降低云端token传输）+增量上下文发送机制（声称减少90%以上token传输）+混合检索（BM25+向量）+"
resource: "https://x.com/i/status/2054757474100760626"
tags:
  - "x-news"
  - "news"
  - "author:vista8"
timestamp: "2026-05-14T04:18:44.535Z"
x_tweet_id: "2054757474100760626"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-05-14T02:55:32.000Z"
x_engagement:
  likes: 17
  retweets: 3
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2054757474100760626"
created: "2026-05-14"
updated: "2026-06-26"
sha256: "be57294ced93c6959e185dcfdaeec8fcefe4512dd84cff528e82c7386ef09603"
sources:
  - "/sources/news/2026-05-14/00__vista8__opensquilla开源-智能模型路由-本地向量检索-把token成本降低90-的工程实现.md"
---

# OpenSquilla开源：智能模型路由+本地向量检索，把Token成本降低90%的工程实现

## 摘要

**[OpenSquilla用智能路由+本地向量检索组合拳，在Agent层实现了Token消耗的系统性压缩]**

向阳乔木推荐的开源项目OpenSquilla针对Agent Token成本高企这个痛点给出了完整工程解法：智能模型路由（简单任务用便宜模型，复杂任务自动升级）+本地向量检索（降低云端token传输）+增量上下文发送机制（声称减少90%以上token传输）+混合检索（BM25+向量）+对话压缩与子Agent记忆管理。

它的高参考价值在于：这是首个将多个Token优化手段整合为一个可部署系统的开源方案，且提供了成本可视化后台。连续对话实测仅消耗5500 token，且有游戏化反馈（COMBO ×2）。

gakki 认为：Token优化已从技巧层面上升到系统工程层面。这个方向会催生出类似DevOps的工具链——不是某几个技巧，而是完整的基础设施。

## 原文

前段时间小龙虾、Hermes爆火，一个特别大的痛点就是太烧Token了。

关于怎么省Token，很多人研究了很多方法，比如用qmd等本地语义搜索，换便宜模型等。

最近刷到一个开源项目@OpenSquilla，把省Token这件事儿做得很不错。

核心逻辑：智能模型路由 + 本地向量检索

简单问题，用便宜模型，复杂任务，用更厉害的模型。
智能路由本地完成，不消耗Token，换模型也是自动判断，不需要手动切。

后台还有模型调用成本统计，随时查看用了哪些模型，花了多少钱。

连续对话，让它写个抓取 Paulgraham 最新文章脚本，只消耗了5500 Token。

完成后会显示 COMBO ×2 ，像游戏的连击反馈，有意思，哈哈哈

相比完整重发，每轮只增量发送，缓存命中机制也实际传输 token 减少了 90%+

记忆系统做得也不错，快到上下文上限时，子 Agent 筛除关键内容再压缩，支持BM25 + 向量混合检索。

自动整理白天对话，第二天也能记得上下文，让 Cron job 定时抓新闻、跑任务，很省心。

安全上也有考量，高风险工具跑在沙箱里，按来源直接不明工具、Skill调用。

支持 Openclaw 一键迁移，记忆、配置、技能全能移过来，切换零成本。

安装很简单，跟Claude Code或Codex说：  

带我安装配置：https://t.co/z6QNwhksR4


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-05-14T02:55:32.000Z
- **抓取时间**: 2026-05-14T04:18:44.535Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 17 · 🔄 3 · 💬 3 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2054757474100760626) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
