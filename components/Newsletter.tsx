import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Check, Loader2, ShieldCheck, Zap } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset status after showing success message
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
        >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 mb-6 text-white group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Ahead of the Curve
            </h2>
            
            <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
                Join my personal newsletter for weekly insights on <span className="text-white">AI advancements</span>, <span className="text-white">Enterprise Engineering</span>, and the future of tech. No spam, just value.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
                        <Zap className="w-5 h-5" />
                    </div>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sonu@example.com"
                        className="w-full pl-12 pr-32 py-4 bg-dark/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner"
                    />
                    <button
                        type="submit"
                        disabled={status !== 'idle'}
                        className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-primary hover:bg-primary/90 text-cleanWhite font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 min-w-[100px] justify-center"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'idle' && (
                                <motion.span
                                    key="idle"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-1"
                                >
                                    Subscribe <ArrowRight className="w-4 h-4" />
                                </motion.span>
                            )}
                            {status === 'submitting' && (
                                <motion.span
                                    key="submitting"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                </motion.span>
                            )}
                            {status === 'success' && (
                                <motion.span
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-1"
                                >
                                    <Check className="w-4 h-4" /> Joined!
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Your email is safe. Unsubscribe at any time.</span>
            </div>

        </motion.div>
      </div>
    </section>
  );
};