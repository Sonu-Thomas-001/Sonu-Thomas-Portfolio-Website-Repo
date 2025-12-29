
import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Star, Crown, Calendar, Award } from 'lucide-react';
import { AWARDS_DATA } from '../constants';

export const HonorsAwardsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            <span>Recognition</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Honors & <br/>
          <span className="text-amber-400">Awards</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
           Recognition received for technical excellence, innovation, and performance in various domains.
        </p>
      </div>

      <section className="pb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-8">
                {AWARDS_DATA.map((award, idx) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-surface/50 border border-white/5 rounded-2xl p-8 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-400/5 transition-all duration-300 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Medal className="w-16 h-16 text-amber-400" />
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                            <div className="shrink-0">
                                <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 border border-amber-400/20 group-hover:scale-110 transition-transform">
                                    <Star className="w-8 h-8 fill-current" />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                            {award.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <Award className="w-4 h-4 text-amber-400" />
                                                <span>Issued by <span className="text-slate-300 font-medium">{award.issuer}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-sm font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded border border-amber-400/20 whitespace-nowrap self-start">
                                        <Calendar className="w-4 h-4" />
                                        {award.date}
                                    </div>
                                </div>

                                <ul className="space-y-2 mt-6 border-t border-white/5 pt-6">
                                    {award.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 opacity-70"></span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
