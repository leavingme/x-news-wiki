---
type: "source"
title: "书籍解读口播脚本 Skill 开源：把「多 Subagent 分角写、主 LLM 收口」做成了一键安装"
description: "**多 Subagent 编排终于有了可直接复用的开源样本。**  - 一行命令 `npx skills add joeseesun/qiaomu-book-script` 即可安装，调用方式极其简单：直接说「解读《被讨厌的勇气》」 - Skill 内部调度多个 Subagent 从不同角度并行写口播脚本，最后由主 LLM 收口整理成终稿 - 体现了 Skills 生态从「单点 prompt」向「"
resource: "https://x.com/i/status/2064709239810191647"
tags:
  - "x-news"
  - "highlights"
  - "author:vista8"
timestamp: "2026-06-10T16:19:40.396Z"
x_tweet_id: "2064709239810191647"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-06-10T14:00:17.000Z"
x_engagement:
  likes: 14
  retweets: 2
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "sub-agents-multi-expert"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2064709239810191647"
created: "2026-06-10"
updated: "2026-06-26"
sha256: "1c3d7d41c8b756cd3c9a172fc4ec64be623c8a57e831812f6f0d3a59af68f788"
sources:
  - "/sources/highlights/2026-06-10/00__vista8__书籍解读口播脚本-skill-开源-把-多-subagent-分角写-主-llm-收口-做成了一键安装.md"
---

# 书籍解读口播脚本 Skill 开源：把「多 Subagent 分角写、主 LLM 收口」做成了一键安装

## 摘要

**多 Subagent 编排终于有了可直接复用的开源样本。**

- 一行命令 `npx skills add joeseesun/qiaomu-book-script` 即可安装，调用方式极其简单：直接说「解读《被讨厌的勇气》」
- Skill 内部调度多个 Subagent 从不同角度并行写口播脚本，最后由主 LLM 收口整理成终稿
- 体现了 Skills 生态从「单点 prompt」向「多 Agent 编排」演进的工程范式
- 对比之前 Vercel / Anthropic 推崇的 Composable Agent，这是一条更轻量的中文实践路径


gakki 锐评：多 Subagent 编排的难点从来不是 prompt 拆分，而是「谁负责哪一段、谁负责收口」——这份 Skill 用最朴素的方式回答了这两个问题，比抽象的 framework 论更值得抄作业。

## 原文

演示视频中的书籍解读口播脚本 Skill 开源了

 https://t.co/LYl4GMbEUD

安装指令：npx skills add joeseesun/qiaomu-book-script

只需要说：解读《被讨厌的勇气》

Skill 会调用多个Subagent从不同角度写脚本，最后主LLM整理成终稿。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-06-10T14:00:17.000Z
- **抓取时间**: 2026-06-10T16:19:40.396Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 14 · 🔄 2 · 💬 2 · 🔖 0 · 👁 0
- **关联主题**: [sub-agents-multi-expert](/concepts/sub-agents-multi-expert.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2064709239810191647) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
[3] [Related topic](/concepts/sub-agents-multi-expert.md)
