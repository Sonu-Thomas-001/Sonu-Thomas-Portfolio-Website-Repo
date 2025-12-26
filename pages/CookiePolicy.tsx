import React from 'react';
import { Cookie, Settings, ShieldCheck, List } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 right-0 w-1/2 h-[50vh] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
             <Cookie className="w-4 h-4" />
             <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Understanding how and why we use cookies to improve your experience.
          </p>
          <div className="mt-4 text-sm font-mono text-slate-500">
             Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          
          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
                <p className="text-slate-400 leading-relaxed">
                   Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <List className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Cookies We Use</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Essential Cookies</h3>
                    <p className="text-slate-400 text-sm">
                      These are necessary for the website to function properly. For example, we use <code>sessionStorage</code> to determine if you have seen the introductory animation sequence, ensuring it doesn't play every time you refresh the page.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Performance & Analytics</h3>
                    <p className="text-slate-400 text-sm">
                      We may use anonymous analytics cookies to understand how visitors interact with the website. This helps us identify which projects are viewed most often and improve navigation.
                    </p>
                  </div>
                   <div>
                    <h3 className="text-lg font-bold text-white mb-2">Functionality</h3>
                    <p className="text-slate-400 text-sm">
                      Used to recognize you when you return to our website. This enables us to personalize our content for you (e.g., maintaining your preferred theme if applicable).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-500/10 text-slate-400">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Managing Preferences</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                   Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a>.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Please note that blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};