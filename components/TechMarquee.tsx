import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';

const MARQUEE_ITEMS = [
  "ARTIFICIAL INTELLIGENCE",
  "LLM ARCHITECTURES",
  "FULL-STACK ENGINEERING",
  "PRODUCTION SYSTEMS",
  "AUTONOMOUS AGENTS",
  "HCLTECH ENTERPRISE",
  "IIT GUWAHATI",
  "SCALABLE BACKENDS",
];

export const TechMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewVelocity = useTransform(smoothVelocity, [-1200, 1200], [-3, 3]);

  return (
    <div
      id="marquee"
      ref={containerRef}
      className="relative w-full border-y border-slate-200/80 bg-white/70 backdrop-blur-md overflow-hidden py-6 sm:py-8 select-none"
    >
      <motion.div style={{ skewX: skewVelocity }} className="flex overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-16 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-16">
              <span className={`font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 ${
                index % 2 === 1 ? 'text-slate-300 hover:text-slate-700' : 'text-slate-800 hover:text-primary'
              }`}>
                {item}
              </span>
              <span className="text-slate-300 font-mono text-xl sm:text-2xl font-light">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const SectionMarquee: React.FC<{ className?: string }> = () => null;