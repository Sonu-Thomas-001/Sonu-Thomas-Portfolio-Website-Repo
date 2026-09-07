import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BrainCircuit } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    const totalDuration = hasVisited ? 600 : 1200;
    const intervalTime = 20;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => {
            sessionStorage.setItem('hasVisited', 'true');
            onComplete();
          }, 400);
          return 100;
        }
        return Math.min(100, prev + step);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      sessionStorage.setItem('hasVisited', 'true');
      onComplete();
    }, 200);
  };

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] bg-page flex flex-col items-center justify-center cursor-pointer select-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-[80px] pointer-events-none translate-y-12" />

          {/* Central Monogram */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-slate-200/80 shadow-soft-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 via-primary-100 to-indigo-100 flex items-center justify-center text-primary">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-3xl border border-primary/20 border-dashed pointer-events-none"
              />
            </motion.div>

            {/* Brand Title & Tagline */}
            <div className="text-center space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="font-display font-bold text-2xl tracking-tight text-slate-900"
              >
                Sonu Thomas
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-xs font-mono font-medium text-slate-500 uppercase tracking-widest"
              >
                AI Software Engineer
              </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-slate-200/80 rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Click to skip hint */}
          <span className="absolute bottom-8 text-xs font-mono text-slate-400 hover:text-slate-600 transition-colors">
            Click anywhere to enter
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
