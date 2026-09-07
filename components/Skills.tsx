import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Cpu, Database, Globe, Monitor, Code2, Briefcase, Layers, Sparkles, Server } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const getIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('ai') || cat.includes('intelligence')) return <Cpu className="w-5 h-5 text-primary" />;
    if (cat.includes('core')) return <Code2 className="w-5 h-5 text-indigo-600" />;
    if (cat.includes('dev') || cat.includes('ops')) return <Terminal className="w-5 h-5 text-emerald-600" />;
    if (cat.includes('infrastructure') || cat.includes('data')) return <Database className="w-5 h-5 text-blue-600" />;
    if (cat.includes('web')) return <Globe className="w-5 h-5 text-violet-600" />;
    return <Briefcase className="w-5 h-5 text-slate-600" />;
  };

  return (
    <section ref={containerRef} id="skills" className="py-24 lg:py-32 bg-page relative overflow-hidden">
      
      <motion.div style={{ y: cardsY }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Engineering & AI Stack
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            The programming languages, frameworks, models, and cloud tools I leverage to build scalable systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILLS_DATA.map((category, idx) => {
            const isAI = category.category.toLowerCase().includes('ai') || category.category.toLowerCase().includes('intelligence');
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isAI 
                    ? 'md:col-span-2 bg-gradient-to-br from-white via-primary-50/20 to-indigo-50/30 border-2 border-primary/30 shadow-soft-lg hover:border-primary/60 hover:shadow-glow-primary'
                    : 'bg-white border border-slate-200/90 shadow-soft-md hover:border-primary/40 hover:shadow-soft-lg hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-soft-sm group-hover:scale-105 transition-transform ${
                        isAI 
                          ? 'bg-primary text-white border-primary shadow-glow-primary' 
                          : 'bg-slate-50 border-slate-200/80 text-slate-700'
                      }`}>
                        {getIcon(category.category)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-primary transition-colors">
                          {category.category}
                        </h3>
                        {isAI && (
                          <span className="text-[11px] font-mono text-primary font-semibold uppercase tracking-wider">
                            Primary Engineering Domain
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill, sIdx) => (
                      <div 
                        key={sIdx} 
                        className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-default flex items-center gap-1.5 ${
                          isAI
                            ? 'bg-white border border-primary/20 text-slate-800 shadow-soft-sm hover:border-primary hover:bg-primary-50'
                            : 'bg-slate-50 border border-slate-200/70 text-slate-700 hover:border-primary/30 hover:bg-white hover:text-primary'
                        }`}
                      >
                        {skill.proficiency === 'Expert' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtitle / Footer inside card */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.items.length} Technologies</span>
                  <span className="group-hover:text-primary transition-colors font-medium">Production Tested</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};
