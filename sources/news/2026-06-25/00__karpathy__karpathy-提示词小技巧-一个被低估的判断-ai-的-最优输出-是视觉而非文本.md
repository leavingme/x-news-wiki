---
type: "X Tweet"
title: "Karpathy 提示词小技巧 + 一个被低估的判断：AI 的「最优输出」是视觉而非文本"
description: "**Karpathy 推荐在 prompt 末尾加「structure your response as HTML」并在浏览器打开，并提出一个值得产品团队重新审视的模态论断。**  - 实操技巧：让 LLM 输出 HTML 文件再浏览器渲染，对长报告、slides、对比表特别有效，比 Markdown 在终端里干读体验好一个量级 - 理论判断：人类输入 AI 的最佳模态是音频（说话最自然），但 A"
resource: "https://x.com/i/status/2053872850101285137"
tags:
  - "x-news"
  - "news"
  - "author:karpathy"
timestamp: "2026-06-25T08:39:49.326Z"
x_tweet_id: "2053872850101285137"
x_author: "Andrej Karpathy"
x_handle: "karpathy"
x_created_at: "2026-05-11T16:20:21.000Z"
x_engagement:
  likes: 19347
  retweets: 2025
  replies: 1044
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Karpathy 提示词小技巧 + 一个被低估的判断：AI 的「最优输出」是视觉而非文本

## 摘要

**Karpathy 推荐在 prompt 末尾加「structure your response as HTML」并在浏览器打开，并提出一个值得产品团队重新审视的模态论断。**

- 实操技巧：让 LLM 输出 HTML 文件再浏览器渲染，对长报告、slides、对比表特别有效，比 Markdown 在终端里干读体验好一个量级
- 理论判断：人类输入 AI 的最佳模态是音频（说话最自然），但 AI 输出给人类的最优模态是视觉/动画/视频——「大脑约 1/3 是视觉并行处理器」是生物学硬约束
- 推论：未来 AI 产品的胜负手不是 chatbox 的对话质量，而是「视觉化输出能力」，这给 Cerul、3D 可视化、动画生成类工具的优先级提升提供理论依据


gakki 锐评：这条推文的真正价值不是那个 HTML 小技巧，而是「vision is the 10-lane superhighway」这个判断——它解释了为什么 Sora2、Seedance、HappyHorse 这条线虽然推理成本最高却估值最猛，也意味着 TextOp、Text-to-3D 这条赛道的天花板比市场预期更高。

## 原文

This works really well btw, at the end of your query ask your LLM to "structure your response as HTML", then view the generated file in your browser. I've also had some success asking the LLM to present its output as slideshows, etc.

More generally, imo audio is the human-preferred input to AIs but vision (images/animations/video) is the preferred output from them. Around a ~third of our brains are a massively parallel processor dedicated to vision, it is the 10-lane superhighway of information into brain. As AI improves, I think we'll see a progression that takes advantage:

1) raw text (hard/effortful to read)
2) markdown (bold, italic, headings, tables, a bit easier on the eyes) <-- current default
3) HTML (still procedural with underlying code, but a lot more flexibility on the graphics, layout, even interactivity) <-- early but forming new good default
...4,5,6,...
n) interactive neural videos/simulations

Imo the extrapolation (though the technology doesn't exist just yet) ends in some kind of interactive videos generated directly by a diffusion neural net. Many open questions as to how exact/procedural "Software 1.0" artifacts (e.g. interactive simulations) may be woven together with neural artifacts (diffusion grids), but generally something in the direction of the recently viral https://t.co/z21CP5iQfu

There are also improvements necessary and pending at the input. Audio nor text nor video alone are not enough, e.g. I feel a need to point/gesture to things on the screen, similar to all the things you would do with a person physically next to you and your computer screen.

TLDR The input/output mind meld between humans and AIs is ongoing and there is a lot of work to do and significant progress to be made, way before jumping all the way into neuralink-esque BCIs and all that. For what's worth exploring at the current stage, hot tip try ask for HTML.


## 元信息

- **作者**: Andrej Karpathy ([@karpathy](https://x.com/karpathy))
- **发布时间**: 2026-05-11T16:20:21.000Z
- **抓取时间**: 2026-06-25T08:39:49.326Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 19347 · 🔄 2025 · 💬 1044 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2053872850101285137) — @karpathy (Andrej Karpathy)
