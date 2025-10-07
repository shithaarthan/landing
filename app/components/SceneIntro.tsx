'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SceneIntro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-bg)] via-white to-[var(--color-bg)]">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--color-accent-purple)] opacity-10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[var(--color-primary-purple)] opacity-10 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--color-charcoal)] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Personal{' '}
              <span className="gradient-text">AI Stylist</span> & Virtual Try-On Mirror
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[var(--color-charcoal)] opacity-80 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              See how any outfit looks on your real body. Get smart suggestions from your wardrobe. Shop with confidence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                className="btn-primary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Now
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-[var(--color-charcoal)]">4.9/5 from 10k+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm text-[var(--color-charcoal)]">100% Secure & Private</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - App mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative mx-auto w-full max-w-md"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Phone mockup container */}
              <div className="relative bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-[var(--color-charcoal)]">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[var(--color-charcoal)] rounded-b-3xl z-10"></div>
                
                {/* App screen */}
                <div className="relative bg-gradient-to-br from-[var(--color-soft-beige)] to-[var(--color-premium-white)] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Mock app interface */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-8 rounded-full bg-[var(--color-primary-purple)]"></div>
                      <div className="h-8 w-24 rounded-full bg-[var(--color-accent-purple)] opacity-50"></div>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                      <motion.div
                        className="h-64 bg-white rounded-2xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        <div className="h-full bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-primary-purple)] opacity-20"></div>
                      </motion.div>
                      
                      <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <div className="h-16 w-16 bg-white rounded-xl shadow"></div>
                        <div className="h-16 w-16 bg-white rounded-xl shadow"></div>
                        <div className="h-16 w-16 bg-white rounded-xl shadow"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-[var(--color-gold)] rounded-2xl shadow-lg flex items-center justify-center"
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-6 w-16 h-16 bg-[var(--color-accent-purple)] rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-6 h-6 text-[var(--color-primary-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
