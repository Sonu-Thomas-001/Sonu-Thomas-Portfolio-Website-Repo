import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulating a loading process
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Trigger completion slightly after reaching 100%
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, duration + 400);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark text-white overflow-hidden"
    >
        {/* Background Gradients for depth */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo */}
            <div className="flex items-baseline gap-1 mb-8 overflow-hidden">
                <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-6xl md:text-8xl font-black tracking-tighter text-white"
                >
                    ST
                </motion.span>
                <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
                    className="text-6xl md:text-8xl font-black text-primary"
                >
                    .
                </motion.span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${count}%` }}
                />
            </div>
            
            {/* Status Text */}
            <div className="mt-4 flex justify-between w-64 text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest">
                <span>System Initializing</span>
                <span>{Math.round(count)}%</span>
            </div>
        </div>
    </motion.div>
  );
};