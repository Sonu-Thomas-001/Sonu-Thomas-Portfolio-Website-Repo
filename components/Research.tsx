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
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Texture - Graph Paper Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Microscope className="w-4 h-4" />
            <span>Academic Inquiry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Research & Explorations</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Deepening conceptual understanding through academic study, literature reviews, and theoretical analysis of emerging technologies.
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
              className={`bg-dark border border-white/10 rounded-r-xl rounded-l-sm p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group relative ${topic.color} border-l-4`}
            >
              {/* Paper Corner Fold Effect */}
              <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-t-white/5 border-r-surface group-hover:border-t-primary/20 transition-colors"></div>

              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                   <BookOpen className="w-3 h-3" />
                   {topic.field}
                </span>
                <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-mono text-primary border border-white/5">
                    {topic.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                {topic.title}
              </h3>

              <div className="relative pl-4 border-l-2 border-white/10 mb-6">
                 <p className="text-sm text-slate-400 leading-relaxed italic">
                  "{topic.abstract}"
                 </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {topic.keywords.map((keyword, kIdx) => (
                    <span key={kIdx} className="text-[10px] px-2 py-1 rounded-full bg-surface border border-white/10 text-slate-400">
                        #{keyword}
                    </span>
                ))}
              </div>

              {/* Hover Interaction */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-white/10 text-white">
                    <FileText className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};