import React from 'react';
import { LocationPageTemplate } from './LocationPageTemplate';
import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AIDeveloperKerala = () => {
  return (
    <LocationPageTemplate
      title="AI Developer in Kerala | Sonu Thomas"
      h1="AI Developer in Kerala"
      description="Sonu Thomas is an expert AI Developer in Kerala. Specializing in machine learning, automation, and integrating intelligent systems into modern web applications."
      url="/ai-developer-kerala"
      icon={<Cpu className="w-8 h-8" />}
      content={
        <>
          <p>
            The future of technology is intelligent. As an <strong>AI Developer in Kerala</strong>, I, <strong>Sonu Thomas</strong>, am dedicated to bringing cutting-edge Artificial Intelligence and Machine Learning solutions to businesses and projects across the state and beyond.
          </p>
          
          <h2>Pioneering AI Solutions in Kerala</h2>
          <p>
            Whether you are looking to automate tedious workflows, generate insights from complex datasets, or build conversational AI assistants, having a skilled AI developer is crucial. Based in Kannur, Kerala, my expertise bridges the gap between complex AI models and practical, user-facing applications.
          </p>
          <ul>
            <li><strong>Intelligent Automation:</strong> Streamlining business processes using advanced scripting and AI-driven decision-making tools.</li>
            <li><strong>Machine Learning Integration:</strong> Implementing predictive models and data science algorithms seamlessly into existing software infrastructure.</li>
            <li><strong>Large Language Models (LLMs):</strong> Building custom chatbots, semantic search engines, and content generation tools powered by generative AI.</li>
          </ul>

          <h2>My AI Journey</h2>
          <p>
            My foundation in Data Science and Artificial Intelligence was solidified during my time at IIT Guwahati. Since then, as a Software Engineer at HCLTech, I have continued to explore and implement AI solutions at scale. Creating an AI pipeline is only half the battle; deploying it securely and efficiently so that users can interact with it in real-time is where my dual expertise in AI and full-stack web development shines.
          </p>

          <p>
            To see practical applications of my AI work, please visit the <Link to="/">home page</Link> or dive into specific <Link to="/projects">AI & ML projects</Link> in my portfolio.
          </p>

          <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2 mt-0">Looking for an AI Expert?</h3>
            <p className="mb-4">Let's discuss how AI can transform your project in Kerala.</p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Contact Sonu Thomas</Link>
          </div>
        </>
      }
    />
  );
};
