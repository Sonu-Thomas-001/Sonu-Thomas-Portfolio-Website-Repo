import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowRight, Sparkles, Briefcase, Github, Linkedin, Download, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Insights', path: '/insights' },
];

const ROLES = [
  "Software Engineer",
  "AI & Data Science Enthusiast",
  "Web Developer",
  "Production Change Manager"
];

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    // Determine if it's a hash link or home
    if (path.startsWith('/#') || path === '/') {
        if (e) e.preventDefault();
        
        let targetId = '';
        if (path.startsWith('/#')) {
            targetId = path.replace('/#', '');
        } else {
            // Path is '/' - scroll to top
            targetId = 'top'; 
        }

        const performScroll = () => {
            if (targetId === 'top') {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                 const element = document.getElementById(targetId);
                 if (element) {
                     const navHeight = 85; // slightly more for breathing room
                     const elementPosition = element.getBoundingClientRect().top;
                     const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                     window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                 }
            }
        };

        if (location.pathname !== '/') {
            navigate('/');
            // Wait for transition (approx 600ms-800ms)
            setTimeout(performScroll, 700);
        } else {
            performScroll();
        }
        setIsOpen(false);
    } else {
        // Standard route navigation (Projects, Insights)
        window.scrollTo(0,0);
        setIsOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 700);
    } else {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    })
  };

  const getNavClasses = () => {
    if (isOpen) {
      return "fixed top-0 left-0 right-0 z-50 w-full bg-transparent border-none py-4 transition-all duration-300";
    }
    if (scrolled) {
      return "fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl rounded-2xl border border-white/10 bg-dark/70 backdrop-blur-xl shadow-2xl shadow-black/10 py-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]";
    }
    return "fixed top-0 left-0 right-0 z-50 w-full bg-transparent border-transparent py-6 md:py-10 transition-all duration-300";
  };

  const isLinkActive = (path: string) => {
      if (path === '/') return location.pathname === '/';
      if (path.startsWith('/#')) return false; // Don't highlight sections to avoid confusion with Home
      return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={getNavClasses()}
      >
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? 'w-full' : 'max-w-7xl'}`}>
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" 
              onClick={(e) => handleLinkClick('/', e as any)}
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                 <Terminal className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none tracking-tight group-hover:text-primary transition-colors">
                  Sonu Thomas
                </span>
                <div className="h-4 overflow-hidden w-[180px] relative hidden sm:flex items-center mask-linear-gradient">
                  <motion.div
                     className="flex whitespace-nowrap text-[10px] text-slate-500 font-medium tracking-widest uppercase gap-4"
                     animate={{ x: "-50%" }}
                     transition={{
                       duration: 20,
                       repeat: Infinity,
                       ease: "linear",
                     }}
                  >
                     <span>{ROLES.join(" • ")} • </span>
                     <span>{ROLES.join(" • ")} • </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center gap-1 ${scrolled ? 'bg-white/5' : 'bg-dark/30'} backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/5 transition-colors duration-300`}>
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleLinkClick(link.path, e)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-white/10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                         <div className="absolute inset-0 bg-white/5 rounded-full blur-[2px]" />
                      </motion.div>
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {link.name}
                      {isActive && <motion.span layoutId="active-dot" className="w-1 h-1 rounded-full bg-primary ml-1" />}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              
              {/* Socials & Resume - Hidden on scroll */}
              <AnimatePresence>
                {!scrolled && (
                    <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3 pr-4 border-r border-white/10 overflow-hidden"
                    >
                        <a 
                            href="#" 
                            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all hover:scale-110" 
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a 
                            href="#" 
                            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all hover:scale-110" 
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                            href={`tel:${PERSONAL_DETAILS.phone}`}
                            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all hover:scale-110" 
                            aria-label="Call"
                        >
                            <Phone className="w-5 h-5" />
                        </a>
                        <a 
                            href={PERSONAL_DETAILS.resumeLink} 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all uppercase tracking-wider whitespace-nowrap"
                        >
                            <Download className="w-3.5 h-3.5" />
                            CV
                        </a>
                    </motion.div>
                )}
              </AnimatePresence>

              <a 
                href="#contact"
                onClick={handleContactClick}
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl gap-2 transition-all group-hover:bg-dark/80">
                  <Sparkles className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  <span>Hire Me</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-3xl md:hidden pt-24 px-6 pb-6 flex flex-col overflow-y-auto"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col gap-6 relative z-10 h-full">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                    const isActive = isLinkActive(link.path);
                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => handleLinkClick(link.path, e)}
                            className={`text-2xl font-bold py-3 border-b border-white/5 flex items-center justify-between group ${
                            isActive ? 'text-white' : 'text-slate-400'
                            }`}
                        >
                            <motion.span 
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                                className="group-hover:text-primary transition-colors flex items-center gap-3"
                            >
                                {link.name}
                                {isActive && (
                                    <motion.span layoutId="mobile-active-dot" className="w-2 h-2 rounded-full bg-primary" />
                                )}
                            </motion.span>
                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                        </Link>
                    );
                })}
                
                 <a
                    href="#contact"
                    onClick={handleContactClick}
                    className="text-2xl font-bold py-3 border-b border-white/5 flex items-center justify-between group text-slate-400"
                  >
                    <motion.span 
                        variants={navItemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={navLinks.length}
                        className="group-hover:text-primary transition-colors"
                    >
                        Contact
                    </motion.span>
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </a>
              </div>

              {/* Mobile Socials Row */}
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="flex items-center justify-between gap-4 py-6 border-b border-white/5"
              >
                  <a href="#" className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
                      <div className="p-3 rounded-full bg-white/5">
                        <Github className="w-6 h-6" />
                      </div>
                      <span className="text-xs">GitHub</span>
                  </a>
                  <a href="#" className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
                      <div className="p-3 rounded-full bg-white/5">
                        <Linkedin className="w-6 h-6" />
                      </div>
                      <span className="text-xs">LinkedIn</span>
                  </a>
                  <a href={`tel:${PERSONAL_DETAILS.phone}`} className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
                      <div className="p-3 rounded-full bg-white/5">
                        <Phone className="w-6 h-6" />
                      </div>
                      <span className="text-xs">Call</span>
                  </a>
                  <a href={PERSONAL_DETAILS.resumeLink} className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                      <div className="p-3 rounded-full bg-white/5">
                        <Download className="w-6 h-6" />
                      </div>
                      <span className="text-xs">Resume</span>
                  </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto pb-4"
              >
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <h4 className="text-white font-bold mb-2">Ready to collaborate?</h4>
                  <p className="text-sm text-slate-400 mb-4">Let's build something extraordinary together.</p>
                  <a 
                    href="#contact"
                    onClick={handleContactClick}
                    className="relative inline-flex w-full h-12 overflow-hidden rounded-xl p-[1px]"
                  >
                     <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#6366f1_50%,#0ea5e9_100%)]" />
                     <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-dark px-6 py-1 text-base font-bold text-white backdrop-blur-3xl gap-2 transition-colors">
                        <Briefcase className="w-4 h-4" />
                        Hire Me
                     </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};