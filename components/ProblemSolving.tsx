import React from 'react';
import { motion } from 'framer-motion';
import { Search, Scale, PenTool, Rocket, BarChart3, ChevronRight, ChevronDown } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "Understand the Problem",
    desc: "I begin by deeply engaging with stakeholders to separate symptoms from root causes, defining clear scope and success metrics.",
    icon: Search,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    id: 2,
    title: "Analysis",
    subtitle: "Risk & Impact Assessment",
    desc: "Evaluating technical feasibility, compliance requirements, and potential system risks to ensure stability before writing a single line of code.",
    icon: Scale,
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    id: 3,
    title: "Design",
    subtitle: "Strategic Solutioning",
    desc: "Architecting modular, scalable solutions. I focus on long-term maintainability and efficient data flow rather than quick fixes.",
    icon: PenTool,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    id: 4,
    title: "Execution",
    subtitle: "Safe Implementation",
    desc: "Rolling out changes using agile methodologies with robust rollback plans, automated testing, and phased deployments.",
    icon: Rocket,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    id: 5,
    title: "Review",
    subtitle: "Measure & Optimize",
    desc: "Post-deployment monitoring against KPIs. I analyze performance data to identify further optimization opportunities.",
    icon: BarChart3,
    color: "text-pink-400",
    bg: "bg-pink-400/10"
  }
];

export const ProblemSolving: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark/50" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How I Solve Problems</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A disciplined, end-to-end framework ensuring every solution is effective, compliant, and scalable.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-5 gap-6">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left group"
              >
                {/* Connector Lines */}
                {idx < STEPS.length - 1 && (
                  <>
                    {/* Desktop Connector */}
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-white/5 z-0">
                      <div className="absolute right-0 -top-1.5 text-white/10">
                         <ChevronRight size={16} />
                      </div>
                    </div>
                    {/* Mobile Connector */}
                    <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-white/5 z-0 flex items-end justify-center pb-1">
                        <ChevronDown size={16} className="text-white/10" />
                    </div>
                  </>
                )}

                {/* Step Number Badge */}
                <div className="relative z-10 mb-4 bg-surface border border-white/10 rounded-full w-12 h-12 flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                  <span className="text-sm font-bold text-slate-300">{step.id}</span>
                  <div className={`absolute -right-1 -bottom-1 w-5 h-5 rounded-full ${step.bg} ${step.color} flex items-center justify-center`}>
                    <step.icon size={10} strokeWidth={3} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full bg-dark/50 border border-white/5 rounded-2xl p-5 hover:bg-dark hover:border-white/10 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};