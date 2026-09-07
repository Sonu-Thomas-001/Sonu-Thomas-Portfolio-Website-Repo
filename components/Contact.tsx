import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Loader2, Send } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { SuccessModal } from './SuccessModal';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-slate-200/80">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column (5 cols): Large Personal Warm Headline & Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase block mb-1">
              06 // Get in Touch
            </span>
            <h2 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-[1.08]">
              Let's build something together.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Whether you have a specific AI product in mind, an enterprise engineering initiative, or simply want to connect — my inbox is always open.
          </p>

          {/* Clean Text-Based Contact Details */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Direct Email</span>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="font-display text-lg sm:text-xl text-slate-900 font-medium hover:text-primary transition-colors underline decoration-slate-300 underline-offset-4 hover:decoration-primary"
              >
                {PERSONAL_DETAILS.email}
              </a>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Phone</span>
              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="font-display text-base sm:text-lg text-slate-800 font-medium hover:text-primary transition-colors"
              >
                {PERSONAL_DETAILS.phone}
              </a>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Location</span>
              <span className="text-base text-slate-700 font-medium">
                {PERSONAL_DETAILS.location}
              </span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href={PERSONAL_DETAILS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-primary flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_DETAILS.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_DETAILS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-emerald-600 flex items-center gap-1"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column (7 cols): Editorial Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-soft-md space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-500 font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or how we can collaborate..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-primary transition-all duration-300 shadow-soft-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName={submittedName}
      />
    </section>
  );
};
