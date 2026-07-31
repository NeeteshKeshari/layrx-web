export type ArchitectureTone = 'violet' | 'sky' | 'emerald' | 'amber' | 'fuchsia';

export interface ArchitectureLayer {
  id: string;
  label: string;
  subtitle: string;
  tone: ArchitectureTone;
  items: string[];
  note: string;
  step: number;
}

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'developer',
    label: 'Developer',
    subtitle: 'Writes code, asks questions, gets answers',
    tone: 'violet',
    items: ['IDE, terminal, or browser', 'Preferred tools stay the same'],
    note: 'You interact using the tools you already use every day.',
    step: 1,
  },
  {
    id: 'cli',
    label: 'Universal CLI',
    subtitle: 'Single interface for all LayrX capabilities',
    tone: 'violet',
    items: ['layrx init · start · stop · status', 'Thin HTTP client only'],
    note: 'Simple commands that talk to the gateway — no AI logic in the CLI.',
    step: 2,
  },
  {
    id: 'gateway',
    label: 'AI Gateway',
    subtitle: 'Thin controllers, routing & coordination',
    tone: 'sky',
    items: ['Context engine', 'Prompt pipeline', 'Model router', 'Provider manager'],
    note: 'Validates requests, coordinates packages, and exposes clean REST APIs.',
    step: 3,
  },
  {
    id: 'packages',
    label: 'Packages (Core Engine)',
    subtitle: 'Business logic, indexing, search, memory, providers',
    tone: 'emerald',
    items: ['Repository indexer', 'Knowledge graph', 'Embeddings & search', 'Memory & cache', 'Security scanner'],
    note: 'The heart of LayrX — SQLite, filesystem, and local intelligence.',
    step: 4,
  },
  {
    id: 'data',
    label: 'SQLite + Filesystem',
    subtitle: 'Your code. Your data. Your machine.',
    tone: 'amber',
    items: ['layrx.db', 'Repository files', 'Git metadata'],
    note: 'Local-first storage for indexed intelligence and session state.',
    step: 5,
  },
  {
    id: 'providers',
    label: 'AI Providers',
    subtitle: 'OpenAI · Anthropic · Gemini · Cursor · Ollama · …',
    tone: 'fuchsia',
    items: ['13 providers via gateway', 'Connect in Settings', 'Health & model listing'],
    note: 'LayrX works with the best models. You stay in control.',
    step: 6,
  },
];

export const ARCHITECTURE_FLOW_ORDER = [
  'developer',
  'cli',
  'gateway',
  'packages',
  'data',
  'providers',
] as const;

export const TONE_STYLES: Record<
  ArchitectureTone,
  { border: string; bg: string; glow: string; dot: string; edge: string }
> = {
  violet: {
    border: 'border-violet-400/50',
    bg: 'bg-violet-500/10',
    glow: 'shadow-violet-500/25',
    dot: 'bg-violet-400',
    edge: '#a78bfa',
  },
  sky: {
    border: 'border-sky-400/50',
    bg: 'bg-sky-500/10',
    glow: 'shadow-sky-500/25',
    dot: 'bg-sky-400',
    edge: '#38bdf8',
  },
  emerald: {
    border: 'border-emerald-400/50',
    bg: 'bg-emerald-500/10',
    glow: 'shadow-emerald-500/25',
    dot: 'bg-emerald-400',
    edge: '#34d399',
  },
  amber: {
    border: 'border-amber-400/50',
    bg: 'bg-amber-500/10',
    glow: 'shadow-amber-500/25',
    dot: 'bg-amber-400',
    edge: '#fbbf24',
  },
  fuchsia: {
    border: 'border-fuchsia-400/50',
    bg: 'bg-fuchsia-500/10',
    glow: 'shadow-fuchsia-500/25',
    dot: 'bg-fuchsia-400',
    edge: '#e879f9',
  },
};
