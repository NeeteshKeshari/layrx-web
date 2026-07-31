import { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../data/content.js';
import { cn } from '../utils/cn.js';

export function Architecture() {
  const [activeLayer, setActiveLayer] = useState(ARCHITECTURE_LAYERS[1]?.id ?? 'gateway');

  const layer = ARCHITECTURE_LAYERS.find((item) => item.id === activeLayer) ?? ARCHITECTURE_LAYERS[0]!;

  return (
    <section id="architecture" className="scroll-mt-24 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Architecture</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            CLI → Gateway → Packages
          </h2>
          <p className="mt-4 text-slate-400">
            A layered architecture where intelligence stays in packages, orchestration stays in
            the gateway, and every surface remains a thin client.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-1 flex-col gap-3">
            {ARCHITECTURE_LAYERS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveLayer(item.id)}
                className={cn(
                  'glass rounded-xl p-5 text-left transition-all duration-300',
                  activeLayer === item.id
                    ? `bg-gradient-to-r ${item.color} ring-2 ${item.border}`
                    : 'hover:border-slate-600',
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 font-mono text-sm text-sky-400">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.items.length} components</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="glass flex-1 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white">{layer.label}</h3>
            <p className="mt-2 text-sm text-slate-400">{layer.description}</p>

            <ul className="mt-6 space-y-2">
              {layer.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg bg-slate-800/50 px-4 py-2.5 text-sm text-slate-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-slate-950/80 p-4 font-mono text-xs text-slate-400">
              <p className="text-sky-400"># Golden rules</p>
              <p className="mt-2">1. CLI → Gateway → Packages</p>
              <p>2. One package, one job</p>
              <p>3. Gateway stays thin</p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-x-auto">
          <svg viewBox="0 0 800 120" className="mx-auto min-w-[600px] max-w-full" aria-hidden="true">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {['CLI / Dashboard', 'Gateway', 'Packages', 'SQLite + Repo'].map((label, i) => {
              const x = 80 + i * 200;
              return (
                <g key={label}>
                  <rect x={x - 60} y={30} width={120} height={40} rx={8} fill="#1e293b" stroke="#334155" />
                  <text x={x} y={55} textAnchor="middle" fill="#e2e8f0" fontSize="12">
                    {label}
                  </text>
                  {i < 3 ? (
                    <line
                      x1={x + 65}
                      y1={50}
                      x2={x + 135}
                      y2={50}
                      stroke="url(#flowGrad)"
                      strokeWidth={2}
                      strokeDasharray="6 4"
                      style={{ animation: 'flow-dash 1s linear infinite' }}
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
