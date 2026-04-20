'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function SceneCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
      observer.disconnect();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf_jW2e4L9IP-aFCz6osbZTABy4vdYG_q3b14xSSk86Vy5TTw/viewform?usp=sf_link';
    
    window.open(googleFormUrl, '_blank');
    
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="download" ref={ref} className="py-20 bg-gradient-to-br from-[var(--color-primary-purple)] via-[var(--color-accent-purple)] to-purple-900 overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {submitted ? (
            <>
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                You&apos;re on the list!
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                We&apos;ll notify you as soon as Tinty is ready for beta testing. Stay tuned!
              </p>
            </>
          ) : (
            <>
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Be the First to Try{' '}
                <span className="text-[var(--color-gold)]">Tinty</span>
              </h2>

              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join the beta waitlist and be among the first to experience AI-powered virtual try-on.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <button
                  type="submit"
                  className="blob-btn text-white text-lg font-bold px-8 py-4 whitespace-nowrap"
                >
                  Join Beta
                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
              </form>

              <p className="text-sm text-white/60">
                Click to fill out the beta signup form. Limited spots available.
              </p>
            </>
          )}

          <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Early Access</span>
            </div>

            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">100% Private</span>
            </div>

            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">Limited Spots</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}