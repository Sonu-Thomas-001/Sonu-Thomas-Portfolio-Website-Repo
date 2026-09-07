import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Github, Linkedin, Download, Phone, ChevronDown, Trophy, HandHeart, BadgeCheck, Lightbulb, BrainCircuit } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

interface NavLink {
  name: string;
  path: string;
  children?: {
    name: string;
    path: string;
    icon?: any;
  }[];
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Education', path: '/#education' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/projects' },
  { 
    name: 'Resources', 
    path: '#',
    children: [
      { name: 'Insights', path: '/insights', icon: Lightbulb },
      { name: 'Certifications', path: '/certifications', icon: BadgeCheck },
      { name: 'Volunteering', path: '/volunteering', icon: HandHeart },
      { name: 'Honors & Awards', path: '/awards', icon: Trophy },
    ]
  },
  { name: 'Contact', path: '/contact' },
];

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  const location = useLocation();
  const useNavigateHook = useNavigate();

  // Scroll styling handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy Handler
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname);
      return;
    }

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = [
        { id: 'hero', path: '/' },
        { id: 'about', path: '/#about' },
        { id: 'experience', path: '/#experience' },
        { id: 'education', path: '/#education' },
        { id: 'skills', path: '/#skills' },
        { id: 'contact', path: '/#contact' }
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section.path);
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('/');
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (path === '#') {
      e?.preventDefault();
      return;
    }

    if (path.startsWith('/#') || path === '/') {
      if (e) e.preventDefault();
      
      let targetId = '';
      if (path.startsWith('/#')) {
        targetId = path.replace('/#', '');
      } else {
        targetId = 'hero';
      }

      const performScroll = () => {
        const element = document.getElementById(targetId === 'hero' ? 'hero' : targetId);
        if (element) {
          const navHeight = 90; 
          if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }
      };

      if (location.pathname !== '/') {
        useNavigateHook('/');
        setTimeout(performScroll, 700);
      } else {
        performScroll();
      }
      setIsOpen(false);
    } else {
      window.scrollTo(0, 0);
      setIsOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      handleLinkClick('/#contact', e);
    } else {
      useNavigateHook('/contact');
      window.scrollTo(0, 0);
    }
    setIsOpen(false);
  };

  const isLinkActive = (path: string, children?: any[]) => {
    if (children) {
      return children.some(child => location.pathname === child.path);
    }
    if (location.pathname !== '/') {
      return location.pathname === path;
    }
    return activeSection === path;
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.04, duration: 0.25 }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'top-3 mx-auto w-[94%] max-w-7xl rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-soft-lg py-3' 
            : 'top-0 w-full bg-page/70 backdrop-blur-md border-b border-slate-200/50 py-4 lg:py-5'
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <div 
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
              onClick={(e) => handleLinkClick('/', e as any)}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 via-indigo-100 to-purple-100 border border-primary/20 text-primary shadow-soft-sm group-hover:scale-105 group-hover:shadow-glow-primary transition-all duration-300">
                <BrainCircuit className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-slate-900 leading-tight group-hover:text-primary transition-colors">
                  Sonu Thomas
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-500 tracking-tight">
                  AI Software Engineer
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.path, link.children);
                const hasChildren = link.children && link.children.length > 0;

                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => hasChildren && setHoveredDropdown(link.name)}
                    onMouseLeave={() => hasChildren && setHoveredDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => handleLinkClick(link.path, e)}
                      className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
                        isActive 
                          ? 'text-primary font-semibold' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      {isActive && !hasChildren && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-white rounded-full shadow-soft-sm border border-slate-200/60"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1">
                        {link.name}
                        {hasChildren && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                        {isActive && !hasChildren && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary ml-1" />
                        )}
                      </span>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {hasChildren && hoveredDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-60 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-soft-lg overflow-hidden p-2"
                        >
                          {link.children?.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              onClick={(e) => {
                                handleLinkClick(child.path, e);
                                setHoveredDropdown(null);
                              }}
                              className="flex items-center gap-3 px-3.5 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-primary-50/70 rounded-xl transition-colors"
                            >
                              {child.icon && <child.icon className="w-4 h-4 text-primary" />}
                              <span className="font-medium">{child.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href={PERSONAL_DETAILS.social.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all" 
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_DETAILS.social.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 rounded-xl transition-all" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={PERSONAL_DETAILS.resumeLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:text-primary hover:border-primary/40 hover:bg-primary-50/40 transition-all shadow-soft-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>

              <a 
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-600 active:scale-95 shadow-soft-sm hover:shadow-glow-primary transition-all duration-200"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-primary transition-all active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl lg:hidden pt-24 px-6 pb-8 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-4 relative z-10 h-full">
              <div className="flex flex-col gap-1 divide-y divide-slate-100">
                {navLinks.map((link, i) => {
                  const isActive = isLinkActive(link.path, link.children);
                  const hasChildren = link.children && link.children.length > 0;
                  const isExpanded = mobileExpanded === link.name;

                  if (hasChildren) {
                    return (
                      <div key={link.name} className="py-2">
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.name)}
                          className={`w-full text-xl font-display font-semibold py-2 flex items-center justify-between ${
                            isActive ? 'text-primary' : 'text-slate-800'
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 flex flex-col gap-2 pt-2"
                            >
                              {link.children?.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  onClick={(e) => handleLinkClick(child.path, e)}
                                  className="flex items-center gap-3 py-2 text-base text-slate-600 hover:text-primary font-medium"
                                >
                                  {child.icon && <child.icon className="w-4 h-4 text-primary" />}
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={(e) => handleLinkClick(link.path, e)}
                      className={`text-xl font-display font-semibold py-3 flex items-center justify-between ${
                        isActive ? 'text-primary font-bold' : 'text-slate-800 hover:text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Socials & CV */}
              <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <a 
                    href={PERSONAL_DETAILS.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-primary"
                  >
                    GitHub
                  </a>
                  <a 
                    href={PERSONAL_DETAILS.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-primary"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={PERSONAL_DETAILS.resumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary-50 border border-primary/20 text-xs font-semibold text-primary"
                  >
                    Resume
                  </a>
                </div>

                <a 
                  href="#contact"
                  onClick={handleContactClick}
                  className="w-full py-3 text-center rounded-xl bg-primary text-white font-semibold shadow-soft-md"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
