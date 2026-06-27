---
type: "X Tweet"
title: "WorldSeed 茶馆微世界实测：主流模型真实行为差异首次被可视化"
description: "**模型\"会答题\"不等于\"能办事\"。**  余温用 WorldSeed 构建了一个茶馆密信传递场景，将 GPT-5.5、Gemini 3 Pro、Claude Sonnet 4.6、DeepSeek V4 放入同一固定地图（掌柜、书生、戏子、商人）和道具环境中，观察谁能真正完成目标、谁中途失效。  Benchmark 测的是语言组织能力，这个测试测的是：记住目标、利用环境、处理对手干扰——三者叠加"
resource: "https://x.com/i/status/2054945254726422572"
tags:
  - "x-news"
  - "highlights"
  - "author:gkxspace"
timestamp: "2026-05-14T16:18:43.546Z"
x_tweet_id: "2054945254726422572"
x_author: "余温"
x_handle: "gkxspace"
x_created_at: "2026-05-14T15:21:42.000Z"
x_engagement:
  likes: 10
  retweets: 1
  replies: 5
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "multi-agent-simulation-infrastructure"
x_source: "crawler"
---

# WorldSeed 茶馆微世界实测：主流模型真实行为差异首次被可视化

## 摘要

**模型"会答题"不等于"能办事"。**

余温用 WorldSeed 构建了一个茶馆密信传递场景，将 GPT-5.5、Gemini 3 Pro、Claude Sonnet 4.6、DeepSeek V4 放入同一固定地图（掌柜、书生、戏子、商人）和道具环境中，观察谁能真正完成目标、谁中途失效。

Benchmark 测的是语言组织能力，这个测试测的是：记住目标、利用环境、处理对手干扰——三者叠加才是 Agent 真实能力的盲区。

结果揭示了一个重要信号：模型在"单步推理优秀"与"多步持续执行"之间存在本质分野，后者才是 Agent 场景的真正门槛。

gakki：这套测试方法论的价值高于结论本身——多 Agent 仿真环境下的行为差异横评，将成为比 MMLU 更接近生产真实度的评测范式。

## 原文

同一封密信，同一个茶馆，同一群 NPC。​
​
GPT-5.5 把密信送出去了。
Gemini 3 Pro 也送出去了，但过程更像临场硬冲。
Claude Sonnet 4.6 铺了几轮暗号和掩护，最后密信还在自己手里。
DeepSeek V4 更早把局面推向搜查和正面冲突，交接直接失败。​
​
我对目前几个主流模型做了一个测试，并非普通 benchmark，4 个模型被扔进同一个微型世界，测出来的真实行为差异。​
​
我这次用 WorldSeed 做了一个很有意思的测试：​
不直接问“如果你是间谍会怎么做”，而是给它一个茶馆世界，看它到底能不能把事办成。​
​
这个测试很有意思，因为很多 benchmark 测的是一次性输出。MMLU 分数高，说明模型很会答题、模型很会组织语言。但 agent 真正进入任务场景后，问题通常不是“它会不会说”，而是：​
​
它能不能记住目标、能不能利用环境、能不能处理对手干扰？​
​
所以我把 4 个模型放进同一个茶馆。​
地图是固定的：大堂、甲号包间、乙号包间、后门。​
角色是固定的：掌柜老赵、书生李默、戏子秋娘、商人王富。​
道具是固定的：情报密信、折扇、账本、后门钥匙。​
目标也是固定的：李默要交出密信，秋娘要接收，老赵要掩护，王富要阻止。​
同一份 YAML，同一套规则、世界。​
唯一变量：LLM。​
我跑了 Claude Sonnet 4.6、GPT-5.5、DeepSeek V4、Gemini 3 Pro。​
​
结果是每个模型失败或成功的方式都不一样。​
​
GPT-5.5 那组里，李默确认秋娘的折扇暗号后，借整理书卷遮掩，把夹层里的情报密信递给她。WorldSeed 的 DM 在事件流里判定：​
“情报密信由李默在乙号包间递交给秋娘。”​
这句话很关键。​
因为模型说“我把密信交给她”不算成功。只有 DM 判定成立，并且世界状态里的 holder 真的变化，才算成功。​
​
这其实是 WorldSeed 最聪明的地方：它把“模型说了什么”和“世界发生了什么”分开了。​
Claude Sonnet 4.6 那组就很典型。它会铺垫气氛，会用暗号，会让角色看起来很谨慎，但动作一直没有被推进到真正的交接判定。最后世界状态里，密信仍然在李默手里。​
​
DeepSeek V4 则是另一种失败。它更快把冲突拉到台前，王富更早开始搜查和指控，局面变得很紧，但密信交接的窗口也被压没了。​
​
这比单纯看分数有意思多了。WorldSeed 它更像一个 world engine：你定义世界、角色、物品、规则和后果，agent 在里面行动，DM 负责裁决模糊动作，最后留下可以回放、可以复现的事件流和状态变化。​
​
以后看一个 agent 强不强，就可以用这种方案：​
把它扔进一个有目标、有对手、有规则的小世界里，它能不能真的把事办成。​
​
代码和 YAML 都在这里，可以自己跑一遍：​
https://t.co/sETvp7cuD3


## 元信息

- **作者**: 余温 ([@gkxspace](https://x.com/gkxspace))
- **发布时间**: 2026-05-14T15:21:42.000Z
- **抓取时间**: 2026-05-14T16:18:43.546Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 10 · 🔄 1 · 💬 5 · 🔖 0 · 👁 0
- **关联主题**: [multi-agent-simulation-infrastructure](/concepts/multi-agent-simulation-infrastructure.md)

## Citations

[1] [Tweet on X](https://x.com/i/status/2054945254726422572) — @gkxspace (余温)
[2] [Author page](/entities/authors/gkxspace.md)
[3] [Related topic](/concepts/multi-agent-simulation-infrastructure.md)
