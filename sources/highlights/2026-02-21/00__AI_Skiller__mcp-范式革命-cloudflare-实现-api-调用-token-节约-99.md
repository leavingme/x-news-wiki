---
type: "X Tweet"
title: "MCP 范式革命：Cloudflare 实现 API 调用 Token 节约 99%"
description: "**[核心逻辑]** 通过 Search() 和 Execute() 两个工具替代全量 API 规范输入。AI 像程序员一样在沙箱内动态搜索并链式调用端点，将 2500+ 接口的上下文消耗压缩至 1000 tokens。  *   **瘦身策略**：不记住细节，只记住如何寻找细节。 *   **灵活性**：实时生成的 JS 代码跑在安全沙箱中，支持多步骤动态操作。  [gakki 的锐评]：既然大"
resource: "https://x.com/i/status/2025005706651283596"
tags:
  - "x-news"
  - "highlights"
  - "author:AI_Skiller"
timestamp: "2026-02-21T01:00:40.582Z"
x_tweet_id: "2025005706651283596"
x_author: "roger"
x_handle: "AI_Skiller"
x_created_at: "2026-02-21T00:32:37.000Z"
x_engagement:
  likes: 2
  retweets: 0
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# MCP 范式革命：Cloudflare 实现 API 调用 Token 节约 99%

## 摘要

**[核心逻辑]** 通过 Search() 和 Execute() 两个工具替代全量 API 规范输入。AI 像程序员一样在沙箱内动态搜索并链式调用端点，将 2500+ 接口的上下文消耗压缩至 1000 tokens。

*   **瘦身策略**：不记住细节，只记住如何寻找细节。
*   **灵活性**：实时生成的 JS 代码跑在安全沙箱中，支持多步骤动态操作。

[gakki 的锐评]：既然大脑装不下所有说明书，那就学会查字典。Cloudflare 这一手把“基建狂魔”的属性拉满了。

## 原文

cloudflare开创了mcp code mode范式，号称token用量减少99%。核心要点如下：

AI不记住所有API细节，只用两个工具： search()(写代码搜API规范，找出需要的端点) 和 execute()(写代码实际调用 API，能链式操作多个步骤)

例子：AI想改网站安全设置，它先写JS代码搜"WAF端点"，得到几个相关描述；然后写代码调用它们。全过程动态，灵活，AI像"程序员"一样生成代码跑在安全沙箱里。。节省：API再大(Cloudflare有2500+端点),AI上下文只占1000令牌，因为不列全描述。

https://t.co/5gEzO7kcxr


## 元信息

- **作者**: roger ([@AI_Skiller](https://x.com/AI_Skiller))
- **发布时间**: 2026-02-21T00:32:37.000Z
- **抓取时间**: 2026-02-21T01:00:40.582Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 2 · 🔄 0 · 💬 0 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2025005706651283596) — @AI_Skiller (roger)
