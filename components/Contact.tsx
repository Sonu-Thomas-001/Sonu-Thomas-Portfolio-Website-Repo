import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Loader2, Send, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { SuccessModal } from './SuccessModal';
import { LinkedInBadge } from './LinkedInBadge';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ambientOrbY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);

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
    <section
      ref={containerRef}
      id="contact"
      className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E0D8] relative overflow-hidden"
    >
      {/* Subtle Floating Ambient Warm Copper Layer */}
      <motion.div
        style={{ y: ambientOrbY }}
        className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-copper/5 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start relative z-10">
        
        {/* Left Column (5 cols): Editorial Invitation */}
        <motion.div style={{ y: copyY }} className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase block mb-1">
              06 // The Open Door
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-ink tracking-tight leading-[1.06]">
              Let's create something remarkable.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-ink-secondary font-light leading-relaxed">
            Whether you are building mission-critical AI systems, planning an enterprise modernization, or exploring collaborative research — my channel is always open.
          </p>

          {/* Personal Availability Card */}
          <div className="p-4 rounded-2xl bg-[#FEFCF9] border border-[#E8E0D8] shadow-soft-sm flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-copper/30 shrink-0">
              <img
                src="/images/Professional%20Pic%206.png"
                alt="Sonu Thomas — Direct Collaboration"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-[#FEFCF9]" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm text-ink leading-tight">Sonu Thomas</h4>
              <span className="text-[11px] font-mono text-emerald-700 font-medium flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active &bull; Open for Collaboration
              </span>
            </div>
          </div>

          {/* Availability Card */}
          <div className="p-5 rounded-2xl bg-[#FEFCF9] border border-[#E8E0D8] shadow-soft-sm space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-copper font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Currently Open For:</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#F5F0EB] text-ink border border-[#E8E0D8]">AI Systems Consulting</span>
              <span className="px-3 py-1 rounded-full bg-[#F5F0EB] text-ink border border-[#E8E0D8]">Production LLMs</span>
              <span className="px-3 py-1 rounded-full bg-[#F5F0EB] text-ink border border-[#E8E0D8]">Full-Stack Platforms</span>
            </div>
          </div>

          {/* LinkedIn Verified Public Profile Badge */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">
              Professional Identity &amp; Verification
            </span>
            <LinkedInBadge theme="light" size="large" type="HORIZONTAL" />
          </div>

          {/* Clean Text-Based Contact Details */}
          <div className="space-y-4 pt-4 border-t border-[#E8E0D8]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">Direct Email</span>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="font-display text-lg sm:text-xl text-ink font-medium hover:text-copper transition-colors underline decoration-[#D8CEC4] underline-offset-4 hover:decoration-copper"
              >
                {PERSONAL_DETAILS.email}
              </a>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">Phone</span>
              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="font-display text-base sm:text-lg text-ink font-medium hover:text-copper transition-colors"
              >
                {PERSONAL_DETAILS.phone}
              </a>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] block">Base</span>
              <span className="text-base text-ink font-medium">
                {PERSONAL_DETAILS.location}
              </span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-6 pt-2">
            <motion.a
              whileHover={{ y: -2 }}
              href={PERSONAL_DETAILS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-copper flex items-center gap-1 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href={PERSONAL_DETAILS.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-copper flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href={PERSONAL_DETAILS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-ink-secondary hover:text-emerald-600 flex items-center gap-1 transition-colors"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Editorial Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-[#FEFCF9] p-8 sm:p-12 rounded-3xl border border-[#E8E0D8] shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-medium">
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
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E0D8] text-ink placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-[#FEFCF9] transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-medium">
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
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E0D8] text-ink placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-[#FEFCF9] transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-medium">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E0D8] text-ink placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-[#FEFCF9] transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-medium">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your initiative, architecture idea, or how we can collaborate..."
                className="w-full px-4 py-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E0D8] text-ink placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-[#FEFCF9] transition-all text-sm resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-full bg-[#1A1614] text-[#EDE5DC] font-semibold text-sm hover:bg-copper hover:text-white transition-all duration-300 shadow-soft-sm hover:shadow-glow-copper flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
            </motion.button>
          </form>
        </motion.div>

      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName={submittedName}
      />
    </section>
  );
};
