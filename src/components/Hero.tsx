import { HERO_PIPELINE, SITE, STATS } from '../data/content.js';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="animate-slide-up mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm text-sky-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            Open-source AI infrastructure for software engineering
          </p>

          <h1
            className="animate-slide-up text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
            style={{ animationDelay: '0.1s' }}
          >
            Repository intelligence.
            <br />
            <span className="gradient-text lg:text-6xl">Grounded AI for developers.</span>
          </h1>

          <p
            className="animate-slide-up mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            LayrX indexes your codebase, builds a knowledge graph, and routes context,
            prompts, and model selection — so every AI response is grounded in your repository,
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
              Install from npm →
            </a>
            <a
              href={SITE.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-slate-600 px-8 py-3.5 text-center font-medium text-slate-200 hover:border-slate-500 sm:w-auto"
            >
              View on npm
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

        <div
          className="animate-slide-up mx-auto mt-16 max-w-4xl text-center"
          style={{ animationDelay: '0.45s' }}
        >
          <h2 className="text-xl font-semibold text-white sm:text-2xl">{HERO_PIPELINE.title}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
            {HERO_PIPELINE.subtitle}
          </p>
        </div>

        <div className="animate-float mx-auto mt-8 max-w-4xl">
          <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-sky-500/10">
            <div className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-500">{HERO_PIPELINE.windowLabel}</span>
            </div>
            <div className="space-y-3 p-4 sm:p-6">
              {HERO_PIPELINE.steps.map((step) => (
                <FlowLine key={step.step} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowLine({
  step,
  title,
  technical,
  outcome,
  active,
}: {
  step: string;
  title: string;
  technical: string;
  outcome: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-lg px-3 py-3 sm:px-4 ${
        active ? 'bg-slate-900/20' : 'bg-slate-900/20'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-800 text-xs font-medium text-sky-400">
          {step}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <p className="font-medium text-slate-100">{title}</p>
            {/* {active ? (
              <span className="shrink-0 animate-pulse text-xs font-medium text-sky-400">● live</span>
            ) : null} */}
          </div>
          <p className="mt-1 font-mono text-xs leading-relaxed text-slate-500">{technical}</p>
          <p className="mt-2 text-xs leading-relaxed text-sky-300/90">{outcome}</p>
        </div>
      </div>
    </div>
  );
}
