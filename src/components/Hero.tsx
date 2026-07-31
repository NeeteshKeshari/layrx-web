import { STATS } from '../data/content.js';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="animate-slide-up mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            Open-source AI infrastructure for software engineering
          </p>

          <h1
            className="animate-slide-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Repository intelligence.
            <br />
            <span className="gradient-text">AI orchestration.</span>
          </h1>

          <p
            className="animate-slide-up mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            LayrX indexes your codebase, builds a knowledge graph, and orchestrates context,
            prompts, and model routing — so every AI response is grounded in your repository,
            not generic guesses.
          </p>

          <div
            className="animate-slide-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#installation"
              className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-violet-600 px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:brightness-110 sm:w-auto"
            >
              Start building →
            </a>
            <a
              href="#architecture"
              className="w-full rounded-xl border border-slate-600 px-8 py-3.5 text-center font-medium text-slate-200 hover:border-slate-500 sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </div>

        <div
          className="animate-slide-up mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          style={{ animationDelay: '0.4s' }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white lg:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="animate-float mx-auto mt-16 max-w-4xl">
          <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-sky-500/10">
            <div className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-500">layrx pipeline</span>
            </div>
            <div className="space-y-3 p-6 font-mono text-sm">
              <FlowLine step="1" label="Index repository" detail="456 files · graph · embeddings" />
              <FlowLine step="2" label="Resolve context strategy" detail="architecture · 94% confidence" />
              <FlowLine step="3" label="Build & optimize prompt" detail="12.4k → 8.1k tokens saved" />
              <FlowLine step="4" label="Route to provider" detail="anthropic / claude · streaming" />
              <FlowLine step="5" label="Stream grounded response" detail="with full transparency" active />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowLine({
  step,
  label,
  detail,
  active,
}: {
  step: string;
  label: string;
  detail: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg px-3 py-2 ${
        active ? 'bg-sky-500/10 ring-1 ring-sky-500/30' : ''
      }`}
    >
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-800 text-xs text-sky-400">
        {step}
      </span>
      <div>
        <p className="text-slate-200">{label}</p>
        <p className="text-xs text-slate-500">{detail}</p>
      </div>
      {active ? (
        <span className="ml-auto animate-pulse text-xs text-sky-400">● live</span>
      ) : null}
    </div>
  );
}
