
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Globe, Monitor, Code2, Briefcase, Layers } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const getIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('core')) return <Code2 className="w-5 h-5 text-blue-400" />;
    if (cat.includes('ai')) return <Cpu className="w-5 h-5 text-purple-400" />;
    if (cat.includes('dev')) return <Terminal className="w-5 h-5 text-emerald-400" />;
    if (cat.includes('infrastructure')) return <Database className="w-5 h-5 text-orange-400" />;
    if (cat.includes('web')) return <Globe className="w-5 h-5 text-cyan-400" />;
    if (cat.includes('professional')) return <Briefcase className="w-5 h-5 text-pink-400" />;
    return <Layers className="w-5 h-5 text-slate-400" />;
  };

  const getColor = (category: string) => {
      const cat = category.toLowerCase();
      if (cat.includes('core')) return 'border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40';
      if (cat.includes('ai')) return 'border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40';
      if (cat.includes('dev')) return 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40';
      if (cat.includes('infrastructure')) return 'border-orange-500/20 bg-orange-500/5 hover:border-orange-500/40';
      if (cat.includes('web')) return 'border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40';
      return 'border-white/10 bg-white/5 hover:border-white/20';
  };

  return (
    <section id="skills" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-dark to-dark pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Monitor className="w-4 h-4" />
            <span>Tech Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Arsenal & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             A holistic view of the languages, frameworks, and intelligent tools I leverage to engineer scalable solutions.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS_DATA.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group relative rounded-2xl border p-6 transition-all duration-300 ${getColor(category.category)}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-dark border border-white/10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                   {getIcon(category.category)}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="relative px-3 py-1.5 rounded-md bg-dark/50 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill.name}
                    {skill.proficiency === 'Expert' && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full border-2 border-dark"></span>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Scanline Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 font-mono">
                <span className="text-primary">*</span> Indicates high proficiency / daily usage.
            </p>
        </div>

      </div>
    </section>
  );
};
