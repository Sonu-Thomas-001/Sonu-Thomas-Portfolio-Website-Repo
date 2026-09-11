import React from 'react';
import { BookOpen } from 'lucide-react';
import { Blog } from '../components/Blog';
import { Newsletter } from '../components/Newsletter';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';

export const InsightsPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-page">
      <SEO
        title="AI Engineering Insights & Articles | Sonu Thomas"
        description="Technical writing and architecture perspectives by Sonu Thomas, AI Engineer at HCLTech."
        url="/insights"
      />

      <PageHero
        badge={{ icon: <BookOpen className="w-3.5 h-3.5" />, text: 'Articles and thought leadership' }}
        title={
          <>
            AI engineering insights &amp; <br />
            <span className="text-copper">technical articles</span>
          </>
        }
        subtitle="In-depth perspectives and architectural analyses at the intersection of enterprise software, machine learning, and production generative AI."
        className="mb-8"
      />

      <Blog />
      <Newsletter />
    </div>
  );
};
