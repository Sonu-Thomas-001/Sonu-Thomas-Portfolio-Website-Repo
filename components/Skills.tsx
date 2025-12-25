import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Aperture, Languages as LangIcon, Sparkles } from 'lucide-react';
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
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Expertise</span>
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
              className="bg-dark/50 border border-white/5 rounded-2xl p-8 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="group relative flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-200 cursor-default"
                  >
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    {skill.proficiency && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span>
                        <span className="text-xs text-slate-500 group-hover:text-primary/80 transition-colors">
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