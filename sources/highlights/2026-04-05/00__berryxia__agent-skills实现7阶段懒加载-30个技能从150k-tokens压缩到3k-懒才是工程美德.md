---
type: "X Tweet"
title: "Agent Skills实现7阶段懒加载：30个技能从150k tokens压缩到3k，懒才是工程美德"
description: "**[30个技能150k tokens爆炸，Agent Skills懒加载后只需3k——这不是优化，是Agent记忆架构的分水岭]**  Agent Skills的7阶段懒加载机制揭示了一个核心事实：SKILL.md平时只存名字+描述于系统提示词，用时经过自动发现→智能挑选→按需激活→上下文注入→执行→卸载（dehydrate）六步，既省token又保持专注。  从150k到3k，压缩比50倍，意"
resource: "https://x.com/i/status/2040044216487944602"
tags:
  - "x-news"
  - "highlights"
  - "author:berryxia"
timestamp: "2026-04-05T00:42:57.347Z"
x_tweet_id: "2040044216487944602"
x_author: "Berryxia.AI"
x_handle: "berryxia"
x_created_at: "2026-04-03T12:30:18.000Z"
x_engagement:
  likes: 103
  retweets: 17
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# Agent Skills实现7阶段懒加载：30个技能从150k tokens压缩到3k，懒才是工程美德

## 摘要

**[30个技能150k tokens爆炸，Agent Skills懒加载后只需3k——这不是优化，是Agent记忆架构的分水岭]**

Agent Skills的7阶段懒加载机制揭示了一个核心事实：SKILL.md平时只存名字+描述于系统提示词，用时经过自动发现→智能挑选→按需激活→上下文注入→执行→卸载（dehydrate）六步，既省token又保持专注。

从150k到3k，压缩比50倍，意味着同样上下文窗口能承载的实际任务复杂度提升了整整两个数量级。


**gakki锐评：** 懒加载的本质是把"知识存储"和"知识调用"解耦。这不是小技巧，是Agent记忆基础设施的分水岭事件。

## 原文

Agent Skills 太牛了！AI Agent 终于学会“懒加载”了🚀

以前塞 30 个技能进系统提示词 → 直接 150k tokens 爆炸  

现在用 Agent Skills → 只需要 ~3k tokens！

SKILLS 平时只留名字+描述，用的时候才真正加载进来（7个阶段丝滑运行）：
→ 自动发现技能  
→ LLM 智能挑选  
→ 按需激活 + 注入上下文  
→ 执行完立刻卸载（dehydrate）

既省 token，又保持专注，还超级灵活！
@_avichawla 这张 7 阶段图 + 视频讲得太清楚了👇


## 元信息

- **作者**: Berryxia.AI ([@berryxia](https://x.com/berryxia))
- **发布时间**: 2026-04-03T12:30:18.000Z
- **抓取时间**: 2026-04-05T00:42:57.347Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 103 · 🔄 17 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [agent-memory-optimization](/concepts/agent-memory-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2040044216487944602) — @berryxia (Berryxia.AI)
[2] [Author page](/entities/authors/berryxia.md)
[3] [Related topic](/concepts/agent-memory-optimization.md)
