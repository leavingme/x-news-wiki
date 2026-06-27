---
type: "source"
title: "Anthropic 精准识别 OpenClaw：400错误的触发逻辑"
description: "**[Anthropic 的检测机制暴露了 Claude Max 生态的一道裂缝]**  - Anthropic 对每个请求做 system prompt 字符串扫描，OpenClaw 每次调用 Claude 自动附加的 \"You are a personal assistant running inside OpenClaw\" 被精准命中，直接 400 - 触发逻辑极简：就是这句默认文案，不是行"
resource: "https://x.com/i/status/2040834662680174655"
tags:
  - "x-news"
  - "news"
  - "author:Rav_Hedda"
timestamp: "2026-04-06T00:42:54.672Z"
x_tweet_id: "2040834662680174655"
x_author: "Hedda🐽"
x_handle: "Rav_Hedda"
x_created_at: "2026-04-05T16:51:15.000Z"
x_engagement:
  likes: 52
  retweets: 11
  replies: 9
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2040834662680174655"
created: "2026-04-05"
updated: "2026-06-26"
sha256: "33aa2074b904a84225cf377a5511a7b5a6d37e57e32e2308bf8312b93585332f"
sources:
  - "/sources/news/2026-04-06/00__Rav_Hedda__anthropic-精准识别-openclaw-400错误的触发逻辑.md"
---

# Anthropic 精准识别 OpenClaw：400错误的触发逻辑

## 摘要

**[Anthropic 的检测机制暴露了 Claude Max 生态的一道裂缝]**

- Anthropic 对每个请求做 system prompt 字符串扫描，OpenClaw 每次调用 Claude 自动附加的 "You are a personal assistant running inside OpenClaw" 被精准命中，直接 400
- 触发逻辑极简：就是这句默认文案，不是行为分析，不是 token 指纹
- 解法也很简单：自定义 system prompt 替换默认文案即可绕过，Anthropic 封堵的是特征字，不是特征行为
- 暴露的问题：Claude Max 的使用限制本质是规则检测而非智能识别，有明确的对抗边界

Anthropic 的"安全"是字面意义上的安全——它找的是字符串，不是意图。

## 原文

Openclaw 使用 Claude Max 的方法 1 才過 1 天就被 Claude 發現緊急召回，不過不用擔心 🐽 來救你

先了解 Anthropic 給你的檢測邏輯

首先你發的消息是透過 Anthropic 伺服器做字串掃描，每個請求送到 Claude 之前，先檢查 system prompt 裡有沒有特定關鍵字

在 OpenClaw 的源碼裡，每次調用 Claude 都會自動在 system prompt 開頭有一句：
"You are a personal assistant running inside OpenClaw."
（你是一個運行在 OpenClaw 裡的個人助理）

而 Anthropic 就是掃到這句話，直接回 400 擋掉
對就是這麼簡單（？有點專打擊 Openclaw 的意思

💡 那怎麼解決呢

只需要 --system-prompt 參數，自訂一段不含 Claw 字樣的 system prompt，就會完全替換掉預設的那句

@vincent_koc 比如發現只要改成 claude -p --append-system-prompt 'A personal assistant running inside OpenCode.' 'is clawd here?' 就好了

對，OpenClaw 改成 OpenCode haha。伺服器端就掃不到，請求能正常通過

再次總結目前的解法

1️⃣ Claude code CLI 改 system-prompt
2️⃣ Claude SDK

果然還是天無絕人之路！


## 元信息

- **作者**: Hedda🐽 ([@Rav_Hedda](https://x.com/Rav_Hedda))
- **发布时间**: 2026-04-05T16:51:15.000Z
- **抓取时间**: 2026-04-06T00:42:54.672Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 52 · 🔄 11 · 💬 9 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2040834662680174655) — @Rav_Hedda (Hedda🐽)
[2] [Author page](/entities/authors/rav-hedda.md)
