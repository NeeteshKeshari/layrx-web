export const SITE = {
  name: 'LayrX',
  tagline: 'Repository intelligence & grounded AI',
  githubUrl: 'https://github.com/layrx/layrx',
  logoSrc: '/layrx-logo.png',
  iconSrc: '/layrx-icon.png',
  faviconSrc: '/favicon.png',
};

export const NAV_ITEMS = [
  { id: 'why', label: 'Why LayrX?' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'features', label: 'Features' },
  { id: 'demo', label: 'Demo' },
  { id: 'installation', label: 'Installation' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'github', label: 'GitHub' },
] as const;

export const WHY_POINTS = [
  {
    title: 'Understand before you generate',
    description:
      'LayrX indexes your repository — files, symbols, dependencies, embeddings — before any AI request. Responses are grounded in what your codebase actually contains.',
    icon: '🔍',
  },
  {
    title: 'Pipeline you control, not autopilot',
    description:
      'Context strategies, prompt middleware, model routing, and provider management work together as a pipeline you can inspect, not a black-box chat box.',
    icon: '⚙️',
  },
  {
    title: 'Local-first intelligence',
    description:
      'Repository scanning, graph building, semantic search, and caching run on your machine. Your source code stays where you control it.',
    icon: '🏠',
  },
  {
    title: 'Transparent AI decisions',
    description:
      'Preview the context selected, the final prompt assembled, routing decisions, token usage, and estimated cost — every step visible in the dashboard.',
    icon: '👁️',
  },
  {
    title: 'One gateway, many surfaces',
    description:
      'CLI, dashboard, and future IDE integrations all consume the same gateway APIs. Intelligence lives in packages — surfaces stay thin.',
    icon: '🔌',
  },
  {
    title: 'Built for engineering teams',
    description:
      'Security scanning redacts secrets before prompts. Git awareness, dependency graphs, and incremental sync keep intelligence current as code changes.',
    icon: '🛡️',
  },
];

export const ARCHITECTURE_LAYERS = [
  {
    id: 'surfaces',
    label: 'Surfaces',
    color: 'from-violet-500/20 to-violet-600/5',
    border: 'border-violet-500/30',
    items: ['Universal CLI', 'Web Dashboard', 'IDE / API clients'],
    description: 'Thin clients — no indexing or AI logic in the UI layer.',
  },
  {
    id: 'gateway',
    label: 'AI Gateway',
    color: 'from-sky-500/20 to-sky-600/5',
    border: 'border-sky-500/30',
    items: ['Fastify HTTP server', 'Context engine', 'Prompt pipeline', 'Model router', 'Conversation manager'],
    description: 'Validates requests, coordinates pipelines, and delegates to packages.',
  },
  {
    id: 'packages',
    label: 'Intelligence packages',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/30',
    items: [
      'Repository indexer',
      'Knowledge graph',
      'Embeddings & search',
      'Memory engine',
      'AI cache',
      'Security scanner',
      '13 AI providers',
    ],
    description: 'Business logic, SQLite persistence, filesystem access.',
  },
  {
    id: 'data',
    label: 'Data layer',
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/30',
    items: ['SQLite (layrx.db)', 'Repository files', 'Git metadata'],
    description: 'Local storage for indexed intelligence and session state.',
  },
];

export const FEATURE_CATEGORIES = [
  {
    id: 'local-agent',
    title: 'Local Agent',
    summary: 'Deep repository intelligence that runs on your machine before any model is called.',
    modules: [
      { name: 'Repository Indexer', desc: 'Scan and store file metadata across your codebase' },
      { name: 'Knowledge Graph', desc: 'Parse imports and build a dependency graph' },
      { name: 'Embedding Worker', desc: 'Generate embeddings for semantic search' },
      { name: 'Search Indexer', desc: 'Semantic, exact, prefix, and hybrid search' },
      { name: 'Memory Engine', desc: 'Entities, relations, and repository memory' },
      { name: 'AI Cache', desc: 'Cache responses by query and context fingerprint' },
      { name: 'Security Scanner', desc: 'Detect and redact secrets before prompts' },
      { name: 'File & Git Watchers', desc: 'Incremental sync when files or branches change' },
    ],
  },
  {
    id: 'universal-cli',
    title: 'Universal CLI',
    summary: 'A single command-line interface for every LayrX capability — always via the gateway.',
    modules: [
      { name: 'layrx init', desc: 'Register a repository path and trigger full indexing' },
      { name: 'layrx start / stop', desc: 'Manage the local agent lifecycle' },
      { name: 'layrx status', desc: 'Health checks and index status at a glance' },
      { name: 'Thin HTTP client', desc: 'All intelligence delegated to the gateway — no logic in CLI' },
    ],
  },
  {
    id: 'ai-gateway',
    title: 'AI Gateway',
    summary: 'Context, prompts, routing, and providers unified behind clean REST APIs.',
    modules: [
      { name: 'Provider Manager', desc: '13 providers — OpenAI, Anthropic, Gemini, Cursor, Ollama, …' },
      { name: 'Context Pipeline', desc: '10 strategies — debug, architecture, security, and more' },
      { name: 'Prompt Middleware', desc: '8-stage pipeline with token optimization' },
      { name: 'Model Router', desc: 'Auto, cheapest, fastest, highest-quality, or custom' },
      { name: 'Analytics', desc: 'Tokens, cost, latency, and cache efficiency metrics' },
      { name: 'Conversation Manager', desc: 'Sessions, memory, and automatic summarization' },
    ],
  },
  {
    id: 'web-dashboard',
    title: 'Web Dashboard',
    summary: 'Repository workspace, AI chat, monitoring, analytics, and settings in one UI.',
    modules: [
      { name: 'Repository Workspace', desc: 'Explorer, search, graph, symbols, and dependencies' },
      { name: 'AI Workspace', desc: 'Streaming chat with full context and routing transparency' },
      { name: 'Agent & Gateway Monitor', desc: 'Real-time health, jobs, logs, and provider status' },
      { name: 'AI Insights & Analytics', desc: 'Historical adoption, cost trends, and productivity insights' },
      { name: 'Settings', desc: 'Providers, AI defaults, repository and dashboard preferences' },
      { name: 'Context & Prompt Preview', desc: 'Inspect exactly what the model receives' },
    ],
  },
];

