import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Check, Loader2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <section className="py-20 bg-page relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-soft-lg"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-50 border border-primary/20 mb-6 text-primary">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-3 tracking-tight">
            Stay Ahead of the AI Curve
          </h2>
          
          <p className="text-slate-600 max-w-lg mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            Periodic engineering dispatches on AI agent architectures, production enterprise lessons, and applied machine learning.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                className="w-full pl-5 pr-32 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white text-sm"
              />
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-xl bg-primary hover:bg-primary-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-soft-sm cursor-pointer disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-slate-400 mt-3 font-mono">
              Strictly zero spam • Unsubscribe anytime
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};