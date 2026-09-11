import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { Projects } from '../components/Projects';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';

export const ProjectsPage: React.FC = () => {
  const bandRef = useRef<HTMLDivElement>(null);
  const bandEntry = useSectionProgress(bandRef, ['start end', 'start start']);
  const bandY = useParallax(bandEntry, [72, 0], [0, 1], 0);

  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO
        title="AI Engineering Projects & Case Studies | Sonu Thomas"
        description="Explore the technical portfolio of Sonu Thomas, featuring full-stack applications, enterprise automation, and AI integrations."
        url="/projects"
      />

      <PageHero
        badge={{ icon: <Cpu className="w-3.5 h-3.5" />, text: 'Flagship engineering and systems architecture' }}
        title={
          <>
            Autonomous agents &amp; <br />
            <span className="text-copper">production architecture</span>
          </>
        }
        subtitle="A fleet of 100+ core digital workers orchestrated by an intelligent central brain for autonomous ITSM, DevOps, SRE, and enterprise resilience."
        className="mb-4"
      />

      {/* The dark projects band rises over the light header as it enters */}
      <motion.div ref={bandRef} style={{ y: bandY }} className="relative z-10 will-change-transform">
        <Projects isHomepage={false} />
      </motion.div>
    </div>
  );
};
