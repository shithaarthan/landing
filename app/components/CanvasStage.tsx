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
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (reducedMotion || isMobile) {
      // Disable animations if reduced motion or mobile
      lenis.stop();
      return;
    }

    let tl: gsap.core.Timeline | null = null;

    // Add delay to ensure hydration loader has faded before animations start
    const animationTimer = setTimeout(() => {
      tl = initTimeline();
      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update);
    }, 300);

    return () => {
      clearTimeout(animationTimer);
      if (tl) {
        tl.kill();
      }
      lenis.destroy();
    };
  }, [reducedMotion]);

  return (
    <div className="canvas-sticky relative min-h-screen">
      {children}
    </div>
  );
}
