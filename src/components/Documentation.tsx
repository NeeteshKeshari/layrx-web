import { DOC_LINKS } from '../data/content.js';

export function Documentation() {
  return (
    <section id="documentation" className="scroll-mt-24 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Documentation</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Deep dives by phase</h2>
          <p className="mt-4 text-slate-400">
            Comprehensive guides for every layer — from indexing pipelines to AI orchestration
            and dashboard integration.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOC_LINKS.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              className="glass group rounded-2xl p-6 transition hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5"
            >
              <h3 className="font-semibold text-white group-hover:text-sky-300">{doc.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{doc.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-sky-400 opacity-0 transition group-hover:opacity-100">
                Read guide →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="text-lg font-bold text-white">Architecture at a glance</h3>
          <pre className="mx-auto mt-6 max-w-lg overflow-x-auto text-left font-mono text-xs leading-relaxed text-slate-400">
{`Developer
   ↓
Universal CLI          ← no AI / indexing logic
   ↓ HTTP
AI Gateway             ← thin controllers, orchestration
   ↓
Packages               ← business logic, SQLite, filesystem`}
          </pre>
        </div>
      </div>
    </section>
  );
}
