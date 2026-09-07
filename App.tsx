import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeContext';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/Preloader';
import { PageTransition } from './components/PageTransition';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { InsightsPage } from './pages/InsightsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { VolunteeringPage } from './pages/VolunteeringPage';
import { HonorsAwardsPage } from './pages/HonorsAwardsPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { ContactPage } from './pages/ContactPage';
import { WebDeveloperKannur } from './pages/WebDeveloperKannur';
import { AIDeveloperKerala } from './pages/AIDeveloperKerala';
import { SoftwareEngineerKerala } from './pages/SoftwareEngineerKerala';

// Wrapper component to handle route changes and global scroll effects
const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Global Scroll Progress Tracker
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  // Soft Ambient Cursor Follower Light
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Scroll to top on route change
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 350); 
  }, [location.pathname]);

  return (
    <div className="bg-page min-h-screen text-slate-800 font-sans selection:bg-primary/20 selection:text-primary transition-colors duration-300 relative overflow-x-clip">
      
      {/* Global Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-secondary to-accent z-[99] pointer-events-none"
      />

      {/* Subtle Ambient Cursor Follower Spotlight */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-primary/[0.035] rounded-full blur-[90px] pointer-events-none -z-10 hidden md:block"
      />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <NavBar />
          <main className="min-h-screen">
            <AnimatePresence mode="wait">
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
                <Route path="/web-developer-kannur" element={
                  <WebDeveloperKannur />
                } />
                <Route path="/ai-developer-kerala" element={
                  <AIDeveloperKerala />
                } />
                <Route path="/software-engineer-kerala" element={
                  <SoftwareEngineerKerala />
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
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
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
