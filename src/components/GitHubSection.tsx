import { SITE } from '../data/content.js';

export function GitHubSection() {
  return (
    <section id="github" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600/20 via-violet-600/20 to-slate-900 p-10 ring-1 ring-sky-500/30 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">GitHub</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Open source. Local-first. Yours to extend.
            </h2>
            <p className="mt-4 text-slate-300">
              LayrX is a monorepo with apps, packages, and docs. Star the repo, open issues,
              or contribute new providers, context strategies, and dashboard features.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={SITE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
              >
                <GitHubIcon />
                View on GitHub
              </a>
              <a
                href="#installation"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-500 px-8 py-3.5 font-medium text-white hover:border-slate-400 sm:w-auto"
              >
                Clone & run locally
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-white">MIT</p>
                <p className="text-xs text-slate-400">License (planned)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">TypeScript</p>
                <p className="text-xs text-slate-400">End to end</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Monorepo</p>
                <p className="text-xs text-slate-400">npm workspaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}
