import React from 'react';
import { Hero } from '../components/Hero';
import { ValueProp } from '../components/ValueProp';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { MissionVision } from '../components/MissionVision';
import { Experience } from '../components/Experience';
import { ProblemSolving } from '../components/ProblemSolving';
import { Skills } from '../components/Skills';
import { Tools } from '../components/Tools';
import { Process } from '../components/Process';
import { GrowthTimeline } from '../components/GrowthTimeline';
import { Availability } from '../components/Availability';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ValueProp />
      <Stats />
      <About />
      <MissionVision />
      <Experience />
      <ProblemSolving />
      <Skills />
      <Tools />
      <Process />
      <GrowthTimeline />
      <Availability />
      <Contact />
    </div>
  );
};