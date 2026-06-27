---
type: "source"
title: "LLaVA-OneVision-2 用「视频编解码」思路重新定义长视频理解：8B 模型反超 Qwen3-VL-8B 44.8 分"
description: "**LLaVA-OneVision-2 把视频当作「比特流」来处理，token 只花在事件密集的关键帧上，是长视频理解的架构级突破。**  - Glint Lab + AIM for Health Lab + MVP Lab 提出 Codec-Stream Tokenization：基于运动线索动态分配视觉 token 预算，事件密集处多分配，无关帧大幅压缩，从根源解决 token 浪费。 - 8"
resource: "https://x.com/i/status/2066319527286366241"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-06-15T01:18:26.243Z"
x_tweet_id: "2066319527286366241"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-06-15T00:39:00.000Z"
x_engagement:
  likes: 1
  retweets: 1
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2066319527286366241"
created: "2026-06-15"
updated: "2026-06-26"
sha256: "22836973a3cd9b80283c07eedf8b663a1b69fb60ae110993a6c453f396a6e789"
sources:
  - "/sources/highlights/2026-06-15/00__jiqizhixin__llava-onevision-2-用-视频编解码-思路重新定义长视频理解-8b-模型反超-qwen3-vl-8b-44.md"
---

# LLaVA-OneVision-2 用「视频编解码」思路重新定义长视频理解：8B 模型反超 Qwen3-VL-8B 44.8 分

## 摘要

**LLaVA-OneVision-2 把视频当作「比特流」来处理，token 只花在事件密集的关键帧上，是长视频理解的架构级突破。**

- Glint Lab + AIM for Health Lab + MVP Lab 提出 Codec-Stream Tokenization：基于运动线索动态分配视觉 token 预算，事件密集处多分配，无关帧大幅压缩，从根源解决 token 浪费。
- 8B 模型在新基准上以 +44.8 分的优势碾压 Qwen3-VL-8B，证明「按重要性采样」比「均匀采样帧」更适合长视频理解任务。
- 该思路将视频从「图像序列」还原为「信息流」，与传统视频编解码器（H.264/H.265）的码率控制哲学同源，是首次有团队把这个直觉搬进 VLM。
- 真正意义不在分数领先，而在于 token 效率突破：让小时级视频理解在经济上变得可行，Agent 做视频监控/会议纪要/长视频总结的成本拐点临近。


gakki 锐评：44.8 分的领先可能与基准集选择有关，权重待看，但「视频当比特流」这件事的范式价值比分数重要得多——它意味着 VLM 的长视频理解第一次有了可工程化的 token 预算控制方案，而不是堆帧。

## 原文

What if your AI could “see” video like a streaming codec—spending tokens only on the most important moments?

Introducing LLaVA-OneVision-2 from Glint Lab, AIM for Health Lab, and MVP Lab.  

Their secret? Codec-stream tokenization: video is treated as a continuous bit-cost stream, using motion cues to pack only the event-rich content into a tiny visual budget. This slashes token waste and stabilises long-video understanding.

Result? LLaVA-OV-2-8B crushes Qwen3-VL-8B by +44.8 points on the new JumpScore temporal benchmark, +4.3 on video tasks, +5.3 on spatial tasks, and +15.6 on tracking. Open-source everything released.

LLaVA-OneVision-2: Towards Next-Generation Perceptual Intelligence

Paper:  https://t.co/UwWdOsDs20
GitHub: https://t.co/EsDrSkFisq

Our report: https://t.co/kU9zFzSUSM

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-06-15T00:39:00.000Z
- **抓取时间**: 2026-06-15T01:18:26.243Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 1 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2066319527286366241) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
