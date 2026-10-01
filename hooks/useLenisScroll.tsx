import React, { createContext, useContext, useEffect, useMemo, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { MotionValue, useMotionValue, useReducedMotion } from 'framer-motion';

export const NAV_OFFSET = 90;

export interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
  easing?: (t: number) => number;
  lock?: boolean;
}

export interface LenisScrollContextValue {
  scroll: MotionValue<number>;
  velocity: MotionValue<number>;
  progress: MotionValue<number>;
  scrollTo: (target: number | string | HTMLElement, options?: ScrollToOptions) => void;
  scrollToId: (id: string, options?: ScrollToOptions) => void;
  stop: () => void;
  start: () => void;
  resize: () => void;
  lenis: Lenis | null;
}

const LenisScrollContext = createContext<LenisScrollContextValue | null>(null);

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const scroll = useMotionValue(0);
  const velocity = useMotionValue(0);
  const progress = useMotionValue(0);

  useEffect(() => {
    // Initialize Lenis for luxurious smooth scrolling throughout all pages
    // syncTouch: false ensures touch devices retain native 60/120fps hardware momentum scrolling
    // smoothWheel interpolates mouse wheel and trackpad scroll smoothly on desktop/laptops
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !reduced,
      syncTouch: false,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Track scroll, velocity, and progress for interactive elements (TechMarquee, ScrollToTop, progress bar)
    lenis.on('scroll', (instance: Lenis) => {
      scroll.set(instance.scroll);
      velocity.set(instance.velocity);
      progress.set(instance.progress);
    });

    // Touch momentum sync: update motion values during native touch momentum
    const handleNativeScroll = () => {
      if (lenis.isStopped) return;
      const currentY = window.scrollY;
      scroll.set(currentY);
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.set(Math.min(1, Math.max(0, currentY / maxScroll)));
    };
    window.addEventListener('scroll', handleNativeScroll, { passive: true });

    // Performance-timed RAF loop
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Dynamic resize observer: automatically recalculates Lenis scroll boundaries on DOM/route changes
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      resizeObserver.observe(document.body);
    }

    const handleWindowResize = () => {
      lenis.resize();
    };
    window.addEventListener('resize', handleWindowResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleNativeScroll);
      window.removeEventListener('resize', handleWindowResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      (window as any).lenis = null;
      lenisRef.current = null;
      lenis.destroy();
    };
  }, [reduced, scroll, velocity, progress]);

  const scrollTo = useCallback((target: number | string | HTMLElement, options: ScrollToOptions = {}) => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target, {
        offset: options.offset ?? 0,
        immediate: options.immediate ?? false,
        duration: options.duration ?? 1.15,
        easing: options.easing,
        lock: options.lock ?? false,
      });
      return;
    }

    // Fallback if Lenis is unavailable
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
  }, []);

  const scrollToId = useCallback((id: string, options: ScrollToOptions = {}) => {
    if (!id || id === 'hero' || id === 'top') {
      scrollTo(0, options);
      return;
    }

    const cleanId = id.startsWith('#') ? id.slice(1) : id;

    // Retry checking if the element is rendered in case of route transitions or lazy chunks
    let attempts = 0;
    const maxAttempts = 35; // ~580ms coverage at 60fps

    const tryScroll = () => {
      const el = document.getElementById(cleanId);
      if (el) {
        scrollTo(el, { offset: -NAV_OFFSET, ...options });
      } else if (attempts < maxAttempts) {
        attempts++;
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [scrollTo]);

  const resize = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  }, []);

  const value = useMemo<LenisScrollContextValue>(() => ({
    scroll,
    velocity,
    progress,
    scrollTo,
    scrollToId,
    resize,
    lenis: lenisRef.current,
    stop: () => {
      if (lenisRef.current) lenisRef.current.stop();
      else document.body.style.overflow = 'hidden';
    },
    start: () => {
      if (lenisRef.current) lenisRef.current.start();
      else document.body.style.overflow = '';
    },
  }), [scroll, velocity, progress, scrollTo, scrollToId, resize]);

  return <LenisScrollContext.Provider value={value}>{children}</LenisScrollContext.Provider>;
};

export const useLenisScroll = (): LenisScrollContextValue => {
  const ctx = useContext(LenisScrollContext);
  if (!ctx) throw new Error('useLenisScroll must be used within LenisProvider');
  return ctx;
};
