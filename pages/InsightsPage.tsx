import React from 'react';
import { Blog } from '../components/Blog';
import { AIJourney } from '../components/AIJourney';
import { Research } from '../components/Research';
import { Experiments } from '../components/Experiments';
import { Newsletter } from '../components/Newsletter';
import { Talks } from '../components/Talks';

export const InsightsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Insights, Research <br/>
          <span className="text-secondary">& Future Vision</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Exploring the intersection of software engineering and artificial intelligence. 
          Here I share my learning journey, experimental concepts, and technical writing.
        </p>
      </div>

      <Blog />
      <AIJourney />
      <Research />
      <Experiments />
      <Talks />
      <Newsletter />
    </div>
  );
};