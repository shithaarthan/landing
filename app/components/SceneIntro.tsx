'use client';

import { useEffect, useRef } from 'react';
import SimplePhoneAnimation from './SimplePhoneAnimation';
import { gsap } from 'gsap';

export default function SceneIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const trustBadgesRef = useRef<HTMLDivElement>(null);
  const phoneMockupRef = useRef<HTMLDivElement>(null);
  const floatingStarRef = useRef<HTMLDivElement>(null);
  const floatingHeartRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(phoneMockupRef.current, {
      opacity: 0,
      x: 50,
      rotationX: -10,
      rotationY: 10,
      scale: 0.95
    });

    gsap.set([floatingStarRef.current, floatingHeartRef.current], {
      opacity: 0,
      scale: 0.5
    });

    // Animate content entrance
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, 0.5)
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, 1)
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 1.3)
      .to(trustBadgesRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 1.6)
      .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 2);

    // Animate phone mockup with elegant entrance
    gsap.to(phoneMockupRef.current, {
      opacity: 1,
      x: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 2,
      ease: "power4.out",
      delay: 0.6
    });

    // Animate floating elements with staggered entrance
    gsap.to(floatingStarRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: 1.4,
      rotation: 360,
      y: -20
    });

    gsap.to(floatingHeartRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: 1.7,
      rotation: -180
    });

    // Animate floating elements continuously with smooth motion
    gsap.to(floatingStarRef.current, {
      rotation: 380,
      y: -20,
      x: 8,
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to(floatingHeartRef.current, {
      scale: 1.2,
      rotation: -200,
      x: -6,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.5
    });

    // Continuous scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Add subtle 3D hover effects
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (e.clientX - centerX) / centerX;
      const moveY = (e.clientY - centerY) / centerY;

      gsap.to(phoneMockupRef.current, {
        rotationY: moveX * 5,
        rotationX: -moveY * 3,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Add mouse move effects for 3D hover
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hook relative py-12 md:py-16 overflow-hidden bg-gradient-to-br from-[var(--color-bg)] via-slate-50 to-violet-50">
      {/* Content Overlay */}
      <div ref={contentRef} className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--color-charcoal)] leading-tight opacity-0 -translate-y-4"
            >
              Your Personal{' '}
              <span className="gradient-text">AI Stylist</span> & Virtual Try-On Mirror
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-[var(--color-charcoal)] opacity-80 max-w-xl opacity-0 -translate-y-4"
            >
              See how any outfit looks on your real body. Get smart suggestions from your wardrobe. Shop with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                ref={buttonRef}
                className="btn-primary text-center opacity-0 -translate-y-4"
              >
                Download Now
              </button>
            </div>

            {/* Trust badges */}
            <div
              ref={trustBadgesRef}
              className="flex flex-wrap items-center gap-6 pt-4 opacity-0 -translate-y-4"
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
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="relative w-full max-w-full overflow-hidden">
            <div
              ref={phoneMockupRef}
              className="relative mx-auto w-full max-w-xs md:max-w-sm"
            >
              {/* Phone mockup container */}
              <div className="relative bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-3 md:p-4 border-4 md:border-8 border-[var(--color-charcoal)]">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-4 md:h-6 bg-[var(--color-charcoal)] rounded-b-2xl md:rounded-b-3xl z-10"></div>

                {/* App screen */}
                <div className="relative bg-gradient-to-br from-[var(--color-soft-beige)] to-[var(--color-premium-white)] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/16]">
                  <SimplePhoneAnimation />
                </div>
              </div>

              {/* Floating elements around phone */}
              <div
                ref={floatingStarRef}
                data-scene-intro-element
                className="absolute -top-4 right-2 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-[var(--color-gold)] rounded-xl shadow-lg flex items-center justify-center"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>

              <div
                ref={floatingHeartRef}
                data-scene-intro-element
                className="absolute -bottom-3 left-2 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-accent-purple)] rounded-full shadow-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 615.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 translate-y-4"
      >
        <svg className="w-6 h-6 text-[var(--color-primary-purple)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
