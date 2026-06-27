---
type: "source"
title: "Codex Record & Replay 把'录屏教程'变成可复用 Skill：Agent 技能获取从写提示词转向演示一遍"
description: "**Codex 把'人示范一遍'作为 Skill 生产的入口，把 Agent 能力获取的成本从 prompt 编写降到鼠标操作。**  - 产品逻辑：你做一遍重复工作（报销、issue、报表），Codex 观察后固化为可复用 Skill，下次只需告诉它变量（文件/日期/工单号）。 - 关键转变：Skill 不再依赖人写清楚步骤，而从 GUI 操作轨迹中反推流程——把'不会写 prompt 的人'纳"
resource: "https://x.com/i/status/2069064689217114261"
tags:
  - "x-news"
  - "highlights"
  - "author:Zesee"
timestamp: "2026-06-22T16:18:33.316Z"
x_tweet_id: "2069064689217114261"
x_author: "Rachel🥥"
x_handle: "Zesee"
x_created_at: "2026-06-22T14:27:17.000Z"
x_engagement:
  likes: 5
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "skill-automation-engineering"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2069064689217114261"
created: "2026-06-22"
updated: "2026-06-26"
sha256: "86f088a141da039a69f21913ebc86dcb54f1900a9f9b400b6057967243d1cea7"
sources:
  - "/sources/highlights/2026-06-22/00__Zesee__codex-record-replay-把-录屏教程-变成可复用-skill-agent-技能获取从写提示词转向演示一遍.md"
---

# Codex Record & Replay 把'录屏教程'变成可复用 Skill：Agent 技能获取从写提示词转向演示一遍

## 摘要

**Codex 把'人示范一遍'作为 Skill 生产的入口，把 Agent 能力获取的成本从 prompt 编写降到鼠标操作。**

- 产品逻辑：你做一遍重复工作（报销、issue、报表），Codex 观察后固化为可复用 Skill，下次只需告诉它变量（文件/日期/工单号）。
- 关键转变：Skill 不再依赖人写清楚步骤，而从 GUI 操作轨迹中反推流程——把'不会写 prompt 的人'纳入 Agent 使用者池。
- 价值：大幅降低长尾工作流（企业内勤、运营、HR 报销等）的 Agent 化门槛，与 Anthropic SKILL.md 体系、宝玉演示复刻流派形成并行的'演示型 Skill'路径。
- 风险：录制出的 Skill 边界弱、可观测性差，且天然不跨平台——更接近 RPA 2.0 而非真正的 Agent 技能。

**gakki 锐评：** 真正的护城河不是'你会录 Skill'，而是 Codex 能否在 50 次复用中自动收敛出稳定接口；演示型 Skill 的天花板是结构化程度，演示越随意，Skill 越像一次性胶带。

## 原文

Codex 这次把「录屏教程」变成了可复用 Skill

Codex 新出了一个很适合普通人上手的新功能，Record & Replay。

一句话讲，就是：
你把一个重复工作在电脑上演示一遍，Codex 会观察你的操作，然后把这套流程做成一个可复用的 Skill。
下次再遇到同类任务，你不用重新写一大段 prompt。
直接告诉 Codex 这次变动的部分，比如这次上传哪个文件、填哪个日期、创建哪个 issue，它就能按之前学到的流程去跑。

这个功能特别适合那种「每次都差不多，但又很烦」的工作。

比如：报销；请假申请；创建格式正确的 issue；发布视频；下载每周固定报表。

以前这种事最麻烦的地方，不是难是太碎。
你要跟 AI 解释半天：
先去哪，
点哪里。
哪个字段怎么填。
遇到弹窗怎么办。
最后怎么确认成功。

而 Record & Replay 的思路很直接。
别解释了。

你做一遍给它看。
具体怎么用也不复杂。

第一步，在 Codex app 里打开 Plugins。
第二步，点 + 菜单，选择 Record a skill。
第三步，告诉 Codex 你要教它什么流程，以及哪些东西以后会变。
比如「我要教你每周下载广告报表，以后日期范围和账号会变」。
第四步，授权它开始录制。
第五步，你正常在 Mac 上操作一遍。
该点网页点网页，该填表填表，该上传文件上传文件。
第六步，流程结束后停止录制。

然后 Codex 会把刚才看到的操作整理成一个 Skill
这个 Skill 不是黑盒。
它会写清楚什么时候使用、需要哪些输入、具体步骤是什么、最后怎么验证结果。
你还可以继续让 Codex 修改它。
比如补一句：
「最后不要自动提交，只停在确认页等我检查。」
或者：
「文件名必须改成 日期_渠道_报表.csv。」

它不是简单录屏。
也不是传统宏。
传统宏只会机械重复你点了什么。

Record & Replay 生成的是 Skill，后面可以结合 Computer Use、浏览器操作、插件一起跑。

也就是说，它更像是你给 Codex 教了一项小工作。

以后它可以在新任务里调用这项能力。

不过这里有个使用建议。
别一上来就录很复杂的大流程。
先录三类小任务最稳：
第一，高频任务。
每周、每天都会重复做。
第二，步骤稳定。
页面和字段不要天天变。
第三，验收清楚。
你能明确知道什么叫做完成。

比如「下载报表并确认行数不为 0」就很适合。
比如「发布视频但最后停在发布确认页」也很适合。

反过来，如果这个任务中间充满临时判断、敏感数据、或者最后一步风险很高，就不要一开始全自动。

先让它跑到确认页。
人来做最后一下。
目前 Record & Replay 在 macOS 上可用，前提是你的 Codex 有 Computer Use，并且这个功能在你所在地区开放。
￼
我觉得这波更新很适合所有经常做重复电脑操作的人试一下。

以前我们教 AI，靠写 prompt。
现在可以直接演示。
这是一次很突破性的更新。
因为很多工作真的不是「说清楚」的。
是「做一遍」的。


## 元信息

- **作者**: Rachel🥥 ([@Zesee](https://x.com/Zesee))
- **发布时间**: 2026-06-22T14:27:17.000Z
- **抓取时间**: 2026-06-22T16:18:33.316Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 5 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [skill-automation-engineering](/concepts/skill-automation-engineering.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2069064689217114261) — @Zesee (Rachel🥥)
[2] [Author page](/entities/authors/zesee.md)
[3] [Related topic](/concepts/skill-automation-engineering.md)
