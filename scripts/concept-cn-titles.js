// scripts/concept-cn-titles.js
// Lightweight slug → Chinese title lookup for concept pages.
//
// Why this exists
// ---------------
// Concept file names stay English (slug) for stable IDs, dedup, and cross-spec
// compat. But Obsidian's file tree, search snippets, and link previews all show
// the `title:` frontmatter field — so we set that to Chinese for human reading.
//
// This module is a fallback dictionary. Slugs not present here will fall back
// to the slug itself (no breakage, just no Chinese title). Periodically a
// separate AI pass (see scripts/translate-concepts.js, TODO) can fill in
// missing entries by reading the concept body and proposing a short Chinese
// label. The dictionary is intentionally a plain object — easy to hand-edit,
// easy to diff, no external deps.
//
// To add a new mapping, just append:
//   'agent-something': '某事 Agent',
// and re-run `node scripts/export.js`. The next export picks it up.

const TITLES = {
    // ---- Agents / Agentic AI ----
    'agent-ecosystem': 'Agent生态',
    'agent-native-paradigm': 'Agent原生范式',
    'agent-loop-fundamentals': 'Agent循环基础',
    'agent-economic-autonomy': 'Agent经济自主',
    'agent-self-monitoring': 'Agent自监控',
    'agent-minimalist-implementation': 'Agent极简实现',
    'agent-multi-platform': 'Agent多平台',
    'agent-mobile-orchestration': 'Agent移动编排',
    'agent-swarm-orchestration': 'Agent群编排',
    'agent-evaluation-frontier': 'Agent评估前沿',
    'agent-capability-benchmark': 'Agent能力基准',
    'agent-security-governance': 'Agent安全治理',
    'agent-security-infrastructure': 'Agent安全基础设施',
    'agent-reliability-multi-model-memory': 'Agent可靠性与多模型记忆',
    'agent-context-asset-management': 'Agent上下文资产管理',
    'agent-data-intelligence-infra': 'Agent数据智能基础设施',
    'agent-deployment-service': 'Agent部署服务',
    'agent-engineering-vs-product': 'Agent工程 vs 产品',
    'agent-fundamentals-education': 'Agent基础教学',
    'agent-knowledge-sharing-infra': 'Agent知识共享基础设施',
    'agent-interface-affinity-framework': 'Agent界面亲和分析',
    'agent-lego-composable-toolchain': 'Agent乐高可拼装工具链',
    'agent-memory-optimization': 'Agent记忆优化',
    'agent-minimalism-finance': 'Agent极简金融',
    'agent-perception-infrastructure': 'Agent感知基础设施',
    'agent-skill-usage-patterns': 'Agent技能使用模式',
    'agent-tools-and-orchestration': 'Agent工具与编排',
    'agent-browser-token-efficiency': 'Agent浏览器 Token 效率',
    'agent-trading-agent-survival-rate': '交易Agent存活率',

    // ---- Skills & Tools ----
    'skills-ecosystem-standards': '技能生态标准',
    'skills-ecosystem-gpts-cycle': '技能生态与 GPTs 周期',
    'skills-vs-vibe-coding': '技能 vs 氛围编程',
    'skill-ecosystem-standards': '技能生态标准',
    'skill-vs-mcp-paradigm': '技能 vs MCP 范式',
    'skill-recommendation-culture': '技能推荐文化',
    'skill-barrier-collapse': '技能门槛崩塌',
    'skill-automation-engineering': '技能自动化工程',
    'personal-ai-skill-package-commoditization': '个人 AI 技能包商品化',
    'mcp-vs-cli-debate': 'MCP vs CLI 之争',

    // ---- Sub-agents / Multi-agent ----
    'sub-agents-multi-expert': '子Agent与多专家',
    'multi-agent-framework-ecosystem-comparison': '多Agent框架生态对比',
    'multi-agent-simulation-infrastructure': '多Agent仿真基础设施',
    'multi-agent-fraud-risk': '多Agent欺诈风险',

    // ---- AI Coding / Vibe Coding ----
    'vibe-coding-methodology': '氛围编程方法论',
    'vibe-coding-cognition-cycle': '氛围编程认知循环',
    'vibe-coding-cognition-inflection': '氛围编程认知拐点',
    'vibe-coding-hidden-costs': '氛围编程隐性成本',
    'claude-code-ecosystem': 'Claude Code 生态',
    'claude-code-engineering-discipline': 'Claude Code 工程纪律',
    'claude-code-leaked-architecture': 'Claude Code 架构泄露',
    'claude-code-multimodal-interaction': 'Claude Code 多模态交互',
    'claude-code-natural-language-workflow': 'Claude Code 自然语言工作流',
    'claude-code-restraint-philosophy': 'Claude Code 克制哲学',
    'claude-code-source-leak': 'Claude Code 源码泄露',
    'codex-cli-tool-encapsulation': 'Codex CLI 工具封装',
    'codex-ecosystem-platform-war': 'Codex 生态平台之争',
    'gstack-claude-code-workflow-os': 'gstack：Claude Code 工作流 OS',
    'harness-engineering': 'Harness 工程',
    'harness-engineering-framework': 'Harness 工程框架',
    'harness-engineering-mit-study': 'Harness 工程 MIT 研究',
    'self-improving-agent-engineering': '自进化Agent工程',
    'simple-composable-agent-architecture': '简单可拼装Agent架构',
    'goose-ai-autonomous-coding': 'Goose AI 自主编程',
    'zero-human-coding-validation': '零人编程验证',
    'ai-coding-skills-commoditization': 'AI 编程技能商品化',
    'ai-coding-market-divergence': 'AI 编程市场分化',
    'ai-coding-open-source-compliance': 'AI 编程开源合规',
    'ai-coding-reverse-engineering': 'AI 编程逆向工程',
    'ai-coding-licensing-dispute': 'AI 编程许可争议',
    'ai-coding-token-optimization': 'AI 编程 Token 优化',
    'ai-native-code-security': 'AI 原生代码安全',
    'code-obfuscation-anti-decompile': '代码混淆与反编译',

    // ---- Models & Benchmarks ----
    'model-capabilities': '模型能力',
    'reasoning-and-model-architecture': '推理与模型架构',
    'reasoning-tier-strategy': '推理分层策略',
    'diffusion-llm-training-efficiency': '扩散 LLM 训练效率',
    'multi-model-alignment': '多模型对齐',
    'domestic-model-competition': '国产模型竞争',
    'domestic-model-benchmark-performance': '国产模型基准表现',
    'deepseek-v4-open-source': 'DeepSeek V4 开源',
    'gemini-desktop-super-app-integration': 'Gemini 桌面超级应用整合',
    'gemma-4-mobile-agent': 'Gemma 4 移动Agent',
    'gemma-endpoint-multimodal': 'Gemma 端点多模态',
    'gpt45-emotional-intelligence': 'GPT-4.5 情绪智能',
    'gpt54-long-context-reasoning': 'GPT-5.4 长上下文推理',
    'claude-api-token-amplification': 'Claude API Token 放大',
    'cheap-model-trap': '便宜模型陷阱',
    'ai-shrinkflation-opus-degradation': 'AI 缩水：Opus 降级',
    'unsloth-finetuning-democratization': 'Unsloth 微调民主化',
    'ai-multimodel-routing': 'AI 多模型路由',
    'domestic-model-benchmark': '国产模型基准',
    'process-supervision-reagent': '过程监督与试剂',
    'edge-inference-optimization': '边缘推理优化',
    'edge-agent-local-compute': '边缘Agent本地算力',
    'moe-edge-compute-monopoly': 'MoE 边缘算力垄断',

    // ---- Labs / Companies ----
    'anthropic-api-control': 'Anthropic API 控制',
    'anthropic-boundary-decisions-moat': 'Anthropic 边界决策与护城河',
    'anthropic-commercial-explosion': 'Anthropic 商业爆发',
    'anthropic-context-detection': 'Anthropic 上下文检测',
    'anthropic-enterprise-certification': 'Anthropic 企业认证',
    'anthropic-kyc-deepseek-data-access-dispute': 'Anthropic KYC 与 DeepSeek 数据访问争议',
    'anthropic-office-integration': 'Anthropic 办公整合',
    'openai-product-strategy-shift': 'OpenAI 产品策略转向',
    'openai-super-app-strategy': 'OpenAI 超级应用策略',
    'openai-super-app': 'OpenAI 超级应用',
    'big-tech-ai-lab-consolidation': '大厂 AI 实验室整合',
    'nvidia-compute-moat': 'NVIDIA 算力护城河',
    'apple-platform-ai-tax': 'Apple 平台 AI 税',
    'ai-talent-flight': 'AI 人才流失',
    'ai-company-profitability-crisis': 'AI 公司盈利危机',

    // ---- AI Safety / Alignment / Governance ----
    'ai-safety-alignment': 'AI 安全与对齐',
    'ai-safety-and-governance': 'AI 安全与治理',
    'agi-alignment-impossibility': 'AGI 对齐不可能',
    'ai-infrastructure-governance': 'AI 基础设施治理',
    'ai-ethics-corporate-behavior': 'AI 伦理与公司行为',
    'ai-trust-crisis': 'AI 信任危机',
    'ai-agent-trust-crisis-openai': 'AI Agent信任危机：OpenAI 案',
    'ai-content-authenticity': 'AI 内容真实性',
    'ai-content-detection': 'AI 内容检测',
    'ai-distillation-ethics': 'AI 蒸馏伦理',
    'voice-cloning-security': '声音克隆安全',
    'content-provenance-infrastructure': '内容溯源基础设施',
    'human-ai-emotional-boundary': '人机情感边界',
    'ai-employment-replacement-narrative': 'AI 替代就业叙事',
    'ai-military-deployment': 'AI 军事部署',
    'geopolitics-and-compute': '地缘政治与算力',
    'semiconductor-supply-chain-geopolitics': '半导体供应链地缘政治',
    'ai-technology-iron-curtain': 'AI 技术铁幕',
    'ai-hiring-class-system': 'AI 招聘阶级体系',
    'ai-platform-integration-risk': 'AI 平台整合风险',

    // ---- Crypto / On-chain AI ----
    'ai-crypto-agent-infra': 'AI 加密Agent基础设施',
    'ai-agent-crypto-infra': 'AI Agent加密基础设施',
    'crypto-agent-infra': '加密Agent基础设施',
    'ai-compute-on-chain': '链上 AI 算力',
    'ai-data-blockchain-verification': 'AI 数据区块链验证',
    '0g-labs-chain-ai-infrastructure': '0G Labs 链上 AI 基础设施',
    'rayls-blockchain-tradfi-bridge': 'Rayls 区块链与 TradFi 桥接',
    'compute-airbnb-arbitrage': '算力 Airbnb 套利',
    'prediction-market-compliance': '预测市场合规',
    'polymarket': 'Polymarket',

    // ---- Embodied AI / Robotics ----
    'embodied-ai-and-robotics': '具身 AI 与机器人',
    'embodied-ai-robotics': '具身 AI 机器人',
    'embodied-ai-supply-chain': '具身 AI 供应链',
    'ev-as-embodied-agent': '电动车作为具身Agent',
    'robot-phone-consumer-embodied-ai': '手机机器人：消费级具身 AI',
    'textop-humanoid-robot': 'Textop 人形机器人',
    'theory-of-space-embodied-ai': '空间理论：具身 AI',
    '具身智能空间理论': '具身智能空间理论',

    // ---- Content / Multimodal / Video ----
    'content-generation-and-multimodal': '内容生成与多模态',
    'ai-3d-content-democratization': 'AI 三维内容民主化',
    'ai-video-physics-benchmark-physion-eval': 'AI 视频物理基准：Physion Eval',
    'ai-video-cinematic': 'AI 电影感视频',
    'ai-video-queue-economy': 'AI 视频排队经济',
    'ai-video-story-coherence': 'AI 视频故事连贯性',
    'ai-video-audio-quality': 'AI 视频音频质量',
    'open-source-video-generation-leap': '开源视频生成跃迁',
    'ai-short-drama-industrialization': 'AI 短剧工业化',
    'ai-voice-transcription-breakthrough': 'AI 语音转写突破',
    'ai-aesthetic-style-agent': 'AI 审美风格Agent',
    'ai-content-entrepreneurship': 'AI 内容创业',

    // ---- KB / RAG / Knowledge ----
    'knowledge-management-death': '知识管理之死',
    'llm-knowledge-base-rag-boundary': 'LLM 知识库与 RAG 边界',
    'llm-knowledge-operations': 'LLM 知识运营',
    'personal-knowledge-management-ai': 'AI 时代个人知识管理',
    'cognitive-arbitrage-ai-era': 'AI 时代认知套利',
    'product-thinker-rise': '产品思想者崛起',
    'product-manager-role-shift': '产品经理角色转变',
    'ai-management-philosophy': 'AI 管理哲学',
    'ai-replacing-hierarchical-management': 'AI 取代科层管理',
    'ai-engineering-discipline-bottleneck': 'AI 工程纪律瓶颈',
    'ai-cognition-execution-paradox': 'AI 认知与执行悖论',
    'ai-learning-resources': 'AI 学习资源',
    'ai-education-paradox': 'AI 教育悖论',
    'ai-personalized-tutoring': 'AI 个性化辅导',
    '中层管理ai替代': '中层管理 AI 替代',
    '太空AI算力基础设施': '太空 AI 算力基础设施',
    '推理与模型架构': '推理与模型架构',
    'AI-API成本结构与本地部署': 'AI API 成本结构与本地部署',
    'gemma端侧多模态': 'Gemma 端侧多模态',

    // ---- Business / Startup / Economics ----
    'ai-business-and-startup': 'AI 商业与创业',
    'ai-business-cognition-reconstruction': 'AI 商业认知重构',
    'ai-business-survival': 'AI 商业生存',
    'ai-era-lean-startup-invalidity': 'AI 时代精益创业失效',
    'saas-disruption-by-ai': 'AI 对 SaaS 的颠覆',
    'product-definition-moat': '产品定义护城河',
    'first-mover-advantage-ai-era': 'AI 时代先发优势',
    'industry-leader-agent-strategy': '行业龙头Agent策略',
    'ai-stock-investment-analysis': 'AI 股票投资分析',
    'ai-trading-480x-returns': 'AI 交易 480 倍收益',
    'trading-agent-definition': '交易Agent定义',
    'lobkill-ai-labor-market': 'LobKill：AI 劳务市场',
    'ai-dominant-market-yield-over-price': 'AI 主导市场：收益优于价格',
    'ai-tool-subscription-value': 'AI 工具订阅价值',
    'ai-tool-cloning-phenomenon': 'AI 工具克隆现象',
    'ai-brand-talent-risk': 'AI 品牌方人才风险',
    'ai-business-and-startup': 'AI 商业与创业',
    'AI-API成本结构与本地部署': 'AI API 成本结构与本地部署',

    // ---- Misc / Meta ----
    'ai-social-impact': 'AI 社会影响',
    'ai-research-paradigm': 'AI 研究范式',
    'ai-autonomous-scientific-discovery': 'AI 自主科学发现',
    'ai-automated-security-research': 'AI 自动化安全研究',
    'ai-real-world-model-evaluation': 'AI 真实世界模型评估',
    'ai-game-dev-competition': 'AI 游戏开发竞争',
    'ai-grey-market': 'AI 灰色市场',
    'ai-geointelligence-democratization': 'AI 地理智能民主化',
    'ai-energy-infrastructure': 'AI 能源基础设施',
    'ai-data-intelligence-infra': 'AI 数据智能基础设施',
    'ai-knowledge-tool-competition': 'AI 知识工具竞争',
    'ai-browser-platform-war': 'AI 浏览器平台之争',
    'ai-agent-gamification': 'AI Agent游戏化',
    'ai-agent-self-sustaining-business': 'AI Agent自我维持的商业',
    'ai-agent-tool-call-tax': 'AI Agent工具调用税',
    'chat-ui-durability': '聊天 UI 持久性',
    'chatbot-experience-evolution': '聊天机器人体验演进',
    'terminal-ai-era': 'AI 时代终端',
    'cli-toolchain-convergence': 'CLI 工具链收敛',
    'app-store-automation': '应用商店自动化',
    'open-agent-ecosystem': '开放Agent生态',
    'no-code-agent-entry': '零代码Agent入门',
    'deep-research-agent': '深度研究Agent',
    'cerul-video-search-agent': 'Cerul 视频搜索Agent',
    'social-intelligence-agent-search': '社交智能Agent搜索',
    'page-agent-browser-automation': 'Page：Agent浏览器自动化',
    'mcp-vs-cli': 'MCP vs CLI',
    'design-md-protocol': '设计 MD 协议',
    'design-language-ai-readable': 'AI 可读设计语言',
    'design-model-evaluation': '设计模型评估',
    'claude-design-disruption': 'Claude 设计颠覆',
    'claude-design-tool': 'Claude 设计工具',
    'claude-memory-migration': 'Claude 记忆迁移',
    'baoyu-infographic': '宝玉信息图',
    'dbskill-formula-marketplace': 'DBskill 公式市场',
    'markdown-ai-native-format': 'Markdown：AI 原生格式',
    'ai-native-format-shift': 'AI 原生格式转向',
    'edgeclaw-memory-infrastructure': 'EdgeClaw 记忆基础设施',
    'gitnexus-code-knowledge-graph': 'GitNexus 代码知识图谱',
    'hermes-agent-self-evolution': 'Hermes Agent 自进化',
    'hermes-agent-stability-comparison': 'Hermes Agent 稳定性对比',
    'openclaw-digital-life-philosophy': 'OpenClaw 数字生活哲学',
    'openclaw-ecosystem-critique': 'OpenClaw 生态批评',
    'personal-intelligence-privacy': '个人智能隐私',
    'personal-digital-twin-identity': '个人数字孪生身份',
    'political-intelligence-arbitrage': '政治情报套利',
    'mac-mini-ai-server': 'Mac Mini AI 服务器',
    'ghostty-terminal-adoption': 'Ghostty 终端采用',
    'dev-tools-infra': '开发工具基础设施',
    'world-model-paradigm': '世界模型范式',
    'v-jepa-world-model': 'V-JEPA 世界模型',
    'token-economics-infrastructure': 'Token 经济基础设施',
    'abundant-gdp-hypothesis': '丰饶 GDP 假说',
    'adult-content-agent-threshold': '成人内容Agent门槛',
    'web-skill-factory': 'Web 技能工厂',
    'knowledge-tools': '知识工具',
};

/**
 * Get Chinese title for a concept slug. Falls back to a humanized version
 * of the slug itself if no mapping is found.
 *
 * @param {string} slug - the concept slug (lowercase, hyphen-separated)
 * @returns {string} the Chinese title, or a humanized English fallback
 */
function cnTitleFor(slug) {
    if (TITLES[slug]) return TITLES[slug];
    // Humanize slug: 'agent-ecosystem' -> 'Agent Ecosystem'
    return slug
        .split('-')
        .map(w => w ? w[0].toUpperCase() + w.slice(1) : w)
        .join(' ');
}

/**
 * Returns the raw dictionary so a translator (manual or AI) can
 * enumerate missing keys and propose translations.
 */
function getAllTitles() {
    return TITLES;
}

module.exports = { TITLES, cnTitleFor, getAllTitles };
