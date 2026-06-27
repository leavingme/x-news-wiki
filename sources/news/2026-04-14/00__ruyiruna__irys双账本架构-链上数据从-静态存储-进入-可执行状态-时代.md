---
type: "X Tweet"
title: "Irys双账本架构：链上数据从「静态存储」进入「可执行状态」时代"
description: "**[存储与计算的边界正在消失，链上数据正在获得「行为能力」]  Irys的核心创新不是再造一条链，而是重构数据在链上的存在形态：  双账本分离验证与存储：Submit Ledger用轻量PoW+PoS做高速验证（号称10万TPS），Publish Ledger做长期存档，数据通过IrysVM直接被拿来跑逻辑。  对AI Agent的意义：当数据不再只是\"被存\"，而是可以\"被调用执行\"，链上AI工"
resource: "https://x.com/i/status/1975170784239710681"
tags:
  - "x-news"
  - "news"
  - "author:ruyiruna"
timestamp: "2026-04-14T00:45:15.125Z"
x_tweet_id: "1975170784239710681"
x_author: "0xluna"
x_handle: "ruyiruna"
x_created_at: "2025-10-06T12:06:26.000Z"
x_engagement:
  likes: 164
  retweets: 1
  replies: 181
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "ai-data-blockchain-verification"
x_source: "crawler"
---

# Irys双账本架构：链上数据从「静态存储」进入「可执行状态」时代

## 摘要

**[存储与计算的边界正在消失，链上数据正在获得「行为能力」]

Irys的核心创新不是再造一条链，而是重构数据在链上的存在形态：

双账本分离验证与存储：Submit Ledger用轻量PoW+PoS做高速验证（号称10万TPS），Publish Ledger做长期存档，数据通过IrysVM直接被拿来跑逻辑。

对AI Agent的意义：当数据不再只是"被存"，而是可以"被调用执行"，链上AI工作流的执行效率会大幅提升——数据在链上完成验证后直接进入计算闭环，省去了传统架构里冷存储到热计算的IO瓶颈。



gakki：双账本的本质是把数据生命周期切成两段——快审快验 vs 慢存重存。这套设计思路值得所有做链上AI数据基础设施的人参考，但10万TPS的验证数字需要实际压测验证，别当成真实性能。

## 原文

Irys  @irys_xyz  的底层魔法：让数据不只是“被存”，而是“会动”

Irys 的技术设计挺有意思，它不是在“造另一条链”，而是在重写数据这件事该怎么在链上存在。
它最核心的三个组件：双账本架构、IrysVM、Matrix Packaging，把存储、验证、执行、激励这几个环节串成了一个闭环。
结果就是——上传快、存得稳、还能直接拿数据跑逻辑。对 AI 代理和 dApp 开发者来说，这几乎就是梦寐以求的底层结构。

一、双账本架构：让验证和存储分工明确

Irys 把数据处理拆成两个账本：Submit Ledger（提交账本）和 Publish Ledger（发布账本）。

前者就像机场安检——所有上传的数据（比如 AI 模型、NFT 元数据、传感器日志）先在这里被快速验证。
验证内容包括完整性、重复率、格式，甚至新鲜度。节点用轻量版 PoW + PoS 混合共识确认，效率极高。
Irys 官方说他们的验证速度能到 10 万 TPS，比传统链高几个数量级。
验证通过后，数据再进入 Publish Ledger。
这里是长期存档区，数据会被打包进 Arweave 的底层结构里，永久存储、不可篡改。
价格方面，Irys 还接了 EMA（指数移动平均）预言机，会平滑成本波动——就算市场动荡，费用也能稳定。
这套分层机制的好处是：
Submit 负责速度，Publish 负责安全。
你既能“秒传”，又能“永存”，成本还比 Filecoin 或 AWS 低一个数量级。

AI 开发场景下，这特别关键。上传一个 10GB 的模型权重，用 Submit Ledger 秒过格式验证；
进了 Publish Ledger 之后，它就成了全球共享、可验证的公共资产，AI 代理随时能读。

二、IrysVM：让数据自己跑逻辑

传统的 EVM（以太坊虚拟机）主要管交易逻辑，不太会处理大块数据。
IrysVM 在这点上改进很大，它是 数据原生的虚拟机，能让文件本身带逻辑、能执行。

举几个场景：
验证数据完整性（不用额外预言机）
控制访问权限（比如：只有付费用户能访问某模型）

自动触发任务（比如：AI 训练完成后直接分发收益）
对 AI 来说，这几乎是“链上计算的转折点”。
想象下你在 Irys 上传一个模型，IrysVM 能在链上：
验证输入数据的哈希、执行推理、自动付版税。
整个流程全链上完成，没有中间人、没有信任风险。
而且它 EVM 兼容，Solidity 开发者几乎不用改代码就能迁移过来。
对于 DeFi、DePIN、NFT 开发者，这意味着他们能在链上直接操作数据本身。

三、Matrix Packaging：让节点老老实实干活
Matrix Packaging 是 Irys 的激励层，
它的任务是：防止矿工偷懒，保证数据真的被存好。
它通过 PoW + PoS 混合机制约束节点：

每个节点都得用 PoW 证明自己真的在存某个数据分片
同时要质押 IRYS 代币，作弊会被罚没

系统还会定期抽查，验证节点持有的数据是否完整

这机制像个“链上监工”——谁认真干活就拿奖励，偷懒直接罚。
结果就是数据丢失率几乎为零，可靠性接近 100%。

AI 或 DePIN 项目会很喜欢这点。
比如一个物联网传感器网络，设备每秒上传温度数据，Matrix Packaging 负责确保存储无误；
然后 IrysVM 根据温度触发智能合约（比如“超过 40°C 自动报警”）。
整条流程在链上跑完，不靠中心服务器。
四、这三块拼在一起，有点像“链上 AWS”

双账本负责“快 + 稳”

IrysVM 负责“智能 + 可执行”
Matrix Packaging 负责“激励 + 审核”
这一套组合，让 Irys 能稳定跑 PB 级数据，性能是 Filecoin 的上千倍。
更重要的是，它的费用可预测、逻辑自动化，
这让 AI 模型、去中心化科研（DeSci）、链上内容存储都有了现实落地的基础。

社区有人形容它是 “AWS + Solidity + Arweave 的混合体”，我觉得挺贴切的。如果你是开发者，可以去测试网玩下 https://t.co/W3XiPBn7GT，感受一下它的数据流速度。


## 元信息

- **作者**: 0xluna ([@ruyiruna](https://x.com/ruyiruna))
- **发布时间**: 2025-10-06T12:06:26.000Z
- **抓取时间**: 2026-04-14T00:45:15.125Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 164 · 🔄 1 · 💬 181 · 🔖 0 · 👁 0
- **关联主题**: [ai-data-blockchain-verification](/concepts/ai-data-blockchain-verification.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/1975170784239710681) — @ruyiruna (0xluna)
[2] [Author page](/entities/authors/ruyiruna.md)
[3] [Related topic](/concepts/ai-data-blockchain-verification.md)
