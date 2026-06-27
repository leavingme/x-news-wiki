---
type: "source"
title: "宝玉实测 Codex /goal 跑 17 小时：长时间 Agent 任务的工程纪律不是「让它跑久」，而是分阶段验收"
description: "**长时任务的关键不是 duration，而是 feedback loop 的工程化。**  - 宝玉用 Codex 逆向 Codex App 项目，/goal 连续运行 17 小时 - 核心方法：先与 Agent 共同制定计划 → 保存为文档 → 初始化 Agents.md → 分阶段执行 - 首次运行 30 分钟就跑偏，因为 Agent 没理解「代码质量标准」，手动写样板后更新计划才解决 - "
resource: "https://x.com/i/status/2051673437727346838"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-05T16:18:55.050Z"
x_tweet_id: "2051673437727346838"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-05T14:40:40.000Z"
x_engagement:
  likes: 62
  retweets: 9
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2051673437727346838"
created: "2026-05-05"
updated: "2026-06-26"
sha256: "8c3003a94a6f18eb21665b574588190e201bbead62bc6cd9233b17048cafd2aa"
sources:
  - "/sources/highlights/2026-05-05/00__dotey__宝玉实测-codex-goal-跑-17-小时-长时间-agent-任务的工程纪律不是-让它跑久-而是分阶段验收.md"
---

# 宝玉实测 Codex /goal 跑 17 小时：长时间 Agent 任务的工程纪律不是「让它跑久」，而是分阶段验收

## 摘要

**长时任务的关键不是 duration，而是 feedback loop 的工程化。**

- 宝玉用 Codex 逆向 Codex App 项目，/goal 连续运行 17 小时
- 核心方法：先与 Agent 共同制定计划 → 保存为文档 → 初始化 Agents.md → 分阶段执行
- 首次运行 30 分钟就跑偏，因为 Agent 没理解「代码质量标准」，手动写样板后更新计划才解决
- 反复迭代几次后进入稳定状态

gakki 锐评：/goal 不是「放手让它跑」，而是「放手之前先教会它怎么跑」。宝玉暴露了一个被忽视的工程真相——长时间 Agent 的瓶颈不在算力，在初始对齐质量。

## 原文

/goal 目标不是为了时间长而时间长，它的目标是为了解决需要长时间运行的任务，避免人工反复的输入 continue。

要有清晰的目标，你的任务是要解决什么问题？让它运行时间长不是一个目标

要有验收标准，怎么样算完成？

要有文档指导，该怎么完成任务？长时间的任务要分阶段，而不是一次性完成，每个阶段都要有文档说明

要有中间进度辅助，比如进度、checklist等

比如说我在让 codex 去逆向 codex app 项目，已经跑了17个小时了。

第一步我是先跟 Codex 一起制定一个计划，计划中会有详细的验收标准

然后不直接执行计划，而是把计划保存成文档，去项目中初始化 Agents md 文件，让 codex 清晰知道任务目标和验收方法以及验收标准。

再试运行，/goal 后面告诉它按照 Agents md 的要求执行，并记录进度。第一次只跑了半小时就结束了，因为它没理解要把代码写成命名友好、类型完整、文件名结构良好的结果。

于是我找了一个文件做样板，手动（AI 辅助）写了一个样板，告诉它这是我期望的结果，然后更新了计划文件。

这样可能反复几次，后续就没什么问题了。

所以还是要说清楚你想要什么，写成文档，让 AI 清楚的知道怎么去做，怎么验证结果，怎么知道是否完成。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-05T14:40:40.000Z
- **抓取时间**: 2026-05-05T16:18:55.050Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 62 · 🔄 9 · 💬 8 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2051673437727346838) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
