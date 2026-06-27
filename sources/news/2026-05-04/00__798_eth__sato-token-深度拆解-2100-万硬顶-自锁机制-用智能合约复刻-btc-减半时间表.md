---
type: "X Tweet"
title: "Sato Token 深度拆解：2100 万硬顶 + 自锁机制，用智能合约复刻 BTC 减半时间表"
description: "**这不是又一个 Meme 币，而是一次用合约逻辑「压缩」BTC 经济模型的链上实验。**  - 2100 万总供给精确映射 BTC 上限，99% 自锁阈值（2079 万）对应 BTC 约 2035 年第六次减半临界点 - 基于 Uniswap v4 hook 构建指数型 bonding curve，每笔买入抬高下一价格，到硬上限永久自锁 - 项目方一字未提 BTC 对应关系，白皮书无注脚——「映"
resource: "https://x.com/798_eth/status/2051127322124988479"
tags:
  - "x-news"
  - "news"
  - "author:798_eth"
timestamp: "2026-05-04T07:17:45.033Z"
x_tweet_id: "2051127322124988479"
x_author: "798.eth 🍌🌍☮️🗡️👁️"
x_handle: "798_eth"
x_created_at: "2026-05-04T02:30:36.000Z"
x_engagement:
  likes: 136
  retweets: 23
  replies: 28
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "ai-trend-digest"
---

# Sato Token 深度拆解：2100 万硬顶 + 自锁机制，用智能合约复刻 BTC 减半时间表

## 摘要

**这不是又一个 Meme 币，而是一次用合约逻辑「压缩」BTC 经济模型的链上实验。**

- 2100 万总供给精确映射 BTC 上限，99% 自锁阈值（2079 万）对应 BTC 约 2035 年第六次减半临界点
- 基于 Uniswap v4 hook 构建指数型 bonding curve，每笔买入抬高下一价格，到硬上限永久自锁
- 项目方一字未提 BTC 对应关系，白皮书无注脚——「映射」是社区挖掘出来的叙事

gakki 锐评：sato 的技术设计确实精巧，但「桌面模型」这个叙事能否撑起 640 万美金市值，取决于社区是否接受它作为 BTC 的「以太坊镜像」。当前阶段，这更像是一个叙事实验而非金融资产。

## 原文

sato 是 BTC 的桌面模型

5 月 3 日部署的一个 token，叫 sato。建在 Uniswap v4 hook 上的 ERC20，发行机制是一条指数型 bonding curve。每注入一笔 ETH 进去，下一个买家面对的价格就抬一截，越往后越贵，到一个写死的硬上限就自锁。这个上限是 2100 万。

2100 万这个数字不是装饰，是一道精确铸入合约的题。sato 是中本聪那道一百多年的题，在以太坊上做的桌面压缩实验。

一、对应表

2100 万是 BTC 总供给上限。这件事项目方一字未提，白皮书只字不写注脚。

99% 这个自锁阈值对应历史累计 mint 达到 2079 万 sato 那一刻，合约里的字段叫 selfDeprecated 自锁，触发后 mint 永久死掉，sell 路径还活着。把这个点跟 BTC halving 表对照，BTC 99% 总量被挖出来的时点落在第六个减半周期内部，大约 2035 年前后。所以 sato 的自锁触发是 BTC 2035 临界点的链上彩排。

价格曲线是一条指数。BTC 价格 26 年的轨迹也是一条对数尺度大致线性、原尺度指数级的曲线。两边形状对得上。

时间压缩比是双轴对应里最显眼的一层。BTC 用 26 年走到 99%，sato 创世到现在 11 小时已经走完 88%，剩下 12% 估计再吃 1227 ETH 净注入，按现在节奏一两天到几周不等，压缩了 1000 倍。

二、机制差

BTC 指数上涨是经验事实。事后才看出曲线是指数。驱动它的是外部需求扩张、halving 供给冲击、货币贬值叙事三路复合。

sato 指数上涨是写死在合约里的算式，事先就是指数，无关需求。

所以 sato 不是 BTC 的等价物。它是把 BTC 的所有外部叙事剥离掉，只留发行机制那一层的纯数学版。这是 BTC 永远没法做的可控对照实验。把货币体制变化、长期持币者文化、ETF 流入这些噪声全部拿掉，看剩下的发行曲线本身能不能撑出价格 dynamics。

实验装置就在以太坊主网公开运行。没有黑箱，没有团队特权，没有 admin role。Token、hook、reserves 三件全 immutable，0.3% 手续费锁在 hook 里永远拿不出来，定位是 counterweight 不是 treasury。

合约里还藏了一个 philosophy() 字符串 getter。返回的内容是：

a specter has returned to ethereum: the specter of code that runs without an operator. the contract that exists at block zero is the contract that will exist forever. this must be specifically arranged for. we have arranged for it.

这是一份直接烧进合约本体的版本宣言。匿名团队走 cypherpunk 路线，跟 unipeg 那边 hadrian 把 essay 挂 ENS contenthash 是同一类姿态，只是 sato 这边把宣言写进了合约自己。

三、链上现状

数据快照截到区块高度 25,018,520，距创世块 25,015,094 大约 11 小时 25 分钟。

ethCum = 1076.06 ETH。这是合约用来驱动曲线的那个变量。net 累计，sells 会把它往下拉。

feesAccrued = 20.11 ETH。永久锁在 hook 里，0.3% 在每笔买卖上都扣，不可被任何路径取出。

hookBalance = 1096.17 ETH。Etherscan 上看到的合约 ETH 余额。等于 ethCum 加 feesAccrued 不多不少，账本完全闭合。

