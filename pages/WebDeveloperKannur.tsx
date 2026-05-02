import React from 'react';
import { LocationPageTemplate } from './LocationPageTemplate';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WebDeveloperKannur = () => {
  return (
    <LocationPageTemplate
      title="Best Web Developer in Kannur | Sonu Thomas"
      h1="Web Developer in Kannur"
      description="Looking for a web developer in Kannur? Sonu Thomas is a Software Engineer specializing in modern web development, scalable applications, and AI integrations."
      url="/web-developer-kannur"
      icon={<Code className="w-8 h-8" />}
      content={
        <>
          <p>
            If you are looking for a reliable and skilled <strong>Web Developer in Kannur</strong>, you have found the right profile. My name is <strong>Sonu Thomas</strong>, and I am a professional Software Engineer currently working at HCLTech. Leveraging my background from IIT Guwahati, I bring enterprise-grade web development right here to Kannur, Kerala.
          </p>
          
          <h2>Local Expertise, Global Standards</h2>
          <p>
            The digital landscape in Kerala is rapidly evolving, and businesses need websites and web applications that are fast, secure, and built to scale. As a web developer in Kannur, I focus on delivering global standards. I specialize in:
          </p>
          <ul>
            <li><strong>Modern Frontend Development:</strong> Building highly interactive and responsive user interfaces using React, Vue, and modern JavaScript frameworks.</li>
            <li><strong>Robust Backend Architectures:</strong> Designing scalable backend APIs and databases that power complex web applications perfectly.</li>
            <li><strong>SEO & Performance Optimization:</strong> Ensuring your website ranks high on Google (like this page!) and loads instantly to retain users.</li>
          </ul>

          <h2>Why Work With Sonu Thomas?</h2>
          <p>
            Finding the right web development talent in Kannur can be challenging. Working with me ensures you get a dedicated professional who understands both the technical intricacies and the business requirements. From initial design to production deployment and maintenance, I provide a complete, transparent, and high-quality web development service.
          </p>

          <p>
            Interested in learning more about what I do? Check out the <Link to="/">home page</Link> to see my core skills, or explore my <Link to="/projects">latest projects</Link> to see my web development work in action.
          </p>

          <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2 mt-0">Ready to build something?</h3>
            <p className="mb-4">Get in touch for web development services in Kannur, Kerala.</p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Contact Sonu Thomas</Link>
          </div>
        </>
      }
    />
  );
};
