import { useState } from 'react';
import { NAV_ITEMS, SITE } from '../data/content.js';
import { useComingSoon } from '../context/ComingSoonContext.js';
import { cn } from '../utils/cn.js';
import { useScrollSpy } from '../hooks/useScrollSpy.js';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));
  const { openGitHubComingSoon } = useComingSoon();

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <img src={SITE.logoSrc} alt={SITE.name} className="h-8 w-auto" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm transition-colors',
                  activeId === item.id
                    ? 'bg-sky-500/20 text-sky-300'
                    : 'text-slate-400 hover:text-white',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-sky-500/50 hover:text-white"
          >
            npm
          </a>
          <a
            href="#installation"
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-sky-500/50 hover:text-white"
          >
            Get started
          </a>
          <button
            type="button"
            onClick={openGitHubComingSoon}
            className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500"
          >
            GitHub
          </button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-300 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-slate-700/50 px-4 py-4 lg:hidden">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={SITE.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-600 px-4 py-2 text-center text-sm"
            >
              View on npm
            </a>
            <a href="#installation" className="rounded-lg border border-slate-600 px-4 py-2 text-center text-sm">
              Get started
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openGitHubComingSoon();
              }}
              className="rounded-lg bg-sky-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              GitHub
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
