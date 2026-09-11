import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useLenisScroll } from '../hooks/useLenisScroll';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  name?: string;
  userName?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, name, userName }) => {
  const displayName = userName || name;
  const modalRef = useRef<HTMLDivElement>(null);
  const { stop, start } = useLenisScroll();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    stop();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      start();
    };
  }, [isOpen, onClose, stop, start]);

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="success-modal-title"
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm sm:max-w-md bg-white border border-slate-200/90 p-8 pt-10 rounded-3xl shadow-soft-lg relative outline-none"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
                className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center mb-5 text-emerald-600 shadow-soft-sm"
              >
                <Check className="w-8 h-8" />
              </motion.div>

              <h2 id="success-modal-title" className="font-display text-2xl font-bold text-slate-900 mb-2">
                Transmission Received
              </h2>
              
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                {displayName ? `Thank you, ${displayName.split(' ')[0]}! ` : "Thank you for reaching out. "}
                Your message has been safely delivered. I will respond to your inquiry shortly.
              </p>

              <button
                onClick={onClose}
                className="w-full py-3.5 px-4 bg-primary hover:bg-primary-600 text-white rounded-xl font-semibold transition-all shadow-soft-md hover:shadow-glow-primary active:scale-[0.99]"
              >
                Return to Site
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
