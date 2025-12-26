import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Database } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Digital Noise Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
             <Database className="w-4 h-4" />
             <span>Knowledge Bank</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            The theoretical backbone and mathematical foundation of my engineering career.
          </p>
        </motion.div>

        <div className="space-y-4">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-dark border border-white/5 rounded-sm p-1 hover:bg-white/[0.02] transition-colors"
            >
              {/* Data Entry Card Style */}
              <div className="border border-white/5 rounded-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                {/* Side Marker */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-primary transition-colors"></div>

                <div className="shrink-0">
                    <div className="w-12 h-12 bg-surface border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-primary/30 transition-all">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                </div>

                <div className="flex-grow">
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors font-mono">
                            {edu.institution}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-black/40 px-2 py-1 rounded border border-white/5">
                            <Calendar className="w-3 h-3" />
                            {edu.period}
                        </div>
                    </div>
                    
                    <p className="text-base text-white font-medium mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {edu.degree}
                    </p>
                    
                    {edu.details && (
                        <p className="text-sm text-slate-400 font-mono opacity-70">
                        {'>'} {edu.details}
                        </p>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};