totalMintedFair = 18,558,999 sato。历史累计 mint，单调递增，决定 selfDeprecated 是否触发。当前 88.38%，离 99% 触发线还差 223 万 sato。反推一下，要让 ethCum 从现在的 1076 涨到触发那条线对应的 2303，还得再吃进去 1227 ETH 净注入。

这跟 BTC 矿工费的累积过程是同构的。BTC 每一笔交易付的 fee 进矿工口袋，sato 每一笔交易扣的 fee 进 hook 永久不可取的 counterweight。结构都是 round-trip 活动给底层注资，区别在于钱往哪里流。BTC 的 fee 是循环消耗的，进矿工再被矿工花出去。sato 的 fee 是单向沉淀的，进 hook 再也出不来。

四、三种 endgame

post-cap 命运不是单一确定的事，是协调性事件。三种结局每一种都跟 BTC 2140 之后的某个可能未来同构。

第一种，自锁触发，野池子有持续的叙事溢价撑住，curve 被 abandon 在自锁那一刻附近的高水位。没人愿意按机械价砸回 curve，ethCum 停在高位不动。这对应 BTC fee market 成功替代 block reward 的那个未来，矿工靠手续费维持算力，安全模型不受冲击。sato 这边对应的是收藏溢价、品牌叙事、社区共识接管定价权，curve 退化为一条没人光顾的最后底线。

第二种，自锁触发，持有人协调失败开始砸 curve 退出。反向曲线指数下行，价格沿原路急速回落。这对应 BTC hashrate 崩盘的安全危机未来：fee market 不够厚，矿工大批离场，算力跌到危险水位。sato 这边的对应是 curve 被一路砸到很低水位，活体 supply 持续下降，ethCum 退回创世附近。

第三种最有意思。99% 永远触发不了，sato 卡在 95-97% 那段缓缓停下来。原因是曲线尾部太陡，每个百分点要吃越来越多的 ETH，marginal buyer 找不到。最后 4% 要再吃 805 ETH，前 88% 一共也才用了 1076 ETH。节奏放缓到一定程度，市场失去耐心，热度退潮，自锁线永远在前方一步之遥。

第三种结局反而最像 BTC 的真实未来。BTC 不是某一刻的断崖事件，是一百年慢慢拉长的尾巴。sato 如果卡在 97% 永远不下棋，是更逼真的 BTC 模拟，不是更失败的版本。

五、协调博弈

selfDeprecated 触发那一刻起，砸还是扛这道题不只是个人退出策略，是 sato 总量本身的物理决定问题。

每一步沿着曲线的卖出，都对应一次永久销毁。你把 sato 通过 curve 卖回去，那枚 sato 物理从链上消失，活体 supply 减一。issuance 阶段也是这样，但有 buy 那条路在 mint 新 sato 补回来，总量上下浮动。自锁后 buy 路径死掉，只剩 sell 这一条还能走，活体 supply 从那一秒起单调递减，永远只会越走越少。

这跟 BTC 在 2140 后的状态正好反着。BTC 进入 fee market 时代后总量永远定格在 2100 万，是 cap-and-hold。sato 进入自锁状态后总量只会一直往下走，是 cap-and-burn。两种 post-cap 货币学，链上同时各跑一套。

要注意 burn 只发生在走 curve sell 这条路径上。把 sato 转给野池子或者 P2P 接盘人不算 burn，token 不死只换手。所以扛的时候 supply 不动，砸的时候 supply 减一。
砸是直接走 curve sell 把 sato burn 掉，拿到机械报价的 ETH 出场，token 物理消失。扛是保留 sato 等野池子涨，要么转去冷钱包，要么挂到 P2P 或者野池子上等接盘，token 还活着。

每个人的选择不可观察，但所有人加总的选择会在自锁后的几小时到几天内决定两件事，ethCum 的最终静止水位，跟活体 supply 最终稳在哪个数。这两个水位是 sato 整个生命周期里唯一能被精确测量的项目活下来了没的指标，比任何价格图都干净。

跟 BTC 2140 那道题在结构上仍然同构。fee market 撑得住 hashrate 就活，撑不住就死。两边的 post-cap 命运都不是确定性事件，是协调性事件。

唯一的不同是 BTC 一百多年才走到那一刻，sato 几天到几周。前者活在新闻里，后者活在区块浏览器里。

六、收尾

sato 不靠未来兑现自己。它在它部署的那一刻，已经把题目摆在链上，无可篡改地交给市场作答。

不管最终是哪一种 endgame 落地，作为 BTC 的微缩对照实验，它的链上数据从创世块第一笔 buy 那一秒起就在产出。这一组数据完整、公开、不可消除、不依赖任何第三方诠释。

哪一天 selfDeprecated 翻 true 那一笔交易被打包进区块，会是这个项目的最后一枪纪念碑。从那一秒起再也不会有新的 sato 进入流通。曲线从双向变单向，BTC 用 26 年走的那条路，sato 在以太坊上把这事压缩成一个区块事件。

如果 selfDeprecated 永远不翻 true，那这个静止状态本身也是一份完整的实验数据。

哪种结局都成立。


## 元信息

- **作者**: 798.eth 🍌🌍☮️🗡️👁️ ([@798_eth](https://x.com/798_eth))
- **发布时间**: 2026-05-04T02:30:36.000Z
- **抓取时间**: 2026-05-04T07:17:45.033Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 136 · 🔄 23 · 💬 28 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/798_eth/status/2051127322124988479) — @798_eth (798.eth 🍌🌍☮️🗡️👁️)
