import React, { useRef } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Trophy, Award, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AWARDS_DATA } from '../constants';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { AmbientParticles } from '../components/AmbientParticles';
import { ConstellationWeb } from '../components/ConstellationWeb';
import { useSectionProgress, PINNED_OFFSET } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';
import { useIsDesktop } from '../hooks/useMediaQuery';

// Cards stick in a dealt stack on desktop; each one recedes slightly as the next covers it.
const StackCard: React.FC<{
  index: number;
  total: number;
  progress: MotionValue<number>;
  enabled: boolean;
  children: React.ReactNode;
}> = ({ index, total, progress, enabled, children }) => {
  const isLast = index === total - 1;
  const coverStart = (index + 1) / total - 0.14;
  const coverEnd = (index + 1) / total;
  const scale = useParallax(progress, [1, 0.95], [coverStart, coverEnd], 1);
  const opacity = useParallax(progress, [1, 0.55], [coverStart, coverEnd], 1);
  const active = enabled && !isLast;

  return (
    <motion.div
      style={{
        scale: active ? scale : 1,
        opacity: active ? opacity : 1,
        top: enabled ? 112 + index * 22 : undefined,
        transformOrigin: 'top center',
      }}
      className={enabled ? 'sticky' : ''}
    >
      {children}
    </motion.div>
  );
};

export const HonorsAwardsPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const pageProgress = useSectionProgress(pageRef);
  const stackProgress = useSectionProgress(stackRef, PINNED_OFFSET);

  return (
    <div ref={pageRef} className="pt-28 pb-24 min-h-screen bg-page relative overflow-x-clip">
      <SEO
        title="Honors & Awards | Sonu Thomas"
        description="Recognition, enterprise awards, and brand ambassador commendations received by Sonu Thomas for technical excellence and impact."
        url="/awards"
      />

      <AmbientParticles variant="minimal" density="subtle" progress={pageProgress} />
      <ConstellationWeb nodeCount={14} maxEdges={16} progress={pageProgress} />

      <PageHero
        badge={{ icon: <Trophy className="w-3.5 h-3.5" />, text: 'Enterprise and academic distinctions' }}
        title={
          <>
            Recognition &amp; <br />
            <span className="text-copper">honors</span>
          </>
        }
        subtitle="Formal recognitions conferred for engineering execution, enterprise thought leadership, and consistent technical growth."
        stats={[
          { label: 'Brand influence', value: 'HCLTech Supercharged™', note: 'Official ambassador', icon: <Sparkles className="w-4 h-4 text-copper" /> },
          { label: 'Performance award', value: 'Star TechBee', note: 'Top engineering performer', icon: <Award className="w-4 h-4 text-copper" />, tone: 'copper' },
          { label: 'Commendations', value: 'Enterprise & academic', note: 'Multi-year honors record', icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
        ]}
        className="mb-12"
      />

      {/* Honors stack */}
      <section className="pb-24 relative z-10">
        <div ref={stackRef} className={`max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 ${isDesktop ? 'lg:min-h-[170vh]' : ''}`}>
          <div className="space-y-6 lg:space-y-8">
            {AWARDS_DATA.map((award, idx) => (
              <StackCard key={award.id} index={idx} total={AWARDS_DATA.length} progress={stackProgress} enabled={isDesktop}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative flex flex-col md:flex-row gap-6 items-start p-7 sm:p-9 rounded-3xl bg-[#FEFCF9] dark:bg-[#1C1816] border border-[#E8E0D8] dark:border-white/10 hover:border-copper/40 shadow-[0_12px_40px_rgba(26,22,20,0.08)] hover:shadow-[0_16px_36px_rgba(196,125,90,0.12)] transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-14 h-14 rounded-2xl bg-copper/10 border border-copper/20 flex items-center justify-center text-copper shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <Trophy className="w-7 h-7" />
                  </div>

                  <div className="flex-grow w-full space-y-3">
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
              </StackCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
