import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, Wifi, Battery, BrainCircuit, Activity, Layers, Cpu } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_SEQUENCE = [
  "Initializing AI Systems...",
  "Loading Neural Modules...",
  "Calibrating Intelligence Layers...",
  "Optimizing Cognitive Engine..."
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'checking' | 'closed' | 'opening' | 'booting' | 'zooming' | 'complete'>('checking');
  const [textIndex, setTextIndex] = useState(0);
  
  useEffect(() => {
    // Check session storage
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      onComplete();
      setStage('complete');
      return;
    }
    
    // Start sequence
    setStage('closed');
    sessionStorage.setItem('hasVisited', 'true');

    // Sequence Timing
    // 1. Initial State (0-0.5s) -> Start Opening
    const openTimer = setTimeout(() => setStage('opening'), 500);
    
    // 2. Opening Animation (0.5-1.2s) -> Start Booting
    // 1.2s mark
    const bootTimer = setTimeout(() => setStage('booting'), 1200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(bootTimer);
    };
  }, [onComplete]);

  // Boot sequence logic
  useEffect(() => {
    if (stage === 'booting') {
      const totalBootTime = 1500; // 1.2s to 2.7s
      const stepTime = totalBootTime / BOOT_SEQUENCE.length;

      const interval = setInterval(() => {
        setTextIndex(prev => {
          if (prev < BOOT_SEQUENCE.length - 1) return prev + 1;
          return prev;
        });
      }, stepTime);

      // End of boot phase -> Start Zoom
      const zoomTimer = setTimeout(() => {
        setStage('zooming');
      }, totalBootTime + 200); // Small buffer

      return () => {
        clearInterval(interval);
        clearTimeout(zoomTimer);
      };
    }
  }, [stage]);

  // Zoom logic
  useEffect(() => {
    if (stage === 'zooming') {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000); 
      return () => clearTimeout(completeTimer);
    }
  }, [stage, onComplete]);

  const handleSkip = () => {
    setStage('zooming');
  };

  if (stage === 'checking' || stage === 'complete') return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Cinematic Background with Ambient Glow */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_60%)] animate-pulse"></div>
      </motion.div>
      
      {/* 3D Scene Container */}
      <motion.div 
        className="relative w-[600px] h-[400px] perspective-[1500px]"
        initial={{ scale: 0.9, rotateX: 20 }}
        animate={stage === 'zooming' ? { 
          scale: 45, // Massive scale for immersive entry
          rotateX: 0,
          y: 220, // Center into screen
          z: 500
        } : { 
          scale: 1, 
          y: 0, 
          rotateX: 15 
        }}
        transition={{ 
          duration: stage === 'zooming' ? 1.2 : 1, 
          ease: stage === 'zooming' ? [0.7, 0, 0.3, 1] : "easeOut"
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        {/* LAPTOP GROUP */}
        <motion.div 
          className="relative w-full h-full transform-style-3d"
          animate={stage === 'zooming' ? { rotateY: 0 } : { rotateY: -10 }}
          transition={{ duration: 1.5 }}
        >

          {/* === LID (Screen) === */}
          <motion.div
            className="absolute top-0 left-[10%] w-[80%] h-[90%] origin-bottom transform-style-3d z-20"
            initial={{ rotateX: -90 }} // Closed
            animate={{ rotateX: stage === 'closed' ? -90 : 0 }} // Open
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Elegant ease
          >
            {/* Screen Front Face */}
            <div className="absolute inset-0 bg-[#121212] rounded-t-xl p-2 shadow-2xl backface-hidden flex flex-col border border-[#2a2a2a]">
              
              {/* Webcam Area */}
              <div className="h-4 flex justify-center items-center gap-2 mb-1 opacity-50">
                 <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              </div>

              {/* LCD Display */}
              <div className="relative flex-1 bg-black rounded overflow-hidden ring-1 ring-white/5">
                
                {/* Screen Glow / Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent pointer-events-none z-50 mix-blend-screen"></div>

                {/* --- AI INITIALIZATION CONTENT --- */}
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage === 'closed' || stage === 'opening' ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                    {/* 1. Grid Background */}
                    <div className="absolute inset-0 z-0 opacity-20">
                         <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.5)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
                    </div>

                    {/* 2. Abstract Neural/Waveform Visuals */}
                    {stage === 'booting' && (
                        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30">
                           <motion.div 
                              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                              className="w-64 h-64 border border-primary/30 rounded-full border-dashed"
                           />
                           <motion.div 
                              animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute w-48 h-48 border border-secondary/30 rounded-full"
                           />
                        </div>
                    )}

                    {/* 3. Text Sequence */}
                    <div className="relative z-10 w-full max-w-md space-y-6">
                        {/* Header Icons */}
                        <div className="flex justify-center gap-4 mb-8 text-primary/80">
                            <BrainCircuit className="w-8 h-8 animate-pulse" />
                            <Cpu className="w-8 h-8 animate-pulse delay-75" />
                        </div>

                        {/* Boot Text Lines */}
                        <div className="h-24 flex flex-col items-center justify-center space-y-2">
                             <AnimatePresence mode='wait'>
                                <motion.div
                                    key={textIndex}
                                    initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                                    className="text-lg md:text-xl font-mono text-white text-center font-light tracking-wide"
                                >
                                    <span className="text-primary mr-2">{">"}</span>
                                    {BOOT_SEQUENCE[textIndex]}
                                </motion.div>
                             </AnimatePresence>
                        </div>

                        {/* Minimal Progress Bar */}
                        <div className="w-full max-w-xs mx-auto h-0.5 bg-slate-800 rounded-full overflow-hidden mt-8">
                             <motion.div 
                                className="h-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                                initial={{ width: "0%" }}
                                animate={{ width: stage === 'booting' ? "100%" : "0%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                             />
                        </div>
                    </div>

                    {/* 4. Zoom Final Text */}
                    {stage === 'zooming' && (
                        <motion.div 
                           initial={{ opacity: 0 }} 
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.2 }}
                           className="absolute inset-0 bg-black flex items-center justify-center z-50"
                        >
                           <h1 className="text-5xl font-bold text-white tracking-[0.2em] uppercase glow-text">
                              System Ready
                           </h1>
                        </motion.div>
                    )}

                    {/* Top Right Status Icons (Mock UI) */}
                    <div className="absolute top-3 right-3 flex gap-3 text-slate-500/80 scale-75">
                        <Activity className="w-4 h-4" />
                        <Wifi className="w-4 h-4" />
                        <Battery className="w-4 h-4" />
                    </div>

                </motion.div>
              </div>

              {/* Branding */}
              <div className="h-5 flex justify-center items-center mt-1">
                 <span className="text-[8px] font-bold text-slate-600 uppercase tracking-[0.2em]">MacBook Pro</span>
              </div>
            </div>

            {/* Lid Back */}
            <div 
              className="absolute inset-0 bg-[#1a1a1a] rounded-t-xl backface-hidden border border-[#252525]"
              style={{ transform: 'rotateY(180deg) translateZ(1px)' }}
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <Terminal className="text-white/10 w-8 h-8" />
               </div>
            </div>
            
            {/* Lid Thickness */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#222] origin-bottom transform -rotateX-90 translate-y-[-0.5px]"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-[#222] origin-right transform -rotateY-90 translate-x-[-0.5px]"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-[#222] origin-left transform rotateY-90 translate-x-[0.5px]"></div>

          </motion.div>

          {/* === BASE (Keyboard) === */}
          <div 
            className="absolute bottom-0 left-[10%] w-[80%] h-[300px] bg-[#1a1a1a] rounded-b-xl origin-top transform-style-3d shadow-2xl"
            style={{ transform: 'rotateX(90deg)' }}
          >
            <div className="absolute inset-0 p-5 flex flex-col">
               <div className="w-full h-3 bg-[#111] rounded-full mb-4 shadow-inner"></div>
               {/* Keyboard */}
               <div className="flex-1 bg-[#121212] rounded p-2 grid grid-rows-6 gap-0.5 border border-white/5 opacity-80">
                  <div className="grid grid-cols-14 gap-0.5 h-full">
                     {[...Array(84)].map((_, i) => (
                         <div key={i} className={`rounded-[1px] bg-[#222] ${i === 75 ? 'col-span-5' : ''}`}></div>
                     ))}
                  </div>
               </div>
               {/* Trackpad */}
               <div className="mt-4 mx-auto w-1/3 h-16 bg-[#222] rounded border border-white/5"></div>
            </div>

            {/* Base Thickness */}
            <div className="absolute bottom-0 w-full h-3 bg-[#222] origin-top transform rotateX(-90deg) translate-y-[3px] rounded-b-lg flex items-center justify-center">
                 <div className="w-12 h-0.5 bg-black/50 rounded-full"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-2 h-full bg-[#222] origin-right transform -rotateY-90 translate-x-[-1px]"></div>
            <div className="absolute top-0 right-0 w-2 h-full bg-[#222] origin-left transform rotateY-90 translate-x-[1px]"></div>
            
            {/* Shadow */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 blur-3xl transform translate-z-[-30px] rounded-full scale-90"></div>
          </div>

        </motion.div>
      </motion.div>

      {/* Skip Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={handleSkip}
        className="fixed bottom-8 right-8 text-[10px] font-mono text-slate-500 hover:text-white transition-colors flex items-center gap-2 z-[110] tracking-widest uppercase"
      >
        <Zap className="w-3 h-3" /> Skip Intro
      </motion.button>

      {/* CSS Utilities for 3D */}
      <style>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .perspective-1500px { perspective: 1500px; }
        .glow-text { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
      `}</style>
    </div>
  );
};
