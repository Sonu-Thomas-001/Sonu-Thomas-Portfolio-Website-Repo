import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Zap, Power, Cpu, Network } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_SEQUENCE = [
  "Initializing Neural Core...",
  "Loading Cognitive Modules...",
  "Calibrating Synaptic Weights...",
  "Optimizing Logic Gates...",
  "System Ready."
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'checking' | 'initial' | 'booting' | 'minimal' | 'zooming' | 'complete'>('checking');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Check session storage
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // --- MINIMAL SEQUENCE (Subsequent Visits) ---
      setStage('minimal');
      const minTimer = setTimeout(() => {
        setStage('zooming');
      }, 1500); // 1.5s simplified intro
      return () => clearTimeout(minTimer);
    } else {
      // --- FULL SEQUENCE (First Visit) ---
      setStage('initial');
      sessionStorage.setItem('hasVisited', 'true');
      const bootTimer = setTimeout(() => setStage('booting'), 800);
      return () => clearTimeout(bootTimer);
    }
  }, [onComplete]);

  // Boot sequence text logic (Only runs for full sequence)
  useEffect(() => {
    if (stage === 'booting') {
      const stepTime = 800; // Time per text line
      const interval = setInterval(() => {
        setTextIndex(prev => {
          if (prev < BOOT_SEQUENCE.length - 1) return prev + 1;
          return prev;
        });
      }, stepTime);

      // End of boot phase -> Start Zoom
      const totalBootTime = (BOOT_SEQUENCE.length * stepTime) + 500;
      const zoomTimer = setTimeout(() => {
        setStage('zooming');
      }, totalBootTime);

      return () => {
        clearInterval(interval);
        clearTimeout(zoomTimer);
      };
    }
  }, [stage]);

  // Zoom logic (Shared exit transition)
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

  // Visual toggle for minimal mode
  const isMinimal = stage === 'minimal';

  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Deep Glow */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#020617_100%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>
      
      {/* Central AI Core Container */}
      <motion.div
        className="relative flex flex-col items-center justify-center"
        animate={stage === 'zooming' ? { scale: 50, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
      >
        {/* === THE HOLOGRAPHIC AI SPHERE === */}
        <div className="relative w-80 h-80 flex items-center justify-center perspective-1000">
            
            {/* Core Nucleus (The Brain) */}
            <motion.div 
                className="absolute w-20 h-20 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/50 z-20 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                animate={{ boxShadow: ["0 0 30px rgba(34,211,238,0.4)", "0 0 60px rgba(34,211,238,0.7)", "0 0 30px rgba(34,211,238,0.4)"] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <BrainCircuit className="w-10 h-10 text-cyan-200" />
            </motion.div>

            {/* FULL MODE VISUALS - Gyroscopic Structure */}
            {!isMinimal && (
              <>
                {/* Ring 1: Vertical Data Stream */}
                <motion.div 
                    className="absolute w-40 h-40 rounded-full border border-cyan-500/30 border-t-cyan-400 border-b-cyan-400/50"
                    style={{ rotateX: 60 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Ring 2: Horizontal Gyro */}
                <motion.div 
                    className="absolute w-52 h-52 rounded-full border border-indigo-500/30 border-r-indigo-400 border-l-indigo-400/50"
                    style={{ rotateY: 60 }}
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />

                {/* Ring 3: Large Outer Orbital (Data Network) */}
                <motion.div 
                    className="absolute w-72 h-72 rounded-full border border-dashed border-slate-700/50"
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                     {/* Satellite Node 1 */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-dark border border-cyan-500 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                         <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                     </div>
                     {/* Satellite Node 2 */}
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                </motion.div>

                 {/* Floating Tech Particles */}
                 {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.cos(i * 60) * 120,
                            y: Math.sin(i * 60) * 120,
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"></div>
                    </motion.div>
                ))}

                {/* Data Scan Effect */}
                <motion.div 
                    className="absolute w-64 h-64 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent rounded-full pointer-events-none"
                    animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
              </>
            )}

            {/* MINIMAL MODE VISUALS (Simplified) */}
            {isMinimal && (
               <>
                 <motion.div 
                     className="absolute w-28 h-28 rounded-full border-2 border-cyan-500/20 border-t-cyan-500"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                 />
                 <motion.div 
                     className="absolute w-36 h-36 rounded-full border border-dashed border-slate-600"
                     animate={{ rotate: -360 }}
                     transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                 />
               </>
            )}
        </div>

        {/* === TEXT CONTENT === */}
        <div className="relative mt-8 h-24 flex flex-col items-center justify-start">
            <AnimatePresence mode="wait">
                {/* Full Boot Sequence Text */}
                {stage === 'booting' && (
                    <motion.div
                        key="booting"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase">
                            <Cpu className="w-3 h-3" />
                            <span>AI Sequence Initiated</span>
                        </div>
                        
                        <motion.div 
                            key={textIndex}
                            initial={{ opacity: 0, filter: "blur(5px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0 }}
                            className="text-xl md:text-2xl font-light text-white text-center tracking-wide"
                        >
                            {BOOT_SEQUENCE[textIndex]}
                        </motion.div>

                        <div className="w-32 h-0.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                            <motion.div 
                                className="h-full bg-cyan-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: BOOT_SEQUENCE.length * 0.8, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                )}
                
                {/* Minimal Sequence Text */}
                {stage === 'minimal' && (
                     <motion.div
                        key="minimal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex flex-col items-center gap-2"
                     >
                         <div className="text-lg font-light text-white tracking-[0.2em] uppercase flex items-center gap-2">
                             <Power className="w-4 h-4 text-cyan-400" />
                             System Resumed
                         </div>
                         <div className="w-12 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                             <motion.div 
                                className="h-full bg-cyan-500"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5 }}
                             />
                         </div>
                     </motion.div>
                )}

                {/* Final Welcome Text (Shared) */}
                {stage === 'zooming' && (
                    <motion.div
                        key="ready"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl font-bold text-white tracking-[0.3em] uppercase glow-text absolute top-0"
                    >
                        Online
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

      </motion.div>

      {/* Skip Button (Only for full sequence) */}
      {!isMinimal && (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="fixed bottom-8 right-8 text-[10px] font-mono text-slate-500 hover:text-white transition-colors flex items-center gap-2 z-[110] tracking-widest uppercase"
        >
            <Zap className="w-3 h-3" /> Skip Intro
        </motion.button>
      )}

      <style>{`
        .glow-text { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(34, 211, 238, 0.5); }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
};
