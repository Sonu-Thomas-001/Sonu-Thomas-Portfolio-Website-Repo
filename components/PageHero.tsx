import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';

export interface PageHeroStat {
  label: string;
  value: string;
  note: string;
  icon?: React.ReactNode;
  tone?: 'ink' | 'copper' | 'emerald' | 'violet';
}

interface PageHeroProps {
  badge?: { icon?: React.ReactNode; text: string };
  title: React.ReactNode;
  subtitle: string;
  stats?: PageHeroStat[];
  /** Optional right-column visual (lg+), e.g. a framed photo. Receives its own depth parallax. */
  aside?: React.ReactNode;
  /** Extra content rendered under the subtitle (pills, links). */
  children?: React.ReactNode;
  backTo?: string;
  backLabel?: string;
  className?: string;
}

const TONE_CLASS: Record<NonNullable<PageHeroStat['tone']>, string> = {
  ink: 'text-[#1A1614] dark:text-[#FDFBF7]',
  copper: 'text-copper',
  emerald: 'text-emerald-500',
  violet: 'text-[#8B5CF6]',
};

const TONE_BORDER: Record<NonNullable<PageHeroStat['tone']>, string> = {
  ink: 'border-[#E8E0D8] dark:border-white/15',
  copper: 'border-copper/50',
  emerald: 'border-emerald-500/50',
  violet: 'border-[#8B5CF6]/50',
};

// Animates the numeric prefix of values like "4x", "90+", "100%", "100k+"; leaves text values alone.
const StatValue: React.FC<{ value: string; className: string }> = ({ value, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!node || !inView || !match || reduced) return;
    const target = parseFloat(match[1]);
    const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'circOut',
      onUpdate: (v) => {
        node.textContent = `${v.toFixed(decimals)}${match[2]}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <span ref={ref} className={`${className} tabular-nums`}>
      {value}
    </span>
  );
};

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  stats,
  aside,
  children,
  backTo = '/',
  backLabel = 'Back to home',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const exit = useSectionProgress(ref, ['start start', 'end start']);
  const titleY = useParallax(exit, [0, -48], [0, 1], 0);
  const titleOpacity = useParallax(exit, [1, 0.55], [0.2, 1], 1);
  const badgeY = useParallax(exit, [0, -16], [0, 1], 0);
  const glowY = useParallax(exit, ['-10%', '35%'], [0, 1], '0%');
  const asideY = useParallax(exit, [0, 56], [0, 1], 0);
  const asideScale = useParallax(exit, [1, 0.94], [0, 1], 1);

  return (
    <div ref={ref} className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 ${className}`}>
      <motion.div
        style={{ y: glowY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-copper/10 rounded-full blur-[120px] pointer-events-none -z-10 will-change-transform"
      />

      <Link
        to={backTo}
        className="inline-flex items-center gap-2 text-sm text-[#78716C] dark:text-[#A8A29E] hover:text-copper transition-colors mb-8 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>{backLabel}</span>
      </Link>

      <div className={`grid gap-8 items-center ${aside ? 'lg:grid-cols-12' : ''}`}>
        <div className={`${aside ? 'lg:col-span-8' : ''} max-w-3xl`}>
          {badge && (
            <motion.div
              style={{ y: badgeY }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper/10 border border-copper/25 text-copper text-xs mb-5"
            >
              {badge.icon}
              <span>{badge.text}</span>
            </motion.div>
          )}

          <motion.div style={{ y: titleY, opacity: titleOpacity }}>
            <motion.h1
              initial={{ clipPath: 'inset(0% 0% 100% 0%)', y: 28 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-[1.06]"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#4A4340] dark:text-[#D6D3D1] text-base sm:text-lg lg:text-xl mt-5 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6"
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>

        {aside && (
          <motion.div
            style={{ y: asideY, scale: asideScale }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 hidden lg:block will-change-transform"
          >
            {aside}
          </motion.div>
        )}
      </div>

      {stats && stats.length > 0 && (
        <div
          className={`grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 mt-12 pt-7 border-t border-[#E8E0D8] dark:border-white/10 ${
            stats.length >= 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
          }`}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`pl-4 border-l-2 ${TONE_BORDER[stat.tone ?? 'ink']}`}
            >
              <div className="flex items-center gap-1.5 text-xs text-[#78716C] dark:text-[#A8A29E] mb-2">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
              <StatValue
                value={stat.value}
                className={`block font-display font-bold text-3xl sm:text-4xl ${TONE_CLASS[stat.tone ?? 'ink']}`}
              />
              <div className="text-xs text-[#78716C] dark:text-[#A8A29E] mt-1.5">{stat.note}</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
