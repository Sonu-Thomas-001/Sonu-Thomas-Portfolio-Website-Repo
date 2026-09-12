import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, HeartHandshake, Sparkles, Globe, GraduationCap } from 'lucide-react';
import { VOLUNTEERING_DATA } from '../constants';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ParallaxImage } from '../components/ParallaxImage';
import { AmbientParticles } from '../components/AmbientParticles';
import { SonarRings } from '../components/SonarRings';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';

export const VolunteeringPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const pageProgress = useSectionProgress(pageRef);
  const railProgress = useSectionProgress(railRef, ['start 0.85', 'end 0.6']);
  const railScale = useParallax(railProgress, [0, 1], [0, 1], 1);

  return (
    <div ref={pageRef} className="pt-28 pb-24 min-h-screen bg-page relative overflow-x-clip">
      <SEO
        title="Volunteering & Leadership | Sonu Thomas"
        description="Statewide educational technology initiatives, AI Club leadership, and student mentoring contributions by Sonu Thomas."
        url="/volunteering"
      />

      <AmbientParticles variant="minimal" density="subtle" progress={pageProgress} />
      <SonarRings progress={pageProgress} />

      <PageHero
        badge={{ icon: <HeartHandshake className="w-3.5 h-3.5" />, text: 'Public impact, mentorship and culture' }}
        title={
          <>
            Volunteering &amp; <br />
            <span className="text-copper">leadership</span>
          </>
        }
        subtitle="Giving back through statewide ICT student enablement, active enterprise AI literacy clubs, and community-first leadership."
        aside={
          <div className="relative rounded-3xl overflow-hidden bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 p-2.5 border border-[#E8E0D8] dark:border-white/10 shadow-[0_16px_40px_rgba(26,22,20,0.06)] backdrop-blur-xl">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EDE5DC] dark:bg-[#1E1B18]">
              <ParallaxImage
                src="/images/Professional%20Pic%201.jpg"
                alt="Sonu Thomas technical mentorship and community leadership"
                travel={['-10%', '10%']}
                scale={1.12}
                imgClassName="object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="p-3 text-center">
              <span className="text-xs text-[#78716C] dark:text-[#9C948B]">
                Community mentorship and tech leadership
              </span>
            </div>
          </div>
        }
        stats={[
          { label: 'Statewide reach', value: '100k+', note: 'Students reached via Little KITEs', icon: <Globe className="w-4 h-4 text-copper" /> },
          { label: 'Enterprise AI club', value: 'Core member', note: 'HCLTech AI literacy & demos', icon: <Sparkles className="w-4 h-4 text-copper" />, tone: 'copper' },
          { label: 'Leadership track', value: '6+ yrs', note: 'Continuous mentorship & service', icon: <GraduationCap className="w-4 h-4 text-emerald-500" /> },
        ]}
        className="mb-12"
      />

      {/* Initiatives timeline with a scroll-drawn rail */}
      <section className="pb-24 relative z-10">
        <div ref={railRef} className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            style={{ scaleY: railScale }}
            className="hidden md:block absolute left-[calc(2rem_+_64px)] lg:left-[calc(3rem_+_64px)] top-8 bottom-8 w-px bg-gradient-to-b from-copper/60 via-copper/30 to-transparent origin-top pointer-events-none"
          />
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
                  className="relative flex flex-col md:flex-row gap-6 items-start p-7 sm:p-9 rounded-3xl bg-[#FEFCF9] dark:bg-[#1C1816] border border-[#E8E0D8] dark:border-white/10 hover:border-copper/40 shadow-[0_4px_24px_rgba(26,22,20,0.04)] hover:shadow-[0_16px_36px_rgba(196,125,90,0.12)] transition-all duration-300 group overflow-hidden"
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
