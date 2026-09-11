import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO
        title="Contact Sonu Thomas | AI Software Engineer"
        description="Get in touch with Sonu Thomas, AI Software Engineer based in India. Available for collaborations, consultations, and enterprise engineering."
        url="/contact"
      />

      <PageHero
        badge={{ icon: <MessageSquare className="w-3.5 h-3.5" />, text: 'Accepting inquiries' }}
        title={
          <>
            Get in <span className="text-copper">touch</span>
          </>
        }
        subtitle="Direct channels for collaborations, technical consulting, and enterprise AI engineering engagements."
      />

      <Contact />
    </div>
  );
};
