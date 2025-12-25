import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, TrendingUp, AlertTriangle, Lightbulb, CheckCircle2, FileText, XCircle, Database, Target } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  constraints: string[];
  solution: string;
  tech: string[];
  results: {
    metric: string;
    label: string;
  }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    title: "Automated Change Risk Assessment System",
    category: "Enterprise Automation",
    summary: "Reducing manual risk review time by 35% through an intelligent scoring algorithm for production changes.",
    problem: "Processing 500+ weekly production change requests manually led to operational bottlenecks, inconsistent risk categorization, and increased potential for human error in compliance checks.",
    constraints: [
      "Strict ITIL compliance requirements",
      "Unstructured data in ticket descriptions",
      "Zero-tolerance for false negatives in conflict detection"
    ],
    solution: "Designed a Python-based risk analyzer that integrates with the ITSM tool. The system parses change tickets using keyword analysis and historical failure data to assign a 'Risk Score' automatically. High-risk changes are flagged for deep review, while low-risk standard changes are fast-tracked.",
    tech: ["Python", "SQL", "Jenkins", "ITSM API", "Regex/NLP"],
    results: [
      { metric: "35%", label: "Reduction in Review Time" },
      { metric: "15+", label: "Conflicts Caught Monthly" },
      { metric: "100%", label: "Compliance Adherence" }
    ]
  },
  {
    id: "cs2",
    title: "High-Traffic News Portal Optimization",
    category: "Web Engineering",
    summary: "Migrating a legacy CMS to a Headless architecture, achieving 99.9% uptime and sub-2s load times.",
    problem: "A regional news client faced frequent server crashes during breaking news spikes. Their legacy monolithic CMS was slow (5s+ load time) and difficult to scale, hurting SEO rankings and ad revenue.",
    constraints: [
      "10,000+ content archives to migrate",
      "Zero downtime during transition",
      "Limited hosting budget"
    ],
    solution: "Architected a decoupled solution using a Headless WordPress backend for content management and a Next.js frontend for static delivery. Implemented aggressive caching via CDN and optimized database queries for the migration script.",
    tech: ["Next.js", "WordPress Headless", "MySQL", "Redis", "CDN"],
    results: [
      { metric: "300%", label: "Increase in Page Speed" },
      { metric: "99.9%", label: "Uptime During Spikes" },
      { metric: "40%", label: "Organic Traffic Growth" }
    ]
  }
];

export const CaseStudies: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  const selectedStudy = CASE_STUDIES.find(cs => cs.id === selectedId);

  return (
    <section className="py-24 bg-surface relative">
       {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dark to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            <span>Deep Dive</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Case Studies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A closer look at complex challenges I've solved, detailing the process from problem definition to measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <motion.div
              key={study.id}
              layoutId={`card-${study.id}`}
              onClick={() => setSelectedId(study.id)}
              className="group cursor-pointer bg-dark border border-white/10 rounded-2xl p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-xs font-bold text-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {study.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {study.summary}
                </p>
                
                <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Read Analysis <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedId && selectedStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-dark/90 backdrop-blur-md"
              />
              
              <motion.div
                layoutId={`card-${selectedId}`}
                className="w-full max-w-4xl bg-surface border border-white/10 rounded-3xl shadow-2xl relative z-10 max-h-[90vh] flex flex-col overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-white/10 bg-dark/50 flex justify-between items-start sticky top-0 z-20 backdrop-blur-sm">
                  <div>
                    <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
                        {selectedStudy.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedStudy.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="p-8 overflow-y-auto custom-scrollbar">
                    <div className="grid md:grid-cols-3 gap-12">
                        
                        {/* Left Column: Context */}
                        <div className="md:col-span-2 space-y-10">
                            {/* Problem */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-red-400">
                                    <AlertTriangle className="w-6 h-6" />
                                    <h4 className="text-lg font-bold">The Problem</h4>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {selectedStudy.problem}
                                </p>
                            </div>

                            {/* Constraints */}
                             <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <div className="flex items-center gap-3 text-orange-400 mb-4">
                                    <XCircle className="w-5 h-5" />
                                    <h4 className="font-bold">Key Constraints</h4>
                                </div>
                                <ul className="space-y-2">
                                    {selectedStudy.constraints.map((constraint, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5" />
                                            {constraint}
                                        </li>
                                    ))}
                                </ul>
                             </div>

                             {/* Solution */}
                             <div className="space-y-4">
                                <div className="flex items-center gap-3 text-emerald-400">
                                    <Lightbulb className="w-6 h-6" />
                                    <h4 className="text-lg font-bold">The Solution</h4>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    {selectedStudy.solution}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Results & Tech */}
                        <div className="space-y-8">
                             {/* Measurable Results */}
                             <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6">
                                <div className="flex items-center gap-3 text-primary mb-6">
                                    <TrendingUp className="w-5 h-5" />
                                    <h4 className="font-bold">Impact</h4>
                                </div>
                                <div className="space-y-6">
                                    {selectedStudy.results.map((result, i) => (
                                        <div key={i}>
                                            <div className="text-3xl font-bold text-white mb-1">
                                                {result.metric}
                                            </div>
                                            <div className="text-sm text-primary/80 font-medium">
                                                {result.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             </div>

                             {/* Tech Stack */}
                             <div>
                                <div className="flex items-center gap-3 text-slate-300 mb-4">
                                    <Database className="w-5 h-5" />
                                    <h4 className="font-bold">Technologies</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {selectedStudy.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-dark border border-white/10 text-xs font-medium text-slate-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                             </div>
                        </div>

                    </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};