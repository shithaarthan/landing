'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SceneIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const trustBadgesRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate content entrance
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, 0.5)
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, 1)
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 1.3)
      .to(trustBadgesRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 1.6);
  }, []);

  return (
    <section ref={sectionRef} className="hook relative py-20 md:py-28 overflow-hidden bg-[var(--color-bg)]">
      {/* Premium ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-400/20 rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-pink-400/20 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-[20%] w-[30%] h-[30%] bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--color-charcoal)] leading-tight opacity-0 -translate-y-4"
            >
              Your Personal{' '}
              <span className="gradient-text">AI Stylist</span>{' '}
              & Virtual Try-On Mirror
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-[var(--color-charcoal)] opacity-80 max-w-xl opacity-0 -translate-y-4"
            >
              See how any outfit looks on your real body. Get smart suggestions from your wardrobe. Shop with confidence.
            </p>

            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 opacity-0 -translate-y-4">
              <a
                href="#download"
                className="blob-btn"
                style={{ padding: '20px 46px' }}
              >
                Download Now
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </a>
            </div>

            {/* Trust & Value Indicators */}
            <div
              ref={trustBadgesRef}
              className="flex flex-wrap items-center gap-6 pt-4 opacity-0 -translate-y-4"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-charcoal)]">Photorealistic Results</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-charcoal)]">100% Secure & Private</span>
              </div>
            </div>
          </div>

          {/* Right side - Premium Interactive Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="relative flex justify-center items-center perspective-1000"
          >
            {/* The 3D Framed Container */}
            <motion.div
              whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-md aspect-square rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] border-white/90 bg-white/50 backdrop-blur-sm overflow-hidden transform-style-3d group"
            >
              <Image
                src="/demo/after.jpeg"
                alt="AI Styling Result"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 border border-black/5 rounded-[1.5rem] pointer-events-none z-10"></div>

              {/* Glassmorphic overlays */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-6 left-6 bg-white/40 backdrop-blur-md px-5 py-3 rounded-full border border-white/60 shadow-xl flex items-center gap-2 z-20"
              >
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-sm font-bold text-slate-800 tracking-wide drop-shadow-sm">AI Stylist Active</span>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl z-20"
              >
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-white tracking-widest uppercase">99% Match</span>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative background circle behind the main element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 1, duration: 1.5, type: "spring" }}
              className="absolute -z-10 w-[110%] h-[110%] bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-[80px]"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
