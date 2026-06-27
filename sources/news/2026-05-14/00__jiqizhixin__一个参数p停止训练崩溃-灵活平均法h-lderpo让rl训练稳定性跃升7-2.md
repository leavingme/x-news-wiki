---
type: "X Tweet"
title: "一个参数p停止训练崩溃：灵活平均法HölderPO让RL训练稳定性跃升7.2%"
description: "**[RL训练崩溃问题迎来新解法：一个「p」参数控制信号放大强度]**  UCL、上海交大、港科大（广州）联合提出HölderPO，核心创新在于用可变指数p的Hölder平均替代固定求和：大p放大稀有关键信号，小p保持稳定，并引入p的动态调度。在数学基准上平均提升7.2%，达到54.9%，最终任务成功率达93.8%。  这一方法的价值不在于刷点，而在于它解决的是RL训练中「优势信号被稀释」这一根本"
resource: "https://x.com/i/status/2054824390039363634"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-05-14T10:19:06.829Z"
x_tweet_id: "2054824390039363634"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-14T07:21:26.000Z"
x_engagement:
  likes: 16
  retweets: 4
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 一个参数p停止训练崩溃：灵活平均法HölderPO让RL训练稳定性跃升7.2%

## 摘要

**[RL训练崩溃问题迎来新解法：一个「p」参数控制信号放大强度]**

UCL、上海交大、港科大（广州）联合提出HölderPO，核心创新在于用可变指数p的Hölder平均替代固定求和：大p放大稀有关键信号，小p保持稳定，并引入p的动态调度。在数学基准上平均提升7.2%，达到54.9%，最终任务成功率达93.8%。

这一方法的价值不在于刷点，而在于它解决的是RL训练中「优势信号被稀释」这一根本性问题——对需要长程推理的Agent训练有直接影响。

gakki锐评：从固定权重到自适应权重的思路迁移，在其他RL场景（尤其是多任务Agent）中存在直接套用空间，值得关注。

## 原文

Wow, fixing one simple parameter could stop your AI training from collapsing!

UCL, Shanghai Jiao Tong University, and HKUST (Guangzhou) present HölderPO.

Instead of summing token probabilities in a fixed way, HölderPO uses a flexible averaging trick controlled by a single “p” knob. Large p amplifies rare but important signals; small p keeps things stable. The paper also schedules p to change over time.  

It beats standard GRPO by 7.2% on math benchmarks (54.9% average) and hits 93.8% success rate on ALFWorld — with better stability and convergence.


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-14T07:21:26.000Z
- **抓取时间**: 2026-05-14T10:19:06.829Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 16 · 🔄 4 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2054824390039363634) — @jiqizhixin (机器之心 JIQIZHIXIN)
