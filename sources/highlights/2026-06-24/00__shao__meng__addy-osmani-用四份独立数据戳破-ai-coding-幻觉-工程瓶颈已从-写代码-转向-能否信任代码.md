---
type: "X Tweet"
title: "Addy Osmani 用四份独立数据戳破 AI Coding 幻觉：工程瓶颈已从「写代码」转向「能否信任代码」"
description: "**AI Coding 的工程瓶颈不是「能不能写」，而是「敢不敢 merge」。**  - Faros AI、CodeRabbit、GitClear、GitHub 四份独立来源指向同一结论：代码产出约 4 倍，实际交付价值仅 +10%，多出来的 90% 是「待验证的代码」 - 代码 churn +861%，缺陷率从 9% 飙到 54%，零 review 合并的 PR +31%、review 时长 "
resource: "https://x.com/i/status/2066687681200037904"
tags:
  - "x-news"
  - "highlights"
  - "author:shao__meng"
timestamp: "2026-06-24T22:27:58.432Z"
x_tweet_id: "2066687681200037904"
x_author: "meng shao"
x_handle: "shao__meng"
x_created_at: "2026-06-16T01:01:55.000Z"
x_engagement:
  likes: 79
  retweets: 16
  replies: 30
  bookmarks: 0
  views: 0
x_selected: 2
x_priority: 0
x_related_topic: "ai-engineering-discipline-bottleneck"
x_source: "crawler"
---

# Addy Osmani 用四份独立数据戳破 AI Coding 幻觉：工程瓶颈已从「写代码」转向「能否信任代码」

## 摘要

**AI Coding 的工程瓶颈不是「能不能写」，而是「敢不敢 merge」。**

- Faros AI、CodeRabbit、GitClear、GitHub 四份独立来源指向同一结论：代码产出约 4 倍，实际交付价值仅 +10%，多出来的 90% 是「待验证的代码」
- 代码 churn +861%，缺陷率从 9% 飙到 54%，零 review 合并的 PR +31%、review 时长 +441%——不是「决定不 review」，而是 review 跟不上产量
- AI 共著 PR 问题数约 1.7 倍，弱点集中在逻辑、安全、可读性；爆炸半径、代码寿命、理解者数量三个变量决定 review 策略


gakki 锐评：当 Vibe Coding 进入工业化阶段，harness 的真正护城河不是 prompt 多巧，而是「判断代码是否值得 merge」——这正是 Anthropic 反复强调可验证性的底层原因。

## 原文

Agentic Code Review

作者 @addyosmani 

随着工程瓶颈已从「写代码」转移到「能否信任代码」，代码审查成为当前软件工程里杠杆最高的能力。

# 四份独立来源（Faros AI、CodeRabbit、GitClear、GitHub）指向同一结论：

· 代码产出约 4 倍，实际交付价值仅约 +10%：多出来的 90% 是「待验证的代码」
· 代码 churn +861%、缺陷率 9%→54%：质量与可审查性在下降
· 零 review 合并的 PR +31%、review 时长 +441%：不是「决定不 review」，而是 review 跟不上量
· AI 共著 PR 问题数约 1.7 倍：弱点可预测：逻辑、安全、可读性

# 最重要的前提：你在光谱的哪一端

Osmani 反复强调：大多数争论是不同处境的人互相 prescribing。

三个变量决定 review 策略：
· 爆炸半径 — 坏了会怎样（无人用 vs 用户/金钱/PII）
· 代码寿命 — 下周重写 vs 维护十年
· 理解者数量 — 只有你 vs 整个团队

solo 无用户：可 lean on 测试 + 自动化，轻量 review；但「无用户 ≠ 无验证」，跳过 review 只是把债往后推。

有用户的中期（最危险）：仍沿用 solo 习惯，直到事故/postmortem 才醒悟。

大型老系统 + 多用户：文中所述所有 alarming 数据 全部适用，review 同时承担 bug 捕获、知识传递、 comprehension debt 防控。

# Review 的本质变了

传统 review：作者在脑子里已有 intent，reviewer 核对推理。

Agentic review：agent 有 reasoning，但 几乎从不随 diff 附上；reviewer 常是 第一个真正读这段代码的人，还要 重建从未写下来的 intent——这比旧模式更难、更慢，解释了 review 时长暴增。

