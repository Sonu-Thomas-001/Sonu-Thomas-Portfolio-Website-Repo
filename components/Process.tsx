import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, Shield, Activity, Terminal, GitBranch, ArrowRight } from 'lucide-react';
import { PROCESS_DATA } from '../constants';

export const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      default: return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4 font-mono">
            <GitBranch className="w-4 h-4" />
            <span>git checkout -b process-flow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Development Pipeline</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_DATA.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Connector (Desktop) */}
              {idx < PROCESS_DATA.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 z-20 text-white/10">
                    <ArrowRight className="w-6 h-6" />
                </div>
              )}

              <div className="bg-dark border border-white/10 rounded-sm p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                
                {/* Version Tag */}
                <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-white/5 text-[9px] font-mono text-slate-500 rounded border border-white/5">
                    v{idx + 1}.0
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        {getIcon(step.icon)}
                    </div>
                    <span className="text-4xl font-black text-white/5 select-none font-mono">
                        {step.phase}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-grow font-mono opacity-80">
                    {step.desc}
                </p>

                {/* Tools Footer */}
                <div className="pt-4 border-t border-dashed border-white/10">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">Build Tools</span>
                    <div className="flex flex-wrap gap-1.5">
                        {step.tools.map((tool, tIdx) => (
                            <span key={tIdx} className="px-1.5 py-0.5 rounded bg-surface border border-white/5 text-[9px] text-slate-400 font-mono">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Loading Bar Effect */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};