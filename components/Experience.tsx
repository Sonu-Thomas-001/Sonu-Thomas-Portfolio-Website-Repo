import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Globe, Code, Building2, CheckCircle2, GitCommit, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const CompanyLogo = ({ company }: { company: string }) => {
  const companyLower = company.toLowerCase();
  
  if (companyLower.includes('hcl')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-[#005eb8] flex items-center justify-center text-white font-bold text-[10px] shadow-sm" title="HCLTech">
        HCL
      </div>
    );
  }
  if (companyLower.includes('self') || companyLower.includes('freelance')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm" title="Freelance">
        <Globe className="w-4 h-4" />
      </div>
    );
  }
  if (companyLower.includes('xbean')) {
    return (
      <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm" title="Xbean International">
        XB
      </div>
    );
  }
  
  return (
    <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
      <Building2 className="w-4 h-4" />
    </div>
  );
};

export const Experience: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  const getIcon = (role: string) => {
    if (role.toLowerCase().includes('intern') || role.toLowerCase().includes('scholar')) {
      return <GraduationCap className="w-4 h-4 text-primary" />;
    }
    if (role.toLowerCase().includes('freelance')) {
      return <Globe className="w-4 h-4 text-emerald-600" />;
    }
    if (role.toLowerCase().includes('software engineer')) {
      return <Building2 className="w-4 h-4 text-primary" />;
    }
    return <Code className="w-4 h-4 text-indigo-600" />;
  };

  return (
    <section ref={containerRef} id="experience" className="py-24 lg:py-32 bg-page relative overflow-hidden">
      
      <motion.div style={{ y: contentY }} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Professional Timeline
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            A chronological track record in enterprise software systems, full-stack engineering, 
            and intelligent automation workflows.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="relative">
          
          {/* Vertical Spine Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
          
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-slate-200 shadow-soft-sm z-10 flex items-center justify-center group-hover:border-primary">
                    {getIcon(item.role)}
                  </div>

                  {/* Desktop Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} w-full`}>
                    <div className="group bg-white border border-slate-200/90 hover:border-primary/40 rounded-3xl p-6 sm:p-8 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {item.period}
                        </div>
                        <CompanyLogo company={item.company} />
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-display font-bold text-xl text-slate-900 mb-1 group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-slate-500 mb-5 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{item.company}</span>
                      </div>

                      {/* Bullet Description */}
                      <ul className="space-y-3 mb-6">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      {item.tech && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                          {item.tech.map((t, i) => (
                            <span 
                              key={i} 
                              className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-mono font-medium text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </motion.div>
    </section>
  );
};