import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [bootLog, setBootLog] = useState<string>('initializing neural canvas...');

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    const totalDuration = hasVisited ? 750 : 1500;
    const intervalTime = 16;
    const step = 100 / (totalDuration / intervalTime);

    const logTimer1 = setTimeout(() => {
      setBootLog('loading neural weights & systems...');
    }, totalDuration * 0.4);

    const logTimer2 = setTimeout(() => {
      setBootLog('ready: welcome to Sonu Thomas v3.0');
    }, totalDuration * 0.85);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => {
            sessionStorage.setItem('hasVisited', 'true');
            onComplete();
          }, 700);
          return 100;
        }
        return Math.min(100, prev + step);
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      clearTimeout(logTimer1);
      clearTimeout(logTimer2);
    };
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
        <div
          onClick={handleSkip}
          className="fixed inset-0 z-[100] select-none cursor-pointer overflow-hidden bg-[#131110]"
        >
          {/* Top Curtain Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#131110] border-b border-[#2A2522] flex flex-col justify-between p-8 md:p-14"
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#78716C] uppercase">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper animate-ping" />
                <span>Neural Canvas // 0.3</span>
              </span>
              <span>Kannur &bull; Kerala &bull; India</span>
            </div>

            {/* Top Half of Giant Name */}
            <div className="flex items-end justify-center overflow-hidden pb-1">
              <div className="flex items-center justify-center font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tight text-[#EDE5DC]">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.04 + index * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={char === " " ? "w-4 sm:w-6" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Expanding Energy Beam */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none px-8">
            <div className="w-full max-w-xl h-[2px] bg-[#2A2522] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-copper-600 via-copper to-[#E59C7B] rounded-full shadow-glow-copper"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom Curtain Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#131110] border-t border-[#2A2522] flex flex-col justify-between p-8 md:p-14"
          >
            {/* Terminal Boot Sequence Prompt */}
            <div className="flex flex-col items-center justify-start pt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1E1B18] border border-[#332E2A] text-xs font-mono text-copper">
                <span className="text-[#78716C]">&gt;</span>
                <span>{bootLog}</span>
                <span className="w-1.5 h-3 bg-copper animate-pulse inline-block" />
              </div>
              <p className="mt-3 text-xs font-mono uppercase tracking-[0.25em] text-[#9C948B]">
                AI Engineer &bull; IIT Guwahati Alumni
              </p>
            </div>

            {/* Bottom Row: Skip & Copper Percentage */}
            <div className="flex items-end justify-between">
              <span className="text-xs font-mono text-[#78716C] hover:text-copper transition-colors">
                [ Click anywhere to skip ]
              </span>
              <div className="flex items-baseline font-mono text-3xl sm:text-5xl font-light text-[#EDE5DC]">
                <span className="text-copper font-medium">{Math.floor(progress).toString().padStart(2, '0')}</span>
                <span className="text-xs sm:text-sm text-[#78716C] ml-1 font-normal">%</span>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};
