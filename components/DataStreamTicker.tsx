import React, { useMemo } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { AmbientLayer, hexToRgba } from './AmbientLayer';

export interface DataStreamTickerProps {
  /** Number of vertical columns */
  columns?: number;
  color?: string;
  /** Opacity multiplier (0–1) */
  intensity?: number;
  progress?: MotionValue<number>;
  className?: string;
}

interface Column {
  id: number;
  left: string;
  chars: string[];
  charHeight: number; // px
  duration: number;
  delay: number;
  opacity: number;
}

const HEX_CHARS = '0123456789ABCDEF';
const TECH_SYMBOLS = '⬡◈▸▹▪▫◆◇⬢✦⟨⟩<>{}[]|/\\^~';
const ALL_CHARS = HEX_CHARS + HEX_CHARS + TECH_SYMBOLS; // hex weighted higher

function randomChar(): string {
  return ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
}

function makeChars(count: number): string[] {
  return Array.from({ length: count }, () => randomChar());
}

const COLUMN_COUNT = 14;
const CHARS_PER_COL = 18;

// Pre-computed deterministic column configs (stable between renders)
const COLUMNS_DATA: Column[] = Array.from({ length: COLUMN_COUNT }, (_, i) => {
  const t = i / (COLUMN_COUNT - 1);
  // Only render columns in the far margins (not center) to avoid covering content
  const leftPct = t < 0.5
    ? 1 + t * 18        // left side: 1% – 10%
    : 82 + (t - 0.5) * 18; // right side: 82% – 91%
  return {
    id: i,
    left: `${leftPct.toFixed(1)}%`,
    chars: makeChars(CHARS_PER_COL),
    charHeight: 16,
    duration: 6 + (i % 7) * 1.1,
    delay: (i * 0.45) % 5,
    opacity: 0.04 + (i % 4) * 0.025,
  };
});

/**
 * DataStreamTicker
 * Vertical columns of flowing hex / binary / symbol characters placed
 * at the left and right margins. Characters scroll downward with a bright
 * glowing "head" character at the leading edge.
 * pointer-events-none, aria-hidden, GPU-accelerated.
 */
export const DataStreamTicker: React.FC<DataStreamTickerProps> = ({
  columns = COLUMN_COUNT,
  color = '#C47D5A',
  intensity = 1,
  progress,
  className = '',
}) => {
  const cols = useMemo(() => COLUMNS_DATA.slice(0, columns), [columns]);

  return (
    <AmbientLayer progress={progress} drift={6} className={className}>
      {cols.map((col) => {
        const colOpacity = col.opacity * intensity;

        return (
          <div
            key={col.id}
            style={{ left: col.left, top: 0, bottom: 0 }}
            className="absolute overflow-hidden"
          >
            {/* Scrolling character column */}
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{
                duration: col.duration,
                repeat: Infinity,
                ease: 'linear',
                delay: col.delay,
              }}
              className="flex flex-col will-change-transform"
              style={{ fontFamily: 'monospace', fontSize: 11, lineHeight: '16px', letterSpacing: '0.05em' }}
            >
              {col.chars.map((ch, ci) => {
                const isHead = ci === 0;
                const isNearHead = ci <= 2;
                const charAlpha = isHead
                  ? 1
                  : isNearHead
                    ? colOpacity * 6
                    : colOpacity * (1 - ci / CHARS_PER_COL);

                return (
                  <motion.span
                    key={ci}
                    animate={isHead ? {
                      opacity: [1, 0.7, 1],
                      textShadow: [
                        `0 0 8px ${hexToRgba(color, 0.9)}`,
                        `0 0 16px ${hexToRgba(color, 1)}`,
                        `0 0 8px ${hexToRgba(color, 0.9)}`,
                      ],
                    } : {
                      opacity: [charAlpha, charAlpha * 1.4, charAlpha],
                    }}
                    transition={{
                      duration: 1.8 + ci * 0.12,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: ci * 0.08,
                    }}
                    style={{
                      color: isHead ? hexToRgba(color, 1) : hexToRgba(color, charAlpha),
                      display: 'block',
                      width: 12,
                    }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </motion.div>

            {/* Fade-in/out gradient mask at top and bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom,
                  transparent 0%,
                  transparent 15%,
                  transparent 80%,
                  rgba(var(--bg-base, 253,251,249),0.95) 100%)`,
              }}
            />
          </div>
        );
      })}
    </AmbientLayer>
  );
};
