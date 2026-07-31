import { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { cn } from '../utils/cn.js';
import { TONE_STYLES, type ArchitectureTone } from '../data/architectureLayers.js';

export type ArchitectureNodeType = Node<
  {
    label: string;
    subtitle: string;
    tone: ArchitectureTone;
    items: string[];
    note: string;
    step: number;
    active: boolean;
    highlighted: boolean;
  },
  'architecture'
>;

function ArchitectureNodeComponent({ data, selected }: NodeProps<ArchitectureNodeType>) {
  const styles = TONE_STYLES[data.tone];
  const isActive = data.active || selected;

  return (
    <div
      className={cn(
        'w-[240px] rounded-xl border px-4 py-3 shadow-lg transition-all duration-300',
        styles.border,
        styles.bg,
        isActive || data.highlighted
          ? `ring-2 ring-white/25 ${styles.glow} scale-[1.02]`
          : 'opacity-95 hover:opacity-100',
        data.highlighted && 'architecture-node-pulse',
      )}
    >
      <Handle type="target" position={Position.Top} className="!border-0 !bg-transparent !opacity-0" />
      <div className="flex items-start gap-3">
        <span
          className={cn(
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-slate-950',
            styles.dot,
          )}
        >
          {data.step}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{data.label}</p>
          <p className="mt-0.5 text-[11px] leading-snug text-slate-400">{data.subtitle}</p>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!border-0 !bg-transparent !opacity-0" />
    </div>
  );
}

export const ArchitectureNode = memo(ArchitectureNodeComponent);
