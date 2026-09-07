import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Database, Network, Bot, Sparkles, CheckCircle2, CircleDashed, Clock } from 'lucide-react';

const ROADMAP = [
  {
    phase: "Phase 1: Foundations",
    status: "Completed",
    period: "2023 - 2024",
    title: "Building the Base",
    desc: "Mastering the mathematical and programmatic fundamentals required for robust AI systems.",
    items: ["Advanced Calculus & Linear Algebra", "Python for Data Science", "Data Structures & Algorithms", "Statistical Analysis"],
    icon: Binary,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    statusIcon: CheckCircle2,
    statusColor: "text-emerald-500"
  },
  {
    phase: "Phase 2: Core ML & Data",
    status: "In Progress",
    period: "Current Focus",
    title: "Data Science & Machine Learning",
    desc: "Developing predictive models and deriving actionable insights from complex datasets.",
    items: ["Supervised & Unsupervised Learning", "Feature Engineering", "Scikit-learn & Pandas", "Data Visualization"],
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    statusIcon: Clock,
    statusColor: "text-amber-500"
  },
  {
    phase: "Phase 3: Deep Learning",
    status: "Upcoming",
    period: "2025 - 2026",
    title: "Neural Networks & NLP",
    desc: "Diving deep into unstructured data, computer vision, and language processing technologies.",
    items: ["Deep Neural Networks", "PyTorch / TensorFlow", "Natural Language Processing", "Computer Vision"],
    icon: Network,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    statusIcon: CircleDashed,
    statusColor: "text-slate-500"
  },
  {
    phase: "Phase 4: Future Vision",
    status: "Goal",
    period: "Long Term",
    title: "AI Systems Architect",
    desc: "Designing autonomous agents and intelligent ecosystems that drive enterprise automation.",
    items: ["Large Language Models (LLMs)", "Generative AI Agents", "MLOps & Deployment", "Ethical AI Systems"],
    icon: Bot,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    statusIcon: Sparkles,
    statusColor: "text-pink-500"
  }
];

export const AIJourney: React.FC = () => {
  return (
    <section id="ai-journey" className="py-24 bg-page relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Future Roadmap</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">AI Architecture Trajectory</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            A deliberate progression from software engineering roots to designing intelligent, autonomous production systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:translate-x-0 hidden md:block"></div>

          <div className="space-y-12">
            {ROADMAP.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node (Desktop Center) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-slate-300 rounded-full items-center justify-center z-20 shadow-soft-sm">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="group bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-primary/40 shadow-soft-md hover:shadow-soft-lg transition-all duration-300">
                      
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-1">{item.phase}</span>
                                <h3 className="font-display text-xl font-bold text-slate-900">{item.title}</h3>
                            </div>
                        </div>
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold ${item.statusColor}`}>
                            <item.statusIcon className="w-3.5 h-3.5" />
                            {item.status}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      {/* Skills/Items Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {item.items.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                                <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                                {skill}
                            </div>
                        ))}
                      </div>

                      {/* Decorative Period Badge */}
                      <div className="absolute -top-3 right-8 px-3 py-0.5 bg-white border border-slate-200/90 rounded-full text-xs font-mono text-slate-600 shadow-soft-sm">
                        {item.period}
                      </div>

                    </div>
                    
                    {/* Connector Line (Mobile) */}
                    <div className="md:hidden absolute left-8 -top-12 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent -z-10"></div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add BrainCircuit icon locally since it might be missing in lucide import in some versions
const BrainCircuit = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 12.578a4 4 0 0 1 .399-.4" />
      <path d="M20.124 12.178a4 4 0 0 1 .399.4" />
    </svg>
);