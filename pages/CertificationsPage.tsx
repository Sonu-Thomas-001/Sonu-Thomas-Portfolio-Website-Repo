import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, Trophy, Hash, ArrowLeft, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CERTIFICATIONS_DATA } from '../constants';
import { SEO } from '../components/SEO';

export const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO 
        title="Licenses & Certifications | Sonu Thomas"
        description="Professional certifications, licenses, and verified credentials held by Sonu Thomas."
        url="/certifications"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Licenses & <br/>
            <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            A comprehensive record of my technical credentials, continuous upskilling, and industry certifications.
          </p>
        </div>
      </div>
      
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-primary/40 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <BadgeCheck className="w-7 h-7" />
                </div>
                
                <div className="flex-grow w-full space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60 whitespace-nowrap flex items-center gap-1.5 self-start">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {cert.date}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-slate-400" />
                      <span>Issued by <span className="font-semibold text-slate-800">{cert.issuer}</span></span>
                    </div>
                    {cert.credentialId && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-200/60">
                        <Hash className="w-3 h-3 text-slate-400" />
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
