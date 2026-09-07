import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Bot, Terminal, Workflow, Sparkles, ArrowUpRight } from 'lucide-react';

const EXPERIMENTS = [
  {
    title: "Conversational SQL Interface",
    tag: "AI / NLP",
    desc: "A natural language to SQL converter helping non-tech teams access database insights instantly without writing queries.",
    status: "Prototype",
    icon: Bot,
    color: "text-indigo-600 bg-indigo-50 border-indigo-200"
  },
  {
    title: "Self-Healing Infrastructure",
    tag: "DevOps",
    desc: "An automated monitoring agent that detects configuration drift and auto-triggers remediation workflows.",
    status: "Concept",
    icon: Terminal,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200"
  },
  {
    title: "Personal Brand AI Avatar",
    tag: "GenAI",
    desc: "A fine-tuned LLM chatbot trained on resume and portfolio data to answer recruiter queries in real-time.",
    status: "In Progress",
    icon: Sparkles,
    color: "text-purple-600 bg-purple-50 border-purple-200"
  }
];

export const Experiments: React.FC = () => {
  return (
    <section className="py-24 bg-page relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>The Lab</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Ideas & Experiments
            </h2>
            <p className="text-slate-600 max-w-xl mt-3 text-base">
              A sandbox for exploratory concepts, internal tooling prototypes, and experimental AI agent workflows.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="text-right text-xs text-slate-500 font-mono">
              // Innovation Status: <span className="text-emerald-600 font-semibold">ACTIVE</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXPERIMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-7 hover:border-primary/40 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl border ${item.color} group-hover:scale-105 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-slate-100 text-slate-600">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {item.title}
                </h3>
                
                <div className="text-xs font-mono text-primary font-semibold mb-4 flex items-center gap-1.5">
                  <Workflow className="w-3 h-3" />
                  <span>{item.tag}</span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-primary text-xs font-semibold pt-4 border-t border-slate-100">
                <span>Explore Architecture</span> 
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};