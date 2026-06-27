---
type: "X Tweet"
title: "CASCADE框架：让LLM Agent在部署后继续学习，用上下文 bandit 平衡探索与利用"
description: "**[ episodic memory 让 LLM Agent 学会「吃一堑长一智」]**  吉林大学、伦敦国王学院、UCL 联合提出 CASCADE 框架，核心创新是把经验复用建模为上下文多臂老虎机（contextual bandit），让模型在「复用已知成功经验」和「探索新策略」之间自适应平衡。实验覆盖 16 个任务（医疗诊断、代码生成、具身交互等），证明 episodic memory 能在"
resource: "https://x.com/i/status/2059090140816117881"
tags:
  - "x-news"
  - "highlights"
  - "author:jiqizhixin"
timestamp: "2026-05-26T04:18:43.012Z"
x_tweet_id: "2059090140816117881"
x_author: "机器之心 JIQIZHIXIN"
x_handle: "jiqizhixin"
x_created_at: "2026-05-26T01:52:00.000Z"
x_engagement:
  likes: 15
  retweets: 2
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "agent-memory-optimization"
x_source: "crawler"
---

# CASCADE框架：让LLM Agent在部署后继续学习，用上下文 bandit 平衡探索与利用

## 摘要

**[ episodic memory 让 LLM Agent 学会「吃一堑长一智」]**

吉林大学、伦敦国王学院、UCL 联合提出 CASCADE 框架，核心创新是把经验复用建模为上下文多臂老虎机（contextual bandit），让模型在「复用已知成功经验」和「探索新策略」之间自适应平衡。实验覆盖 16 个任务（医疗诊断、代码生成、具身交互等），证明 episodic memory 能在部署后持续改善决策质量。

这意味着 AI Agent 的学习不再局限于训练期，部署后的真实交互经验成为第二战场。

gakki：上下文 bandit 机制把经验复用从被动存储变成主动策略选择，这是记忆系统从「仓库」升级为「决策参与者」的关键一步——但 episodic memory 的信度问题（如何防止错误经验自我强化）仍是隐患。

## 原文

What if your LLM kept learning after deployment—even without changing its weights?

Researchers from Jilin University, King's College London, and UCL introduce CASCADE, a framework that equips LLM agents with an evolving episodic memory. 

It treats experience reuse like a contextual bandit, letting the model smartly balance exploration vs. exploitation to turn past cases into better decisions.

Across 16 diverse tasks—from medical diagnosis to code generation, web search, and embodied interaction—CASCADE boosts macro-averaged success rate by 20.9% over zero-shot prompting, consistently beating both gradient-based and memory-based baselines.

CASCADE: Case-Based Continual Adaptation for Large Language Models During Deploymen

Paper: https://t.co/DuxLBpVytA
Code: https://t.co/ecpyNxwJ6X

Our report: https://t.co/tGbb3FT1mL

📬 #PapersAccepted by Jiqizhixin


## 元信息

- **作者**: 机器之心 JIQIZHIXIN ([@jiqizhixin](https://x.com/jiqizhixin))
- **发布时间**: 2026-05-26T01:52:00.000Z
- **抓取时间**: 2026-05-26T04:18:43.012Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 15 · 🔄 2 · 💬 1 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2059090140816117881) — @jiqizhixin (机器之心 JIQIZHIXIN)
