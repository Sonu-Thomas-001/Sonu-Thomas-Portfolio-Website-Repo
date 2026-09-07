import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, CheckCircle2, ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

export const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = EXPERIENCE_DATA[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % EXPERIENCE_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + EXPERIENCE_DATA.length) % EXPERIENCE_DATA.length);
  };

  return (
    <section id="experience" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-1">
            02 // Career Journey
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Experience &amp; Track Record
          </h2>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:border-slate-900 hover:text-primary flex items-center justify-center transition-colors shadow-soft-sm cursor-pointer"
            aria-label="Previous career milestone"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="font-mono text-xs text-slate-500 px-2 select-none">
            <span className="text-slate-900 font-semibold">0{activeIndex + 1}</span>
            <span className="text-slate-300 mx-1">/</span>
            <span>0{EXPERIENCE_DATA.length}</span>
          </div>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:border-slate-900 hover:text-primary flex items-center justify-center transition-colors shadow-soft-sm cursor-pointer"
            aria-label="Next career milestone"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Milestone Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 select-none no-scrollbar">
        {EXPERIENCE_DATA.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                isActive
                  ? 'bg-slate-900 text-white font-semibold shadow-soft-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900'
              }`}
            >
              <span>0{index + 1}</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>{item.company}</span>
            </button>
          );
        })}
      </div>

      {/* Active Experience Card Showcase with Animated Transition */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft-md hover:border-primary/40 transition-all duration-300"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Role, Period, Company */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{activeItem.period}</span>
                </div>

                <h3 className="font-display font-semibold text-2xl sm:text-4xl text-slate-900 leading-tight">
                  {activeItem.role}
                </h3>

                <div className="flex items-center gap-2 text-slate-700 font-medium text-base">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>{activeItem.company}</span>
                </div>

                {activeItem.tech && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                    {activeItem.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-mono text-slate-600"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Achievements & Responsibilities */}
              <div className="lg:col-span-7 lg:border-l lg:border-slate-100 lg:pl-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Key Responsibilities &amp; Impact
                </span>
                <ul className="space-y-3.5">
                  {activeItem.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 text-slate-600 text-sm sm:text-base font-light leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Milestone Progress Bar */}
      <div className="mt-8 flex items-center gap-2">
        {EXPERIENCE_DATA.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className="flex-1 h-1 rounded-full cursor-pointer overflow-hidden bg-slate-200 transition-colors"
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: '0%' }}
              animate={{ width: i <= activeIndex ? '100%' : '0%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};