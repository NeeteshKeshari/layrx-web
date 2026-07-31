export const SITE = {
  name: 'LayrX',
  tagline: 'Repository intelligence & AI orchestration',
  githubUrl: 'https://github.com/layrx/layrx',
  docsPath: '../docs/README.md',
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
    title: 'Orchestration, not autopilot',
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
    description: 'Validates requests, orchestrates pipelines, delegates to packages.',
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
      '12 AI providers',
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

export const FEATURE_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Local Agent',
    status: 'Complete',
    modules: [
      { name: 'Repository Indexer', desc: 'Scan and store file metadata' },
      { name: 'Knowledge Graph', desc: 'Parse imports, build dependency graph' },
      { name: 'Embedding Worker', desc: 'Generate embeddings for semantic search' },
      { name: 'Search Indexer', desc: 'Semantic, exact, prefix, hybrid search' },
      { name: 'Memory Engine', desc: 'Entities, relations, repo memory' },
      { name: 'AI Cache', desc: 'Cache responses by query + context' },
      { name: 'Security Scanner', desc: 'Detect and redact secrets' },
      { name: 'File & Git Watchers', desc: 'Incremental sync on changes' },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Universal CLI',
    status: 'Complete',
    modules: [
      { name: 'layrx init', desc: 'Register and index a repository' },
      { name: 'layrx start / stop', desc: 'Agent lifecycle management' },
      { name: 'layrx status', desc: 'Health and index status' },
      { name: 'Thin HTTP client', desc: 'All intelligence via gateway' },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'AI Gateway',
    status: 'In progress',
    modules: [
      { name: 'Provider Manager', desc: '12 providers — OpenAI, Anthropic, Gemini, Ollama, …' },
      { name: 'Context Pipeline', desc: '10 strategies — debug, architecture, security, …' },
      { name: 'Prompt Middleware', desc: '8-stage pipeline with optimization' },
      { name: 'Model Router', desc: 'Auto, cheapest, fastest, quality, custom' },
      { name: 'Analytics', desc: 'Tokens, cost, latency, cache metrics' },
      { name: 'Conversation Manager', desc: 'Sessions, memory, summarization' },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Web Dashboard',
    status: 'In progress',
    modules: [
      { name: 'Repository Workspace', desc: 'Explorer, search, graph, symbols, deps' },
      { name: 'AI Workspace', desc: 'Streaming chat with full transparency' },
      { name: 'Agent & Gateway Monitor', desc: 'Real-time health, jobs, logs, providers' },
      { name: 'AI Insights & Analytics', desc: 'Historical adoption, cost, trends, insights' },
      { name: 'Settings', desc: 'Providers, AI defaults, repository & UI prefs' },
      { name: 'Context & prompt preview', desc: 'Inspect what the AI sees' },
    ],
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
    code: 'curl -X POST http://127.0.0.1:8765/providers/connect \\\n  -H "Content-Type: application/json" \\\n  -d \'{"provider":"openai","apiKey":"YOUR_KEY"}\'',
  },
];

export const DOC_LINKS = [
  {
    title: 'Phase overview',
    description: 'How phases connect — CLI → Gateway → Packages',
    href: '../docs/phases/overview.md',
  },
  {
    title: 'Phase 1 — Local Agent',
    description: 'Indexing, search, graph, embeddings, cache, security',
    href: '../docs/phases/phase-1-local-agent.md',
  },
  {
    title: 'Phase 2 — Universal CLI',
    description: 'init, start, stop, status commands',
    href: '../docs/phases/phase-2-universal-cli.md',
  },
  {
    title: 'Phase 3 — AI Gateway',
    description: 'Providers, context, prompt, router, analytics',
    href: '../docs/phases/phase-3-ai-gateway.md',
  },
  {
    title: 'Phase 4 — Web Dashboard',
    description: 'Repository workspace, AI chat, monitor & analytics',
    href: '../docs/phases/phase-4-web-dashboard.md',
  },
  {
    title: 'Gateway API reference',
    description: 'All HTTP endpoints and package delegation',
    href: '../apps/gateway/README.md',
  },
];

export const STATS = [
  { value: '11', label: 'Intelligence modules' },
  { value: '12', label: 'AI providers' },
  { value: '10', label: 'Context strategies' },
  { value: '50+', label: 'Gateway APIs' },
];
