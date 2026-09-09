import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ArrowLeft, Award, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AWARDS_DATA } from '../constants';
import { SEO } from '../components/SEO';
import { AmbientParticles } from '../components/AmbientParticles';

export const HonorsAwardsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-page relative overflow-hidden">
      <SEO 
        title="Honors & Awards | Sonu Thomas"
        description="Recognition, enterprise awards, and brand ambassador commendations received by Sonu Thomas for technical excellence and impact."
        url="/awards"
      />

      {/* Background Subtle Copper Ambient Halo */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-copper/10 dark:bg-copper/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Ambient Floating Cyber-Orbs */}
      <AmbientParticles variant="minimal" density="subtle" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#78716C] dark:text-[#A8A29E] hover:text-copper font-mono text-xs uppercase tracking-wider mb-8 group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper/10 border border-copper/20 text-copper text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &bull; Enterprise &amp; Academic Distinctions</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-tight">
            Recognition &amp; <br />
            <span className="bg-gradient-to-r from-[#B85D36] via-copper to-[#A04D28] dark:from-[#F0A584] dark:via-copper dark:to-[#F0A584] bg-clip-text text-transparent">
              Honors
            </span>
          </h1>

          <p className="text-[#574F4A] dark:text-[#C5BEB7] text-base sm:text-lg mt-4 font-light leading-relaxed">
            Formal recognitions conferred for engineering execution, enterprise thought leadership, and consistent technical growth.
          </p>
        </div>

        {/* 3 Executive Metric Ribbons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
          <div className="p-5 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
            <div className="flex items-center justify-between text-xs font-mono text-copper mb-2">
              <span>BRAND INFLUENCE</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] dark:text-[#FDFBF7] truncate">HCLTech Supercharged™</div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1">Official Ambassador</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
            <div className="flex items-center justify-between text-xs font-mono text-copper mb-2">
              <span>PERFORMANCE AWARD</span>
              <Award className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] dark:text-[#FDFBF7]">Star TechBee</div>
            <div className="text-xs font-mono text-copper mt-1">Top Engineering Performer</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
            <div className="flex items-center justify-between text-xs font-mono text-copper mb-2">
              <span>COMMENDATIONS</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] dark:text-[#FDFBF7]">Enterprise &amp; Academic</div>
            <div className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] mt-1">Multi-Year Honors Record</div>
          </div>
        </div>
      </div>

      {/* Honors List */}
      <section className="pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {AWARDS_DATA.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row gap-6 items-start p-7 sm:p-9 rounded-3xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 hover:border-copper/40 shadow-[0_4px_24px_rgba(26,22,20,0.04)] hover:shadow-[0_16px_36px_rgba(196,125,90,0.12)] transition-all duration-300 group overflow-hidden"
              >
                {/* Top Specular Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Left Trophy Icon */}
                <div className="w-14 h-14 rounded-2xl bg-copper/10 border border-copper/20 flex items-center justify-center text-copper shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Trophy className="w-7 h-7" />
                </div>

                {/* Right Content */}
                <div className="flex-grow w-full space-y-3">
                  {/* Top Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper transition-colors">
                        {award.title}
                      </h3>
                      {award.badge && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-copper/10 text-copper border border-copper/20 font-medium">
                          {award.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] whitespace-nowrap">
                      {award.date}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#78716C] dark:text-[#9C948B]">
                    Conferred by <strong className="text-[#1A1614] dark:text-[#EDE5DC] font-semibold">{award.issuer}</strong>
                  </p>

                  {award.description && (
                    <div className="space-y-2 pt-3 border-t border-[#E8E0D8] dark:border-white/10">
                      {award.description.map((line, lIdx) => (
                        <div key={lIdx} className="text-sm text-[#574F4A] dark:text-[#C5BEB7] font-light leading-relaxed flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
