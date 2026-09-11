import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { AmbientLayer, hexToRgba } from './AmbientLayer';

export interface SonarRingsProps {
  color?: string;
  progress?: MotionValue<number>;
  className?: string;
}

interface Emitter {
  id: number;
  top: string;
  left: string;
  /** Base ring diameter in px */
  baseSize: number;
  /** How many concentric rings to emit */
  rings: number;
  /** Duration for one full expand+fade cycle */
  duration: number;
  delay: number;
  /** Stagger delay between each ring in the burst */
  ringStagger: number;
  /** Drift animations */
  driftX: number[];
  driftY: number[];
  driftDuration: number;
}

const EMITTERS: Emitter[] = [
  {
    id: 1, top: '18%', left: '12%',
    baseSize: 80, rings: 3, duration: 4.2, delay: 0, ringStagger: 1.0,
    driftX: [0, 10, -6, 0], driftY: [0, -14, 8, 0], driftDuration: 10,
  },
  {
    id: 2, top: '10%', left: '72%',
    baseSize: 60, rings: 3, duration: 3.8, delay: 1.2, ringStagger: 0.9,
    driftX: [0, -8, 12, 0], driftY: [0, 10, -10, 0], driftDuration: 12,
  },
  {
    id: 3, top: '55%', left: '88%',
    baseSize: 100, rings: 3, duration: 5.0, delay: 0.5, ringStagger: 1.2,
    driftX: [0, -12, 8, 0], driftY: [0, -8, 14, 0], driftDuration: 9,
  },
  {
    id: 4, top: '75%', left: '8%',
    baseSize: 72, rings: 3, duration: 4.5, delay: 2.0, ringStagger: 1.1,
    driftX: [0, 14, -8, 0], driftY: [0, -12, 6, 0], driftDuration: 11,
  },
  {
    id: 5, top: '85%', left: '55%',
    baseSize: 54, rings: 3, duration: 3.6, delay: 0.8, ringStagger: 0.8,
    driftX: [0, -6, 10, 0], driftY: [0, 8, -12, 0], driftDuration: 13,
  },
  {
    id: 6, top: '38%', left: '45%',
    baseSize: 90, rings: 4, duration: 5.5, delay: 3.5, ringStagger: 1.3,
    driftX: [0, 8, -14, 0], driftY: [0, -10, 8, 0], driftDuration: 14,
  },
];

/**
 * SonarRings
 * Multiple radar / sonar emitters placed around the canvas. Each emitter
 * expands 3–4 concentric rings in a burst that repeats infinitely.
 * pointer-events-none, aria-hidden, GPU-accelerated.
 */
export const SonarRings: React.FC<SonarRingsProps> = ({
  color = '#C47D5A',
  progress,
  className = '',
}) => {
  return (
    <AmbientLayer progress={progress} drift={14} className={className}>
      {EMITTERS.map((emitter) => (
        /* Drifting container for each emitter */
        <motion.div
          key={emitter.id}
          animate={{ x: emitter.driftX, y: emitter.driftY }}
          transition={{
            duration: emitter.driftDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: emitter.delay,
          }}
          style={{
            top: emitter.top,
            left: emitter.left,
            width: emitter.baseSize,
            height: emitter.baseSize,
          }}
          className="absolute will-change-transform -translate-x-1/2 -translate-y-1/2"
        >
          {/* Center core dot */}
          <span
            style={{
              backgroundColor: hexToRgba(color, 0.8),
              boxShadow: `0 0 8px ${hexToRgba(color, 0.7)}, 0 0 20px ${hexToRgba(color, 0.25)}`,
              width: 5,
              height: 5,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute rounded-full"
          />

          {/* Expanding rings */}
          {Array.from({ length: emitter.rings }, (_, ri) => (
            <motion.span
              key={ri}
              animate={{
                scale: [0.1, 1.8],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: emitter.duration,
                repeat: Infinity,
                ease: 'easeOut',
                delay: emitter.delay + ri * emitter.ringStagger,
              }}
              style={{
                borderColor: hexToRgba(color, 0.55 - ri * 0.1),
                boxShadow: `0 0 6px ${hexToRgba(color, 0.15)}`,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              className="absolute rounded-full border will-change-transform"
            />
          ))}

          {/* Thin dashed orbit ring (static reference) */}
          <span
            style={{
              borderColor: hexToRgba(color, 0.08),
              top: '10%',
              left: '10%',
              right: '10%',
              bottom: '10%',
            }}
            className="absolute rounded-full border border-dashed"
          />
        </motion.div>
      ))}
    </AmbientLayer>
  );
};
