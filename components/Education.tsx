import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <GraduationCap className="w-96 h-96 text-primary" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
             <GraduationCap className="w-4 h-4" />
             <span>Academic Foundation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My formal education journey, providing the theoretical and mathematical backbone for my engineering career.
          </p>
        </motion.div>

        <div className="space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-dark border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-3">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-secondary group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {edu.institution}
                        </h3>
                        <p className="text-base text-slate-300 font-medium leading-snug mt-1">
                            {edu.degree}
                        </p>
                    </div>
                </div>
                
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-slate-400 border border-white/5 self-start">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </div>
              </div>
              
              {edu.details && (
                <div className="pl-[4.5rem]">
                    <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-white/5 pl-4">
                    {edu.details}
                    </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};