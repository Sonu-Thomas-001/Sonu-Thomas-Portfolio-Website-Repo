import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const narrativeY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["-2%", "5%"]);
  const dividerWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const headlineWords = "Engineering software with clarity, purpose, and mathematical precision.".split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative overflow-hidden"
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

      {/* Editorial Headline with Scroll-Triggered Word-by-Word Stagger */}
      <div className="max-w-4xl mb-16 sm:mb-24 select-none">
        <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.14]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.26em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* Two-Column Editorial Narrative with Parallax */}
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column: Story & Narrative (7 cols) */}
        <motion.div
          style={{ y: narrativeY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
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
              My academic journey in Data Science &amp; Artificial Intelligence at <strong className="font-semibold text-slate-900">IIT Guwahati</strong> anchors my practical engineering in deep computational theory — giving me the intuition to evaluate modern models beyond their marketing claims.
            </p>
          </div>

          {/* Location & Status Cards with Hover Elevation */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-mono text-slate-500">
            <motion.div
              whileHover={{ y: -3 }}
              className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-soft-sm hover:border-primary/40 transition-all"
            >
              <span className="text-slate-400 block text-[11px] uppercase tracking-wider">Location</span>
              <span className="text-slate-900 font-medium">{PERSONAL_DETAILS.location}</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-soft-sm hover:border-emerald-400/50 transition-all"
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
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(79, 70, 229, 0.45)" }}
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