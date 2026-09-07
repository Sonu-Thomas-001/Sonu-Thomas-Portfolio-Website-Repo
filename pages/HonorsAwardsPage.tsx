import React from 'react';
import { motion } from 'framer-motion';
import { Star, Crown, Calendar, Award, ArrowLeft, Trophy } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold text-sm mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>Honors & Distinctions</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Recognition & <br/>
            <span className="gradient-text">Awards</span>
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            Commendations received for technical performance, operational excellence, and innovation.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {AWARDS_DATA.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-amber-400/50 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Star className="w-7 h-7 fill-amber-500 text-amber-500" />
                </div>

                <div className="flex-grow w-full space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
                      {award.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60 whitespace-nowrap flex items-center gap-1.5 self-start">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {award.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Conferred by <span className="font-semibold text-slate-800">{award.issuer}</span></span>
                  </div>

                  {award.description && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {award.description.map((line, lIdx) => (
                        <li key={lIdx} className="text-sm text-slate-600 leading-relaxed">
                          • {line}
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
