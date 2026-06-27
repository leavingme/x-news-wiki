---
type: "X Tweet"
title: "VibeVoice-ASR：微软用单模型一体化方案颠覆语音识别工具链"
description: "**一句话核心判断：VibeVoice-ASR 将 60 分钟连续音频处理、50+语言支持、说话人分离做成单模型输出，替代了 Whisper + pyannote 的拼装方案，工具链复杂度大幅下降。**  Simon Willison 实测数据：M5 Max MacBook Pro（128GB）转写 1 小时播客耗时 8 分 45 秒；4-bit 量化版 5.71GB（原模型 17.3GB）；pr"
resource: "https://x.com/i/status/2049279099454292283"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-04-29T01:18:47.068Z"
x_tweet_id: "2049279099454292283"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-04-29T00:06:25.000Z"
x_engagement:
  likes: 22
  retweets: 3
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# VibeVoice-ASR：微软用单模型一体化方案颠覆语音识别工具链

## 摘要

**一句话核心判断：VibeVoice-ASR 将 60 分钟连续音频处理、50+语言支持、说话人分离做成单模型输出，替代了 Whisper + pyannote 的拼装方案，工具链复杂度大幅下降。**

Simon Willison 实测数据：M5 Max MacBook Pro（128GB）转写 1 小时播客耗时 8 分 45 秒；4-bit 量化版 5.71GB（原模型 17.3GB）；prefill 阶段内存峰值 61.5GB，生成阶段稳定 18GB。坑点：max-tokens 需手动调至 32768，否则默认 8192 只够约 25 分钟音频。

对 Agent 感知基础设施的影响：ASR 是语音交互 Agent 的入口层，单模型替代多工具组合意味着部署成本下降、集成摩擦降低。MIT 协议，无商业限制。

**gakki 锐评：** 微软开源的东西有个规律——技术很强，但产品和文档一塌糊涂。这个模型的能力是真实的，但工程化落地还需要自己踩坑（内存峰值 61.5GB 是个警示），不适合内存小于 64GB 的设备硬上。

## 原文

微软 1 月开源的 VibeVoice-ASR 语音识别模型（https://t.co/CsXftlEAul），Simon Willison 在 Mac 上测试后给出了一份具体的实测报告。

VibeVoice-ASR 是微软研究院今年 1 月 21 日开源的 9B 参数语音转文字模型，MIT 协议。最大卖点是单次能处理 60 分钟连续音频，而且把"谁在说、什么时候说、说了什么"做成结构化输出。

传统方案要拿 Whisper（OpenAI 开源的语音识别模型）配上 pyannote 这种说话人分离工具拼起来，这次一个模型直接搞定，原生支持 50 多种语言和中英混说。

Simon 跑的是社区做的 4-bit 量化版（5.71GB，原模型 17.3GB），机器是 128GB 内存的 M5 Max MacBook Pro，转写一小时播客花了 8 分 45 秒。调用时要手动把 max-tokens 调到 32768，否则默认 8192 只够大约 25 分钟的音频。Activity Monitor 监控显示，prefill（预填充）阶段内存峰值飙到 61.5GB，生成阶段稳定在 18GB 上下，普通 32GB 笔电基本跑不动这个量化版。

一个有趣的细节：模型把这场播客识别成了三个说话人。实际上只有 Simon 和主持人 Lenny 两人对谈，但 Lenny 的开场白和广告口播用了不同的录音环境，模型干脆把这部分切成了第三人。

硬限制有两个：单次最多 60 分钟，超过要自己切片处理，还得手动对齐切片间的说话人 ID；想本地跑量化版至少要 64GB 以上内存的机器。对做播客转写、会议纪要、采访整理的人来说，原来拼接的多步流程现在能压缩成一次推理。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-04-29T00:06:25.000Z
- **抓取时间**: 2026-04-29T01:18:47.068Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 22 · 🔄 3 · 💬 6 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2049279099454292283) — @dotey (宝玉)
