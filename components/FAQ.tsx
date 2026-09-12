import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQS = [
  {
    question: "Are you open to freelance or contract work?",
    answer: "Yes, I am currently accepting select freelance projects, particularly those involving full-stack web development, AI/LLM integration, and automation scripting. I am also open to long-term consulting contracts."
  },
  {
    question: "What is your primary technology stack?",
    answer: "For AI engineering, I work with Google Gemini, Anthropic Claude, LangGraph, and ChromaDB-backed RAG pipelines. For web development, I specialize in React (Next.js, TypeScript, Tailwind CSS). For backend and enterprise systems, I rely on Python, Java, and SQL/PostgreSQL."
  },
  {
    question: "Do you handle enterprise-level projects?",
    answer: "Absolutely. My full-time role at HCLTech involves orchestrating critical change governance for large-scale enterprise environments. I understand the importance of compliance, risk analysis, and zero-downtime deployments."
  },
  {
    question: "Where are you located and can you work remotely?",
    answer: "I am based in Kannur, Kerala, India. I am fully equipped for remote work and have experience collaborating with cross-functional teams across different time zones."
  },
  {
    question: "How do you approach AI integration in projects?",
    answer: "I view AI as a tool for measurable efficiency. Whether it's an autonomous agent for incident triage, a RAG pipeline for enterprise knowledge, or a predictive model for data analysis, I focus on practical, production-hardened implementations with deterministic guardrails."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="pb-6 mb-8 border-b border-[#E8E0D8] dark:border-white/10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1614] dark:text-[#FDFBF7]">
          Frequently asked questions
        </h2>
        <p className="text-sm sm:text-base text-[#4A4340] dark:text-[#D6D3D1] mt-2">
          Quick answers on availability, technical scope, and how I work.
        </p>
      </div>

      <div className="space-y-1">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.question} className="border-b border-[#E8E0D8] dark:border-white/10">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className={`font-display font-medium text-base sm:text-lg transition-colors ${isOpen ? 'text-copper' : 'text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 p-1.5 rounded-full border transition-colors ${isOpen ? 'bg-copper border-copper text-white' : 'border-[#E8E0D8] dark:border-white/15 text-[#78716C] dark:text-[#A8A29E]'}`}>
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm sm:text-base text-[#4A4340] dark:text-[#D6D3D1] leading-relaxed pb-5 pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
