import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap, CheckCircle2 } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_SEQUENCE = [
  "Initializing AI Core...",
  "Loading Neural Modules...",
  "Calibrating Intelligence Layers...",
  "Optimizing Cognitive Engine...",
  "System Ready."
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'checking' | 'opening' | 'booting' | 'zooming' | 'complete'>('checking');
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  
  // Skip logic
  const handleSkip = () => {
    setStage('zooming');
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  useEffect(() => {
    // Check session storage to run only once per session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      onComplete();
      return;
    }
    
    // Start animation sequence
    setStage('opening');
    sessionStorage.setItem('hasVisited', 'true');
  }, [onComplete]);

  // Sequence Management
  useEffect(() => {
    if (stage === 'opening') {
      // Transition from opening to booting
      const timer = setTimeout(() => {
        setStage('booting');
      }, 1500); // Allow time for lid to open
      return () => clearTimeout(timer);
    }

    if (stage === 'booting') {
      if (textIndex >= BOOT_SEQUENCE.length) {
        // Boot complete, start zoom
        const timer = setTimeout(() => {
          setStage('zooming');
        }, 800);
        return () => clearTimeout(timer);
      }

      // Typewriter effect for current line
      const currentLine = BOOT_SEQUENCE[textIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        setDisplayText(currentLine.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex > currentLine.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setTextIndex(prev => prev + 1);
            setDisplayText("");
          }, 400); // Pause between lines
        }
      }, 30); // Typing speed

      return () => clearInterval(typeInterval);
    }

    if (stage === 'zooming') {
      const timer = setTimeout(() => {
        setStage('complete');
        onComplete();
      }, 1200); // Zoom duration
      return () => clearTimeout(timer);
    }
  }, [stage, textIndex, onComplete]);

  if (stage === 'checking' || stage === 'complete') return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden perspective-1000"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient Background Glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* 3D Laptop Container */}
      <motion.div
        initial={{ scale: 0.8, rotateX: 20 }}
        animate={
          stage === 'zooming' 
            ? { scale: 40, rotateX: 0, y: 0, opacity: 0 } 
            : { scale: 1, rotateX: 10, y: 20, opacity: 1 }
        }
        transition={
          stage === 'zooming'
            ? { duration: 1.5, ease: [0.65, 0, 0.35, 1] }
            : { duration: 1 }
        }
        className="relative w-[300px] md:w-[500px] aspect-[16/10] transform-style-3d"
      >
        {/* Laptop Lid (Screen) */}
        <motion.div
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
          className="absolute inset-0 origin-bottom transform-style-3d bg-slate-900 rounded-t-xl border-t border-l border-r border-slate-700 shadow-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Screen Bezel & Glass */}
          <div className="absolute inset-1 bg-black rounded-lg overflow-hidden border border-slate-800 relative">
            
            {/* Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-20 pointer-events-none"></div>
            
            {/* Screen Content */}
            <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-8 z-10 font-mono">
              
              {/* Boot Content */}
              <AnimatePresence mode="wait">
                {stage === 'booting' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex flex-col items-start justify-center text-xs md:text-sm"
                  >
                    <div className="flex items-center gap-2 text-primary mb-4 opacity-80">
                      <Terminal className="w-4 h-4" />
                      <span>NEXUS_OS v2.4.0</span>
                    </div>

                    <div className="space-y-2 font-mono text-slate-300 w-full">
                      {BOOT_SEQUENCE.slice(0, textIndex).map((line, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                           <span className="opacity-50">{line}</span>
                        </div>
                      ))}
                      
                      {textIndex < BOOT_SEQUENCE.length && (
                        <div className="flex items-center gap-2 text-primary">
                          <Cpu className="w-3 h-3 animate-spin" />
                          <span>{displayText}</span>
                          <span className="w-1.5 h-4 bg-primary animate-pulse"></span>
                        </div>
                      )}
                    </div>

                    {/* Progress Visual */}
                    <div className="mt-auto w-full space-y-1">
                       <div className="flex justify-between text-[10px] text-slate-500 uppercase">
                          <span>System Integrity</span>
                          <span>{Math.min((textIndex / (BOOT_SEQUENCE.length - 1)) * 100, 100).toFixed(0)}%</span>
                       </div>
                       <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary box-shadow-glow"
                            initial={{ width: 0 }}
                            animate={{ width: `${(textIndex / (BOOT_SEQUENCE.length - 1)) * 100}%` }}
                          />
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Ready State */}
              {stage === 'zooming' && (
                <motion.div 
                   className="absolute inset-0 flex items-center justify-center bg-black"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary text-4xl font-bold tracking-[0.5em] uppercase text-shadow-glow"
                    >
                        Welcome
                    </motion.div>
                </motion.div>
              )}

            </div>
          </div>
          
          {/* Lid Back (for realism if rotated further) */}
          <div className="absolute inset-0 bg-slate-800 rounded-t-xl transform translate-z-[-1px] rotate-y-180 backface-hidden"></div>
        </motion.div>

        {/* Laptop Base (Keyboard area) */}
        <motion.div 
          className="absolute bottom-[-10px] left-[-5%] w-[110%] h-[12px] bg-slate-800 rounded-b-xl border-t border-slate-600 shadow-2xl"
          style={{ transform: 'rotateX(90deg) translateZ(5px)' }}
        >
            {/* Front Lip Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-primary shadow-[0_0_10px_2px_rgba(14,165,233,0.5)]"></div>
        </motion.div>
        
        {/* Base Shadow */}
        <div className="absolute bottom-[-40px] left-0 w-full h-[20px] bg-black/50 blur-xl rounded-[50%] transform scale-x-125"></div>

      </motion.div>
      
      {/* Skip Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={handleSkip}
        className="fixed bottom-8 right-8 text-xs font-mono text-slate-600 hover:text-primary transition-colors flex items-center gap-2 z-[110]"
      >
        <Zap className="w-3 h-3" /> SKIP_INIT
      </motion.button>
    </motion.div>
  );
};
