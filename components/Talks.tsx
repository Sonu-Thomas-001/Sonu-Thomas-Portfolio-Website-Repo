import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Presentation, Calendar, Video, FileText, ArrowRight } from 'lucide-react';
import { TALKS_DATA } from '../constants';

export const Talks: React.FC = () => {
  return (
    <section className="py-24 bg-surface/30 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-4">
            <Mic2 className="w-4 h-4" />
            <span>Public Speaking</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Talks & Presentations</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Sharing knowledge and experiences in engineering, AI, and career growth with the tech community.
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
              className="group flex flex-col md:flex-row gap-6 bg-dark border border-white/5 rounded-2xl p-6 md:p-8 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
            >
              {/* Left Column: Date & Type */}
              <div className="flex md:flex-col items-center md:items-start justify-between md:justify-center gap-4 md:w-48 shrink-0 md:border-r border-white/5 md:pr-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {talk.date}
                </div>
                <span className={`
                    px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border
                    ${talk.type === 'Keynote' ? 'bg-primary/10 text-primary border-primary/20' : 
                      talk.type === 'Workshop' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 
                      'bg-purple-500/10 text-purple-400 border-purple-500/20'}
                `}>
                    {talk.type}
                </span>
              </div>

              {/* Middle Column: Content */}
              <div className="flex-grow space-y-2">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                        {talk.title}
                    </h3>
                    <div className="md:hidden">
                        {/* Mobile Action Placeholder if needed */}
                    </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <Presentation className="w-4 h-4" />
                    {talk.event}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl pt-2">
                    {talk.description}
                </p>
              </div>

              {/* Right Column: Actions */}
              <div className="md:w-48 shrink-0 flex md:flex-col items-center md:items-end justify-start gap-3 pt-4 md:pt-0 md:border-l border-white/5 md:pl-6">
                <a 
                    href={talk.link} 
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-secondary transition-colors group/link"
                >
                    <FileText className="w-4 h-4" />
                    View Slides
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" />
                </a>
                 <span className="text-slate-600 hidden md:inline">•</span>
                 <a 
                    href={talk.link} 
                    className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                    <Video className="w-4 h-4" />
                    Watch
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};