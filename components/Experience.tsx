import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Globe, Code, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

export const Experience: React.FC = () => {
  const getIcon = (role: string) => {
    if (role.toLowerCase().includes('intern') || role.toLowerCase().includes('scholar')) {
      return <GraduationCap className="w-5 h-5 text-white" />;
    }
    if (role.toLowerCase().includes('freelance')) {
      return <Globe className="w-5 h-5 text-white" />;
    }
    if (role.toLowerCase().includes('software engineer')) {
      return <Building2 className="w-5 h-5 text-white" />;
    }
    return <Code className="w-5 h-5 text-white" />;
  };

  return (
    <section id="experience" className="py-24 bg-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Professional Timeline</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A chronological view of my journey through enterprise software engineering, 
            freelance development, and continuous learning.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node (Icon) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark border border-white/10 shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10 flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative z-10">
                      {getIcon(item.role)}
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group relative bg-surface/50 hover:bg-surface border border-white/5 hover:border-primary/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-primary text-xs font-semibold mb-4 border border-white/5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-base text-slate-400 font-medium mb-4 flex items-center gap-2">
                        {item.company}
                      </div>

                      <ul className="space-y-3 mb-6">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {item.tech && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                          {item.tech.map((t, i) => (
                            <span 
                              key={i} 
                              className="px-2.5 py-1 rounded-md bg-dark border border-white/10 text-xs font-medium text-slate-300 group-hover:border-primary/20 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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