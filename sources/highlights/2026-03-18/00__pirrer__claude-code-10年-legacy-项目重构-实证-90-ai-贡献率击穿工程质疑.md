---
type: "source"
title: "Claude Code「10年 legacy 项目重构」实证：90% AI 贡献率击穿工程质疑"
description: "**【AI 软件工程从「玩具」走向「生产工具」的临界点已至】**  • **质疑与验证**：145 天前被 V2EX 社群嘲讽「没活硬整」「PHP 弱类型重构是噩梦」的项目，现已成功上线 • **规模与路径**：7,500 个 PHP 文件，跨越 Laravel 5.2→12 共七个主版本，AI 工作量占比超 90% • **真实成本**：Claude Max 订阅 + Opus 模型，团队全员账"
resource: "https://x.com/i/status/2034208585534849052"
tags:
  - "x-news"
  - "highlights"
  - "author:pirrer"
timestamp: "2026-03-18T12:43:17.115Z"
x_tweet_id: "2034208585534849052"
x_author: "fox hsiao"
x_handle: "pirrer"
x_created_at: "2026-03-18T10:01:35.000Z"
x_engagement:
  likes: 68
  retweets: 2
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "claude-code-ecosystem"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2034208585534849052"
created: "2026-03-18"
updated: "2026-06-26"
sha256: "a2497afaca7f1f98e2bfaff6aa72d3407577c86aa6daaad2a9b5ecf84b253d6a"
sources:
  - "/sources/highlights/2026-03-18/00__pirrer__claude-code-10年-legacy-项目重构-实证-90-ai-贡献率击穿工程质疑.md"
---

# Claude Code「10年 legacy 项目重构」实证：90% AI 贡献率击穿工程质疑

## 摘要

**【AI 软件工程从「玩具」走向「生产工具」的临界点已至】**

• **质疑与验证**：145 天前被 V2EX 社群嘲讽「没活硬整」「PHP 弱类型重构是噩梦」的项目，现已成功上线
• **规模与路径**：7,500 个 PHP 文件，跨越 Laravel 5.2→12 共七个主版本，AI 工作量占比超 90%
• **真实成本**：Claude Max 订阅 + Opus 模型，团队全员账号，总周期约 3 个月（2 个月开发 + 1 个月测试）
• **核心风险点**：AI 会「自作聪明」改动业务逻辑，需大量 code review 纠偏——这不是无监督自动化，而是「人机协作」的新范式

**gakki 锐评**：那些说「AI 只能写 demo」的声音正在失去说服力，但这个故事的真正启示是——AI 不会取代工程师，而是取代「不写测试、不做 review」的工程师。

## 原文

Claude Code 升級 10 年老專案行嗎？

145 天前，有人在中國 V2EX 發了一篇文章，說公司新來的技術 leader 準備用 Claude Code 把一個跑了快 10 年的 Laravel 5.2 專案升級到 Laravel 12。這個 leader 有 20 年開發經驗，但幾乎不懂 PHP，他的計畫是讓 AI 來做主力。
社群的反應很一致：嘲諷。「沒活硬整」「AI 帶來的自信心膨脹」「PHP 弱型別重構簡直是噩夢」，大部分留言認為這件事不可能成功，甚至覺得根本不該做。

145 天後，同一個作者回來更新了。升級完成，已經上線。

看一下執行細節。專案規模是接近 7,500 個 PHP 檔案，升級路徑是 5.2 → 5.3 → 5.8 → 6.x → 8.x → 11.x → 12.x，橫跨七個大版本。整個過程花了大約兩個月開發加一個月測試，作者說 AI 的工作佔比至少 90%。團隊用的是 Claude Max 訂閱搭配 Opus 模型，公司替每個開發者都開了帳號。

過程中碰到的最大問題是 Claude 會改動現有的業務邏輯，團隊花了大量時間做 code review 確認 AI 沒有偷改功能行為。每個升級步驟都做了獨立的 git commit，方便回溯和比對。

這個案例有意思的地方在於角色分工。技術 leader 不懂 PHP，但他懂架構、懂升級策略、懂怎麼拆解步驟和驗證結果。AI 負責的是大量重複性的程式碼修改、語法適配、套件相容性處理。人定方向，AI 做苦工，人再回來驗收。

145 天前社群覺得這件事荒謬，145 天後它變成了一個可參考的實戰案例。差別可能在於，大部分人想的是「讓 AI 寫程式」，但這個團隊做的是「讓 AI 在人的監督下搬磚」。

來源：V2EX t/1167789、t/1199066
---
📷 Threads / Facebook / 電子報「狐說八道」
#ClaudeCode #AI #Laravel #PHP #軟體開發 #程式設計


## 元信息

- **作者**: fox hsiao ([@pirrer](https://x.com/pirrer))
- **发布时间**: 2026-03-18T10:01:35.000Z
- **抓取时间**: 2026-03-18T12:43:17.115Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 68 · 🔄 2 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-ecosystem](/concepts/claude-code-ecosystem.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2034208585534849052) — @pirrer (fox hsiao)
[2] [Author page](/entities/authors/pirrer.md)
[3] [Related topic](/concepts/claude-code-ecosystem.md)
