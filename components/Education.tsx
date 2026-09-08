import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E0D8]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase block mb-1">
            03 // Academic Rigor
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            Education & Foundations
          </h2>
        </div>
        <p className="text-ink-secondary text-sm max-w-md font-light leading-relaxed">
          Deep theoretical grounding in high-dimensional linear algebra, algorithmic complexity, deep neural networks, and statistical learning.
        </p>
      </div>

      {/* 3-Column Clean Foundation Blocks */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {EDUCATION_DATA.map((edu, idx) => {
          const isIIT = edu.institution.toLowerCase().includes('guwahati');
          const isPlusTwo = edu.institution.toLowerCase().includes('plus') || edu.degree.toLowerCase().includes('higher') || edu.degree.toLowerCase().includes('plus');
          const isSSLC = !isIIT && !isPlusTwo;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl bg-[#FEFCF9] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                isIIT
                  ? 'border-2 border-copper/50 shadow-soft-md ring-4 ring-copper/10'
                  : 'border border-[#E8E0D8] shadow-soft-sm hover:border-copper/40'
              }`}
            >
              {/* Campus Image Banners */}
              {isIIT && (
                <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-3xl">
                  <img 
                    src="/images/IITG.jpg" 
                    alt="IIT Guwahati Campus" 
                    className="w-full h-full object-cover object-center brightness-[0.95] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FEFCF9] via-[#FEFCF9]/20 to-black/25" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono tracking-widest text-ink font-semibold bg-[#FEFCF9]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E8E0D8] shadow-sm">
                    IIT GUWAHATI CAMPUS
                  </span>
                </div>
              )}
              {isPlusTwo && (
                <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-3xl">
                  <img 
                    src="/images/Sjhss_plustwo.jpeg" 
                    alt="St. Joseph's Higher Secondary School Plus Two Campus" 
                    className="w-full h-full object-cover object-center brightness-[0.95] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FEFCF9] via-[#FEFCF9]/20 to-black/25" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono tracking-widest text-ink font-semibold bg-[#FEFCF9]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E8E0D8] shadow-sm">
                    SJHSS PLUS TWO CAMPUS
                  </span>
                </div>
              )}
              {isSSLC && (
                <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-3xl">
                  <img 
                    src="/images/Sjhss_10th.webp" 
                    alt="St. Joseph's High School Campus" 
                    className="w-full h-full object-cover object-center brightness-[0.95] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FEFCF9] via-[#FEFCF9]/20 to-black/25" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-mono tracking-widest text-ink font-semibold bg-[#FEFCF9]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E8E0D8] shadow-sm">
                    SJHSS SECONDARY SCHOOL
                  </span>
                </div>
              )}

              {/* Corner Watermark */}
              <span className="absolute -top-2 -right-2 font-mono font-bold text-6xl text-[#1A1614]/[0.025] select-none pointer-events-none">
                0{idx + 1}
              </span>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#78716C] px-3 py-1 rounded-full bg-[#F5F0EB] border border-[#E8E0D8]">
                    {edu.period}
                  </span>
                  {isIIT ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-copper/10 text-copper border border-copper/30">
                      <Award className="w-3 h-3" />
                      Top Tier Institute
                    </span>
                  ) : (
                    <GraduationCap className="w-4 h-4 text-copper/60" />
                  )}
                </div>

                <h3 className="font-display font-bold text-xl text-ink mb-2 group-hover:text-copper transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm font-semibold text-copper mb-3">
                  {edu.degree}
                </p>

                {edu.details && (
                  <p className="text-xs text-ink-secondary font-light leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E0D8] flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                <span className="font-semibold text-ink">NODE // 0{idx + 1}</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
