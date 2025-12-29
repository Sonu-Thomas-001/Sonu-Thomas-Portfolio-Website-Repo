import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Globe, ArrowUpRight, Binary, MapPin, Radio, Terminal, Activity, Zap, BarChart3, ChevronRight } from 'lucide-react';
import { ABOUT_STORY, PERSONAL_DETAILS } from '../constants';

export const About: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className="py-32 bg-surface relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary/5 to-transparent -skew-x-12 pointer-events-none" />
      <div className="absolute top-10 left-10 text-primary/5">
        <Binary className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column: Logic Blocks Narrative */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-px w-8 bg-primary"></div>
                 <span className="text-primary font-medium tracking-wider uppercase text-sm">Profile Configuration</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Engineering Scalable Solutions & <br />
                <span className="text-slate-500">Intelligent Systems.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
                {ABOUT_STORY.map((story) => (
                    <div key={story.id} className="relative pl-8 group">
                        {/* Connecting Line */}
                        <div className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-white/5 group-last:bg-transparent"></div>
                        {/* Dot */}
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-slate-700 border border-slate-600 group-hover:bg-primary group-hover:border-primary transition-colors"></div>
                        
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">{story.id}</span>
                                <h4 className="text-white font-bold text-sm tracking-wide">{story.title}</h4>
                            </div>
                            <p className="text-slate-400 text-base leading-relaxed">
                                {story.content}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Location & Status Footer */}
            <motion.div variants={fadeInUp} className="pt-6 border-t border-white/5 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{PERSONAL_DETAILS.location}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
                    <span className="text-emerald-400">Open to Global Opportunities</span>
                </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Cards & Focus Areas - Sticky Container */}
          <motion.div 
            variants={fadeInUp} 
            className="relative mt-8 lg:mt-0 lg:sticky lg:top-24 z-30 space-y-6"
          >
             {/* Floating Chip Overlay (Decor) */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-4 -top-6 w-16 h-16 bg-dark border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-50 ring-1 ring-white/20 hidden lg:flex"
            >
                <Cpu className="w-8 h-8 text-primary" />
            </motion.div>

             {/* Card 1: Core Focus */}
            <div className="relative z-10 bg-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-50"></div>
                
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary" />
                        Core Focus
                    </h3>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse delay-150"></div>
                    </div>
                </div>
                
                <div className="space-y-6">
                    {/* Focus Item 1 */}
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default relative overflow-hidden border border-transparent hover:border-white/5">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium">Web Engineering</h4>
                                <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Full-stack development using React, Modern JS, and WordPress.</p>
                        </div>
                    </div>
                     {/* Focus Item 2 */}
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default relative overflow-hidden border border-transparent hover:border-white/5">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium">AI & Data Science</h4>
                                <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Exploring Machine Learning algorithms and intelligent automation.</p>
                        </div>
                    </div>
                     {/* Focus Item 3 */}
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default relative overflow-hidden border border-transparent hover:border-white/5">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                             <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium">Enterprise Mgmt</h4>
                                <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Production change management and risk mitigation.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: System Status */}
            <div className="relative z-10 bg-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/5 rounded-lg">
                        <Activity className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Operational Metrics</h3>
                 </div>

                 <div className="space-y-5">
                    {/* Metric 1 */}
                    <div>
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-slate-400 flex items-center gap-1"><Zap className="w-3 h-3" /> System Uptime</span>
                            <span className="text-emerald-400 font-mono">99.9%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "99.9%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300" 
                            />
                        </div>
                    </div>

                    {/* Metric 2 */}
                     <div>
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-slate-400 flex items-center gap-1"><BarChart3 className="w-3 h-3" /> Learning Rate</span>
                            <span className="text-secondary font-mono">Exponential</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "85%" }}
                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-secondary to-purple-500" 
                            />
                        </div>
                    </div>

                     {/* Metric 3 */}
                     <div>
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-slate-400 flex items-center gap-1"><Cpu className="w-3 h-3" /> Compute Efficiency</span>
                            <span className="text-primary font-mono">High</span>
                        </div>
                        <div className="flex gap-1">
                            {[1,2,3,4,5,6,7,8].map((i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0.2 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`h-1.5 flex-1 rounded-full ${i > 6 ? 'bg-slate-700' : 'bg-primary'}`}
                                />
                            ))}
                        </div>
                    </div>
                 </div>
            </div>

            {/* Card 3: Active Processes (Terminal Style) */}
            <div className="relative z-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-0 overflow-hidden shadow-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs font-mono text-slate-400">system_logs.sh</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600/50"></div>
                    </div>
                </div>
                
                {/* Terminal Body */}
                <div className="p-4 font-mono text-xs space-y-2.5 h-[180px] overflow-hidden relative">
                    {/* Gradient Fade at bottom */}
                     <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10"></div>

                    <div className="flex gap-2 opacity-80">
                        <span className="text-emerald-500">➜</span>
                        <span className="text-slate-300">init workspace --mode=enterprise</span>
                    </div>
                    <div className="flex gap-2 text-slate-500 opacity-60">
                        <span>[INFO]</span>
                        <span>Loading HCLTech modules... Done (0.4s)</span>
                    </div>
                    <div className="flex gap-2 text-slate-500 opacity-60">
                        <span>[INFO]</span>
                        <span>Connecting to Freelance Network... Connected</span>
                    </div>
                    <div className="flex gap-2 opacity-80">
                        <span className="text-emerald-500">➜</span>
                        <span className="text-slate-300">run ai_model --optimization=true</span>
                    </div>
                    <div className="flex gap-2 text-blue-400">
                        <span>[PROC]</span>
                        <span className="animate-pulse">Training neural weights...</span>
                    </div>
                    <div className="flex gap-2 text-slate-500 opacity-60">
                        <span>[INFO]</span>
                        <span>Fetching latest commits...</span>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000" />
            <div className="absolute inset-0 border border-white/5 rounded-2xl translate-x-4 translate-y-4 -z-10" />
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};