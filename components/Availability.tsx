import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

export const Availability: React.FC = () => {
  return (
    <section className="py-20 bg-dark relative">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-surface to-dark pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary/10 via-surface to-secondary/10 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/5"
            >
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-wide mb-6">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Available for Work
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Ready to Build Something <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Extraordinary?</span>
                </h2>

                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    I am currently open to <span className="text-white font-medium">freelance projects</span> and <span className="text-white font-medium">consulting opportunities</span>. 
                    Whether you need a complex web platform, AI integration, or enterprise-grade system optimization, let's discuss how I can add value to your team.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
                    >
                        Let's Talk
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                        href={PERSONAL_DETAILS.resumeLink}
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                    >
                        <Download className="w-5 h-5" />
                        Download CV
                    </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>

            </motion.div>
        </div>
    </section>
  );
};