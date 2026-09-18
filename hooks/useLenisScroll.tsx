import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { MotionValue, useMotionValue, useReducedMotion } from 'framer-motion';

export const NAV_OFFSET = 90;

interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
}

interface LenisScrollContextValue {
  scroll: MotionValue<number>;
  velocity: MotionValue<number>;
  progress: MotionValue<number>;
  scrollTo: (target: number | string | HTMLElement, options?: ScrollToOptions) => void;
  scrollToId: (id: string, options?: ScrollToOptions) => void;
  stop: () => void;
  start: () => void;
}

const LenisScrollContext = createContext<LenisScrollContextValue | null>(null);

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const scroll = useMotionValue(0);
  const velocity = useMotionValue(0);
  const progress = useMotionValue(0);

  useEffect(() => {
    // Detect mobile touch devices: native touch momentum is handled at 60/120fps by OS compositor.
    // Lenis should NOT intercept touch events on phones as it forces non-passive listeners and causes jank.
    const isTouchDevice = typeof window !== 'undefined' && (
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    );

    if (isTouchDevice) {
      let lastY = window.scrollY;
      let lastTime = performance.now();

      const handleScroll = () => {
        const currentY = window.scrollY;
        const now = performance.now();
        const dt = Math.max(1, now - lastTime);
        const vel = ((currentY - lastY) / dt) * 1000;

        scroll.set(currentY);
        velocity.set(vel);

        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        progress.set(Math.min(1, Math.max(0, currentY / maxScroll)));

        lastY = currentY;
        lastTime = now;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    // On desktop pointer devices, initialize Lenis for luxurious smooth mouse-wheel scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduced,
      syncTouch: false,
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    lenis.on('scroll', (instance: Lenis) => {
      scroll.set(instance.scroll);
      velocity.set(instance.velocity);
      progress.set(instance.progress);
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      (window as any).lenis = null;
      lenisRef.current = null;
      lenis.destroy();
    };
  }, [reduced, scroll, velocity, progress]);

  const value = useMemo<LenisScrollContextValue>(() => {
    const scrollTo = (target: number | string | HTMLElement, options: ScrollToOptions = {}) => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target, options);
        return;
      }
      const behavior = options.immediate ? 'auto' : 'smooth';
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior });
      } else if (typeof target === 'string') {
        const el = document.querySelector(target) as HTMLElement | null;
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY + (options.offset || 0);
          window.scrollTo({ top, behavior });
        }
      } else if (target instanceof HTMLElement) {
        const top = target.getBoundingClientRect().top + window.scrollY + (options.offset || 0);
        window.scrollTo({ top, behavior });
      }
    };

    const scrollToId = (id: string, options: ScrollToOptions = {}) => {
      if (id === 'hero' || id === 'top') {
        scrollTo(0, options);
        return;
      }
      const el = document.getElementById(id);
      if (el) scrollTo(el, { offset: -NAV_OFFSET, ...options });
    };

    return {
      scroll,
      velocity,
      progress,
      scrollTo,
      scrollToId,
      stop: () => {
        if (lenisRef.current) lenisRef.current.stop();
        else document.body.style.overflow = 'hidden';
      },
      start: () => {
        if (lenisRef.current) lenisRef.current.start();
        else document.body.style.overflow = '';
      },
    };
  }, [scroll, velocity, progress]);

  return <LenisScrollContext.Provider value={value}>{children}</LenisScrollContext.Provider>;
};

export const useLenisScroll = (): LenisScrollContextValue => {
  const ctx = useContext(LenisScrollContext);
  if (!ctx) throw new Error('useLenisScroll must be used within LenisProvider');
  return ctx;
};
