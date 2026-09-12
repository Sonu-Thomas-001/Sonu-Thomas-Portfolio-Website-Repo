import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSectionProgress } from '../hooks/useSectionProgress';
import { useParallax } from '../hooks/useParallax';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';
import { useLenisScroll } from '../hooks/useLenisScroll';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo, scrollToId } = useLenisScroll();
  const footerRef = useRef<HTMLElement>(null);
  const approach = useSectionProgress(footerRef, ['start end', 'end end']);
  const watermarkY = useParallax(approach, ['34%', '0%'], [0, 1], '0%');
  const watermarkOpacity = useParallax(approach, [0, 0.2], [0.1, 0.9], 0.2);
  const identityY = useParallax(approach, [24, 0], [0, 0.6], 0);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(id), 450);
    } else {
      scrollToId(id);
    }
  };

  const scrollToTop = () => scrollTo(0);

  return (
    <footer
      ref={footerRef}
      className="bg-[#110F0E] text-[#9C948B] pt-12 sm:pt-14 pb-8 text-sm border-t border-[#26221F] relative overflow-hidden select-none"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Typographic Signature Watermark — rises into place as the footer approaches */}
      <motion.div
        style={{ y: watermarkY, opacity: watermarkOpacity }}
        className="absolute -bottom-4 left-0 right-0 pointer-events-none overflow-hidden select-none z-0 flex justify-center will-change-transform"
      >
        <span
          className="font-display font-black text-[12vw] tracking-tighter leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: '1px rgba(196, 125, 90, 0.15)',
            color: 'transparent',
          }}
        >
          SONU THOMAS
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Top: Identity, SEO Micro-Bio & Fast Channels */}
        <motion.div
          style={{ y: identityY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-[#26221F] gap-6"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h2
                itemProp="name"
                className="font-display font-bold text-2xl sm:text-3xl text-[#EDE5DC] tracking-tight"
              >
                Sonu Thomas
              </h2>
              <span className="hidden sm:inline-block text-[#3A3430]">&bull;</span>
              <span
                itemProp="jobTitle"
                className="font-mono text-xs text-copper uppercase tracking-wider flex items-center gap-1.5 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AI Engineer &amp; Full-Stack Architect
              </span>
            </div>

            <p
              itemProp="description"
              className="text-xs text-[#78716C] max-w-2xl mt-1.5 leading-relaxed"
            >
              Architecting production AI agents, autonomous LLM swarms, RAG pipelines, and enterprise systems. Based in Kerala, India &bull; Available for Global Roles &amp; Distributed Systems.
            </p>
          </div>

          {/* Compact Social & Utilities Bar */}
          <div className="flex items-center gap-2.5 self-start lg:self-center shrink-0">
            <a
              href={PERSONAL_DETAILS.social.github}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="p-2.5 text-[#A8A29E] hover:text-white rounded-xl border border-[#2A2522] hover:border-copper/60 bg-[#1A1715] transition-all hover:scale-105"
              aria-label="GitHub Profile"
              title="Sonu Thomas GitHub Repositories"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_DETAILS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="p-2.5 text-[#A8A29E] hover:text-[#0A66C2] rounded-xl border border-[#2A2522] hover:border-[#0A66C2]/60 bg-[#1A1715] transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
              title="Sonu Thomas LinkedIn Network"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              itemProp="email"
              className="p-2.5 text-[#A8A29E] hover:text-copper rounded-xl border border-[#2A2522] hover:border-copper/60 bg-[#1A1715] transition-all hover:scale-105"
              aria-label="Direct Email"
              title="Send Direct Email to Sonu Thomas"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-copper text-white hover:bg-copper-600 transition-all hover:scale-105 shadow-soft-sm hover:shadow-glow-copper flex items-center justify-center cursor-pointer ml-1"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Middle: Compact 4-Column Semantic SEO Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 py-8 sm:py-9"
        >
          
          {/* Column 1: Core Navigation Index */}
          <nav 
            aria-label="Core Site Navigation" 
            itemScope 
            itemType="https://schema.org/SiteNavigationElement" 
            className="space-y-3"
          >
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Site Index
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              {[
                { name: 'AI Systems Home', id: 'hero', label: 'Sonu Thomas AI Engineer Portfolio Homepage' },
                { name: 'About Sonu Thomas', id: 'about', label: 'AI Engineer Background, Education at IIT Guwahati & Philosophy' },
                { name: 'HCLTech Career Track', id: 'experience', label: 'Production Software Engineering Track at HCLTech' },
                { name: 'Flagship AI Systems', id: 'projects', label: 'Enterprise AI Incident Management & TicketWave Architecture' },
                { name: 'Contact & Inquiries', id: 'contact', label: 'Direct Channel to Hire or Consult Sonu Thomas' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    itemProp="url"
                    onClick={(e) => handleScroll(e, link.id)}
                    title={link.label}
                    className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5 cursor-pointer"
                  >
                    <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    <span className="text-copper opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono">
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2: Deep Dives & Capability Index */}
          <nav 
            aria-label="Technical Capabilities & Engineering Pages" 
            itemScope 
            itemType="https://schema.org/SiteNavigationElement" 
            className="space-y-3"
          >
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Deep Dives
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  to="/skills"
                  itemProp="url"
                  title="Comprehensive AI Engineering, LangGraph, Python, & Cloud Arsenal"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
                    <span itemProp="name">Technical Arsenal</span>
                    <span className="px-1 py-0.2 rounded text-[8px] font-mono font-semibold bg-copper/20 text-copper border border-copper/30">
                      NEW
                    </span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  itemProp="url"
                  title="Autonomous AI Incident Triage and Distributed Software Case Studies"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Flagship Architecture
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  itemProp="url"
                  title="Technical Publications on LLM Fine-Tuning, Multi-Agent Systems & Distributed Locks"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Technical Articles
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  itemProp="url"
                  title="AWS Professional, Machine Learning Specialist, and Google Cloud Certifications"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    AWS &amp; GCP Certifications
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  itemProp="url"
                  title="HCLTech Supercharged Ambassador, Star TechBee Award, and Industry Honors"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Honors &amp; Recognitions
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteering"
                  itemProp="url"
                  title="Statewide ICT Student Enablement, AI Club Core Member, and Community Mentorship"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Volunteering &amp; Leadership
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Core Specializations & Direct AI Channels */}
          <nav 
            aria-label="AI Specializations & Advisory Channels" 
            itemScope 
            itemType="https://schema.org/SiteNavigationElement" 
            className="space-y-3"
          >
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Specializations
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  to="/skills"
                  itemProp="url"
                  title="Autonomous Agentic AI, Cyclic State Machines, & LangGraph Orchestration"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Agentic AI &amp; LangGraph
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  itemProp="url"
                  title="Enterprise Hybrid RAG Pipelines, ChromaDB, BM25, & Vector Embeddings"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Hybrid RAG Architecture
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  itemProp="url"
                  title="Multi-Agent Incident Management & Self-Healing Production Triage Systems"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Autonomous Incident Triage
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  itemProp="url"
                  title="Enterprise Cloud Architecture & Distributed Systems on AWS & Google Cloud"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Cloud Systems &amp; AWS
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  itemProp="url"
                  title="Direct AI Engineering & Technical Architecture Consultation"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    AI Architecture Advisory
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a
                  href="mailto:sonuthomas.ai@gmail.com"
                  itemProp="url"
                  title="Primary Direct AI Engineering Consultation Channel: sonuthomas.ai@gmail.com"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-copper transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200 truncate">
                    AI Consulting Channel
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Dossier & Legal Governance */}
          <nav 
            aria-label="Executive Dossier, Contact & Legal Policies" 
            itemScope 
            itemType="https://schema.org/SiteNavigationElement" 
            className="space-y-3"
          >
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Dossier &amp; Legal
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href={PERSONAL_DETAILS.resumeLink}
                  itemProp="url"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download Sonu Thomas Official Executive Resume (PDF)"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
                    <span itemProp="name">Executive Resume</span>
                    <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-white/5 text-[#A8A29E] border border-white/10">
                      PDF
                    </span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_DETAILS.social.whatsapp}
                  itemProp="url"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instant Messaging and Consultation via WhatsApp"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-emerald-400 transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    WhatsApp Direct
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  itemProp="url"
                  title="Sonu Thomas Portfolio Privacy Policy & Data Security"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Privacy Policy
                  </span>
                  <span className="text-copper opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  itemProp="url"
                  title="Terms of Service & Portfolio Usage Guidelines"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Terms of Service
                  </span>
                  <span className="text-copper opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono">
                    &rarr;
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  itemProp="url"
                  title="Cookie & Client Storage Preferences Policy"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span itemProp="name" className="group-hover:translate-x-1 transition-transform duration-200">
                    Cookie Policy
                  </span>
                  <span className="text-copper opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono">
                    &rarr;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>

        {/* Bottom Bar: Tight & Minimalist */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-6 border-t border-[#26221F] flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-[#6E6863]"
        >
          <div>
            &copy; {currentYear} Sonu Thomas &bull; The Neural Canvas v3.0
          </div>
          <div className="flex items-center gap-2 text-copper">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>Kerala, India &bull; Available Worldwide</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};