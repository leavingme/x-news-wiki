---
type: "source"
title: "OpenAI Codex Chronicle：AI 开始记住你屏幕上的一切"
description: "**AI 正在获得跨越会话的「视觉记忆」，但明文存储和 rate limit 是两个定时炸弹。**  Chronicle 让 Codex 通过后台截屏+OCR 建立记忆，用户再说「这个报错」不再需要复制粘贴上下文。隐私风险是真实的——记忆文件是明文 Markdown，其他 App 可读；且后台 Agent 持续运行会快速消耗额度。  信号意义：OpenAI 正在把 AI 从「每次对话从零开始」推向"
resource: "https://x.com/i/status/2046316977711452560"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-04-21T00:42:40.420Z"
x_tweet_id: "2046316977711452560"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-20T19:56:00.000Z"
x_engagement:
  likes: 57
  retweets: 8
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2046316977711452560"
created: "2026-04-20"
updated: "2026-06-26"
sha256: "a73556d6057d46068d0390458b40320b0771d71065fd13ccbe194259e1e671a8"
sources:
  - "/sources/highlights/2026-04-21/00__dotey__openai-codex-chronicle-ai-开始记住你屏幕上的一切.md"
---

# OpenAI Codex Chronicle：AI 开始记住你屏幕上的一切

## 摘要

**AI 正在获得跨越会话的「视觉记忆」，但明文存储和 rate limit 是两个定时炸弹。**

Chronicle 让 Codex 通过后台截屏+OCR 建立记忆，用户再说「这个报错」不再需要复制粘贴上下文。隐私风险是真实的——记忆文件是明文 Markdown，其他 App 可读；且后台 Agent 持续运行会快速消耗额度。

信号意义：OpenAI 正在把 AI 从「每次对话从零开始」推向「持续感知用户上下文」的下一个范式。记忆战争正在从文本延伸到视觉。

gakki：明文存储这个产品决策很草台，但方向是对的。问题是——当 AI 比你更清楚你今天干了什么，安全边界到底谁说了算？

## 原文

OpenAI 给 Codex 加了一个新功能 Chronicle，让它能“看”你的屏幕。

简单说，Codex 现在可以记住你最近在屏幕上干了什么。你跟它说“这个报错”“那个文件”，它不用你解释就知道指的是什么。过去你得复制粘贴一堆上下文才能让 AI 理解你在做什么，现在它自己会从屏幕内容里补齐。

背景：Codex 上周刚推出了 Memories 功能，可以跨会话记住用户的偏好和项目。Chronicle 是 Memories 的扩展，靠后台进程定期截屏、做 OCR、分析你正在用哪些工具，再把这些信息整理成记忆文件。

目前是小范围灰度：只开放给 macOS 上的 ChatGPT Pro 订阅用户，欧盟、英国、瑞士不支持，大概率是隐私法规的原因。

但是需要注意的是：它会很快吃掉你的 rate limit，因为后台一直在跑 Agent 做总结。生成的记忆是明文 Markdown 存在本地 ~/.codex/memories_extensions/chronicle 里，其他 App 也能读到，敏感信息存在泄露风险。OpenAI 还明确警告这会放大 prompt injection 的风险：如果你浏览了带有恶意指令的网页，Codex 可能真的会照着那些指令执行。

屏幕截图会上传到 OpenAI 服务器生成记忆，官方说处理完就删，也不用于训练。如果不放心，可以随时从菜单栏暂停，或者直接删掉那些 Markdown 文件让它"忘记"。

AI 读屏幕这个方向不算新。微软 Recall 在 Windows 上折腾了一年多，Cursor 这类 IDE 也在探索类似的上下文补齐。但把它做成持续运行的后台 Agent，自动更新长期记忆，再直接塞进一个命令行编程工具里，目前还没看到别家这么干。

我暂时还不打算测试，不太喜欢有人/Agent盯着屏幕的感觉，有兴趣的可以试试并反馈下好用不。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-20T19:56:00.000Z
- **抓取时间**: 2026-04-21T00:42:40.420Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 57 · 🔄 8 · 💬 5 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2046316977711452560) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
