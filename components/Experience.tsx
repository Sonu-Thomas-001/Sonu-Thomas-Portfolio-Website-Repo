import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

export const Experience: React.FC = () => {
  const desktopTargetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: desktopTargetRef,
    offset: ["start start", "end end"],
  });

  // Slide horizontally across all experience cards
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const watermarkShift = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section id="experience" className="relative bg-page">
      {/* ============================================================ */}
      {/* DESKTOP PINNED HORIZONTAL SCROLL TIMELINE (Hidden on Mobile) */}
      {/* ============================================================ */}
      <div ref={desktopTargetRef} className="hidden md:block relative h-[380vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden px-8 lg:px-16 py-12">
          
          {/* Top Header Bar with Live Scroll Tracker */}
          <div className="flex items-center justify-between z-10 border-b border-slate-200/80 pb-6">
            <div>
              <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-1">
                02 // Career Journey
              </span>
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-slate-900 tracking-tight">
                Experience &amp; Track Record
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Scroll to slide timeline
              </span>
              <div className="relative w-44 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Horizontally Moving Cards Track */}
          <div className="my-auto overflow-visible py-4">
            <motion.div style={{ x }} className="flex gap-8 items-stretch w-max pr-32">
              {EXPERIENCE_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="relative w-[520px] lg:w-[580px] flex-shrink-0 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/90 shadow-soft-md hover:border-primary/40 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Subtle Background Watermark Number with Parallax */}
                  <motion.span
                    style={{ x: watermarkShift }}
                    className="absolute -right-4 -bottom-6 font-display font-bold text-9xl text-slate-900/[0.03] select-none pointer-events-none"
                  >
                    0{index + 1}
                  </motion.span>

                  <div className="relative z-10">
                    {/* Header: Period & Index */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-primary font-medium">
                        0{index + 1} / 0{EXPERIENCE_DATA.length}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="font-display font-semibold text-2xl lg:text-3xl text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 font-medium text-sm mb-6">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-slate-800 font-semibold">{item.company}</span>
                    </div>

                    {/* Bullet Achievements */}
                    <ul className="space-y-3 mb-8">
                      {item.description.slice(0, 3).map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  {item.tech && (
                    <div className="relative z-10 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                      {item.tech.map((techItem, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-xs font-mono text-slate-600"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom helper */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-slate-100">
            <span>Kannur &bull; Enterprise &bull; Remote</span>
            <div className="flex items-center gap-1.5 text-slate-500">
              <span>Scroll down to navigate horizontally</span>
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
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-1">
            02 // Career Journey
          </span>
          <h2 className="font-display font-semibold text-3xl text-slate-900 tracking-tight">
            Experience &amp; Track Record
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-primary font-semibold">0{index + 1}</span>
              </div>

              <div>
                <h3 className="font-display font-semibold text-xl text-slate-900">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-primary mt-0.5">{item.company}</p>
              </div>

              <ul className="space-y-2.5">
                {item.description.slice(0, 3).map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-600 text-xs font-light leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {item.tech && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/60 text-[11px] font-mono text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};