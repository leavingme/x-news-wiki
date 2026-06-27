---
type: "source"
title: "宝玉拆解 AI Coding 报错处理：先恢复生产再追根因，别把所有锅甩给 AGENTS.md"
description: "**[AI Coding 报错处理不应一上来就改 AGENTS.md，要先按\"恢复生产→找根因→对症下药\"的工程顺序走]**  - 三层顺序：恢复生产（回滚/补丁 + 保留日志现场）→ 追 Root Cause（区分逻辑错误、边界条件缺失、需求理解偏差）→ 对症下药 - 预防手段必须随根因变化：边界条件→补测试用例；架构缺陷→重构；Review 漏洞→改流程；只有 AI 对项目特有约定缺乏了解时才"
resource: "https://x.com/i/status/2068231396015890449"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-06-20T07:18:11.956Z"
x_tweet_id: "2068231396015890449"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-20T07:16:05.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-engineering-discipline-bottleneck"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2068231396015890449"
created: "2026-06-20"
updated: "2026-06-26"
sha256: "a61d9ba2043739ceba34734ea84c71bf116dcda4bb7f282c8540c1f6afb0907f"
sources:
  - "/sources/highlights/2026-06-20/00__dotey__宝玉拆解-ai-coding-报错处理-先恢复生产再追根因-别把所有锅甩给-agents-md.md"
---

# 宝玉拆解 AI Coding 报错处理：先恢复生产再追根因，别把所有锅甩给 AGENTS.md

## 摘要

**[AI Coding 报错处理不应一上来就改 AGENTS.md，要先按"恢复生产→找根因→对症下药"的工程顺序走]**

- 三层顺序：恢复生产（回滚/补丁 + 保留日志现场）→ 追 Root Cause（区分逻辑错误、边界条件缺失、需求理解偏差）→ 对症下药
- 预防手段必须随根因变化：边界条件→补测试用例；架构缺陷→重构；Review 漏洞→改流程；只有 AI 对项目特有约定缺乏了解时才更新 AGENTS.md
- 实质是反对"用 .md 当万能膏药"的工程偷懒，把 AI Coding 的可靠性拉回传统软件工程纪律框架


宝玉锐评：这条最值得收藏的一点是——AI Coding 的 bug 首先是代码问题，其次才是 AI 上下文问题；别把 AGENTS.md 写成万能遮羞布，根因诊断不对永远改不完下一轮同样的错。

## 原文

一点不同意见。

如果是程序发生了错误，那首先这是代码问题，代码问题不一定是 Codex 的锅。你让它再怎么改 AGENTS.md，也不见得下次就不会犯同样的错误。

从软件工程的角度来说，通常处理错误的顺序是这样的：

1）恢复生产 
先恢复再找原因，尤其是线上紧急问题。要么回滚要么打补丁，先把生产恢复了再说。但也要注意保留日志和现场，方便后续追查。

2）找根因 
错误发生了，找 Root Cause 是必须的。到底是逻辑错误、边界条件没处理、还是对需求理解有偏差？不同的根因，对应不同的解法。

3）避免再次发生 
这一步当然没问题，但怎么做有讲究，不是一句更新 AGENTS.md 就能解决所有情况的。

比如边界条件没覆盖，那就加测试用例；代码架构有缺陷，那就重构；Code Review 流程有漏洞，那就改进 review 流程。具体怎么做，要根据根因来定。

那什么情况下才应该更新 AGENTS.md？

当错误的根因是 AI 对项目特有的约定或上下文缺乏了解的时候。
比如项目有特定的命名规范或目录结构约定，代码里看不出来；
比如某些 API 有隐含的使用限制，文档里没写清楚；
比如团队有特殊的测试规范或提交规范。

这些属于项目知识，写进 AGENTS.md 是合理的。

但如果一个 bug 应该靠测试来防，那就写测试；应该靠 Code Review 来防，那就改流程。把什么都往 AGENTS.md 里塞，反而会让它变得大而无用还占 Token，规则越多越不精准，AI 反而更容易忽略真正重要的那几条。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-20T07:16:05.000Z
- **抓取时间**: 2026-06-20T07:18:11.956Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [ai-engineering-discipline-bottleneck](/concepts/ai-engineering-discipline-bottleneck.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2068231396015890449) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/ai-engineering-discipline-bottleneck.md)
