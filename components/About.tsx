import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_DETAILS } from '../constants';

const HIGHLIGHTS = [
  {
    num: "01",
    title: "Enterprise Rigor",
    org: "HCLTech",
    desc: "Governing production software deployments, evaluating complex systemic risks, and maintaining zero-downtime reliability for global enterprises.",
  },
  {
    num: "02",
    title: "3+ Years Delivery",
    org: "Production Systems",
    desc: "15+ completed client and enterprise solutions across modern web architectures, automated pipelines, and custom AI tools.",
  },
  {
    num: "03",
    title: "Applied AI & LLMs",
    org: "Neural Engineering",
    desc: "Engineering context-rich RAG pipelines, fine-tuned agent workflows, vector embeddings, and autonomous agent loops that solve actual business problems.",
  },
  {
    num: "04",
    title: "Academic Depth",
    org: "IIT Guwahati",
    desc: "BSc (Hons) in Data Science & Artificial Intelligence — deep computational foundations in linear algebra, deep learning architectures, and statistical inference.",
  },
];

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const narrativeY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["-2%", "4%"]);
  const dividerWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const headlineWords = "Engineering software with clarity, human purpose, and mathematical precision.".split(" ");

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Section Identifier */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase">
          01 // ARCHITECTURAL PHILOSOPHY
        </span>
        <div className="h-px bg-[#E8E0D8] flex-1 max-w-xs overflow-hidden">
          <motion.div style={{ width: dividerWidth }} className="h-full bg-copper" />
        </div>
      </div>

      {/* Editorial Headline with Scroll-Triggered Word Stagger */}
      <div className="max-w-4xl mb-16 sm:mb-20 select-none">
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.12]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.032,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.25em]"
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
          {/* Drop-cap Lead Paragraph */}
          <p className="text-xl sm:text-2xl text-ink font-normal leading-relaxed">
            <span className="float-left text-5xl sm:text-6xl font-display font-bold text-copper leading-[0.85] pr-3 pt-1">
              I
            </span>
            'm Sonu Thomas, an AI Software Engineer based in Kannur, Kerala. 
            My focus lives at the intersection of production-grade software engineering and cutting-edge artificial intelligence.
          </p>

          <div className="space-y-6 text-base sm:text-lg text-ink-secondary leading-relaxed font-light">
            <p>
              At <strong className="font-semibold text-ink">HCLTech</strong>, I navigate enterprise complexity — steering change management lifecycles, evaluating production risks, and upholding operational resilience across mission-critical systems.
            </p>
            <p>
              Beyond enterprise infrastructure, I design and build modern software from first principles. From intelligent LLM-powered pipelines and vector search architectures to fluid, human-centric web applications, I care deeply about how systems perform under heavy load and how effortless they feel to the end user.
            </p>
            <p>
              My academic background in Data Science & Artificial Intelligence at <strong className="font-semibold text-ink">IIT Guwahati</strong> anchors my practical engineering in deep computational theory — giving me the intuition to dissect and deploy modern models with scientific scrutiny rather than hype.
            </p>
          </div>

          {/* Large Pull-Quote Statement */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FEFCF9] border-l-4 border-copper border-y border-r border-[#E8E0D8] shadow-soft-sm my-6">
            <p className="font-display font-semibold text-xl sm:text-2xl text-ink italic leading-snug">
              &ldquo;I approach AI not as isolated experimentation, but as an uncompromising engineering discipline.&rdquo;
            </p>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] mt-3 block">
              &mdash; Sonu Thomas, Engineering Philosophy
            </span>
          </div>

          {/* Location & Status Cards with Hover Elevation */}
          <div className="pt-2 flex flex-wrap items-center gap-5 text-sm font-mono text-ink-secondary">
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 bg-[#FEFCF9] border border-[#E8E0D8] rounded-2xl shadow-soft-sm hover:border-copper transition-all"
            >
              <span className="text-[#78716C] block text-[11px] uppercase tracking-wider">Base of Operations</span>
              <span className="text-ink font-medium">{PERSONAL_DETAILS.location}</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="p-4 bg-[#FEFCF9] border border-[#E8E0D8] rounded-2xl shadow-soft-sm hover:border-emerald-500 transition-all"
            >
              <span className="text-[#78716C] block text-[11px] uppercase tracking-wider">Current Availability</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Open to High-Impact Opportunities
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Numbered Highlight Stack with Parallax Lift */}
        <motion.div
          style={{ y: cardsY }}
          className="lg:col-span-5 space-y-4 lg:sticky lg:top-28"
        >
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 6, borderColor: "rgba(196, 125, 90, 0.6)" }}
              className="p-6 sm:p-7 rounded-2xl bg-[#FEFCF9] border border-[#E8E0D8] hover:shadow-soft-md transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Background Watermark Numeral */}
              <span className="absolute top-2 right-4 font-mono font-bold text-5xl text-[#1A1614]/[0.03] select-none pointer-events-none">
                {item.num}
              </span>

              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-xs font-semibold text-copper">
                  {item.num}
                </span>
                <span className="text-xs font-mono text-[#78716C]">
                  {item.org}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-copper transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-ink-secondary font-light mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};