---
type: "X Tweet"
title: "Airtap：绕过API直接操作界面，AI手机控制的第三条路"
description: "Airtap展示了一种新的AI操控手机路径——不是逆向API，而是完全模拟人手操作：Tap、Scroll、Type、Navigate。这意味着任何有App的产品都能被AI自动化，无需厂商配合。  关键差异在于「走人走过的路」而非「走API规定的路」，打破了移动自动化的合规困境。"
resource: "https://x.com/i/status/2056600753096270002"
tags:
  - "x-news"
  - "news"
  - "author:Zesee"
timestamp: "2026-05-19T07:18:19.518Z"
x_tweet_id: "2056600753096270002"
x_author: "Rachel🥥"
x_handle: "Zesee"
x_created_at: "2026-05-19T05:00:03.000Z"
x_engagement:
  likes: 20
  retweets: 0
  replies: 11
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Airtap：绕过API直接操作界面，AI手机控制的第三条路

## 摘要

Airtap展示了一种新的AI操控手机路径——不是逆向API，而是完全模拟人手操作：Tap、Scroll、Type、Navigate。这意味着任何有App的产品都能被AI自动化，无需厂商配合。

关键差异在于「走人走过的路」而非「走API规定的路」，打破了移动自动化的合规困境。

## 原文

每天准时更新视频，甚至不用打开手机？
 
之前，做矩阵号视频更新，打开平台，每个账号各传一遍。不同平台不同账号的封面、标题、描述格式还不一样。
 
后来，我把这个活丢给了Airtap @airtap_ai，现在我只需要说一句"把这条视频按各平台格式发出去"。它自己打开三个App，自己传，自己填 (见视频展示)。
 
Airtap 干的事说起来很简单：它能像人一样操作你手机里App。

Tap、scroll、type、navigate；你怎么用手机，它就怎么用。
 
关键区别是：大多数手机 App 没有公开API。你想自动化手机上的操作，传统路径是逆向工程或者 accessibility hack，脆弱且违规。
 
Airtap的做法是直接操作界面，走的是和你手动操作完全一样的路径。所以它能进任何 App。只要你能用的，它就能用。
 
真正让我觉得值的是它能每天替我跑。
 
现在能让它跑的 routine：
每天早上 8 点前，扫完 Gmail 和 Slack 隔夜消息，加上日历和天气，给我一份 60秒能看完的 briefing每天扫一遍快递状态，今天到什么直接告诉我；每周日把下周食谱的食材加进购物车。详情见案例展示：https://t.co/Ii2GkGPvrb
 
这些事单独拿出来都不难，但加在一起每天吃掉你 20-30分钟。

而且它们的共性是：你不是不会做，是忙起来就忘了，或者懒得打开那五六个 App一个个看。写一次 prompt，设好节奏，它每天自己跑。你不用管。
 
技术上两个设计让这件事成立：
第一，Cloud Phone。云端有一台手机，你的 App 装好了，24 小时在线。AI 在它自己sandbox 里跑，不是进入你的主力机。
 
你也可以用 Autopilot App 连你自己的Android（目前支持安卓手机），但我更喜欢云端方案：干净，不影响我日常用手机。
 
第二，SKILL.md。一个文件，拖进 Claude Code 或者 OpenClaw，你的 agent就多了一层"操作手机"的能力。我之前用 Claude Code 做 agent 开发，加上 Airtap之后整条链路是：Telegram 收到消息 → agent 判断意图 → Airtap 在手机上执行 →结果回 Slack。
 
中间不用碰手机。它不是硬编码脚本。每一步都重新读屏判断，App 更新了 UI或者弹了个新窗口，它能继续跑。不会因为一个按钮换了位置就崩掉。
 
还有一些场景我在试：
限量球鞋发售：Claude Code 监控发售时间，Airtap 在手机端完成claim。窗口期就那几秒，手速不够的问题不存在了。演出开票的时候你未必有空盯着。让它盯着就行。

Loyalty 积分：每天打开星巴克和信用卡 App 签到领积分这种事，人会忘，它不会。
这些场景的共性：不复杂，但窗口期短或者频率高，人做不划算。
 
如果你已经在用 agent 框架做开发，Airtap 补的是最后一层：你的 agent再强，进不了手机 App 就是进不了。现在这层通了。
 
如果你不写代码，只是想让手机里的重复琐事自动跑起来，一句 prompt 就够：https://t.co/6OVZd4D8LC


## 元信息

- **作者**: Rachel🥥 ([@Zesee](https://x.com/Zesee))
- **发布时间**: 2026-05-19T05:00:03.000Z
- **抓取时间**: 2026-05-19T07:18:19.518Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 20 · 🔄 0 · 💬 11 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2056600753096270002) — @Zesee (Rachel🥥)
[2] [Author page](/entities/authors/zesee.md)
