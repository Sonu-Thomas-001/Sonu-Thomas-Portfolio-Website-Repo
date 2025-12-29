
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Calendar, Trophy } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants';

export const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            <span>Achievements</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Licenses & <br/>
          <span className="text-secondary">Certifications</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
           A comprehensive record of my commitment to continuous learning, industry-standard qualifications, and technical milestones.
        </p>
      </div>
      
      <section className="pb-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-surface/50 border border-white/5 rounded-xl p-6 md:p-8 hover:border-secondary/30 hover:bg-surface hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center group"
                >
                   <div className="shrink-0">
                       <div className="w-16 h-16 rounded-full bg-dark border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <BadgeCheck className="w-8 h-8 text-secondary" />
                       </div>
                   </div>
                   
                   <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                             <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                                {cert.title}
                             </h3>
                             <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded border border-white/5 whitespace-nowrap flex items-center gap-2">
                                <Calendar className="w-3 h-3" />
                                {cert.date}
                             </span>
                        </div>
                        <div className="flex items-center gap-2 text-base text-slate-400">
                           <Award className="w-4 h-4 text-slate-500" />
                           Issued by <span className="text-white font-medium">{cert.issuer}</span>
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
