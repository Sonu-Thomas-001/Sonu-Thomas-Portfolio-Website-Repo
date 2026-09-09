import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export interface ConstellationWebProps {
  nodeCount?: number;
  maxEdges?: number;
  color?: string;
  className?: string;
}

interface StarNode {
  id: number;
  cx: number;
  cy: number;
  r: number;
  duration: number;
  delay: number;
  driftX: number[];
  driftY: number[];
}

interface Edge {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
}

const NODES_CONFIG: StarNode[] = [
  { id: 1,  cx: 8,  cy: 14, r: 2.2, duration: 9.5,  delay: 0,    driftX: [0, 12, -6,  0], driftY: [0, -14, 8,   0] },
  { id: 2,  cx: 22, cy: 6,  r: 1.6, duration: 11.2, delay: 0.8,  driftX: [0, -8, 14,  0], driftY: [0, 10,  -12, 0] },
  { id: 3,  cx: 38, cy: 18, r: 3.0, duration: 8.8,  delay: 1.5,  driftX: [0, 16, -10, 0], driftY: [0, -10, 6,   0] },
  { id: 4,  cx: 55, cy: 8,  r: 1.8, duration: 13.0, delay: 2.2,  driftX: [0, -12, 8,  0], driftY: [0, 14,  -8,  0] },
  { id: 5,  cx: 72, cy: 22, r: 2.5, duration: 10.4, delay: 0.5,  driftX: [0, 10, -14, 0], driftY: [0, -8,  12,  0] },
  { id: 6,  cx: 88, cy: 10, r: 1.5, duration: 7.9,  delay: 1.9,  driftX: [0, -14, 6,  0], driftY: [0, 8,   -10, 0] },
  { id: 7,  cx: 5,  cy: 52, r: 2.0, duration: 12.1, delay: 3.0,  driftX: [0, 8,  -10, 0], driftY: [0, -12, 6,   0] },
  { id: 8,  cx: 18, cy: 40, r: 1.4, duration: 9.3,  delay: 1.2,  driftX: [0, -6,  12, 0], driftY: [0, 16,  -8,  0] },
  { id: 9,  cx: 45, cy: 48, r: 2.8, duration: 11.6, delay: 0.3,  driftX: [0, 14,  -8, 0], driftY: [0, -6,  14,  0] },
  { id: 10, cx: 62, cy: 36, r: 1.7, duration: 8.4,  delay: 2.7,  driftX: [0, -10, 6,  0], driftY: [0, 12,  -14, 0] },
  { id: 11, cx: 80, cy: 50, r: 2.3, duration: 14.2, delay: 0.9,  driftX: [0, 8,  -12, 0], driftY: [0, -10, 8,   0] },
  { id: 12, cx: 93, cy: 42, r: 1.9, duration: 10.7, delay: 1.6,  driftX: [0, -14, 10, 0], driftY: [0, 6,   -12, 0] },
  { id: 13, cx: 12, cy: 75, r: 1.3, duration: 9.8,  delay: 2.4,  driftX: [0, 10,  -8, 0], driftY: [0, -14, 10,  0] },
  { id: 14, cx: 30, cy: 68, r: 2.6, duration: 11.9, delay: 0.6,  driftX: [0, -8,  14, 0], driftY: [0, 8,   -10, 0] },
  { id: 15, cx: 58, cy: 80, r: 1.6, duration: 8.2,  delay: 3.5,  driftX: [0, 12, -10, 0], driftY: [0, -12, 6,   0] },
  { id: 16, cx: 76, cy: 72, r: 2.1, duration: 13.5, delay: 1.1,  driftX: [0, -10, 8,  0], driftY: [0, 10,  -14, 0] },
  { id: 17, cx: 91, cy: 83, r: 1.8, duration: 7.6,  delay: 2.0,  driftX: [0, 8,  -12, 0], driftY: [0, -8,  10,  0] },
  { id: 18, cx: 42, cy: 90, r: 2.4, duration: 10.3, delay: 0.4,  driftX: [0, -12, 6,  0], driftY: [0, 14,  -8,  0] },
];

function getEdges(nodes: StarNode[], maxEdges: number): Edge[] {
  const edges: Edge[] = [];
  const threshold = 38;
  for (let i = 0; i < nodes.length && edges.length < maxEdges; i++) {
    for (let j = i + 1; j < nodes.length && edges.length < maxEdges; j++) {
      const dx = nodes[i].cx - nodes[j].cx;
      const dy = nodes[i].cy - nodes[j].cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= threshold) {
        const opacity = Math.max(0.06, 0.28 - (dist / threshold) * 0.22);
        edges.push({ id: `${i}-${j}`, x1: nodes[i].cx, y1: nodes[i].cy, x2: nodes[j].cx, y2: nodes[j].cy, opacity });
      }
    }
  }
  return edges;
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * ConstellationWeb
 * Floating star nodes joined by pulsing constellation lines.
 * pointer-events-none, GPU-accelerated, aria-hidden.
 */
export const ConstellationWeb: React.FC<ConstellationWebProps> = ({
  nodeCount = 18,
  maxEdges = 24,
  color = '#C47D5A',
  className = '',
}) => {
  const nodes = useMemo(() => NODES_CONFIG.slice(0, nodeCount), [nodeCount]);
  const edges = useMemo(() => getEdges(nodes, maxEdges), [nodes, maxEdges]);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      {/* SVG Edge Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="cw-glow">
            <feGaussianBlur stdDeviation="0.25" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {edges.map((e, idx) => (
          <motion.line
            key={e.id}
            x1={`${e.x1}%`} y1={`${e.y1}%`}
            x2={`${e.x2}%`} y2={`${e.y2}%`}
            stroke={hexToRgba(color, e.opacity)}
            strokeWidth="0.16"
            filter="url(#cw-glow)"
            animate={{ opacity: [e.opacity, e.opacity * 2.4, e.opacity] }}
            transition={{ duration: 5 + (idx % 5), repeat: Infinity, ease: 'easeInOut', delay: idx * 0.22 }}
          />
        ))}
      </svg>

      {/* Star Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          animate={{ x: node.driftX, y: node.driftY, opacity: [0.45, 1, 0.55, 1, 0.45], scale: [1, 1.55, 1, 1.9, 1] }}
          transition={{ duration: node.duration, repeat: Infinity, delay: node.delay, ease: 'easeInOut' }}
          style={{ top: `${node.cy}%`, left: `${node.cx}%`, width: node.r * 2, height: node.r * 2 }}
          className="absolute will-change-transform -translate-x-1/2 -translate-y-1/2"
        >
          <span
            style={{
              backgroundColor: hexToRgba(color, 0.9),
              boxShadow: `0 0 ${node.r * 3}px ${hexToRgba(color, 0.65)}, 0 0 ${node.r * 7}px ${hexToRgba(color, 0.18)}`,
            }}
            className="block w-full h-full rounded-full"
          />
          {node.r >= 2.0 && (
            <motion.span
              animate={{ scale: [1, 3.2], opacity: [0.55, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeOut', delay: node.delay * 0.4 }}
              style={{ borderColor: hexToRgba(color, 0.5) }}
              className="absolute inset-0 rounded-full border"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};
