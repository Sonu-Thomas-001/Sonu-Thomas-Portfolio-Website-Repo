import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PERSONAL_DETAILS } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  const normalizedPath = url ? (url.startsWith('/') ? url : `/${url}`) : '';
  const canonicalUrl = `https://www.sonuthomas.me${normalizedPath === '/' ? '' : normalizedPath}`;
  const ogImage = image || "https://www.sonuthomas.me/images/Professional%20Pic%20Square.jpg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": url === '/' || !url ? "ProfilePage" : "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.sonuthomas.me/#website",
          "name": "Sonu Thomas Portfolio",
          "url": "https://www.sonuthomas.me/"
        },
        "about": {
          "@id": "https://www.sonuthomas.me/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.sonuthomas.me/#person",
        "name": "Sonu Thomas",
        "url": "https://www.sonuthomas.me/",
        "image": ogImage,
        "jobTitle": "AI Engineer",
        "worksFor": {
          "@type": "Organization",
          "name": "HCLTech",
          "url": "https://www.hcltech.com/"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "IIT Guwahati",
          "url": "https://www.iitg.ac.in/"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kannur",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "sameAs": [
          PERSONAL_DETAILS.social.linkedin,
          PERSONAL_DETAILS.social.github,
          PERSONAL_DETAILS.social.instagram,
          PERSONAL_DETAILS.social.website
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Generative AI",
          "Large Language Models",
          "AI Agents",
          "Retrieval-Augmented Generation",
          "Full Stack Development",
          "Python",
          "Java",
          "TypeScript",
          "React"
        ]
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#FAFBFD" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sonu Thomas Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};
