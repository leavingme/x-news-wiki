---
type: "X Tweet"
title: "本地Agent调用Web服务的新范式：Claude通过AppleScript直连Grok实现零摩擦交叉验证"
description: "**[跨模型协作的「无API化」突破]**  • 不依赖官方API，通过AppleScript控制已登录网页实现「伪API调用」，打破免费用户的使用壁垒 • 验证流程内嵌编码工作流：写完内容直接让Claude交叉检查，无需切换窗口或复制粘贴 • 技术原理极简但体验颠覆：本地服务桥接→浏览器自动化→结果回传，为Agent调用第三方Web服务提供可复用的工程范式  AppleScript这个「被遗忘的"
resource: "https://x.com/i/status/2033442961074340294"
tags:
  - "x-news"
  - "highlights"
  - "author:runes_leo"
timestamp: "2026-03-18T16:28:00.956Z"
x_tweet_id: "2033442961074340294"
x_author: "Leo｜一个人 + AI"
x_handle: "runes_leo"
x_created_at: "2026-03-16T07:19:16.000Z"
x_engagement:
  likes: 117
  retweets: 12
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "bookmark"
---

# 本地Agent调用Web服务的新范式：Claude通过AppleScript直连Grok实现零摩擦交叉验证

## 摘要

**[跨模型协作的「无API化」突破]**

• 不依赖官方API，通过AppleScript控制已登录网页实现「伪API调用」，打破免费用户的使用壁垒
• 验证流程内嵌编码工作流：写完内容直接让Claude交叉检查，无需切换窗口或复制粘贴
• 技术原理极简但体验颠覆：本地服务桥接→浏览器自动化→结果回传，为Agent调用第三方Web服务提供可复用的工程范式

AppleScript这个「被遗忘的macOS原生能力」，正在成为打通多Agent协作的最后一块拼图。不用等OpenAI和X的官方合作，用户自己先跑通了。

## 原文

通过 Claude 调用 Grok 搜索 X，用了一段时间后发现最爽的场景不只是搜索，还有交叉验证。                     
                                                                                
刚写完一条关于 Chrome 146 更新的推文，不确定几个技术细节是否准确。直接在 Claude Code 里说"帮我问 Grok 有没有事实错误"，它自动把内容发到 Safari 里的
Grok，逐条核实并给出来源，1 秒出结果。

整个过程没切窗口、没复制粘贴、没开新标签页。

原理很简单：一个常驻的本地服务，通过 AppleScript 控制 Safari 里已登录的 Grok 页面。Claude Code 调用这个服务就像调 API 一样，但走的是 https://t.co/8mNA3zml4A 网页版，免费用户也能用（有额度限制），Premium/Premium+ 额度更高。


## 元信息

- **作者**: Leo｜一个人 + AI ([@runes_leo](https://x.com/runes_leo))
- **发布时间**: 2026-03-16T07:19:16.000Z
- **抓取时间**: 2026-03-18T16:28:00.956Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 117 · 🔄 12 · 💬 3 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2033442961074340294) — @runes_leo (Leo｜一个人 + AI)
