---
type: "X Tweet"
title: "Codex Chrome插件实测踩坑：香港节点被屏蔽、第三方API不兼容——OpenAI的「Computer Use」还在找地理边界"
description: "**OpenAI Codex的浏览器控制能力正式落地，但地区限制和认证门槛暴露了产品成熟度的短板。**  - Chrome插件不支持第三方API模式，强制切换为官方订阅登录，意味着OpenAI在收紧生态控制权 - 香港地区节点被屏蔽，暗示Computer Use功能存在地区合规或算力调度的未解决问题 - 必须在Codex对话中用@Chrome调用，Terminal版找不到node_repl——跨形"
resource: "https://x.com/i/status/2052647425832329358"
tags:
  - "x-news"
  - "news"
  - "author:vista8"
timestamp: "2026-05-08T07:18:41.800Z"
x_tweet_id: "2052647425832329358"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-05-08T07:10:57.000Z"
x_engagement:
  likes: 3
  retweets: 0
  replies: 1
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex Chrome插件实测踩坑：香港节点被屏蔽、第三方API不兼容——OpenAI的「Computer Use」还在找地理边界

## 摘要

**OpenAI Codex的浏览器控制能力正式落地，但地区限制和认证门槛暴露了产品成熟度的短板。**

- Chrome插件不支持第三方API模式，强制切换为官方订阅登录，意味着OpenAI在收紧生态控制权
- 香港地区节点被屏蔽，暗示Computer Use功能存在地区合规或算力调度的未解决问题
- 必须在Codex对话中用@Chrome调用，Terminal版找不到node_repl——跨形态工具链的一致性仍有断裂

gakki锐评：Computer Use是Agent从「代码空间」入侵「GUI空间」的关键一步，但OpenAI显然还没想好怎么处理地缘和渠道问题。开发者尝鲜可以，生产环境慎入。

## 原文

今天发布的Codex Chrome插件用上了，有几个坑：

1. 更新Codex，第三方API模式不支装插件，切为官方订阅登录。

2. Codex Chrome插件安装挑节点，比如香港地区不支持，有些节点会打不开页面。

3. 建议把Chrome设置为默认浏览器，有步骤会引导跳默认浏览器。

4. 如果死活连不上插件，可以重启电脑试试。

简单安装流程：

升级Codex -> 打开设置 -> 电脑控制（Computer Use）-> Google Chrome，安装浏览器插件

必须在Codex 对话中用 @ Chrome 调用。

Terminal 版 Codex虽然能调用Chrome skill，但找不到node_repl，有点坑。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-05-08T07:10:57.000Z
- **抓取时间**: 2026-05-08T07:18:41.800Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 3 · 🔄 0 · 💬 1 · 🔖 0 · 👁 0

## Citations

[1] [Tweet on X](https://x.com/i/status/2052647425832329358) — @vista8 (向阳乔木)
[2] [Author page](/entities/authors/vista8.md)
