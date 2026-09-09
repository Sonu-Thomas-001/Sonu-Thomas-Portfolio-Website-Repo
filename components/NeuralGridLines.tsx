import React from 'react';
import { motion } from 'framer-motion';

export interface NeuralGridLinesProps {
  /** Number of horizontal lines in the grid */
  rows?: number;
  /** Number of vertical convergence lines */
  cols?: number;
  color?: string;
  /** Show animated horizontal scan bar */
  scanBar?: boolean;
  className?: string;
}

/**
 * NeuralGridLines
 * An SVG perspective grid (vanishing-point horizon) that sits as a decorative
 * backdrop. A glowing scan bar sweeps downward infinitely on loop.
 * pointer-events-none, aria-hidden, GPU-accelerated.
 */
export const NeuralGridLines: React.FC<NeuralGridLinesProps> = ({
  rows = 10,
  cols = 12,
  color = '#C47D5A',
  scanBar = true,
  className = '',
}) => {
  const vp = { x: 50, y: 45 }; // vanishing point (%)

  // Horizontal lines spread from vanishing point toward bottom edge
  const hLines = Array.from({ length: rows }, (_, i) => {
    const t = (i + 1) / rows; // 0 → 1 (near → far gets smaller)
    const y = vp.y + (100 - vp.y) * (t * t); // quadratic falloff for perspective
    const xSpread = t * 55; // width grows toward viewer
    const opacity = t * 0.22;
    return { y, xMin: 50 - xSpread, xMax: 50 + xSpread, opacity, key: `h${i}` };
  });

  // Vertical convergence lines fanning from bottom edge to vanishing point
  const vLines = Array.from({ length: cols + 1 }, (_, i) => {
    const t = i / cols; // 0 → 1 left to right
    const xBottom = 50 - 55 + t * 110; // spread across full width at bottom
    const opacity = 0.08 + (0.5 - Math.abs(t - 0.5)) * 0.12;
    return { x1: xBottom, y1: 100, x2: vp.x, y2: vp.y, opacity, key: `v${i}` };
  });

  // Parse hex color to r,g,b
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const rgba = (a: number) => `rgba(${r},${g},${b},${a})`;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Fade-out mask: grid fades near top (vanishing point) and edges */}
          <linearGradient id="ngl-mask-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="40%"  stopColor="white" stopOpacity="0.2" />
            <stop offset="75%"  stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="ngl-fade">
            <rect width="100" height="100" fill="url(#ngl-mask-v)" />
          </mask>

          {/* Scan bar gradient */}
          <linearGradient id="ngl-scan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={rgba(0)} />
            <stop offset="40%"  stopColor={rgba(0.5)} />
            <stop offset="60%"  stopColor={rgba(0.5)} />
            <stop offset="100%" stopColor={rgba(0)} />
          </linearGradient>

          <filter id="ngl-glow">
            <feGaussianBlur stdDeviation="0.3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Grid group with fade mask */}
        <g mask="url(#ngl-fade)">
          {/* Vertical convergence lines */}
          {vLines.map((l) => (
            <line
              key={l.key}
              x1={`${l.x1}%`} y1={`${l.y1}%`}
              x2={`${l.x2}%`} y2={`${l.y2}%`}
              stroke={rgba(l.opacity)}
              strokeWidth="0.15"
              filter="url(#ngl-glow)"
            />
          ))}

          {/* Horizontal perspective lines */}
          {hLines.map((l) => (
            <motion.line
              key={l.key}
              x1={`${l.xMin}%`} y1={`${l.y}%`}
              x2={`${l.xMax}%`} y2={`${l.y}%`}
              stroke={rgba(l.opacity)}
              strokeWidth="0.14"
              animate={{ opacity: [l.opacity, l.opacity * 1.8, l.opacity] }}
              transition={{
                duration: 4 + parseInt(l.key.slice(1)) * 0.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: parseInt(l.key.slice(1)) * 0.3,
              }}
            />
          ))}
        </g>

        {/* Intersection dots at grid crossings */}
        {hLines.slice(2).map((h, hi) =>
          vLines.filter((_, vi) => vi > 1 && vi < cols - 1).map((v, vi) => {
            // Compute intersection of horizontal line y=h.y and the vertical line
            if (v.x1 === v.x2) return null;
            const t = (h.y - v.y2) / (v.y1 - v.y2);
            if (t < 0 || t > 1) return null;
            const ix = v.x2 + t * (v.x1 - v.x2);
            const iy = h.y;
            return (
              <motion.circle
                key={`d-${hi}-${vi}`}
                cx={`${ix}%`}
                cy={`${iy}%`}
                r="0.28"
                fill={rgba(h.opacity * 2.5)}
                animate={{ opacity: [h.opacity * 2, h.opacity * 4, h.opacity * 2], r: [0.22, 0.38, 0.22] }}
                transition={{ duration: 3 + vi * 0.4, repeat: Infinity, ease: 'easeInOut', delay: (hi + vi) * 0.2 }}
              />
            );
          })
        )}

        {/* Animated scan bar sweeping downward */}
        {scanBar && (
          <motion.rect
            x="0" width="100" height="3"
            fill="url(#ngl-scan)"
            mask="url(#ngl-fade)"
            animate={{ y: [vp.y - 2, 102] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </svg>

      {/* Vanishing-point glow bloom */}
      <div
        style={{
          top: `${vp.y}%`,
          left: `${vp.x}%`,
          transform: 'translate(-50%, -50%)',
          background: rgba(0.12),
          boxShadow: `0 0 60px 20px ${rgba(0.08)}`,
        }}
        className="absolute w-16 h-16 rounded-full blur-2xl"
      />
    </div>
  );
};
