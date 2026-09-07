import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { BLOG_DATA } from '../constants';

export const Blog: React.FC = () => {
  return (
    <section className="py-16 bg-page relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Thought Leadership</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Insights & Articles
            </h2>
            <p className="text-slate-600 max-w-xl mt-3 text-base">
              Writing on artificial intelligence, large language model applications, and enterprise systems engineering.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_DATA.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:border-primary/40 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-slate-800 text-xs font-mono font-semibold shadow-soft-sm">
                    <Tag className="w-3 h-3 text-primary" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-primary font-semibold text-xs group/link">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};