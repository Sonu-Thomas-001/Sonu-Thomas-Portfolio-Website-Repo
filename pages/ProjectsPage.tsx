import React from 'react';
import { Projects } from '../components/Projects';
import { CaseStudies } from '../components/CaseStudies';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Portfolio & <br/>
          <span className="text-primary">Case Studies</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          A deep dive into my technical projects, featuring full-stack applications, 
          enterprise automations, and data science experiments.
        </p>
      </div>
      
      <Projects />
      <div className="py-12"></div>
      <CaseStudies />
    </div>
  );
};