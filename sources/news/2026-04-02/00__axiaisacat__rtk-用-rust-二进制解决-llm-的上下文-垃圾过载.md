---
type: "X Tweet"
title: "rtk：用 Rust 二进制解决 LLM 的上下文「垃圾过载」"
description: "**[判断]** 开源项目 rtk 在 LLM 输入前过滤压缩 git diff / 测试日志 / 终端输出，可降低 60-90% token 消耗，30 分钟 Claude Code 会话实测节省约 80%。  • 核心洞察：AI Coding 效果不稳定往往不是模型不够强，而是喂进去的上下文太脏 • 覆盖 rgrep、cargo test、npm test 等高频场景，测试输出压缩最高达 -9"
resource: "https://x.com/i/status/2034068299172970756"
tags:
  - "x-news"
  - "news"
  - "author:axiaisacat"
timestamp: "2026-04-02T00:43:17.701Z"
x_tweet_id: "2034068299172970756"
x_author: "axiaisacat"
x_handle: "axiaisacat"
x_created_at: "2026-03-18T00:44:08.000Z"
x_engagement:
  likes: 140
  retweets: 23
  replies: 10
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# rtk：用 Rust 二进制解决 LLM 的上下文「垃圾过载」

## 摘要

**[判断]** 开源项目 rtk 在 LLM 输入前过滤压缩 git diff / 测试日志 / 终端输出，可降低 60-90% token 消耗，30 分钟 Claude Code 会话实测节省约 80%。

• 核心洞察：AI Coding 效果不稳定往往不是模型不够强，而是喂进去的上下文太脏
• 覆盖 rgrep、cargo test、npm test 等高频场景，测试输出压缩最高达 -90%
• 单 Rust 二进制、零依赖、跨平台，集成成本极低

**gakki 说：** token 压缩和模型升级是两条正交的路，但行业普遍只追后者。rtk 的思路对了：与其责怪模型不够聪明，不如先让上下文更干净。

## 原文

今天给大家分享一个省 token 的技巧。

如果你平时在用 Claude Code、Cursor 或其他 AI Coding 工具，应该都有一个共同感受：
真正烧 token 的，很多时候不是你写的 prompt，
而是 git diff、测试日志、终端输出这些上下文垃圾。
最近看到一个开源项目 rtk，我觉得很值得关注。
它的思路很简单：
在终端输出进入 LLM 之前，先做过滤、压缩、去重。
但效果不简单，README 给出的数据是：
LLM token 消耗可降低 60%-90%，
一个 30 分钟 Claude Code 会话样例里，整体节省大约 80%。

这个项目最有价值的地方，不只是“省钱”。

更关键的是，它在帮模型减少无效信息干扰。
因为很多时候 AI Coding 效果不稳定，不一定是模型不够强，而是你喂进去的上下文太乱了。
rtk 优化的也都是高频场景：
git status
git diff
rg
cat
cargo test
npm test
README 里甚至提到，测试输出压缩可以做到 -90%。
而且它本身非常轻：
单个 Rust 二进制、零依赖、额外开销 <10ms，
还支持通过 rtk init --global 给 Claude Code 装 hook，直接接入日常工作流。
我的理解是：

省 token，只是表面收益。
真正的收益，是让上下文更干净，让模型把注意力放在真正重要的信息上。

感兴趣的朋友可以去看看这个项目：👇


## 元信息

- **作者**: axiaisacat ([@axiaisacat](https://x.com/axiaisacat))
- **发布时间**: 2026-03-18T00:44:08.000Z
- **抓取时间**: 2026-04-02T00:43:17.701Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 140 · 🔄 23 · 💬 10 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2034068299172970756) — @axiaisacat (axiaisacat)
[2] [Author page](/entities/authors/axiaisacat.md)
