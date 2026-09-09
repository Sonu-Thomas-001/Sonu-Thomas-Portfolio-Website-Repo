import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Search, Sparkles, SlidersHorizontal } from 'lucide-react';
import { BLOG_DATA } from '../constants';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    BLOG_DATA.forEach(item => {
      if (item.category) set.add(item.category);
    });
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return BLOG_DATA.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        post.title.toLowerCase().includes(q) || 
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags?.some(tag => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Ribbon & Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/20 text-copper text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Publications &bull; Research Ledger</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight">
              Selected Technical Articles
            </h2>
            <p className="text-[#574F4A] dark:text-[#C5BEB7] max-w-xl mt-3 text-base font-light leading-relaxed">
              Deep dives into production multi-agent workflows, parameter-efficient fine-tuning, high-concurrency systems, and real-time inference.
            </p>
          </div>

          {/* Author Research Profile Card */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm backdrop-blur-md shrink-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-copper/30 shrink-0">
              <img
                src="/images/Professional%20Pic%205.png"
                alt="Sonu Thomas — AI Engineering Author"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#1C1816]" />
            </div>
            <div>
              <div className="text-xs font-display font-bold text-[#1A1614] dark:text-[#FDFBF7] leading-tight">Sonu Thomas</div>
              <div className="text-[10px] font-mono text-copper font-medium mt-0.5">Author &bull; AI Systems Architect</div>
              <div className="text-[10px] font-mono text-[#78716C] dark:text-[#9C948B]">HCLTech &bull; IIT Guwahati Alumni</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Controls: Search Bar & Category Pills */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, architecture, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/80 dark:bg-[#1E1B18]/80 border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-[#EDE5DC] placeholder:text-[#A8A29E] text-xs font-mono focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/30 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-copper"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] flex items-center gap-1.5 self-end sm:self-center">
              <SlidersHorizontal className="w-3.5 h-3.5 text-copper" />
              <span>Showing {filteredArticles.length} of {BLOG_DATA.length} dispatches</span>
            </div>
          </div>

          {/* Category Horizontal Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#1A1614] text-white dark:bg-[#EDE5DC] dark:text-[#1A1614] font-semibold shadow-xs'
                      : 'bg-white/70 dark:bg-white/[0.04] text-[#78716C] dark:text-[#A8A29E] border border-[#E8E0D8] dark:border-white/10 hover:border-copper/40 hover:text-copper'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <AnimatePresence mode="popLayout">
          {filteredArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-12 text-center rounded-3xl bg-[#FEFCF9]/80 dark:bg-[#1C1816]/80 border border-[#E8E0D8] dark:border-white/10 my-8"
            >
              <Sparkles className="w-8 h-8 text-copper mx-auto mb-3 opacity-60" />
              <h3 className="font-display font-semibold text-lg text-[#1A1614] dark:text-[#FDFBF7]">No matching articles found</h3>
              <p className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] mt-1">Try searching another term or select "All" categories.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-full bg-copper text-white text-xs font-mono hover:bg-[#B85D36] transition-colors"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((post, idx) => (
                <motion.article
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="group flex flex-col bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 border border-[#E8E0D8] dark:border-white/10 rounded-3xl overflow-hidden hover:border-copper/50 shadow-[0_4px_20px_rgba(26,22,20,0.04)] hover:shadow-[0_16px_36px_rgba(196,125,90,0.12)] hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
                >
                  {/* Top Specular Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                  {/* Article Hero Image with Gradient Vignette */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#EDE5DC] dark:bg-[#12100E]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/20 to-transparent" />
                    
                    {/* Top Left: Category Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141210]/80 backdrop-blur-md border border-white/20 text-[#EDE5DC] text-[11px] font-mono font-medium shadow-sm">
                        <Tag className="w-3 h-3 text-copper" />
                        <span>{post.category}</span>
                      </div>
                    </div>

                    {/* Top Right: Featured Pip */}
                    {post.featured && (
                      <div className="absolute top-3.5 right-3.5 z-20">
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-copper text-white text-[10px] font-mono font-semibold shadow-md">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Article Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2.5">
                      {/* Metadata Row */}
                      <div className="flex items-center gap-3 text-[11px] font-mono text-[#78716C] dark:text-[#9C948B]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-copper" />
                          {post.date}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#A8A29E]" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper transition-colors leading-snug">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[#574F4A] dark:text-[#C5BEB7] text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer: Tags & Link */}
                    <div className="pt-4 border-t border-[#E8E0D8] dark:border-white/10 space-y-3">
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5">
                          {post.tags.slice(0, 3).map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E0D8]/40 dark:bg-white/[0.05] text-[#78716C] dark:text-[#A8A29E]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs font-semibold text-copper group-hover:text-[#B85D36] dark:group-hover:text-[#F0A584] transition-colors">
                        <span>Read Technical Paper</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};