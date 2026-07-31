import { useState } from 'react';
import { cn } from '../utils/cn.js';

const DEMOS = [
  {
    id: 'repo',
    label: 'Repository Workspace',
    title: 'Explore your codebase visually',
    description: 'File explorer, semantic search, knowledge graph, symbols, and dependency viewer — all powered by gateway APIs.',
  },
  {
    id: 'ai',
    label: 'AI Workspace',
    title: 'Chat with full transparency',
    description: 'Streaming responses with live context preview, prompt inspection, routing details, and token analytics.',
  },
  {
    id: 'monitor',
    label: 'Agent Monitor',
    title: 'Operational visibility in real time',
    description: 'Health cards for Local Agent and Gateway, provider status, background jobs, active requests, and filterable logs.',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Long-term AI insights',
    description: 'Historical adoption, cost optimization, model comparison, context strategy analytics, and productivity insights.',
  },
  {
    id: 'cli',
    label: 'CLI',
    title: 'Terminal-first workflow',
    description: 'Initialize, index, and manage the agent from your shell. The CLI never indexes — it delegates to the gateway.',
  },
] as const;

export function Demo() {
  const [active, setActive] = useState<(typeof DEMOS)[number]['id']>('repo');
  const demo = DEMOS.find((item) => item.id === active)!;

  return (
    <section id="demo" className="scroll-mt-24 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Demo</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">See LayrX in action</h2>
          <p className="mt-4 text-slate-400">
            Five surfaces, one gateway. Switch between views to explore how LayrX works end to end.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {DEMOS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition',
                active === item.id ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white">{demo.title}</h3>
            <p className="mt-3 text-slate-400">{demo.description}</p>
            <a
              href="#installation"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Run it locally →
            </a>
          </div>

          <div className="glass overflow-hidden rounded-2xl lg:col-span-3">
            {active === 'repo' ? <RepoDemo /> : null}
            {active === 'ai' ? <AiDemo /> : null}
            {active === 'monitor' ? <MonitorDemo /> : null}
            {active === 'analytics' ? <AnalyticsDemo /> : null}
            {active === 'cli' ? <CliDemo /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function RepoDemo() {
  return (
    <div className="flex h-72 flex-col sm:h-80">
      <div className="flex border-b border-slate-700/50">
        <SidebarItem active>Overview</SidebarItem>
        <SidebarItem>Search</SidebarItem>
        <SidebarItem>Graph</SidebarItem>
        <SidebarItem>Symbols</SidebarItem>
      </div>
      <div className="flex flex-1">
        <div className="hidden w-36 border-r border-slate-700/50 p-3 sm:block">
          <p className="text-xs font-medium text-slate-500">FILES</p>
          {['src/', '  gateway/', '  dashboard/', 'packages/', 'docs/'].map((f) => (
            <p key={f} className="mt-1 font-mono text-xs text-slate-400">
              {f}
            </p>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-3">
            <MetricCard label="Files" value="456" />
            <MetricCard label="Symbols" value="1.2k" />
            <MetricCard label="Graph nodes" value="890" />
            <MetricCard label="Index status" value="READY" highlight />
          </div>
        </div>
      </div>
    </div>
  );
}

function AiDemo() {
  return (
    <div className="flex h-72 flex-col sm:h-80">
      <div className="flex flex-1 gap-0">
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-3 ml-auto max-w-[80%] rounded-xl bg-indigo-600 px-3 py-2 text-xs text-white">
            How does the context pipeline select files?
          </div>
          <div className="max-w-[90%] rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-300">
            <p>The context engine resolves a strategy (e.g. architecture), then providers gather repository files, semantic search results, and graph context…</p>
            <span className="mt-2 inline-block animate-pulse text-sky-400">▊</span>
          </div>
        </div>
        <div className="hidden w-40 border-l border-slate-700/50 p-3 sm:block">
          <p className="text-xs font-medium text-slate-500">INSIGHTS</p>
          <InsightRow label="Provider" value="mock" />
          <InsightRow label="Strategy" value="architecture" />
          <InsightRow label="Tokens" value="8,142" />
          <InsightRow label="Cached" value="miss" />
        </div>
      </div>
    </div>
  );
}

function MonitorDemo() {
  return (
    <div className="flex h-72 flex-col sm:h-80">
      <div className="flex border-b border-slate-700/50">
        <SidebarItem active>Overview</SidebarItem>
        <SidebarItem>Agent</SidebarItem>
        <SidebarItem>Gateway</SidebarItem>
        <SidebarItem>Logs</SidebarItem>
      </div>
      <div className="flex flex-1">
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-3">
            <MetricCard label="Local Agent" value="Healthy" highlight />
            <MetricCard label="Gateway" value="Running" highlight />
            <MetricCard label="Active requests" value="2" />
            <MetricCard label="Queue" value="0" />
          </div>
          <div className="mt-4 rounded-lg border border-slate-700/50 bg-slate-900/50 p-3">
            <p className="text-xs font-medium text-slate-500">BACKGROUND JOBS</p>
            <p className="mt-2 font-mono text-xs text-emerald-400">● Repository Indexing — completed</p>
            <p className="mt-1 font-mono text-xs text-slate-400">○ File Watching — waiting</p>
          </div>
        </div>
        <div className="hidden w-36 border-l border-slate-700/50 p-3 sm:block">
          <p className="text-xs font-medium text-slate-500">INSIGHTS</p>
          <InsightRow label="CPU" value="12%" />
          <InsightRow label="Memory" value="142 MB" />
          <InsightRow label="Uptime" value="2h 14m" />
          <InsightRow label="Providers" value="1 connected" />
        </div>
      </div>
    </div>
  );
}

function AnalyticsDemo() {
  return (
    <div className="flex h-72 flex-col sm:h-80">
      <div className="flex border-b border-slate-700/50">
        <SidebarItem active>Summary</SidebarItem>
        <SidebarItem>Cost</SidebarItem>
        <SidebarItem>Models</SidebarItem>
        <SidebarItem>Trends</SidebarItem>
      </div>
      <div className="flex flex-1 p-4">
        <div className="grid flex-1 grid-cols-2 gap-3">
          <MetricCard label="Total requests" value="1,248" />
          <MetricCard label="Est. spend" value="$4.82" highlight />
          <MetricCard label="Tokens saved" value="37%" highlight />
          <MetricCard label="Cache hits" value="18%" />
        </div>
        <div className="hidden w-40 border-l border-slate-700/50 p-3 sm:block">
          <p className="text-xs font-medium text-slate-500">INSIGHTS</p>
          <InsightRow label="Top model" value="gpt-4o-mini" />
          <InsightRow label="Top strategy" value="architecture" />
          <InsightRow label="Avg latency" value="842ms" />
        </div>
      </div>
    </div>
  );
}

function CliDemo() {
  return (
    <div className="h-72 p-4 font-mono text-xs sm:h-80">
      <p className="text-slate-500">$ npm run layrx -- init</p>
      <p className="mt-2 text-emerald-400">✓ Repository registered: /Users/dev/my-repo</p>
      <p className="text-emerald-400">✓ Indexing complete (456 files, 64ms)</p>
      <p className="mt-4 text-slate-500">$ npm run layrx -- status</p>
      <p className="mt-2 text-sky-400">Agent: running on http://127.0.0.1:8765</p>
      <p className="text-slate-400">Repository: READY · 11 modules healthy</p>
      <p className="mt-4 text-slate-500">$ curl localhost:8765/health | jq .modules</p>
      <p className="mt-2 text-slate-400">{`{ "repositoryIndexer": "healthy", "search": "healthy", ... }`}</p>
    </div>
  );
}

function SidebarItem({ children, active }: { children: string; active?: boolean }) {
  return (
    <span
      className={cn(
        'px-4 py-2 text-xs font-medium',
        active ? 'border-b-2 border-sky-500 text-sky-300' : 'text-slate-500',
      )}
    >
      {children}
    </span>
  );
}

function MetricCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-lg bg-slate-800/80 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className={cn('text-lg font-bold', highlight ? 'text-emerald-400' : 'text-white')}>{value}</p>
    </div>
  );
}

function InsightRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-2">
      <p className="text-[10px] text-slate-600">{label}</p>
      <p className="text-xs text-slate-300">{value}</p>
    </div>
  );
}
