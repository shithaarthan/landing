'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      syncTouch: true,
      autoResize: true,
    });

    lenis.on('scroll', (e: any) => {
      // console.log(e); // Optional: for debugging scroll events
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expose lenis to the window object for global access (e.g., in Header.tsx)
    if (typeof window !== 'undefined') {
      window.lenis = lenis;
    }

    return () => {
      lenis.destroy();
      if (typeof window !== 'undefined') {
        delete window.lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
