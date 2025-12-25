import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Calendar, Trophy } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants';

export const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            <span>Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Certifications Timeline</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A record of my commitment to continuous learning and professional development.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-secondary/50 via-secondary/10 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {CERTIFICATIONS_DATA.map((cert, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
                     <div className="w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center shadow-[0_0_0_4px_rgba(2,6,23,1)] group">
                        <div className="w-3 h-3 rounded-full bg-secondary group-hover:scale-125 transition-transform"></div>
                     </div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Card content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                     <div className={`
                        group bg-surface/50 border border-white/5 rounded-xl p-5 hover:border-secondary/30 hover:bg-surface hover:shadow-lg transition-all duration-300
                        ${isEven ? 'md:mr-8' : 'md:ml-8'}
                     `}>
                        <div className="flex justify-between items-start mb-2">
                           <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                              <BadgeCheck className="w-3.5 h-3.5" />
                              Certification
                           </span>
                           <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                              {cert.date}
                           </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                           {cert.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                           <Award className="w-4 h-4 text-slate-500" />
                           {cert.issuer}
                        </div>
                     </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};