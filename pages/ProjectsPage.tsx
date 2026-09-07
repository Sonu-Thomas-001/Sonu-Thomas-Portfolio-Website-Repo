import React from 'react';
import { Projects } from '../components/Projects';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO 
        title="AI Engineering Projects & Case Studies | Sonu Thomas"
        description="Explore the technical portfolio of Sonu Thomas, featuring full-stack applications, enterprise automation, and AI integrations."
        url="/projects"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold text-sm mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Archive</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Selected Works & <br/>
            <span className="gradient-text">AI Systems Architecture</span>
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            A comprehensive catalog of autonomous agent workflows, generative AI platforms, 
            enterprise integrations, and high-performance web systems.
          </p>
        </div>
      </div>
      
      <Projects />
    </div>
  );
};
