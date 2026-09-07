import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
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
          const navOffset = 80;
          const targetY = id === 'hero' ? 0 : el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }, 500);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const navOffset = 80;
        const targetY = id === 'hero' ? 0 : el.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#FAFBFD] text-slate-600 pt-20 pb-12 text-sm border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top: Massive Name & One-line Tagline */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-16 border-b border-slate-200/80 gap-6">
          <div>
            <h2 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900 tracking-tight">
              Sonu Thomas
            </h2>
            <p className="font-mono text-xs text-primary uppercase tracking-widest mt-2">
              AI Software Engineer &bull; Intelligent Systems Architect
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DETAILS.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-slate-900 rounded-full border border-slate-200 hover:border-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DETAILS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-primary rounded-full border border-slate-200 hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="p-3 text-slate-500 hover:text-slate-900 rounded-full border border-slate-200 hover:border-slate-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Middle: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 text-xs font-mono">
          <div>
            <span className="text-slate-400 uppercase tracking-wider block mb-4">Portfolio</span>
            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:text-primary transition-colors">
                  Top / Intro
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition-colors">
                  About Story
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-primary transition-colors">
                  Selected Work
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-400 uppercase tracking-wider block mb-4">Explore</span>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>All Projects</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Articles & Insights</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Certifications</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span>Honors & Awards</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-400 uppercase tracking-wider block mb-4">Social & CV</span>
            <ul className="space-y-3 text-slate-600">
              <li>
                <a href={PERSONAL_DETAILS.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Resume (PDF)
                </a>
              </li>
              <li>
                <a href={PERSONAL_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={PERSONAL_DETAILS.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={PERSONAL_DETAILS.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-slate-400 uppercase tracking-wider block mb-4">Legal</span>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {currentYear} Sonu Thomas. Crafted with React &amp; Framer Motion.
          </div>
          <div>
            Kannur, Kerala, India &bull; Available Globally
          </div>
        </div>

      </div>
    </footer>
  );
};