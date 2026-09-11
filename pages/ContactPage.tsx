import React from 'react';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO
        title="Contact Sonu Thomas | AI Software Engineer"
        description="Get in touch with Sonu Thomas, AI Software Engineer based in India. Available for collaborations, consultations, and enterprise engineering."
        url="/contact"
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-mono text-xs uppercase tracking-wider mb-4 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>
      <Contact />
    </div>
  );
};
