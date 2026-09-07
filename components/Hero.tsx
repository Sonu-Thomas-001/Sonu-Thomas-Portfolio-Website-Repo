import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const STATS = [
  { value: "03+", label: "Years Experience", sublabel: "Enterprise & Freelance" },
  { value: "15+", label: "Systems Built", sublabel: "LLM, Full-Stack & ML" },
  { value: "HCLTech", label: "Current Focus", sublabel: "Software Engineering" },
  { value: "IIT-G", label: "Academic Roots", sublabel: "Data Science & AI" },
];

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const imageY = useTransform(scrollY, [0, 600], [0, 40]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const targetY = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const headlineLines = [
    "I build intelligent",
    "systems that",
    "understand."
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        
        {/* Left Column (7 cols): Editorial Typography */}
        <motion.div
          style={{ y: textY, opacity: heroOpacity }}
          className="lg:col-span-7 flex flex-col items-start space-y-8"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-500 uppercase">
              AI Software Engineer &bull; Kannur, India
            </span>
          </motion.div>

          {/* Massive Editorial Headline */}
          <div className="space-y-1">
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.2 + idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight leading-[1.05] ${
                    idx === 2 ? "gradient-text" : "text-slate-900"
                  }`}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Personal Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl"
          >
            Fusing enterprise software rigor with generative AI and large language models. 
            Currently engineering high-reliability systems at <span className="font-semibold text-slate-900">HCLTech</span>.
          </motion.p>

          {/* Action CTAs & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-primary transition-all duration-300 shadow-soft-sm group"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>

            <a
              href={PERSONAL_DETAILS.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:border-slate-900 hover:text-slate-900 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Subtle Social Links */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={PERSONAL_DETAILS.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-100"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="p-2.5 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (5 cols): Editorial Portrait Showcase */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            
            {/* Subtle background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent rounded-[2.5rem] blur-2xl -z-10" />

            {/* Photo Card Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/80 shadow-soft-lg group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <motion.img
                  initial={{ scale: 1.15, filter: "blur(8px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Sonu-Thomas-Portfolio-Website-Repo/ProfilePic.jpg"
                  alt="Sonu Thomas — AI Software Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                
                {/* Photo Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-display font-medium text-lg leading-tight">Sonu Thomas</p>
                  <p className="text-xs font-mono text-slate-200">IIT Guwahati Alumni &bull; HCLTech</p>
                </div>
              </div>
            </div>

            {/* Floating Editorial Badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200 shadow-soft-md hidden sm:flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Status</div>
                <div className="text-xs font-semibold text-slate-900">Crafting Intelligent Systems</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Editorial Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-16 pt-8 border-t border-slate-200/80"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <span className="font-display font-medium text-3xl sm:text-4xl text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {stat.label}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="flex justify-center pt-8">
        <button
          onClick={() => scrollToSection('marquee')}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
