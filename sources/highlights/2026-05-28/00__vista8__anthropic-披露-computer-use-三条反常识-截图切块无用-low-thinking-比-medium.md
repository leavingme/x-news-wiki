---
type: "source"
title: "Anthropic 披露 Computer Use 三条反常识：截图切块无用、Low Thinking 比 Medium 费 Token、Medium 性价比最高"
description: "**[Anthropic 公布 Computer Use 最佳实践，三条结论与常识相悖]**  第一，截图分辨率需严格控制：Claude 4.6 系列最长边 1568 像素，Opus 4.7 可到 2576 像素，超出会导致 AI 坐标系与画面不匹配而点偏。第二，Low thinking 模式反而比 Medium 更费 Token，因为错误率上升导致重试成本增加。第三，Medium thinkin"
resource: "https://x.com/i/status/2060026364317839414"
tags:
  - "x-news"
  - "highlights"
  - "author:vista8"
timestamp: "2026-05-28T16:18:52.354Z"
x_tweet_id: "2060026364317839414"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-05-28T15:52:13.000Z"
x_engagement:
  likes: 4
  retweets: 1
  replies: 3
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2060026364317839414"
created: "2026-05-28"
updated: "2026-06-26"
sha256: "4ece10f42548abf5ae2f55a6c714a9d845bfdb9c7d5fa39bbd8b0cedb027bbd4"
sources:
  - "/sources/highlights/2026-05-28/00__vista8__anthropic-披露-computer-use-三条反常识-截图切块无用-low-thinking-比-medium.md"
---

# Anthropic 披露 Computer Use 三条反常识：截图切块无用、Low Thinking 比 Medium 费 Token、Medium 性价比最高

## 摘要

**[Anthropic 公布 Computer Use 最佳实践，三条结论与常识相悖]**

第一，截图分辨率需严格控制：Claude 4.6 系列最长边 1568 像素，Opus 4.7 可到 2576 像素，超出会导致 AI 坐标系与画面不匹配而点偏。第二，Low thinking 模式反而比 Medium 更费 Token，因为错误率上升导致重试成本增加。第三，Medium thinking 性价比最优，Max Thinking 几乎没必要。

这些数据揭示了一个现实：当前 Computer Use 仍是重度 Token 消耗场景，上下文窗口填满速度远超预期。行业需要对 Agent 浏览器自动化保持清醒的预期管理。

## 原文

Anthropic 出了一篇Computer Use的最佳实践，总结学习下，评论区有原文。

1. 原图分辨率太高，超 API 限制时，系统自动降采样，会导致画面和代码坐标系不匹配，就会点偏。

Claude 4.6 系列上限：最长边 1568 像素，总像素 1.15 mp。
Claude Opus 4.7 上限：最长边 2576 像素，总像素 3.75 mp。

最佳实践：4.6 系列推荐默认 1280x720；Opus 4.7 推荐默认 1080p。

2. 构建 API 请求时，文本指令必须放在图片之前。

推荐：[ {文本: "点击提交按钮"}, {图片: base64} ]

让AI先看到文本，知道要找啥，找的更准。

3. 每张截图大约消耗 1000–1800 个 token，200k 的上下文很快就会满，文章给了三种解法，感兴趣的可以看。

反常识内容：

1. 截图切块发送不会提升精度，画坐标网格也没用。

2. 开 Low thinking 比不开还省 token，因为犯错少。

3. 开到Max Thinking 完全没必要，开到medium性价比更高，比Max便宜一半。

因为视觉操作是“感知和机械任务”，不是逻辑任务。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-05-28T15:52:13.000Z
- **抓取时间**: 2026-05-28T16:18:52.354Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 4 · 🔄 1 · 💬 3 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2060026364317839414) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
