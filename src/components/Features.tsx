import { useState } from 'react';
import { FEATURE_PHASES } from '../data/content.js';
import { cn } from '../utils/cn.js';

export function Features() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = FEATURE_PHASES[activePhase]!;

  return (
    <section id="features" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Features</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Four phases, one platform
          </h2>
          <p className="mt-4 text-slate-400">
            From local repository indexing to AI orchestration and a full web dashboard — each
            layer builds on the last without duplicating logic.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {FEATURE_PHASES.map((item, index) => (
            <button
              key={item.phase}
              type="button"
              onClick={() => setActivePhase(index)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition',
                activePhase === index
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white',
              )}
            >
              {item.phase}: {item.title}
            </button>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
              <p className="text-sm text-slate-500">{phase.phase}</p>
            </div>
            <span
              className={cn(
                'rounded-full px-3 py-1 text-xs font-medium',
                phase.status === 'Complete'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-amber-500/20 text-amber-400',
              )}
            >
              {phase.status}
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {phase.modules.map((mod) => (
              <div
                key={mod.name}
                className="group rounded-xl border border-slate-700/50 bg-slate-900/50 p-5 transition hover:border-sky-500/40 hover:bg-sky-500/5"
              >
                <h4 className="font-semibold text-white group-hover:text-sky-300">{mod.name}</h4>
                <p className="mt-1 text-sm text-slate-400">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
