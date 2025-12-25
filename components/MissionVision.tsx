import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, Rocket, Compass } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Subtle Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-widest uppercase mb-6">
            <Compass className="w-3 h-3 text-primary" />
            <span>Philosophy & Direction</span>
          </div>
        </motion.div>

        {/* Mission Statement - Quote Style */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="relative max-w-5xl mx-auto text-center mb-24"
        >
            {/* Decorative Quote Marks */}
            <span className="absolute -top-12 left-0 md:-left-12 text-8xl text-white/5 font-serif font-bold pointer-events-none">"</span>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              To engineer <span className="text-primary font-normal">resilient systems</span> that bridge the gap between human creativity and <span className="text-secondary font-normal">automated intelligence</span>.
            </h2>
            
            <span className="absolute -bottom-16 right-0 md:-right-12 text-8xl text-white/5 font-serif font-bold pointer-events-none transform rotate-180">"</span>
            
            <div className="mt-8 text-slate-400 font-medium tracking-wide uppercase text-sm">
              — My Mission
            </div>
        </motion.div>

        {/* Vision & Values Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Vision Card */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-dark rounded-2xl flex items-center justify-center border border-white/10 mb-8 text-primary shadow-lg shadow-primary/10">
                        <Rocket className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6">The Vision</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I envision a future where <span className="text-white">AI and enterprise ecosystems</span> converge to eliminate operational friction. 
                        My goal is to build self-healing, data-driven architectures that allow organizations to shift focus from <span className="italic">maintenance</span> to <span className="italic">pure innovation</span>.
                    </p>
                </div>
            </motion.div>

            {/* Core Values List */}
            <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col justify-center space-y-6"
            >
                {/* Value 1: Integrity (PCM background) */}
                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                     <div className="flex gap-5">
                         <div className="shrink-0">
                            <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:text-primary transition-colors text-slate-400">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Operational Integrity</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">
                                 Rooted in Production Change Management, I believe stability is the bedrock of innovation. Systems must be reliable before they can be revolutionary.
                             </p>
                         </div>
                    </div>
                </div>

                {/* Value 2: Evolution (Student/AI background) */}
                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                     <div className="flex gap-5">
                         <div className="shrink-0">
                            <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/10 group-hover:border-secondary/50 group-hover:text-secondary transition-colors text-slate-400">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">Continuous Evolution</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">
                                 Technology never stands still. Through advanced studies in Data Science & AI, I am committed to staying ahead of the curve to solve tomorrow's problems.
                             </p>
                         </div>
                    </div>
                </div>

                {/* Value 3: Impact */}
                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
                     <div className="flex gap-5">
                         <div className="shrink-0">
                            <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 group-hover:text-emerald-500 transition-colors text-slate-400">
                                <Target className="w-6 h-6" />
                            </div>
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors">Precision & Impact</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">
                                 Every line of code and every configuration change is executed with precision, aiming for measurable impact on business efficiency and user experience.
                             </p>
                         </div>
                    </div>
                </div>

            </motion.div>
        </div>

      </div>
    </section>
  );
};