import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Server, BrainCircuit, FileCheck, Network, ChevronRight } from 'lucide-react';

const STEPS = [
  {
    id: '01',
    title: 'Risk & Impact Analysis',
    role: "The Foundation",
    desc: 'Rigorous impact assessment utilizing historical data to minimize downtime.',
    icon: ShieldAlert,
    color: 'text-amber-400',
    border: 'border-amber-400/20'
  },
  {
    id: '02',
    title: 'Scalable Architecture',
    role: "The Structure",
    desc: 'Modular design prioritizing 99.9% availability and horizontal scaling.',
    icon: Server,
    color: 'text-blue-400',
    border: 'border-blue-400/20'
  },
  {
    id: '03',
    title: 'AI & Automation',
    role: "The Intelligence",
    desc: 'Integrating predictive models for self-optimizing workflows.',
    icon: BrainCircuit,
    color: 'text-purple-400',
    border: 'border-purple-400/20'
  },
  {
    id: '04',
    title: 'Compliance',
    role: "The Standard",
    desc: 'Adhering to ITIL protocols and security audits before deployment.',
    icon: FileCheck,
    color: 'text-emerald-400',
    border: 'border-emerald-400/20'
  }
];

export const SystemThinking: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Blueprint Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <Network className="w-4 h-4" />
            <span>Methodology_v2.0</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Architecture & System Thinking</h2>
        </motion.div>

        {/* Process Diagram Layout */}
        <div className="relative">
          {/* Animated Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0">
             <motion.div 
               className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
               animate={{ left: ["-10%", "110%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-full"
              >
                <div className={`h-full bg-dark/90 backdrop-blur-md border ${step.border} rounded-xl p-6 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col relative overflow-hidden`}>
                  {/* Status Light */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary group-hover:animate-ping"></div>

                  {/* Step ID */}
                  <div className="text-[10px] font-mono text-slate-500 mb-4 border-b border-white/5 pb-2">
                    NODE_{step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-white/5 ${step.color} flex items-center justify-center mb-4 border border-white/5`}>
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-3">
                    {step.role}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3 mt-auto">
                    {step.desc}
                  </p>
                </div>
                
                {/* Arrow (Desktop) */}
                 {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-white/10">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};