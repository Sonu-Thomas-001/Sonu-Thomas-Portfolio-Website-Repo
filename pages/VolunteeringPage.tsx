import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowLeft, CheckCircle2 } from 'lucide-react';
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
            Initiatives // Giving Back
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Volunteering &amp; <br />
            <span className="gradient-text">Leadership</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-light leading-relaxed">
            Giving back through technical mentorship, developer community initiatives, and collaborative leadership.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {VOLUNTEERING_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 hover:border-primary/40 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>

                <div className="flex-grow w-full space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-slate-900 group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-0.5">{item.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {item.description.map((desc, dIdx) => (
                      <p key={dIdx} className="text-sm text-slate-600 font-light leading-relaxed flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </p>
                    ))}
                  </div>

                  {item.skills && (
                    <div className="flex flex-wrap gap-2 pt-2">
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