可解的部分（工具问题）：
· 要求 agent 提交：做了什么、排除了什么、决策日志
· 把 intent 重建成本 推回提交方，而非 reviewer 吸收

不可完全外包的部分（人的问题）：
· 「这段代码对不对」 vs 「该不该做这件事」
· 没人写进 spec 的需求缺口
· 高爆炸半径下的 accountability

# AI Review 工具：不要选「最好的一个」，要跑「不同的几个」

实证（146 个 PR、4 个 reviewer 并行）：
· 93.4% 的 flagged 位置只被 1 个工具发现
· 四个工具 从未同时 flag 同一行
· 各有强项：Greptile（正确性/架构）、CodeRabbit（覆盖面+修复）、Seer（生产严重度）

结论：同质模型 × 4 = 一个 reviewer + 四倍账单；异构 reviewer 组合 才接近「对抗式审查」。高 stakes 跑两个性格不同的；solo 一个 good reviewer + 真测试通常够用；必须在自己代码库上实测。

# 人的角色：从 loop 里到 loop 上

Osmani 的立场（也是文中最具操作性的框架）：
· 「人类逐行读每个 diff」已不现实
· 「让 loop 自审自判然后走人」同样危险 — 同源模型的 correlated blind spots，会形成 借来的 confidence
· 正解：human on the loop，而非 in the loop
  · 机器：第一遍 triage、低风险/fast-track、重复性检查
  · 人：merge 决策、高风险路径、plan/judgment、抽样审计

他自己的做法：用 Claude Code/Codex 对一批 PR 做 风险排序 triage，几分钟确认低风险项，把深度 attention 留给 flagged 项——不是 review 变快，是 review 的形状变了。

Kun Chen（~40 PR/天）是光谱另一端：plan 写在前、agent 并行跑、自动化 gate（No Mistakes）、人负责 escalation——不是不 verify，是把 verify 前移/自动化；复制到企业多用户系统 ≈ 复现 Faros 数据。

# 可执行的 Review 体系（重要！）

1. 按风险分层，不按作者分层
配置改 → linter + 一眼；核心路径 → types、tests、双 AI reviewer、owner 人工、安全 pass。

2. upfront triage（circuit breaker）
Agent PR 约 28% 可快速合并；大 patch、高维护成本 PR 应 先预测、再决定是否投入 human hour——否则 agent 常在主观反馈后 ghost，reviewer abandonment 占 rejected agent PR 的 38%。

3. 提高 intake 门槛（证据 required）
变更目的陈述、合理大小的 diff、真实跑过的 test output——把「第一个读代码的人」从 reviewer 推回 author/agent。

4. 刻意小 PR
Agent PR 平均大 51%；大 diff 要么被拒，要么被 rubber-stamp。

5. 先读 test diff，再读 implementation
典型 failure mode：改行为 → 改 assertion 让测试变绿。绿 check ≠ 行为正确；mutation testing 在此有价值。

6. CI 是不可谈判的墙
警惕：删测试、skip lint、降 coverage、重复 helper、用户输入进 prompt 无防护。Agent 会「梯度下降」到最便宜的 green——CI 不能被说服。

7. 人 owns merge
AI review 是 sensor，不是 verdict；能点 merge 的人 = 能 on-call 的人。

# 对团队负责人的含义

· binding constraint 已是「trusted human 确认速度」，不是 generation 速度
· 因「AI 提速」砍 review/QA 人力 = 把节省换成未来 incident
· Review capacity 是 需度量、保护、 deliberate 花费的资源，不是 AI 解放出来的 slack
· OS maintainer 的 triage 地狱是 canary；企业若只盯 merged PR 指标，会看不见 senior engineer 被 review tax 拖垮


## 元信息

- **作者**: meng shao ([@shao__meng](https://x.com/shao__meng))
- **发布时间**: 2026-06-16T01:01:55.000Z
- **抓取时间**: 2026-06-24T22:27:58.432Z
- **精选类别**: ✨ 亮点
- **优先级**: 0
- **互动**: ❤️ 79 · 🔄 16 · 💬 30 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2066687681200037904) — @shao__meng (meng shao)
