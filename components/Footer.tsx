import React from 'react';
import { Github, Linkedin, Heart, Code2, Shield, Globe, Instagram, MessageCircle, Send, ArrowRight, BrainCircuit } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS, PROJECTS_DATA } from '../constants';
import { SectionMarquee } from './TechMarquee';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SectionMarquee />
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 text-sm relative overflow-hidden border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-4 lg:col-span-2 pr-4">
              <div className="flex items-center gap-2.5 text-white font-display font-bold text-xl tracking-tight">
                <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <span>Sonu Thomas</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
                AI Software Engineer at HCLTech. Architecting intelligent systems, LLM workflows, and production-grade software architectures.
              </p>
              <div className="flex gap-2.5 pt-2">
                <a 
                  href={PERSONAL_DETAILS.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={PERSONAL_DETAILS.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={PERSONAL_DETAILS.social.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${PERSONAL_DETAILS.email}`} 
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 transition-colors"
                  aria-label="Email"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-display font-bold text-sm tracking-wide mb-4">Navigation</h3>
              <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition-colors cursor-pointer">About</a></li>
                <li><a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-primary transition-colors cursor-pointer">Experience</a></li>
                <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-primary transition-colors cursor-pointer">Skills</a></li>
                <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-white font-display font-bold text-sm tracking-wide mb-4">Projects</h3>
              <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                {PROJECTS_DATA.slice(0, 4).map((project) => (
                  <li key={project.id}>
                    <Link to="/projects" className="hover:text-primary transition-colors flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-slate-600" />
                      <span>{project.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-display font-bold text-sm tracking-wide mb-4">Legal</h3>
              <ul className="space-y-2.5 text-xs font-medium text-slate-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-1.5"><Shield className="w-3 h-3" /> Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div>
              © {currentYear} Sonu Thomas. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Kerala, India
              </span>
              <span>•</span>
              <span>Hosted on Vercel</span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};