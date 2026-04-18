import React from 'react';
import { Blog } from '../components/Blog';
import { AIJourney } from '../components/AIJourney';
import { Research } from '../components/Research';
import { Experiments } from '../components/Experiments';
import { Newsletter } from '../components/Newsletter';
import { Talks } from '../components/Talks';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <SEO 
        title="AI & Tech Insights | Sonu Thomas"
        description="Insights, research, and technical writing on AI, Machine Learning, and Web Engineering from Sonu Thomas."
        url="/insights"
      />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Sonu Thomas Insights, Research <br/>
          <span className="text-secondary">& Future Vision</span>
        </h1>
        <h2 className="text-2xl text-slate-300 font-semibold mb-4">AI & Data Science Enthusiast</h2>
        <p className="text-xl text-slate-400 max-w-2xl">
          Exploring the intersection of software engineering and artificial intelligence. 
          Here I share my learning journey, experimental concepts, and technical writing as an engineer at HCLTech.
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