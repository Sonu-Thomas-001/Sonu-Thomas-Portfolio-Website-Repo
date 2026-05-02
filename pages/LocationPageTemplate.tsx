import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code, Cpu } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';

export const LocationPageTemplate: React.FC<{
  title: string;
  h1: string;
  description: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  url: string;
}> = ({ title, h1, description, icon, content, url }) => {
  return (
    <PageTransition>
      <SEO
        title={title}
        description={description}
        url={url}
      />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 text-primary">
            {icon}
            <span className="font-mono text-sm uppercase tracking-wider">Sonu Thomas</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {h1}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-400 prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80">
            {content}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};
