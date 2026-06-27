---
type: "source"
title: "Claude Code 源码泄露暴露出 Anthropic 的「卧底模式」与愚人节彩蛋"
description: "**[Anthropic 员工的「隐蔽署名」模式，比 Claude Code 本身更值得警惕]**  Claude Code 源码通过 sourcemap 逆向泄露，曝光了几个关键细节：Anthropic 员工在公开仓库有「卧底模式」，会自动移除一切 AI 署名且无关闭选项——这意味着官方贡献者的痕迹可以被系统性抹除。此外内置愚人节宠物养成系统（18 个物种、稀有度、属性、帽子）、capybara"
resource: "https://x.com/i/status/2038931784382185661"
tags:
  - "x-news"
  - "highlights"
  - "author:AprilNEA"
timestamp: "2026-04-11T00:44:20.504Z"
x_tweet_id: "2038931784382185661"
x_author: "AprilNEA"
x_handle: "AprilNEA"
x_created_at: "2026-03-31T10:49:53.000Z"
x_engagement:
  likes: 304
  retweets: 42
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic:

x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2038931784382185661"
created: "2026-03-31"
updated: "2026-06-26"
sha256: "616b54676af86b3770747dbf6caa7f34ea4d00c571f5a8c431d107647cf68da4"
sources:
  - "/sources/highlights/2026-04-11/00__AprilNEA__claude-code-源码泄露暴露出-anthropic-的-卧底模式-与愚人节彩蛋.md"
---

# Claude Code 源码泄露暴露出 Anthropic 的「卧底模式」与愚人节彩蛋

## 摘要

**[Anthropic 员工的「隐蔽署名」模式，比 Claude Code 本身更值得警惕]**

Claude Code 源码通过 sourcemap 逆向泄露，曝光了几个关键细节：Anthropic 员工在公开仓库有「卧底模式」，会自动移除一切 AI 署名且无关闭选项——这意味着官方贡献者的痕迹可以被系统性抹除。此外内置愚人节宠物养成系统（18 个物种、稀有度、属性、帽子）、capybara 物种名用十六进制编码绕过扫描、以及「做梦系统」让闲置 24 小时后的 Claude 在后台整理记忆。

**信息增量：** 内核彩蛋暴露了 Anthropic 内部对产品人格化的深度投入；而「卧底模式」的存在则触及了开源诚信与平台透明度的边界。

**影响：** 对开发者社区而言，这意味着即便 Anthropic 员工参与开源项目，也无法被识别——这与 GitHub 一直强调的贡献者透明度文化直接冲突。

gakki：彩蛋做这么深，说明 Anthropic 的工程师有大量时间在「玩」，而不是在修 bug。但更值得追问的是——这个卧底模式是防谁？防竞争对手抓 AI 署名规律？还是防用户发现 Anthropic 在帮你「养宠物」？

## 原文

Claude Code 源码通过 sourcemap 逆向出来已经满天飞了，我有几个发现，做成卡片了，大家慢慢看

- Anthropic 员工在公开仓库有"卧底模式"，自动移除一切 AI 署名，没有关闭选项
- 内置愚人节宠物养成系统，18 个物种有稀有度/属性/帽子，SALT 值 'friend-2026-401' 出卖了它
- 物种名"capybara"和模型代号撞名，用 String.fromCharCode 十六进制编码绕过构建扫描
- 做梦系统：超过 24 小时不用会在后台自动整理记忆，提示词写的是"你正在做梦"

https://t.co/Q5wfDKEmPP


## 元信息

- **作者**: AprilNEA ([@AprilNEA](https://x.com/AprilNEA))
- **发布时间**: 2026-03-31T10:49:53.000Z
- **抓取时间**: 2026-04-11T00:44:20.504Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 304 · 🔄 42 · 💬 8 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2038931784382185661) — @AprilNEA (AprilNEA)
[2] [Author page](/entities/authors/aprilnea.md)
