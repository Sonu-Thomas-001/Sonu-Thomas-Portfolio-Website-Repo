import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Globe, ArrowUpRight, Binary } from 'lucide-react';

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
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                 <div className="h-px w-8 bg-primary"></div>
                 <span className="text-primary font-medium tracking-wider uppercase text-sm">Who I Am</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Engineering Scalable Solutions & <br />
                <span className="text-slate-500">Future-Ready Systems.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-slate-400 leading-relaxed border-l-2 border-white/5 pl-6 relative">
              <div className="absolute -left-[3px] top-0 h-10 w-[4px] bg-primary rounded-full"></div>
              <p>
                I am a <strong>Software Engineer</strong> at <span className="text-white">HCLTech</span>, currently serving as a <strong>Production Change Manager</strong>. My role involves orchestration of enterprise-scale changes, conducting rigorous risk analysis, and ensuring compliance for mission-critical systems.
              </p>
              <p>
                My journey into technology began early. During my <strong>Plus Two</strong> years, I started as a Junior Web Developer, which evolved into a freelance career spanning over <strong>3+ years</strong>. This foundation taught me how to balance technical code with real-world business requirements.
              </p>
              <p>
                Today, I am bridging the gap between traditional software engineering and the future of technology by pursuing a BSc in <strong>Data Science & AI from IIT Guwahati</strong>. My goal is to build intelligent, automated systems that transform how we work.
              </p>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div variants={fadeInUp} className="relative mt-8 lg:mt-0">
             {/* Main Card */}
            <div className="relative z-10 bg-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-50"></div>
                
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-white">Core Focus</h3>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse delay-150"></div>
                    </div>
                </div>
                
                <div className="space-y-6">
                    {/* Focus Item 1 */}
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default relative overflow-hidden">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium">Web Engineering</h4>
                                <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Full-stack development using React, Modern JS, and WordPress for scalable applications.</p>
                        </div>
                    </div>
                     {/* Focus Item 2 */}
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium">AI & Data Science</h4>
                                <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Exploring Machine Learning algorithms and data analytics to drive intelligent automation.</p>
                        </div>
                    </div>
                     {/* Focus Item 3 */}
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                             <div className="flex items-center gap-2">
                                <h4 className="text-white font-medium">Enterprise Management</h4>
                                <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-sm text-slate-500 mt-1">Production change management, ITIL processes, and risk mitigation in large-scale environments.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000" />
            <div className="absolute inset-0 border border-white/5 rounded-2xl translate-x-4 translate-y-4 -z-10" />
            
            {/* Floating Chip Overlay - Increased z-index to bring to front */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-6 top-1/2 w-16 h-16 bg-dark border border-white/10 rounded-xl flex items-center justify-center shadow-lg z-20"
            >
                <Cpu className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};