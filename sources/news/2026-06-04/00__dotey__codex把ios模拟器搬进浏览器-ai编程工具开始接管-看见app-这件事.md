---
type: "X Tweet"
title: "Codex把iOS模拟器搬进浏览器：AI编程工具开始接管「看见App」这件事"
description: "**【一句话核心判断】**  Codex新插件通过视频流传、神操控通道两条技术路径，把iOS模拟器画面实时投射到浏览器侧边栏——AI不只是读代码，它开始能「看见」并操控正在运行的App。  **【信息增量】**  • 技术原理：npm serve-sim持续截取iOS Simulator画面转为视频流（浏览器只做显示），同时建立控制通道将浏览器点击/拖动/输入换算为模拟器触摸坐标（浏览器是远程屏幕"
resource: "https://x.com/i/status/2062629786283864504"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-04T22:18:36.340Z"
x_tweet_id: "2062629786283864504"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-04T20:17:17.000Z"
x_engagement:
  likes: 15
  retweets: 3
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex把iOS模拟器搬进浏览器：AI编程工具开始接管「看见App」这件事

## 摘要

**【一句话核心判断】**

Codex新插件通过视频流传、神操控通道两条技术路径，把iOS模拟器画面实时投射到浏览器侧边栏——AI不只是读代码，它开始能「看见」并操控正在运行的App。

**【信息增量】**

• 技术原理：npm serve-sim持续截取iOS Simulator画面转为视频流（浏览器只做显示），同时建立控制通道将浏览器点击/拖动/输入换算为模拟器触摸坐标（浏览器是远程屏幕而非运行载体）
• 关键价值：结合Codex已有的Browser Use能力，AI现在能自行触发App内操作并观测UI反馈——意味着自动端到端UI测试和视觉驱动的调试成为可能
• 「浏览器操控模拟器」这条控制回路的打通，是多模态Agent闭环的关键一步，视觉反馈终于不再是黑箱

**gakki 锐评：** 这事的重要性不在插件本身，而在于它展示了AI编程工具从「读代码」向「操控真实运行环境」演进的路径。Claude Code和Codex的竞争正在从代码生成层面蔓延到运行时控制层面——谁能更好地接管开发者的眼睛和手，谁就重新定义了IDE。

## 原文

Codex 新的这个 Build iOS Apps 插件，可以让你方便的在 Codex 查看和测试你的 iOS 应用，预览 SwiftUI组件，修改了还能马上看到更新。

简单解释下原理：

这个插件可以理解成：把原本只能在 Xcode 和 iOS Simulator 里看的 App，搬到了 Codex 右边的浏览器里。视频里右侧那个 iPhone 画面，其实还是一台真实运行中的 iOS Simulator，只是插件用一个第三方 npm serve-sim 把模拟器画面持续截取成视频流，再显示到浏览器页面中。所以 Codex 不只是读代码，它还能“看见”App 当前长什么样。

浏览器能操作这个 App，是因为插件还建立了一条控制通道。你在浏览器里点击、拖动、输入文字时，浏览器会把这些动作换算成模拟器里的触摸坐标或键盘事件，再发回 iOS Simulator。也就是说，浏览器本身没有运行 iOS App，它只是像一个远程屏幕：一边接收模拟器画面，一边把你的操作转发给模拟器。

结合 Codex 的 Browser Use 操作浏览器能力，就可以实现 Codex 自行调试 iOS App。

视频里看到的“选择元素”也不是在选网页里的按钮。iOS App 没有网页 DOM，所以插件会读取 App 的 Accessibility 信息，也就是系统给辅助功能用的那套“这个按钮叫什么、位置在哪里、是不是可点”的数据。然后插件在浏览器画面上盖一层透明的 HTML 按钮，每个透明按钮对应一个 iOS UI 元素。这样 Codex 就能点选、识别、描述这些原生 iOS 元素。

SwiftUI Preview 和热重载则是另一个能力：插件会临时生成一个专门用来展示 Preview 的小 App，把你的 SwiftUI 预览放进去运行。你改代码后，它可以只重新编译预览相关的小动态库，再通知正在运行的 Preview App 更新画面，不一定每次都完整重装 App。最终效果就是：Codex 能在同一个窗口里读代码、改 UI、运行模拟器、看结果、继续调整，形成一个完整的 iOS 开发闭环。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-04T20:17:17.000Z
- **抓取时间**: 2026-06-04T22:18:36.340Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 15 · 🔄 3 · 💬 5 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2062629786283864504) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
