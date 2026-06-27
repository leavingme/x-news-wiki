---
type: "source"
title: "Ghostty 拆分动画的工程细节：终端 UI 不抖动的代价"
description: "**[Ghostty 正在攻克终端拆分窗口的视觉抖动问题，背后是半透明遮挡与全尺寸占位的取舍]**  - 新拆分采用 full-size 直接放置，避免 resize 抖动；动画起点选择在窗口外或另一个 split 下方 - 因为 split 可能半透明，需要 occlusion mask 来屏蔽像素，渲染管线复杂度上升 - Hashimoto 自言「仍处于非常早期的开发阶段」，暗示后续会有更多 "
resource: "https://x.com/i/status/2070281069631611056"
tags:
  - "x-news"
  - "news"
  - "author:mitchellh"
timestamp: "2026-06-26T01:21:40.408Z"
x_tweet_id: "2070281069631611056"
x_author: "Mitchell Hashimoto"
x_handle: "mitchellh"
x_created_at: "2026-06-25T23:00:45.000Z"
x_engagement:
  likes: 188
  retweets: 7
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "ghostty-terminal-adoption"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2070281069631611056"
created: "2026-06-25"
updated: "2026-06-26"
sha256: "c27dfbd521ad3031b17c3e6fde0c6aebd7f9025259525b024445012fd63ca5a3"
sources:
  - "/sources/news/2026-06-26/00__mitchellh__ghostty-拆分动画的工程细节-终端-ui-不抖动的代价.md"
---

# Ghostty 拆分动画的工程细节：终端 UI 不抖动的代价

## 摘要

**[Ghostty 正在攻克终端拆分窗口的视觉抖动问题，背后是半透明遮挡与全尺寸占位的取舍]**

- 新拆分采用 full-size 直接放置，避免 resize 抖动；动画起点选择在窗口外或另一个 split 下方
- 因为 split 可能半透明，需要 occlusion mask 来屏蔽像素，渲染管线复杂度上升
- Hashimoto 自言「仍处于非常早期的开发阶段」，暗示后续会有更多 UI/性能细节披露


gakki 的锐评：终端 UI 的毫秒级细节几乎没人看，但当 Agent 在终端里跑长任务时，渲染卡顿会直接吃掉 token 等待时间。Ghostty 这类原生终端是 Agent CLI 工具的隐性基建，值得开发者保持关注。

## 原文

Its easy to take this stuff for granted (and you should, really). But there are some fun problems and details here to think about, despite still being very under development. If you like the details, read on.

First, getting that "new split" animation right was tricky. The new split places at full size (so there is no resize jitter). Then, we pick a place to slide it out from: off window, beneath another split. 

Splits may be semi-transparent so there is an occlusion mask that we blank out pixels for, so even if its coming out from under a semi-transparent split, you don't see it blending through.

We have to be careful how we animate in the divider. I'm not totally sold on the approach here, but right now it expands out as the split comes in. It felt better to have pixels from the new split start showing up immediately. But, still experimenting.

For layout, all my prior split UIs on macOS and Linux used a nested view approach: recursive views of splits and leaves. This time, I did something different which was hugely beneficial: the tree structure is a tree, but I rasterize it to a 2D grid with absolute offsets. So the view is actually flat! Its just one layout view with N panes.

The benefit of the flat view is that animation is very easy cause its all happening across one layer/grid.

The "drop zone" animation is an overlay above the entire 2D grid. Its not intrinsic to the pane, it floats above it. This makes it easy to animate across the dividers as you can see in the video. Lesson learned from Ghostty, which does not do that and made animation impossible.

The corner radius of the drop zone and panes by default tries to match the [dynamic] corner radius of macOS 26. So you always get a radius-perfect corner. Very annoying, but a good detail to get right.

Going to keep hammering away at this...


## 元信息

- **作者**: Mitchell Hashimoto ([@mitchellh](https://x.com/mitchellh))
- **发布时间**: 2026-06-25T23:00:45.000Z
- **抓取时间**: 2026-06-26T01:21:40.408Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 188 · 🔄 7 · 💬 8 · 🔖 0 · 👁 0
- **关联主题**: [ghostty-terminal-adoption](/concepts/ghostty-terminal-adoption.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2070281069631611056) — @mitchellh (Mitchell Hashimoto)
[2] [Author page](/entities/authors/mitchellh.md)
[3] [Related topic](/concepts/ghostty-terminal-adoption.md)
