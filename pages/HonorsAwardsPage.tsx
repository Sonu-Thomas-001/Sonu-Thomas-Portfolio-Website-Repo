import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AWARDS_DATA } from '../constants';
import { SEO } from '../components/SEO';

export const HonorsAwardsPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO 
        title="Honors & Awards | Sonu Thomas"
        description="Recognition and awards received by Sonu Thomas for technical excellence and impact."
        url="/awards"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-mono text-xs uppercase tracking-wider mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-2">
            Distinctions // Peer & Enterprise Recognition
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Recognition & <br />
            <span className="gradient-text">Awards</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-light leading-relaxed">
            Commendations received for technical performance, operational excellence, and engineering leadership.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-4">
            {AWARDS_DATA.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 hover:border-amber-400/50 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
                </div>

                <div className="flex-grow w-full space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                    <h3 className="font-display font-semibold text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
                      {award.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 whitespace-nowrap">
                      {award.date}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-slate-500">
                    Conferred by <strong className="text-slate-800 font-semibold">{award.issuer}</strong>
                  </p>

                  {award.description && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {award.description.map((line, lIdx) => (
                        <li key={lIdx} className="text-sm text-slate-600 font-light leading-relaxed">
                          &bull; {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
