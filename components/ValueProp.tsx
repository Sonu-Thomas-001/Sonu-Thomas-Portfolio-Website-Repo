import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Layout, TrendingUp } from 'lucide-react';

const SERVICES = [
  {
    title: "Enterprise Change Management",
    desc: "Orchestrating complex production changes with zero downtime, rigorous risk analysis, and full compliance.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "AI-driven Automation",
    desc: "Leveraging data science and machine learning models to automate workflows and predict operational risks.",
    icon: BrainCircuit,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "Scalable Web Solutions",
    desc: "Building responsive, high-performance web applications tailored for business growth and user engagement.",
    icon: Layout,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Process Optimization",
    desc: "Streamlining workflows through rigorous system analysis and strategic automation implementation.",
    icon: TrendingUp,
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  }
];

export const ValueProp: React.FC = () => {
  return (
    <section className="py-20 bg-dark border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed">
            I help organizations <span className="text-white font-bold">minimize risk</span> and <span className="text-white font-bold">maximize innovation</span> by bridging the gap between stable enterprise operations and cutting-edge <span className="text-primary">AI solutions</span>.
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-surface border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};