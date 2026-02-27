'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function SceneIntro() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)] pt-20">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Left: Content */}
          <div ref={contentRef} className="space-y-8 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[var(--color-primary-purple)]/20 shadow-sm">
              <span className="w-2 h-2 bg-[var(--color-primary-purple)] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-[var(--color-charcoal)]">AI-Powered Virtual Try-On</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--color-charcoal)] leading-[1.1]">
              Stop Guessing.{' '}
              <span className="gradient-text">Start Knowing.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--color-charcoal)]/70 leading-relaxed max-w-xl">
              Tired of buying clothes that don't fit? See exactly how any outfit looks on your body before you click "buy."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#problem" className="blob-btn" style={{ padding: '18px 40px', fontSize: '16px' }}>
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
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-[var(--color-charcoal)] font-semibold rounded-full border-2 border-[var(--color-charcoal)]/20 hover:border-[var(--color-primary-purple)] hover:text-[var(--color-primary-purple)] transition-all duration-300"
              >
                See Pricing
              </a>
            </div>
          </div>

          {/* Right: Interactive Before/After Slider */}
          <div className="relative">
            <div
              ref={containerRef}
              className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src="/demo/before.png"
                  alt="User taking a raw photo before using Tinty AI virtual try-on app"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full">
                  <span className="text-sm font-bold text-white">Before</span>
                </div>
              </div>

              {/* After Image with Clip */}
              <div
                className="absolute inset-0 transition-all duration-100"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/demo/after.jpeg"
                  alt="Realistic AI virtual try-on result showing a stylized outfit on the user"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full">
                  <span className="text-sm font-bold text-[var(--color-primary-purple)]">After</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-primary-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Instruction Badge */}
              {sliderPosition > 45 && sliderPosition < 55 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-[var(--color-primary-purple)] text-white text-sm font-semibold rounded-full shadow-lg animate-pulse">
                  Drag to compare
                </div>
              )}
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--color-primary-purple)]/20 shadow-sm">
                <span className="text-sm font-medium text-[var(--color-charcoal)]">✨ Photorealistic</span>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--color-primary-purple)]/20 shadow-sm">
                <span className="text-sm font-medium text-[var(--color-charcoal)]">🔒 100% Private</span>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[var(--color-primary-purple)]/20 shadow-sm">
                <span className="text-sm font-medium text-[var(--color-charcoal)]">⚡ Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
