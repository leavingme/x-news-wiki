---
type: "source"
title: "微软 VibeVoice 一口气转录 60 分钟长音频：语音 AI 终于补上「长程记忆」这块短板"
description: "**【一句话核心判断】**  微软 VibeVoice-ASR 以 7B 参数实现 60 分钟连续音频的说话人分离 + 时间戳标注，I think this is the first open-source model that genuinely solves the \"meeting transcription\" problem at production level, not just a "
resource: "https://x.com/i/status/2038854076444889167"
tags:
  - "x-news"
  - "news"
  - "author:NFTCPS"
timestamp: "2026-04-19T00:45:06.551Z"
x_tweet_id: "2038854076444889167"
x_author: "鸟哥 | 蓝鸟会🕊️"
x_handle: "NFTCPS"
x_created_at: "2026-03-31T05:41:06.000Z"
x_engagement:
  likes: 105
  retweets: 35
  replies: 0
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2038854076444889167"
created: "2026-03-31"
updated: "2026-06-26"
sha256: "bc79264c6db38a0d6fac7675d09f29d980d813e3736e1e3f9eac883482a8bd8b"
sources:
  - "/sources/news/2026-04-19/00__NFTCPS__微软-vibevoice-一口气转录-60-分钟长音频-语音-ai-终于补上-长程记忆-这块短板.md"
---

# 微软 VibeVoice 一口气转录 60 分钟长音频：语音 AI 终于补上「长程记忆」这块短板

## 摘要

**【一句话核心判断】**

微软 VibeVoice-ASR 以 7B 参数实现 60 分钟连续音频的说话人分离 + 时间戳标注，I think this is the first open-source model that genuinely solves the "meeting transcription" problem at production level, not just a demo.

**【信息增量】**

- 7B 模型一次性处理 60 分钟长音频，输出包含 Who/When/What 三元组，50+ 语言覆盖
- 已集成进 HuggingFace Transformers，支持 vLLM 加速推理，生态接入成本低
- TTS 部分因 deepfake 滥用被移除代码只留权重——微软在安全与开放之间选择了主动收缩，这对行业是个信号
- 社区已基于它做出语音输入法产品，macOS/Windows 双端落地，不是纸上谈兵

**【影响】**

会议纪要、播客转录、口述内容结构化——这些场景过去依赖闭源方案，VibeVoice 把门槛拉到「一条命令集成」，对 Notion AI、Otter.ai 等产品直接构成压力。

---

gakki锐评：60 分钟不是炫技，是工程取舍——太短了没法覆盖一场正经会议，太长了算力成本翻车。微软敢把这个数字写到 README 里，说明测试过了。但我更在意的是 TTS 代码被砍这件事——这才是真实的 AI 安全边界，不是论文里的假设场景。

## 原文

微软开源了一套语音 AI 模型，能一口气处理 60 分钟长音频，还能分清谁在说话、什么时候说的 → 31000 Star，ICLR 2026 Oral。

VibeVoice 是微软的开源前沿语音 AI 系列，包含三个模型：

→ VibeVoice-ASR（7B）：语音转文字
一次性处理 60 分钟长音频，输出结构化转录 → 包含 Who（说话人识别）、When（时间戳）、What（内容），支持 50+ 语言。已集成到 HuggingFace Transformers，支持 vLLM 加速推理。社区已经基于它做出了 Vibing → 一个语音输入法，macOS/Windows 都有。

→ VibeVoice-TTS（1.5B）：文字转语音
能合成长达 90 分钟的语音，支持最多 4 个不同说话人。但因为被滥用（deepfake 等），微软已经移除了 TTS 代码，只保留模型权重。

→ VibeVoice-Realtime（0.5B）：实时流式 TTS
支持流式文本输入和实时语音生成，覆盖 9 种语言 + 11 种英语风格音色。有 Colab 可以直接试。

核心技术：7.5 Hz 超低帧率的连续语音 tokenizer（声学 + 语义），用 LLM 理解上下文 + 扩散头生成高保真音频细节，叫 "next-token diffusion" 框架。

值得关注的点：
→ ASR 能力是目前开源界最强之一，60 分钟长音频 + 说话人分离 + 时间戳是刚需
→ TTS 代码被撤的事值得注意 → 说明语音克隆的滥用风险已经到了微软不得不收回的程度
→ 31000+ Star、3400+ Fork，增长极快
→ 对播客转录、会议记录、字幕生成等场景非常实用

⭐ 31,294 | 🍴 3,471 | Python

🔗 https://t.co/IFgf4dWe1M


## 元信息

- **作者**: 鸟哥 | 蓝鸟会🕊️ ([@NFTCPS](https://x.com/NFTCPS))
- **发布时间**: 2026-03-31T05:41:06.000Z
- **抓取时间**: 2026-04-19T00:45:06.551Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 105 · 🔄 35 · 💬 0 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2038854076444889167) — @NFTCPS (鸟哥 | 蓝鸟会🕊️)
[2] [Author page](/entities/authors/nftcps.md)
