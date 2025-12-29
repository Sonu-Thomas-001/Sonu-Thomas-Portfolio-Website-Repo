
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, Hash, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0B1120] relative overflow-hidden border-t border-white/5">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{ 
            backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-[0.2em] uppercase mb-4">
             <Hash className="w-3 h-3" />
             <span>System_Knowledge_Base</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Academic Blueprints</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Technical foundations and theoretical frameworks powering my engineering capabilities.
          </p>
        </motion.div>

        {/* Schematic Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
            {EDUCATION_DATA.map((edu, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative group"
                >
                    {/* Connecting Line (Desktop) */}
                    {idx < EDUCATION_DATA.length - 1 && (
                        <div className="hidden md:block absolute top-12 -right-6 w-12 h-[1px] bg-blue-500/30 z-0">
                            <div className="absolute right-0 -top-1 w-1 h-[9px] bg-blue-500/30"></div>
                        </div>
                    )}

                    {/* The Card - Schematic Plate */}
                    <div className="bg-[#0f172a] relative border border-blue-500/20 p-8 hover:border-blue-400/60 transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                        
                        {/* Technical Corners */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-blue-500/50 group-hover:border-blue-400 transition-colors"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-blue-500/50 group-hover:border-blue-400 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-blue-500/50 group-hover:border-blue-400 transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-blue-500/50 group-hover:border-blue-400 transition-colors"></div>

                        {/* Figure Label */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 bg-[#0f172a] text-[10px] font-mono text-blue-400/70 border border-blue-500/20 uppercase tracking-widest group-hover:text-blue-400 group-hover:border-blue-400/50 transition-all">
                            FIG. 0{idx + 1}
                        </div>

                        {/* Icon Display */}
                        <div className="mb-8 flex justify-center relative">
                             {/* Rotating Ring */}
                             <div className="absolute inset-0 border border-dashed border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-blue-400/40 transition-colors"></div>
                             
                             <div className="w-16 h-16 rounded-full bg-blue-950/30 border border-blue-500/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                                 <GraduationCap className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                             </div>
                        </div>

                        {/* Content */}
                        <div className="text-center space-y-4">
                            <div>
                                <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-blue-200 transition-colors">
                                    {edu.degree}
                                </h3>
                                <div className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-1">
                                    {edu.institution}
                                </div>
                            </div>

                            {/* Divider with Specs */}
                            <div className="flex items-center justify-center gap-2 py-4 border-t border-dashed border-blue-500/20 w-full">
                                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                                    <Calendar className="w-3 h-3" />
                                    <span>{edu.period}</span>
                                </div>
                            </div>

                            {edu.details && (
                                <p className="text-sm text-slate-400 font-light leading-relaxed bg-blue-900/10 p-3 rounded border border-blue-500/10 text-left font-mono text-xs">
                                    <span className="text-blue-500 mr-2">{'>'}</span>
                                    {edu.details}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Mobile Connector */}
                    {idx < EDUCATION_DATA.length - 1 && (
                        <div className="md:hidden absolute left-1/2 -bottom-8 w-[1px] h-8 bg-blue-500/30 -translate-x-1/2"></div>
                    )}
                </motion.div>
            ))}
        </div>
        
        {/* Footer Technical Note */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 text-[10px] font-mono text-blue-500/40 uppercase tracking-[0.2em] border-t border-blue-500/10 pt-4 px-8">
                <span>Status: Verified</span>
                <span>//</span>
                <span>Source: Academic Records</span>
            </div>
        </div>

      </div>
    </section>
  );
};
