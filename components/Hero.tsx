import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const STATS = [
  { value: "03+", label: "Years Experience", sublabel: "Enterprise AI & Full-Stack" },
  { value: "15+", label: "Systems Engineered", sublabel: "LLMs, Pipelines & Platforms" },
  { value: "HCLTech", label: "Current Focus", sublabel: "Production Engineering" },
  { value: "IIT-G", label: "Academic Roots", sublabel: "M.Tech Data Science & AI" },
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax Transforms
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 700], [0, -50]);
  const imageY = useTransform(scrollY, [0, 700], [0, 45]);
  const watermarkX = useTransform(scrollY, [0, 800], ["0%", "-20%"]);
  const shape1Y = useTransform(scrollY, [0, 700], [0, -70]);
  const shape2Y = useTransform(scrollY, [0, 700], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  // 3D Tilt Mouse Interaction for Photo Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 180 });
  const shapeOffsetX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), { damping: 25, stiffness: 180 });
  const shapeOffsetY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), { damping: 25, stiffness: 180 });

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
      const navOffset = 90;
      const targetY = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Kinetic Watermark Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 flex items-center">
        <motion.div
          style={{ x: watermarkX }}
          className="whitespace-nowrap font-display font-bold text-[14vw] tracking-tighter text-[#1A1614]/[0.022] leading-none"
        >
          SONU THOMAS &bull; AI ENGINEER &bull; SYSTEM ARCHITECT &bull; NEURAL SYSTEMS &bull;
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center my-auto relative z-10">
        
        {/* Left Column (7 cols): Editorial Typography & Staggered Reveal */}
        <motion.div
          style={{ y: textY, opacity: heroOpacity }}
          className="lg:col-span-7 flex flex-col items-start space-y-7"
        >
          {/* Status Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FEFCF9] border border-[#E8E0D8] shadow-soft-sm text-xs font-mono tracking-wider text-ink-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-copper" />
            </span>
            <span className="uppercase text-ink font-medium">AI Systems Engineer &bull; Production LLMs</span>
          </motion.div>

          {/* Cinematic Headline with Clip-Path Reveal */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight text-ink leading-[1.03]"
              >
                I build
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight leading-[1.03] gradient-text"
              >
                intelligent
              </motion.h1>
            </div>
            <div className="overflow-hidden flex items-center gap-4">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight text-ink leading-[1.03]"
              >
                systems.
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-[3px] flex-1 max-w-[140px] bg-gradient-to-r from-copper to-transparent origin-left hidden sm:block"
              />
            </div>
          </div>

          {/* Personal Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-lg sm:text-xl text-ink-secondary font-light leading-relaxed max-w-xl"
          >
            Fusing enterprise engineering rigor with frontier generative AI, agentic workflows, and large language models. Currently engineering high-throughput software systems at{' '}
            <span className="font-semibold text-ink border-b border-copper/40 pb-0.5">HCLTech</span>.
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
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1614] text-[#EDE5DC] font-medium text-sm hover:bg-copper hover:text-white transition-all duration-300 shadow-soft-md hover:shadow-glow-copper hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4 text-copper group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>

            <a
              href={PERSONAL_DETAILS.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FEFCF9] border border-[#E8E0D8] text-ink font-medium text-sm hover:border-copper hover:text-copper hover:-translate-y-0.5 transition-all shadow-soft-sm"
            >
              <Download className="w-4 h-4 text-copper" />
              <span>Download CV</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={PERSONAL_DETAILS.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-ink-secondary hover:text-copper hover:bg-[#FEFCF9] rounded-full border border-transparent hover:border-[#E8E0D8] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-ink-secondary hover:text-copper hover:bg-[#FEFCF9] rounded-full border border-transparent hover:border-[#E8E0D8] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="p-2.5 text-ink-secondary hover:text-copper hover:bg-[#FEFCF9] rounded-full border border-transparent hover:border-[#E8E0D8] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (5 cols): Layered Depth Portrait Showcase */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-md"
            style={{ perspective: 1200 }}
          >
            {/* Layered Geometric Parallax Shapes Behind Photo */}
            <motion.div
              style={{
                y: shape1Y,
                x: shapeOffsetX,
                translateY: shapeOffsetY,
              }}
              className="absolute -top-6 -left-6 w-36 h-36 rounded-3xl bg-gradient-to-br from-copper/20 to-primary/20 -z-10 rotate-12 blur-sm"
            />
            <motion.div
              style={{
                y: shape2Y,
                x: useTransform(shapeOffsetX, (v) => -v),
              }}
              className="absolute -bottom-8 -right-6 w-44 h-44 rounded-full bg-gradient-to-tr from-primary/15 via-copper/15 to-transparent -z-10 blur-xl"
            />

            {/* 3D Tilted Photo Frame with Thick Warm Border */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden bg-[#FEFCF9] p-3 border-[4px] border-[#E8E0D8] shadow-soft-lg group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EDE5DC]">
                <motion.img
                  initial={{ scale: 1.15, filter: "blur(6px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  src="/images/Professional%20Pic%20Square.png"
                  alt="Sonu Thomas — AI Software Engineer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131110]/70 via-transparent to-transparent opacity-75" />
                
                {/* Photo Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-[#EDE5DC]">
                  <p className="font-display font-medium text-lg leading-tight">Sonu Thomas</p>
                  <p className="text-xs font-mono text-copper-200">IIT Guwahati Alumni &bull; HCLTech Engineer</p>
                </div>
              </div>
            </motion.div>

            {/* Parallax Floating Badge 1 (Bottom Left) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-[#FEFCF9]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8E0D8] shadow-soft-md hidden sm:flex items-center gap-3 z-20"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <div className="text-[10px] font-mono text-[#78716C] uppercase tracking-wider">Availability</div>
                <div className="text-xs font-semibold text-ink">Open for High-Impact Projects</div>
              </div>
            </motion.div>

            {/* Parallax Floating Badge 2 (Top Right) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-5 -right-5 bg-[#FEFCF9]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E8E0D8] shadow-soft-md hidden sm:flex items-center gap-2.5 z-20"
            >
              <Sparkles className="w-4 h-4 text-copper" />
              <span className="text-xs font-mono font-medium text-ink">Production GenAI</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Editorial Stats Strip with Warm Copper Accents */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
        className="mt-14 pt-8 border-t border-[#E8E0D8] relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col space-y-1 p-4 rounded-2xl hover:bg-[#FEFCF9] hover:shadow-soft-sm border border-transparent hover:border-[#E8E0D8] transition-all group"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display font-medium text-3xl sm:text-4xl text-ink tracking-tight group-hover:text-copper transition-colors">
                  {stat.value}
                </span>
                <span className="h-1 w-6 rounded-full bg-copper/30 group-hover:bg-copper transition-colors" />
              </div>
              <span className="text-sm font-semibold text-ink">
                {stat.label}
              </span>
              <span className="text-xs font-mono text-[#78716C]">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Minimal Vertical Scroll Pulse Indicator */}
      <div className="flex flex-col items-center justify-center pt-8">
        <button
          onClick={() => scrollToSection('marquee')}
          className="flex flex-col items-center gap-2 text-xs font-mono text-[#78716C] hover:text-copper transition-colors uppercase tracking-widest cursor-pointer group"
        >
          <span className="text-[11px] tracking-widest">Scroll Story</span>
          <div className="w-[1.5px] h-8 bg-[#E8E0D8] relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: [-16, 32] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-4 bg-copper rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
