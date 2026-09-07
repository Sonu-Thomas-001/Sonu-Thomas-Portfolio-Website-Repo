import React from 'react';
import { motion } from 'framer-motion';
import { Users, HandHeart, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VOLUNTEERING_DATA } from '../constants';
import { SEO } from '../components/SEO';

export const VolunteeringPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO 
        title="Volunteering & Leadership | Sonu Thomas"
        description="Community initiatives, mentoring, and leadership contributions by Sonu Thomas."
        url="/volunteering"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <HandHeart className="w-3.5 h-3.5 text-rose-600" />
            <span>Community & Leadership</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Volunteering & <br/>
            <span className="gradient-text">Social Impact</span>
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            Giving back through technical mentorship, developer community organizing, and impact-driven initiatives.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {VOLUNTEERING_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-rose-400/50 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="w-7 h-7" />
                </div>

                <div className="flex-grow w-full space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-rose-600 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-primary">{item.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60 whitespace-nowrap flex items-center gap-1.5 self-start">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {item.period}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {item.description.map((desc, dIdx) => (
                      <p key={dIdx} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </p>
                    ))}
                  </div>

                  {item.skills && (
                    <div className="flex flex-wrap gap-2 pt-3">
                      {item.skills.map((s, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
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
