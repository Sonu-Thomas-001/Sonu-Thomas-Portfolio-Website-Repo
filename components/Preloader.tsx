import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    const totalDuration = hasVisited ? 700 : 1400;
    const intervalTime = 16;
    const step = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => {
            sessionStorage.setItem('hasVisited', 'true');
            onComplete();
          }, 650);
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
    }, 400);
  };

  const nameLetters = "SONU THOMAS".split("");

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] bg-[#FAFBFD] flex flex-col justify-between p-8 md:p-16 select-none cursor-pointer overflow-hidden"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between text-xs font-mono tracking-widest text-slate-400 uppercase">
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Portfolio &copy; 2026
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Kannur &bull; India
            </motion.span>
          </div>

          {/* Centered cinematic name reveal */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="overflow-hidden mb-3">
              <div className="flex items-center justify-center font-display font-semibold text-4xl sm:text-6xl md:text-8xl tracking-tight text-slate-900">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.05 + index * 0.035,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={char === " " ? "w-4 sm:w-6" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-primary font-medium text-center"
            >
              AI Software Engineer
            </motion.p>

            {/* Minimal expanding line */}
            <div className="w-48 sm:w-64 h-[2px] bg-slate-200/80 mt-8 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom row: Skip note & large numerical counter */}
          <div className="flex items-end justify-between">
            <span className="text-xs font-mono text-slate-400 hover:text-slate-600 transition-colors">
              Click anywhere to skip
            </span>
            <div className="flex items-baseline font-mono text-3xl sm:text-5xl font-light text-slate-900">
              <span>{Math.floor(progress).toString().padStart(2, '0')}</span>
              <span className="text-xs sm:text-sm text-slate-400 ml-1 font-normal">%</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
