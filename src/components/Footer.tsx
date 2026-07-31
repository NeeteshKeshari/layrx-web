import { NAV_ITEMS, SITE } from '../data/content.js';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:px-6">
        <div className="flex items-center justify-center md:items-start md:justify-start flex-col gap-3">
          <img src={SITE.logoSrc} alt={SITE.name} className="h-8 w-auto" />
          <p className="text-xs text-slate-500">{SITE.tagline}</p>
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
