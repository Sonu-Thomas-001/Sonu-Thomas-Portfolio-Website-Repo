import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useLenisScroll } from '../hooks/useLenisScroll';
import { useSectionProgress } from '../hooks/useSectionProgress';
import {
  ShieldCheck,
  Workflow,
  Sparkles,
  GraduationCap,
  MapPin,
  Clock,
  ArrowUpRight,
  Activity,
  Layers,
  Quote,
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { AmbientParticles } from './AmbientParticles';
import { SonarRings } from './SonarRings';
import { ConstellationWeb } from './ConstellationWeb';

const ABOUT_LOOKS = [
  {
    src: "/images/Professional%20Pic%202.png",
    tag: "Production Delivery",
    caption: "Steering enterprise change governance at HCLTech",
    label: "Execution",
  },
  {
    src: "/images/Professional%20Pic%203.png",
    tag: "Applied AI Strategy",
    caption: "Architecting agentic LLM systems & vector pipelines",
    label: "Architecture",
  },
];

const ENGINEERING_PILLARS = [
  {
    num: "01",
    tag: "HCLTech",
    title: "Enterprise Rigor",
    desc: "Governing production software deployments, evaluating complex systemic risks, and maintaining zero-downtime reliability for global enterprise infrastructure.",
    icon: ShieldCheck,
    highlight: "Zero-Downtime Governance",
  },
  {
    num: "02",
    tag: "Velocity",
    title: "Production Systems",
    desc: "15+ completed client and enterprise solutions spanning high-throughput web architectures, automated CI/CD pipelines, and custom intelligent tools.",
    icon: Workflow,
    highlight: "15+ Delivered Platforms",
  },
  {
    num: "03",
    tag: "Frontier",
    title: "Applied AI & Agents",
    desc: "Engineering context-rich RAG pipelines, fine-tuned agent workflows, vector embeddings, and autonomous agent loops that solve actual business challenges.",
    icon: Sparkles,
    highlight: "Autonomous Agent Loops",
  },
  {
    num: "04",
    tag: "IIT Guwahati",
    title: "Academic Depth",
    desc: "BSc (Hons) in Data Science & Artificial Intelligence — deep computational foundations in linear algebra, deep neural architectures, and statistical inference.",
    icon: GraduationCap,
    highlight: "Computational Rigor",
  },
];

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [localTime, setLocalTime] = useState<string>('');
  const { scrollToId } = useLenisScroll();

  // Live ticking IST clock for Kannur, Kerala
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setLocalTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollYProgress = useSectionProgress(containerRef);

  const dividerWidth = useTransform(scrollYProgress, [0, 0.35], ["0%", "100%"]);

  // 3D Tilt Spring Interaction for Portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 25, stiffness: 180 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 25, stiffness: 180 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const headlineWords = "Engineering software with clarity, human purpose, and mathematical precision.".split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative overflow-x-clip"
    >
      {/* Floating Ambient Cyber-Orbs */}
      <AmbientParticles variant="orbs" density="subtle" />

      {/* Sonar emitters for ambient depth */}
      <SonarRings />

      {/* Constellation node network */}
      <ConstellationWeb nodeCount={12} maxEdges={14} />

      {/* 1. Section Header & Identifier Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase">
            01 // ARCHITECTURAL PHILOSOPHY
          </span>
          <div className="h-px bg-[#E8E0D8] dark:bg-white/10 w-24 sm:w-40 overflow-hidden">
            <motion.div style={{ width: dividerWidth }} className="h-full bg-copper" />
          </div>
        </div>

        {/* Live Coordinates Pill */}
        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-white/70 dark:bg-[#1E1B18]/70 backdrop-blur-md border border-[#E8E0D8] dark:border-white/10 text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
          <MapPin className="w-3 h-3 text-copper" />
          <span>Kannur, KL &bull; 11.8745&deg; N, 75.3704&deg; E</span>
        </div>
      </div>

      {/* 2. Editorial Headline with Word Stagger */}
      <div className="max-w-4xl mb-14 sm:mb-20 select-none">
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-[1.12]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: i * 0.028,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-[0.25em] ${
                word.toLowerCase().includes('precision') || word.toLowerCase().includes('clarity')
                  ? 'text-copper'
                  : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* 3. Top Row: Asymmetric Bento Grid (7 Cols Manifesto + 5 Cols Portrait Spotlight) */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">
        
        {/* Left Bento: Lead Narrative & Manifesto (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 rounded-[32px] bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-[0_4px_24px_rgba(26,22,20,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          {/* Subtle Top Specular Gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/30 to-transparent" />

          <div className="space-y-6">
            {/* Drop-cap Lead Paragraph */}
            <p className="text-xl sm:text-2xl text-[#1A1614] dark:text-[#EDE5DC] font-normal leading-relaxed">
              <span className="float-left text-5xl sm:text-6xl font-display font-bold text-copper leading-[0.85] pr-3.5 pt-1">
                I
              </span>
              'm Sonu Thomas, an AI Software Engineer based in Kannur, Kerala. 
              My practice lives at the intersection of production-grade software architecture and frontier generative intelligence.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[#4A4340] dark:text-[#D6D3D1] leading-relaxed font-normal">
              <p>
                At <strong className="font-semibold text-[#1A1614] dark:text-[#FDFBF7] underline decoration-copper/40 decoration-2 underline-offset-4">HCLTech</strong>, I navigate enterprise complexity — steering mission-critical change governance, evaluating deployment risks, and upholding zero-downtime operational reliability across global systems.
              </p>
              <p>
                Beyond enterprise infrastructure, I architect intelligent systems from first principles. From context-rich RAG pipelines and vector retrieval architectures to autonomous agent loops, I obsess over how systems hold up under heavy load and how fluid they feel in human hands.
              </p>
              <p>
                My academic foundations in Data Science & Artificial Intelligence from <strong className="font-semibold text-[#1A1614] dark:text-[#FDFBF7] underline decoration-copper/40 decoration-2 underline-offset-4">IIT Guwahati</strong> anchor my engineering in rigorous computational theory — giving me the intuition to evaluate neural architectures with mathematical scrutiny.
              </p>
            </div>
          </div>

          {/* Frosted Manifesto Pull-Quote Strip */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] dark:bg-white/[0.04] border-l-4 border-copper border-y border-r border-[#E8E0D8]/80 dark:border-white/10 relative">
            <Quote className="w-5 h-5 text-copper/60 absolute top-4 right-4" />
            <p className="font-display font-semibold text-lg sm:text-xl text-[#1A1614] dark:text-[#FDFBF7] italic leading-snug pr-6">
              &ldquo;I approach AI not as isolated experimentation, but as an uncompromising engineering discipline.&rdquo;
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs font-mono uppercase tracking-widest text-[#78716C] dark:text-[#A8A29E]">
              <span className="w-2 h-0.5 bg-copper inline-block" />
              <span>Sonu Thomas &bull; Engineering Thesis</span>
            </div>
          </div>
        </motion.div>

        {/* Right Bento: Cinematic Spotlight Portrait (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
            className="relative w-full h-full flex flex-col justify-between"
          >
            {/* Ambient Copper Aura */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-copper/20 via-amber-500/10 to-transparent -z-10 blur-2xl opacity-75" />

            {/* Glass Portrait Card */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full h-full min-h-[460px] lg:min-h-full rounded-[32px] overflow-hidden p-2 bg-gradient-to-b from-white/95 via-white/40 to-white/10 dark:from-white/15 dark:via-white/5 dark:to-transparent border border-white/80 dark:border-white/10 shadow-[0_24px_64px_-12px_rgba(26,22,20,0.16)] dark:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl flex flex-col group cursor-pointer"
            >
              <div className="relative flex-1 w-full rounded-[26px] overflow-hidden bg-[#EDE5DC] dark:bg-[#1E1B18]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhotoIdx}
                    initial={{ opacity: 0.2, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.2, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    src={ABOUT_LOOKS[activePhotoIdx].src}
                    alt={`Sonu Thomas — ${ABOUT_LOOKS[activePhotoIdx].tag}`}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131110]/90 via-[#131110]/25 to-transparent opacity-90" />

                {/* Top Floating Glass Badge */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131110]/75 backdrop-blur-md border border-white/15 text-[#EDE5DC] text-[11px] font-mono shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-copper" />
                  <span>{ABOUT_LOOKS[activePhotoIdx].tag}</span>
                </div>

                {/* Bottom Overlay: Look Description & Toggle Switcher */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-[#EDE5DC]">
                  <div>
                    <span className="text-[10px] font-mono text-copper uppercase tracking-wider block">
                      Production Leadership
                    </span>
                    <p className="font-display font-medium text-base sm:text-lg text-white leading-snug">
                      {ABOUT_LOOKS[activePhotoIdx].caption}
                    </p>
                  </div>

                  {/* Dual Look Switcher Tabs */}
                  <div
                    className="flex items-center gap-1 bg-[#131110]/80 backdrop-blur-md p-1 rounded-full border border-white/15 shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {ABOUT_LOOKS.map((look, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition-all duration-200 ${
                          activePhotoIdx === idx
                            ? 'bg-copper text-white shadow-sm'
                            : 'text-white/60 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {look.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* 4. Middle Row: 4 Engineering DNA Bento Pillars */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#78716C] dark:text-[#A8A29E] uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-copper" />
            <span>Core Engineering DNA</span>
          </div>
          <span className="text-[11px] font-mono text-[#A8A19B] dark:text-[#78716C]">
            [ 04 Systems Pillars ]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ENGINEERING_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-[0_4px_20px_rgba(26,22,20,0.04)] hover:shadow-[0_12px_32px_rgba(196,125,90,0.14)] hover:border-copper/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Accent Hairline on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/30 group-hover:via-copper to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100" />

                <div>
                  {/* Top Header: Number + Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-copper">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAF7F2] dark:bg-white/[0.06] border border-[#E8E0D8] dark:border-white/[0.08] text-[#78716C] dark:text-[#A8A29E] uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-copper/10 text-copper flex items-center justify-center shrink-0 group-hover:bg-copper group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4A4340] dark:text-[#D6D3D1] leading-relaxed font-normal mt-2">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Highlight Tag & Copper Indicator */}
                <div className="mt-5 pt-3 border-t border-[#E8E0D8]/60 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                  <span>{pillar.highlight}</span>
                  <div className="w-5 h-0.5 bg-copper/30 group-hover:w-8 group-hover:bg-copper transition-all duration-300 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 5. Bottom Row: Live Telemetry & Operations Pods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Pod 1: Base of Operations & Local Time */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -3 }}
          className="p-5 sm:p-6 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm flex items-center justify-between"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-copper/10 text-copper flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] block">
                Base of Operations
              </span>
              <span className="text-sm font-semibold text-[#1A1614] dark:text-[#EDE5DC]">
                {PERSONAL_DETAILS.location}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] block">
              IST (UTC+5:30)
            </span>
            <span className="font-mono text-xs font-semibold text-copper">
              {localTime || 'LIVE'}
            </span>
          </div>
        </motion.div>

        {/* Pod 2: Live Availability Beacon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          whileHover={{ y: -3 }}
          className="p-5 sm:p-6 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm flex items-center justify-between"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] block">
                Current Availability
              </span>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                Open for High-Impact Projects
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
            Q3/Q4
          </span>
        </motion.div>

        {/* Pod 3: Architecture Thesis Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          whileHover={{ y: -3 }}
          className="p-5 sm:p-6 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm flex items-center justify-between group cursor-pointer"
          onClick={() => scrollToId('contact')}
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-copper block">
              Direct Collaboration
            </span>
            <span className="text-sm font-semibold text-[#1A1614] dark:text-[#EDE5DC] group-hover:text-copper transition-colors">
              Initiate Consultation &rarr;
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#1A1614] dark:bg-white/10 text-white flex items-center justify-center group-hover:bg-copper transition-colors">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;