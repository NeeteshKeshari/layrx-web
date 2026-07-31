import { useState } from 'react';
import { INSTALL_STEPS, SITE } from '../data/content.js';
import { copyToClipboard } from '../utils/cn.js';
import { cn } from '../utils/cn.js';

export function Installation() {
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const step = INSTALL_STEPS[activeStep]!;

  const handleCopy = async () => {
    await copyToClipboard(step.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Installation</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Up and running in minutes</h2>
          <p className="mt-4 text-slate-400">
            LayrX is published on npm. Install the global CLI, start the local agent, index a Git
            repository, and open the dashboard — no cloud account required.
          </p>
          <a
            href={SITE.npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 hover:bg-sky-500/15"
          >
            <span className="font-mono">npm install -g layrx</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <ol className="space-y-2 lg:col-span-2">
            {INSTALL_STEPS.map((item, index) => (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition',
                    activeStep === index
                      ? 'bg-sky-600/20 text-sky-300 ring-1 ring-sky-500/40'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white',
                  )}
                >
                  <span
                    className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                      activeStep === index ? 'bg-sky-600 text-white' : 'bg-slate-800',
                    )}
                  >
                    {index + 1}
                  </span>
                  {item.title}
                </button>
              </li>
            ))}
          </ol>

          <div className="glass relative overflow-hidden rounded-2xl lg:col-span-3">
            <div className="flex items-center justify-between border-b border-slate-700/50 px-4 py-3">
              <span className="font-mono text-xs text-slate-500">{step.title}</span>
              <button
                type="button"
                onClick={() => void handleCopy()}
                className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-300 hover:bg-slate-700"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-slate-300">
              {step.code}
            </pre>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <TipCard title="npm package" value={`${SITE.npmPackage}@${SITE.npmVersion}`} href={SITE.npmUrl} />
          <TipCard title="Gateway + dashboard" value="http://127.0.0.1:8765" />
          <TipCard title="Quick install" value="npm install -g layrx" href={SITE.npmUrl} />
        </div>
      </div>
    </section>
  );
}

function TipCard({ title, value, href }: { title: string; value: string; href?: string }) {
  const content = (
    <>
      <p className="text-xs text-slate-500">{title}</p>
      <p className="mt-1 font-mono text-sm text-sky-400">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass block rounded-xl p-4 text-center transition hover:ring-1 hover:ring-sky-500/30"
      >
        {content}
      </a>
    );
  }

  return <div className="glass rounded-xl p-4 text-center">{content}</div>;
}
