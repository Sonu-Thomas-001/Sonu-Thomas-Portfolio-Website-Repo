import React from 'react';
import { FileText, Scale, ArrowLeft, Shield, Copyright } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-page relative overflow-hidden">
      <SEO 
        title="Terms of Service | Sonu Thomas"
        description="Terms and conditions for accessing the website of Sonu Thomas."
        url="/terms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold text-sm mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            By accessing and browsing this website, you accept and agree to comply with the terms and conditions outlined below.
          </p>
          <div className="mt-3 text-xs font-mono text-slate-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">1. Acceptance of Terms</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  By accessing and utilizing the website of Sonu Thomas, you acknowledge and consent to these terms. If you do not agree with any portion of these provisions, you should refrain from utilizing this platform.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 shrink-0">
                <Copyright className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">2. Intellectual Property</h2>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>
                    All brand assets, site architecture, design systems, and original copy on this site are protected under applicable copyright laws.
                  </p>
                  <p>
                    <strong>Open-Source Repositories:</strong> Code projects showcased on this portfolio and hosted on GitHub are subject to their respective licenses (e.g. MIT, Apache 2.0).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-slate-100 text-slate-700 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">3. Disclaimer of Warranty</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The materials on this website are provided on an "as is" basis for informational and portfolio review purposes. While best engineering practices are followed, no representations are made regarding complete continuous availability.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};