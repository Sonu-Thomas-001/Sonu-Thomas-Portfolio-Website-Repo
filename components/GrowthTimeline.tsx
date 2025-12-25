import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Hammer, BookOpen, Briefcase, GraduationCap, Star, ArrowUp } from 'lucide-react';
import { GROWTH_DATA } from '../constants';

export const GrowthTimeline: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-white" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-white" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-white" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-white" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-white" />;
      default: return <Star className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute left-1/4 top-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <ArrowUp className="w-4 h-4" />
            <span>Story of Evolution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Timeline of Growth</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From humble beginnings to enterprise engineering and advanced AI research. 
            This is the story of my continuous professional evolution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {GROWTH_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-0 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                     <div className="w-14 h-14 rounded-full bg-dark border-4 border-dark flex items-center justify-center relative shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
                        <div className="relative z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            {getIcon(item.icon)}
                        </div>
                     </div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                     <div className="group bg-surface border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 relative">
                        {/* Year Badge */}
                        <div className={`
                            absolute -top-3 px-4 py-1 rounded-full text-xs font-bold text-white bg-dark border border-white/10 shadow-sm
                            ${isEven ? 'right-6' : 'left-6'}
                        `}>
                            {item.year}
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">
                                {item.role}
                            </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            {item.description}
                        </p>

                        {/* Decoration */}
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
