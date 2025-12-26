import React from 'react';
import { FileText, Scale, AlertTriangle, Copyright } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-1/3 h-[50vh] bg-gradient-to-r from-secondary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-sm font-medium mb-6">
             <Scale className="w-4 h-4" />
             <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            By accessing this website, you agree to be bound by these terms and conditions.
          </p>
          <div className="mt-4 text-sm font-mono text-slate-500">
             Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          
          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-400 leading-relaxed">
                   By accessing and using the website of Sonu Thomas, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
                <Copyright className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                   <p>
                     The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.
                   </p>
                   <p>
                     <strong>Source Code:</strong> Portions of the code demonstrated in the "Open Source" or "Projects" sections may be available under specific licenses (e.g., MIT, Apache). Please refer to the specific repositories for license details.
                   </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                   <p>
                     The materials on this website are provided on an 'as is' basis. Sonu Thomas makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                   </p>
                   <p>
                     Further, Sonu Thomas does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on his website or otherwise relating to such materials or on any sites linked to this site.
                   </p>
                </div>
              </div>
            </div>
          </section>

           <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-500/10 text-slate-400">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
                <p className="text-slate-400 leading-relaxed">
                   Any claim relating to this website shall be governed by the laws of India and the state of Kerala without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};