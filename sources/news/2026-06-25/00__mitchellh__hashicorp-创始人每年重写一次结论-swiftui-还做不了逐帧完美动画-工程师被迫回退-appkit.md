---
type: "X Tweet"
title: "HashiCorp 创始人每年重写一次结论：SwiftUI 还做不了逐帧完美动画，工程师被迫回退 AppKit"
description: "**Mitchell Hashimoto 连续多年尝试用 SwiftUI 构建逐帧完美的原生 UI，最终都因框架能力不足而回退到自定义 NSView + CoreAnimation。**  要点： - SwiftUI 在高阶声明式与底层动画控制之间仍未打通，\"frame-perfect\"级别的自定义动画仍是其能力盲区 - 即便是顶级 iOS 工程师，每年都要花数天和框架对抗，最终还是落回 2014"
resource: "https://x.com/i/status/2070262735896772843"
tags:
  - "x-news"
  - "news"
  - "author:mitchellh"
timestamp: "2026-06-25T22:20:11.642Z"
x_tweet_id: "2070262735896772843"
x_author: "Mitchell Hashimoto"
x_handle: "mitchellh"
x_created_at: "2026-06-25T21:47:54.000Z"
x_engagement:
  likes: 65
  retweets: 3
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# HashiCorp 创始人每年重写一次结论：SwiftUI 还做不了逐帧完美动画，工程师被迫回退 AppKit

## 摘要

**Mitchell Hashimoto 连续多年尝试用 SwiftUI 构建逐帧完美的原生 UI，最终都因框架能力不足而回退到自定义 NSView + CoreAnimation。**

要点：
- SwiftUI 在高阶声明式与底层动画控制之间仍未打通，"frame-perfect"级别的自定义动画仍是其能力盲区
- 即便是顶级 iOS 工程师，每年都要花数天和框架对抗，最终还是落回 2014 年前后的 UIKit 范式
- 信号：Apple 平台级"高级抽象覆盖底层"的承诺，在专业开发场景下持续落空


gakki 锐评：SwiftUI 的成熟度问题已经从"新框架需要时间"变成"Apple 自己人每年都在用脚投票"——这是平台护城河层面的信号，对 iOS/macOS 高级开发招聘和工具链选型有直接影响。

## 原文

Every year I try to build custom native UI with every-frame-perfect animations with SwiftUI, and every year after fighting against nature for a few days, I once again write custom NSViews with CoreAnimation layers. SwiftUI just isn't ready for that yet.


## 元信息

- **作者**: Mitchell Hashimoto ([@mitchellh](https://x.com/mitchellh))
- **发布时间**: 2026-06-25T21:47:54.000Z
- **抓取时间**: 2026-06-25T22:20:11.642Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 65 · 🔄 3 · 💬 3 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2070262735896772843) — @mitchellh (Mitchell Hashimoto)
[2] [Author page](/entities/authors/mitchellh.md)