export const DEEP_DIVE_SECTIONS = [
  {
    id: 'overview',
    title: 'How LayrX fits together',
    tagline: 'Developer → CLI → Gateway → Packages → Providers',
    description:
      'Every surface talks to one gateway. The gateway coordinates context, prompts, and routing while packages handle indexing, search, memory, and persistence on your machine.',
    bullets: [
      'CLI and dashboard never index or call models directly',
      'Gateway validates requests and exposes REST APIs',
      'Packages own business logic and SQLite storage',
      '13 AI providers connect through a single interface',
    ],
    example: {
      label: 'End-to-end flow',
      code: `# 1. Index your repo
npm run layrx -- init

# 2. Ask a grounded question via the gateway
curl -X POST http://127.0.0.1:8765/chat \\
  -H "Content-Type: application/json" \\
  -d '{"message":"Explain the auth module","stream":true}'

# LayrX resolves context → builds prompt → routes model → streams response`,
    },
  },
  {
    id: 'local-agent',
    title: 'Local Agent',
    tagline: 'Index once, understand forever',
    description:
      'LayrX scans your repository, extracts symbols, builds a knowledge graph, generates embeddings, and keeps everything in sync as files change — all locally.',
    bullets: [
      'File metadata, AST symbols, and import relationships',
      'Semantic search over code with hybrid retrieval',
      'Memory engine for entities and cross-file relations',
      'Security scanner redacts API keys and tokens before AI calls',
    ],
    example: {
      label: 'Semantic search over your codebase',
      code: `curl "http://127.0.0.1:8765/search?q=provider+registry&mode=hybrid"

# Returns ranked files, symbols, and snippets
# grounded in your indexed repository — not the public internet`,
    },
  },
  {
    id: 'universal-cli',
    title: 'Universal CLI',
    tagline: 'Terminal-first, gateway-backed',
    description:
      'Initialize repositories, start the agent, and check health from your shell. The CLI is a thin HTTP client — every capability lives in the gateway and packages.',
    bullets: [
      'layrx init registers a path and runs the indexing pipeline',
      'layrx start / stop manages the local agent process',
      'layrx status shows module health and index readiness',
      'Zero duplication of indexing or AI logic in the CLI layer',
    ],
    example: {
      label: 'Typical first session',
      code: `$ npm run layrx -- init
✓ Repository registered: ~/projects/my-app
✓ Indexed 456 files · graph · embeddings

$ npm run layrx -- status
Agent:  running on http://127.0.0.1:8765
Index:  READY · 11 modules healthy`,
    },
  },
  {
    id: 'ai-gateway',
    title: 'AI Gateway',
    tagline: 'Context, prompts, routing — unified',
    description:
      'Before a model sees your question, LayrX selects a context strategy, gathers repository evidence, runs prompt middleware, optimizes tokens, and routes to the best provider and model.',
    bullets: [
      '10 context strategies — debugging, architecture, security, testing, …',
      '8-stage prompt pipeline with deduplication and compression',
      'Model router — auto, cheapest, fastest, highest-quality, custom',
      'Provider manager for OpenAI, Anthropic, Gemini, Cursor, Ollama, and more',
    ],
    example: {
      label: 'Preview what the AI will see',
      code: `curl -X POST http://127.0.0.1:8765/context/preview \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "Review the payment service for race conditions",
    "strategy": "code-review"
  }'

# Response includes selected files, graph context,
# strategy trace, and token estimates before any model call`,
    },
  },
  {
    id: 'web-dashboard',
    title: 'Web Dashboard',
    tagline: 'Full visibility from browser',
    description:
      'Explore your repository, chat with grounded AI, monitor agent health, analyze usage trends, and configure providers — all through gateway APIs with no duplicated backend logic.',
    bullets: [
      'Repository workspace — files, search, graph, symbols, dependencies',
      'AI workspace with streaming chat and live context panel',
      'Monitor — agent, gateway, jobs, logs, and provider cards',
      'Analytics — cost, adoption, model comparison, and insights',
      'Settings — connect Cursor, OpenAI, and set AI defaults',
    ],
    example: {
      label: 'Connect Cursor in Settings',
      code: `# Dashboard → Settings → AI Providers → Cursor AI
# Or via API:
curl -X POST http://127.0.0.1:8765/providers/connect \\
  -H "Content-Type: application/json" \\
  -d '{"provider":"cursor","apiKey":"YOUR_CURSOR_KEY"}'

curl http://127.0.0.1:8765/providers/cursor/models
# → composer-2.5, claude-opus-5, …`,
    },
  },
  {
    id: 'gateway-api',
    title: 'Gateway API Reference',
    tagline: '50+ endpoints, one surface',
    description:
      'Health, indexing, search, context, prompt, router, chat, providers, analytics, monitor, and settings — all exposed as REST APIs for CLI, dashboard, and custom integrations.',
    bullets: [
      'GET /health — module status and uptime',
      'POST /context/build · POST /prompt/preview · POST /router/select',
      'POST /chat — streaming grounded conversations',
      'GET /monitor/overview · GET /analytics/summary · GET /settings',
    ],
    example: {
      label: 'Route to the best model automatically',
      code: `curl -X POST http://127.0.0.1:8765/router/select \\
  -H "Content-Type: application/json" \\
  -d '{
    "mode": "auto",
    "contextStrategy": "architecture",
    "estimatedTokens": 8000
  }'

# → { "provider": "anthropic", "model": "claude-3-5-sonnet-latest", ... }`,
    },
  },
];

