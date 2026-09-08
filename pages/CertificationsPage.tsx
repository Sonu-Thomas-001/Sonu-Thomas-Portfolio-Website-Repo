import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, Hash, ArrowLeft, Award } from 'lucide-react';
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
            Credentials // Continuous Upskilling
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Licenses & <br />
            <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-light leading-relaxed">
            A comprehensive record of technical credentials, specialized coursework, and industry-recognized qualifications.
          </p>
        </div>
      </div>
      
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 hover:border-primary/40 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                
                <div className="flex-grow w-full space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                    <h3 className="font-display font-semibold text-xl text-slate-900 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-500 pt-1">
                    <span>Issued by <strong className="text-slate-800 font-semibold">{cert.issuer}</strong></span>
                    {cert.credentialId && (
                      <span className="text-slate-400">ID: {cert.credentialId}</span>
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
