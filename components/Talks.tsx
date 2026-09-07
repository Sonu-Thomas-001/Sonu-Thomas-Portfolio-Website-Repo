import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Presentation, Calendar, Video, FileText, ArrowRight } from 'lucide-react';
import { TALKS_DATA } from '../constants';

export const Talks: React.FC = () => {
  return (
    <section className="py-24 bg-page relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Mic2 className="w-3.5 h-3.5" />
            <span>Public Speaking</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">Talks & Presentations</h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Sharing practical engineering experience, AI systems architecture, and career learnings with the tech community.
          </p>
        </motion.div>

        <div className="space-y-6">
          {TALKS_DATA.map((talk, idx) => (
            <motion.div
              key={talk.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-primary/40 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 items-start"
            >
              {/* Left Column: Date & Type */}
              <div className="flex md:flex-col items-center md:items-start justify-between md:justify-center gap-3 md:w-44 shrink-0 md:border-r border-slate-100 md:pr-6">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{talk.date}</span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-slate-100 text-slate-700">
                  {talk.type}
                </span>
              </div>

              {/* Middle Column: Content */}
              <div className="flex-grow space-y-2">
                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-primary transition-colors">
                  {talk.title}
                </h3>
                <div className="text-xs font-mono font-medium text-primary flex items-center gap-1.5">
                  <Presentation className="w-3.5 h-3.5" />
                  <span>{talk.event}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pt-1">
                  {talk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};