import React from 'react';
import { LocationPageTemplate } from './LocationPageTemplate';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SoftwareEngineerKerala = () => {
  return (
    <LocationPageTemplate
      title="Software Engineer in Kerala | Sonu Thomas"
      h1="Software Engineer in Kerala"
      description="Looking for a highly skilled Software Engineer in Kerala? Sonu Thomas is an IIT Guwahati graduate offering enterprise-level software engineering."
      url="/software-engineer-kerala"
      icon={<MapPin className="w-8 h-8" />}
      content={
        <>
          <p>
            Welcome! I am <strong>Sonu Thomas</strong>, a dedicated <strong>Software Engineer in Kerala</strong>. My professional focus is on architecting scalable software systems, optimizing backend infrastructures, and delivering complete end-to-end technology solutions.
          </p>
          
          <h2>Enterprise-Grade Engineering in Kerala</h2>
          <p>
            As a Software Engineer currently working with HCLTech, I handle complex, high-stakes enterprise applications. I bring this same level of rigorous engineering discipline to all the projects I undertake. My base in Kannur, Kerala allows me to provide world-class engineering solutions natively to the region.
          </p>
          
          <h3>Core Software Engineering Competencies</h3>
          <ul>
            <li><strong>Systems Architecture:</strong> Designing resilient, high-availability software architectures capable of scaling to thousands of users.</li>
            <li><strong>Full-Stack Proficiency:</strong> Mastery over both frontend (React, modern JS) and backend technologies, ensuring seamless integration across the stack.</li>
            <li><strong>DevOps & Deployment:</strong> Managing CI/CD pipelines, cloud deployments, and production environment stability.</li>
            <li><strong>Problem Solving:</strong> Applying advanced algorithms, data structures, and mathematical modeling (honed at IIT Guwahati) to solve complex technical challenges.</li>
          </ul>

          <h2>A Holistic Approach to Software</h2>
          <p>
            Being a top Software Engineer in Kerala implies more than just writing code. It requires understanding business objectives, managing risk during production changes, and continuously adapting to new technologies like AI and cloud computing. I pride myself on writing clean, maintainable, and secure code.
          </p>

          <p>
            You can read more about my professional journey and philosophy on my <Link to="/">home page</Link>, or read my technical <Link to="/insights">insights and articles</Link>.
          </p>

          <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2 mt-0">Need a Software Engineer?</h3>
            <p className="mb-4">From consultation to execution, let's build robust software.</p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Contact Sonu Thomas</Link>
          </div>
        </>
      }
    />
  );
};
