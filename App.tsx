import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/Preloader';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { InsightsPage } from './pages/InsightsPage';

// Wrapper component to handle route changes
const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
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