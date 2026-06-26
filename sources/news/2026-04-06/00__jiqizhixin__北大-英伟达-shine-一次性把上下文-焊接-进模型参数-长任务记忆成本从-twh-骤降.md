---
type: "X Tweet"
title: "北大+英伟达 SHINE：一次性把上下文「焊接」进模型参数，长任务记忆成本从 TWh 骤降"
description: "**一句话核心判断** 上下文窗口争夺战本质是成本战，SHINE 用超网络绕过注意力机制，把临时上下文焊进权重——记忆从此不再按 Token 收费。  **信息增量** • 单次前向传播即可生成高质量 LoRA 适配器，无需传统微调的梯度计算，训练能耗接近零 • 将「上下文」转化为「内置技能」，上下文越长、任务越复杂，收益越高（对比 RAG 的向量检索瓶颈） • 北京大学团队主创，NVIDIA 联"
resource: "https://x.com/i/status/2040960430105907352"
tags:
  - "x-news"
  - "news"
  - "author:jiqizhixin"
timestamp: "2026-04-06T12:43:19.562Z"
x_tweet_id: "2040960430105907352"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-04-06T01:11:00.000Z"
x_engagement:
  likes: 186
  retweets: 26
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# 北大+英伟达 SHINE：一次性把上下文「焊接」进模型参数，长任务记忆成本从 TWh 骤降

## 摘要

**一句话核心判断**
上下文窗口争夺战本质是成本战，SHINE 用超网络绕过注意力机制，把临时上下文焊进权重——记忆从此不再按 Token 收费。

**信息增量**
• 单次前向传播即可生成高质量 LoRA 适配器，无需传统微调的梯度计算，训练能耗接近零
• 将「上下文」转化为「内置技能」，上下文越长、任务越复杂，收益越高（对比 RAG 的向量检索瓶颈）
• 北京大学团队主创，NVIDIA 联合署名，工程可行性有硬件侧背书

**影响评估**
RAG 和长上下文窗口的商业逻辑正在被釜底抽薪——当记忆可以「焊接」进权重，Token 收费模式将面临根本性挑战。

gakki 的锐评：上下文窗口是 2024 年最被神化的伪需求。真正的竞争不在窗口有多长，而在记忆成本有多低、调用有多快。SHINE 给出的答案比 Anthropic 的 200K 上下文更接近本质。

## 原文

What if LLMs could instantly absorb new context directly into their parameters?

Researchers from Peking University, University of Oxford, Technion, and NVIDIA present SHINE!

SHINE is an innovative hypernetwork that, in a single pass, generates high-quality LoRA adapters directly from diverse contexts. This effectively bakes temporary contextual knowledge into the LLM’s core parameters, turning it into lasting skill without any traditional fine-tuning. It smartly reuses the LLM's own frozen parameters for efficiency.

This breakthrough dramatically cuts down on time, computation, and memory costs compared to supervised fine-tuning (SFT). SHINE outperforms SFT across various tasks, especially in complex question answering by embedding knowledge directly, offering outstanding performance and massive scalability potential.

SHINE: A Scalable In-Context Hypernetwork for Mapping Context to LoRA in a Single Pass

arXiv: https://t.co/412FJy6v6H
GitHub: https://t.co/0iMvxHWI21
Hugging Face: https://t.co/FcOxd77BwI

Our report: https://t.co/VmcAWlRqcY

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-04-06T01:11:00.000Z
- **抓取时间**: 2026-04-06T12:43:19.562Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 186 · 🔄 26 · 💬 2 · 🔖 0 · 👁 0
- **关联主题**: [agent-memory-optimization](/concepts/agent-memory-optimization.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2040960430105907352) — @jiqizhixin (机器之心 JIQIZHIXIN)
[2] [Author page](/entities/authors/jiqizhixin.md)
[3] [Related topic](/concepts/agent-memory-optimization.md)
