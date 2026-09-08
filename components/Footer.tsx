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
    <footer className="bg-[#131110] text-[#9C948B] pt-24 pb-14 text-sm border-t border-[#2A2522] relative overflow-hidden select-none">
      
      {/* Massive Typographic Signature Watermark in Background */}
      <div className="absolute -bottom-10 left-0 right-0 pointer-events-none overflow-hidden select-none z-0 flex justify-center">
        <span className="font-display font-black text-[17vw] tracking-tighter text-[#1C1816]/70 leading-none whitespace-nowrap">
          SONU THOMAS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top: Personal Identity & Social Channels */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-16 border-b border-[#2A2522] gap-8">
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-[#EDE5DC] tracking-tight">
              Sonu Thomas
            </h2>
            <p className="font-mono text-xs text-copper uppercase tracking-widest mt-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-copper inline-block" />
              <span>AI Software Engineer &bull; IIT Guwahati Alumni</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DETAILS.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#9C948B] hover:text-white rounded-full border border-[#2A2522] hover:border-copper bg-[#1E1B18] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DETAILS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#9C948B] hover:text-copper rounded-full border border-[#2A2522] hover:border-copper bg-[#1E1B18] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="p-3 text-[#9C948B] hover:text-white rounded-full border border-[#2A2522] hover:border-copper bg-[#1E1B18] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top Smooth Button */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-copper text-white hover:bg-copper-600 transition-colors shadow-soft-sm hover:shadow-glow-copper flex items-center justify-center cursor-pointer ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 text-xs font-mono">
          <div>
            <span className="text-[#78716C] uppercase tracking-wider block mb-4">Site Index</span>
            <ul className="space-y-3 text-[#9C948B]">
              <li>
                <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:text-copper transition-colors">
                  Intro // Entrance
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-copper transition-colors">
                  About // Story
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-copper transition-colors">
                  Experience // Track
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-copper transition-colors">
                  Selected // Work
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[#78716C] uppercase tracking-wider block mb-4">Deep Dives</span>
            <ul className="space-y-3 text-[#9C948B]">
              <li>
                <Link to="/projects" className="hover:text-copper transition-colors flex items-center gap-1">
                  <span>All Projects ({PERSONAL_DETAILS.name ? '15+' : '15+'})</span>
                  <ArrowUpRight className="w-3 h-3 text-copper" />
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-copper transition-colors flex items-center gap-1">
                  <span>Technical Articles</span>
                  <ArrowUpRight className="w-3 h-3 text-copper" />
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-copper transition-colors flex items-center gap-1">
                  <span>Certifications</span>
                  <ArrowUpRight className="w-3 h-3 text-copper" />
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-copper transition-colors flex items-center gap-1">
                  <span>Honors & Awards</span>
                  <ArrowUpRight className="w-3 h-3 text-copper" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[#78716C] uppercase tracking-wider block mb-4">Credentials & CV</span>
            <ul className="space-y-3 text-[#9C948B]">
              <li>
                <a href={PERSONAL_DETAILS.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors">
                  Download CV (PDF)
                </a>
              </li>
              <li>
                <a href={PERSONAL_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={PERSONAL_DETAILS.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href={PERSONAL_DETAILS.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[#78716C] uppercase tracking-wider block mb-4">Governance</span>
            <ul className="space-y-3 text-[#9C948B]">
              <li>
                <Link to="/privacy" className="hover:text-copper transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-copper transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-copper transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2522] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#78716C]">
          <div>
            &copy; {currentYear} Sonu Thomas &bull; The Neural Canvas v3.0
          </div>
          <div className="flex items-center gap-2 text-copper">
            <span>Kannur &bull; Kerala &bull; Worldwide Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};