import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 group"
          aria-label="Scroll to top"
        >
          {/* Main Container - Glassmorphic HUD */}
          <div className="relative w-12 h-12 flex items-center justify-center bg-dark/60 backdrop-blur-md border border-white/10 rounded-xl transition-all duration-300 group-hover:border-primary/50 group-hover:bg-dark/80 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] overflow-hidden">
            
            {/* Animated Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="relative z-10 flex flex-col items-center gap-1">
               <ChevronsUp className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors duration-300" strokeWidth={2} />
               {/* Tech Thruster Bar */}
               <div className="w-3 h-0.5 bg-slate-600 rounded-full group-hover:bg-primary group-hover:w-6 transition-all duration-300 shadow-[0_0_5px_rgba(14,165,233,0.5)]"></div>
            </div>

            {/* HUD Corner Accents */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/20 rounded-tl-[2px] group-hover:border-primary transition-colors"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/20 rounded-tr-[2px] group-hover:border-primary transition-colors"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/20 rounded-bl-[2px] group-hover:border-primary transition-colors"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/20 rounded-br-[2px] group-hover:border-primary transition-colors"></div>

          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};