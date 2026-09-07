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
    <div className="pt-28 min-h-screen bg-page">
      <SEO 
        title="AI Engineering Insights, Research & Articles | Sonu Thomas"
        description="Technical writing, AI research, and architecture blueprints by Sonu Thomas, AI Software Engineer at HCLTech."
        url="/insights"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-mono text-xs uppercase tracking-wider mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-2">
            Research &amp; Exploration // Architecture
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            AI Engineering Insights &amp; <br />
            <span className="gradient-text">Future Systems</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-light leading-relaxed">
            Technical writing, research syntheses, and experiments at the intersection of enterprise software, 
            machine learning, and autonomous agentic workflows.
          </p>
        </div>
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