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
    <section id="ai-journey" className="py-24 bg-dark relative overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <BrainCircuit className="w-4 h-4" />
            <span>Future Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">My AI Journey</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A strategic progression from software engineering roots to becoming an architect of intelligent, autonomous systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-x-1/2 md:translate-x-0 hidden md:block"></div>

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
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-dark border-4 border-dark rounded-full items-center justify-center z-20">
                    <div className={`w-4 h-4 rounded-full ${isEven ? 'bg-slate-700' : 'bg-slate-700'} ring-4 ring-white/5`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="group bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-surface hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                      
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase block mb-1">{item.phase}</span>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            </div>
                        </div>
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium ${item.statusColor}`}>
                            <item.statusIcon className="w-3.5 h-3.5" />
                            {item.status}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      {/* Skills/Items Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {item.items.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-sm text-slate-300">
                                <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                                {skill}
                            </div>
                        ))}
                      </div>

                      {/* Decorative Period Badge */}
                      <div className="absolute -top-3 right-8 px-3 py-1 bg-dark border border-white/10 rounded-full text-xs font-mono text-slate-400 shadow-sm">
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