'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll handling could be added here if needed
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/icon.png" alt="Tinty Logo" className="w-10 h-10 rounded-xl" />
            <span className="text-xl font-display font-bold text-[var(--color-charcoal)]">
              Tinty
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#features"
              onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] transition-colors cursor-pointer"
            >
              How It Works
            </a>
            <Link href="/pricing" className="text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] transition-colors">
              Pricing
            </Link>
            <a
              href="#testimonials"
              onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-sm font-semibold text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] transition-colors cursor-pointer"
            >
              Reviews
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="#download" className="blob-btn">
              Download App
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </Link>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--color-charcoal)]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white rounded-2xl mt-2 shadow-lg border border-gray-100"
            >
              <div className="p-4 space-y-3">
                <a
                  href="#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-2 text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] font-medium"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-2 text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] font-medium"
                >
                  How It Works
                </a>
                <Link
                  href="/pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-2 text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] font-medium"
                >
                  Pricing
                </Link>
                <a
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-2 text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] font-medium"
                >
                  Reviews
                </a>

                <div className="pt-3 border-t border-gray-100 flex justify-center">
                  <Link
                    href="#download"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="blob-btn w-full"
                  >
                    Download App
                    <span className="blob-btn__inner">
                      <span className="blob-btn__blobs">
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                        <span className="blob-btn__blob"></span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
