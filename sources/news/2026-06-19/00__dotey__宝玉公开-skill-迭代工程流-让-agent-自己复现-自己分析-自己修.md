---
type: "X Tweet"
title: "宝玉公开 Skill 迭代工程流：让 Agent 自己复现、自己分析、自己修"
description: "**Skills 不是一次写完，而是和软件一样靠用户量堆出迭代壁垒。**  - 宝玉披露典型问题：导出样式表只占半页、渐变色被图片遮没——纯靠人手调试极难定位 - 关键工作流：自己用 → 发现问题 → 让 Agent 重现 → 让 Agent 分析根因 → Agent 出方案 → 确认后写入 Skill 并加测试覆盖 → 再用 - Skill 相较软件的最大优势是「Agent 自己就是最好的测试员"
resource: "https://x.com/i/status/2068042001895809420"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-19T19:19:18.027Z"
x_tweet_id: "2068042001895809420"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-19T18:43:30.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "skill-automation-engineering"
x_source: "crawler"
---

# 宝玉公开 Skill 迭代工程流：让 Agent 自己复现、自己分析、自己修

## 摘要

**Skills 不是一次写完，而是和软件一样靠用户量堆出迭代壁垒。**

- 宝玉披露典型问题：导出样式表只占半页、渐变色被图片遮没——纯靠人手调试极难定位
- 关键工作流：自己用 → 发现问题 → 让 Agent 重现 → 让 Agent 分析根因 → Agent 出方案 → 确认后写入 Skill 并加测试覆盖 → 再用
- Skill 相较软件的最大优势是「Agent 自己就是最好的测试员」：跑一遍就知道上下文与边界问题，迭代成本被压到极低
- 这套方法本质是把 Skill 当作可执行规约而非静态文档，测试覆盖成为质量护城河


gakki 锐评：宝玉这套「用 Agent 迭代 Agent 技能」的闭环，正是 Skills 范式区别于传统 prompt 的根本——前者有反馈回路可自纠，后者只能靠人肉打磨。今天最大的认知增量不是某个 Skill，而是 Skill 的工业化方法论本身。

## 原文

Skill 和软件一样，需要不断迭代的，而且你用户越多，遇到的各种问题就越多，就需要去解决各种边边角角的问题，才能越来越好用。

比如 @yangyi 昨天在他的牛马AI里面测试了这个Skill，说导出好像有问题，我拿到结果一看，简直惨不忍睹（图2），这里面有两个问题：
1. 样式表不对，没有铺满整页，只占了一半
2. 导出的渐变色没有了，把图片都遮没了

写 Skill 比写软件有个优势，就是你可以让 Agent 先跑，跑完之后 Agent 它自己知道有哪些上下文，遇到了什么问题，这样它可以分析问题在哪。

于是我在本地跑一次，能重现，再让它分析原因，解决，那么它就能找出原因，并从 Skill 的层面去解决，添加测试覆盖，避免类似的问题再次出现。图1就是修复后的，看起来就好多了。

这其实也是我日常迭代 Skill 的方法：

自己用 -> 发现问题 -> 让 Agent 分析原因 -> 让 Agent 出解决方案 -> 确认方案♻️ -> 更新 Skill -> 自己用 ♻️


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-19T18:43:30.000Z
- **抓取时间**: 2026-06-19T19:19:18.027Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0
- **关联主题**: [skill-automation-engineering](/concepts/skill-automation-engineering.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2068042001895809420) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/skill-automation-engineering.md)
