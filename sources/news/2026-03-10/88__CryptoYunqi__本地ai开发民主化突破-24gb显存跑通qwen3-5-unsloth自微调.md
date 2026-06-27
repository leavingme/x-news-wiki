---
type: "X Tweet"
title: "本地AI开发民主化突破：24GB显存跑通Qwen3.5+Unsloth自微调"
description: "**【端侧Agent训练闭环首次跑通】** • 35B MoE模型可在消费级显卡本地运行，无需API依赖 • Agentic Coding实现「模型自举」：让AI自己编写微调代码训练更强版本 • 隐私与成本双重解放：数据不出本地、零API费用  Agent不是云端特权，个人设备正在 reclaim AI 主权。"
resource: "https://x.com/i/status/2031026485440733540"
tags:
  - "x-news"
  - "news"
  - "author:CryptoYunqi"
timestamp: "2026-03-10T03:12:01.539Z"
x_tweet_id: "2031026485440733540"
x_author: "常为希 ｜AI之道"
x_handle: "CryptoYunqi"
x_created_at: "2026-03-09T15:17:03.000Z"
x_engagement:
  likes: 105
  retweets: 28
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 88
x_related_topic:
x_source: "crawler"
---

# 本地AI开发民主化突破：24GB显存跑通Qwen3.5+Unsloth自微调

## 摘要

**【端侧Agent训练闭环首次跑通】**
• 35B MoE模型可在消费级显卡本地运行，无需API依赖
• Agentic Coding实现「模型自举」：让AI自己编写微调代码训练更强版本
• 隐私与成本双重解放：数据不出本地、零API费用

Agent不是云端特权，个人设备正在 reclaim AI 主权。

## 原文

AI小白完整教程：用Claude Code本地运行Qwen3.5 + 让它自己用Unsloth自主微调模型（只需24GB内存）

大家好！@UnslothAI 代理式编程，把顶级开源模型 Qwen3.5（目前最强的~30B MoE编码/代理模型之一）完全跑在你自己的电脑/服务器上，不用连网、不用付API钱，还能让它“自己当程序员”，自动帮你安装工具、写代码、完成微调（fine-tune）任务。

这个玩法叫 agentic coding（代理式编程）：AI不再只是聊天，它能像真人一样在终端里读文件、改代码、执行命令、安装软件，一气呵成。  
好处超级明显：
- 隐私安全：所有数据都在你本地，不会上传给任何人。
- 成本为0：跑完就停，不产生费用。
- 内存友好：24GB显存（比如RTX 4090）就能流畅跑35B模型。
- 列举循环：今天让Qwen3.5帮你微调出一个更强的模型，明天这个新模型就能自己继续进化！

下面我给你一个从零到上手的完整教程，专为AI小白设计。  
第一部分：小白必懂的概念（5分钟读完，后面就不迷糊了）

1. LLM（大型语言模型）：就是ChatGPT、Qwen这种超级聪明的AI大脑。Qwen3.5是开源的“免费ChatGPT”，特别擅长写代码和做复杂任务。
2. 本地部署：把模型下载到你电脑里跑，不依赖云端。优点：快、私密、省钱；缺点：需要显存（GPU内存）。
3. GGUF量化：把大模型“压缩”成小文件（比如从100GB压到20GB左右），速度和准确度损失很小。我们用Unsloth官方的 UD-Q4_K_XL 量化版，最平衡。
4. llama.cpp + llama-server：开源神器，把模型变成一个“本地API服务器”（跑在 http://localhost:8001 端口），Claude Code就能像调用ChatGPT一样调用它。
5. Claude Code：Anthropic出的终端AI代理工具。输入自然语言（比如“帮我微调一个模型”），它就会自己写代码、执行命令、处理Git，完全像一个AI程序员在帮你干活。
6. Unsloth：专门为微调LLM设计的超快库（比Hugging Face快很多倍）。我们让Claude Code自己用它来微调模型。
7. 代理（Agent）：AI不再被动回答，而是主动“做事”。这篇教程最后让Qwen3.5变成你的“微调助手”，它会自己完成整个流程。

