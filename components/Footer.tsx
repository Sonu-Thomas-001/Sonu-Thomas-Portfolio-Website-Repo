import React from 'react';
import { Github, Linkedin, Twitter, Heart, Code2, Shield, Globe, Instagram, Facebook, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/5 pt-16 pb-8 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
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
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-slate-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Tech Stack / Credits */}
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
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Shield className="w-3 h-3" /> Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 text-xs">
            © {currentYear} Sonu Thomas. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-xs text-slate-600">
             <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-red-500/20" /> in Kerala, India
             </span>
             <span className="hidden md:inline text-slate-700">|</span>
             <span className="flex items-center gap-1">
                Hosted on <Globe className="w-3 h-3" /> GitHub Pages
             </span>
          </div>
        </div>

      </div>
    </footer>
  );
};