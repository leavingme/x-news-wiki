---
type: "X Tweet"
title: "Appshots不只是截图：它读取的是「窗口内完整文本」，VS Code几百行代码全打包"
description: "**Appshots的核心不是视觉capture，是结构化文本读取。**  详解Appshots的实现逻辑：它不只是拍屏幕，它同时获取窗口截图+文本内容+屏幕外文本。比如VS Code里你只看到前50行，文件实际有500行——Appshots把完整文本上下文都传进去。Figma、Notion、浏览器、终端同理。  这解决了一个根本问题：人类在向AI描述代码时，会自动做「压缩」——觉得某部分重要就多"
resource: "https://x.com/i/status/2057560537215725653"
tags:
  - "x-news"
  - "news"
  - "author:xiaohu"
timestamp: "2026-05-21T22:18:39.024Z"
x_tweet_id: "2057560537215725653"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-05-21T20:33:54.000Z"
x_engagement:
  likes: 8
  retweets: 0
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Appshots不只是截图：它读取的是「窗口内完整文本」，VS Code几百行代码全打包

## 摘要

**Appshots的核心不是视觉capture，是结构化文本读取。**

详解Appshots的实现逻辑：它不只是拍屏幕，它同时获取窗口截图+文本内容+屏幕外文本。比如VS Code里你只看到前50行，文件实际有500行——Appshots把完整文本上下文都传进去。Figma、Notion、浏览器、终端同理。

这解决了一个根本问题：人类在向AI描述代码时，会自动做「压缩」——觉得某部分重要就多说，觉得不重要就省略。但这个「人类压缩」过程本身就是一个信息损耗源。Appshots把原始文本直接怼进去，AI自己判断重要性。

gakki锐评：最好的AI交互是让AI自己读，而不是让人当翻译。这个道理说起来简单，但实现起来需要对OS层API的深度整合能力。OpenAI这步走得比大多数人有魄力。

## 原文

OpenAI 给 Codex 加了一个新的功能，叫 Appshots。

将任意窗口上下文传输给 Codex：

你在 Mac 上开发、设计、写文档、看网页时，可以直接把“当前正在操作的窗口上下文”发给 Codex。

操作方式：

在 Mac 上按两次 Command 键（⌘⌘），就能把当前应用窗口附加到 Codex 对话线程里。

重点不是单纯截图。

Codex 会同时获取：

• 当前窗口的截图
• 窗口里的文本内容
• 甚至包括屏幕上没显示出来的部分内容

比如：

你现在在 VS Code 里写代码。

虽然屏幕只显示前 50 行，但整个文件其实有几百行。

Appshots 不只是拍一张图片，它还能读取编辑器里的文本上下文，所以 Codex 能理解完整代码结构。

再比如：

你在 Figma、Notion、浏览器、终端里工作。

按 ⌘⌘ 后，Codex 可以直接看到：

• 当前 UI 长什么样
• 页面文字内容
• 控制台报错
• 文档说明
• 设计稿结构

这样你就不用：

“复制粘贴代码 + 截图 + 手动解释半天”。

它更像：

把你的当前工作界面“共享”给 AI。


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-05-21T20:33:54.000Z
- **抓取时间**: 2026-05-21T22:18:39.024Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 8 · 🔄 0 · 💬 3 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2057560537215725653) — @xiaohu (小互)
