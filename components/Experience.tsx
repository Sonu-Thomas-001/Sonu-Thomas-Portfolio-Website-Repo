import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappy horizontal scroll across cards: 5 cards total
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const watermarkShift = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="experience" className="relative bg-[#0B0F19] text-white border-y border-slate-800/80">
      
      {/* ============================================================ */}
      {/* DESKTOP PINNED HORIZONTAL SCROLL TIMELINE (Hidden on Mobile) */}
      {/* ============================================================ */}
      <div ref={containerRef} className="hidden md:block relative h-[280vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden px-8 lg:px-16 py-12">
          
          {/* Top Header Bar */}
          <div className="flex items-center justify-between z-10 border-b border-slate-800 pb-6">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-semibold tracking-widest uppercase block mb-1">
                02 // Career Journey
              </span>
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-white tracking-tight">
                Experience &amp; Track Record
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Scroll to slide timeline
              </span>
              <div className="relative w-40 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-primary-500 to-secondary-500 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Horizontally Moving Cards Track */}
          <div className="my-auto overflow-visible py-4">
            <motion.div style={{ x }} className="flex gap-8 items-stretch w-max pr-32">
              {EXPERIENCE_DATA.map((item, index) => (
                <div
                  key={item.id}
                  className="relative w-[520px] lg:w-[580px] flex-shrink-0 bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-slate-800/90 shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Watermark Numerals with Parallax */}
                  <motion.span
                    style={{ x: watermarkShift }}
                    className="absolute -right-4 -bottom-6 font-display font-bold text-9xl text-white/[0.03] select-none pointer-events-none"
                  >
                    0{index + 1}
                  </motion.span>

                  <div className="relative z-10">
                    {/* Header: Period & Index */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-cyan-400 font-medium">
                        0{index + 1} / 0{EXPERIENCE_DATA.length}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="font-display font-semibold text-2xl lg:text-3xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 font-medium text-sm mb-6">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-slate-200 font-semibold">{item.company}</span>
                    </div>

                    {/* Bullet Achievements */}
                    <ul className="space-y-3.5 mb-8">
                      {item.description.slice(0, 3).map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  {item.tech && (
                    <div className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                      {item.tech.map((techItem, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom helper */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-4 border-t border-slate-800/80">
            <span>Enterprise &bull; Remote &bull; Kannur, India</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Scroll down to navigate timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE VERTICAL STACKED TIMELINE (Visible only on mobile)    */}
      {/* ============================================================ */}
      <div className="md:hidden py-20 px-6 max-w-xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-xs text-cyan-400 font-semibold tracking-widest uppercase block mb-1">
            02 // Career Journey
          </span>
          <h2 className="font-display font-semibold text-3xl text-white tracking-tight">
            Experience &amp; Track Record
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-cyan-400 font-semibold">0{index + 1}</span>
              </div>

              <div>
                <h3 className="font-display font-semibold text-xl text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-cyan-300 mt-0.5">{item.company}</p>
              </div>

              <ul className="space-y-2.5">
                {item.description.slice(0, 3).map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs font-light leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {item.tech && (
                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};