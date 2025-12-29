
import React from 'react';
import { Hero } from '../components/Hero';
import { TechMarquee } from '../components/TechMarquee';
import { ValueProp } from '../components/ValueProp';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { MissionVision } from '../components/MissionVision';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { ProblemSolving } from '../components/ProblemSolving';
import { Skills } from '../components/Skills';
import { Availability } from '../components/Availability';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <TechMarquee />
      <ValueProp />
      <Stats />
      <About />
      <MissionVision />
      <Experience />
      <Education />
      <ProblemSolving />
      <Skills />
      <Availability />
      <Contact />
    </div>
  );
};
