
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Code, Layers, Sparkles, TerminalSquare, Cpu, Monitor, Box, Info, X } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { ProjectItem } from '../types';
import Markdown from 'react-markdown';

export const Projects: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const categories = ['All', 'Generative AI', 'AI Tools', 'Web Apps'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Web Apps': return <Monitor className="w-4 h-4" />;
      case 'Generative AI': return <Sparkles className="w-4 h-4" />;
      case 'AI Tools': return <Cpu className="w-4 h-4" />;
      default: return <Box className="w-4 h-4" />;
    }
  };

  return (
    <section ref={containerRef} id="projects" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Subtle Grid & Code Decoration */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></motion.div>
      <motion.div style={{ y: bgY }} className="absolute top-10 right-10 opacity-5 pointer-events-none font-mono text-sm hidden lg:block">
          <div>const portfolio = await buildFuture();</div>
          <div>if (innovation) return true;</div>
      </motion.div>

      <motion.div style={{ y: cardsY }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4 font-mono">
              <TerminalSquare className="w-4 h-4" />
              <span>~/Projects</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Works</h2>
            <p className="text-slate-400 max-w-xl">
              A comprehensive collection of my open-source contributions, AI experiments, and full-stack applications.
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="group relative bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
              >
                {/* Tech HUD Corner */}
                <div className="absolute top-0 right-0 p-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-1">
                        <div className="w-1 h-3 bg-primary/50"></div>
                        <div className="w-1 h-2 bg-primary/30"></div>
                        <div className="w-1 h-1 bg-primary/10"></div>
                    </div>
                </div>

                <div className="relative h-48 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark/80 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg font-mono">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </div>
                  </div>

                  {/* Hover Overlay with Buttons */}
                  <div className="absolute inset-0 bg-dark/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                      title="Project Details"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                    {project.links?.github && (
                      <a 
                        href={project.links.github}
                        className="p-3 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a 
                        href={project.links.demo}
                        className="p-3 bg-white rounded-full text-dark hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-col gap-2 h-full">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                        {project.role}
                      </p>
                      <p className="text-slate-400 leading-relaxed text-sm line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-white/5 rounded border border-slate-200 dark:border-white/5 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                            <span className="px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-white/5 rounded border border-slate-200 dark:border-white/5 font-mono">+{project.stack.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col relative shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white shrink-0 pr-4">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-grow text-slate-300">
                {selectedProject.detailedDescription ? (
                  <div className="markdown-body">
                    <style>{`
                      .markdown-body h2 { font-size: 1.5rem; font-weight: bold; color: white; margin-top: 1.5rem; margin-bottom: 0.75rem; }
                      .markdown-body ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
                      .markdown-body li { margin-bottom: 0.5rem; }
                      .markdown-body p { margin-bottom: 1rem; line-height: 1.6; }
                      .markdown-body strong { color: white; font-weight: 600; }
                    `}</style>
                    <Markdown>{selectedProject.detailedDescription}</Markdown>
                  </div>
                ) : (
                  <p className="text-slate-400">Detailed description coming soon.</p>
                )}
              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-white/10 flex gap-4 bg-dark/30 justify-end">
                {selectedProject.links?.github && (
                  <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-white text-sm font-medium">
                    <Github className="w-4 h-4" /> View Code
                  </a>
                )}
                {selectedProject.links?.demo && (
                  <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors text-white text-sm font-medium shadow-lg shadow-primary/25">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
