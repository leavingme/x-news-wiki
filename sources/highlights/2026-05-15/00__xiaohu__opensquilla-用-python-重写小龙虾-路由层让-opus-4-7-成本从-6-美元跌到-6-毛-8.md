---
type: "source"
title: "OpenSquilla 用 Python 重写小龙虾：路由层让 Opus 4.7 成本从 6 美元跌到 6 毛 8"
description: "**[本地路由器做模型路由层，复杂任务才上 Opus，便宜模型扛简单任务，成本差 10 倍]**  同一个测试集跑分 0.9251 vs 0.9255（对标 OpenClaw），但核心思路是把「模型选择权」从 Agent 框架层下放到一个本地路由器：简单任务自动路由到国产便宜模型，Opus 4.7 只处理真正需要它的复杂推理。  四层记忆（手头任务/历史任务/知识规则/原始日志）+ 按需添加工具（"
resource: "https://x.com/i/status/2055299820215300380"
tags:
  - "x-news"
  - "highlights"
  - "author:xiaohu"
timestamp: "2026-05-15T16:18:43.247Z"
x_tweet_id: "2055299820215300380"
x_author: "小互"
x_handle: "xiaohu"
x_created_at: "2026-05-15T14:50:37.000Z"
x_engagement:
  likes: 16
  retweets: 2
  replies: 6
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-agent-self-sustaining-business"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2055299820215300380"
created: "2026-05-15"
updated: "2026-06-26"
sha256: "9145d644b257273d0e4dbab3adb3514a22038ce39ffb4b46673e421986b0ae58"
sources:
  - "/sources/highlights/2026-05-15/00__xiaohu__opensquilla-用-python-重写小龙虾-路由层让-opus-4-7-成本从-6-美元跌到-6-毛-8.md"
---

# OpenSquilla 用 Python 重写小龙虾：路由层让 Opus 4.7 成本从 6 美元跌到 6 毛 8

## 摘要

**[本地路由器做模型路由层，复杂任务才上 Opus，便宜模型扛简单任务，成本差 10 倍]**

同一个测试集跑分 0.9251 vs 0.9255（对标 OpenClaw），但核心思路是把「模型选择权」从 Agent 框架层下放到一个本地路由器：简单任务自动路由到国产便宜模型，Opus 4.7 只处理真正需要它的复杂推理。

四层记忆（手头任务/历史任务/知识规则/原始日志）+ 按需添加工具（16 个自带工具）+ 三档代码沙箱安全隔离，是工程实现层面的关键设计。

gakki：这是第一个把「模型路由」做成生产级开源方案的案例，不是概念演示。如果路由层判断准确率能稳定，10 倍成本差会成为中小团队跑小龙虾的标配架构。

## 原文

你敢把 Opus 和 GPT  接入到小龙虾里跑吗？

反正我是不敢，跑不起...

但是不接入这些顶级模型，有些复杂任务，国产模型真的搞不定。

发现一个以前不知道的团队做的开源项目 @OpenSquilla 

脑洞很大的用 Python 重写了一个【智能省钱+智能安全】小龙虾

更省钱还更安全...

用一个本地路由器，把简单任务丢给便宜模型，复杂任务才上 Opus 4.7

同一套测试跑下来分数和 OpenClaw 几乎一样（0.9251 vs 0.9255），但成本从 6 美元降到 6 毛8，差快十倍。

四层记忆：模仿人脑分四层存东西。手头正在干的、过去干过的、知识和规则、原始日志，分开放。还会「做梦」，定期把零碎记忆整理成系统知识

按需加技能：自带 16 个工具（写 PPT、查 GitHub、跑定时任务等等），用哪个加哪个，不一股脑全塞进去

三档沙箱：跑代码的时候关进小黑屋，分三个安全等级。要是连续被拦下来好几次，Agent 自己就停了，不让它继续乱搞

一个入口管所有：网页、命令行、Slack、飞书、钉钉、Discord、Telegram、QQ 全都连进同一套后端，行为一致

20 多家模型随便挑：OpenAI、Claude、Gemini、DeepSeek、Qwen、Kimi、智谱、火山，国内外主流的都接了，挂一个用另一个


## 元信息

- **作者**: 小互 ([@xiaohu](https://x.com/xiaohu))
- **发布时间**: 2026-05-15T14:50:37.000Z
- **抓取时间**: 2026-05-15T16:18:43.247Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 16 · 🔄 2 · 💬 6 · 🔖 0 · 👁 0
- **关联主题**: [ai-agent-self-sustaining-business](/concepts/ai-agent-self-sustaining-business.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2055299820215300380) — @xiaohu (小互)
[2] [Author page](/entities/authors/xiaohu.md)
[3] [Related topic](/concepts/ai-agent-self-sustaining-business.md)
