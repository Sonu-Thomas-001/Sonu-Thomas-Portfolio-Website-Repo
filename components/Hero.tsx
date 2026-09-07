import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Sparkles, BrainCircuit, Cpu, Database, Server, GitBranch, Terminal, ShieldCheck, Zap, Layers, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

const ROLES = [
  "AI Software Engineer",
  "LLM & Intelligent Systems Architect",
  "Production Change Manager",
  "Enterprise Full-Stack Developer"
];

const STATS = [
  { value: "3+", label: "Years Experience", sublabel: "Enterprise & Freelance" },
  { value: "15+", label: "Deployed Systems", sublabel: "AI, Web & Automation" },
  { value: "HCLTech", label: "Current Role", sublabel: "Software Engineering" },
  { value: "IIT-G", label: "Academic Roots", sublabel: "Data Science & AI" },
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const textY = useTransform(scrollY, [0, 800], [0, -60]);
  const cardY = useTransform(scrollY, [0, 800], [0, -120]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0.2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-page pt-28 pb-16 lg:pt-36 lg:pb-20"
    >
      {/* Dynamic Background Atmosphere */}
      <motion.div 
        style={{ y: bgY, opacity: opacityFade }} 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-[-10%] left-[15%] w-[45vw] h-[45vw] bg-primary/10 rounded-full blur-[140px] animate-blob" />
        <div className="absolute top-[25%] right-[-5%] w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[130px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[30%] w-[35vw] h-[35vw] bg-sky-200/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />

        {/* AI Grid Texture */}
        <div className="absolute inset-0 bg-ai-grid opacity-60" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Copy Left, Visual Showcase Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols) */}
          <motion.div 
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8"
          >
            
            {/* Availability Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-soft-sm text-xs font-semibold text-slate-700"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for High-Impact AI & Engineering Projects</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
                Architecting <br />
                <span className="gradient-text">Intelligent Systems</span> <br />
                That Scale.
              </h1>

              {/* Dynamic Role Rotator */}
              <div className="flex items-center gap-2 pt-1">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">Focus //</span>
                <div className="h-8 overflow-hidden flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-sm sm:text-base font-semibold text-primary"
                    >
                      {ROLES[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              I am an AI Software Engineer at <span className="font-semibold text-slate-900">HCLTech</span>. 
              I design and deploy production-grade software by fusing robust enterprise architectures with modern generative AI, 
              LLM pipelines, and disciplined change control.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-600 shadow-soft-md hover:shadow-glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_DETAILS.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:text-primary hover:border-primary/40 hover:bg-slate-50 shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column (5 cols): Interactive AI System Showcase */}
          <motion.div 
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            
            {/* Visual AI Canvas Card */}
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-soft-lg p-6 sm:p-8 space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary flex items-center justify-center border border-primary/20">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm">Autonomous Intelligence Pipeline</h3>
                    <p className="text-[11px] font-mono text-slate-400">Enterprise AI Architecture</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Pipeline Nodes Flow */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Step 1: Input & Intent */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between group hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-slate-700 font-medium">Input Prompt & Context Matrix</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Vector Embeddings</span>
                </div>

                {/* Connecting Line */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-gradient-to-b from-slate-300 to-primary" />
                </div>

                {/* Step 2: LLM Reasoning Core */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-primary-50 to-indigo-50 border border-primary/30 flex items-center justify-between shadow-soft-sm">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-slate-900 font-bold">Neural Reasoning & LLM Core</span>
                  </div>
                  <span className="text-[10px] text-primary font-bold">Inference</span>
                </div>

                {/* Connecting Line */}
                <div className="flex justify-center">
                  <div className="w-px h-4 bg-gradient-to-b from-primary to-slate-300" />
                </div>

                {/* Step 3: Production System Integration */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between group hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-indigo-600" />
                    <span className="text-slate-700 font-medium">Enterprise Database & Tool Execution</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Oracle & APIs</span>
                </div>
              </div>

              {/* System Capabilities Pills */}
              <div className="pt-2 flex flex-wrap gap-2 border-t border-slate-100">
                {['Multi-Agent Orchestration', 'RAG Architectures', 'Risk Governance', 'Production CI/CD'].map((cap) => (
                  <span 
                    key={cap}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200/60"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* Metric Callout */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400 font-mono">CHANGE & STABILITY METRIC</p>
                  <p className="font-display font-bold text-lg text-white">Zero-Defect Production Delivery</p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Subtle floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-soft-lg flex items-center gap-2.5 text-xs font-semibold text-slate-800"
            >
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Optimized for Latency & Accuracy</span>
            </motion.div>

          </motion.div>

        </div>

        {/* Integrated Stats Bar at Bottom of Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="font-semibold text-sm text-slate-800">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-primary transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};
