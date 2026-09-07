import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

interface NavItem {
  name: string;
  path: string;
}

const primaryNavLinks: NavItem[] = [
  { name: 'Work', path: '/#projects' },
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Education', path: '/#education' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
];

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = lastScrollY.current;
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 30);
    lastScrollY.current = latest;
  });

  // Scroll spy
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname);
      return;
    }

    const handleSpy = () => {
      const scrollPos = window.scrollY + 250;
      const sections = [
        { id: 'contact', path: '/#contact' },
        { id: 'projects', path: '/#projects' },
        { id: 'skills', path: '/#skills' },
        { id: 'education', path: '/#education' },
        { id: 'experience', path: '/#experience' },
        { id: 'about', path: '/#about' },
        { id: 'hero', path: '/' },
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.path);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('/');
      }
    };

    window.addEventListener('scroll', handleSpy, { passive: true });
    handleSpy();
    return () => window.removeEventListener('scroll', handleSpy);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (path.startsWith('/#') || path === '/') {
      if (e) e.preventDefault();
      const targetId = path.startsWith('/#') ? path.replace('/#', '') : 'hero';

      const performScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 80;
          const targetY = targetId === 'hero' ? 0 : el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      };

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(performScroll, 500);
      } else {
        performScroll();
      }
      setIsOpen(false);
    } else {
      window.scrollTo(0, 0);
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '-120%', opacity: 0 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-soft-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo / Name */}
          <Link
            to="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="group flex items-center gap-2"
          >
            <span className="font-display font-semibold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">
              sonu thomas
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`relative text-sm tracking-wide font-medium transition-colors py-1 group ${
                    isActive ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-slate-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/#contact"
              onClick={(e) => handleLinkClick('/#contact', e)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-all duration-300 shadow-soft-sm hover:shadow-soft-md group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAFBFD] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-5">
              {primaryNavLinks.map((link, index) => {
                const isActive = activeSection === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => handleLinkClick(link.path, e)}
                      className={`block font-display text-4xl font-semibold tracking-tight transition-colors ${
                        isActive ? 'text-primary' : 'text-slate-900 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="pt-4 border-t border-slate-200"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                  Explore More
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-700">
                  <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-primary">
                    All Projects
                  </Link>
                  <Link to="/insights" onClick={() => setIsOpen(false)} className="hover:text-primary">
                    Insights & Articles
                  </Link>
                  <Link to="/certifications" onClick={() => setIsOpen(false)} className="hover:text-primary">
                    Certifications
                  </Link>
                  <Link to="/awards" onClick={() => setIsOpen(false)} className="hover:text-primary">
                    Honors & Awards
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Mobile Footer */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>{PERSONAL_DETAILS.email}</span>
              <a
                href={PERSONAL_DETAILS.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
