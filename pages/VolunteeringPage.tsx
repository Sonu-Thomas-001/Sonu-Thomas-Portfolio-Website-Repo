
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, HandHeart, Calendar, CheckCircle2, Award, Zap } from 'lucide-react';
import { VOLUNTEERING_DATA } from '../constants';

export const VolunteeringPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pink-400 text-sm font-medium mb-4">
            <HandHeart className="w-4 h-4" />
            <span>Community & Impact</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Volunteering & <br/>
          <span className="text-pink-400">Leadership</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
           Contributing to the community through mentorship, technical leadership, and driving initiatives that create real-world impact.
        </p>
      </div>

      <section className="pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-8">
                {VOLUNTEERING_DATA.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-surface/30 border border-white/10 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 p-12 bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-colors"></div>

                        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                            {/* Left Column: Role & Meta */}
                            <div className="lg:w-1/3 shrink-0">
                                <div className="p-4 rounded-xl bg-pink-500/10 text-pink-400 w-16 h-16 flex items-center justify-center mb-6 border border-pink-500/20 group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/5">
                                    <Users className="w-8 h-8" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {item.role}
                                </h3>
                                <div className="text-lg font-medium text-pink-400 mb-4">{item.organization}</div>
                                
                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-400 font-mono bg-white/5 px-3 py-1.5 rounded-lg w-fit border border-white/5">
                                        <Calendar className="w-4 h-4 text-slate-500" />
                                        {item.period}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium px-1">
                                        <Zap className="w-4 h-4 text-yellow-400" />
                                        Domain: <span className="text-slate-300">{item.domain}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="px-2.5 py-1 rounded bg-dark border border-white/10 text-xs text-slate-400 hover:text-white hover:border-pink-500/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Description & Impact */}
                            <div className="lg:w-2/3 lg:border-l border-white/5 lg:pl-8">
                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                        Key Contributions
                                    </h4>
                                    <ul className="space-y-3">
                                        {item.description.map((desc, dIdx) => (
                                            <li key={dIdx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                                                <div className="w-1 h-1 rounded-full bg-pink-500 mt-2 shrink-0"></div>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Award className="w-4 h-4 text-pink-400" />
                                        Impact Delivered
                                    </h4>
                                    <div className="grid sm:grid-cols-1 gap-3">
                                        {item.impact.map((imp, iIdx) => (
                                            <div key={iIdx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                                <span className="text-slate-300 text-sm">{imp}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
