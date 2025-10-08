'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initTimeline } from '@/lib/gsapTimeline';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

// Extend Window interface to include lenis
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function CanvasStage({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

useEffect(() => {
    const isMobile = window.innerWidth < 768;

    let lenis: Lenis | null = null;
    let raf: (time: number) => void;

    if (!reducedMotion) {
      // Enable Lenis on all devices, including mobile
      lenis = new Lenis();
      // Store lenis instance globally for Header navigation
      window.lenis = lenis;
      raf = function raf_time(time: number) {
        if (lenis) {
          lenis.raf(time);
          requestAnimationFrame(raf_time);
        }
      };
      requestAnimationFrame(raf);

      let tl: gsap.core.Timeline | null = null;

      // Add delay to ensure hydration loader has faded before animations start
      const animationTimer = setTimeout(() => {
        tl = initTimeline();
        if (lenis) {
          // Sync ScrollTrigger with Lenis
          lenis.on('scroll', ScrollTrigger.update);
        }
      }, 300);

      return () => {
        clearTimeout(animationTimer);
        if (tl) {
          tl.kill();
        }
        if (lenis) {
          lenis.destroy();
          window.lenis = undefined;
        }
      };
    }

    // For reduced motion, clean up any existing lenis
    else if (window.lenis) {
      window.lenis.destroy();
      window.lenis = undefined;
    }

    // For mobile or reduced motion, no special handling needed - native scroll works
  }, [reducedMotion]);

  return (
    <div className="canvas-sticky relative min-h-screen w-full">
      {children}
    </div>
  );
}
