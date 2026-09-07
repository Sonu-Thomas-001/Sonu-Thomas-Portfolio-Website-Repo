import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-200/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-1">
            03 // Academic Roots
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Education & Foundations
          </h2>
        </div>
        <p className="text-slate-500 text-sm max-w-md">
          Theoretical grounding in linear algebra, algorithms, deep neural nets, and statistical modeling.
        </p>
      </div>

      {/* Single-row / 3-column clean horizontal grid */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {EDUCATION_DATA.map((edu, idx) => {
          const isIIT = edu.institution.toLowerCase().includes('guwahati');
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-7 rounded-3xl bg-white transition-all duration-300 flex flex-col justify-between ${
                isIIT
                  ? 'border-2 border-primary/30 shadow-soft-md ring-4 ring-primary/5'
                  : 'border border-slate-200/90 shadow-soft-sm hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-slate-400">
                    {edu.period}
                  </span>
                  {isIIT && (
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-primary-50 text-primary border border-primary/20">
                      Top Institution
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-xl text-slate-900 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {edu.degree}
                </p>

                {edu.details && (
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>0{idx + 1}</span>
                <span>Verified</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
