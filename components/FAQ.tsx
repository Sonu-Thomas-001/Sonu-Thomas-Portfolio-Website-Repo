import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Are you open to freelance or contract work?",
    answer: "Yes, I am currently accepting select freelance projects, particularly those involving full-stack web development, WordPress optimization, and automation scripting. I am also open to long-term consulting contracts."
  },
  {
    question: "What is your primary technology stack?",
    answer: "For web development, I specialize in the React ecosystem (Next.js, TypeScript, Tailwind CSS). For backend and enterprise systems, I rely on Java, Python, and SQL/Oracle DB. I also have experience with shell scripting for automation."
  },
  {
    question: "Do you handle enterprise-level projects?",
    answer: "Absolutely. My full-time role at HCLTech as a Production Change Manager involves orchestrating critical changes for large-scale enterprise environments. I understand the importance of compliance, risk analysis, and zero-downtime deployments."
  },
  {
    question: "Where are you located and can you work remotely?",
    answer: "I am based in Kannur, Kerala, India. I am fully equipped for remote work and have experience collaborating with cross-functional teams across different time zones."
  },
  {
    question: "How do you approach AI integration in projects?",
    answer: "I view AI as a tool for efficiency. Whether it's integrating an LLM for customer support, using predictive models for data analysis, or automating routine tasks, I focus on practical, high-impact implementations."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-lg">
            Quick answers to the most common questions regarding my work, availability, and technical expertise.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/5 rounded-2xl bg-dark/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-primary' : 'text-white'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full ${openIndex === idx ? 'bg-primary/20 text-primary' : 'bg-white/5 text-slate-400'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};