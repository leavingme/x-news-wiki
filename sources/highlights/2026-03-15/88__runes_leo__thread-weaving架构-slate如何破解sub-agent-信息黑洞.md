---
type: "source"
title: "Thread Weaving架构：Slate如何破解Sub-agent「信息黑洞」"
description: "**[Sub-agent通信从「字符串传递」进化为「记忆共享」]** • 现有方案（包括Claude Code）的痛点：子agent干完活只返回字符串，中间状态全丢，复杂任务信息损耗肉眼可见 • Slate解法：子线程每动作生成Episode（压缩摘要），直接共享给主线程且可作为下一线程输入，实现「共享而非隔离」 • 提出「Knowledge Overhang」概念：模型知道怎么做，但战术层面访问"
resource: "https://x.com/i/status/2033022122017382728"
tags:
  - "x-news"
  - "highlights"
  - "author:runes_leo"
timestamp: "2026-03-15T12:42:28.524Z"
x_tweet_id: "2033022122017382728"
x_author: "Leo"
x_handle: "runes_leo"
x_created_at: "2026-03-15T03:27:00.000Z"
x_engagement:
  likes: 97
  retweets: 16
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 88
x_related_topic: "sub-agents-multi-expert"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2033022122017382728"
created: "2026-03-15"
updated: "2026-06-26"
sha256: "9e384732310b9ee18be1d845229c7260aa72e592d1b343d74640c191234c6430"
sources:
  - "/sources/highlights/2026-03-15/88__runes_leo__thread-weaving架构-slate如何破解sub-agent-信息黑洞.md"
---

# Thread Weaving架构：Slate如何破解Sub-agent「信息黑洞」

## 摘要

**[Sub-agent通信从「字符串传递」进化为「记忆共享」]**
• 现有方案（包括Claude Code）的痛点：子agent干完活只返回字符串，中间状态全丢，复杂任务信息损耗肉眼可见
• Slate解法：子线程每动作生成Episode（压缩摘要），直接共享给主线程且可作为下一线程输入，实现「共享而非隔离」
• 提出「Knowledge Overhang」概念：模型知道怎么做，但战术层面访问不到——优雅架构与暴力训练的永恒赛跑

**gakki锐评**：Sub-agent编排的瓶颈从来不是「能不能做」，而是「做完还记得多少」——Slate用Git式分支思维解决了Agent的「失忆症」。

## 原文

读完了 Slate 的技术报告，这是我今年看到对 AI coding agent
架构分析最透彻的一篇。

核心问题：现有 agent（包括 Claude Code）用 subagent 隔离 context，但同步靠 message passing——子 agent 干完活只返回一个字符串，大量中间状态丢了。

Slate 的解法叫 Thread Weaving：子线程每完成一个动作生成一个 Episode（压缩摘要），直接共享给主线程，而且 episode
可以作为下一个线程的输入。不是隔离，是共享。

日常用 Claude Code 起 subagent 的体感完全对得上——搜索型任务没问题，但让 subagent 做复杂实现再汇报，信息损耗肉眼可见。

报告还定义了一个概念叫 Knowledge Overhang：模型其实知道怎么做，但战术层面访问不到。"一步步想"和"先写计划"本质上都是在释放这部分悬挂知识。命名精准。

不过也要说：模型进化很快，message passing 的问题可能直接被训练解决。架构优雅 vs 暴力训练，是这个领域永恒的赛跑。


## 元信息

- **作者**: Leo ([@runes_leo](https://x.com/runes_leo))
- **发布时间**: 2026-03-15T03:27:00.000Z
- **抓取时间**: 2026-03-15T12:42:28.524Z
- **精选类别**: ✨ 亮点
- **优先级**: 88
- **互动**: ❤️ 97 · 🔄 16 · 💬 8 · 🔖 0 · 👁 0
- **关联主题**: [sub-agents-multi-expert](/concepts/sub-agents-multi-expert.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2033022122017382728) — @runes_leo (Leo)
[2] [Author page](/entities/authors/runes-leo.md)
[3] [Related topic](/concepts/sub-agents-multi-expert.md)
