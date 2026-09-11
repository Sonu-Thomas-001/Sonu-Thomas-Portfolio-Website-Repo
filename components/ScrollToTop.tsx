import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLenisScroll } from '../hooks/useLenisScroll';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scroll, scrollTo } = useLenisScroll();

  useMotionValueEvent(scroll, 'change', (latest) => {
    setIsVisible(latest > 500);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => scrollTo(0)}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-slate-900 shadow-soft-md transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
