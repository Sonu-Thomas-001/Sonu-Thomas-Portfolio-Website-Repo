import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Briefcase, GraduationCap, Code2, User } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA, PERSONAL_DETAILS } from '../constants';

interface ResumeSectionProps {
  title: string;
  icon: React.ElementType;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, icon: Icon, isOpen, onClick, children }) => {
  return (
    <div className={`border rounded-xl transition-all duration-300 overflow-hidden mb-4 ${isOpen ? 'bg-surface border-primary/20 shadow-lg shadow-primary/5' : 'bg-surface border-white/10 hover:border-primary/20'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-lg transition-colors ${isOpen ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 text-slate-400'}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>{title}</h3>
            {!isOpen && <p className="text-xs text-slate-500 mt-1">Click to expand</p>}
          </div>
        </div>
        <div className={`p-2 rounded-full ${isOpen ? 'bg-white/10 text-white' : 'text-slate-500'}`}>
             <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-8 pt-2 border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const InteractiveResume: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('experience');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
            >
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium uppercase tracking-wider mb-4">
                        <User className="w-3 h-3" />
                        <span>Curriculum Vitae</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Interactive Resume</h2>
                    <p className="text-slate-400 max-w-lg">
                        Explore my professional background in detail. Click sections to expand or download the full PDF version.
                    </p>
                </div>
                <motion.a 
                    href={PERSONAL_DETAILS.resumeLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                >
                    <Download className="w-4 h-4" />
                    Download PDF
                </motion.a>
            </motion.div>

            <div className="space-y-4">
                {/* Experience Section */}
                <ResumeSection 
                    title="Professional Experience" 
                    icon={Briefcase} 
                    isOpen={openSection === 'experience'} 
                    onClick={() => toggleSection('experience')}
                >
                    <div className="space-y-10 pl-2">
                        {EXPERIENCE_DATA.map((job) => (
                            <div key={job.id} className="relative pl-8 border-l border-white/10 last:pb-0">
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-dark"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h4 className="text-white font-bold text-lg">{job.role}</h4>
                                    <span className="text-sm font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">{job.period}</span>
                                </div>
                                <p className="text-primary font-medium text-sm mb-4">{job.company}</p>
                                <ul className="space-y-2">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ResumeSection>

                {/* Skills Section */}
                <ResumeSection 
                    title="Technical Skills & Tools" 
                    icon={Code2} 
                    isOpen={openSection === 'skills'} 
                    onClick={() => toggleSection('skills')}
                >
                    <div className="grid gap-8 md:grid-cols-2">
                        {SKILLS_DATA.map((cat, idx) => (
                            <div key={idx}>
                                <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">{cat.category}</h5>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((skill, sIdx) => (
                                        <div key={sIdx} className="px-3 py-1.5 rounded-lg bg-dark border border-white/10 text-slate-300 text-sm hover:border-primary/30 hover:text-white transition-colors cursor-default">
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ResumeSection>

                {/* Education Section */}
                <ResumeSection 
                    title="Education" 
                    icon={GraduationCap} 
                    isOpen={openSection === 'education'} 
                    onClick={() => toggleSection('education')}
                >
                     <div className="grid gap-6">
                        {EDUCATION_DATA.map((edu, idx) => (
                            <div key={idx} className="bg-dark rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-3">
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{edu.institution}</h4>
                                        <p className="text-primary text-sm font-medium">{edu.degree}</p>
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                                        {edu.period}
                                    </span>
                                </div>
                                {edu.details && (
                                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 mt-4">
                                        {edu.details}
                                    </p>
                                )}
                            </div>
                        ))}
                     </div>
                </ResumeSection>
            </div>
        </div>
    </section>
  );
};