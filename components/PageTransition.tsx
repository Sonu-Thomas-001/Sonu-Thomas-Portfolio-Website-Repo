import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu } from 'lucide-react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      {/* The Content Container */}
      {/* We apply a slight scale/fade to the actual page content for depth */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        {children}
      </motion.div>

      {/* === THE NEURAL CURTAIN (Transition Overlay) === */}
      <motion.div
        className="fixed inset-0 z-[60] bg-[#020617] flex items-center justify-center pointer-events-none overflow-hidden"
        initial={{ scaleY: 1 }}      // Start visible (covering screen) for new page
        animate={{ scaleY: 0 }}      // Animate out (reveal)
        exit={{ scaleY: 1 }}         // Animate in (cover) for old page
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom cubic-bezier for "heavy" tech feel
        style={{ originY: 0 }}       // Pivot from top
      >
        {/* Holographic Grid Background inside curtain */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        {/* Gradient Pulse */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>

        {/* Central Processing Unit (Visible during the wipe) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 1 }} // Keep visible during exit cover
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative z-10 flex flex-col items-center gap-4"
        >
            {/* Rotating Rings */}
            <div className="relative w-24 h-24 flex items-center justify-center">
                 <motion.div 
                    className="absolute inset-0 border-2 border-primary/30 rounded-full border-t-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                 />
                 <motion.div 
                    className="absolute inset-2 border-2 border-secondary/30 rounded-full border-b-secondary"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                 />
                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/20 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                     <BrainCircuit className="w-6 h-6 text-primary" />
                 </div>
            </div>
            
            <div className="flex items-center gap-2 text-primary/70 font-mono text-xs tracking-[0.3em] uppercase">
                <Cpu className="w-3 h-3 animate-pulse" />
                <span>Processing Data</span>
            </div>
        </motion.div>

        {/* Bottom Scan Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(14,165,233,0.8)]"></div>
      </motion.div>
    </>
  );
};
