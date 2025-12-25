import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, BadgeCheck } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <GraduationCap className="w-96 h-96 text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Academic Background</h2>
            </motion.div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-dark border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-400 border border-white/5">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="text-base text-slate-200 font-medium leading-snug">
                        {edu.degree}
                      </p>
                      {edu.details && (
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Certifications & Achievements</h2>
            </motion.div>

            <div className="grid gap-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/50 hover:bg-secondary/5 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-4">
                     <div className="p-2.5 rounded-full bg-dark border border-white/10 group-hover:border-secondary/50 transition-colors">
                        <Award className="w-5 h-5 text-slate-400 group-hover:text-secondary transition-colors" />
                     </div>
                     <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                        {cert.name}
                     </span>
                  </div>
                  <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                      <BadgeCheck className="w-5 h-5 text-secondary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};