import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    content: "Sonu transformed our outdated business website into a high-performance platform. His attention to detail and ability to translate our vague requirements into a concrete digital solution was impressive. We saw a 40% increase in inquiries within the first month.",
    author: "Client (Confidential)",
    role: "Business Owner",
    company: "Retail Sector",
    rating: 5
  },
  {
    id: 2,
    content: "As a Production Change Manager, Sonu brings a rare combination of technical precision and calm under pressure. He doesn't just manage changes; he analyzes risks proactively. His automation scripts have saved the team countless hours of manual validation.",
    author: "Senior Manager",
    role: "Service Delivery Lead",
    company: "HCLTech",
    rating: 5
  },
  {
    id: 3,
    content: "Working with Sonu on freelance projects is always a smooth experience. He writes clean, scalable code and has a keen eye for UX. His understanding of both backend logic and frontend aesthetics makes him a complete engineer.",
    author: "Collaborator",
    role: "Senior UI Designer",
    company: "Freelance Network",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-primary" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trusted by Professionals</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Feedback from clients, managers, and collaborators who have experienced my work ethic and technical delivery firsthand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark border border-white/5 rounded-2xl p-8 relative hover:border-white/10 transition-colors duration-300 flex flex-col hover:shadow-lg hover:shadow-primary/5 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-primary/10 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10 italic">
                "{item.content}"
              </p>

              {/* Author Info */}
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {item.author.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">{item.author}</h4>
                    <p className="text-xs text-slate-500">{item.role}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};