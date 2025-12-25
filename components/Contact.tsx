import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Globe, Check, Loader2, ArrowRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss the latest in AI and Web Dev? 
            I'm always open to new opportunities and professional connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info Column */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-surface/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 space-y-8 hover:border-primary/20 transition-colors duration-300">
                {/* Email */}
                <div className="flex items-start gap-5 group">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                        <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-lg text-white font-semibold hover:text-primary transition-colors flex items-center gap-2">
                            {PERSONAL_DETAILS.email}
                            <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 group">
                    <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                        <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-lg text-white font-semibold hover:text-secondary transition-colors flex items-center gap-2">
                            {PERSONAL_DETAILS.phone}
                            <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </a>
                    </div>
                </div>

                 {/* Location */}
                 <div className="flex items-start gap-5 group">
                    <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                        <p className="text-lg text-white font-semibold">
                            {PERSONAL_DETAILS.location}
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Connect Externally</h3>
                <div className="flex gap-4">
                    <a href="#" className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-surface hover:bg-[#0077b5] border border-white/5 hover:border-transparent group transition-all duration-300">
                        <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cleanWhite" />
                        <span className="font-medium text-slate-400 group-hover:text-cleanWhite">LinkedIn</span>
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-surface hover:bg-primary border border-white/5 hover:border-transparent group transition-all duration-300">
                        <Globe className="w-5 h-5 text-slate-400 group-hover:text-cleanWhite" />
                        <span className="font-medium text-slate-400 group-hover:text-cleanWhite">Website</span>
                    </a>
                </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-surface p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group">
                {/* Decorative border gradient on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none"></div>
                
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-dark/50 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300" 
                    placeholder="John Doe" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-dark/50 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300" 
                    placeholder="john@example.com" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-dark/50 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none" 
                    placeholder="Hi, I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={status !== 'idle'}
                    className={`w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden relative ${
                        status === 'success' 
                        ? 'bg-emerald-500 text-cleanWhite cursor-default' 
                        : 'bg-primary hover:bg-primary/90 text-cleanWhite hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]'
                    }`}
                >
                    <AnimatePresence mode='wait'>
                        {status === 'idle' && (
                            <motion.div 
                                key="idle"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="flex items-center gap-2"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </motion.div>
                        )}
                        {status === 'submitting' && (
                            <motion.div 
                                key="submitting"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="flex items-center gap-2"
                            >
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </motion.div>
                        )}
                        {status === 'success' && (
                            <motion.div 
                                key="success"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="flex items-center gap-2"
                            >
                                <Check className="w-5 h-5" />
                                Message Sent!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};