---
type: "X Tweet"
title: "「/goal resume」才是恢复暂停目标的正确指令，社区大量误用 /goal 当继续键"
description: "**一句话核心判断：Codex Goal 的高频误用暴露了 CLI 产品文档与用户认知之间的系统性断层。**  2026-05-21 之后 Goal 已是 generally available 且 enabled by default，但社区大量用户把 `/goal` 当作「继续键」使用。正确用法是：`/goal resume` 恢复暂停目标，`/goal pause` 暂停，`/goal cl"
resource: "https://x.com/i/status/2059308988555223191"
tags:
  - "x-news"
  - "news"
  - "author:Zesee"
timestamp: "2026-05-26T19:18:40.696Z"
x_tweet_id: "2059308988555223191"
x_author: "Rachel🥥"
x_handle: "Zesee"
x_created_at: "2026-05-26T16:21:37.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 「/goal resume」才是恢复暂停目标的正确指令，社区大量误用 /goal 当继续键

## 摘要

**一句话核心判断：Codex Goal 的高频误用暴露了 CLI 产品文档与用户认知之间的系统性断层。**

2026-05-21 之后 Goal 已是 generally available 且 enabled by default，但社区大量用户把 `/goal` 当作「继续键」使用。正确用法是：`/goal resume` 恢复暂停目标，`/goal pause` 暂停，`/goal clear` 清除。`/goal` 本身的作用是「查看当前目标摘要和状态」。

config.toml 中 `[features.goals] goals = true` 是旧版本的配置说明，当前版本已无需手动启用。

gakki锐评：一个需要用户去翻社区截图排查文档的产品功能，本质上是产品设计的失败——斜杠命令的语义需要极度收敛，而不是让用户靠试错学习。

## 原文

注意一个细节：/goal 不是万能继续键，它更像“查看当前目标”。恢复暂停目标应该用 /goal resume。

如果你已经更新到较新版本，正常不需要手动打开 Goal。

社区截图里提到过一个排查方法：如果斜杠命令里完全看不到 Goal，可以检查 config.toml 里是否启用了 goal 相关 feature。

不过这更适合旧版本或灰度环境；以 2026-05-21 之后的官方说明看，Goal 已经是 generally available / enabled by default。

[features.goals]
goals = true


## 元信息

- **作者**: Rachel🥥 ([@Zesee](https://x.com/Zesee))
- **发布时间**: 2026-05-26T16:21:37.000Z
- **抓取时间**: 2026-05-26T19:18:40.696Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 2 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2059308988555223191) — @Zesee (Rachel🥥)
[2] [Author page](/entities/authors/zesee.md)
