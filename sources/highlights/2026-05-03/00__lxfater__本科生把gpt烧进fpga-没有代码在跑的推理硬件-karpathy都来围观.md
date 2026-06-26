---
type: "X Tweet"
title: "本科生把GPT烧进FPGA：没有代码在跑的推理硬件，Karpathy都来围观"
description: "**AI推理的硬件底层范式正在被重新审视。**  - 多伦多大学本科生将GPT权重直接刻进FPGA的ROM，实现零软件栈推理——没有PyTorch、没有CUDA、CPU不参与推理循环 - 原推4300赞、36万浏览，Karpathy亲自关注，GitHub全开源可验证 - 这不是优化问题，是思维范式的转换：从「程序调度数据」到「电路即模型」  锐评：边缘AI的终局可能不是更小的模型，而是更直接的硬件"
resource: "https://x.com/i/status/2050804039865012512"
tags:
  - "x-news"
  - "highlights"
  - "author:lxfater"
timestamp: "2026-05-03T07:18:36.390Z"
x_tweet_id: "2050804039865012512"
x_author: "铁锤人"
x_handle: "lxfater"
x_created_at: "2026-05-03T05:05:59.000Z"
x_engagement:
  likes: 29
  retweets: 2
  replies: 7
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# 本科生把GPT烧进FPGA：没有代码在跑的推理硬件，Karpathy都来围观

## 摘要

**AI推理的硬件底层范式正在被重新审视。**

- 多伦多大学本科生将GPT权重直接刻进FPGA的ROM，实现零软件栈推理——没有PyTorch、没有CUDA、CPU不参与推理循环
- 原推4300赞、36万浏览，Karpathy亲自关注，GitHub全开源可验证
- 这不是优化问题，是思维范式的转换：从「程序调度数据」到「电路即模型」

锐评：边缘AI的终局可能不是更小的模型，而是更直接的硬件映射。FPGA路线目前仍是学术玩具，但它指向的方向——AI推理去软件化——值得持续跟踪。

## 原文

看懂这块电路板，你就看懂了 AI 接下来要的另一条主线

这两天 X 上一个学生把整个 GPT 烧进了一块板子，没 GPU、没 PyTorch、没一行代码在跑

他叫 Luthira，多伦多大学工程学院本科生，跟同学 Krish Chhajer 一起搞的

板子是 Terasic DE1-SoC，大学本科 FPGA 课的标配教学板

听起来像本科课程作业，确实就是

但他们做完之后，原推 4300 赞、36 万浏览，karpathy 本人都被疯狂进来了

视频和 GitHub 全公开，谁都能点进去验证

但那这事到底牛在哪？

你得先知道 FPGA 是什么

它不是 GPU，是一块可以按设计图把电路连出来的可编程芯片

正常 AI 模型跑起来是这样：权重存在内存里，每次推理把它搬进 GPU，用 PyTorch 调度，CPU 控制循环

他们做的是相反的事，把 GPT 的权重直接刻进 ROM 只读存储器里，等于焊死在硅片上

结果就是这块板子里没有任何程序在跑

没有 PyTorch、没有 CUDA、CPU 也不参与推理循环

通电之后，电流流过那条被设计成 transformer 的电路，token 就一个一个出来

数字也很猛，一秒能吐 5 万多 token

但这里有个必须诚实交代的事

他们烧的不是 GPT-4，是一个字符级的微型 GPT，karpathy 那个用人名数据集训的教学版本

也就是说，那 5 万其实更接近字符，模型规模也是教学级

但社区为什么还是炸了？

因为大家炸的不是模型有多大

是这条路真的通了，一个本科生周末项目就能把transformer 完全做成电路，那这条路放大到工业级会发生什么？

其实这个在工业界早就发生了

你手里那台 iPhone，从 2017 年的 A11 芯片开始，里面就有一块叫 Neural Engine 的电路

它的设计哲学和 GPU 完全不同，专门为某类 AI 任务做的，做不了别的

谷歌 TPU、特斯拉 FSD 芯片、Etched 的 Sohu（按它自家公布数据 8 颗顶 160 颗 H100）都在这条线上

连 OpenAI 自己都坐不住

2026 年三季度他们和 Broadcom 合作的 10GW 自研 ASIC 就要部署，主战场从用 H100 切到造自己的电路

所以 AI 行业其实不是 OpenAI 跟国内大模型那一条主线

它是通用电路跟专用电路的赛局

通用那边 NVIDIA 一家独大

专用这边苹果谷歌特斯拉早就在跑，OpenAI 自己也要切过来，学生项目把这条路演示到了最极端的形态：连权重都焊死

你天天用 iPhone，每次拍照、修图、识别人脸，那块 Neural Engine 都在替你跑这条专用路

你只是从来没把它跟 AI路线之争连起来

这就是这块电路板真正值得你看的地方


## 元信息

- **作者**: 铁锤人 ([@lxfater](https://x.com/lxfater))
- **发布时间**: 2026-05-03T05:05:59.000Z
- **抓取时间**: 2026-05-03T07:18:36.390Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 29 · 🔄 2 · 💬 7 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2050804039865012512) — @lxfater (铁锤人)
[2] [Author page](/entities/authors/lxfater.md)
