import React from 'react';
import { motion, MotionValue, useReducedMotion, useTransform } from 'framer-motion';

interface ScrubRevealProps {
  progress: MotionValue<number>;
  /** Progress window [start, end] over which the element fades and slides in. */
  range: [number, number];
  /** Set false to render the element fully visible (e.g. on mobile where there is no pinned runway). */
  enabled?: boolean;
  y?: number;
  className?: string;
  children: React.ReactNode;
}

export const ScrubReveal: React.FC<ScrubRevealProps> = ({
  progress,
  range,
  enabled = true,
  y = 24,
  className = '',
  children,
}) => {
  const reduced = useReducedMotion();
  const active = enabled && !reduced;
  const opacity = useTransform(progress, range, active ? [0, 1] : [1, 1]);
  const translateY = useTransform(progress, range, active ? [y, 0] : [0, 0]);

  return (
    <motion.div style={{ opacity, y: translateY }} className={className}>
      {children}
    </motion.div>
  );
};
