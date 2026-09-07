import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
  const cardsY = useTransform(scrollYProgress, [0, 1], ["-2%", "6%"]);

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
        <div className="h-px bg-slate-200 flex-1 max-w-xs" />
      </div>

      {/* Editorial Headline */}
      <div className="max-w-4xl mb-16 sm:mb-24">
        <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
          Engineering software with clarity, purpose, and mathematical precision.
        </h2>
      </div>

      {/* Two-Column Editorial Narrative */}
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

          <div className="pt-4 flex items-center gap-6 text-sm font-mono text-slate-500">
            <div>
              <span className="text-slate-400 block text-xs uppercase tracking-wider">Location</span>
              <span className="text-slate-900 font-medium">Kannur, Kerala, India</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <span className="text-slate-400 block text-xs uppercase tracking-wider">Availability</span>
              <span className="text-emerald-600 font-medium">Open to High-Impact Roles</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Numbered Highlight Stack (5 cols) */}
        <motion.div
          style={{ y: cardsY }}
          className="lg:col-span-5 space-y-4"
        >
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-primary/40 hover:shadow-soft-md transition-all duration-300 group"
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