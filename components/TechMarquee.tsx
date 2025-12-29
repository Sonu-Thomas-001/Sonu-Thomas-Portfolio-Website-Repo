import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const MAIN_SKILLS = [
  "Artificial Intelligence (AI)",
  "Python Programming",
  "AI Application Development (LLMs & Agents)",
  "Software Engineering & System Design",
  "Web & API Development"
];

const MINI_ITEMS = [
  "Open for Collaboration",
  "System Architecture",
  "AI Integration",
  "Full Stack Engineering",
  "React & Next.js",
  "Production Ready"
];

// Reusable Glitch-Free Loop Component
const InfiniteLoop = ({ children, duration = 30, direction = 'left' }: { children?: React.ReactNode, duration?: number, direction?: 'left' | 'right' }) => {
  return (
    <div className="flex overflow-hidden w-full select-none mask-linear-gradient">
      <motion.div
        initial={{ x: direction === 'left' ? "0%" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0%" }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 min-w-full"
        style={{ willChange: "transform" }} // Hardware acceleration hint
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? "0%" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0%" }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 min-w-full"
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// 1. Main Hero Marquee (Big, Outline Style)
export const TechMarquee: React.FC = () => {
  return (
    <div className="relative border-y border-white/5 bg-dark overflow-hidden py-10 z-20">
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

       <InfiniteLoop duration={45}>
          {MAIN_SKILLS.map((skill, index) => (
             <div key={index} className="flex items-center gap-12 md:gap-24 px-6 md:px-12 group">
                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover:text-white group-hover:[-webkit-text-stroke:0px] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-default whitespace-nowrap">
                  {skill}
                </span>
                <div className="relative">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
             </div>
           ))}
       </InfiniteLoop>
    </div>
  );
};

// 2. Mini Section Marquee (Small, Divider Style)
export const SectionMarquee: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative bg-primary/5 border-y border-primary/10 overflow-hidden py-3 ${className}`}>
        <InfiniteLoop duration={25} direction="right">
          {MINI_ITEMS.map((item, index) => (
             <div key={index} className="flex items-center gap-8 px-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70 whitespace-nowrap flex items-center gap-2">
                  <Zap className="w-3 h-3 text-primary/40" />
                  {item}
                </span>
                <div className="w-1 h-1 bg-primary/20 rounded-full"></div>
             </div>
           ))}
       </InfiniteLoop>
    </div>
  );
};