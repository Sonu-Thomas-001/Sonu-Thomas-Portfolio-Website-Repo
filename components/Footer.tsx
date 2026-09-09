import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navOffset = 90;
          const targetY = id === 'hero' ? 0 : el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }, 400);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const navOffset = 90;
        const targetY = id === 'hero' ? 0 : el.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-[#110F0E] text-[#9C948B] pt-12 sm:pt-14 pb-8 text-sm border-t border-[#26221F] relative overflow-hidden select-none"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Typographic Signature Watermark — Compact and Subtle */}
      <div className="absolute -bottom-4 left-0 right-0 pointer-events-none overflow-hidden select-none z-0 flex justify-center opacity-20">
        <span
          className="font-display font-black text-[12vw] tracking-tighter leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: '1px rgba(196, 125, 90, 0.15)',
            color: 'transparent',
          }}
        >
          SONU THOMAS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top: Identity, SEO Micro-Bio & Fast Channels */}
        <div
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
                AI Software Engineer &amp; Full-Stack Architect
              </span>
            </div>

            <p
              itemProp="description"
              className="text-xs text-[#78716C] max-w-2xl mt-1.5 leading-relaxed"
            >
              Architecting production AI agents, autonomous LLM swarms, RAG pipelines, and enterprise systems. Based in Kannur, Kerala &bull; Delivering worldwide.
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
        </div>

        {/* Middle: Compact 4-Column Semantic SEO Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 py-8 sm:py-9">
          
          {/* Column 1: Index */}
          <nav aria-label="Site Navigation" className="space-y-3">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Site Index
              </span>
            </div>
            <ul className="space-y-1.5 text-xs">
              {[
                { name: 'Introduction', id: 'hero', label: 'Portfolio Hero Overview' },
                { name: 'About Sonu', id: 'about', label: 'Engineering Story & Bio' },
                { name: 'Experience Track', id: 'experience', label: 'Career Track at HCLTech' },
                { name: 'Featured Work', id: 'projects', label: 'Flagship Systems & Projects' },
                { name: 'Direct Channels', id: 'contact', label: 'Contact & Collaboration Form' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScroll(e, link.id)}
                    title={link.label}
                    className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5 cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
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

          {/* Column 2: Deep Dives & Skills */}
          <nav aria-label="Technical Capabilities" className="space-y-3">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Deep Dives
              </span>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  to="/skills"
                  title="Comprehensive AI Engineering & Full-Stack Arsenal"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
                    <span>Technical Arsenal</span>
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
                  title="Autonomous AI and Production Software Case Studies"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Flagship Architecture
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  title="Technical Publications & AI System Notes"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Technical Articles
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  title="Cloud, Data & AI Engineering Certifications"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Certifications
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  title="Honors, Hackathons & Industry Recognitions"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Honors &amp; Awards
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteering"
                  title="Community Leadership & Technical Mentorship"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Volunteering &amp; Impact
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Regional Engineering Hubs (High SEO Value) */}
          <nav aria-label="Regional Engineering Hubs" className="space-y-3">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Regional Hubs
              </span>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link
                  to="/ai-developer-kerala"
                  title="AI Developer in Kerala — Agentic AI & LLM Engineering"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    AI Developer Kerala
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/web-developer-kannur"
                  title="Web Developer in Kannur — React, Next.js & Modern Web Systems"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Web Developer Kannur
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/software-engineer-kerala"
                  title="Software Engineer in Kerala — Full-Stack & Cloud Architecture"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Software Engineer Kerala
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a
                  href="mailto:sonuthomas.ai@gmail.com"
                  title="Primary AI & LLM Consulting Channel"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-copper transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200 truncate">
                    AI Consulting Channel
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:sonuthomas.dev@gmail.com"
                  title="Systems & Web Architecture Channel"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-copper transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200 truncate">
                    Systems Architecture
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-copper opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Dossier & Governance */}
          <nav aria-label="Dossier & Governance" className="space-y-3">
            <div className="flex items-center gap-1.5 pb-1.5 border-b border-[#26221F]">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#EDE5DC] font-semibold">
                Dossier &amp; Legal
              </span>
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href={PERSONAL_DETAILS.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download Sonu Thomas Official CV (PDF)"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-200">
                    <span>Executive Resume</span>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Direct WhatsApp Messaging"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-emerald-400 transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    WhatsApp Direct
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  title="Portfolio Privacy Policy"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
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
                  title="Terms of Service & Usage Conditions"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
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
                  title="Cookie & Storage Policy"
                  className="group flex items-center justify-between text-[#8E8780] hover:text-[#EDE5DC] transition-colors py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Cookie Policy
                  </span>
                  <span className="text-copper opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono">
                    &rarr;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>

        {/* Bottom Bar: Tight & Minimalist */}
        <div className="pt-6 border-t border-[#26221F] flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-[#6E6863]">
          <div>
            &copy; {currentYear} Sonu Thomas &bull; The Neural Canvas v3.0
          </div>
          <div className="flex items-center gap-2 text-copper">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>Kannur &bull; Kerala &bull; Global Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};