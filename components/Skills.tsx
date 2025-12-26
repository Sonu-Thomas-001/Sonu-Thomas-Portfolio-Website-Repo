import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Aperture, Languages as LangIcon, Sparkles, Share2 } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Technical')) return <Code2 className="w-6 h-6 text-primary" />;
    if (category.includes('AI')) return <BrainCircuit className="w-6 h-6 text-purple-400" />;
    if (category.includes('Creative')) return <Aperture className="w-6 h-6 text-pink-400" />;
    if (category.includes('Languages')) return <LangIcon className="w-6 h-6 text-emerald-400" />;
    return <Sparkles className="w-6 h-6 text-yellow-400" />;
  };

  return (
    <section id="skills" className="py-24 bg-surface/30 relative">
      {/* Background decoration - Network Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="network-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" className="text-slate-500" />
                  <line x1="2" y1="2" x2="42" y2="2" stroke="currentColor" className="text-slate-500" strokeWidth="0.5" strokeOpacity="0.2" />
                  <line x1="2" y1="2" x2="2" y2="42" stroke="currentColor" className="text-slate-500" strokeWidth="0.5" strokeOpacity="0.2" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#network-pattern)" />
          </svg>
      </div>
      
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Share2 className="w-4 h-4" />
            <span>Neural Toolkit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Skills & Tools</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning software engineering, data science, creative media, and communication.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {SKILLS_DATA.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner Tech Accents */}
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 relative">
                   <div className="absolute inset-0 bg-primary/20 blur-md rounded-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group/skill relative flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-dark/50 border border-slate-200 dark:border-white/10 hover:border-primary/30 hover:bg-white dark:hover:bg-dark transition-all duration-200 cursor-default"
                  >
                    <span className="text-slate-500 dark:text-slate-300 font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                    {skill.proficiency && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 group-hover/skill:bg-primary transition-colors"></span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 group-hover/skill:text-primary/80 transition-colors">
                          {skill.proficiency}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};