import React, { useEffect } from 'react';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO 
        title="Contact Sonu Thomas | AI Software Engineer"
        description="Get in touch with Sonu Thomas, AI Software Engineer based in India. Available for collaborations, consultations, and enterprise engineering."
        url="/contact"
        keywords="Contact Sonu Thomas, Hire AI Software Engineer, Machine Learning Engineer, HCLTech Engineer, Kannur Kerala"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold text-sm mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span>Back to Home</span>
        </Link>
      </div>
      <Contact />
    </div>
  );
};
