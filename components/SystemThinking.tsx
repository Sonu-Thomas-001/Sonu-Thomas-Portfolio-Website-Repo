import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Server, BrainCircuit, FileCheck, Network, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    id: '01',
    title: 'Risk & Impact Analysis',
    role: "The Foundation",
    desc: 'Every system change begins with rigorous impact assessment. I analyze historical data and system dependencies to minimize downtime and ensure seamless transitions.',
    icon: ShieldAlert,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20'
  },
  {
    id: '02',
    title: 'Scalable Architecture',
    role: "The Structure",
    desc: 'Designing for the future. I prioritize modular architectures that can scale horizontally while maintaining 99.9% availability under enterprise loads.',
    icon: Server,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20'
  },
  {
    id: '03',
    title: 'AI & Automation Layer',
    role: "The Intelligence",
    desc: 'Moving beyond static logic. I integrate predictive models and automated workflows to create self-optimizing systems that reduce manual intervention.',
    icon: BrainCircuit,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20'
  },
  {
    id: '04',
    title: 'Compliance & Governance',
    role: "The Standard",
    desc: 'Adhering to strict ITIL standards. Ensuring every line of code and configuration meets security protocols and audit requirements before hitting production.',
    icon: FileCheck,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  }
];

export const SystemThinking: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Technical Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Network className="w-4 h-4" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Architecture & System Thinking</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My engineering philosophy goes beyond coding—it's about building resilient, intelligent ecosystems that drive business value.
          </p>
        </motion.div>

        {/* Process Diagram Layout */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-full"
              >
                {/* Connector Arrow (Desktop) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-white/20">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                <div className={`h-full bg-surface/50 backdrop-blur-sm border ${step.border} rounded-2xl p-6 hover:bg-surface hover:shadow-2xl transition-all duration-300 flex flex-col`}>
                  {/* Step Number */}
                  <div className="text-xs font-mono font-bold text-slate-500 mb-4 tracking-widest">
                    STEP {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                    {step.role}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Bottom Highlight */}
                  <div className={`mt-auto pt-4 flex justify-end`}>
                    <div className={`h-1 w-12 rounded-full ${step.bg.replace('/10', '')}`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};