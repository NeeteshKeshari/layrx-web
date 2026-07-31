import { InteractiveArchitecture } from './InteractiveArchitecture.js';

export function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-24 bg-slate-900/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Architecture</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Intelligent AI layer for developers
          </h2>
          <p className="mt-4 text-slate-400">
            Explore how a request moves from your tools through the gateway, core packages, local data,
            and AI providers. Click a node or press <span className="text-sky-300">Play request flow</span> to
            walk through the stack.
          </p>
        </div>

        <div className="mt-12">
          <InteractiveArchitecture />
        </div>
      </div>
    </section>
  );
}
