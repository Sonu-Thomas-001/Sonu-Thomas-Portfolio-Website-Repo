import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

const MARQUEE_ITEMS_1 = [
  "ARTIFICIAL INTELLIGENCE",
  "LLM ARCHITECTURES",
  "FULL-STACK ENGINEERING",
  "PRODUCTION SYSTEMS",
  "AUTONOMOUS AGENTS",
  "HCLTECH ENTERPRISE",
  "IIT GUWAHATI",
  "SCALABLE BACKENDS",
];

const MARQUEE_ITEMS_2 = [
  "PYTORCH & VECTOR SEARCH",
  "AGENT WORKFLOWS",
  "ZERO-DOWNTIME DELIVERY",
  "CONTEXT EMBEDDINGS",
  "ENTERPRISE CI/CD",
  "DATA SCIENCE RIGOR",
  "HUMAN-CENTRIC INTERFACES",
  "MODERN SOFTWARE ARCHITECTURES",
];

export const TechMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 350 });
  const skewVelocity = useTransform(smoothVelocity, [-1200, 1200], [-3, 3]);

  return (
    <div
      id="marquee"
      ref={containerRef}
      className="relative w-full border-y border-slate-800 bg-slate-950 text-white overflow-hidden py-7 sm:py-9 select-none space-y-3.5 shadow-soft-lg"
    >
      {/* Row 1: Flowing Left - Bold Typography */}
      <motion.div style={{ skewX: skewVelocity }} className="flex overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-14 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, index) => (
            <div key={`r1-${index}`} className="flex items-center gap-8 sm:gap-14">
              <span className={`font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 ${
                index % 3 === 1 
                  ? 'text-cyan-400' 
                  : index % 3 === 2 
                    ? 'text-primary-300' 
                    : 'text-white'
              }`}>
                {item}
              </span>
              <span className="text-slate-700 font-mono text-xl sm:text-2xl font-light">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Row 2: Flowing Right (Counter-scroll) */}
      <motion.div style={{ skewX: skewVelocity }} className="flex overflow-hidden w-full opacity-80">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-14 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, index) => (
            <div key={`r2-${index}`} className="flex items-center gap-8 sm:gap-14">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-400 hover:text-white transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const SectionMarquee: React.FC<{ className?: string }> = () => null;