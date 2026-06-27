---
type: "X Tweet"
title: "Antirez 用几千行 C 代码让 DeepSeek V4 Flash 在 MacBook 上跑 1M 上下文：算力民主化从口号变现实"
description: "**Redis 创始人用极致系统工程证明：2-bit 非对称量化足以让前沿 MoE 模型在消费级硬件上跑完整 Agent 循环。**  - ds4 是纯 C 实现的推理引擎，仅几千行代码，专为 DeepSeek V4 Flash 设计 - 核心创新：只对 MoE 中占 90% 体积的专家层做 2-bit 压缩，关键路径保持全精度 - 实测可在 128GB MacBook Pro 上跑 1M 上下文"
resource: "https://x.com/AYi_AInotes/status/2053121974734291359"
tags:
  - "x-news"
  - "highlights"
  - "author:AYi_AInotes"
timestamp: "2026-05-09T19:17:37.604Z"
x_tweet_id: "2053121974734291359"
x_author: "阿绎 AYi"
x_handle: "AYi_AInotes"
x_created_at: "2026-05-09T14:36:38.000Z"
x_engagement:
  likes: 2842
  retweets: 427
  replies: 80
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "edge-inference-optimization"
x_source: "ai-trend-digest"
---

# Antirez 用几千行 C 代码让 DeepSeek V4 Flash 在 MacBook 上跑 1M 上下文：算力民主化从口号变现实

## 摘要

**Redis 创始人用极致系统工程证明：2-bit 非对称量化足以让前沿 MoE 模型在消费级硬件上跑完整 Agent 循环。**

- ds4 是纯 C 实现的推理引擎，仅几千行代码，专为 DeepSeek V4 Flash 设计
- 核心创新：只对 MoE 中占 90% 体积的专家层做 2-bit 压缩，关键路径保持全精度
- 实测可在 128GB MacBook Pro 上跑 1M 上下文的 coding agent，YC CEO Garry Tan 亲自转发背书

这不是「量化的胜利」，是「系统工程思维对暴力堆算力的降维打击」。当一个顶级黑客用几千行 C 代码做到大厂烧几十亿的事，算力民主化的叙事才真正从口号变成了现实。但 2-bit 量化在极端推理场景下的鲁棒性仍需更多验证。

## 原文

Damn，Redis创始人用一个C文件，干翻了大厂烧几十亿的GPU集群。

Antirez，那个写出Redis的传奇黑客，昨天开源了ds4。

一个专门为DeepSeek V4 Flash写的原生推理引擎，只有几千行C代码。

它做到了一件很多人都觉得不可能的事：
把拥有1M上下文窗口、能跑完整coding agent循环的准前沿模型，完整跑在一台普通的128GB MacBook Pro上。

YC CEO Garry Tan看完直接转发，只说了一句话：
“正在下载… 1M上下文+可用的coding agent能力，全在一台128GB MacBook上，这太疯狂了🤯”

这已经不是一个普通的量化项目那么简单了铁汁们，
属于顶级黑客用极致的系统工程，把闭源实验室烧几十亿才能玩的东西，压到了每个人的笔记本里。

他的三个黑客级操作，每一个都颠覆了行业常识：

1. 不对称2-bit量化：
只对MoE里占90%体积的专家部分做2-bit压缩，所有关键路径保持全精度。
质量损失极小，Antirez本人亲测“coding agent工作良好，能可靠调用工具”。

2. 把KV Cache扔到SSD：
很多人都觉得KV Cache必须放内存，1M上下文会直接炸掉128GB内存。
他直接把KV Cache搬到了苹果的高速SSD上，用磁盘当扩展内存，彻底突破了硬件天花板。

3. 纯Metal原生优化：
没有任何多余的封装，
没有通用框架的开销，
所有代码只为Apple Silicon写，
只为DeepSeek V4 Flash写。

实测性能：M3 Max 128GB上稳定27 tok/s。

不算快，但对本地跑agent循环来说，完全够用了。

你不用再给OpenAI付API费，不用再担心数据泄露，不用再忍受网络延迟。

所有的AI能力，完完全全在你自己的电脑里。

卧槽，这才是真正的革命，
过去AI的权力攥在少数几家大厂手里，他们有GPU集群，定价格，甚至说删就删。

现在，一个黑客用几千行C代码，就把这个权力还给了每一个开发者。

开源AI真的是不可阻挡的，
大厂烧几十亿训练出来的模型，只要权重一开源，

全世界的黑客就会用你想象不到的方式，把它优化到每一个能跑的设备上。

今天是MacBook，明天是手机，后天是手表，太让人兴奋了！

2026年5月9日，AI终于从云端的神坛，落到了每个人的笔记本里。

或许这一天，会被写进历史！


## 元信息

- **作者**: 阿绎 AYi ([@AYi_AInotes](https://x.com/AYi_AInotes))
- **发布时间**: 2026-05-09T14:36:38.000Z
- **抓取时间**: 2026-05-09T19:17:37.604Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 2842 · 🔄 427 · 💬 80 · 🔖 0 · 👁 0
- **关联主题**: [edge-inference-optimization](/concepts/edge-inference-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/AYi_AInotes/status/2053121974734291359) — @AYi_AInotes (阿绎 AYi)
[2] [Author page](/entities/authors/ayi-ainotes.md)
[3] [Related topic](/concepts/edge-inference-optimization.md)
