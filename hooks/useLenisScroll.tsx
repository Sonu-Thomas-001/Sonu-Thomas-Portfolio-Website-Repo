import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react';
import Lenis from 'lenis';
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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduced,
      touchMultiplier: 1.5,
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
      if (typeof target === 'number') window.scrollTo({ top: target, behavior: options.immediate ? 'auto' : 'smooth' });
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
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
    };
  }, [scroll, velocity, progress]);

  return <LenisScrollContext.Provider value={value}>{children}</LenisScrollContext.Provider>;
};

export const useLenisScroll = (): LenisScrollContextValue => {
  const ctx = useContext(LenisScrollContext);
  if (!ctx) throw new Error('useLenisScroll must be used within LenisProvider');
  return ctx;
};
