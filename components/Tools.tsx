import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LayoutTemplate, Settings, TerminalSquare, Cpu } from 'lucide-react';

const TOOLS_DATA = [
  {
    category: "Languages & Frameworks",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    items: ["Java", "Python", "JavaScript", "TypeScript", "React", "HTML5", "CSS3", "PL/SQL", "Shell Scripting"]
  },
  {
    category: "Databases & Storage",
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    items: ["Oracle Database", "MySQL", "PostgreSQL", "JDBC", "Data Structures"]
  },
  {
    category: "Platforms & CMS",
    icon: LayoutTemplate,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    items: ["WordPress", "Unix / Linux", "GitHub Pages", "Netlify", "Vercel"]
  },
  {
    category: "DevOps & Management",
    icon: Settings,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    items: ["Git", "GitHub", "ITIL Process", "Risk Analysis", "Compliance Auditing", "Cron Jobs"]
  },
  {
    category: "IDEs & Workflow",
    icon: TerminalSquare,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    items: ["VS Code", "NetBeans", "IntelliJ IDEA", "MS Excel", "PowerPoint"]
  },
  {
    category: "AI & Automation",
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    items: ["TensorFlow (Basic)", "Pandas", "NumPy", "Scikit-learn", "Automation Scripts"]
  }
];

export const Tools: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Tools & Technologies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My technical arsenal for building scalable applications and managing enterprise systems.
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
              whileHover={{ y: -5 }}
              className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${group.bg} ${group.color} border border-white/5`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((tool, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-3 py-1.5 rounded-lg bg-dark border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-primary/30 hover:bg-white/5 transition-all duration-200 cursor-default"
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