import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Check, Loader2, ShieldCheck, Sparkles, Zap, Users } from 'lucide-react';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';

export const Newsletter: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);
  const glowTopY = useParallax(progress, ['-20%', '25%'], [0, 1], '0%');
  const glowBottomY = useParallax(progress, ['25%', '-20%'], [0, 1], '0%');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }, 1100);
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-14 text-center overflow-hidden bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-2xl border border-[#E8E0D8] dark:border-white/10 shadow-[0_16px_48px_rgba(26,22,20,0.06)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.4)] group"
        >
          {/* Ambient Glow Mesh Behind the Card */}
          <motion.div
            style={{ y: glowTopY, x: '-50%' }}
            className="absolute -top-24 left-1/2 w-96 h-56 bg-copper/15 dark:bg-copper/20 rounded-full blur-3xl pointer-events-none -z-10 will-change-transform"
          />
          <motion.div
            style={{ y: glowBottomY, x: '-50%' }}
            className="absolute -bottom-24 left-1/2 w-80 h-48 bg-amber-500/10 dark:bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-10 will-change-transform"
          />

          {/* Top Hairline Copper Accent */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-copper/50 to-transparent" />

          {/* Floating Icon Header */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative p-3.5 rounded-2xl bg-white/90 dark:bg-[#25201D] border border-[#E8E0D8] dark:border-white/15 shadow-[0_4px_20px_rgba(196,125,90,0.15)] group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-copper" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#1C1816]" />
            </div>
          </div>

          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper/10 text-copper text-[11px] font-mono font-semibold tracking-wider uppercase border border-copper/20">
              <Zap className="w-3 h-3 text-copper" />
              Curated Engineering Dispatches
            </span>
          </div>

          {/* Editorial Headline */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-tight max-w-2xl mx-auto">
            Stay Ahead of the{' '}
            <span className="bg-gradient-to-r from-[#B85D36] via-copper to-[#A04D28] dark:from-[#F0A584] dark:via-copper dark:to-[#F0A584] bg-clip-text text-transparent">
              AI Curve
            </span>
          </h2>
          
          <p className="text-[#574F4A] dark:text-[#C5BEB7] max-w-xl mx-auto mt-4 mb-8 text-base sm:text-lg font-light leading-relaxed">
            In-depth breakdowns on autonomous multi-agent architectures, enterprise LLM fine-tuning, and production system designs delivered straight to your inbox.
          </p>

          {/* Interactive Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto relative">
            <div className="relative flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white/80 dark:bg-[#141210]/90 border border-[#E8E0D8] dark:border-white/15 shadow-[0_4px_20px_rgba(26,22,20,0.05)] focus-within:border-copper focus-within:ring-2 focus-within:ring-copper/20 transition-all">
              <div className="relative flex-1 w-full flex items-center pl-4">
                <Mail className="w-4 h-4 text-[#A8A29E] shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-3 py-2.5 bg-transparent text-[#1A1614] dark:text-[#EDE5DC] placeholder:text-[#A8A29E] text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full bg-gradient-to-r from-copper to-[#A04D28] hover:from-[#B85D36] hover:to-copper text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(196,125,90,0.3)] hover:shadow-[0_6px_22px_rgba(196,125,90,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75 shrink-0"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Dispatched &bull; Welcome!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Success Banner Feedback */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-3 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium"
                >
                  ✓ You are on the subscriber dispatch list. Verification email sent.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust Badges Ribbon */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5 text-[11px] font-mono text-[#78716C] dark:text-[#9C948B]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-copper" />
                Zero Spam &bull; Unsubscribe Anytime
              </span>
              <span className="hidden sm:inline text-copper/40">&bull;</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-copper" />
                Join 1,400+ Engineering Leaders
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};