import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';
import { ProjectItem } from '../types';
import Markdown from 'react-markdown';

// Card with Inner Window Image Parallax
const ProjectCard: React.FC<{
  project: ProjectItem;
  idx: number;
  isFeatured: boolean;
  onSelect: (p: ProjectItem) => void;
}> = ({ project, idx, isFeatured, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Inner image translates vertically as user scrolls past
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      whileHover={{ y: -6 }}
      className={`group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-primary/40 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between ${
        isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Project Media Container with Inner Parallax */}
      <div
        onClick={() => onSelect(project)}
        className={`relative overflow-hidden bg-slate-100 cursor-pointer ${
          isFeatured ? 'h-72 sm:h-88' : 'h-56'
        }`}
      >
        <motion.img
          style={{ y: imageY, scale: 1.16 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-120"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-slate-900 shadow-soft-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
            View Project Case
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-medium text-slate-700 shadow-soft-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-7 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <h3
              onClick={() => onSelect(project)}
              className="font-display font-semibold text-xl sm:text-2xl text-slate-900 group-hover:text-primary transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <span className="text-xs font-mono text-slate-400 whitespace-nowrap">
              {project.role}
            </span>
          </div>

          <p className="text-sm text-slate-600 font-light leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech stack chips & action links */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 text-[11px] font-mono text-slate-600"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[11px] font-mono text-slate-400 self-center">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-slate-500 shrink-0">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-slate-900 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.links?.demo && project.links.demo !== '#' && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC<{ isHomepage?: boolean }> = ({ isHomepage = false }) => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const categories = ['All', 'Generative AI', 'AI Tools', 'Web Apps'];

  const displayedList = isHomepage ? PROJECTS_DATA.slice(0, 6) : PROJECTS_DATA;
  const filteredProjects = filter === 'All'
    ? displayedList
    : displayedList.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-200/80">
      
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-8">
        <div>
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-1">
            05 // Selected Works
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Production systems, AI agents &amp; tools.
          </h2>
        </div>

        {/* Minimal Text-Based Filter */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-mono">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative py-1 transition-colors cursor-pointer ${
                  isActive ? 'text-slate-900 font-semibold' : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Masonry Grid with Inner Image Parallax */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && filter === 'All';
            return (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
                isFeatured={isFeatured}
                onSelect={(p) => setSelectedProject(p)}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* If Homepage, Link to All Projects */}
      {isHomepage && (
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-primary transition-all duration-300 shadow-soft-sm group cursor-pointer"
          >
            <span>View All {PROJECTS_DATA.length} Projects</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      )}

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm"
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
                  <h3 className="font-display font-semibold text-2xl text-slate-900">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-primary font-medium mt-0.5">
                    {selectedProject.category} &bull; {selectedProject.role}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-600 text-sm leading-relaxed font-light">
                {selectedProject.detailedDescription ? (
                  <div className="prose prose-slate max-w-none text-sm font-normal">
                    <Markdown>{selectedProject.detailedDescription}</Markdown>
                  </div>
                ) : (
                  <p>{selectedProject.description}</p>
                )}

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono font-medium rounded-lg"
                      >
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
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-medium shadow-soft-sm transition-all"
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
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-600 text-white text-xs font-medium shadow-soft-sm transition-all"
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
