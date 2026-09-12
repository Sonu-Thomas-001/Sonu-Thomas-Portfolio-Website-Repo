import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare } from 'lucide-react';
import { Contact } from '../components/Contact';
import { FAQ, FAQS } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO
        title="Contact Sonu Thomas | AI Engineer"
        description="Get in touch with Sonu Thomas, AI Engineer based in India. Available for collaborations, consultations, and enterprise engineering."
        url="/contact"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

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
      <FAQ />
    </div>
  );
};
