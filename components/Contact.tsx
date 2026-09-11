import React, { useState, useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';
import {
  ArrowUpRight,
  Loader2,
  Send,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Bot,
  Code2,
  Clock,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import { SuccessModal } from './SuccessModal';
import { AmbientParticles } from './AmbientParticles';
import { NeuralGridLines } from './NeuralGridLines';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useSectionProgress(containerRef);

  const ambientOrbY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const headlineClip = useParallax(
    scrollYProgress,
    ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
    [0.06, 0.26],
    'inset(0% 0% 0% 0%)'
  );
  const headlineY = useParallax(scrollYProgress, [40, 0], [0.06, 0.26], 0);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

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
      className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#E8E0D8] dark:border-white/10 relative overflow-x-clip"
    >
      {/* Subtle Floating Ambient Warm Copper Glow Layer */}
      <motion.div
        style={{ y: ambientOrbY }}
        className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-copper/5 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Ambient Floating Cyber-Orbs */}
      <AmbientParticles variant="orbs" density="subtle" progress={scrollYProgress} />

      {/* Perspective neural grid — rushes toward the viewer as the section scrolls */}
      <NeuralGridLines rows={8} cols={10} scanBar={true} progress={scrollYProgress} />

      {/* 1. Section Header & Narrative Across Top */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mb-12 sm:mb-16 relative z-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase">
            06 // DIRECT CHANNELS &amp; COLLABORATION
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-copper" />
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Accepting Inquiries</span>
          </div>
        </div>
        <motion.h2
          style={{ clipPath: headlineClip, y: headlineY }}
          className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#1A1614] dark:text-[#FDFBF7] tracking-tight leading-[1.08]"
        >
          Let's create something <span className="text-copper">remarkable</span>.
        </motion.h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A4340] dark:text-[#D6D3D1] font-normal leading-relaxed">
          Whether you are architecting autonomous AI agents, planning an enterprise integration, or exploring technical consulting — my direct channels are open.
        </p>
      </motion.div>

      {/* 2. Symmetrical 2-Column Grid (6 cols / 6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch lg:items-start relative z-10">
        
        {/* Left Column (6 cols): Channels Dossier & Direct Comms */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-between gap-4"
        >
          
          {/* Profile Card */}
          <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-copper/40 shrink-0 shadow-xs">
                <img
                  src="/images/Professional%20Pic%206.png"
                  alt="Sonu Thomas — Direct Collaboration"
                  className="w-full h-full object-cover object-top block"
                />
                <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#1E1B18]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#1A1614] dark:text-[#FDFBF7] leading-tight">
                  Sonu Thomas
                </h4>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active &bull; Open for Collaboration
                </span>
                <span className="text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E] block mt-0.5">
                  AI Software Engineer &bull; HCLTech
                </span>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/sonuthomasai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/20 font-mono text-xs font-semibold transition-all group shrink-0 self-start sm:self-center cursor-pointer"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Primary Channel 1: AI & Applied Systems */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 hover:border-copper/50 transition-all shadow-soft-sm group">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-copper/10 border border-copper/30 text-copper flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-copper font-bold uppercase tracking-wider block">
                    // PRIMARY AI INBOX
                  </span>
                  <span className="text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                    AI, LLMs, Agents &amp; RAG Consulting
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy("sonuthomas.ai@gmail.com", "ai-email")}
                className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] dark:bg-white/[0.06] hover:bg-copper hover:text-white border border-[#E8E0D8] dark:border-white/10 text-[#4A4340] dark:text-[#D6D3D1] font-mono text-[11px] flex items-center gap-1 transition-all cursor-pointer shrink-0"
                title="Copy email address"
              >
                {copiedKey === "ai-email" ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-600 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 opacity-60" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="mailto:sonuthomas.ai@gmail.com"
              className="font-display font-bold text-base sm:text-lg text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-copper transition-colors block leading-snug"
            >
              sonuthomas.ai@gmail.com
            </a>
          </div>

          {/* Primary Channel 2: Software & Web Platforms */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 hover:border-[#8B5CF6]/50 transition-all shadow-soft-sm group">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8B5CF6] font-bold uppercase tracking-wider block">
                    // SOFTWARE &amp; SYSTEMS
                  </span>
                  <span className="text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                    Full-Stack Architecture &amp; Engineering
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy("sonuthomas.dev@gmail.com", "dev-email")}
                className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] dark:bg-white/[0.06] hover:bg-[#8B5CF6] hover:text-white border border-[#E8E0D8] dark:border-white/10 text-[#4A4340] dark:text-[#D6D3D1] font-mono text-[11px] flex items-center gap-1 transition-all cursor-pointer shrink-0"
                title="Copy email address"
              >
                {copiedKey === "dev-email" ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-600 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 opacity-60" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="mailto:sonuthomas.dev@gmail.com"
              className="font-display font-bold text-base sm:text-lg text-[#1A1614] dark:text-[#FDFBF7] group-hover:text-[#8B5CF6] transition-colors block leading-snug"
            >
              sonuthomas.dev@gmail.com
            </a>
          </div>

          {/* Split Direct Comms: Phone & Base */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Phone Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] uppercase tracking-wider block">
                    Direct Phone
                  </span>
                  <a
                    href={`tel:${PERSONAL_DETAILS.phone}`}
                    className="text-xs font-mono font-bold text-[#1A1614] dark:text-[#FDFBF7] hover:text-copper transition-colors"
                  >
                    {PERSONAL_DETAILS.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_DETAILS.phone, "phone")}
                className="p-1.5 rounded-lg text-[#78716C] hover:text-copper transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedKey === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-copper/10 border border-copper/20 text-copper flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] uppercase tracking-wider block">
                  Location &amp; Timezone
                </span>
                <span className="text-xs font-mono font-medium text-[#1A1614] dark:text-[#FDFBF7] block truncate">
                  Kannur, Kerala &bull; IST (UTC+5:30)
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Connected Networks Bar */}
          <div className="pt-3 border-t border-[#E8E0D8]/80 dark:border-white/10 flex flex-wrap items-center gap-2.5">
            <a
              href={PERSONAL_DETAILS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 hover:border-[#0A66C2] text-xs font-mono text-[#4A4340] dark:text-[#D6D3D1] hover:text-[#0A66C2] flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer group"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_DETAILS.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 hover:border-copper text-xs font-mono text-[#4A4340] dark:text-[#D6D3D1] hover:text-copper flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={PERSONAL_DETAILS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 hover:border-emerald-500 text-xs font-mono text-[#4A4340] dark:text-[#D6D3D1] hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
              <Clock className="w-3 h-3 text-copper" />
              <span>Response: &lt; 12h</span>
            </div>
          </div>

        </motion.div>

        {/* Right Column (6 cols): Direct Message Form */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col lg:sticky lg:top-28"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#1E1B18] p-7 sm:p-9 rounded-3xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 h-full flex flex-col justify-between space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E0D8]/60 dark:border-white/06">
              <div>
                <span className="text-[10px] font-mono text-copper font-bold uppercase tracking-widest block">
                  // DISPATCH TRANSMISSION
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1614] dark:text-[#FDFBF7]">
                  Send a Direct Message
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper/10 text-copper text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
                <span>Encrypted Pipe</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] font-medium">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-white/[0.04] border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-white placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-white dark:focus:bg-[#25211E] transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] font-medium">
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
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-white/[0.04] border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-white placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-white dark:focus:bg-[#25211E] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] font-medium">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-white/[0.04] border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-white placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-white dark:focus:bg-[#25211E] transition-all text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#A8A29E] font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your initiative, architecture idea, or how we can collaborate..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-white/[0.04] border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-white placeholder:text-[#A8A19B] focus:outline-none focus:border-copper focus:bg-white dark:focus:bg-[#25211E] transition-all text-sm resize-none"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-2xl bg-[#1A1614] text-white dark:bg-copper dark:hover:bg-copper-dark font-mono text-xs font-semibold uppercase tracking-wider hover:bg-copper transition-all duration-300 shadow-soft-sm hover:shadow-soft-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-auto"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <span>Send Direct Message</span>
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

export default Contact;
