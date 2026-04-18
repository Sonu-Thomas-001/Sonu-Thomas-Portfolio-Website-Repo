import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PERSONAL_DETAILS } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Sonu Thomas",
    "url": "https://www.sonuthomas.me",
    "image": "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host@master/Sonu-Thomas-Portfolio-Website-Repo/ProfilePic.jpg",
    "sameAs": [
      PERSONAL_DETAILS.social.linkedin,
      PERSONAL_DETAILS.social.github,
      PERSONAL_DETAILS.social.instagram,
      PERSONAL_DETAILS.social.website
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "HCLTech"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "IIT Guwahati"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={`https://www.sonuthomas.me${url}`} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {url && <meta property="twitter:url" content={`https://www.sonuthomas.me${url}`} />}

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};
