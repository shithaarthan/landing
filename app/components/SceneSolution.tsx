'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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
    <section ref={ref} className="section bg-gradient-to-br from-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <div className="space-y-6">
                  {/* AI Icon */}
                  <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex justify-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-primary-purple)] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Premium Workflow visualization */}
                  <div className="flex items-center justify-center gap-1 md:gap-4 lg:gap-6 mt-8">
                    {/* User Raw Photo */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex-1 relative group"
                    >
                      <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="rounded-xl overflow-hidden aspect-[4/5] sm:aspect-square relative shadow-inner">
                          <Image
                            src="/demo/before.png"
                            alt="Original Photo"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            unoptimized
                          />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-slate-100 text-xs font-bold text-slate-700 whitespace-nowrap">
                          Raw Photo
                        </div>
                      </div>
                    </motion.div>

                    {/* Magic connecting line */}
                    <div className="relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 z-0 shrink-0">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-purple-200 border-t-purple-500 border-r-purple-500 opacity-60"
                      />
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* AI Output Generation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex-1 relative group"
                    >
                      {/* Premium glow under the card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                      <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-2 shadow-[0_8px_32px_rgba(168,85,247,0.15)] border border-purple-200/50 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="rounded-xl overflow-hidden aspect-[4/5] sm:aspect-square relative shadow-inner">
                          <Image
                            src="/demo/after.jpeg"
                            alt="AI Generated Result"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            unoptimized
                          />
                          <motion.div
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent mix-blend-overlay pointer-events-none"
                          />
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 rounded-full shadow-lg border border-purple-400 text-xs font-bold text-white whitespace-nowrap shadow-purple-500/30">
                          ✨ AI Styled
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Success indicators */}
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-[var(--color-gold)] rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              How It Works
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)]">
              See Outfits on Your{' '}
              <span className="gradient-text">Real Body</span>
            </h2>

            <p className="text-lg text-[var(--color-charcoal)] opacity-80">
              Upload your photo and instantly see how any clothing item fits you. Perfect for finding your next favorite look.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Find Perfect Matches</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    See exactly how new pieces will fit with your existing wardrobe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Save Time & Money</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    Stop ordering and returning clothes that don't fit your style
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-charcoal)]">Build Your Style</h4>
                  <p className="text-[var(--color-charcoal)] opacity-70">
                    Create stunning lookbooks without stepping outside your home
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="#download"
              className="btn-primary mt-8 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
