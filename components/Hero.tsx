import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Globe, ChevronDown, Terminal, Cpu, Database, Server, Code2, BrainCircuit, Instagram, Facebook, MessageCircle, Send, Activity, Layers, Zap, GitBranch, ScanFace } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

const ROLES = [
  "Software Engineer",
  "AI & Data Science Enthusiast",
  "Web Developer",
  "Production Change Manager"
];

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return <span ref={nodeRef}>{from}</span>;
};

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const imgSrc = 'https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Sonu-Thomas-Portfolio-Website-Repo/ProfilePic.jpg';

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-32 pb-24 lg:pt-32 lg:pb-24">
      {/* Dynamic Background Mesh & Tech Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[20%] w-full animate-[scan_5s_linear_infinite] opacity-30 pointer-events-none"></div>
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
                 System Online • Available for Work
              </motion.div>

              {/* Headline & Profile Photo */}
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
                    Sonu <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Thomas</span>
                  </h1>
                  
                  {/* Profile Photo with Fallback */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -20, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                    className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0"
                  >
                     {/* Glow behind the photo */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                     
                     <div className="relative w-full h-full rounded-2xl border-2 border-white/20 overflow-hidden shadow-2xl bg-dark/50 group/photo cursor-pointer">
                        {!imgError ? (
                            <img 
                              src={imgSrc} 
                              alt="Sonu Thomas"
                              className="w-full h-full object-cover opacity-90 group-hover/photo:opacity-100 group-hover/photo:scale-110 transition-all duration-500 relative z-0"
                              onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 relative z-0">
                                <span className="text-2xl font-bold text-slate-600 group-hover/photo:text-primary transition-colors">ST</span>
                            </div>
                        )}
                         
                         {/* Tech Overlay on Photo */}
                         <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none z-10"></div>
                         <div className="absolute bottom-1 right-1 z-20">
                             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                         </div>
                     </div>
                  </motion.div>
                </div>
                
                <div className="min-h-[2.5rem] md:min-h-[3rem] h-auto overflow-hidden flex items-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-mono text-primary flex flex-wrap items-center gap-2">
                    <span className="text-secondary/70">{'>'}</span>
                    <AnimatePresence mode='wait'>
                        <motion.span
                        key={roleIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        >
                        {ROLES[roleIndex]}
                        </motion.span>
                    </AnimatePresence>
                    <span className="w-2 h-5 bg-primary/50 animate-pulse ml-1"></span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-400 leading-relaxed max-w-lg"
              >
                I engineer resilient enterprise systems and scalable web solutions, bridging the gap between <span className="text-white font-medium">traditional software development</span> and the future of <span className="text-primary font-medium">Artificial Intelligence</span>.
              </motion.p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link 
                  to="/projects"
                  className="group relative px-8 py-4 rounded-xl bg-white text-dark font-bold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </Link>
                
                <a 
                  href={PERSONAL_DETAILS.resumeLink}
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 mt-2">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white tabular-nums flex items-center">
                    <Counter from={0} to={2} /><span className="text-primary">+</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 leading-tight flex items-center gap-1">
                     <Building2 className="w-3 h-3" /> HCLTech Exp
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white tabular-nums flex items-center">
                    <Counter from={0} to={3} /><span className="text-secondary">+</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 leading-tight flex items-center gap-1">
                    <Code2 className="w-3 h-3" /> Freelance Yrs
                  </div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white flex items-center">
                    IIT G
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 leading-tight flex items-center gap-1">
                    <BrainCircuit className="w-3 h-3" /> AI & Data Science
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-6 flex gap-6 flex-wrap">
                {[
                    { icon: Linkedin, href: PERSONAL_DETAILS.social.linkedin },
                    { icon: Github, href: PERSONAL_DETAILS.social.github },
                    { icon: Instagram, href: PERSONAL_DETAILS.social.instagram },
                    { icon: MessageCircle, href: PERSONAL_DETAILS.social.whatsapp },
                    { icon: Send, href: `mailto:${PERSONAL_DETAILS.email}` },
                    { icon: Globe, href: PERSONAL_DETAILS.social.website }
                ].map((social, idx) => (
                    <a 
                        key={idx}
                        href={social.href}
                        target={social.href.startsWith('http') ? "_blank" : undefined}
                        rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
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
            <div className="relative w-[550px] h-[550px]">
                {/* Center Core - Forced Dark Mode for Tech Aesthetic */}
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
                    className="absolute inset-0 m-auto w-64 h-80 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20"
                >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <Terminal className="w-10 h-10 text-white relative z-10" />
                    </div>
                    <div className="text-center">
                        <div className="text-xs font-mono text-primary mb-1">System Architecture</div>
                        <div className="text-xl font-bold text-cleanWhite">Full Stack</div>
                    </div>
                    
                    {/* Decor lines */}
                    <div className="absolute -right-4 top-10 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center z-30 shadow-xl animate-bounce">
                        <Code2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="absolute -left-4 bottom-20 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center z-30 shadow-xl animate-bounce delay-150">
                        <Database className="w-4 h-4 text-blue-400" />
                    </div>
                </motion.div>

                {/* Floating Card Back Left (AI Models) */}
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
                    className="absolute top-10 left-0 w-48 h-56 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-xl z-10 flex flex-col items-center justify-center p-4 hover:border-purple-500/30 transition-colors"
                >
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                        <BrainCircuit className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="font-bold text-cleanWhite mb-1">AI Models</div>
                    <div className="text-xs text-gray-300 text-center">Predictive analytics & automation logic</div>
                </motion.div>

                 {/* Floating Card Bottom Right (Infrastructure) */}
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
                    className="absolute bottom-20 right-0 w-48 h-56 bg-slate-900/60 backdrop-blur-sm border border-white/5 rounded-xl z-30 flex flex-col items-center justify-center p-4 shadow-xl hover:border-emerald-500/30 transition-colors"
                >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                        <Server className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="font-bold text-cleanWhite mb-1">Infrastructure</div>
                    <div className="text-xs text-gray-300 text-center">Scalable cloud solutions & DevOps</div>
                </motion.div>

                {/* Floating Code Snippet (Top Right) - Forced Dark Mode */}
                <motion.div
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-6 right-8 w-44 p-3 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl z-20 shadow-2xl"
                >
                    <div className="flex gap-1.5 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-3/4 bg-slate-700/50 rounded-full"></div>
                        <div className="h-1.5 w-1/2 bg-slate-700/50 rounded-full"></div>
                        <div className="h-1.5 w-full bg-slate-700/50 rounded-full"></div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-2">
                        <GitBranch className="w-3 h-3 text-primary" />
                        <div className="text-[9px] font-mono text-gray-400">
                             feat: ai-integration
                        </div>
                    </div>
                </motion.div>

                {/* Activity Badge (Left Center/Bottom) */}
                <motion.div
                    animate={{ x: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-32 -left-12 bg-surface/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-20 flex items-center gap-2 shadow-xl hover:border-primary/50 transition-colors"
                >
                    <div className="relative">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
                    </div>
                    <div className="flex flex-col">
                         <span className="text-[9px] text-slate-500 leading-none uppercase tracking-wide">Status</span>
                         <span className="text-xs font-bold text-white leading-none">System Optimal</span>
                    </div>
                </motion.div>

                {/* Tech Stack Node (Right Center) */}
                <motion.div
                   animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                   className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center z-10 shadow-lg"
                >
                    <Layers className="w-6 h-6 text-indigo-400" />
                </motion.div>
                
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                    <circle cx="50%" cy="50%" r="220" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="10 10" className="animate-spin-reverse-slow" />
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

      {/* Import additional icon for Stats if needed */}
      <div className="hidden">
        <Building2 className="w-0 h-0" />
      </div>
    </section>
  );
};

// Simple Icon fallback
const Building2 = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
        <path d="M10 6h4"/>
        <path d="M10 10h4"/>
        <path d="M10 14h4"/>
        <path d="M10 18h4"/>
    </svg>
);
