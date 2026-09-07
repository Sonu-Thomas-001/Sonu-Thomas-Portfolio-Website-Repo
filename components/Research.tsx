import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Microscope, Bookmark, Link as LinkIcon, Quote } from 'lucide-react';

const RESEARCH_TOPICS = [
  {
    title: "Optimizing LLMs for Enterprise ITSM",
    field: "Natural Language Processing",
    type: "Ongoing Analysis",
    abstract: "Investigating Parameter-Efficient Fine-Tuning (PEFT) methods, specifically LoRA (Low-Rank Adaptation), to adapt Large Language Models for IT Service Management. The goal is to automate ticket classification and root cause analysis without the computational overhead of full fine-tuning.",
    keywords: ["Transformers", "LoRA", "Hugging Face", "Enterprise AI"],
    color: "border-l-blue-500"
  },
  {
    title: "Predictive Risk Modeling in DevOps",
    field: "Data Science",
    type: "Literature Review",
    abstract: "Exploring statistical approaches and machine learning classifiers to predict change failure rates in high-velocity production environments. Analyzing correlations between change volume, scheduling conflicts, and historical incident data to formulate a 'Risk Propensity Score'.",
    keywords: ["Logistic Regression", "Predictive Analytics", "ITIL", "Scikit-learn"],
    color: "border-l-emerald-500"
  },
  {
    title: "Object Detection Latency Analysis",
    field: "Computer Vision",
    type: "Comparative Study",
    abstract: "A comparative analysis of YOLOv8 versus Faster R-CNN architectures for real-time constraints. Focusing on the trade-offs between inference speed and detection accuracy in dynamic, low-compute environments.",
    keywords: ["CNNs", "YOLOv8", "Inference Efficiency", "Real-time CV"],
    color: "border-l-purple-500"
  }
];

export const Research: React.FC = () => {
  return (
    <section className="py-24 bg-page relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Microscope className="w-3.5 h-3.5" />
            <span>Academic Inquiry</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">Research & Explorations</h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Deepening conceptual understanding through academic study, literature reviews, and theoretical analysis of emerging AI technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {RESEARCH_TOPICS.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border border-slate-200/90 rounded-3xl p-8 hover:shadow-soft-lg transition-all duration-300 group relative ${topic.color} border-l-4`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                   <BookOpen className="w-3.5 h-3.5" />
                   {topic.field}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-semibold text-primary">
                    {topic.type}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                {topic.title}
              </h3>

              <div className="relative pl-4 border-l-2 border-slate-200 mb-6">
                 <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{topic.abstract}"
                 </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {topic.keywords.map((keyword, kIdx) => (
                    <span key={kIdx} className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
                        #{keyword}
                    </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};