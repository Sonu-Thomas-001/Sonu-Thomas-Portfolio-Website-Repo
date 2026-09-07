import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={containerRef} id="education" className="py-24 lg:py-32 bg-page relative overflow-hidden">
      
      <motion.div style={{ y: cardsY }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Education & Knowledge Foundation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Mathematical, algorithmic, and computing frameworks grounding my machine learning 
            and engineering solutions.
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="group flex"
            >
              <div className="w-full bg-white border border-slate-200/90 hover:border-primary/40 rounded-3xl p-8 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                
                <div>
                  {/* Top Icon & Period */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <div className="space-y-2 mb-4">
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-primary transition-colors leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Details */}
                  {edu.details && (
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 border border-slate-200/60 p-3.5 rounded-2xl font-mono mt-4">
                      {edu.details}
                    </p>
                  )}
                </div>

                {/* Verified badge */}
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Curriculum Verified</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};
