import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { BLOG_DATA } from '../constants';

export const Blog: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Thought Leadership</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Insights & Articles</h2>
            <p className="text-slate-400 max-w-xl">
              Thoughts on technology, systems engineering, and the future of AI in the enterprise.
            </p>
          </div>
          
          <a href="#" className="group hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_DATA.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark/80 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg">
                    <Tag className="w-3 h-3 text-primary" />
                    {post.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <a href={post.link} className="focus:outline-none">
                    {post.title}
                  </a>
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-white/5 mt-auto">
                  <a href={post.link} className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                View All Posts <ArrowRight className="w-4 h-4" />
            </a>
        </div>

      </div>
    </section>
  );
};