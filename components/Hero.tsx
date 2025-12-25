import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Globe, ChevronDown, Terminal, Cpu, Database, Server, Code2, BrainCircuit } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const ROLES = [
  "Software Engineer",
  "AI & Data Science Enthusiast",
  "Web Developer",
  "Production Change Manager"
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-20 lg:pt-0">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl ring-1 ring-white/5 relative overflow-hidden group">
            
            {/* Glass Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

            <div className="relative z-10 space-y-8">
              {/* Status Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
              >
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                 </span>
                 Available for Work
              </motion.div>

              {/* Headline & Roles */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                  Sonu <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Thomas</span>
                </h1>
                
                <div className="h-8 md:h-10 overflow-hidden flex items-center">
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={roleIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl md:text-2xl font-medium text-primary"
                    >
                      {ROLES[roleIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-400 leading-relaxed max-w-lg"
              >
                I engineer resilient enterprise systems and scalable web solutions, bridging the gap between traditional software development and the future of Artificial Intelligence.
              </motion.p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#projects"
                  className="group relative px-8 py-4 rounded-xl bg-white text-dark font-bold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </a>
                
                <a 
                  href={PERSONAL_DETAILS.resumeLink}
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-white/5 flex gap-6">
                {[
                    { icon: Linkedin, href: "#" },
                    { icon: Github, href: "#" },
                    { icon: Globe, href: "#" }
                ].map((social, idx) => (
                    <a 
                        key={idx}
                        href={social.href}
                        className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Abstract Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden lg:flex items-center justify-center relative perspective-1000 h-full min-h-[500px]"
        >
            {/* Orbiting Elements */}
            <div className="relative w-[500px] h-[500px]">
                {/* Center Core */}
                <motion.div 
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                    className="absolute inset-0 m-auto w-64 h-80 bg-gradient-to-tr from-dark/80 to-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20"
                >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                        <Terminal className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                        <div className="text-xs font-mono text-primary mb-1">System Architecture</div>
                        <div className="text-xl font-bold text-white">Full Stack</div>
                    </div>
                    
                    {/* Decor lines */}
                    <div className="absolute -right-4 top-10 w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center z-30 shadow-xl">
                        <Code2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="absolute -left-4 bottom-20 w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center z-30 shadow-xl">
                        <Database className="w-4 h-4 text-blue-400" />
                    </div>
                </motion.div>

                {/* Floating Card Back Left */}
                <motion.div 
                    animate={{ 
                        y: [0, 30, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{ 
                        duration: 7, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-10 left-0 w-48 h-56 bg-dark/40 backdrop-blur-sm border border-white/5 rounded-xl z-10 flex flex-col items-center justify-center p-4"
                >
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                        <BrainCircuit className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="font-bold text-white mb-1">AI Models</div>
                    <div className="text-xs text-slate-500 text-center">Predictive analytics & automation logic</div>
                </motion.div>

                 {/* Floating Card Bottom Right */}
                 <motion.div 
                    animate={{ 
                        y: [0, -25, 0],
                        x: [0, -10, 0]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-20 right-0 w-48 h-56 bg-dark/40 backdrop-blur-sm border border-white/5 rounded-xl z-30 flex flex-col items-center justify-center p-4 shadow-xl"
                >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                        <Server className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="font-bold text-white mb-1">Infrastructure</div>
                    <div className="text-xs text-slate-500 text-center">Scalable cloud solutions & DevOps</div>
                </motion.div>
                
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-600">Scroll</span>
        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }}
        >
            <ChevronDown className="w-5 h-5 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};