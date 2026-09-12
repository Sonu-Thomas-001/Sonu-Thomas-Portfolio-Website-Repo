import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeContext';
import { LenisProvider, useLenisScroll } from './hooks/useLenisScroll';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/Preloader';
import { PageTransition } from './components/PageTransition';

// Route-level code splitting — each page ships its own chunk instead of one
// monolithic bundle, since prerendering already gives every route correct
// static HTML/meta independent of when the JS chunk loads.
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then((m) => ({ default: m.InsightsPage })));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage').then((m) => ({ default: m.CertificationsPage })));
const VolunteeringPage = lazy(() => import('./pages/VolunteeringPage').then((m) => ({ default: m.VolunteeringPage })));
const HonorsAwardsPage = lazy(() => import('./pages/HonorsAwardsPage').then((m) => ({ default: m.HonorsAwardsPage })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./pages/TermsOfService').then((m) => ({ default: m.TermsOfService })));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy').then((m) => ({ default: m.CookiePolicy })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const SkillsPage = lazy(() => import('./pages/SkillsPage').then((m) => ({ default: m.SkillsPage })));

// Custom Dual Cursor (Dot + Lagging Ring with Hover Expansion)
const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 24, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 24, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Track hovered elements
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('[role="button"]') ||
          target.getAttribute('data-cursor-interactive') === 'true')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] select-none">
      {/* Precision Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-2 h-2 rounded-full bg-copper fixed top-0 left-0 transition-opacity duration-200"
      />
      {/* Elastic Lagging Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.2 : 1,
          borderColor: isHovered ? '#C47D5A' : 'rgba(196, 125, 90, 0.45)',
          backgroundColor: isHovered ? 'rgba(196, 125, 90, 0.08)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
        className="w-8 h-8 rounded-full border border-copper/40 fixed top-0 left-0"
      />
    </div>
  );
};

// Wrapper component to handle route changes and global scroll effects
const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { scrollTo, scrollToId } = useLenisScroll();

  // After a page exits, land at the top — or at the requested #anchor once the new page has mounted.
  const handleRouteExitComplete = () => {
    scrollTo(0, { immediate: true });
    const hash = window.location.hash.slice(1);
    if (hash) setTimeout(() => scrollToId(hash), 120);
  };

  const { scrollYProgress: scaleX } = useScroll();

  // Soft Ambient Warm Glow Follower
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 35, stiffness: 180 });
  const springY = useSpring(cursorY, { damping: 35, stiffness: 180 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 160);
      cursorY.set(e.clientY - 160);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="bg-page min-h-screen text-ink-secondary font-sans selection:bg-copper/20 selection:text-ink transition-colors duration-300 relative overflow-x-clip">
      
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Global Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-copper-600 via-copper to-[#E59C7B] z-[999] pointer-events-none"
      />

      {/* Subtle Ambient Copper Glow Follower */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-[320px] h-[320px] bg-copper/[0.04] rounded-full blur-[100px] pointer-events-none -z-10 hidden md:block"
      />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <NavBar />
          <main className="min-h-screen">
            <AnimatePresence mode="wait" onExitComplete={handleRouteExitComplete}>
              <Suspense fallback={null}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } />
                <Route path="/projects" element={
                  <PageTransition>
                    <ProjectsPage />
                  </PageTransition>
                } />
                <Route path="/skills" element={
                  <PageTransition>
                    <SkillsPage />
                  </PageTransition>
                } />
                <Route path="/insights" element={
                  <PageTransition>
                    <InsightsPage />
                  </PageTransition>
                } />
                <Route path="/certifications" element={
                  <PageTransition>
                    <CertificationsPage />
                  </PageTransition>
                } />
                <Route path="/volunteering" element={
                  <PageTransition>
                    <VolunteeringPage />
                  </PageTransition>
                } />
                <Route path="/awards" element={
                  <PageTransition>
                    <HonorsAwardsPage />
                  </PageTransition>
                } />
                <Route path="/privacy" element={
                  <PageTransition>
                    <PrivacyPolicy />
                  </PageTransition>
                } />
                <Route path="/terms" element={
                  <PageTransition>
                    <TermsOfService />
                  </PageTransition>
                } />
                <Route path="/cookies" element={
                  <PageTransition>
                    <CookiePolicy />
                  </PageTransition>
                } />
                <Route path="/contact" element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                } />
                <Route path="/web-developer-kannur" element={<Navigate to="/" replace />} />
                <Route path="/ai-developer-kerala" element={<Navigate to="/" replace />} />
                <Route path="/software-engineer-kerala" element={<Navigate to="/" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <ScrollToTop />
          <AIAssistant />
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <MotionConfig reducedMotion="user">
            <LenisProvider>
              <AppContent />
            </LenisProvider>
          </MotionConfig>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
