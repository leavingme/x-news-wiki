---
type: "source"
title: "Codex 三种电脑操控方式官方揭秘：Computer Use 慢但万能，Mac 体验碾压 Windows"
description: "**Codex Team Jason 亲笔指南：Computer Use、Chrome 扩展、CLI/API 三种操控模式的取舍之道已系统化披露**  Computer Use 像人一样看屏操作，最广最慢，但能搞定无 API 的任意图形应用；Mac 后台静默运行 vs Windows 强制占前台的体验鸿沟是关键决策点。 实战案例极端亮眼：宝玉快递被偷场景下，Codex 5 分钟轮询聊天窗口 + 客"
resource: "https://x.com/i/status/2067033481142509588"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-17T01:19:21.010Z"
x_tweet_id: "2067033481142509588"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-16T23:56:00.000Z"
x_engagement:
  likes: 130
  retweets: 21
  replies: 15
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "codex-cli-tool-encapsulation"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2067033481142509588"
created: "2026-06-16"
updated: "2026-06-26"
sha256: "37e14d2c4a44ee814a8aa21303aefdf1c35664acc498e632f355e9d48c4c0bd0"
sources:
  - "/sources/highlights/2026-06-17/00__dotey__codex-三种电脑操控方式官方揭秘-computer-use-慢但万能-mac-体验碾压-windows.md"
---

# Codex 三种电脑操控方式官方揭秘：Computer Use 慢但万能，Mac 体验碾压 Windows

## 摘要

**Codex Team Jason 亲笔指南：Computer Use、Chrome 扩展、CLI/API 三种操控模式的取舍之道已系统化披露**

Computer Use 像人一样看屏操作，最广最慢，但能搞定无 API 的任意图形应用；Mac 后台静默运行 vs Windows 强制占前台的体验鸿沟是关键决策点。
实战案例极端亮眼：宝玉快递被偷场景下，Codex 5 分钟轮询聊天窗口 + 客服出现后 1 分钟高频接管，洗澡回来退款已到账——这是「GUI Agent 接管琐事」的产品级证据。

锐评：Codex 不再只是 CLI 工具，「Computer Use + Chrome 扩展 + 结构化 API」三层叠加意味着它正在把 macOS 桌面变成可编排的 Agent 战场。Mac 体验的护城河会被 Windows 阵营反向追平，Anthropic 的 Computer Use 该有压力了。

## 原文

Codex 操控电脑的三种方式。Codex 团队成员 Jason 今天写了一篇详细指南，把三者的区别和适用场景理清楚了，这里做个精简版。

【1】Computer Use：最广，也最慢

Computer Use 让 Codex 像人一样看屏幕、点鼠标、敲键盘，操作你电脑上的任何图形界面应用。Spotify、Xcode、系统设置、iOS 模拟器，甚至 iPhone Mirroring 都能控制。

代价是慢。结构化插件可以直接调 API，Computer Use 得一步步看界面、找按钮、等响应、再检查结果。但它能搞定没有 API 的应用，这是其他方式做不到的。

Mac 和 Windows 的体验差距很大：Mac 上 Codex 可以在后台静悄悄地操作，你继续用自己的电脑不受影响；Windows 上它必须占据前台，操作期间你没法用那台机器。

Jason 举了个例子：有次他的快递被偷了，Amazon 说要等 25 分钟才能接通客服。他让 Codex 每五分钟检查一次聊天窗口，客服出现后改为每分钟一次，自动完成退款流程。他去洗了个澡，回来退款已经办好了。

【2】Chrome 扩展：带着你的登录状态

Chrome 扩展让 Codex 使用你已登录的浏览器会话，包括 cookies、账号状态和已有标签页。Gmail、LinkedIn、Salesforce、公司内部后台，这些需要登录才能用的工具，Chrome 扩展是对的选择。

它还能同时控制多个标签页，在一个标签里读信息，到另一个标签里对比，再到第三个标签完成操作。Computer Use 也能操作浏览器，但它只认屏幕坐标，Chrome 扩展理解的是浏览器层面的上下文。

Jason 用它跑了一个长期任务：每天让 Codex 通过 Chrome 检查他的 Twitter 私信、浏览相关新闻、收集反馈，把有价值的内容存到本地文件，但不发任何消息。
要注意的是，网站会把 Codex 的点击和表单提交当作你本人的操作。研究、浏览、起草可以自动化，但发送、发布、付款这类操作最好留给自己确认。

【3】内置浏览器：给开发者的沙盒

内置浏览器住在 Codex 的对话线程里，你和 Codex 共享同一个渲染页面。它不带任何登录状态和 cookies，是个完全隔离的环境。

这反而成了开发场景的优势。它的主场是本地开发服务器、文件预览、公共网页、响应式布局检查和视觉 bug 复现。Codex 可以改代码、操作页面、截图、再跑一遍，形成紧密的反馈循环。

Jason 最喜欢的功能是标注：你可以直接在页面上点击某个元素留评论，比如"这个层级反了""这个按钮间距不够"，Codex 会拿着截图和元素上下文去改代码，改完重新打开同一个页面等你下一轮标注。比来回传截图和文字描述高效得多。

【选哪个？】

简单记：任务需要登录状态用 Chrome，需要操作桌面应用用 Computer Use，在做前端开发用内置浏览器。如果有现成的插件或 MCP 能完成任务，优先用结构化工具，视觉控制是最后手段。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-16T23:56:00.000Z
- **抓取时间**: 2026-06-17T01:19:21.010Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 130 · 🔄 21 · 💬 15 · 🔖 0 · 👁 0
- **关联主题**: [codex-cli-tool-encapsulation](/concepts/codex-cli-tool-encapsulation.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2067033481142509588) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/codex-cli-tool-encapsulation.md)
