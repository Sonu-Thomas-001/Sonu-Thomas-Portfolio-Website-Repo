import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';

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
  
  // Parallax skew and shift based on scroll
  const skewVelocity = useTransform(smoothVelocity, [-1200, 1200], [-4, 4]);

  return (
    <div
      id="marquee"
      ref={containerRef}
      className="relative w-full border-y border-slate-200/80 bg-white/75 backdrop-blur-md overflow-hidden py-8 sm:py-10 select-none space-y-4"
    >
      {/* Row 1: Flowing Left */}
      <motion.div style={{ skewX: skewVelocity }} className="flex overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-16 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, index) => (
            <div key={`r1-${index}`} className="flex items-center gap-8 sm:gap-16">
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

      {/* Row 2: Flowing Right (Counter-scroll) */}
      <motion.div style={{ skewX: skewVelocity }} className="flex overflow-hidden w-full opacity-70">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-16 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, index) => (
            <div key={`r2-${index}`} className="flex items-center gap-8 sm:gap-16">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const SectionMarquee: React.FC<{ className?: string }> = () => null;