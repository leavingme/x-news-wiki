---
type: "source"
title: "Anthropic 工程负责人手机管 5000 个 Agent：「Loop」模式正在重定义开发者与 AI 的关系"
description: "**Boris Cherny（Anthropic 工程负责人）揭示了一种已在生产环境运行的工作范式：手机端常驻 5-10 个 session、数百个 Agent，夜间数千个 Agent 通过 cron 自主执行深度任务。** - 他将此称为「Loop」——用 Claude 的 cron 能力按分钟/小时/天频率自驱任务 - TRAE SOLO 首次实现移动端/Web/桌面三端同步，Agent 场景"
resource: "https://x.com/i/status/2052172481650159690"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-07T01:18:53.498Z"
x_tweet_id: "2052172481650159690"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-06T23:43:41.000Z"
x_engagement:
  likes: 85
  retweets: 10
  replies: 23
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2052172481650159690"
created: "2026-05-06"
updated: "2026-06-26"
sha256: "7074c0a074fd40311fe6b4f9af66f426b95b56994ff0018ffa5c02c0914ea335"
sources:
  - "/sources/highlights/2026-05-07/00__dotey__anthropic-工程负责人手机管-5000-个-agent-loop-模式正在重定义开发者与-ai-的关系.md"
---

# Anthropic 工程负责人手机管 5000 个 Agent：「Loop」模式正在重定义开发者与 AI 的关系

## 摘要

**Boris Cherny（Anthropic 工程负责人）揭示了一种已在生产环境运行的工作范式：手机端常驻 5-10 个 session、数百个 Agent，夜间数千个 Agent 通过 cron 自主执行深度任务。**
- 他将此称为「Loop」——用 Claude 的 cron 能力按分钟/小时/天频率自驱任务
- TRAE SOLO 首次实现移动端/Web/桌面三端同步，Agent 场景从电脑前扩展到全天候
- 核心变化：Agent 不再是「坐在电脑前发出指令」，而是「设定目标后自主运转，人只在关键节点介入」

这不只是一个 Anthropic 员工的个人习惯分享，而是 Agent 工程范式的信号：当 Agent 的管理变成「运维」而非「操作」，开发者的核心技能就从「写代码」变成了「设计任务编排」。手机端成为 Agent 指挥塔，意味着 Agent 的使用门槛正在从工程师向所有知识工作者扩散。

## 原文

Boris Cherny（Anthropic 工程负责人）在最近的红杉 AI Ascent 大会上说，他现在大部分工作从手机完成。Claude App 里常驻 5 到 10 个 session、几百个 Agent，夜里有几千个在跑深度任务。他管这种做法叫 Loop，让 Claude 用 cron 起一个定时任务，可以每分钟、每五分钟、或者每天跑一次。

我本来还不太习惯用手机操作 Agent。这几天受邀测试最新版的 TRAE SOLO Mobile，刻意多在手机上试用，越用越能理解 Boris 说的那种变化。
This content is only supported in a Feishu Docs
这次 TRAE SOLO 首次实现了移动端、Web 端、桌面端（含 Windows 版）的全量开放，并真正做到三端同步联动，让 Agent 使用的场景大幅扩展。我在手机端体验了几天，结合官方新推出的功能，一些感受：

【1】Agent 已经不是程序员专属

打开 TRAE SOLO，首页让我先选模式：Code 还是 MTC（More Than Coding，意思是“不只是写代码”）。Code 模式好理解，写代码、跑 Git、看 Diff，而 MTC 模式则全面覆盖了写文档、数据分析、报表生成等日常办公场景。

从 Claude Cowork 发布开始就已经有了这个趋势，上周 Codex 的升级也是宣称：“用 Codex 做几乎一切工作（use Codex for (almost) everything）”。

TRAE SOLO 最新的升级同样顺应了这个趋势，从一个编程 Agent 泛化到了通用 Agent。

最新版本特别强化了飞书 CLI 接入功能。现在只要简单授权，就能在 TRAE SOLO 里直接操作飞书文档：例如，输入一句指令，“帮我整理一份本月 AI 编程工具市场动态”，Agent 会自动去网上检索，最后直接生成飞书文档或者动态网页，完全不需要人工再去排版或复制粘贴。

与过去“AI 给文字、用户再粘到飞书”的繁琐流程相比，这种一步到位的体验已经完全不是一回事了。

【2】三端连起来是什么体验

这次 TRAE SOLO 的一个大动作是三端（手机、Web、桌面端）全量开放，不再需要邀请码，所有用户都能用。

单独看 Mobile 端，它主要解决随时下发任务和确认任务的问题。但只有当 Mobile、Web 和 Desktop（包括最新上线的 Windows 版）真正打通之后，你才能真正做到随时随地让 Agent 持续执行任务。

