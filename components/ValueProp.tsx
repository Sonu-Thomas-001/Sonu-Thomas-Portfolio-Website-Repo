import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Layout, TrendingUp, Cpu } from 'lucide-react';

const SERVICES = [
  {
    title: "Enterprise Change",
    subtitle: "Management",
    desc: "Orchestrating complex production changes with zero downtime, rigorous risk analysis, and full compliance.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    shadow: "shadow-emerald-400/20"
  },
  {
    title: "AI-driven",
    subtitle: "Automation",
    desc: "Leveraging data science and machine learning models to automate workflows and predict operational risks.",
    icon: BrainCircuit,
    color: "text-purple-400",
    shadow: "shadow-purple-400/20"
  },
  {
    title: "Scalable Web",
    subtitle: "Solutions",
    desc: "Building responsive, high-performance web applications tailored for business growth and user engagement.",
    icon: Layout,
    color: "text-primary",
    shadow: "shadow-primary/20"
  },
  {
    title: "Process",
    subtitle: "Optimization",
    desc: "Streamlining workflows through rigorous system analysis and strategic automation implementation.",
    icon: TrendingUp,
    color: "text-orange-400",
    shadow: "shadow-orange-400/20"
  }
];

export const ValueProp: React.FC = () => {
  return (
    <section className="py-24 bg-dark border-b border-white/5 relative overflow-hidden">
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Value Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 opacity-50">
             <div className="h-px w-12 bg-white"></div>
             <span className="text-xs uppercase tracking-widest text-white">Core Modules</span>
             <div className="h-px w-12 bg-white"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed">
            I help organizations <span className="text-white font-bold bg-white/5 px-2 py-0.5 rounded">minimize risk</span> and <span className="text-white font-bold bg-white/5 px-2 py-0.5 rounded">maximize innovation</span> by bridging the gap between stable enterprise operations and cutting-edge <span className="text-primary font-bold">AI solutions</span>.
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
              className="group bg-surface/50 border border-white/5 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent */}
              <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${service.color}`}></div>

              <div className={`w-14 h-14 rounded-lg bg-dark border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                <div className={`absolute inset-0 ${service.shadow} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`}></div>
                <service.icon className={`w-7 h-7 ${service.color} relative z-10`} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {service.title} <br />
                <span className={`text-sm font-normal ${service.color} opacity-80`}>{service.subtitle}</span>
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed mt-4 border-t border-white/5 pt-4">
                {service.desc}
              </p>
              
              {/* Tech Decor */}
              <div className="absolute top-4 right-4">
                 <Cpu className="w-4 h-4 text-white/5 group-hover:text-white/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};