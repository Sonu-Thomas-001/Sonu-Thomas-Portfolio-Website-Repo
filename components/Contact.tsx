import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle, ArrowRight, Sparkles, Check, Loader2 } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { SuccessModal } from './SuccessModal';

export const Contact: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData();
    formData.append('entry.1613475426', formState.name);
    formData.append('entry.772609247', formState.email);
    formData.append('entry.1138590408', formState.phone);
    formData.append('entry.954219206', formState.message);

    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLScpY_oNEAMrUIeEyZxsPlY9JpWgTp8JnJSjkqb3A1lJ0VfN3g/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );
      setSubmittedName(formState.name);
      setIsModalOpen(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setStatus('idle');
    } catch (error) {
      console.error('Form submission error', error);
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section ref={containerRef} id="contact" className="py-24 lg:py-32 bg-page relative overflow-hidden">
      
      <motion.div style={{ y: cardsY }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Let's Build Something Intelligent
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Have a project in mind, interested in enterprise AI collaboration, or looking to discuss modern software architecture? Reach out anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 cols): Direct Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-soft-md space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary-50 text-primary rounded-2xl border border-primary/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono font-medium text-slate-400 mb-0.5 uppercase tracking-wider">Email</p>
                  <a 
                    href={`mailto:${PERSONAL_DETAILS.email}`} 
                    className="text-base font-semibold text-slate-900 hover:text-primary transition-colors block break-words"
                  >
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-200/60 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono font-medium text-slate-400 mb-0.5 uppercase tracking-wider">Phone</p>
                  <a 
                    href={`tel:${PERSONAL_DETAILS.phone}`} 
                    className="text-base font-semibold text-slate-900 hover:text-primary transition-colors block"
                  >
                    {PERSONAL_DETAILS.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-200/60 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono font-medium text-slate-400 mb-0.5 uppercase tracking-wider">Location</p>
                  <p className="text-base font-semibold text-slate-900">
                    {PERSONAL_DETAILS.location}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Channels Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-soft-md">
              <h3 className="font-display font-bold text-lg text-slate-900 mb-4">Direct Channels</h3>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={PERSONAL_DETAILS.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-50 hover:bg-[#0077b5] border border-slate-200/80 hover:border-transparent group transition-all duration-200 text-slate-700 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="font-semibold text-xs">LinkedIn</span>
                </a>
                
                <a 
                  href={PERSONAL_DETAILS.social.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-50 hover:bg-[#25D366] border border-slate-200/80 hover:border-transparent group transition-all duration-200 text-slate-700 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold text-xs">WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column (7 cols): Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-soft-lg space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider">
                  Phone Number (Optional)
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider">
                  Project Brief or Inquiry
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, timeline, or engineering inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-600 active:scale-[0.99] shadow-soft-md hover:shadow-glow-primary transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </motion.div>

      <SuccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName={submittedName}
      />
    </section>
  );
};
