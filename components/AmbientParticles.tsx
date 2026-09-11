import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { AmbientLayer } from './AmbientLayer';

export interface AmbientParticlesProps {
  variant?: 'neural' | 'orbs' | 'minimal';
  density?: 'subtle' | 'normal';
  colorScheme?: 'copper' | 'mixed';
  progress?: MotionValue<number>;
  className?: string;
}

interface ParticleConfig {
  id: number;
  type: 'orb' | 'beacon' | 'crosshair' | 'diamond';
  top: string;
  left: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
  floatY: number[];
  floatX: number[];
}

const PARTICLES_DATA_NORMAL: ParticleConfig[] = [
  // Top-right ambient frosted copper orb
  {
    id: 1,
    type: 'orb',
    top: '12%',
    left: '84%',
    size: 64,
    color: 'radial-gradient(circle, rgba(196,125,90,0.35) 0%, rgba(196,125,90,0.08) 55%, transparent 75%)',
    duration: 8.5,
    delay: 0,
    floatY: [0, -22, 4, 0],
    floatX: [0, 14, -8, 0],
  },
  // Top-left cyber beacon with radar pulse
  {
    id: 2,
    type: 'beacon',
    top: '18%',
    left: '8%',
    size: 16,
    color: '#C47D5A',
    duration: 6.2,
    delay: 0.8,
    floatY: [0, -15, 0],
    floatX: [0, 10, 0],
  },
  // Mid-right architectural crosshair
  {
    id: 3,
    type: 'crosshair',
    top: '42%',
    left: '92%',
    size: 14,
    color: '#C47D5A',
    duration: 9.8,
    delay: 1.4,
    floatY: [0, 18, -12, 0],
    floatX: [0, -12, 6, 0],
  },
  // Mid-left soft champagne orb
  {
    id: 4,
    type: 'orb',
    top: '55%',
    left: '5%',
    size: 52,
    color: 'radial-gradient(circle, rgba(223,155,122,0.3) 0%, rgba(196,125,90,0.06) 60%, transparent 80%)',
    duration: 10.5,
    delay: 2.1,
    floatY: [0, -28, 8, 0],
    floatX: [0, 16, -10, 0],
  },
  // Bottom-center geometric diamond
  {
    id: 5,
    type: 'diamond',
    top: '78%',
    left: '48%',
    size: 10,
    color: '#C47D5A',
    duration: 7.4,
    delay: 0.5,
    floatY: [0, -16, 0],
    floatX: [0, -8, 0],
  },
  // Bottom-right telemetry beacon
  {
    id: 6,
    type: 'beacon',
    top: '82%',
    left: '88%',
    size: 14,
    color: '#10B981', // Emerald active model beacon
    duration: 6.8,
    delay: 1.8,
    floatY: [0, 14, -8, 0],
    floatX: [0, 8, -6, 0],
  },
  // Upper-center floating crosshair
  {
    id: 7,
    type: 'crosshair',
    top: '28%',
    left: '42%',
    size: 12,
    color: '#C47D5A',
    duration: 11.2,
    delay: 3.2,
    floatY: [0, 16, -14, 0],
    floatX: [0, -10, 12, 0],
  },
];

const PARTICLES_DATA_SUBTLE: ParticleConfig[] = [
  // Top-right frosted orb
  {
    id: 101,
    type: 'orb',
    top: '15%',
    left: '86%',
    size: 58,
    color: 'radial-gradient(circle, rgba(196,125,90,0.32) 0%, rgba(196,125,90,0.06) 60%, transparent 80%)',
    duration: 9.2,
    delay: 0,
    floatY: [0, -20, 6, 0],
    floatX: [0, 12, -8, 0],
  },
  // Mid-left cyber beacon
  {
    id: 102,
    type: 'beacon',
    top: '46%',
    left: '6%',
    size: 14,
    color: '#C47D5A',
    duration: 7.1,
    delay: 1.2,
    floatY: [0, 14, -10, 0],
    floatX: [0, -8, 8, 0],
  },
  // Bottom-right crosshair
  {
    id: 103,
    type: 'crosshair',
    top: '76%',
    left: '90%',
    size: 13,
    color: '#C47D5A',
    duration: 10.0,
    delay: 2.0,
    floatY: [0, -18, 0],
    floatX: [0, 10, 0],
  },
  // Lower-left soft glow orb
  {
    id: 104,
    type: 'orb',
    top: '72%',
    left: '12%',
    size: 46,
    color: 'radial-gradient(circle, rgba(223,155,122,0.28) 0%, rgba(196,125,90,0.05) 55%, transparent 75%)',
    duration: 11.0,
    delay: 0.7,
    floatY: [0, -16, 12, 0],
    floatX: [0, -10, 14, 0],
  },
];

export const AmbientParticles: React.FC<AmbientParticlesProps> = ({
  variant = 'neural',
  density = 'normal',
  colorScheme = 'copper',
  progress,
  className = '',
}) => {
  const rawList = density === 'subtle' ? PARTICLES_DATA_SUBTLE : PARTICLES_DATA_NORMAL;

  // Filter based on variant
  const particles = rawList.filter((p) => {
    if (variant === 'orbs') return p.type === 'orb';
    if (variant === 'minimal') return p.type === 'beacon' || p.type === 'orb';
    return true; // neural includes all
  });

  return (
    <AmbientLayer progress={progress} drift={10} className={className}>
      {particles.map((p) => {
        if (p.type === 'orb') {
          return (
            <motion.div
              key={p.id}
              animate={{
                y: p.floatY,
                x: p.floatX,
                scale: [1, 1.18, 0.94, 1],
                opacity: [0.35, 0.75, 0.4, 0.35],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                background: p.color,
              }}
              className="absolute rounded-full filter blur-[1px] will-change-transform"
            />
          );
        }

        if (p.type === 'beacon') {
          return (
            <motion.div
              key={p.id}
              animate={{
                y: p.floatY,
                x: p.floatX,
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
              }}
              className="absolute flex items-center justify-center will-change-transform"
            >
              {/* Expanding radar pulse ring */}
              <motion.span
                animate={{
                  scale: [1, 2.6],
                  opacity: [0.75, 0],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                style={{
                  borderColor: p.color === '#10B981' ? 'rgba(16,185,129,0.6)' : 'rgba(196,125,90,0.6)',
                }}
                className="absolute inset-0 rounded-full border border-dashed"
              />
              {/* Center illuminated dot */}
              <span
                style={{
                  backgroundColor: p.color,
                  boxShadow: `0 0 10px ${p.color}`,
                }}
                className="w-2 h-2 rounded-full relative z-10"
              />
            </motion.div>
          );
        }

        if (p.type === 'crosshair') {
          return (
            <motion.div
              key={p.id}
              animate={{
                y: p.floatY,
                x: p.floatX,
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.3, 0.65, 0.35, 0.65, 0.3],
              }}
              transition={{
                duration: p.duration * 1.5,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
              }}
              className="absolute flex items-center justify-center will-change-transform opacity-40 text-copper font-mono text-xs select-none"
            >
              +
            </motion.div>
          );
        }

        if (p.type === 'diamond') {
          return (
            <motion.div
              key={p.id}
              animate={{
                y: p.floatY,
                x: p.floatX,
                rotate: [45, 135, 225, 315, 405],
                scale: [0.9, 1.25, 0.9],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                borderColor: p.color,
              }}
              className="absolute border border-copper/60 rounded-[2px] will-change-transform"
            />
          );
        }

        return null;
      })}
    </AmbientLayer>
  );
};
