'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SceneProblem() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={ref} className="section bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
              The Problem
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)]">
              Shopping online?
              <br />
              <span className="text-red-500">Never sure</span> how clothes will actually look on you?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Uncertainty & Returns</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    You order, wait, try on, and it doesn't fit right. Return hassle begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Wasted Time & Money</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    Hours spent browsing, shipping fees, return costs add up fast.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Decision Paralysis</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    Too many options, no way to visualize what actually works for your body.
                  </p>
                </div>
              </div>
            </div>

            {/* Stat */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl font-display font-bold text-red-500">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    30-40%
                  </motion.span>
                </div>
                <p className="text-sm text-[var(--color-charcoal)] opacity-80">
                  of online fashion purchases are returned due to poor fit or not matching expectations
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative chaos">
              {/* Frustrated shopper illustration placeholder */}
              <div className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12">
                <div className="space-y-6">
                  {/* Question marks floating */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-6xl md:text-8xl text-red-400 opacity-30 text-center"
                  >
                    ?
                  </motion.div>

                  {/* Shopping cart with X */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative"
                    >
                      <div className="w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Clothing items with uncertain states - these are the chaos items for GSAP */}
                  <div className="flex justify-center gap-4">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`item w-16 h-20 bg-white rounded-lg shadow-md opacity-60`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
