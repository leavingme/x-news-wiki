---
type: "X Tweet"
title: "Chrome CDP弹窗成Agent远程自动化死敌，Codex脚本自动确认是临时解法"
description: "**物理确认层正在成为Agent远程执行的隐性税。**  向阳乔木发现Chrome CDP调试在远程服务器或Mac Mini运行Skill时会强制弹窗确认，导致自动化链路中断。Codex生成的自动点击脚本虽能绕过，但本质是用工程债掩盖平台设计的结构性矛盾。  关键信号：Browser Use和Computer Use每次执行都有物理确认成本，这个成本在远程/无头环境下被放大成数量级的效率损耗。脚本"
resource: "https://x.com/i/status/2060595730742706452"
tags:
  - "x-news"
  - "news"
  - "author:vista8"
timestamp: "2026-05-30T07:18:55.095Z"
x_tweet_id: "2060595730742706452"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-05-30T05:34:40.000Z"
x_engagement:
  likes: 1
  retweets: 0
  replies: 2
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "page-agent-browser-automation"
x_source: "crawler"
---

# Chrome CDP弹窗成Agent远程自动化死敌，Codex脚本自动确认是临时解法

## 摘要

**物理确认层正在成为Agent远程执行的隐性税。**

向阳乔木发现Chrome CDP调试在远程服务器或Mac Mini运行Skill时会强制弹窗确认，导致自动化链路中断。Codex生成的自动点击脚本虽能绕过，但本质是用工程债掩盖平台设计的结构性矛盾。

关键信号：Browser Use和Computer Use每次执行都有物理确认成本，这个成本在远程/无头环境下被放大成数量级的效率损耗。脚本绕过方案证明了问题存在，但无法根治——这给page-agent类纯文本DOM方案留出了差异化空间。

**当「确认弹窗」成为算力与人力之间的人工关税，自动化经济模型需要被重新计算。**

## 原文

烦透了谷歌 Chrome CDP弹窗确认？
让AI写了个脚本，一劳永逸

Chrome 的 CDP 调试真的好用，但 Codex 或 Claude Code 调用时，每次都要弹出对话框确认。

尤其用Skill在远程服务器或Mac Mini运行时，这会影响自动化执行。

好像这个是强制的，还没有配置文件调整，所以让 Codex 写了个程序，自动点击确认。

可能不安全，但自己电脑无所谓。

沿着这个思路，电脑很多重复操作都可以写成软件或脚本。

每次用Computer Use还是太慢、太贵了。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-05-30T05:34:40.000Z
- **抓取时间**: 2026-05-30T07:18:55.095Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 1 · 🔄 0 · 💬 2 · 🔖 0 · 👁 0
- **关联主题**: [page-agent-browser-automation](/concepts/page-agent-browser-automation.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2060595730742706452) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
[3] [Related topic](/concepts/page-agent-browser-automation.md)
