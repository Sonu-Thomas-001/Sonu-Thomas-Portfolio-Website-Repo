import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { AsciiWave } from './AsciiWave';

const PROFESSIONAL_HERO_PHOTOS = [
  { src: "/images/Professional%20Pic%201.png", label: "Executive", tag: "System Design" },
  { src: "/images/Professional%20Pic%202.png", label: "Architecture", tag: "Enterprise Execution" },
  { src: "/images/Professional%20Pic%203.png", label: "Engineering", tag: "Neural Architectures" },
  { src: "/images/Professional%20Pic%204.png", label: "Delivery", tag: "Independent Delivery" },
  { src: "/images/Professional%20Pic%205.png", label: "Research", tag: "Technical Research" },
  { src: "/images/Professional%20Pic%206.png", label: "Leadership", tag: "Production Leadership" },
];

const STATS = [
  { index: "01", value: "03+", label: "Years Experience", sublabel: "Enterprise AI & Full-Stack" },
  { index: "02", value: "15+", label: "Systems Engineered", sublabel: "LLMs, Pipelines & Platforms" },
  { index: "03", value: "HCLTech", live: true, label: "Current Focus", sublabel: "Production Engineering" },
  { index: "04", value: "IIT-G", label: "Academic Roots", sublabel: "M.Tech Data Science & AI" },
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  // Auto-switch portrait every 4 seconds (The optimal balance: enough time to comfortably view, dynamic enough to feel alive)
  useEffect(() => {
    if (isPhotoHovered) return;
    const interval = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % PROFESSIONAL_HERO_PHOTOS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPhotoHovered]);

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
      className="relative isolate min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-[#1E1B18]/80 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-[0_2px_12px_rgba(26,22,20,0.04)] text-xs font-mono tracking-wide hover:border-copper/40 transition-all duration-300 select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[#1A1614] dark:text-[#EDE5DC] font-medium text-[11px] sm:text-xs">
              AI Engineer
            </span>
          </motion.div>

          {/* Cinematic Editorial Headline */}
          <div className="space-y-0.5 sm:space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-[#1A1614] dark:text-[#FDFBF7] leading-[1.05]"
              >
                I build{' '}
                <span className="bg-gradient-to-r from-[#B85D36] via-copper to-[#A04D28] dark:from-[#F0A584] dark:via-copper dark:to-[#F0A584] bg-clip-text text-transparent">
                  intelligent
                </span>
              </motion.h1>
            </div>
            <div className="overflow-hidden flex items-center gap-4 sm:gap-6">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-[#1A1614] dark:text-[#FDFBF7] leading-[1.05]"
              >
                systems<span className="text-copper">.</span>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2.5px] flex-1 max-w-[140px] bg-gradient-to-r from-copper to-transparent origin-left hidden sm:block rounded-full"
              />
            </div>
          </div>

          {/* Personal Bio Paragraph with Verified Entity Tag */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg lg:text-xl text-[#4A4340] dark:text-[#D6D3D1] font-normal leading-relaxed max-w-xl"
          >
            Fusing enterprise engineering rigor with frontier generative AI, agentic workflows, and high-throughput architectures. Currently engineering production AI platforms at{' '}
            <span className="inline-flex items-center gap-1 font-semibold text-[#1A1614] dark:text-[#FDFBF7] bg-[#E8E0D8]/40 dark:bg-white/[0.08] px-2 py-0.5 rounded-md border border-[#E8E0D8] dark:border-white/10 hover:border-copper transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              HCLTech
            </span>.
          </motion.p>

          {/* Action CTAs & Social Dock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
          >
            {/* Primary Magnetic CTA */}
            <button
              onClick={() => scrollToSection('projects')}
              className="relative group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1614] text-[#EDE5DC] dark:bg-[#EDE5DC] dark:text-[#1A1614] font-medium text-sm hover:bg-copper dark:hover:bg-copper hover:text-white dark:hover:text-white transition-all duration-300 shadow-[0_8px_24px_rgba(26,22,20,0.14)] hover:shadow-[0_12px_32px_rgba(196,125,90,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Explore Selected Work</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 text-copper group-hover:text-white dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              <div className="absolute inset-0 bg-gradient-to-r from-copper to-[#D4845E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Secondary Frosted Glass CTA */}
            <a
              href={PERSONAL_DETAILS.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 dark:bg-white/[0.06] backdrop-blur-md border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-[#EDE5DC] font-medium text-sm hover:border-copper hover:text-copper hover:-translate-y-0.5 transition-all shadow-soft-sm"
            >
              <Download className="w-4 h-4 text-copper" />
              <span>Download CV</span>
            </a>

            {/* Glass Social Pill Dock */}
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white/70 dark:bg-white/[0.04] backdrop-blur-md border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
              <a
                href={PERSONAL_DETAILS.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#78716C] dark:text-[#A8A29E] hover:text-copper hover:bg-white dark:hover:bg-white/10 rounded-full transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#78716C] dark:text-[#A8A29E] hover:text-copper hover:bg-white dark:hover:bg-white/10 rounded-full transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="p-2.5 text-[#78716C] dark:text-[#A8A29E] hover:text-copper hover:bg-white dark:hover:bg-white/10 rounded-full transition-all"
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
            onMouseEnter={() => setIsPhotoHovered(true)}
            onMouseLeave={() => {
              setIsPhotoHovered(false);
              handleMouseLeave();
            }}
            className="relative w-full max-w-md"
            style={{ perspective: 1200 }}
          >
            {/* Ambient Radial Mesh Halo */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-copper/25 via-amber-500/10 to-transparent -z-10 blur-2xl opacity-75" />

            {/* Geometric Accent Lines */}
            <motion.div
              style={{
                y: shape1Y,
                x: shapeOffsetX,
                translateY: shapeOffsetY,
              }}
              className="absolute -top-5 -left-5 w-28 h-28 rounded-3xl bg-copper/15 -z-10 rotate-12 blur-lg"
            />

            {/* 3D Tilted Photo Frame with Ultra-Thin Specular Glass Border */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-[32px] overflow-hidden p-2 bg-gradient-to-b from-white/95 via-white/40 to-white/10 dark:from-white/15 dark:via-white/5 dark:to-transparent border border-white/80 dark:border-white/10 shadow-[0_24px_64px_-12px_rgba(26,22,20,0.16)] dark:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[26px] overflow-hidden bg-[#EDE5DC] dark:bg-[#1E1B18]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhotoIdx}
                    initial={{ opacity: 0.2, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.2, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    src={PROFESSIONAL_HERO_PHOTOS[activePhotoIdx].src}
                    alt={`Sonu Thomas — ${PROFESSIONAL_HERO_PHOTOS[activePhotoIdx].tag}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131110]/85 via-[#131110]/20 to-transparent opacity-90" />
                
                {/* Photo Top Floating Glass Badge */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131110]/75 backdrop-blur-md border border-white/15 text-[#EDE5DC] text-[11px] font-mono shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-copper" />
                  <span>{PROFESSIONAL_HERO_PHOTOS[activePhotoIdx].tag}</span>
                </div>

                {/* Photo Bottom Caption & Modern Look Switcher */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-2 text-[#EDE5DC]">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-display font-semibold text-lg text-white leading-tight">Sonu Thomas</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-[11px] font-mono text-copper-200/90 mt-0.5">IIT Guwahati &bull; HCLTech Engineer</p>
                  </div>

                  {/* 6 Photo Switcher Pills */}
                  <div 
                    className="flex items-center gap-1 bg-[#131110]/80 backdrop-blur-md p-1 rounded-full border border-white/15 shadow-md" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    {PROFESSIONAL_HERO_PHOTOS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhotoIdx(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activePhotoIdx === i ? 'bg-copper w-4.5' : 'bg-white/40 hover:bg-white/80 w-2'
                        }`}
                        title={`View Look 0${i + 1}: ${PROFESSIONAL_HERO_PHOTOS[i].tag}`}
                        aria-label={`View photo ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-[0_4px_20px_rgba(26,22,20,0.04)] hover:shadow-[0_12px_32px_rgba(196,125,90,0.14)] hover:border-copper/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Top Accent Hairline */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/30 group-hover:via-copper to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100" />

              {/* Header: Stat Value + Subtle Index */}
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display font-bold text-3xl sm:text-4xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight group-hover:text-copper transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-medium text-[#A8A19B] dark:text-[#78716C] group-hover:text-copper transition-colors flex items-center gap-1.5 shrink-0">
                  {stat.live && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Active" />}
                  {stat.index}
                </span>
              </div>

              {/* Body: Labels & Copper Indicator */}
              <div className="mt-3 space-y-1">
                <div className="text-sm font-semibold text-[#1A1614] dark:text-[#EDE5DC] group-hover:text-copper transition-colors">
                  {stat.label}
                </div>
                <div className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] tracking-tight leading-relaxed">
                  {stat.sublabel}
                </div>
                <div className="w-6 h-0.5 bg-copper/30 group-hover:w-10 group-hover:bg-copper transition-all duration-300 rounded-full mt-2.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Minimal Vertical Scroll Pulse Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8">
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

      {/* Interactive ASCII Wave Horizon - Compact Floor Tide */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 pointer-events-none overflow-hidden z-0 opacity-40 dark:opacity-50 hover:opacity-65 transition-opacity duration-300">
        <AsciiWave speed={0.8} density={1.0} baseLevel={0.62} />
      </div>
    </section>
  );
};
