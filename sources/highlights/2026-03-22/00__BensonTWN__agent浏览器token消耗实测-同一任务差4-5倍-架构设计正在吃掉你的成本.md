---
type: "X Tweet"
title: "Agent浏览器Token消耗实测：同一任务差4.5倍，架构设计正在吃掉你的成本"
description: "**浏览器 Agent 的 Token 效率差距被首次量化，Vercel 的 agent-browser 以 13.5KB 完胜 Chrome DevTools MCP（32KB）和 Playwright（58KB）。**  • 设计哲学分野：Vercel 只返回可交互元素，过滤静态文本；Google/Microsoft 坚持「工程师视角」的完整 DOM，导致 2-4 倍冗余 • 成本敏感场景下，"
resource: "https://x.com/i/status/2035554628830700000"
tags:
  - "x-news"
  - "highlights"
  - "author:BensonTWN"
timestamp: "2026-03-22T12:43:08.321Z"
x_tweet_id: "2035554628830700000"
x_author: "Benson Sun"
x_handle: "BensonTWN"
x_created_at: "2026-03-22T03:10:16.000Z"
x_engagement:
  likes: 230
  retweets: 39
  replies: 13
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-browser-token-efficiency"
x_source: "crawler"
---

# Agent浏览器Token消耗实测：同一任务差4.5倍，架构设计正在吃掉你的成本

## 摘要

**浏览器 Agent 的 Token 效率差距被首次量化，Vercel 的 agent-browser 以 13.5KB 完胜 Chrome DevTools MCP（32KB）和 Playwright（58KB）。**

• 设计哲学分野：Vercel 只返回可交互元素，过滤静态文本；Google/Microsoft 坚持「工程师视角」的完整 DOM，导致 2-4 倍冗余
• 成本敏感场景下，「浏览器代理专用架构」正在击败「通用自动化工具 retrofit」
• 暗示更深层趋势：Agent 时代的基础设施需要「AI 原生」重新设计，而非传统工具的 API 包装

---

**gakki 的锐评**：这 4.5 倍差距是「 retrofit 税」。太多所谓的 Agent 工具只是把旧东西包了一层，真正的 AI Native 设计会从根本上重构信息传递范式——少即是多，尤其在 Token 经济学语境下。

## 原文

你叫 AI 幫你開瀏覽器查東西，有沒有發現 token 燒特別快？我最近發現同一個任務，換不同工具做，token 消耗最多差 4.5 倍。  

現在主流有三個工具讓 AI 操作瀏覽器。我拿同一個任務測了一下：開 Hacker News，取首頁文章列表。  

第一個，Google 的 Chrome DevTools MCP
讓 AI 像前端工程師一樣操作瀏覽器，看 DOM、看 console、跑 JavaScript、分析 network、跑 performance trace。功能最完整。回傳 32 KB，約 9,500 tokens。  

第二個，Microsoft 的 Playwright CLI
瀏覽器自動化的老牌工具，支援多瀏覽器、persistent session、network mock、cookie 管理。測試和爬蟲場景很強。回傳 58 KB，約 16,000 tokens。三個裡面最肥。  

第三個，Vercel 的 agent-browser
從第一天就只為 AI 設計。預設只回傳可互動的元素，按鈕、連結、輸入框，靜態文字全部過濾掉。回傳 13.5 KB，約 3,500 tokens。  

同一個頁面：  
agent-browser 3,500 tokens 
Chrome DevTools MCP 9,500 tokens 
Playwright 16,000 tokens  
最省的跟最肥的差 4.5 倍。  

一個複雜任務跟瀏覽器來回幾十次，這個差距累積起來很驚人。  

為什麼差這麼多？因為 Playwright 和 Chrome DevTools MCP 原本都是設計給人用的。

它們回傳的資訊很完整，完整到包含 AI 根本不需要的東西。每個靜態文字節點、每個裝飾性元素，全部都在 tree 裡面。  

agent-browser 的做法是反過來的。它從 AI 的需求出發：你要點按鈕？我只給你按鈕。你要填表單？我只給你輸入框。其他的東西，不回傳。

但三個工具各有各的場景。 

agent-browser 適合日常自動化，開網頁、抓資料、填表單，最省 Token。

Chrome DevTools MCP 適合 debug。你需要看 console 錯誤訊息、分析 network request、跑 JavaScript 的時候，其他兩個做不到。  

Playwright 適合需要複雜流程控制的場景。登入狀態保持、多分頁操作、network mock、cookie 管理。要繞過 bot 偵測的話，還有一個 rebrowser 的變體版本。  

我自己三個都裝著，看場景切換。日常跑 agent-browser，debug 開 DevTools MCP，需要登入態或 mock 的時候用 Playwright。  

之前沒注意到這個差距。發現之後調整了一下工具選擇，token 消耗量明顯下來了。  

我把 agent-browser 的連結放第一個回覆，推薦大家改用這個工具做日常瀏覽。


## 元信息

- **作者**: Benson Sun ([@BensonTWN](https://x.com/BensonTWN))
- **发布时间**: 2026-03-22T03:10:16.000Z
- **抓取时间**: 2026-03-22T12:43:08.321Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 230 · 🔄 39 · 💬 13 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2035554628830700000) — @BensonTWN (Benson Sun)
