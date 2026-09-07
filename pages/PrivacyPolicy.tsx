import React from 'react';
import { Shield, Lock, Eye, Server, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';
import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-page relative overflow-hidden">
      <SEO 
        title="Privacy Policy | Sonu Thomas"
        description="Privacy policy and data protection details for the portfolio website of Sonu Thomas."
        url="/privacy"
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your privacy is important. This document outlines how data is collected, processed, and safeguarded on this website.
          </p>
          <div className="mt-3 text-xs font-mono text-slate-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">1. Information We Collect</h2>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>We collect minimal information necessary to provide a functional and responsive experience:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Voluntary Details:</strong> Name, email address, phone, and inquiry messages submitted through the contact form.</li>
                    <li><strong>Usage Data:</strong> Anonymous performance telemetry to optimize load times and client responsiveness.</li>
                    <li><strong>AI Queries:</strong> Interactions with the assistant are processed in real-time to generate responses and are not stored linked to your identity.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">2. How We Use Data</h2>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>Information is used exclusively for legitimate business communication:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Responding to technical inquiries and project proposals.</li>
                    <li>Maintaining security, preventing automated form abuse, and site uptime.</li>
                  </ul>
                  <p className="border-l-2 border-emerald-500 pl-3 italic text-slate-500 text-xs mt-2">
                    We never sell, rent, or trade your personal information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">3. Third-Party Integrations</h2>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>This website employs select industry-standard third-party providers:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Google Gemini API:</strong> Processes queries submitted to the AI assistant.</li>
                    <li><strong>Hosting (Vercel):</strong> Provides edge CDN distribution and TLS encryption.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-rose-50 text-rose-600 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">4. Contact & Inquiries</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For privacy-related questions or data removal requests, please write directly to:
                </p>
                <div className="text-slate-900 font-semibold text-sm pt-1">
                  {PERSONAL_DETAILS.name}<br/>
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-primary hover:underline">{PERSONAL_DETAILS.email}</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};