import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LayoutTemplate, Settings, TerminalSquare, Cpu, Box } from 'lucide-react';

const TOOLS_DATA = [
  {
    category: "Languages & Frameworks",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    items: ["Java", "Python", "JavaScript", "TypeScript", "React", "HTML5/CSS3"]
  },
  {
    category: "Databases & Storage",
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    items: ["Oracle DB", "MySQL", "PostgreSQL", "JDBC"]
  },
  {
    category: "Platforms & CMS",
    icon: LayoutTemplate,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    items: ["WordPress", "Linux/Unix", "GitHub Pages", "Vercel"]
  },
  {
    category: "DevOps & Ops",
    icon: Settings,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    items: ["Git", "ITIL", "Risk Analysis", "Compliance", "Cron"]
  },
  {
    category: "Workflow",
    icon: TerminalSquare,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    items: ["VS Code", "IntelliJ", "NetBeans", "MS Office"]
  },
  {
    category: "AI & ML",
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    items: ["TensorFlow", "Pandas", "NumPy", "Scikit-learn"]
  }
];

export const Tools: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-24 bg-dark relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-slate-500">
             <span className="text-primary">$</span>
             <span>list_tools --verbose --category=all</span>
             <span className="w-2 h-4 bg-primary animate-pulse ml-1"></span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
             The instruments I use to architect solutions and drive automation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TOOLS_DATA.map((group, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-dark border border-white/10 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Grid Background inside card */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white/5 ${group.color} border border-white/5`}>
                        <group.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors font-mono uppercase tracking-tight">
                        {group.category}
                    </h3>
                </div>
                <Box className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((tool, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-2 py-1 rounded-sm bg-surface border border-white/10 text-[10px] font-mono text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};