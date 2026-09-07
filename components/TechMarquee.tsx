import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, BrainCircuit, Cpu, Database, Network } from 'lucide-react';

const MAIN_SKILLS = [
  "Artificial Intelligence & Agents",
  "LLM Fine-Tuning & Prompt Engineering",
  "Python & PyTorch",
  "Enterprise System Architecture",
  "Full-Stack Web Development",
  "Data Pipelines & Vector DBs"
];

const MINI_ITEMS = [
  "Production Scalability",
  "Enterprise Change Management",
  "Applied AI Engineering",
  "React & TypeScript",
  "Clean Code & Reliability",
  "IIT Guwahati Alumni"
];

const InfiniteLoop = ({ 
  children, 
  duration = 35, 
  direction = 'left' 
}: { 
  children?: React.ReactNode, 
  duration?: number, 
  direction?: 'left' | 'right' 
}) => {
  return (
    <div className="flex overflow-hidden w-full select-none">
      <motion.div
        initial={{ x: direction === 'left' ? "0%" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0%" }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 min-w-full items-center"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? "0%" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0%" }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 min-w-full items-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const TechMarquee: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative border-y border-slate-200/80 bg-white/60 backdrop-blur-sm overflow-hidden py-8 z-20"
    >
      <motion.div style={{ y: cardsY }}>
        <InfiniteLoop duration={40}>
          {MAIN_SKILLS.map((skill, index) => (
            <div key={index} className="flex items-center gap-8 md:gap-14 px-6 md:px-10 group cursor-default">
              <span className="font-display text-2xl md:text-4xl font-bold tracking-tight text-slate-400 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {skill}
              </span>
              <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
            </div>
          ))}
        </InfiniteLoop>
      </motion.div>
    </div>
  );
};

export const SectionMarquee: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative bg-primary-50/60 border-y border-primary/10 overflow-hidden py-3 ${className}`}>
      <InfiniteLoop duration={30} direction="right">
        {MINI_ITEMS.map((item, index) => (
          <div key={index} className="flex items-center gap-6 px-4">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary/80 whitespace-nowrap flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-primary" />
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          </div>
        ))}
      </InfiniteLoop>
    </div>
  );
};