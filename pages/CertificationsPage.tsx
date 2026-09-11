import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, Calendar, Award, Search, Sparkles, ExternalLink, ShieldCheck, Layers, Cloud } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { AmbientParticles } from '../components/AmbientParticles';
import { NeuralGridLines } from '../components/NeuralGridLines';
import { SonarRings } from '../components/SonarRings';
import { useSectionProgress } from '../hooks/useSectionProgress';

export const CertificationsPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const pageProgress = useSectionProgress(pageRef);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    CERTIFICATIONS_DATA.forEach(c => {
      if (c.category) set.add(c.category);
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS_DATA.filter(cert => {
      const matchesCat = selectedCategory === 'All' || cert.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.credentialId?.toLowerCase().includes(q) ||
        cert.skills?.some(s => s.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div ref={pageRef} className="pt-28 pb-24 min-h-screen bg-page relative overflow-x-clip">
      <SEO
        title="Licenses & Certifications | Sonu Thomas"
        description="Professional cloud certifications, AWS & GCP credentials, and 90+ Google Cloud skill badges held by Sonu Thomas."
        url="/certifications"
      />

      <AmbientParticles variant="minimal" density="subtle" progress={pageProgress} />
      <NeuralGridLines rows={7} cols={9} scanBar={true} progress={pageProgress} />
      <SonarRings progress={pageProgress} />

      <PageHero
        badge={{ icon: <ShieldCheck className="w-3.5 h-3.5" />, text: 'Audited credentials, 100% verifiable' }}
        title={
          <>
            Licenses &amp; <br />
            <span className="text-copper">certifications</span>
          </>
        }
        subtitle="A comprehensive record of accredited enterprise credentials across AWS, Google Cloud, AI/ML specialization, and distributed systems architecture."
        stats={[
          { label: 'Cloud authority', value: '4x', note: '3x AWS Pro / AI · 1x GCP certified', icon: <Cloud className="w-4 h-4 text-copper" /> },
          { label: 'Hands-on labs', value: '90+', note: 'Google Cloud architecture & AI badges', icon: <Layers className="w-4 h-4 text-copper" />, tone: 'copper' },
          { label: 'Audit status', value: '100%', note: 'Verified with credential IDs', icon: <BadgeCheck className="w-4 h-4 text-emerald-500" />, tone: 'emerald' },
        ]}
        className="mb-12"
      />

      {/* Search & Category Filter Controls */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by certification, issuer, or skill..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/80 dark:bg-[#1E1B18]/80 border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-[#EDE5DC] placeholder:text-[#A8A29E] text-xs font-mono focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/30 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78716C] hover:text-copper"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#1A1614] text-white dark:bg-[#EDE5DC] dark:text-[#1A1614] font-semibold shadow-xs'
                      : 'bg-white/70 dark:bg-white/[0.04] text-[#78716C] dark:text-[#A8A29E] border border-[#E8E0D8] dark:border-white/10 hover:border-copper/40 hover:text-copper'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="popLayout">
            {filteredCerts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 text-center rounded-3xl bg-[#FEFCF9]/80 dark:bg-[#1C1816]/80 border border-[#E8E0D8] dark:border-white/10"
              >
                <Sparkles className="w-8 h-8 text-copper mx-auto mb-3 opacity-60" />
                <h3 className="font-display font-semibold text-lg text-[#1A1614] dark:text-[#FDFBF7]">No matching certifications found</h3>
                <p className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] mt-1">Try another search query or category.</p>
              </motion.div>
            ) : (
              <motion.div layout className="grid md:grid-cols-2 gap-5 sm:gap-6">
                {filteredCerts.map((cert, idx) => (
                  <motion.div
                    layout
                    key={cert.id}
                    initial={{ opacity: 0, y: 24, x: idx % 2 === 0 ? -28 : 28 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: (idx % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FEFCF9]/90 dark:bg-[#1C1816]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 hover:border-copper/40 shadow-[0_4px_20px_rgba(26,22,20,0.04)] hover:shadow-[0_12px_32px_rgba(196,125,90,0.12)] transition-all duration-300 group overflow-hidden"
                  >
                    {/* Top Specular Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Card Header: Issuer + Level + Date */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-semibold text-copper bg-copper/10 px-2.5 py-0.5 rounded-full border border-copper/20">
                            {cert.issuer}
                          </span>
                          {cert.level && (
                            <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] bg-[#E8E0D8]/40 dark:bg-white/[0.05] px-2 py-0.5 rounded-md">
                              {cert.level}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-[#78716C] dark:text-[#9C948B] whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper transition-colors leading-snug">
                        {cert.title}
                      </h3>

                      {/* Skills Covered */}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 mt-3.5">
                          {cert.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E0D8]/30 dark:bg-white/[0.04] text-[#574F4A] dark:text-[#C5BEB7] border border-[#E8E0D8]/50 dark:border-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer: Credential ID & Verification */}
                    <div className="pt-4 mt-5 border-t border-[#E8E0D8] dark:border-white/10 flex items-center justify-between text-xs font-mono">
                      {cert.credentialId ? (
                        <span className="text-[#78716C] dark:text-[#9C948B] flex items-center gap-1.5 truncate">
                          <BadgeCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">ID: {cert.credentialId}</span>
                        </span>
                      ) : (
                        <span className="text-[#A8A29E]">Issued Certification</span>
                      )}

                      <span className="text-copper group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px] font-medium shrink-0 ml-2">
                        Verified
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