硬件要求（必须满足，否则后面会卡）：
- NVIDIA GPU ≥24GB显存（RTX 4090最理想）。没有GPU也能用CPU，但会很慢（推荐先买张二手4090）。
- Linux服务器/电脑（Ubuntu最简单）或Mac（Windows也行，但命令稍有不同）。
- 至少50GB空闲硬盘（下载模型+venv）。
- 网络（只用于第一次下载模型，之后可离线）。
我个人用MacStudio M4Max

第二部分：核心步骤
步骤1：安装 llama.cpp（让模型能在本地跑的引擎

步骤2：下载 Qwen3.5 模型（推荐35B-A3B版，最聪明+省显存）

步骤3：启动本地服务器（让模型“上线”）

步骤4：安装并配置 Claude Code（让AI代理接入本地模型）
配置环境变量（让Claude Code别去云端，而是连本地服务器）

步骤5：运行 Claude Code + 让Qwen3.5代理自主微调模型（最酷的部分！）
新建一个项目文件夹运行Claude Code（用Qwen模型）
（想让它无脑执行命令不问你？加 `--dangerously-skip-permissions`，但小心！）

现在输入这个神奇提示（直接复制粘贴给Claude Code）：
```
You can only work in the cwd project/. Do not search for CLAUDE.md - this is it. Install Unsloth via a virtual environment via uv. See https://t.co/Y9afiJm88q on how (get it and read). Then do a simple Unsloth finetuning run described in https://t.co/E8lUspSerc. You have access to 1 GPU.
```

会发生什么？
1. Claude Code（背后是Qwen3.5）会自己读文档。
2. 用 `uv` 创建虚拟环境。
3. 安装Unsloth + 依赖。
4. 下载一个简单数据集（Alpaca示例）。
5. 运行LoRA微调（几分钟就能出结果）。
6. 最后告诉你“微调完成！模型保存在这里”。

你只需要喝杯咖啡，它就把整个“安装+微调”流程自动完成了！这就是 Qwen3.5代理自主微调的威力。

第三部分：常见问题 & 故障排除（必看！）

- 连接拒绝（ConnectionRefused）：服务器没启动，或端口被占。`unset ANTHROPIC_BASE_URL` 再重试。
- 显存不够：换小模型（27B或9B），或把 `--cache-type-k/v` 改成 `q8_0`，或加 `--n-gpu-layers 0` 纯CPU（慢）。

进阶玩法：
- 在VS Code / Cursor里装 “Claude Code” 扩展，直接在编辑器里聊天。
- 换其他模型：把 `--model` 和 `--alias` 改成 GLM-4.7-Flash 等。
- 让代理做更复杂的事：提示它“帮我微调一个中文医疗模型”并提供数据集，它就会自己写完整脚本。

结语 & 下一步

恭喜！你现在已经拥有了一个完全本地、能自我进化的AI编程代理！  
第一次跑完后，你可以用微调好的新模型继续让它进化，形成“自举循环”。

想继续深造：
- Unsloth官网文档：https://t.co/1O5NN28sn0
- llama.cpp GitHub
- Claude Code官方
 
去试试吧！跑通那一刻，你会真正感受到“AI已经来到你电脑里”的震撼。


## 元信息

- **作者**: 常为希 ｜AI之道 ([@CryptoYunqi](https://x.com/CryptoYunqi))
- **发布时间**: 2026-03-09T15:17:03.000Z
- **抓取时间**: 2026-03-10T03:12:01.539Z
- **精选类别**: 📰 头条
- **优先级**: 88
- **互动**: ❤️ 105 · 🔄 28 · 💬 4 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2031026485440733540) — @CryptoYunqi (常为希 ｜AI之道)
[2] [Author page](/entities/authors/cryptoyunqi.md)
