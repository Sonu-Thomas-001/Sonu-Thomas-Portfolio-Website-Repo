import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Bot,
  Code2,
  Cloud,
  Workflow,
  ArrowUpRight,
} from 'lucide-react';
import { TechPillMarquee } from './TechPillMarquee';

interface Discipline {
  id: string;
  name: string;
  roleTag: string;
  tagline: string;
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  glowAccent: string;
  skills: { name: string; highlight?: boolean }[];
}

const DISCIPLINES: Discipline[] = [
  {
    id: "01",
    name: "AI, LLM & Agent Engineering",
    roleTag: "Autonomous Systems & Reasoning",
    tagline: "Designing multi-agent state graphs, grounded vector retrieval, and custom tool integrations with deterministic safeguards.",
    metric: "LangGraph DAGs // 70% MTTR Reduction",
    icon: Bot,
    iconBg: "bg-copper/10 dark:bg-copper/20 text-copper border border-copper/30",
    glowAccent: "group-hover:border-copper/50 group-hover:shadow-[0_16px_40px_-10px_rgba(196,125,90,0.18)]",
    skills: [
      { name: "LangGraph", highlight: true },
      { name: "LangChain" },
      { name: "Google Vertex AI", highlight: true },
      { name: "Vertex AI Agent Builder" },
      { name: "AWS Bedrock" },
      { name: "Gemini", highlight: true },
      { name: "Claude" },
      { name: "RAG", highlight: true },
      { name: "AI Agents", highlight: true },
      { name: "Agentic Workflows" },
      { name: "ChromaDB", highlight: true },
      { name: "PyTorch" },
      { name: "Embeddings" },
      { name: "Tool / Function Calling", highlight: true },
    ],
  },
  {
    id: "02",
    name: "Full-Stack Engineering",
    roleTag: "Core Systems & Web Runtimes",
    tagline: "Building resilient, high-concurrency software and kinetic client applications end-to-end with strict type safety.",
    metric: "Microservices // Sub-Second UI",
    icon: Code2,
    iconBg: "bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 text-[#8B5CF6] dark:text-[#A78BFA] border border-[#8B5CF6]/30",
    glowAccent: "group-hover:border-[#8B5CF6]/50 group-hover:shadow-[0_16px_40px_-10px_rgba(139,92,246,0.18)]",
    skills: [
      { name: "Python", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
      { name: "Java", highlight: true },
      { name: "C++" },
      { name: "SQL", highlight: true },
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI", highlight: true },
      { name: "Flask" },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "03",
    name: "Cloud, Data & Infrastructure",
    roleTag: "Distributed Systems & SRE",
    tagline: "Architecting scalable cloud infrastructure, relational database engines, and high-availability production pipelines.",
    metric: "99.99% Availability // Star TechBee Laureate",
    icon: Cloud,
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
    glowAccent: "group-hover:border-emerald-500/50 group-hover:shadow-[0_16px_40px_-10px_rgba(16,185,129,0.18)]",
    skills: [
      { name: "Google Cloud", highlight: true },
      { name: "AWS" },
      { name: "Docker", highlight: true },
      { name: "Linux", highlight: true },
      { name: "BigQuery" },
      { name: "PostgreSQL", highlight: true },
      { name: "Oracle Database", highlight: true },
      { name: "Git" },
      { name: "CI/CD", highlight: true },
      { name: "Cloud Deployment" },
      { name: "Vector Databases", highlight: true },
    ],
  },
  {
    id: "04",
    name: "Enterprise Integration & Automation",
    roleTag: "ITSM Governance & Interoperability",
    tagline: "Bridging mission-critical enterprise systems, automated ticket triage, and seamless API interoperability across platforms.",
    metric: "Zero-Downtime Governance // ITIL Compliance",
    icon: Workflow,
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30",
    glowAccent: "group-hover:border-amber-500/50 group-hover:shadow-[0_16px_40px_-10px_rgba(245,158,11,0.18)]",
    skills: [
      { name: "REST APIs", highlight: true },
      { name: "API Integration", highlight: true },
      { name: "ServiceNow", highlight: true },
      { name: "Jira" },
      { name: "Confluence" },
      { name: "Playwright" },
      { name: "Workflow Automation", highlight: true },
      { name: "AI Automation", highlight: true },
      { name: "Webhooks" },
      { name: "Third-Party Integrations" },
      { name: "Microservices", highlight: true },
      { name: "System Integration" },
    ],
  },
];

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const dividerWidth = useTransform(scrollYProgress, [0, 0.35], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E0D8] dark:border-white/10 relative overflow-hidden"
    >
      {/* Subtle Graph Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-15 -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(196, 125, 90, 0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 1. Header & Section Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase">
            04 // TECHNICAL ECOSYSTEM & POSITIONING
          </span>
          <div className="h-px bg-[#E8E0D8] dark:bg-white/10 w-24 sm:w-40 overflow-hidden">
            <motion.div style={{ width: dividerWidth }} className="h-full bg-copper" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#1E1B18]/80 backdrop-blur-md border border-[#E8E0D8] dark:border-white/10 text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Core Engineering Disciplines</span>
        </div>
      </div>

      {/* 2. Editorial Headline & Subtitle */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-[1.12]">
          Positioned for <span className="text-copper">applied intelligence</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A4340] dark:text-[#D6D3D1] font-normal leading-relaxed">
          Bridging cutting-edge agentic workflows and production LLMs with enterprise systems, scalable cloud data infrastructure, and full-stack engineering.
        </p>
      </div>

      {/* 3. Branded Infinite Marquee (Effortless proof of stack) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="mb-14 sm:mb-20 -mx-6 sm:-mx-8 lg:-mx-12 py-3 border-y border-[#E8E0D8] dark:border-white/10 bg-[#FEFCF9]/60 dark:bg-[#161311]/60 backdrop-blur-md"
      >
        <TechPillMarquee speed={38} direction="left" />
      </motion.div>

      {/* 4. 2x2 Wide Architectural Dossier Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {DISCIPLINES.map((disc, idx) => {
          const Icon = disc.icon;
          return (
            <motion.div
              key={disc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative p-7 sm:p-9 rounded-[30px] bg-[#FEFCF9]/95 dark:bg-[#1C1816]/95 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-[0_4px_24px_rgba(26,22,20,0.03)] transition-all duration-300 group overflow-hidden flex flex-col justify-between ${disc.glowAccent}`}
            >
              {/* Top Accent Hairline */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/40 group-hover:via-copper to-transparent transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div>
                {/* Header Row: Icon, Category Name, and Luxury Watermark Index */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 ${disc.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-copper font-bold tracking-widest uppercase block">
                        // DISCIPLINE {disc.id}
                      </span>
                      <span className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E] font-medium">
                        {disc.roleTag}
                      </span>
                    </div>
                  </div>

                  <span className="text-3xl sm:text-4xl font-display font-black text-[#E8E0D8] dark:text-white/[0.08] select-none group-hover:text-copper/30 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Architecture Narrative */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper transition-colors leading-snug mb-2.5">
                    {disc.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A4340] dark:text-[#C5BEB8] leading-relaxed font-normal">
                    {disc.tagline}
                  </p>
                </div>

                {/* Structured Flowing Tech Pills */}
                <div className="pt-5 border-t border-[#E8E0D8]/70 dark:border-white/[0.08] flex flex-wrap gap-2">
                  {disc.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 select-none cursor-default ${
                        skill.highlight
                          ? 'bg-[#1A1614] text-white dark:bg-white/[0.12] dark:text-white border border-transparent font-medium shadow-xs hover:bg-copper hover:text-white hover:scale-105'
                          : 'bg-[#FAF7F2] dark:bg-white/[0.03] border border-[#E8E0D8] dark:border-white/[0.06] text-[#4A4340] dark:text-[#D6D3D1] hover:border-copper/50 hover:text-copper hover:scale-105'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Production Spec Bar */}
              <div className="mt-7 pt-4 border-t border-[#E8E0D8]/70 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
                <div className="flex items-center gap-2 text-[#4A4340] dark:text-[#D6D3D1]">
                  <span className="w-2 h-2 rounded-full bg-copper" />
                  <span className="font-medium text-[11px] sm:text-xs tracking-wide">
                    {disc.metric}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-copper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;


