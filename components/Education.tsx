import React, { useRef } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import {
  Award,
  CheckCircle2,
} from 'lucide-react';
import { EDUCATION_DATA } from '../constants';
import { useSectionProgress, PINNED_OFFSET } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';
import { useIsDesktop } from '../hooks/useMediaQuery';
import { ScrubReveal } from './ScrubReveal';

// Desktop pins the campus card and scrubs its reveals to a continuous scroll
// runway. Mobile has no pinned runway to scrub against, so it falls back to
// a real per-element whileInView cascade instead of ScrubReveal's static
// "just show it" disabled state — same content, an actual mobile entrance.
const Reveal: React.FC<{
  isDesktop: boolean;
  progress: MotionValue<number>;
  range: [number, number];
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
}> = ({ isDesktop, progress, range, delay = 0, y = 16, className, children }) => {
  if (isDesktop) {
    return (
      <ScrubReveal progress={progress} range={range} y={y} className={className}>
        {children}
      </ScrubReveal>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const IIT_COMPUTATIONAL_PILLARS = [
  "High-Dimensional Linear Algebra",
  "Deep Learning Architectures",
  "Optimization Theory",
  "Vector Calculus & Probability",
  "Advanced Data Structures & Algorithms",
  "Statistical Inference & Estimation",
];

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const runwayRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const scrollYProgress = useSectionProgress(containerRef);
  const dividerWidth = useTransform(scrollYProgress, [0, 0.35], ["0%", "100%"]);

  // Pinned campus scene (lg+): the flagship card sticks while the runway scrolls beneath it.
  const pinProgress = useSectionProgress(runwayRef, PINNED_OFFSET);
  const sceneProgress = isDesktop ? pinProgress : scrollYProgress;
  const campusScale = useParallax(sceneProgress, [1.18, 1], [0, 0.85], 1);
  const campusY = useParallax(sceneProgress, ['-6%', '4%'], [0, 1], '0%');
  const foundationsY = useParallax(pinProgress, [32, -32], [0, 1], 0);

  const iitData = EDUCATION_DATA.find((e) => e.institution.toLowerCase().includes('guwahati')) || EDUCATION_DATA[0];
  const foundationalData = EDUCATION_DATA.filter((e) => !e.institution.toLowerCase().includes('guwahati'));

  return (
    <section
      ref={containerRef}
      id="education"
      className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative overflow-x-clip"
    >
      {/* 1. Header & Section Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-copper-700 dark:text-copper font-semibold tracking-widest uppercase">
            03 // ACADEMIC RIGOR & FOUNDATIONS
          </span>
          <div className="h-px bg-[#E8E0D8] dark:bg-white/10 w-24 sm:w-40 overflow-hidden">
            <motion.div style={{ width: dividerWidth }} className="h-full bg-copper" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-white/70 dark:bg-[#1E1B18]/70 backdrop-blur-md border border-[#E8E0D8] dark:border-white/10 text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
          <Award className="w-3.5 h-3.5 text-copper" />
          <span>Tier-1 Institute Pedigree</span>
        </div>
      </div>

      {/* 2. Editorial Headline & Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mb-14 sm:mb-20"
      >
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-[1.12]">
          Theoretical depth meets <span className="text-copper">computational rigor</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A4340] dark:text-[#D6D3D1] font-normal leading-relaxed max-w-2xl">
          Deep theoretical grounding in high-dimensional linear algebra, algorithmic complexity, deep neural architectures, and statistical learning from India&apos;s premier technical institute.
        </p>
      </motion.div>

      {/* 3. Academic Bento (8 Cols IIT-G Flagship + 4 Cols Foundations) */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        {/* Flagship Marquee: IIT Guwahati (8 cols) — pinned runway on desktop */}
        <div ref={runwayRef} className="lg:col-span-8 lg:h-[150vh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-24 relative rounded-[32px] overflow-hidden bg-[#131110] border border-[#E8E0D8] dark:border-white/15 shadow-[0_24px_64px_-12px_rgba(26,22,20,0.18)] flex flex-col justify-between group min-h-[500px]"
        >
          {/* Full-bleed Cinematic Campus Background Image — scroll-scrubbed zoom */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              src="/images/IITG.jpg"
              alt="IIT Guwahati Campus"
              style={{ scale: campusScale, y: campusY }}
              className="w-full h-full object-cover object-center opacity-45 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131110] via-[#131110]/85 to-[#131110]/40" />
          </div>

          {/* Top Header Row inside Card */}
          <div className="relative z-10 p-7 sm:p-9 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EDE5DC] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>IIT Guwahati &bull; Institute of National Importance</span>
            </div>

            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-copper/20 text-copper-200 border border-copper/40 backdrop-blur-md">
              {iitData.period} // Active Scholar
            </span>
          </div>

          {/* Main Degree & Curriculum Details */}
          <div className="relative z-10 p-7 sm:p-9 pt-0 space-y-6">
            <Reveal isDesktop={isDesktop} progress={pinProgress} range={[0.12, 0.32]}>
              <span className="text-xs font-mono text-copper uppercase tracking-widest block mb-2">
                Honors Degree Program
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                {iitData.degree}
              </h3>
              <p className="text-sm sm:text-base text-[#EDE5DC]/80 font-light mt-2.5 max-w-2xl leading-relaxed">
                {iitData.details} Advanced study exploring the convergence of mathematical statistics, deep neural representations, and scalable computing.
              </p>
            </Reveal>

            {/* Computational Pillars Matrix — chips reveal one after another */}
            <div>
              <Reveal isDesktop={isDesktop} progress={pinProgress} range={[0.36, 0.48]} delay={0.15} y={12}>
                <span className="text-[11px] font-mono text-[#9C948B] uppercase tracking-wider block mb-3">
                  Core Computational Invariants & Coursework:
                </span>
              </Reveal>
              <div className="flex flex-wrap gap-2">
                {IIT_COMPUTATIONAL_PILLARS.map((pillar, i) => (
                  <Reveal
                    key={i}
                    isDesktop={isDesktop}
                    progress={pinProgress}
                    range={[0.4 + i * 0.04, 0.52 + i * 0.04]}
                    delay={0.22 + i * 0.06}
                    y={14}
                  >
                    <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-[#EDE5DC] transition-colors">
                      {pillar}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Bottom Verification Footer */}
            <Reveal isDesktop={isDesktop} progress={pinProgress} range={[0.72, 0.88]} delay={0.65} y={16}>
              <div className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9C948B]">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[#EDE5DC]">Verified Academic Credential</span>
                </div>
                <span className="text-copper-200">
                  Data Science & AI Scholar
                </span>
              </div>
            </Reveal>
          </div>
        </motion.div>
        </div>

        {/* Foundations Companion Stack (4 cols) — pinned alongside with a slower drift */}
        <motion.div
          style={{ y: isDesktop ? foundationsY : 0 }}
          className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col justify-between gap-6"
        >
          {foundationalData.map((edu, idx) => {
            const isPlusTwo = edu.institution.toLowerCase().includes('plus') || edu.degree.toLowerCase().includes('higher');
            const campusImg = isPlusTwo ? "/images/Sjhss_plustwo.jpeg" : "/images/Sjhss_10th.webp";
            const campusLabel = isPlusTwo ? "SJHSS Higher Secondary (CS)" : "SJHSS Secondary (SSLC)";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 * (idx + 1) }}
                whileHover={{ y: -4 }}
                className="relative flex-1 p-6 sm:p-7 rounded-[28px] bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-[0_4px_20px_rgba(26,22,20,0.04)] hover:shadow-[0_12px_32px_rgba(196,125,90,0.14)] hover:border-copper/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Accent Hairline */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/30 group-hover:via-copper to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100" />

                <div>
                  {/* Top Thumbnail & Status */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#EDE5DC] border border-[#E8E0D8] dark:border-white/10 shrink-0">
                      <img
                        src={campusImg}
                        alt={campusLabel}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] uppercase tracking-wider block">
                        Academic Milestone &bull; {edu.period}
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[#1A1614] dark:text-[#FDFBF7] leading-snug group-hover:text-copper transition-colors">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-copper mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-[#4A4340] dark:text-[#D6D3D1] font-normal leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                {/* Bottom Node Seal */}
                <div className="mt-5 pt-3 border-t border-[#E8E0D8]/60 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                  <span>NODE // 0{idx + 2}</span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Completed
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
