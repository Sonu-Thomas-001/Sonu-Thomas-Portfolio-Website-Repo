import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const skillsParallaxY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-200/80 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-1">
          04 // Technical Toolkit
        </span>
        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
          Tools, frameworks, and architectures I build with.
        </h2>
        <p className="text-slate-500 text-base mt-4 font-light leading-relaxed">
          Curated over 3+ years of enterprise and independent engineering, with primary focus on AI pipelines and scalable architectures.
        </p>
      </div>

      {/* Flowing Categorized Tag Cloud with Parallax Shift */}
      <motion.div style={{ y: skillsParallaxY }} className="space-y-12 sm:space-y-16">
        {SKILLS_DATA.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <h3 className="font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
                {cat.category}
              </h3>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {cat.items.map((skill, sIdx) => {
                const isExpert = skill.proficiency === 'Expert';
                return (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 + sIdx * 0.02 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-flex items-center gap-2 rounded-full cursor-default select-none transition-all duration-200 ${
                      isExpert
                        ? 'px-5 py-2.5 bg-slate-900 text-white text-sm sm:text-base font-medium shadow-soft-sm hover:bg-primary hover:shadow-soft-md'
                        : 'px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-normal hover:border-slate-900 hover:text-slate-900 hover:shadow-soft-sm'
                    }`}
                  >
                    <span>{skill.name}</span>
                    {isExpert && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
