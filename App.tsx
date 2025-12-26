import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';

// Wrapper component to handle route changes
const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change is handled by AnimatePresence exit/enter usually, 
  // but explicit scroll ensure top start.
  useEffect(() => {
    // Small delay to allow transition to cover screen before scrolling
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 400); 
  }, [location.pathname]);

  return (
    <div className="bg-dark min-h-screen text-slate-300 font-sans selection:bg-primary selection:text-white transition-colors duration-300">
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
    <ThemeProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;