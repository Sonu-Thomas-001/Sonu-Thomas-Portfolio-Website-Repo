import React from 'react';
import { Projects } from '../components/Projects';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO 
        title="AI Engineering Projects & Case Studies | Sonu Thomas"
        description="Explore the technical portfolio of Sonu Thomas, featuring full-stack applications, enterprise automation, and AI integrations."
        url="/projects"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-mono text-xs uppercase tracking-wider mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-2">
            Archive // All Projects
          </span>
          <h1 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Selected Works & <br />
            <span className="gradient-text">Systems Architecture</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-light leading-relaxed">
            A comprehensive catalog of autonomous agent workflows, generative AI platforms, 
            enterprise integrations, and high-performance web applications.
          </p>
        </div>
      </div>
      
      <Projects isHomepage={false} />
    </div>
  );
};
