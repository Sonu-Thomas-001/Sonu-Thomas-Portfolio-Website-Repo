
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, HandHeart } from 'lucide-react';
import { VOLUNTEERING_DATA } from '../constants';

export const VolunteeringPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pink-400 text-sm font-medium mb-4">
            <HandHeart className="w-4 h-4" />
            <span>Community</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Volunteering & <br/>
          <span className="text-pink-400">Impact</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
           Contributing to the community through mentorship, event organization, and sharing technical knowledge.
        </p>
      </div>

      <section className="pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-6">
                {VOLUNTEERING_DATA.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="p-4 rounded-xl bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform self-start">
                                <Users className="w-6 h-6" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                    <span className="text-sm text-slate-500 font-mono">{item.period}</span>
                                </div>
                                <div className="text-lg text-pink-400 font-medium mb-4">{item.organization}</div>
                                <p className="text-slate-400 leading-relaxed">
                                    {item.description}
                                </p>
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
