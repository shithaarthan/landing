'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SceneSolution() {
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
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="section bg-gradient-to-br from-[var(--color-bg)] to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual representation - Left side this time */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative ui-mock">
              {/* Before/After visualization */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Magic wand icon */}
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex justify-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-primary-purple)] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Transformation visual */}
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex-1"
                    >
                      <div className="bg-gray-100 rounded-xl p-4 h-48 flex items-center justify-center">
                        <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-center text-sm text-gray-500 mt-2">Your Photo</p>
                    </motion.div>

                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-8 h-8 text-[var(--color-accent-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex-1"
                    >
                      <div className="bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-primary-purple)] rounded-xl p-4 h-48 flex items-center justify-center relative overflow-hidden">
                        <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {/* Sparkles overlay */}
                        <motion.div
                          animate={{
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-[var(--color-gold)] opacity-20"
                        />
                      </div>
                      <p className="text-center text-sm text-[var(--color-primary-purple)] font-semibold mt-2">Styled You!</p>
                    </motion.div>
                  </div>

                  {/* Check marks */}
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                        className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-[var(--color-gold)] rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Solution Content - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
              The Solution
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)]">
              Tinty lets you{' '}
              <span className="gradient-text">try before you buy</span>
              {' '}— on your own body
            </h2>

            <p className="text-lg text-[var(--color-charcoal)] opacity-80">
              Upload your photo once, then instantly see how any outfit looks on your actual body. No more guessing, no more returns, no more disappointment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Ultra-Realistic Visualization</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    AI-powered technology shows exactly how clothes fit your unique body shape.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Instant Confidence</h4>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    Know exactly what you're getting before clicking "buy". Shop with certainty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Save Time & Money</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    No more waiting for deliveries or dealing with returns. Get it right the first time.
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              className="btn-primary mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Tinty Free
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
