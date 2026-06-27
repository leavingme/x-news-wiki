---
okf_version: "0.1"
---

# x-news Wiki Bundle

> Open Knowledge Format (OKF) v0.1 bundle of all AI-selected X/Twitter posts from the [x-news](https://github.com/leavingme/x-news) pipeline.

- **生成时间**: 2026-06-27T08:40:42.884Z
- **数据范围**: 2026-01-30 → 2026-06-27 (4829 条精选)
- **OKF 版本**: 0.1

## 目录

- [📰 头条 (News)](sources/news/index.md) — 3482 条，按日分目录
- [✨ 亮点 (Highlights)](sources/highlights/index.md) — 1347 条，按日分目录
- [👤 作者 (Authors)](entities/authors/index.md) — 811 位
- [🧩 主题 (Concepts)](concepts/index.md) — 247 个跨日主题
- [📊 月度综合 (Synthesis)](synthesis/index.md) — 按月趋势汇总

## 阅读建议

1. **浏览当日精选**: 打开 `sources/news/2026-06-27/` 看今天选出的内容
2. **追踪主题**: 从 [主题索引](concepts/index.md) 进入任意主题，按时间线回看
3. **查作者**: 从 [作者索引](entities/authors/index.md) 找感兴趣的作者
4. **看趋势**: [月度综合](synthesis/index.md) 给出了每月的高频主题与高产作者

## OKF 合规性

本 bundle 严格遵循 [OKF v0.1](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)：

1. ✅ 所有非保留 `.md` 文件均有合法 YAML frontmatter
2. ✅ 所有 frontmatter 均含非空 `type` 字段
3. ✅ 保留文件名 (`index.md`, `log.md`) 符合 §6 / §7
4. ✅ 使用 bundle-relative 绝对路径 `/path` 链接

## 重新生成

```bash
cd /data/workspace/x-news-wiki
node scripts/export.js
```

增量导出：

```bash
node scripts/export.js --since=2026-06-01
```
