import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Experience } from './components/Experience';
import { ProblemSolving } from './components/ProblemSolving';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Blog } from './components/Blog';
import { Newsletter } from './components/Newsletter';
import { Education } from './components/Education';
import { GrowthTimeline } from './components/GrowthTimeline';
import { Certifications } from './components/Certifications';
import { AIJourney } from './components/AIJourney';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { FAQ } from './components/FAQ';
import { Availability } from './components/Availability';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ScrollToTop } from './components/ScrollToTop';
import { Preloader } from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="bg-dark min-h-screen text-slate-300 font-sans selection:bg-primary selection:text-white transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <NavBar />
            <main>
              <Hero />
              <ValueProp />
              <Stats />
              <About />
              <MissionVision />
              <Experience />
              <ProblemSolving />
              <Skills />
              <Tools />
              <Projects />
              <Process />
              <Blog />
              <Newsletter />
              <Education />
              <GrowthTimeline />
              <Certifications />
              <AIJourney />
              <Testimonials />
              <Clients />
              <FAQ />
              <Availability />
              <Contact />
            </main>
            <ScrollToTop />
            <AIAssistant />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;