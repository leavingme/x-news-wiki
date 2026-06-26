---
type: "X Tweet"
title: "Claude Code + Fable 5 把视频后期变成\"软件工程项目\"：从 Whisper 转写到代码调色的全自动流水线"
description: "**[核心判断]** Claude Code + Fable 5 把视频后期彻底重构为软件工程项目——从语音转写、智能选镜头、FFmpeg 粗剪到 LUT 调色全代码化，AI 既是导演也是工程师。  - 25GB 原始素材由本地 Whisper 给出毫秒级单词时间戳 JSON，17 个 Take 全部可被结构化处理 - 多个 Subagent 自动剔除\"嗯\"\"啊\"废片，把决策写入 JSON 后由 "
resource: "https://x.com/i/status/2064904545298194855"
tags:
  - "x-news"
  - "news"
  - "author:dotey"
timestamp: "2026-06-11T04:19:22.009Z"
x_tweet_id: "2064904545298194855"
x_author: "宝玉"
x_handle: "dotey"
x_created_at: "2026-06-11T02:56:22.000Z"
x_engagement:
  likes: 58
  retweets: 8
  replies: 7
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic: "claude-code-natural-language-workflow"
x_source: "crawler"
---

# Claude Code + Fable 5 把视频后期变成"软件工程项目"：从 Whisper 转写到代码调色的全自动流水线

## 摘要

**[核心判断]** Claude Code + Fable 5 把视频后期彻底重构为软件工程项目——从语音转写、智能选镜头、FFmpeg 粗剪到 LUT 调色全代码化，AI 既是导演也是工程师。

- 25GB 原始素材由本地 Whisper 给出毫秒级单词时间戳 JSON，17 个 Take 全部可被结构化处理
- 多个 Subagent 自动剔除"嗯""啊"废片，把决策写入 JSON 后由 FFmpeg 无缝拼接
- AI 从零手写 LUT 完成调色，全程无 Premiere、Final Cut 等非编软件参与

gakki 锐评：当 Claude Code 能把"剪片子"拆成可读、可 diff、可回滚的代码提交时，Adobe 的护城河不再是功能，而是被"代码即剪辑"绕开的另一种接口形态——创意工具的代码化是这一代 AI 最大的隐性革命。

## 原文

这段视频展示了一个极其前沿且硬核的视频制作方式：视频完全没有使用传统的非编软件（如 Premiere 或 Final Cut），而是由 Claude Code 配合 Fable 5 通过全自动编写代码和调用命令行工具“剪辑”而成的。

整个工作流被抽象成了一个软件工程项目，主要包含以下几个关键步骤：

1. 全量语音转写与时间戳打点 (Whisper)： 将拍摄的 25GB 原始素材（17个 Take，4个场景）交给本地运行的 Whisper 模型。模型不仅输出了文本，还生成了精确到毫秒级的单词时间戳 JSON 文件。

2. AI 智能挑选最佳镜头 (Subagents)： 多个 Subagent（子智能体）基于生成的 JSON 文件，自动分析并剔除了包含“嗯”、“啊”等停顿词的废片，选出了表达最清晰、结尾最干净的备选片段。

3. FFmpeg 自动粗剪： 将 AI 挑选出的最终片段生成一个决策 JSON 文件，然后直接通过代码调用 ffmpeg，将这些片段无缝拼接到一起，完成第一版粗剪。

4. 纯代码自定义调色 (Color Grading)： AI 从零开始手写了 LUTs（色彩查找表）代码，并且为了方便人类介入，它还自动生成了一个带有滑块的 HTML 网页，让人类可以通过拖拽滑块直观地调整色温、亮度和对比度，调好后的参数会直接传回代码中。

5. React 组件化动画制作 (Remotion)： 并没有使用 After Effects。AI 将原本静态的图形文件转写成了基于 React 的 Remotion 动画组件。利用第一步生成的单词时间戳，AI 实现了极其精准的“卡点”——当作者念出特定的词（如 "right"）时，UI 动画会自动触发，完全不需要手动对齐时间轴。

6. Figma MCP 协作打磨： AI 将生成的画面导出到 Figma 中，让人类设计团队进行排版和视觉优化。人类修改完毕后，AI 再通过 MCP（模型上下文协议）将 Figma 的最新设计自动“抓”回代码里，最终渲染出 4K 24fps 的成片。


## 元信息

- **作者**: 宝玉 ([@dotey](https://x.com/dotey))
- **发布时间**: 2026-06-11T02:56:22.000Z
- **抓取时间**: 2026-06-11T04:19:22.009Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 58 · 🔄 8 · 💬 7 · 🔖 0 · 👁 0
- **关联主题**: [claude-code-natural-language-workflow](/concepts/claude-code-natural-language-workflow.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2064904545298194855) — @dotey (宝玉)
[2] [Author page](/entities/authors/dotey.md)
[3] [Related topic](/concepts/claude-code-natural-language-workflow.md)
