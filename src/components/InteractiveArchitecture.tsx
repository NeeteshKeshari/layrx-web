import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  type Edge,
  type NodeMouseHandler,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { cn } from '../utils/cn.js';
import {
  ARCHITECTURE_FLOW_ORDER,
  ARCHITECTURE_LAYERS,
  TONE_STYLES,
} from '../data/architectureLayers.js';
import { ArchitectureNode, type ArchitectureNodeType } from './ArchitectureNode.js';

const nodeTypes = { architecture: ArchitectureNode };

const POSITIONS: Record<string, { x: number; y: number }> = {
  developer: { x: 280, y: 0 },
  cli: { x: 280, y: 110 },
  gateway: { x: 280, y: 220 },
  packages: { x: 280, y: 340 },
  data: { x: 60, y: 470 },
  providers: { x: 500, y: 470 },
};

const BASE_EDGES: Edge[] = [
  { id: 'developer-cli', source: 'developer', target: 'cli', label: 'commands' },
  { id: 'cli-gateway', source: 'cli', target: 'gateway', label: 'HTTP / REST' },
  { id: 'gateway-packages', source: 'gateway', target: 'packages', label: 'orchestrate' },
  { id: 'packages-data', source: 'packages', target: 'data', label: 'index & store' },
  { id: 'packages-providers', source: 'packages', target: 'providers', label: 'route AI' },
];

interface InteractiveArchitectureProps {
  compact?: boolean;
  className?: string;
}

export function InteractiveArchitecture({ compact = false, className }: InteractiveArchitectureProps) {
  const [selectedId, setSelectedId] = useState('gateway');
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [flowIndex, setFlowIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const layersById = useMemo(
    () => Object.fromEntries(ARCHITECTURE_LAYERS.map((layer) => [layer.id, layer])),
    [],
  );
  const selected = layersById[selectedId] ?? ARCHITECTURE_LAYERS[0]!;

  const nodes: ArchitectureNodeType[] = useMemo(
    () =>
      ARCHITECTURE_LAYERS.map((layer) => ({
        id: layer.id,
        type: 'architecture',
        position: POSITIONS[layer.id] ?? { x: 0, y: 0 },
        data: {
          ...layer,
          active: layer.id === selectedId,
          highlighted: layer.id === highlightedId,
        },
        draggable: false,
        selectable: true,
      })),
    [selectedId, highlightedId],
  );

  const edges: Edge[] = useMemo(
    () =>
      BASE_EDGES.map((edge) => {
        const targetTone = layersById[edge.target]?.tone ?? 'sky';
        const isFlowEdge =
          flowIndex >= 0 &&
          ARCHITECTURE_FLOW_ORDER[flowIndex] === edge.target &&
          ARCHITECTURE_FLOW_ORDER[flowIndex - 1] === edge.source;

        return {
          ...edge,
          type: 'smoothstep',
          animated: isFlowEdge || edge.target === selectedId,
          style: {
            stroke: TONE_STYLES[targetTone].edge,
            strokeWidth: isFlowEdge ? 2.5 : 1.75,
          },
          labelStyle: {
            fill: '#94a3b8',
            fontSize: 10,
            fontWeight: 600,
          },
          labelBgStyle: {
            fill: '#0f172a',
            fillOpacity: 0.92,
          },
          labelBgPadding: [6, 3] as [number, number],
          labelBgBorderRadius: 4,
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: TONE_STYLES[targetTone].edge,
            width: 18,
            height: 18,
          },
        };
      }),
    [flowIndex, layersById, selectedId],
  );

  const onNodeClick: NodeMouseHandler = useCallback((_event, node) => {
    setSelectedId(node.id);
    setIsPlaying(false);
    setFlowIndex(-1);
    setHighlightedId(null);
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    setFlowIndex(0);
    setSelectedId(ARCHITECTURE_FLOW_ORDER[0]!);
    setHighlightedId(ARCHITECTURE_FLOW_ORDER[0]!);

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      if (index >= ARCHITECTURE_FLOW_ORDER.length) {
        window.clearInterval(timer);
        setIsPlaying(false);
        setFlowIndex(-1);
        setHighlightedId(null);
        return;
      }

      const id = ARCHITECTURE_FLOW_ORDER[index]!;
      setFlowIndex(index);
      setSelectedId(id);
      setHighlightedId(id);
    }, 900);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className={cn('grid gap-6', compact ? 'lg:grid-cols-1' : 'lg:grid-cols-[1fr_340px]', className)}>
      <div
        className={cn(
          'architecture-flow relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-950/90',
          compact ? 'h-[480px]' : 'h-[620px]',
        )}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable
          panOnDrag
          panOnScroll={false}
          zoomOnScroll={false}
          zoomOnPinch
          minZoom={0.75}
          maxZoom={1.15}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#334155" />
          <Controls showInteractive={false} className="architecture-flow-controls" />
        </ReactFlow>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/90 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      <aside className="glass flex flex-col rounded-2xl p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Selected layer</p>
            <p className="mt-1 text-xs text-slate-500">Step {selected.step} of {ARCHITECTURE_LAYERS.length}</p>
          </div>
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            disabled={isPlaying}
            className="shrink-0 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300 transition hover:bg-sky-500/20 disabled:opacity-50"
          >
            {isPlaying ? 'Playing flow…' : 'Play request flow'}
          </button>
        </div>

        <h3 className="mt-3 text-2xl font-bold text-white">{selected.label}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{selected.subtitle}</p>

        <ul className="mt-5 space-y-2.5">
          {selected.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className={cn('mt-1.5 h-2 w-2 shrink-0 rounded-full', TONE_STYLES[selected.tone].dot)} />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 rounded-xl border border-slate-700/50 bg-slate-900/70 px-4 py-3 text-sm leading-relaxed text-slate-400">
          {selected.note}
        </p>

        <div className="mt-auto pt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Quick navigation</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {ARCHITECTURE_LAYERS.map((layer) => (
              <button
                key={layer.id}
                type="button"
                onClick={() => {
                  setSelectedId(layer.id);
                  setHighlightedId(layer.id);
                  setIsPlaying(false);
                  setFlowIndex(-1);
                }}
                className={cn(
                  'rounded-full px-2.5 py-1 text-[11px] font-medium transition',
                  layer.id === selectedId
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white',
                )}
              >
                {layer.step}. {layer.label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
