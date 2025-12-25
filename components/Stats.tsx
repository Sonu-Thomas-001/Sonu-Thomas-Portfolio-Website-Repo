import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// Types for stats data
interface StatItem {
  id: number;
  value?: number;
  text?: string;
  suffix?: string;
  label: string;
  sub: string;
}

const STATS_DATA: StatItem[] = [
  { id: 1, value: 2, suffix: "+", label: "Years at HCLTech", sub: "Enterprise Experience" },
  { id: 2, value: 3, suffix: "+", label: "Years Freelancing", sub: "Client Success Stories" },
  { id: 3, value: 10, suffix: "+", label: "Websites Delivered", sub: "Production Ready" },
  { id: 4, text: "IIT G", label: "AI & Data Science", sub: "BSc (Hons) 2024-2028" },
];

// Helper component for counting up numbers
const Counter: React.FC<{ from: number; to: number }> = ({ from, to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return <span ref={nodeRef}>{from}</span>;
};

export const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-dark border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col items-center justify-center text-center p-4 ${idx > 1 ? 'pt-8 md:pt-4' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value !== undefined ? (
                  <>
                    <Counter from={0} to={stat.value} />
                    <span className="text-primary">{stat.suffix}</span>
                  </>
                ) : (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    {stat.text}
                  </span>
                )}
              </div>
              
              <div className="font-semibold text-white text-sm md:text-base uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              
              <div className="text-xs text-slate-500 font-medium">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};