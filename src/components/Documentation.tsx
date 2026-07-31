import { useState } from 'react';
import { DEEP_DIVE_SECTIONS } from '../data/content.js';
import { cn } from '../utils/cn.js';

export function Documentation() {
  const [activeSection, setActiveSection] = useState(DEEP_DIVE_SECTIONS[0]!.id);
  const section = DEEP_DIVE_SECTIONS.find((item) => item.id === activeSection) ?? DEEP_DIVE_SECTIONS[0]!;

  return (
    <section id="documentation" className="scroll-mt-24 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Documentation</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Deep dives with examples</h2>
          <p className="mt-4 text-slate-400">
            Explore how each layer works — from local indexing to gateway APIs — with real commands
            and request examples you can run today.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {DEEP_DIVE_SECTIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSection(item.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                activeSection === item.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white',
              )}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <p className="text-sm font-medium text-violet-300">{section.tagline}</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{section.title}</h3>
            <p className="mt-4 leading-relaxed text-slate-400">{section.description}</p>

            <ul className="mt-6 space-y-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass overflow-hidden rounded-2xl">
            <div className="border-b border-slate-700/50 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {section.example.label}
              </p>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-300">
              {section.example.code}
            </pre>
          </div>
        </div>

        {/* <div className="mt-12">
          <h3 className="mb-6 text-center text-lg font-bold text-white">Architecture at a glance</h3>
          <InteractiveArchitecture compact />
        </div> */}
      </div>
    </section>
  );
}
