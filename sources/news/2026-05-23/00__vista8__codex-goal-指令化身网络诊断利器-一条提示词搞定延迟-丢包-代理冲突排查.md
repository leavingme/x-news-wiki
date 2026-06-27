---
type: "X Tweet"
title: "Codex /goal 指令化身网络诊断利器：一条提示词搞定延迟/丢包/代理冲突排查"
description: "**[Codex 从代码助手跨界网络运维，/goal 指令解锁轻量诊断场景]**  向阳乔木验证了一个高实用性场景：利用 Codex 的 /goal（中文 /目标）指令执行 macOS 网络质量诊断。提示词按\"先诊断、再最小可逆修改、最后复测\"的 Harness 工程思路设计，覆盖 DNS 查询耗时、Wi‑Fi 频段/信道/RSSI、路由追踪、MTU、后台高流量进程（VPN/网盘/Tailscal"
resource: "https://x.com/i/status/2058231846081843402"
tags:
  - "x-news"
  - "news"
  - "author:vista8"
timestamp: "2026-05-23T19:18:41.010Z"
x_tweet_id: "2058231846081843402"
x_author: "向阳乔木"
x_handle: "vista8"
x_created_at: "2026-05-23T17:01:26.000Z"
x_engagement:
  likes: 132
  retweets: 17
  replies: 4
  bookmarks: 0
  views: 0
x_selected: 1
x_priority: 0
x_related_topic:
x_source: "crawler"
---

# Codex /goal 指令化身网络诊断利器：一条提示词搞定延迟/丢包/代理冲突排查

## 摘要

**[Codex 从代码助手跨界网络运维，/goal 指令解锁轻量诊断场景]**

向阳乔木验证了一个高实用性场景：利用 Codex 的 /goal（中文 /目标）指令执行 macOS 网络质量诊断。提示词按"先诊断、再最小可逆修改、最后复测"的 Harness 工程思路设计，覆盖 DNS 查询耗时、Wi‑Fi 频段/信道/RSSI、路由追踪、MTU、后台高流量进程（VPN/网盘/Tailscale 等）等维度。关键价值点在于：它把一个需要 Terminal 经验的网络排查任务，转化为了自然语言可触达的标准流程，降低了工程师的摩擦。

**信息增量：** 展示了 /goal 这类 Goal 指令在非代码领域的跨场景迁移能力——模型驱动的诊断 → 修复 → 复测闭环，本质是 Agent 化工作流的轻量 Demo。

**影响范围：** 适合需要快速定位网络问题的开发者，尤其是使用代理/VPN 的 macOS 用户。


gakki：/goal 指令的真正潜力不在代码生成，在于把"需要查手册才能做的事"变成"说一句话就有人替你跑一遍"。这个案例是把 Agent 能力具象化的好教材，但本质还是个人工作流优化，不是结构性变化。

## 原文

最近最火的Codex优化网络速度Use Case，写了个提示词，亲测效果不错：

1. 在Codex中输入 “/goal” ，如果中文版输入 “/目标”，如果不用，直接发提示词也行。

2. 提示词如下：

优化当前电脑的网络速度和稳定性。

请按“先诊断、再最小可逆修改、最后复测”的方式执行，不要直接破坏性重置网络。

诊断要求：
1. 先跑 before 基准：networkQuality、DNS 查询耗时、到路由器的 ping、到公网 DNS 的 ping。
2. 区分真实公网链路和本机代理/VPN/TUN：检查 scutil --nwi、route get default、scutil --dns、scutil --proxy。
3. 检查 Wi‑Fi 质量：频段、信道、带宽、RSSI、噪声、Tx Rate、周边干扰。
4. 检查 MTU、丢包、mDNS/DNS 缓存、网络服务顺序。
5. 找出高流量或会接管路由的后台进程，如 VPN、Tailscale、Shadowrocket、Stash、iCloud、Dropbox、网盘、下载器。

优化要求：
1. 只做安全、可逆、低风险修改。
2. 把真实使用的 Wi‑Fi/以太网排到网络服务第一位。
3. 禁用明显无用的伪网络服务或旧网络服务，但不要删除配置。
4. 根据实测 DNS 延迟设置更快的 DNS。
5. 刷新 DNS 和 mDNS 缓存。
6. 停止或提示我关闭明显占用带宽的后台程序。
7. 如果需要 sudo 或会影响 VPN/远程连接，先说明风险，不要强行执行。

复测要求：
1. 再跑 after：networkQuality、DNS 查询耗时、路由器 ping、公网 ping。
2. 对比 before/after：下行、上行、空闲延迟、加载延迟、丢包、DNS 耗时。
3. 总结发现的 3 个主要问题、已修复项、未修复但建议手动处理项。


## 元信息

- **作者**: 向阳乔木 ([@vista8](https://x.com/vista8))
- **发布时间**: 2026-05-23T17:01:26.000Z
- **抓取时间**: 2026-05-23T19:18:41.010Z
- **精选类别**: 📰 头条
- **优先级**: 0
- **互动**: ❤️ 132 · 🔄 17 · 💬 4 · 🔖 0 · 👁 0
## Citations

[1] [Tweet on X](https://x.com/i/status/2058231846081843402) — @vista8 (向阳乔木)
