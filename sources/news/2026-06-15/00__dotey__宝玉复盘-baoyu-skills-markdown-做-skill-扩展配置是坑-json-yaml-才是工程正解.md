---
type: "source"
title: "宝玉复盘 baoyu-skills：Markdown 做 Skill 扩展配置是坑，JSON/YAML 才是工程正解"
description: "**宝玉用亲身踩坑给出 Skills 工程化设计的明确答案：扩展配置不该是 Markdown，应是 JSON/YAML。**  要点： - baoyu-skills 曾用 EXTEND.md 保存用户自定义设置，但 Markdown 不是严格结构化数据，LLM 读取没问题，程序解析困难，格式一致性难保证 - 重新设计时会更倾向 JSON/YAML：既能让 LLM 方便读取，也能让代码解析与保存 -"
resource: "https://x.com/i/status/2066314944950268139"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-15T01:18:26.232Z"
x_tweet_id: "2066314944950268139"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-15T00:20:47.000Z"
x_engagement:
  likes: 24
  retweets: 4
  replies: 8
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "skills-ecosystem-standards"
x_source: "crawler"
type_okf: "X Tweet"
source_url: "https://x.com/i/status/2066314944950268139"
created: "2026-06-15"
updated: "2026-06-26"
sha256: "98fd665701106172909d38c1563d84d8f0d13d82f7ba2a3866cc004ee4d1ce15"
sources:
  - "/sources/news/2026-06-15/00__dotey__宝玉复盘-baoyu-skills-markdown-做-skill-扩展配置是坑-json-yaml-才是工程正解.md"
---

# 宝玉复盘 baoyu-skills：Markdown 做 Skill 扩展配置是坑，JSON/YAML 才是工程正解

## 摘要

**宝玉用亲身踩坑给出 Skills 工程化设计的明确答案：扩展配置不该是 Markdown，应是 JSON/YAML。**

要点：
- baoyu-skills 曾用 EXTEND.md 保存用户自定义设置，但 Markdown 不是严格结构化数据，LLM 读取没问题，程序解析困难，格式一致性难保证
- 重新设计时会更倾向 JSON/YAML：既能让 LLM 方便读取，也能让代码解析与保存
- 这是 Skills 从『可读性优先』走向『人机双读』的工程教训

宝玉的锐评：当 Skills 真正进入生产环境，扩展配置的『程序可解析』属性会比『Agent 可读』更重要——Markdown 与 JSON/YAML 之间存在明确的工程分水岭。

## 原文

我在做 baoyu-skills 时，做了一个尝试，就是用了一个 EXTEND.md 文件保存用户自定义设置，当时我想的是 Agent 读起来方便。

但是这导致一个问题，Markdown 不是严格的结构化数据，LLM 自己读取没问题，但是程序解析很困难，另外格式很难严格保持一致性。

如果让我再设计的话，我会更倾向于用 json 或者 yaml 文件格式作为 Skill 的扩展配置，这样既可以让 LLM 方便读取，也可以用代码解析和保存。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-15T00:20:47.000Z
- **抓取时间**: 2026-06-15T01:18:26.232Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 24 · 🔄 4 · 💬 8 · 🔖 0 · 👁 0
- **关联主题**: [skills-ecosystem-standards](/concepts/skills-ecosystem-standards.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2066314944950268139) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/skills-ecosystem-standards.md)
