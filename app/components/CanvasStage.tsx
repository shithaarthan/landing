'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initTimeline } from '@/lib/gsapTimeline';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

export default function CanvasStage({ children }: { children: React.ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

useEffect(() => {
    const isMobile = window.innerWidth < 768;

    let lenis: Lenis | null = null;
    let raf: (time: number) => void;

    if (!isMobile && !reducedMotion) {
      lenis = new Lenis();
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
        }
      };
    }

    // For mobile or reduced motion, no special handling needed - native scroll works
  }, [reducedMotion]);

  return (
    <div className="canvas-sticky relative min-h-screen">
      {children}
    </div>
  );
}
