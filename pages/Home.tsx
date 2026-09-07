import React from 'react';
import { Hero } from '../components/Hero';
import { TechMarquee } from '../components/TechMarquee';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  return (
    <div className="bg-page">
      <SEO 
        title="Sonu Thomas | AI Software Engineer | Intelligent Systems & Web Apps"
        description="Sonu Thomas is an AI Software Engineer at HCLTech specializing in AI agents, enterprise systems, full-stack web engineering, and machine learning."
        url="/"
      />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects isHomepage={true} />
      <Contact />
    </div>
  );
};
