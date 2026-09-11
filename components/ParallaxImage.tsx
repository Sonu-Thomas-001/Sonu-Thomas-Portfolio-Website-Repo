import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Vertical travel across the frame's visit through the viewport. */
  travel?: [string, string];
  scale?: number;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
}

/** Fills its positioned parent and drifts the image inside an overflow-hidden frame as it scrolls. */
export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  travel = ['-9%', '9%'],
  scale = 1.18,
  imgClassName = 'object-cover',
  loading = 'lazy',
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const progress = useSectionProgress(frameRef);
  const y = useParallax(progress, travel, [0, 1], '0%');
  return (
    <div ref={frameRef} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={`absolute inset-0 w-full h-full will-change-transform ${imgClassName}`}
        loading={loading}
      />
    </div>
  );
};
