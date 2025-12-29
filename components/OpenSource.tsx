import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Terminal, ExternalLink } from 'lucide-react';
import { OPEN_SOURCE_DATA, PERSONAL_DETAILS } from '../constants';

export const OpenSource: React.FC = () => {
  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'typescript': return 'bg-blue-400';
      case 'python': return 'bg-yellow-400';
      case 'javascript': return 'bg-yellow-300';
      case 'shell': return 'bg-green-400';
      default: return 'bg-slate-400';
    }
  };

  return (
    <section className="py-20 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-4">
              <Github className="w-4 h-4" />
              <span>Community & Code</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Open Source</h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Contributing to the developer ecosystem with tools, libraries, and utilities.
            </p>
          </div>
          
          <a href={PERSONAL_DETAILS.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-medium hover:text-white transition-colors">
            View Github Profile <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {OPEN_SOURCE_DATA.map((repo, idx) => (
            <motion.a
              href={repo.link}
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group block p-6 bg-surface/30 border border-white/10 rounded-xl hover:border-slate-500 hover:bg-surface/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-slate-300">
                        <Terminal className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-400 font-mono group-hover:underline decoration-blue-400/50 underline-offset-4">
                        {repo.name}
                    </h3>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-xs px-2 py-1 rounded-full border border-white/5 bg-dark">
                    public
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed h-10 line-clamp-2">
                {repo.description}
              </p>

              <div className="flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                    {repo.language}
                </div>
                <div className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                    <Star className="w-4 h-4" />
                    {repo.stars}
                </div>
                <div className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                    <GitFork className="w-4 h-4" />
                    {repo.forks}
                </div>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
