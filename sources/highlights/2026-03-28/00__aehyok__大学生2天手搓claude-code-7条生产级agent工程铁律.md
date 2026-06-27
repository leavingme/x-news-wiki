---
type: "X Tweet"
title: "大学生2天手搓Claude Code：7条生产级Agent工程铁律"
description: "**[生产级Agent的壁垒不在API调用，而在脚手架工程（Harness Engineering）]**  • 极简原则：纯Node.js原生，零框架依赖 • 成本控制：提示词分层+官方缓存，API费用断崖式下降 • 安全防线：读取直过，修改/删除必须人工确认或轻量模型预审 • 记忆策略：拒绝向量数据库，长期记忆直接用.md文件  开源社区正在拆解Anthropic和OpenAI的工程护城河，这"
resource: "https://x.com/i/status/2037904284587598156"
tags:
  - "x-news"
  - "highlights"
  - "author:aehyok"
timestamp: "2026-03-28T18:12:50.436Z"
x_tweet_id: "2037904284587598156"
x_author: "AI少年"
x_handle: "aehyok"
x_created_at: "2026-03-28T14:46:58.000Z"
x_engagement:
  likes: 152
  retweets: 22
  replies: 22
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-minimalist-implementation"
x_source: "crawler"
---

# 大学生2天手搓Claude Code：7条生产级Agent工程铁律

## 摘要

**[生产级Agent的壁垒不在API调用，而在脚手架工程（Harness Engineering）]**

• 极简原则：纯Node.js原生，零框架依赖
• 成本控制：提示词分层+官方缓存，API费用断崖式下降
• 安全防线：读取直过，修改/删除必须人工确认或轻量模型预审
• 记忆策略：拒绝向量数据库，长期记忆直接用.md文件

开源社区正在拆解Anthropic和OpenAI的工程护城河，这不是复刻，是范式重构。

## 原文

一个即将毕业的大学生，仅用 2 天手搓了一个开源版Claude Code，堪称传奇，而且有非常多自己的想法在里面。

构建生产级 AI Agent 的真正壁垒在于脚手架工程（Harness Engineering）——即如何精细化管理上下文、工具回调、流式输出和错误恢复，而远非调用 API 那么简单。

我总结了 7点八老板最干货的实战经验：

1、绝对极简：不依赖乱七八糟的框架，只用 Node.js 自带功能写代码。
2、缓存：把给 AI 的提示词分成“固定死规定”和“当前新情况”。固定的部分让官方缓存起来，能省下巨量 API 费用。
3、防内存撑爆：设死规矩，最多让 AI 循环想 25 次；一旦聊天记录太长，就强制让 AI 写个“前情提要”来压缩字数。
4、管住 AI 的手（安全）：读取文件可以直接干，但遇到“修改/删除”这种高危操作，必须让人点确认，或者找个便宜的小模型先做安全扫描。
5、别让 AI 瞎猜（实时纠错）：AI 改完代码，立刻用代码检查工具（LSP）把报错甩给它看，让它当场改对。
6、最土的记忆法：别搞什么高大上的向量数据库，AI 的长期记忆直接存成 .md 文本文件，简单粗暴，人也能随时打开看和改。
7、同样包含SubAgent和多Agent协作。

大家有兴趣的可以去研究一下八老板的这个开源项目。


## 元信息

- **作者**: AI少年 ([@aehyok](https://x.com/aehyok))
- **发布时间**: 2026-03-28T14:46:58.000Z
- **抓取时间**: 2026-03-28T18:12:50.436Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 152 · 🔄 22 · 💬 22 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2037904284587598156) — @aehyok (AI少年)
