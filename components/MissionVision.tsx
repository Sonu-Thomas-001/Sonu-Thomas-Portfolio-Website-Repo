import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, Rocket, Compass, ScanFace, Radar } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Tech Background - Rotating Radar & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20">
         <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
         <div className="absolute inset-10 rounded-full border border-dashed border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
         <div className="absolute inset-32 rounded-full border border-white/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_10px_rgba(14,165,233,0.2)]">
            <Radar className="w-3 h-3 animate-pulse" />
            <span>System Directives</span>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="relative max-w-5xl mx-auto text-center mb-24 bg-surface/30 backdrop-blur-sm border-y border-white/5 py-12"
        >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight px-4">
              To engineer <span className="text-primary font-normal relative inline-block">
                resilient systems
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary/50"></span>
              </span> that bridge the gap between human creativity and <span className="text-secondary font-normal">automated intelligence</span>.
            </h2>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 font-mono text-xs uppercase tracking-[0.2em]">
              <ScanFace className="w-4 h-4" />
              <span>Identity: Mission Protocol</span>
            </div>
        </motion.div>

        {/* Vision & Values Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Vision Card */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-dark/50 border border-white/10 rounded-sm p-8 md:p-12 relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
                {/* Holographic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-dark rounded-none border border-primary/30 flex items-center justify-center mb-8 text-primary shadow-[0_0_15px_rgba(14,165,233,0.15)] group-hover:scale-110 transition-transform duration-500">
                        <Rocket className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        The Vision
                        <span className="w-12 h-px bg-primary/50"></span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                        I envision a future where <span className="text-white font-medium">AI and enterprise ecosystems</span> converge to eliminate operational friction. 
                        My goal is to build <span className="text-primary/80">self-healing</span>, data-driven architectures that allow organizations to shift focus from <span className="italic">maintenance</span> to <span className="italic">pure innovation</span>.
                    </p>
                </div>
                
                {/* Tech Corner Accent */}
                <div className="absolute bottom-0 right-0 p-4 opacity-30">
                     <div className="flex gap-1">
                         <div className="w-1 h-1 bg-primary"></div>
                         <div className="w-1 h-1 bg-primary"></div>
                         <div className="w-1 h-1 bg-primary"></div>
                     </div>
                </div>
            </motion.div>

            {/* Core Values List */}
            <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col justify-center space-y-4"
            >
                {[
                    { title: "Operational Integrity", icon: ShieldCheck, desc: "Stability is the bedrock of innovation. Systems must be reliable before they can be revolutionary.", color: "text-primary", border: "group-hover:border-primary/50" },
                    { title: "Continuous Evolution", icon: Lightbulb, desc: "Staying ahead of the curve through advanced AI studies to solve tomorrow's problems.", color: "text-secondary", border: "group-hover:border-secondary/50" },
                    { title: "Precision & Impact", icon: Target, desc: "Every configuration change is executed with precision for measurable business efficiency.", color: "text-emerald-400", border: "group-hover:border-emerald-400/50" }
                ].map((item, idx) => (
                    <div key={idx} className={`group p-6 rounded-sm bg-white/[0.02] border border-white/5 ${item.border} hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden`}>
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        <div className="flex gap-5">
                            <div className="shrink-0">
                                <div className={`w-12 h-12 rounded-sm bg-dark flex items-center justify-center border border-white/10 ${item.color} group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h4 className={`text-lg font-bold text-white mb-2 group-hover:${item.color.split(' ')[0]} transition-colors`}>{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
};