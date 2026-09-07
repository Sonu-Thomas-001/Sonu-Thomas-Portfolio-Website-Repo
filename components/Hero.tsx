import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const STATS = [
  { value: "03+", label: "Years Experience", sublabel: "Enterprise & Freelance" },
  { value: "15+", label: "Systems Built", sublabel: "LLM, Full-Stack & ML" },
  { value: "HCLTech", label: "Current Focus", sublabel: "Software Engineering" },
  { value: "IIT-G", label: "Academic Roots", sublabel: "Data Science & AI" },
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax Transforms
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 700], [0, -60]);
  const imageY = useTransform(scrollY, [0, 700], [0, 50]);
  const watermarkX = useTransform(scrollY, [0, 800], ["0%", "-25%"]);
  const badge1Y = useTransform(scrollY, [0, 600], [0, -35]);
  const badge2Y = useTransform(scrollY, [0, 600], [0, 45]);
  const heroOpacity = useTransform(scrollY, [0, 550], [1, 0.25]);

  // 3D Tilt Mouse Interaction for Photo Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Watermark Parallax Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 flex items-center">
        <motion.div
          style={{ x: watermarkX }}
          className="whitespace-nowrap font-display font-bold text-[14vw] tracking-tighter text-slate-900/[0.025] leading-none"
        >
          SONU THOMAS &bull; AI ENGINEER &bull; ARCHITECT &bull; SONU THOMAS &bull;
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto relative z-10">
        
        {/* Left Column (7 cols): Editorial Typography & Staggered Reveal */}
        <motion.div
          style={{ y: textY, opacity: heroOpacity }}
          className="lg:col-span-7 flex flex-col items-start space-y-8"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-soft-sm text-xs font-mono tracking-wider text-slate-600"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="uppercase">AI Software Engineer &bull; Kannur, India</span>
          </motion.div>

          {/* Massive Editorial Headline with Line Reveals */}
          <div className="space-y-1">
            {headlineLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "115%", rotate: 2 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + idx * 0.12,
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-xl"
          >
            Fusing enterprise software rigor with generative AI and large language models. 
            Currently engineering high-reliability systems at <span className="font-semibold text-slate-900">HCLTech</span>.
          </motion.p>

          {/* Action CTAs & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-primary transition-all duration-300 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>

            <a
              href={PERSONAL_DETAILS.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 font-medium text-sm hover:border-slate-900 hover:text-slate-900 hover:-translate-y-0.5 transition-all shadow-soft-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={PERSONAL_DETAILS.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-white rounded-full border border-transparent hover:border-slate-200 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-primary hover:bg-white rounded-full border border-transparent hover:border-slate-200 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="p-2.5 text-slate-400 hover:text-slate-900 hover:bg-white rounded-full border border-transparent hover:border-slate-200 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (5 cols): 3D Mouse Tilt & Parallax Portrait Showcase */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end perspective-1000"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-md transition-transform duration-200 ease-out"
            style={{ perspective: 1000 }}
          >
            {/* Subtle multi-layer ambient glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 via-secondary/15 to-transparent rounded-[3rem] blur-3xl -z-10" />

            {/* 3D Tilted Photo Frame */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/90 shadow-soft-lg group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <motion.img
                  initial={{ scale: 1.15, filter: "blur(6px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  src="https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Sonu-Thomas-Portfolio-Website-Repo/ProfilePic.jpg"
                  alt="Sonu Thomas — AI Software Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60" />
                
                {/* Photo Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-display font-medium text-lg leading-tight">Sonu Thomas</p>
                  <p className="text-xs font-mono text-slate-200">IIT Guwahati Alumni &bull; HCLTech</p>
                </div>
              </div>
            </motion.div>

            {/* Parallax Floating Badge 1 (Bottom Left) */}
            <motion.div
              style={{ y: badge1Y }}
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200 shadow-soft-md hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Focus Area</div>
                <div className="text-xs font-semibold text-slate-900">LLM &amp; Intelligent Systems</div>
              </div>
            </motion.div>

            {/* Parallax Floating Badge 2 (Top Right) */}
            <motion.div
              style={{ y: badge2Y }}
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-5 -right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 shadow-soft-md hidden sm:flex items-center gap-2.5 z-20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-medium text-slate-800">Production AI</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Editorial Stats Strip with Staggered Hover Elevation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
        className="mt-16 pt-8 border-t border-slate-200/80 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col space-y-1 p-4 rounded-2xl hover:bg-white hover:shadow-soft-sm border border-transparent hover:border-slate-200/80 transition-colors"
            >
              <span className="font-display font-medium text-3xl sm:text-4xl text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {stat.label}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="flex justify-center pt-8">
        <button
          onClick={() => scrollToSection('marquee')}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-800 transition-colors uppercase tracking-widest cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
