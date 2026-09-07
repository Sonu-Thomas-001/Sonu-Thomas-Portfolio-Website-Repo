import React from 'react';
import { Cookie, Settings, ShieldCheck, List, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-page relative overflow-hidden">
      <SEO 
        title="Cookie Policy | Sonu Thomas"
        description="Understanding how cookies and storage mechanisms are utilized on the website of Sonu Thomas."
        url="/cookies"
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
            <Cookie className="w-3.5 h-3.5" />
            <span>Storage & Preferences</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Transparent information on local storage and browser cookies utilized across this site.
          </p>
          <div className="mt-3 text-xs font-mono text-slate-400">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">1. What Are Cookies?</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Cookies and local web storage items are lightweight key-value pairs stored in your browser to remember user preferences (such as visited states for intro animations) and maintain session continuity.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-soft-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                <List className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-bold text-xl text-slate-900">2. Cookies We Utilize</h2>
                <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <p>This site utilizes strictly essential functional storage:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Animation Cache:</strong> Stores a flag in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">sessionStorage</code> to prevent repetitive preloader intro plays during a single browsing session.</li>
                    <li><strong>Performance Telemetry:</strong> Non-identifying CDN caches on Vercel to optimize global edge routing.</li>
                  </ul>
                  <p className="text-xs text-slate-500 italic mt-2">
                    We do not use invasive third-party cross-site advertising trackers.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};