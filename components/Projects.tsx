import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Code, Layers, Sparkles, TerminalSquare, Cpu, Monitor, Box, Info, X, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { ProjectItem } from '../types';
import Markdown from 'react-markdown';

export const Projects: React.FC<{ isHomepage?: boolean }> = ({ isHomepage = false }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const categories = ['All', 'Generative AI', 'AI Tools', 'Web Apps'];

  const displayedList = isHomepage ? PROJECTS_DATA.slice(0, 6) : PROJECTS_DATA;
  const filteredProjects = filter === 'All' 
    ? displayedList 
    : displayedList.filter(project => project.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Web Apps': return <Monitor className="w-3.5 h-3.5 text-violet-600" />;
      case 'Generative AI': return <Sparkles className="w-3.5 h-3.5 text-primary" />;
      case 'AI Tools': return <Cpu className="w-3.5 h-3.5 text-indigo-600" />;
      default: return <Box className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  return (
    <section ref={containerRef} id="projects" className="py-24 lg:py-32 bg-page relative overflow-hidden">
      
      <motion.div style={{ y: cardsY }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Featured Works & AI Projects
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Open-source contributions, autonomous AI agent workflows, and scalable full-stack applications.
            </p>
          </motion.div>

          {/* Filter Pills */}
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
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-soft-sm shadow-primary/30 scale-105' 
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:border-primary/40 hover:text-slate-900 shadow-soft-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-soft-md hover:shadow-soft-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Project Image Box */}
                <div className="relative h-52 overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-800 text-xs font-mono font-semibold shadow-soft-sm">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Hover Quick Action Buttons Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 z-20">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white rounded-xl text-slate-800 hover:text-primary hover:bg-primary-50 shadow-soft-md transition-all transform translate-y-2 group-hover:translate-y-0"
                      title="View Details"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                    {project.links?.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-xl text-slate-800 hover:text-primary hover:bg-primary-50 shadow-soft-md transition-all transform translate-y-2 group-hover:translate-y-0 delay-75"
                        title="Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links?.demo && project.links.demo !== '#' && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-xl text-slate-800 hover:text-primary hover:bg-primary-50 shadow-soft-md transition-all transform translate-y-2 group-hover:translate-y-0 delay-100"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Copy */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 font-medium">
                        {project.role}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-5 border-t border-slate-100 mt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-[11px] font-mono font-medium text-slate-600 bg-slate-50 rounded-lg border border-slate-200/70"
                        >
                          {tech}
                        </span>
                      ))}
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
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative shadow-soft-lg"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-100">
                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-900">{selectedProject.title}</h3>
                  <p className="text-xs font-mono text-primary font-semibold mt-0.5">{selectedProject.category} • {selectedProject.role}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-600 text-sm leading-relaxed">
                {selectedProject.detailedDescription ? (
                  <div className="prose prose-slate max-w-none">
                    <Markdown>{selectedProject.detailedDescription}</Markdown>
                  </div>
                ) : (
                  <p>{selectedProject.description}</p>
                )}

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono font-medium rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-100 flex gap-3 bg-slate-50/80 justify-end">
                {selectedProject.links?.github && (
                  <a 
                    href={selectedProject.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold shadow-soft-sm transition-all"
                  >
                    <Github className="w-4 h-4" /> 
                    <span>Source Code</span>
                  </a>
                )}
                {selectedProject.links?.demo && selectedProject.links.demo !== '#' && (
                  <a 
                    href={selectedProject.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-600 text-white text-xs font-semibold shadow-soft-md transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> 
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
