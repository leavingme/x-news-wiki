---
type: "X Tweet"
title: "Omni2Sound：清华/蒙纳士/盛数AI联合发布统一音视频生成模型，DiT架构首次实现「看视频或文字都能出音频」且无任务冲突"
description: "**【一句话核心判断】**  清华、蒙纳士与盛数 AI 联合发布 Omni2Sound，首次通过标准 DiT 架构统一视频/文本转音频任务，声称在离屏音频生成等多个任务上达到 SOTA。  **信息增量：** - 训练数据 SoundAtlas 含 47 万高质量对齐样本（视频-文本-音频三联），解决多任务联合训练冲突问题 - 采用三阶段训练调度（three-stage training sche"
resource: "https://x.com/i/status/2055645946399338816"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-16T16:18:31.464Z"
x_tweet_id: "2055645946399338816"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-16T13:46:00.000Z"
x_engagement:
  likes: 11
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-video-cinematic"
x_source: "crawler"
---

# Omni2Sound：清华/蒙纳士/盛数AI联合发布统一音视频生成模型，DiT架构首次实现「看视频或文字都能出音频」且无任务冲突

## 摘要

**【一句话核心判断】**

清华、蒙纳士与盛数 AI 联合发布 Omni2Sound，首次通过标准 DiT 架构统一视频/文本转音频任务，声称在离屏音频生成等多个任务上达到 SOTA。

**信息增量：**
- 训练数据 SoundAtlas 含 47 万高质量对齐样本（视频-文本-音频三联），解决多任务联合训练冲突问题
- 采用三阶段训练调度（three-stage training schedule）显式阻断任务干扰，而非混合训练
- 架构上复用标准 DiT backbone，意味着工程迁移成本低

**影响：**
- 当前音视频生成模型多专精单一模态（视频→音频或文本→音频各自独立），Omni2Sound 若复现顺利，将压缩单任务模型的生存空间
- 对游戏配音、短视频自动化配音、具身机器人音频响应等场景有直接意义


**gakki 锐评：** Omni2Sound 的真正价值不在于「统一」本身，而在于它用标准 DiT 做到了——这降低了研究复现门槛，也让非音视频专业团队可以直接在现有视频生成 pipeline 里插入一个音频节点。但 SOTA 声称需要等独立 benchmark 验证，当前 AI 论文宣传水分仍需保留判断。

## 原文

What if a single model could generate audio from video, text, or both — with no trade-offs? 

Researchers from Tsinghua University, Monash University, and Shengshu AI present Omni2Sound. 

They built SoundAtlas (470k high-alignment pairs) and a three-stage training schedule to stop task conflicts. Result: SOTA across all unified tasks, including off-screen audio, with a standard DiT backbone.

Omni2Sound: Towards Unified Video-Text-to-Audio Generation

Paper: https://t.co/6CKR0vvUhb
Project: https://t.co/oRHTijHFXR
Code: https://t.co/cob3MfVL2e
Model: https://t.co/IneZjHEujQ

Our report: https://t.co/kM7MoJGgWJ

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-16T13:46:00.000Z
- **抓取时间**: 2026-05-16T16:18:31.464Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 11 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0
- **关联主题**: [ai-video-cinematic](/concepts/ai-video-cinematic.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2055645946399338816) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/ai-video-cinematic.md)
