import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Cpu, Globe, ArrowUpRight, MapPin, Radio, Terminal, ShieldCheck, Zap, Layers, Sparkles, GraduationCap } from 'lucide-react';
import { ABOUT_STORY, PERSONAL_DETAILS } from '../constants';

export const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["4%", "-6%"]);

  return (
    <section ref={containerRef} id="about" className="py-24 lg:py-32 bg-page relative overflow-hidden">
      
      {/* Subtle Background Art */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Perspective</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Bridging Enterprise Architecture With Applied AI Systems.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            I believe Artificial Intelligence should not merely be treated as prototype experimentation, 
            but as an engineering discipline centered around reliability, scalability, data flow, and quantifiable impact.
          </p>
        </div>

        {/* Two-Column Grid: Left Profile + Story, Right Focus Cards */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Photo & Timeline Narrative */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Bio Card with Photo */}
            <motion.div 
              style={{ y: photoY }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-soft-lg flex flex-col sm:flex-row gap-6 items-center sm:items-start"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-slate-100 shadow-soft-md">
                <img 
                  src="/sonu-thomas-web-developer-kannur.jpg"
                  alt="Sonu Thomas, AI Software Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Sonu-Thomas-Portfolio-Website-Repo/ProfilePic.jpg';
                  }}
                />
                <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl text-slate-900">Sonu Thomas</h3>
                  <p className="text-sm font-semibold text-primary">Software Engineer @ HCLTech</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Passionate about building production-grade digital platforms, intelligent agent workflows, 
                  and resilient full-stack web applications.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-500 justify-center sm:justify-start">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {PERSONAL_DETAILS.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
                    Open to Global AI Roles
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Narrative Story Blocks */}
            <div className="space-y-6 pt-2">
              <h3 className="font-display font-bold text-xl text-slate-900">Career Trajectory & Philosophy</h3>
              
              <div className="space-y-6 border-l-2 border-slate-200 pl-6 ml-3">
                {ABOUT_STORY.map((story) => (
                  <div key={story.id} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-300 group-hover:border-primary group-hover:bg-primary transition-all duration-200" />
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {story.id}
                        </span>
                        <h4 className="font-display font-bold text-base text-slate-900">
                          {story.title}
                        </h4>
                        <span className="hidden sm:inline-block text-[11px] font-mono text-primary font-semibold">
                          // {story.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {story.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Engineering Pillars & Metrics */}
          <motion.div 
            style={{ y: cardsY }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Pillar 1: Enterprise Reliability */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-md hover:border-primary/40 transition-all group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200/60 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900">Enterprise Reliability</h4>
                  <p className="text-xs font-mono text-slate-400">Production Stability</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hands-on experience in large-scale enterprise environments managing software change lifecycles, 
                minimizing operational downtime, and ensuring ISO/ITIL-compliant rollouts.
              </p>
            </div>

            {/* Pillar 2: Applied AI & LLM Systems */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-md hover:border-primary/40 transition-all group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200/60 group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900">Applied AI & Agentic Systems</h4>
                  <p className="text-xs font-mono text-slate-400">LLMs & Tool Use</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Architecting intelligent automation workflows using modern foundation models (Gemini, OpenAI), 
                vector search, context-augmented reasoning, and autonomous task agents.
              </p>
            </div>

            {/* Pillar 3: Academic Foundation */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-md hover:border-primary/40 transition-all group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200/60 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900">IIT Guwahati Rigor</h4>
                  <p className="text-xs font-mono text-slate-400">BSc (Hons) Data Science & AI</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rigorous mathematical and computational foundations in probability, machine learning, 
                linear algebra, and deep neural network algorithms.
              </p>
            </div>

            {/* Pillar 4: Full-Stack Web Development */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-md hover:border-primary/40 transition-all group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/60 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900">Full-Stack Execution</h4>
                  <p className="text-xs font-mono text-slate-400">React, TypeScript, Cloud</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                3+ years of end-to-end client solution delivery, designing high-conversion web platforms, 
                responsive user experiences, and robust RESTful backends.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};