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
    color: "text-cyan-400"
  },
  {
    title: "Self-Healing Infrastructure",
    tag: "DevOps",
    desc: "An automated monitoring agent that detects configuration drift and auto-triggers Ansible playbooks for remediation.",
    status: "Concept",
    icon: Terminal,
    color: "text-emerald-400"
  },
  {
    title: "Personal Brand AI Avatar",
    tag: "GenAI",
    desc: "A fine-tuned LLM chatbot trained on my resume and portfolio data to answer recruiter queries in real-time.",
    status: "In Progress",
    icon: Sparkles,
    color: "text-purple-400"
  }
];

export const Experiments: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
              <FlaskConical className="w-4 h-4" />
              <span>The Lab</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Ideas & Experiments</h2>
            <p className="text-slate-400 max-w-xl">
              A sandbox for exploratory concepts, internal tooling ideas, and innovation that hasn't hit production yet.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="text-right text-sm text-slate-500 font-mono">
              // Innovation Status: <span className="text-emerald-400 animate-pulse">ACTIVE</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {EXPERIMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-surface/30 border border-dashed border-white/10 rounded-2xl p-6 hover:bg-surface hover:border-solid hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-medium uppercase tracking-wider bg-white/5 text-slate-400 border border-white/5">
                  {item.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                {item.title}
              </h3>
              
              <div className="text-xs font-mono text-slate-500 mb-4 flex items-center gap-2">
                <Workflow className="w-3 h-3" />
                {item.tag}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {item.desc}
              </p>

              <div className="flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Explore Concept <ArrowUpRight className="w-3 h-3" />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};