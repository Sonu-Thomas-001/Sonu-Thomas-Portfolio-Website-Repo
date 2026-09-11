import React, { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useLenisScroll } from '../hooks/useLenisScroll';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';

const MARQUEE_ITEMS_1 = [
  "ARTIFICIAL INTELLIGENCE",
  "PRODUCTION LLMS",
  "ENTERPRISE PLATFORMS",
  "AUTONOMOUS AGENTS",
  "IIT GUWAHATI",
  "HCLTECH ENTERPRISE",
  "NEURAL ARCHITECTURES",
  "SYSTEM RESILIENCE",
];

const MARQUEE_ITEMS_2 = [
  "PYTORCH & VECTOR EMBEDDINGS",
  "MULTI-AGENT WORKFLOWS",
  "ZERO-DOWNTIME CI/CD",
  "RAG & CONTEXT ENGINEERING",
  "HIGH-THROUGHPUT MICROSERVICES",
  "DATA SCIENCE RIGOR",
  "HIGH-PERFORMANCE INFERENCE",
  "KUBERNETES & CLOUD SCALE",
];

const MARQUEE_ITEMS_3 = [
  "Python", "TypeScript", "React", "PyTorch", "FastAPI", "Docker",
  "Next.js", "LangChain", "OpenAI", "PostgreSQL", "TailwindCSS", "Redis"
];

// Row 1 covers half its (duplicated) width in this many seconds at rest.
const ROW1_CYCLE_SECONDS = 28;

export const TechMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { velocity } = useLenisScroll();

  const smoothVelocity = useSpring(velocity, { damping: 45, stiffness: 320 });
  const skewVelocity = useTransform(smoothVelocity, [-1200, 1200], [-4, 4]);

  // Row 1 direction follows scroll direction; speed builds with scroll velocity.
  const direction = useMotionValue(1);
  const smoothDirection = useSpring(direction, { damping: 30, stiffness: 120 });
  useMotionValueEvent(velocity, 'change', (v) => {
    if (Math.abs(v) > 40) direction.set(v < 0 ? -1 : 1);
  });
  const row1X = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const boost = 1 + Math.min(Math.abs(smoothVelocity.get()) / 900, 2.5);
    const pctPerSecond = 50 / ROW1_CYCLE_SECONDS;
    let next = row1X.get() - smoothDirection.get() * boost * pctPerSecond * (delta / 1000);
    if (next <= -50) next += 50;
    if (next > 0) next -= 50;
    row1X.set(next);
  });
  const row1Percent = useTransform(row1X, (v) => `${v}%`);

  // Curtain entrance: the band rises over the hero's tail as it scrolls into view.
  const entryProgress = useSectionProgress(containerRef, ['start end', 'start start']);
  const bandY = useParallax(entryProgress, [72, 0], [0, 1], 0);

  return (
    <motion.div
      id="marquee"
      ref={containerRef}
      style={{ y: bandY }}
      className="relative z-20 w-full border-y border-[#2A2522] bg-[#131110] text-[#EDE5DC] overflow-hidden py-8 sm:py-10 select-none space-y-4 shadow-[0_-24px_60px_-20px_rgba(19,17,16,0.55)]"
    >
      {/* Horizontal Edge Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#131110] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#131110] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Scroll-direction-aware Bold Display Headlines */}
      <motion.div style={{ skewX: skewVelocity }} className="flex overflow-hidden w-full">
        <motion.div
          style={{ x: row1Percent }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-14 whitespace-nowrap will-change-transform"
        >
          {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, index) => (
            <div key={`r1-${index}`} className="flex items-center gap-8 sm:gap-14">
              <span className={`font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap transition-colors duration-300 ${
                index % 3 === 1
                  ? 'text-copper'
                  : index % 3 === 2
                    ? 'text-primary-200'
                    : 'text-[#EDE5DC]'
              }`}>
                {item}
              </span>
              <span className="text-copper/40 font-mono text-xl sm:text-2xl font-light">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Row 2: Flowing Right - Technical Architecture Focus */}
      <motion.div style={{ skewX: skewVelocity }} className="flex overflow-hidden w-full opacity-85">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-8 sm:gap-12 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, index) => (
            <div key={`r2-${index}`} className="flex items-center gap-8 sm:gap-12">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#9C948B] hover:text-copper transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Row 3: Flowing Left - Fast Micro Tech Strip */}
      <div className="flex overflow-hidden w-full opacity-60 pt-1">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 items-center gap-6 sm:gap-10 whitespace-nowrap"
        >
          {[...MARQUEE_ITEMS_3, ...MARQUEE_ITEMS_3, ...MARQUEE_ITEMS_3].map((tech, index) => (
            <div key={`r3-${index}`} className="flex items-center gap-6 sm:gap-10 text-xs font-mono text-[#78716C]">
              <span>{tech}</span>
              <span className="text-copper/50">&bull;</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const SectionMarquee: React.FC<{ className?: string }> = () => null;
