import React from 'react';
import { Github, Linkedin, Twitter, Heart, Code2, Shield, Globe, Instagram, Facebook, MessageCircle, Send, Briefcase, Cpu, Layout, TrendingUp, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS, PROJECTS_DATA } from '../constants';

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
    <footer className="bg-dark border-t border-white/5 pt-16 pb-8 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
               <span className="text-primary">ST.</span>
               Sonu Thomas
            </div>
            <p className="text-slate-500 leading-relaxed">
              Engineering scalable digital experiences and intelligent systems for the enterprise.
            </p>
            <div className="flex gap-4 pt-2 flex-wrap">
              <a href={PERSONAL_DETAILS.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href={PERSONAL_DETAILS.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={PERSONAL_DETAILS.social.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={PERSONAL_DETAILS.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-500 hover:text-white transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-slate-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition-colors cursor-pointer">About</a></li>
              <li><a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-primary transition-colors cursor-pointer">Experience</a></li>
              <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-primary transition-colors cursor-pointer">Skills</a></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Recent Projects (Dynamic) */}
          <div>
            <h3 className="text-white font-bold mb-4">Recent Projects</h3>
            <ul className="space-y-2 text-slate-500">
              {PROJECTS_DATA.slice(0, 4).map((project) => (
                <li key={project.id}>
                  <Link to="/projects" className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colophon */}
          <div>
            <h3 className="text-white font-bold mb-4">Colophon</h3>
            <ul className="space-y-2 text-slate-500">
              <li className="flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Built with React & TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px] text-cyan-500 font-bold">T</span> Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-500 font-bold">F</span> Framer Motion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-500 font-bold">G</span> Gemini API
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-500">
              <li><Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-2"><Shield className="w-3 h-3" /> Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-xs">
            © {currentYear} Sonu Thomas. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-xs text-slate-400">
             <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-red-500/20" /> in Kerala, India
             </span>
             <span className="hidden md:inline text-slate-600">|</span>
             <span className="flex items-center gap-1">
                Hosted on <Globe className="w-3 h-3" /> Vercel
             </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
