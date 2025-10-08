'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SceneDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={ref} id="demo" className="scene demo min-h-screen flex flex-col items-center justify-center relative py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="demo-title text-3xl md:text-5xl font-display font-bold text-center text-[var(--color-charcoal)] mb-16"
      >
        Upload. <span className="gradient-text">Preview</span>. Save.
      </motion.h2>

      <div className="steps flex flex-col md:flex-row gap-6 md:gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="step-1 w-full md:w-64 h-56 bg-gradient-to-br from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] rounded-3xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4"
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </motion.div>
          <span className="text-white font-semibold text-lg">Upload Photo</span>
          <span className="text-white/80 text-sm mt-1 text-center px-4">Take or upload any full-body photo</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="step-2 w-full md:w-64 h-56 bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-gold)] rounded-3xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4"
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01" />
            </svg>
          </motion.div>
          <span className="text-white font-semibold text-lg">AI Preview</span>
          <span className="text-white/80 text-sm mt-1 text-center px-4">See outfits fit instantly</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="step-3 w-full md:w-64 h-56 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-rose-gold)] rounded-3xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4"
          >
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </motion.div>
          <span className="text-white font-semibold text-lg">Save Looks</span>
          <span className="text-white/80 text-sm mt-1 text-center px-4">Keep your favorites & share them</span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center text-[var(--color-charcoal)] opacity-70 mt-12 max-w-2xl px-4"
      >
        Simple three-step process that takes less than 2 minutes to start seeing yourself in stylish outfits.
      </motion.p>
    </section>
  );
}
