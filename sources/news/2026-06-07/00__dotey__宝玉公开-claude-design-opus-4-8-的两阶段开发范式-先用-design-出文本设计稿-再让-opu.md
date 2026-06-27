---
type: "X Tweet"
title: "宝玉公开 Claude Design + Opus 4.8 的两阶段开发范式：先用 Design 出文本设计稿，再让 Opus 按技术栈约束实现 MVP"
description: "**Claude Design 的真正价值不是出图，而是交付 HTML/CSS/React/data.js 这种对 AI 友好的文本格式设计稿，可以直接进 git 版本管理。**  - 第一阶段用 Claude Design 产出 UI/UX 草案，颜色系统、尺寸规范、组件结构、数据结构一次性给齐，比 Figma 对 AI 友好得多。 - 第二阶段把设计稿丢给 Claude Opus 4.8 写 "
resource: "https://x.com/i/status/2063674134903603302"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-07T19:18:37.805Z"
x_tweet_id: "2063674134903603302"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-07T17:27:09.000Z"
x_engagement:
  likes: 62
  retweets: 7
  replies: 7
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "claude-design-tool"
x_source: "crawler"
---

# 宝玉公开 Claude Design + Opus 4.8 的两阶段开发范式：先用 Design 出文本设计稿，再让 Opus 按技术栈约束实现 MVP

## 摘要

**Claude Design 的真正价值不是出图，而是交付 HTML/CSS/React/data.js 这种对 AI 友好的文本格式设计稿，可以直接进 git 版本管理。**

- 第一阶段用 Claude Design 产出 UI/UX 草案，颜色系统、尺寸规范、组件结构、数据结构一次性给齐，比 Figma 对 AI 友好得多。
- 第二阶段把设计稿丢给 Claude Opus 4.8 写 MVP，但必须显式约束技术栈（例如 AppKit 而非 SwiftUI），再通过小版本迭代逐步完善。
- 关键洞察：data.js 是「设计 App 不会有但开发特别需要」的产物，git diff 能让 AI 准确理解设计变更。

宝玉在用亲身实践定义一种「设计即代码」的 AI 原生工程流——把 Claude Design 当作 prompt 的可视化前端，把 Opus 当实现后端，Figma 在这个工作流里反而成了信息损耗最大的中间层。

## 原文

之所以研究 Claude Design，是因为最近摸索出一套不错的开发模式：

1. 先用 Claude Design 去设计 App 的 UI 和 UX，第一版本越简单越好。

Claude Design 交付的结果是 HTML + CSS + React + data.js，通过 CSS 一下就可以看清楚设计系统的颜色系统、尺寸规范，通过 React 可以看清楚组件结构，通过 data 可以知道数据结构什么样子。

这几个组合可比 figma 对于 AI 来说友好多了，尤其是 data.jsx，这是一般的设计 App 不会有的，但对开发特别重要的。

还有一个优势就是交付的结果都是文本格式的，可以一起提交到 git 做版本管理，用 git diff 就可以清楚的让 AI 知道设计稿修改了什么。

2. 把 Claude Design 生成设计稿交给 Claude Opus 4.8 去实现一个 MVP，第一个版本只实现 UI 功能，告诉它技术栈（比如 AppKit 而不是 SwiftUI），通过几个小版本的迭代，让它逐步完善。比如第一个版本只是主界面

之所以不用 GPT，是因为 Opus 在 UI 实现上比 GPT 好太多，同样的设计稿，GPT 实现的各种细节问题的，不能很好的遵守设计稿。

之所以不一下子实现太多功能，是因为功能越少 Agent 越容易聚焦，做出来效果越好。所以怎么拆分版本，也是用好 Coding Agent 的一种能力。

非 UI 的功能，用什么模型没有那么大差别，所以我也会用 Codex 配合非 UI 工作。

3. 每次生成一个版本，要让它可以运行，无论是 Agent 还是人都是需要即时反馈的，有了反馈才知道方向对不对，才知道下一步要做什么。

人在测试的时候，能发现各种问题，代码问题就让 Agent 去修改，UI 设计有问题不是马上修改代码，而是要去 Claude Design 去修改设计稿，设计稿修改完了，把设计稿下载回去，替换本地的设计稿文件。

设计稿替换后，让 Agent 去 git diff 分析一下变更，给它个截图，都不用多说它就知道怎么改了。

4. 版本稳定后继续新一轮迭代

当设计的功能做完之后，不一定是要马上去设计新的功能，而是可以重新审查一下实现的代码，重构优化一下。

比如我在第一版实现后，让 Opus 4.8 去做了性能分析，看性能问题在哪，然后告诉我当前用 NSScrollView，内容一多就内存暴涨，建议 NSTableView。

我心想这不应该是一开始就该考虑到的么！不管怎么样亡羊补牢也不算晚。

性能优化完就继续加功能，更新设计稿，让 Agent 参考新设计稿优化功能。

---

再回来说研究 Claude Design 的事，因为反复 Claude Design 修改，同步到本地，然后这一步让我后来很烦，因为需要在本地和 Claude Design 网页切换，还要导出下载到本地，解压缩替换。

于是我就想能不能在本地就可以重现 Claude Design 直接集成到本地 Agent，所以我去研究了 Claude Design，然后发现完全可以本地跑起来，只是本地 Agent 在工具调用上有些差异，以及不方便直接在设计稿上标记编辑。

上周正好 Codex 发布了直接调试 iOS 的功能，它带了标记修改的功能，然后我灵机一动，这不正好可以代替 Claude Design 的标记修改功能么。（图2）

问题是 GPT 5.5 模型设计能力不够，在 Codex 里面设计效果也不会好。

接着  Cursor 也发布了网页标记功能，这下正好，Cursor 里面可以用 Opus 4.8，做成 Skill 就可以本地运行了，还可以在 Cursor 内置浏览器中，直接标记、评论修改。

好在 Claude Code 的核心逻辑都在浏览器前端，他们在网页上做了个 Harness，这给了我分析的便利，耐心一点就可以分析出所有的 Prompt、内置 Skills、初始组件，再针对 Cursor 的工具做一些兼容就可以跑起来了。（图3）

测试对比了一下和在 Claude Design 上跑的效果差不多。（图4）

归根结底，还是 Claude Desktop 太拉胯了，Claude Design 本应该集成在 Claude Desktop 的，不然也不需要我这么折腾。

当然不折腾下我也没机会学习 Claude Design 优秀的设计，真的很棒，接下来会系列更新我的学习心得。

推荐去试试最终的 Skill，让你本地就可以跑 Claude Design：
https://t.co/d2EaYV6q7j


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-07T17:27:09.000Z
- **抓取时间**: 2026-06-07T19:18:37.805Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 62 · 🔄 7 · 💬 7 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2063674134903603302) — @dotey (宝玉)
