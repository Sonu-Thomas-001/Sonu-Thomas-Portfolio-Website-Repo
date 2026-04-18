
import React from 'react';
import { Projects } from '../components/Projects';
import { CaseStudies } from '../components/CaseStudies';
import { Process } from '../components/Process';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dark">
      <SEO 
        title="Projects & Case Studies | Sonu Thomas"
        description="Explore the technical portfolio of Sonu Thomas, featuring full-stack applications, enterprise automation, and AI integrations."
        url="/projects"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Sonu Thomas Projects & <br/>
          <span className="text-primary">Case Studies</span>
        </h1>
        <h2 className="text-2xl text-slate-300 font-semibold mb-4">Web Developer & Automation Specialist</h2>
        <p className="text-xl text-slate-400 max-w-2xl">
          A deep dive into my technical projects, featuring full-stack applications, 
          enterprise automations, and data science experiments built by Sonu Thomas at HCLTech and independently.
        </p>
      </div>
      
      <Projects />
      <Process />
      <CaseStudies />
    </div>
  );
};
