---
type: "X Tweet"
title: "把闲置游戏PC变算力节点：Bless用WASM撕开\"去中心化算力\"的入场壁垒"
description: "**一句话：去中心化算力网络失败的原因不是技术，而是门槛；Bless选择用闲置设备+WASM绕过这道墙。**  传统去中心化算力失败于四大壁垒：技术门槛高（WASM Runtime解决）、验证机制死板（动态验证）、资源分配僵化（静态分配）、性能不足（边缘节点并行）。  Bless的解法：不做数据中心的替代者，而是把全球闲置设备（游戏PC、笔记本、手机）的空闲算力整合成共享计算网络。核心是WebAs"
resource: "https://x.com/i/status/1953729511406830075"
tags:
  - "x-news"
  - "news"
  - "author:egyptk6"
timestamp: "2026-04-18T12:44:58.621Z"
x_tweet_id: "1953729511406830075"
x_author: "Udon🍜うどん(🌸, 🌿)"
x_handle: "egyptk6"
x_created_at: "2025-08-08T08:06:28.000Z"
x_engagement:
  likes: 86
  retweets: 0
  replies: 103
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "ai-compute-on-chain"
x_source: "crawler"
---

# 把闲置游戏PC变算力节点：Bless用WASM撕开"去中心化算力"的入场壁垒

## 摘要

**一句话：去中心化算力网络失败的原因不是技术，而是门槛；Bless选择用闲置设备+WASM绕过这道墙。**

传统去中心化算力失败于四大壁垒：技术门槛高（WASM Runtime解决）、验证机制死板（动态验证）、资源分配僵化（静态分配）、性能不足（边缘节点并行）。

Bless的解法：不做数据中心的替代者，而是把全球闲置设备（游戏PC、笔记本、手机）的空闲算力整合成共享计算网络。核心是WebAssembly安全沙箱，让普通设备参与而无需专业硬件。

这实际上是在重新定义"算力民主化"的边界——不是让普通人建矿场，而是让普通人的设备在闲置时成为网络的一部分。

gakki锐评：如果WASM能真正解决安全隔离问题，边缘算力网络的规模效应会比传统云计算更具成本优势。这条路一旦跑通，AWS/GCP的定价模型将面临根本性质疑。

## 原文

⬜◻️⬜◻️⬜◻️⬜----🍜
最近花時間把 @theblessnetwork  的介紹看完，感覺這團隊是真的想解決「去中心化運算」的問題，現在也是一步步把落地中~

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸🔸傳統的去中心化運算為什麼沒起來？

很簡單 Prohibitive Technical Barriers（技術門檻高）、Rigid Verification Systems（驗證機制死板）、Static Resource Allocation（資源分配僵化），加上性能限制，搞到一般人根本懶得參與，要有專門硬體、還得自己 SET 網路、安全性又有疑慮，太難了。

#Bless 比較不一樣，它不去跟 AWS、GCP 拼資料中心，而是直接把我們手上正在用的或 Idle Devices（閒置設備） 去 run 你的 gaming PC、筆電、或 手機，只要有空檔，都可以用作 全球共享計算網（world’s first shared computer） 的一部分。

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸這背後有幾個關鍵技術：

• WebAssembly（WASM） Secure Runtime

• 用 Blockless Runtime 沙盒執行，完全隔離程式，不怕惡意代碼。

• 再加上 ZAWA（zkSNARK-backed WASM emulator），運算過程可用零知識證明驗證，安全又保護隱私。

• 語言支援超多（Rust、C/C++、Swift、Kotlin…），開發者門檻低很多。

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸Dynamic Resource Matching（動態資源匹配）

• 不同設備會先做 profiling（CPU、RAM、網路、位置），再分配最適合的任務。

• 用 Simulated Annealing（模擬退火演算法） 找最好配對，一開始允許探索，最後是幾乎完美的分配，有效率又安全。

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸Adaptive Verification（自適應驗證）

• 不同任務用不同驗證方式：簡單的做多節點比對，複雜的用 ZKP。

• 避免一刀切的共識機制，提升性能又不犧牲安全。

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸Advanced Security Design（進階安全設計）

• Temperature-controlled randomization：用溫控隨機令攻擊者猜不到任務分配。

• 防 Sybil Attack：從硬體特徵、歷史表現、地理位置多維度檢查節點。

• Greco-Latin Square 分配法，防止節點集中化。

• Hybrid Architecture（混合架構）

• 低門檻：0.5 vCPU + 1GB RAM 就能跑。

• 高性能：Native Nodes（高配硬體）、Blockchain Orchestration Nodes、甚至 Chrome Extension Nodes 令用戶直接用瀏覽器貢獻算力。

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸應用場景（Use Cases） 也蠻接地氣：

• Machine Learning & AI Processing：支援分散式訓練（model sharding）、Federated Learning（聯邦學習），AI inference 在 edge 跑，延遲超低。

• Gaming：支援 Hierarchical State Synchronization（分層狀態同步），物理模擬在玩家附近運行，延遲低，還能做分散式 anti-cheat。

• DeFi & On-chain Applications：跨鏈運算層（neutral execution layer）、複雜風控計算、ZKP 审计紀錄。

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸Partnerships：

              • Space and Time：智慧城市、EV 充電網、即時交通優化。

               • Monad：高頻交易（High-frequency trading）代理人，10,000 TPS + 1s - finality，低延遲去中心化策略交易。

╭─────✦✦─⋆⋅☆⋅⋆───╮
🔸測試網數據（Testnet Performance） ：

• 5,481,371 個註冊節點

• 1,131,503 週活節點

• 210 個國家/地區覆蓋

• 平均 failover 反應 900ms

• 可在 1 小時內把 55,000 部影片從 1080p 升級到 4K

╭─────✦✦─⋆⋅☆⋅⋆───╮
我自己覺得 @theblessnetwork  的價值在於，它不是為了去中心化而去中心化，而是用去中心化去解決現在的問題，又低門檻＋安全架構＋廣泛應用場景，如果經濟誘因設計得好，那之後算力共享就變成好日常的事了。

當然現在還是 testnet，主網一上線，還得還要面對很多法規、規模化運營、等等東西，但至少就技術基礎跟測試成績來看，#Bless 是少數我覺得有機會挑戰 AWS / GCP 模式 的 Web3 基礎設施之一。


## 元信息

- **作者**: Udon🍜うどん(🌸, 🌿) ([@egyptk6](https://x.com/egyptk6))
- **发布时间**: 2025-08-08T08:06:28.000Z
- **抓取时间**: 2026-04-18T12:44:58.621Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 86 · 🔄 0 · 💬 103 · 🔖 0 · 👁 0
- **关联主题**: [ai-compute-on-chain](/concepts/ai-compute-on-chain.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/1953729511406830075) — @egyptk6 (Udon🍜うどん(🌸, 🌿))
[2] [Author page](/entities/authors/egyptk6.md)
[3] [Related topic](/concepts/ai-compute-on-chain.md)
