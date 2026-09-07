import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const skillsParallaxY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E0D8] relative overflow-hidden"
    >
      {/* Subtle Graph Grid Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(196, 125, 90, 0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase block mb-1">
          04 // Technical Ecosystem
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
          Tools, frameworks, and architectures I build with.
        </h2>
        <p className="text-ink-secondary text-base mt-4 font-light leading-relaxed">
          Curated across 3+ years of enterprise and independent systems engineering, with focus on production LLMs, vector pipelines, and distributed architectures.
        </p>

        {/* Legend */}
        <div className="flex items-center gap-5 mt-6 text-xs font-mono text-[#78716C]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-copper inline-block" />
            Core Proficiency
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border border-copper inline-block" />
            Applied Architecture
          </span>
        </div>
      </div>

      {/* Flowing Categorized Tag Cloud */}
      <motion.div style={{ y: skillsParallaxY }} className="space-y-12 sm:space-y-16">
        {SKILLS_DATA.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-copper font-semibold">
                [0{catIdx + 1}]
              </span>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                {cat.category}
              </h3>
              <div className="h-px bg-[#E8E0D8] flex-1" />
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
              {cat.items.map((skill, sIdx) => {
                const isExpert = skill.proficiency === 'Expert';
                return (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 320,
                      damping: 20,
                      delay: 0.04 + sIdx * 0.02,
                    }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 rounded-full cursor-default select-none transition-all duration-200 ${
                      isExpert
                        ? 'px-5 py-2.5 bg-[#1A1614] text-[#EDE5DC] text-sm sm:text-base font-medium shadow-soft-sm hover:bg-copper hover:text-white hover:shadow-glow-copper'
                        : 'px-4 py-2 bg-[#FEFCF9] border border-[#E8E0D8] text-ink text-xs sm:text-sm font-normal hover:border-copper hover:text-copper hover:shadow-soft-sm'
                    }`}
                  >
                    <span>{skill.name}</span>
                    {isExpert && (
                      <span className="w-1.5 h-1.5 rounded-full bg-copper group-hover:bg-white animate-pulse" />
                    )}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