过去云端执行环境总有局限，不能访问本地工具。而 TRAE SOLO Mobile 解决了这个痛点——只要完成简单的设备配对，你的手机就可以直接控制云端环境与本地多台设备。任务信息在所有设备之间实时同步，手机端下发的任务可以立即在 Web 和 Desktop 端查看执行进度，反过来也一样，真正实现跨设备的无缝接力。

比如上周末我在外面看孩子踢比赛，间歇刷手机，看到一篇不错的英文技术文章，顺手在 TRAE SOLO Mobile 上给 Agent 发了条指令：“把这篇文章翻译成中文，写一份推荐稿”，家里的 TRAE SOLO Desktop 就会启动我一套配置好工作流开始工作。等比赛结束回到家，打开电脑，稿子已经在那了。这种感觉有点像你出门前跟一个助手说了句话，回来活儿已经干完了。

【3】手机是用来指挥 Agent 的意图路由器，不是用来操作电脑的

这个区分挺关键。我之前不太爱用手机端办公，潜意识觉得是在用手机操作电脑。但是转换一下：“人操作 Agent，Agent 操作电脑”，那么用手机就很自然了。你不需要在小屏幕上精确点击什么按钮，你只需要说清楚你要什么。

用手机还有个障碍是输入速度，打字慢。TRAE SOLO 手机端有语音交互讨论功能，可以跟 AI 语音对话讨论一个问题，讨论结束后自动生成会议纪要，然后直接从手机把工作任务派发出去，电脑端同步接上后续操作。一部手机可以连接管理云端环境加多台 PC，在环境选择面板里挑一下设备和工作目录，剩下的全部交给 Agent。

这个功能在外面的时候特别好用。走路的时候、坐地铁的时候，想到一个点子，按住说话就行了，比打字快很多。过去这些碎片时间里冒出来的想法，要么记在备忘录里回头再处理，要么干脆就忘了。现在一句话就能让 Agent 开始干活。

【4】不着急的事，让定时任务自己跑

回到 Boris Cherny 跑几百个 Agent 的场景。做法很简单，让 Claude 用 CRON 给自己设一个重复执行的任务，一分钟跑一次、五分钟跑一次、每天跑一次，都行。

Boris 开着几十个定时任务，举三个例子。
一个 Loop 在照看他的 PR：CI 挂了就去修，需要 rebase 就自动 rebase。
一个 Loop 在维护整个项目的 CI 健康，发现 flaky test（不稳定的测试）就去定位修复。
还有一个 Loop 每 30 分钟从 Twitter 上抓他的反馈，自动聚类成几个主题汇报给他。

我自己也在用类似的方式。我有一个定时任务监控我 GitHub 上开源项目的 Issues，有人提了 Issue 就自动总结并给出处理意见，我看一眼觉得没问题，再指示 Agent 去操作。还有一个定时任务盯着我 X 的收藏夹，我平时刷到好文章随手收藏，它帮我自动抓取到本地，英文的还会翻译成中文，到时候集中看就行。

很多需求其实没那么紧急，但需要持续做。每天看一眼竞品动态、每周整理一次行业新闻、每月生成一次数据报表，这些活适合扔给定时任务。

现在 TRAE 的桌面端和网页端都已支持定时任务，无论是在云端还是本地环境，都能稳定地自动执行。比如你告诉 Agent：“每天早上 10 点发一份最新的 AI 新闻动态整理”，第二天早上工作台就会自动收到文档。你只需要专注于真正有创造性的判断，把那些重复且不着急的任务统统交给 Agent。

总结与体会

整体来说，这次对 TRAE SOLO Mobile 试用的感受就是：
- Agent 使用门槛大大降低，不再只是程序员专属，很多日常办公、写作场景已经可以由 Agent 来做了。
- 三端真正打通后，无论何时何地，都能轻松管理并延续任务。
- 手机不再是远程桌面，而是随时随地的“意图路由器”。
- 通过 Loop 定时机制，真正把重复且耗时的任务自动化，让用户只做关键决策。

Boris 说他夜里有几千个 Agent 在跑，很多人大概觉得这是大厂工程师的特权。但我这几天的体感是，这件事的门槛已经比想象中低很多了。一部手机、一台电脑、一个 Agent 工具，你就可以开始把重复的事交出去。未来办公的趋势，或许就是这种“人随时随地指挥 Agent、Agent 做具体工作、人只负责验收成果”的模式吧。

推荐可以去用下 TRAE SOLO Mobile，体验随时随地指挥 Agent 干活的感受。

想试用的 Mac 可以去官网下载了——国内：https://t.co/mTWzdHDraA；国际：https://t.co/yJLmbFTQBg


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-06T23:43:41.000Z
- **抓取时间**: 2026-05-07T01:18:53.498Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 85 · 🔄 10 · 💬 23 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2052172481650159690) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
