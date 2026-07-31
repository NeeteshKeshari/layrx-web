import { WHY_POINTS } from '../data/content.js';
import { useInView } from '../hooks/useScrollSpy.js';
import { cn } from '../utils/cn.js';

export function WhyLayrX() {
  const { setRef, isInView } = useInView();

  return (
    <section id="why" className="scroll-mt-24 py-20 lg:py-28">
      <div ref={setRef} className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Why LayrX?</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Not another AI coding tool
          </h2>
          <p className="mt-4 text-slate-400">
            Most tools send your question straight to a model. LayrX builds a deep understanding
            of your repository first — then orchestrates how context, prompts, and models work
            together.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((point, index) => (
            <article
              key={point.title}
              className={cn(
                'glass group rounded-2xl p-6 transition duration-500 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5',
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {point.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-sky-300">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-white">The difference in one sentence</h3>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Copilots autocomplete lines. LayrX <strong className="text-slate-200">understands your repository</strong>{' '}
                — its structure, dependencies, symbols, and history — and{' '}
                <strong className="text-slate-200">orchestrates AI</strong> through a transparent
                pipeline you control.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <CompareCard label="Typical AI tool" items={['Prompt → Model', 'Opaque context', 'Vendor lock-in']} muted />
              <CompareCard label="LayrX" items={['Index → Context → Prompt → Route → Model', 'Full preview', 'Local-first + 12 providers']} highlight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareCard({
  label,
  items,
  highlight,
  muted,
}: {
  label: string;
  items: string[];
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-xl p-4',
        highlight ? 'bg-sky-500/10 ring-1 ring-sky-500/30' : 'bg-slate-800/50',
        muted && 'opacity-70',
      )}
    >
      <p className={cn('text-sm font-semibold', highlight ? 'text-sky-300' : 'text-slate-400')}>
        {label}
      </p>
      <ul className="mt-3 space-y-2 text-left text-xs text-slate-400">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className={highlight ? 'text-sky-400' : 'text-slate-600'}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
