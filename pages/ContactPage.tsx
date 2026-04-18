import React, { useEffect } from 'react';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { Availability } from '../components/Availability';
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Sonu Thomas | Let's Connect"
        description="Get in touch with Sonu Thomas, Software Engineer based in India. Open to new opportunities, collaborations, and discussions on AI and Web Engineering."
        url="/contact"
        keywords="Contact Sonu Thomas, Hire Software Engineer, HCLTech Engineer, Web Developer India"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Sonu Thomas</h1>
          </motion.div>
      </div>
      <Contact />
      <Availability />
    </div>
  );
};
