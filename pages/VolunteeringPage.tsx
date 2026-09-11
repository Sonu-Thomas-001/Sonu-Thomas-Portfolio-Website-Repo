import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowLeft, CheckCircle2, HeartHandshake, Sparkles, Trophy, Globe, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VOLUNTEERING_DATA } from '../constants';
import { SEO } from '../components/SEO';
import { AmbientParticles } from '../components/AmbientParticles';
import { SonarRings } from '../components/SonarRings';

export const VolunteeringPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-page relative overflow-x-clip">
      <SEO 
        title="Volunteering & Leadership | Sonu Thomas"
        description="Statewide educational technology initiatives, AI Club leadership, and student mentoring contributions by Sonu Thomas."
        url="/volunteering"
      />

      {/* Ambient Parallax Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-copper/10 dark:bg-copper/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Ambient Floating Cyber-Orbs */}
      <AmbientParticles variant="minimal" density="subtle" />

      {/* Community outreach — sonar signals going out */}
      <SonarRings />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#78716C] dark:text-[#A8A29E] hover:text-copper font-mono text-xs uppercase tracking-wider mb-8 group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper/10 border border-copper/20 text-copper text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Public Impact // Mentorship &amp; Culture</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-tight">
              Volunteering &amp; <br />
              <span className="bg-gradient-to-r from-[#B85D36] via-copper to-[#A04D28] dark:from-[#F0A584] dark:via-copper dark:to-[#F0A584] bg-clip-text text-transparent">
                Leadership
              </span>
            </h1>

            <p className="text-[#574F4A] dark:text-[#C5BEB7] text-base sm:text-lg mt-4 font-light leading-relaxed">
              Giving back through statewide ICT student enablement, active enterprise AI literacy clubs, and community-first leadership.
            </p>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 p-2.5 border border-[#E8E0D8] dark:border-white/10 shadow-[0_16px_40px_rgba(26,22,20,0.06)] backdrop-blur-xl group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EDE5DC] dark:bg-[#1E1B18]">
                <img
                  src="/images/Professional%20Pic%201.png"
                  alt="Sonu Thomas technical mentorship and community leadership"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-[11px] font-mono text-[#78716C] dark:text-[#9C948B] uppercase tracking-wider">
                  Community Mentorship &bull; Tech Leadership
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Executive Impact Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
          <div className="p-5 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
            <div className="flex items-center justify-between text-xs font-mono text-copper mb-2">
              <span>STATEWIDE REACH</span>
              <Globe className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#1A1614] dark:text-[#FDFBF7]">100k+</div>
            <div className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] mt-1">Students Reached via Little KITEs</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
            <div className="flex items-center justify-between text-xs font-mono text-copper mb-2">
              <span>ENTERPRISE AI CLUB</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-[#1A1614] dark:text-[#FDFBF7]">Core Member</div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-1">HCLTech AI Literacy &amp; Demos</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
            <div className="flex items-center justify-between text-xs font-mono text-copper mb-2">
              <span>LEADERSHIP TRACK</span>
              <GraduationCap className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#1A1614] dark:text-[#FDFBF7]">6+ Yrs</div>
            <div className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] mt-1">Continuous Mentorship &amp; Service</div>
          </div>
        </div>
      </div>

      {/* Initiatives Timeline */}
      <section className="pb-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {VOLUNTEERING_DATA.map((item, idx) => {
              const isPresent = item.period.toLowerCase().includes('present');
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative flex flex-col md:flex-row gap-6 items-start p-7 sm:p-9 rounded-3xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 hover:border-copper/40 shadow-[0_4px_24px_rgba(26,22,20,0.04)] hover:shadow-[0_16px_36px_rgba(196,125,90,0.12)] transition-all duration-300 group overflow-hidden"
                >
                  {/* Top Specular Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Left Avatar / Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-copper/10 border border-copper/20 flex items-center justify-center text-copper shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <Users className="w-7 h-7" />
                  </div>

                  {/* Content Body */}
                  <div className="flex-grow w-full space-y-4">
                    {/* Role & Org */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper transition-colors">
                            {item.role}
                          </h3>
                          {isPresent && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Active Role
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-mono text-copper font-medium mt-1">{item.organization}</p>
                      </div>

                      <span className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    {/* Description Bullets */}
                    <div className="space-y-2 pt-2 border-t border-[#E8E0D8] dark:border-white/10">
                      {item.description.map((desc, dIdx) => (
                        <div key={dIdx} className="text-sm text-[#574F4A] dark:text-[#C5BEB7] font-light leading-relaxed flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Impact Ribbon */}
                    {item.impact && item.impact.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-[#E8E0D8]/70 dark:border-white/5 space-y-1">
                        <span className="text-[10px] font-mono font-semibold uppercase text-copper tracking-wider block">
                          Demonstrated Impact
                        </span>
                        {item.impact.map((imp, iIdx) => (
                          <div key={iIdx} className="text-xs text-[#1A1614] dark:text-[#EDE5DC] font-mono flex items-center gap-2">
                            <span className="text-copper">&bull;</span>
                            <span>{imp}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills Covered Chips */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#E8E0D8]/40 dark:bg-white/[0.04] text-[#78716C] dark:text-[#A8A29E] border border-[#E8E0D8]/50 dark:border-white/5"
                          >
                            #{s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
