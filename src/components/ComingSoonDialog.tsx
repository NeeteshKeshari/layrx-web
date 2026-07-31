import { useEffect } from 'react';
import { GITHUB_COMING_SOON, SITE } from '../data/content.js';

type ComingSoonDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function ComingSoonDialog({ open, onClose }: ComingSoonDialogProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="coming-soon-title"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-sky-500/10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-500">{GITHUB_COMING_SOON.windowLabel}</span>
        </div>

        <div className="p-6">
          <p id="coming-soon-title" className="font-mono text-xs uppercase tracking-widest text-amber-400">
            {GITHUB_COMING_SOON.status}
          </p>
          <h2 className="mt-2 text-xl font-bold text-white">{GITHUB_COMING_SOON.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{GITHUB_COMING_SOON.description}</p>

          <dl className="mt-6 space-y-3 rounded-xl border border-slate-700/50 bg-slate-950/60 p-4 font-mono text-xs">
            {GITHUB_COMING_SOON.details.map((detail) => (
              <div key={detail.label} className="grid gap-1 sm:grid-cols-[120px_1fr]">
                <dt className="text-slate-500">{detail.label}</dt>
                <dd className="text-slate-200">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-700/50 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-400">
            {GITHUB_COMING_SOON.installHint}
          </pre>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-500"
            >
              View on npm
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-600 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
