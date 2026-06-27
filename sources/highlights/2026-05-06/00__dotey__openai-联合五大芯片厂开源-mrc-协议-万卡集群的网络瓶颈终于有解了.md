---
type: "X Tweet"
title: "OpenAI 联合五大芯片厂开源 MRC 协议：万卡集群的网络瓶颈终于有解了"
description: "**训练集群规模上去了，网络成了第一瓶颈，MRC 是 OpenAI 为 Stargate 级基础设施量身打造的解法。**  - 传统网络单路径传输 + BGP 动态路由，链路故障需秒级重算，万卡集群下任何抖动都意味着全集群空等 - MRC 将数据包拆散同时走几百条路径，目的地按内存地址重拼，故障绕开精度从秒级压缩到微秒级 - 砍掉 BGP，改用 SR（Segment Routing），通过 OCP"
resource: "https://x.com/i/status/2052056444330000513"
tags:
  - "x-news"
  - "highlights"
  - "author:dotey"
timestamp: "2026-05-06T16:18:46.941Z"
x_tweet_id: "2052056444330000513"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-05-06T16:02:36.000Z"
x_engagement:
  likes: 13
  retweets: 2
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-compute-on-chain"
x_source: "crawler"
---

# OpenAI 联合五大芯片厂开源 MRC 协议：万卡集群的网络瓶颈终于有解了

## 摘要

**训练集群规模上去了，网络成了第一瓶颈，MRC 是 OpenAI 为 Stargate 级基础设施量身打造的解法。**

- 传统网络单路径传输 + BGP 动态路由，链路故障需秒级重算，万卡集群下任何抖动都意味着全集群空等
- MRC 将数据包拆散同时走几百条路径，目的地按内存地址重拼，故障绕开精度从秒级压缩到微秒级
- 砍掉 BGP，改用 SR（Segment Routing），通过 OCP 开放标准向全行业开放

gakki 锐评：这不是一个普通的开源协议，而是 OpenAI 把 Stargate 的核心基建痛点变成了行业公共品——谁先规模化落地，谁就在万卡时代拿到网络层的先发优势。

## 原文

OpenAI 把训练 ChatGPT 用的网络协议开源了。https://t.co/s2euzfedsb

这套协议叫 MRC（Multipath Reliable Connection，多路径可靠连接），由 OpenAI 联合 AMD、博通、英特尔、微软、英伟达共同开发，通过 OCP（开放计算项目，业内最大的开源硬件标准组织）开放给全行业。AMD、博通、微软、英伟达同步发了配套博文。

训练大模型，几万到十几万张 GPU 要保持步调一致。一次训练步可能涉及几百万次数据传输，只要有一笔晚到，所有 GPU 都得干等。集群越大，链路抖动和故障越频繁。

传统网络的麻烦：一条链路挂了，整个训练任务可能崩掉，得回到上一个检查点重跑；交换机重新算路由要花好几秒甚至几十秒。OpenAI 在搭 Stargate（其大型算力基础设施项目）这种规模的集群时，遇到的第一个瓶颈就是网络。

过去一笔传输只走一条路径，MRC 改成把数据包拆散，同时分头走几百条路径，目的地再按内存地址重新拼起来。

链路出问题，微秒级就能绕开，不需要交换机重算路由表。OpenAI 还把动态路由协议(BGP)整个砍掉,改用 SRv6 源路由:发送方直接指定每个包走哪条路,交换机退化成"无脑"转发器,故障面大幅缩小。

网络结构因此简化。原本要 3 到 4 层交换机才能连起十几万张 GPU,MRC 的多平面设计 2 层就够,功耗、成本、故障点全降。

MRC 已经部署在 OpenAI 所有最大的英伟达 GB200 超算上,包括 Stargate 在德州 Abilene 与甲骨文合建的站点,以及微软 Fairwater 数据中心。多个 OpenAI 模型用它训练出来。

最直观的例子:最近一次前沿模型训练(服务 ChatGPT 和 Codex)期间,团队重启了 4 台核心交换机,不需要跟训练团队协调;每分钟还有多次链路抖动,对训练任务也没有可测量的影响。换以前,这种事故足以让整个任务崩溃。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-05-06T16:02:36.000Z
- **抓取时间**: 2026-05-06T16:18:46.941Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 13 · 🔄 2 · 💬 2 · 🔖 0 · 👁 0
- **关联主题**: [ai-compute-on-chain](/concepts/ai-compute-on-chain.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2052056444330000513) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/ai-compute-on-chain.md)
