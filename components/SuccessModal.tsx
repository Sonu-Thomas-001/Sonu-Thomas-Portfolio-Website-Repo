import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, name }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Prevent background scrolling when open
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Trap focus basic implementation (focus the modal first element if we wanted, but autoFocus on a ref is easier)
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
     if (isOpen && modalRef.current) {
         modalRef.current.focus();
     }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-md"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="success-modal-title"
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
            className="w-full max-w-sm sm:max-w-md bg-surface/90 backdrop-blur-2xl border border-white/10 p-8 pt-10 rounded-3xl shadow-2xl relative shadow-primary/20 outline-none"
          >
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_50px_rgba(14,165,233,0.05)] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Success Icon Container */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                {/* Ping animation behind */}
                <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/20 animation-delay-2000" style={{ animationDuration: '3s' }} />
                
                {/* Animated SVG Check */}
                <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <motion.polyline 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }} 
                    points="20 6 9 17 4 12" 
                  />
                </svg>
              </motion.div>

              <h2 id="success-modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Message Sent
              </h2>
              
              <p className="text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
                {name ? `Thanks, ${name.split(' ')[0]}! ` : "Thanks for reaching out. "}
                I've received your message and will get back to you shortly.
              </p>

              <div className="flex flex-col w-full gap-3">
                <button
                  onClick={onClose}
                  className="w-full py-3.5 px-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark hover:-translate-y-0.5 active:translate-y-0"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
