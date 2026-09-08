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
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const watermarkShift = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section id="experience" className="relative bg-[#131110] text-[#EDE5DC] border-y border-[#2A2522]">
      
      {/* Decorative Film Strip Perforations Top */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#0E0C0B] border-b border-[#2A2522] overflow-hidden select-none opacity-40">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={`perf-top-${i}`} className="w-3 h-2 rounded-[2px] bg-[#332E2A] flex-shrink-0 mx-1" />
        ))}
      </div>

      {/* ============================================================ */}
      {/* DESKTOP PINNED HORIZONTAL SCROLL TIMELINE (Hidden on Mobile) */}
      {/* ============================================================ */}
      <div ref={containerRef} className="hidden md:block relative h-[280vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden px-8 lg:px-16 py-12">
          
          {/* Top Header Bar */}
          <div className="flex items-center justify-between z-10 border-b border-[#2A2522] pb-6">
            <div>
              <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase block mb-1">
                02 // Career Journey
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#EDE5DC] tracking-tight">
                Experience & Production Track Record
              </h2>
            </div>

            {/* Stepped Progress Tracker with Copper Bar */}
            <div className="flex items-center gap-5">
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-wider">
                Scroll to slide
              </span>
              <div className="relative w-44 h-2 bg-[#25211E] rounded-full overflow-hidden border border-[#332E2A]">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full bg-gradient-to-r from-copper via-[#DF9B7A] to-primary rounded-full shadow-glow-copper"
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
                  className="relative w-[520px] lg:w-[580px] flex-shrink-0 bg-[#1E1B18]/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#332E2A] shadow-soft-lg hover:border-copper/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Thin Accent Top Border */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent group-hover:via-copper transition-colors" />

                  {/* Giant Watermark Numeral with Parallax */}
                  <motion.span
                    style={{ x: watermarkShift }}
                    className="absolute -right-4 -bottom-6 font-display font-bold text-9xl text-[#EDE5DC]/[0.025] select-none pointer-events-none"
                  >
                    0{index + 1}
                  </motion.span>

                  {/* HCLTech Madurai Campus Image Banner for all HCLTech cards */}
                  {item.company.toLowerCase().includes('hcltech') && (
                    <div className="relative h-28 -mx-8 -mt-8 lg:-mx-10 lg:-mt-10 mb-6 overflow-hidden rounded-t-3xl">
                      <img
                        src="/images/hcltechmdu.jfif"
                        alt="HCLTech Madurai Campus"
                        className="w-full h-full object-cover object-center brightness-[0.8] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] via-[#1E1B18]/40 to-transparent" />
                      <div className="absolute bottom-2.5 left-4 flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-widest text-[#EDE5DC] bg-[#131110]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#332E2A]">
                          HCLTECH MADURAI CAMPUS
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Freelance Engineering Banner */}
                  {item.id === 'freelance' && (
                    <div className="relative h-28 -mx-8 -mt-8 lg:-mx-10 lg:-mt-10 mb-6 overflow-hidden rounded-t-3xl">
                      <img
                        src="/images/Professional%20Pic%204.png"
                        alt="Sonu Thomas — Web & AI Engineering"
                        className="w-full h-full object-cover object-top brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] via-[#1E1B18]/40 to-transparent" />
                      <div className="absolute bottom-2.5 left-4 flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-widest text-[#EDE5DC] bg-[#131110]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#332E2A]">
                          INDEPENDENT DELIVERY
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Header: Period & Index */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold px-3.5 py-1 rounded-full bg-[#2A2522] text-[#EDE5DC] border border-[#3D3732]">
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-copper font-medium">
                        0{index + 1} / 0{EXPERIENCE_DATA.length}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-[#EDE5DC] mb-2 group-hover:text-copper transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 font-medium text-sm mb-6">
                      <Building2 className="w-4 h-4 text-copper" />
                      <span className="text-copper font-semibold">{item.company}</span>
                    </div>

                    {/* Bullet Achievements */}
                    <ul className="space-y-3.5 mb-8">
                      {item.description.slice(0, 3).map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#D5CDC5] text-sm font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  {item.tech && (
                    <div className="relative z-10 pt-4 border-t border-[#2A2522] flex flex-wrap gap-2">
                      {item.tech.map((techItem, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#25211E] border border-[#38332E] text-xs font-mono text-[#D5CDC5] hover:border-copper/40 transition-colors"
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

          {/* Bottom Bar Helper */}
          <div className="flex items-center justify-between text-xs font-mono text-[#78716C] pt-4 border-t border-[#2A2522]">
            <span>Enterprise Scale &bull; High Reliability &bull; Kannur, India</span>
            <div className="flex items-center gap-2 text-copper">
              <span>Scroll down to navigate career cards</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Film Strip Perforations Bottom */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#0E0C0B] border-t border-[#2A2522] overflow-hidden select-none opacity-40">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={`perf-bot-${i}`} className="w-3 h-2 rounded-[2px] bg-[#332E2A] flex-shrink-0 mx-1" />
        ))}
      </div>

      {/* ============================================================ */}
      {/* MOBILE VERTICAL STACKED TIMELINE (Visible only on mobile)    */}
      {/* ============================================================ */}
      <div className="md:hidden py-20 px-6 max-w-xl mx-auto">
        <div className="mb-10">
          <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase block mb-1">
            02 // Career Journey
          </span>
          <h2 className="font-display font-bold text-3xl text-[#EDE5DC] tracking-tight">
            Experience & Track Record
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE_DATA.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#1E1B18] rounded-2xl p-6 border border-[#332E2A] shadow-soft-md space-y-4 overflow-hidden"
            >
              {item.company.toLowerCase().includes('hcltech') && (
                <div className="relative h-24 -mx-6 -mt-6 mb-2 overflow-hidden">
                  <img
                    src="/images/hcltechmdu.jfif"
                    alt="HCLTech Madurai Campus"
                    className="w-full h-full object-cover object-center brightness-[0.8]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[9px] font-mono tracking-widest text-[#EDE5DC] bg-[#131110]/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#332E2A]">
                    HCLTECH MADURAI CAMPUS
                  </span>
                </div>
              )}
              {item.id === 'freelance' && (
                <div className="relative h-24 -mx-6 -mt-6 mb-2 overflow-hidden">
                  <img
                    src="/images/Professional%20Pic%204.png"
                    alt="Sonu Thomas — Independent Delivery"
                    className="w-full h-full object-cover object-top brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[9px] font-mono tracking-widest text-[#EDE5DC] bg-[#131110]/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-[#332E2A]">
                    INDEPENDENT DELIVERY
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#2A2522] text-[#EDE5DC]">
                  {item.period}
                </span>
                <span className="text-xs font-mono text-copper font-semibold">0{index + 1}</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-[#EDE5DC]">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-copper mt-0.5">{item.company}</p>
              </div>

              <ul className="space-y-2.5">
                {item.description.slice(0, 3).map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#D5CDC5] text-xs font-light leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {item.tech && (
                <div className="pt-3 border-t border-[#2A2522] flex flex-wrap gap-1.5">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#25211E] border border-[#38332E] text-[11px] font-mono text-[#D5CDC5]"
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