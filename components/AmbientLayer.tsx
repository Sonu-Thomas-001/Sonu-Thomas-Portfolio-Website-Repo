import React, { useRef } from 'react';
import { motion, MotionValue, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';

export interface AmbientLayerProps {
  /** Section scroll progress (0→1). When provided, the layer drifts with depth parallax. */
  progress?: MotionValue<number>;
  /** Vertical drift in percent of the layer height across the full progress range. */
  drift?: number;
  className?: string;
  children: React.ReactNode;
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export const AmbientLayer: React.FC<AmbientLayerProps> = ({ progress, drift = 12, className = '', children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '25% 0px 25% 0px' });
  const reduced = useReducedMotion();
  const idle = useMotionValue(0.5);
  const source = progress ?? idle;
  const y = useTransform(source, [0, 1], reduced || !progress ? ['0%', '0%'] : [`${drift}%`, `${-drift}%`]);
  const scale = useTransform(source, [0, 1], reduced || !progress ? [1, 1] : [1.06, 1]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      {inView && !reduced && (
        <motion.div style={{ y, scale }} className="absolute -inset-[14%] will-change-transform">
          {children}
        </motion.div>
      )}
    </div>
  );
};
