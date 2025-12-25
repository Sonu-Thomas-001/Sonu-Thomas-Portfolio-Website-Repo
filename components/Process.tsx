import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, Shield, Activity, Coffee, Terminal } from 'lucide-react';
import { PROCESS_DATA } from '../constants';

export const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'PenTool': return <PenTool className="w-6 h-6" />;
      case 'Code': return <Code className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      default: return <Terminal className="w-6 h-6" />;
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Coffee className="w-4 h-4" />
            <span>Behind the Scenes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">My Workflow</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Software engineering is as much about the process as it is about the code. 
            Here is a look at my daily approach to solving problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_DATA.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Connector Line (Desktop only) */}
              {idx < PROCESS_DATA.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-white/5 -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
              )}

              <div className="bg-surface/50 border border-white/5 rounded-2xl p-6 h-full flex flex-col hover:bg-surface hover:border-white/10 hover:shadow-xl transition-all duration-300">
                
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-dark border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 shadow-lg">
                        {getIcon(step.icon)}
                    </div>
                    <span className="text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors select-none">
                        {step.phase}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {step.desc}
                </p>

                {/* Tools Footer */}
                <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Tools of Trade</span>
                    <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool, tIdx) => (
                            <span key={tIdx} className="px-2 py-1 rounded bg-dark border border-white/5 text-[10px] text-slate-400 font-medium">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};