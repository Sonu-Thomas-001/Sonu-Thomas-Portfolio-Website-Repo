import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Layers, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Dev', 'AI & Data', 'Automation'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Web Dev': return <Code className="w-4 h-4" />;
      case 'AI & Data': return <Sparkles className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-dark relative">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
              <Layers className="w-4 h-4" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Works</h2>
            <p className="text-slate-400 max-w-xl">
              A collection of projects showcasing my expertise in building scalable web applications, 
              automating workflows, and exploring AI solutions.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                    : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark/80 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </div>
                  </div>

                  {/* Hover Overlay with Buttons */}
                  <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    {project.links?.github && (
                      <a 
                        href={project.links.github}
                        className="p-3 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a 
                        href={project.links.demo}
                        className="p-3 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-3">
                        {project.role}
                      </p>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-md border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};