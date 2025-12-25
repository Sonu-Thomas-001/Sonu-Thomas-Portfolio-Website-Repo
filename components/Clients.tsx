import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, GraduationCap, Briefcase } from 'lucide-react';

const BRANDS = [
  { 
    name: "HCLTech", 
    label: "Enterprise", 
    icon: Building2 
  },
  { 
    name: "IIT Guwahati", 
    label: "Academic", 
    icon: GraduationCap 
  },
  { 
    name: "Xbean International", 
    label: "Agency", 
    icon: Globe 
  },
  { 
    name: "Private Clients", 
    label: "Freelance", 
    icon: Briefcase 
  }
];

export const Clients: React.FC = () => {
  return (
    <section className="py-16 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10"
        >
          Privileged to collaborate with
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center gap-3 cursor-default"
            >
              {/* Icon Container - acts as logo */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-400 group-hover:text-primary dark:group-hover:text-white group-hover:border-primary/20 dark:group-hover:border-white/10 group-hover:shadow-lg transition-all duration-300">
                <brand.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {brand.name}
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-600 group-hover:text-primary transition-colors duration-300 font-medium">
                  {brand.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};