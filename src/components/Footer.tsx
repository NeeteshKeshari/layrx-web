import { NAV_ITEMS, SITE } from '../data/content.js';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 text-sm font-bold text-white">
            L
          </span>
          <div>
            <p className="font-semibold text-white">{SITE.name}</p>
            <p className="text-xs text-slate-500">{SITE.tagline}</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-4">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-400 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-slate-600">© {new Date().getFullYear()} LayrX. Built for engineers.</p>
      </div>
    </footer>
  );
}
