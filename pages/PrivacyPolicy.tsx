import React from 'react';
import { Shield, Lock, Eye, Server, Mail } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-[50vh] bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
             <Shield className="w-4 h-4" />
             <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Your privacy is important. This document outlines how data is collected, used, and protected on this portfolio website.
          </p>
          <div className="mt-4 text-sm font-mono text-slate-500">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          
          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    We collect minimal information necessary to provide a functional experience. This includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Voluntary Information:</strong> Name, email address, and message content provided when you use the Contact form.</li>
                    <li><strong>Usage Data:</strong> Anonymous metrics regarding page views and navigation paths to optimize site performance.</li>
                    <li><strong>AI Interactions:</strong> Queries sent to the "Nexus" AI assistant are processed to generate responses but are not stored permanently linked to your identity.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>The information collected is used solely for the following purposes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To respond to inquiries submitted via the contact form.</li>
                    <li>To improve the user experience and website functionality.</li>
                    <li>To prevent abuse and ensure the security of the website.</li>
                  </ul>
                  <p className="mt-4 border-l-2 border-emerald-500/50 pl-4 italic text-slate-500">
                    We do not sell, trade, or rent your personal identification information to others.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>This website utilizes specific third-party services to function:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Google Gemini API:</strong> Powers the AI Assistant. Text inputs are sent to Google's servers for processing. Please refer to Google's Privacy Policy for details on how they handle API data.</li>
                    <li><strong>Vercel / GitHub Pages:</strong> Hosting providers that may collect standard server logs (IP addresses, user agents) for security and analytics.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
             <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact:
                </p>
                <div className="text-white font-medium">
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