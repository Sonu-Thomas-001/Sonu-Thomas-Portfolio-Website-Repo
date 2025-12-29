import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Activity } from 'lucide-react';

interface StatItem {
  id: number;
  value?: number;
  text?: string;
  suffix?: string;
  label: string;
  sub: string;
}

const STATS_DATA: StatItem[] = [
  { id: 1, value: 2, suffix: "Yrs", label: "HCLTech Exp", sub: "Enterprise Grade" },
  { id: 2, value: 3, suffix: "Yrs", label: "Freelance", sub: "Client Success" },
  { id: 3, value: 20, suffix: "+", label: "Projects", sub: "Delivered" },
  { id: 4, text: "IIT-G", label: "AI & Data", sub: "Research Focus" },
];

const Counter: React.FC<{ from: number; to: number }> = ({ from, to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;
    const controls = animate(from, to, {
      duration: 1.5,
      ease: "circOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toString().padStart(2, '0');
      },
    });
    return () => controls.stop();
  }, [from, to, isInView]);

  return <span ref={nodeRef} className="tabular-nums font-mono">{from}</span>;
};

export const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-dark border-b border-white/5 relative overflow-hidden">
      {/* Moving scanline background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(14,165,233,0.05),transparent)] w-[200%] h-full animate-[shimmer_5s_infinite] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2 mb-8 text-xs font-mono text-primary/50 uppercase tracking-widest justify-center md:justify-start">
             <Activity className="w-3 h-3 animate-pulse" />
             System Metrics
             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping ml-2"></span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-surface/30 border border-white/5 p-6 rounded-sm hover:border-primary/30 transition-colors group"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-primary/50 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-primary/50 transition-colors"></div>

              <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight font-mono">
                {stat.value !== undefined ? (
                  <>
                    <Counter from={0} to={stat.value} />
                    <span className="text-primary text-xl ml-1">{stat.suffix}</span>
                  </>
                ) : (
                  <span className="text-white font-sans">
                    {stat.text}
                  </span>
                )}
              </div>
              
              <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              
              <div className="text-[10px] text-primary/70 font-mono">
                Running: {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};