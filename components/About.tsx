import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const HIGHLIGHTS = [
  {
    num: "01",
    title: "Enterprise Rigor",
    org: "HCLTech",
    desc: "Governing production changes, minimizing deployment risk, and ensuring zero-downtime reliability for enterprise systems.",
  },
  {
    num: "02",
    title: "3+ Years Delivery",
    org: "Independent Solutions",
    desc: "15+ completed client solutions across web platforms, automated workflows, and custom software systems.",
  },
  {
    num: "03",
    title: "Applied AI Focus",
    org: "LLMs & Agent Architectures",
    desc: "Developing context-aware RAG pipelines, fine-tuned agent workflows, and intelligent reasoning integrations.",
  },
  {
    num: "04",
    title: "Academic Depth",
    org: "IIT Guwahati",
    desc: "BSc (Hons) in Data Science & AI — mathematical foundations in machine learning, deep learning, and statistics.",
  },
];

const WordReveal: React.FC<{
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.25em] transition-colors duration-150"
    >
      {children}
    </motion.span>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: headlineProgress } = useScroll({
    target: headlineRef,
    offset: ["start 85%", "end 45%"],
  });

  const narrativeY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["-3%", "7%"]);
  const dividerWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  const headlineWords = "Engineering software with clarity, purpose, and mathematical precision.".split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative"
    >
      {/* Section Identifier */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase">
          01 // About Sonu
        </span>
        <div className="h-px bg-slate-200 flex-1 max-w-xs overflow-hidden">
          <motion.div style={{ width: dividerWidth }} className="h-full bg-primary" />
        </div>
      </div>

      {/* Editorial Headline with Scroll-Scrubbed Word Reveal */}
      <div ref={headlineRef} className="max-w-4xl mb-16 sm:mb-24 select-none">
        <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
          {headlineWords.map((word, i) => {
            const start = i / headlineWords.length;
            const end = start + 1 / headlineWords.length;
            return (
              <WordReveal key={i} progress={headlineProgress} range={[start, end]}>
                {word}
              </WordReveal>
            );
          })}
        </h2>
      </div>

      {/* Two-Column Editorial Narrative with Parallax */}
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column: Story & Narrative (7 cols) */}
        <motion.div
          style={{ y: narrativeY }}
          className="lg:col-span-7 space-y-8"
        >
          <p className="text-xl sm:text-2xl text-slate-800 font-normal leading-relaxed">
            I'm Sonu Thomas, an AI Software Engineer based in Kannur, Kerala. 
            My work lives at the intersection of production-grade software engineering and cutting-edge artificial intelligence.
          </p>

          <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            <p>
              At <strong className="font-semibold text-slate-900">HCLTech</strong>, I navigate enterprise complexity — steering change management lifecycles, evaluating production risks, and upholding operational resilience across mission-critical systems.
            </p>
            <p>
              Beyond enterprise infrastructure, I design and build modern software from first principles. From intelligent LLM-powered pipelines and vector search architectures to fluid, human-centric web applications, I care deeply about how systems perform under load and how they feel to the people who use them.
            </p>
            <p>
              My academic journey in Data Science & Artificial Intelligence at <strong className="font-semibold text-slate-900">IIT Guwahati</strong> anchors my practical engineering in deep computational theory — giving me the intuition to evaluate modern models beyond their marketing claims.
            </p>
          </div>

          {/* Location & Status Cards with Hover Elevation */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-mono text-slate-500">
            <motion.div
              whileHover={{ y: -2 }}
              className="p-3 bg-white border border-slate-200 rounded-xl shadow-soft-sm"
            >
              <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Location</span>
              <span className="text-slate-900 font-medium">{PERSONAL_DETAILS.location}</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="p-3 bg-white border border-slate-200 rounded-xl shadow-soft-sm"
            >
              <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Availability</span>
              <span className="text-emerald-600 font-medium">Open to High-Impact Roles</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Numbered Highlight Stack with Parallax Lift */}
        <motion.div
          style={{ y: cardsY }}
          className="lg:col-span-5 space-y-4"
        >
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(79, 70, 229, 0.5)" }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:shadow-soft-md transition-all duration-300 group cursor-default"
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-xs font-semibold text-primary">
                  {item.num}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {item.org}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 font-light mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};