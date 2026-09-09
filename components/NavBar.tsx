import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  ChevronDown, 
  Layers, 
  BookOpen, 
  Award, 
  Trophy, 
  HeartHandshake,
  Cpu
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PERSONAL_DETAILS } from '../constants';

interface NavItem {
  name: string;
  path: string;
}

interface SubPageItem {
  title: string;
  path: string;
  desc: string;
  icon: React.ElementType;
}

const primaryNavLinks: NavItem[] = [
  { name: 'Work', path: '/#projects' },
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Education', path: '/#education' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
];

const otherPages: SubPageItem[] = [
  {
    title: 'Technical Arsenal',
    path: '/skills',
    desc: 'Deep AI & engineering capability map',
    icon: Cpu,
  },
  {
    title: 'Projects & Case Studies',
    path: '/projects',
    desc: 'Flagship AI systems & architectures',
    icon: Layers,
  },
  {
    title: 'Technical Insights',
    path: '/insights',
    desc: 'Essays on LLMs, RAG & software',
    icon: BookOpen,
  },
  {
    title: 'Certifications',
    path: '/certifications',
    desc: 'Verified enterprise credentials',
    icon: Award,
  },
  {
    title: 'Honors & Awards',
    path: '/awards',
    desc: 'Hackathons & leadership honors',
    icon: Trophy,
  },
  {
    title: 'Volunteering & FOSS',
    path: '/volunteering',
    desc: 'Community initiatives & mentoring',
    icon: HeartHandshake,
  },
];

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<any>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Close dropdown on click outside or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOthersOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOthersOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsOthersOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  const isOtherActive = otherPages.some((p) => location.pathname === p.path);

  // Hide on scroll down past 200px, reveal when scrolling up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = lastScrollY.current;
    if (latest > prev && latest > 180) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 40);
    lastScrollY.current = latest;
  });

  // Scroll spy
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname);
      return;
    }

    const handleSpy = () => {
      const scrollPos = window.scrollY + 280;
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
          const navOffset = 90;
          const targetY = targetId === 'hero' ? 0 : el.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      };

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(performScroll, 400);
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
          hidden: { y: '-130%', opacity: 0 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Logo / Brand Pill */}
          <Link
            to="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#FEFCF9]/90 backdrop-blur-xl border border-[#E8E0D8] shadow-soft-sm hover:border-copper/40 transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden border border-copper/40 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <img
                src="/images/favicon.png"
                alt="Sonu Thomas"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-semibold text-sm tracking-tight text-ink group-hover:text-copper transition-colors">
              sonu thomas
            </span>
          </Link>

          {/* Floating Pill Nav for Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-full bg-[#FEFCF9]/85 backdrop-blur-xl border border-[#E8E0D8]/90 shadow-soft-md">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`relative px-3 lg:px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 group ${
                    isActive
                      ? 'text-ink font-semibold'
                      : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBubble"
                      className="absolute inset-0 rounded-full bg-[#EDE5DC] -z-10 shadow-soft-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-copper inline-block" />}
                    {link.name}
                  </span>
                </Link>
              );
            })}

            {/* Others Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setIsOthersOpen(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setIsOthersOpen(false);
                }, 220);
              }}
            >
              <button
                type="button"
                onClick={() => setIsOthersOpen((prev) => !prev)}
                className={`relative px-3 lg:px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-1 cursor-pointer group ${
                  isOtherActive
                    ? 'text-ink font-semibold'
                    : isOthersOpen
                    ? 'text-ink font-semibold'
                    : 'text-ink-secondary hover:text-ink'
                }`}
                aria-expanded={isOthersOpen}
                aria-haspopup="true"
              >
                {isOtherActive && (
                  <motion.span
                    layoutId="activeNavBubble"
                    className="absolute inset-0 rounded-full bg-[#EDE5DC] -z-10 shadow-soft-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {isOtherActive && <span className="w-1.5 h-1.5 rounded-full bg-copper inline-block" />}
                  <span>Others</span>
                </span>
                <ChevronDown
                  className={`relative z-10 w-3.5 h-3.5 transition-transform duration-200 text-copper ${
                    isOthersOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOthersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-2.5 w-72 sm:w-80 rounded-2xl bg-[#FEFCF9]/95 backdrop-blur-2xl border border-[#E8E0D8] shadow-2xl p-2.5 z-50 text-ink ring-1 ring-black/5"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#78716C] border-b border-[#E8E0D8] mb-1.5 flex items-center justify-between">
                      <span>Exploration // Index</span>
                      <span className="text-copper">06 Specializations</span>
                    </div>

                    <div className="space-y-1">
                      {otherPages.map((page) => {
                        const Icon = page.icon;
                        const isCurrent = location.pathname === page.path;
                        return (
                          <Link
                            key={page.path}
                            to={page.path}
                            onClick={() => {
                              setIsOthersOpen(false);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group/item ${
                              isCurrent
                                ? 'bg-[#EDE5DC] text-copper font-semibold'
                                : 'hover:bg-[#F5F0EB] text-ink hover:text-copper'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#F5F0EB] group-hover/item:bg-white text-copper border border-[#E8E0D8] flex items-center justify-center shrink-0 mt-0.5 shadow-xs transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between text-xs font-semibold">
                                <span className="truncate">{page.title}</span>
                                <ArrowUpRight className="w-3 h-3 opacity-40 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all text-copper" />
                              </div>
                              <span className="text-[11px] text-ink-secondary font-light block line-clamp-1">
                                {page.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action: Let's Talk Magnetic CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/#contact"
              onClick={(e) => handleLinkClick('/#contact', e)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1614] text-[#EDE5DC] text-xs font-semibold tracking-wider hover:bg-copper hover:text-white transition-all duration-300 shadow-soft-sm hover:shadow-glow-copper group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-copper group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Pill */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full bg-[#FEFCF9]/90 backdrop-blur-xl border border-[#E8E0D8] text-ink hover:text-copper shadow-soft-sm transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Cinematic Mobile Curtain Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F0EB] flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                Navigation // Index
              </span>
              {primaryNavLinks.map((link, index) => {
                const isActive = activeSection === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + index * 0.04, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => handleLinkClick(link.path, e)}
                      className={`flex items-center justify-between font-display text-4xl font-semibold tracking-tight transition-colors ${
                        isActive ? 'text-copper' : 'text-ink hover:text-copper'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="text-xs font-mono text-copper">[active]</span>}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="pt-4 border-t border-[#E8E0D8]"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-[#78716C] mb-3">
                  Other Pages // Index
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm font-medium text-ink-secondary">
                  <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-copper">
                    All Case Studies
                  </Link>
                  <Link to="/insights" onClick={() => setIsOpen(false)} className="hover:text-copper">
                    Technical Articles
                  </Link>
                  <Link to="/certifications" onClick={() => setIsOpen(false)} className="hover:text-copper">
                    Certifications
                  </Link>
                  <Link to="/awards" onClick={() => setIsOpen(false)} className="hover:text-copper">
                    Honors & Awards
                  </Link>
                  <Link to="/volunteering" onClick={() => setIsOpen(false)} className="hover:text-copper">
                    Volunteering & FOSS
                  </Link>
                  <Link to="/skills" onClick={() => setIsOpen(false)} className="hover:text-copper">
                    Technical Arsenal
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Mobile Footer */}
            <div className="pt-6 border-t border-[#E8E0D8] flex items-center justify-between text-xs font-mono text-ink-secondary">
              <span>{PERSONAL_DETAILS.email}</span>
              <a
                href={PERSONAL_DETAILS.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper font-semibold hover:underline"
              >
                Download Resume &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
