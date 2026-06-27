---
type: "X Tweet"
title: "Polymarket 上的「印钞机」：清华学生的 100% 胜率 AI 交易 bot"
description: "**[AI 套利正在吞噬预测市场的无效定价区间]**  • 账号 k9Q2m：44,364 笔交易 100% 胜率，$1,430 → $1,550,750，单笔最大盈利 $23,600 • 核心武器：6 套对冲基金模块并行——LMSR 定价曲线预判、Kelly 仓位管理、EV 错价检测、KL  Divergence 跨周期套利 • 不是「判断」，是「计算」：每个 tick 同步跑 6 个模型，人类"
resource: "https://x.com/i/status/2033408985970422221"
tags:
  - "x-news"
  - "highlights"
  - "author:Mikocrypto11"
timestamp: "2026-03-16T12:43:05.885Z"
x_tweet_id: "2033408985970422221"
x_author: "0x_Miko"
x_handle: "Mikocrypto11"
x_created_at: "2026-03-16T05:04:15.000Z"
x_engagement:
  likes: 166
  retweets: 42
  replies: 10
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-crypto-agent-infra"
x_source: "crawler"
---

# Polymarket 上的「印钞机」：清华学生的 100% 胜率 AI 交易 bot

## 摘要

**[AI 套利正在吞噬预测市场的无效定价区间]**

• 账号 k9Q2m：44,364 笔交易 100% 胜率，$1,430 → $1,550,750，单笔最大盈利 $23,600
• 核心武器：6 套对冲基金模块并行——LMSR 定价曲线预判、Kelly 仓位管理、EV 错价检测、KL  Divergence 跨周期套利
• 不是「判断」，是「计算」：每个 tick 同步跑 6 个模型，人类还在思考时 bot 已完成建仓

**gakki 锐评**：当 AI 把金融市场变成纯计算题，「交易员」这个职业还剩多少人类溢价？

## 原文

一个清华学生，把 Anthropic 的 AI 用成了 Polymarket 上的提款机
$1,430 → $1,550,750

而且素材里给出的数据更夸张：
44,364 笔交易
100% 胜率
单笔最大盈利 $23,600
这个账号叫 k9Q2m

按这段素材的说法，他不是靠运气，也不是靠猜
而是把 6 套对冲基金常用公式 同时塞进 bot 里，每个 tick 都跑一遍
多数人还在判断
这个 bot 直接算

它跑的 6 个核心模块是：
1）LMSR Pricing
Polymarket 的价格沿对数曲线变化
bot 会提前算出自己的进场会带来多大价格冲击
比如市场给 BTC 5 分钟上涨 31¢，模型却判断这段曲线已经错价，于是先进去等修正

2）Kelly Criterion
每一笔都按最合适的仓位去下
不会大到把账户打爆，也不会小到没意义

3）EV Gap Detection
它一直在扫一个东西：
市场价格到底错了多少
比如市场给 30¢，真实概率被它算到 55¢，那 EV 就直接转正，触发进场

4）KL-Divergence
 BTC 5 分钟 和 15 分钟 市场本来就有关联
一旦两边漂开，它就当成套利信号
当统计距离超过 0.2，就开始标记机会

5）Bayesian Updates
新区块确认
成交量异动
价格跳动
这些新信息一进来，它就立刻更新概率
先验是 54%，新数据进来后，后验可能直接跳到 71%

6）Stoikov Execution
不是看到机会就冲
它会继续算一个更合适的执行价格
只在风险调整后仍然成立的位置成交

真正执行的时候，不是满足一个条件就下单。
而是这 6 层一起过筛：
LMSR 确认错价
EV gap 超过 5%

Kelly 允许仓位
Bayesian posterior 同意
KL-divergence 发现相关漂移
Stoikov 放行执行价格
只有这样，才会进场。=

也就是说，这已经不是普通意义上的“交易 bot”了
更像是一套 对冲基金框架，被搬进了 prediction market
素材最后那句其实点得很直白：

数学是公开的
edge 也是真的
真正的差别只在于：
大多数人从来没把它真正搭出来
这种把 6 个量化过滤器 同时塞进 Claude，再去跑 Polymarket 的打法，你觉得是未来的标准配置，还是只适合极少数真能把系统搭起来的人？


## 元信息

- **作者**: 0x_Miko ([@Mikocrypto11](https://x.com/Mikocrypto11))
- **发布时间**: 2026-03-16T05:04:15.000Z
- **抓取时间**: 2026-03-16T12:43:05.885Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 166 · 🔄 42 · 💬 10 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2033408985970422221) — @Mikocrypto11 (0x_Miko)
