
import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Star, Crown } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {AWARDS_DATA.map((award, idx) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-surface/50 border border-white/5 rounded-2xl p-8 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-400/5 transition-all duration-300 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Medal className="w-12 h-12 text-amber-400" />
                        </div>
                        
                        <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                            <Star className="w-6 h-6 fill-current" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                            {award.title}
                        </h3>
                        
                        <div className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">
                            {award.event}
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed">
                            {award.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};