export const INSTALL_STEPS = [
  {
    title: 'Prerequisites',
    code: 'node >= 20.0.0\nnpm >= 10',
  },
  {
    title: 'Clone & install',
    code: 'git clone https://github.com/layrx/layrx.git\ncd layrx\nnpm install',
  },
  {
    title: 'Start the gateway',
    code: 'npm run start:gateway\n# → http://127.0.0.1:8765',
  },
  {
    title: 'Index your repository',
    code: 'npm run layrx -- init\n# Registers path + runs full indexing pipeline',
  },
  {
    title: 'Launch the dashboard',
    code: 'cd apps/dashboard && npm run dev\n# → http://localhost:5173\n# Monitor → http://localhost:5173/monitor\n# Analytics → http://localhost:5173/analytics\n# Settings → http://localhost:5173/settings',
  },
  {
    title: 'Connect an AI provider (optional)',
    code: 'curl -X POST http://127.0.0.1:8765/providers/connect \\\n  -H "Content-Type: application/json" \\\n  -d \'{"provider":"cursor","apiKey":"YOUR_KEY"}\'',
  },
];

export const STATS = [
  { value: '11', label: 'Intelligence modules' },
  { value: '13', label: 'AI providers' },
  { value: '10', label: 'Context strategies' },
  { value: '50+', label: 'Gateway APIs' },
];

/** Hero pipeline demo — plain language for business readers, technical detail for engineers. */
export const HERO_PIPELINE = {
  title: 'How LayrX works',
  subtitle:
    'From your repository to a grounded answer — every step visible for engineers and measurable for leaders.',
  windowLabel: 'request flow',
  steps: [
    {
      step: '1',
      title: 'Learn your codebase',
      technical: '456 files indexed · dependency graph · semantic embeddings',
      outcome: 'AI understands your product before it answers',
    },
    {
      step: '2',
      title: 'Find the right context',
      technical: 'architecture strategy · symbol search · 94% match confidence',
      outcome: 'Fewer wrong answers and less back-and-forth',
    },
    {
      step: '3',
      title: 'Trim what gets sent to AI',
      technical: '8-stage prompt pipeline · 12.4k → 8.1k tokens',
      outcome: 'Lower cost and faster responses',
    },
    {
      step: '4',
      title: 'Pick the best model',
      technical: 'OpenAI · Anthropic · Ollama · policy-based routing · streaming',
      outcome: 'No vendor lock-in — use what fits each task',
    },
    {
      step: '5',
      title: 'Deliver a grounded answer',
      technical: 'cited file paths · token usage · cost estimate · full audit trail',
      outcome: 'Trustworthy output you can review and share',
      active: true,
    },
  ],
} as const;
