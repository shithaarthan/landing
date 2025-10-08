'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

// Extend Window interface to include lenis
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu immediately
      setIsMobileMenuOpen(false);

      // Check if Lenis is available (desktop smooth scrolling)
      const lenis = window.lenis;
      if (lenis) {
        // Use Lenis scrollTo for smooth desktop scrolling
        lenis.scrollTo(element, {
          offset: -80, // Account for fixed header height
          duration: 1.2,
          easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
        });
      } else {
        // For mobile devices or when Lenis is not available, use native instant scroll
        const rect = element.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - 80; // Account for fixed header height

        window.scrollTo({
          top: offsetTop,
        });
      }
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/20'
          : 'bg-gradient-to-b from-black/20 via-transparent to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img src={process.env.NODE_ENV === 'production' ? '/landing/icon.png' : '/icon.png'} alt="Tinty Logo" className="w-10 h-10 rounded-xl" />
            <span className={`text-xl font-display font-bold transition-colors ${
              isScrolled ? 'text-[var(--color-charcoal)]' : 'text-white'
            }`}>
              Tinty
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('features')}
              className={`relative overflow-hidden group/nav font-medium transition-all duration-300 px-4 py-2 rounded-full border ${
                isScrolled
                  ? 'text-[var(--color-charcoal)] hover:text-white hover:bg-[var(--color-primary-purple)] border-transparent hover:border-[var(--color-primary-purple)] hover:shadow-lg'
                  : 'text-white hover:text-[var(--color-gold)] border-white/30 hover:border-[var(--color-gold)] hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="inline-block transition duration-500 group-hover/nav:-translate-x-32">
                Features
              </span>
              <div className="-translate-x-32 group-hover/nav:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <SparklesIcon className="w-4 h-4" />
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('how-it-works')}
              className={`relative overflow-hidden group/nav font-medium transition-all duration-300 px-4 py-2 rounded-full border ${
                isScrolled
                  ? 'text-[var(--color-charcoal)] hover:text-white hover:bg-[var(--color-primary-purple)] border-transparent hover:border-[var(--color-primary-purple)] hover:shadow-lg'
                  : 'text-white hover:text-[var(--color-gold)] border-white/30 hover:border-[var(--color-gold)] hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="inline-block transition duration-500 group-hover/nav:-translate-x-44">
                How It Works
              </span>
              <div className="-translate-x-44 group-hover/nav:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <CogIcon className="w-4 h-4" />
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('pricing')}
              className={`relative overflow-hidden group/nav font-medium transition-all duration-300 px-4 py-2 rounded-full border ${
                isScrolled
                  ? 'text-[var(--color-charcoal)] hover:text-white hover:bg-[var(--color-primary-purple)] border-transparent hover:border-[var(--color-primary-purple)] hover:shadow-lg'
                  : 'text-white hover:text-[var(--color-gold)] border-white/30 hover:border-[var(--color-gold)] hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="inline-block transition duration-500 group-hover/nav:-translate-x-20">
                Pricing
              </span>
              <div className="-translate-x-20 group-hover/nav:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <DollarIcon className="w-4 h-4" />
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('testimonials')}
              className={`relative overflow-hidden group/nav font-medium transition-all duration-300 px-4 py-2 rounded-full border ${
                isScrolled
                  ? 'text-[var(--color-charcoal)] hover:text-white hover:bg-[var(--color-primary-purple)] border-transparent hover:border-[var(--color-primary-purple)] hover:shadow-lg'
                  : 'text-white hover:text-[var(--color-gold)] border-white/30 hover:border-[var(--color-gold)] hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="inline-block transition duration-500 group-hover/nav:-translate-x-20">
                Reviews
              </span>
              <div className="-translate-x-20 group-hover/nav:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <StarIcon className="w-4 h-4" />
              </div>
            </motion.button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.0,
                duration: 0.6,
                ease: "backOut"
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden group/header-btn px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white shadow-lg hover:shadow-xl'
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 hover:border-white/50'
              }`}
              onClick={() => scrollToSection('cta')}
            >
              <span className="group-hover/header-btn:translate-x-20 transition duration-500 inline-block">
                Download
              </span>
              <div className="-translate-x-20 group-hover/header-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <div className={`absolute inset-0 opacity-0 group-hover/header-btn:opacity-100 transition-opacity duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[var(--color-accent-purple)] to-[var(--color-primary-purple)]'
                  : 'bg-white/20'
              }`}></div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[var(--color-charcoal)]' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-2xl mt-4 shadow-xl"
        >
          <div className="p-6 space-y-4">
            {[
              { name: 'Features', id: 'features' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'Reviews', id: 'testimonials' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)] font-semibold transition-colors"
              >
                {item.name}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('cta')}
                className="w-full btn-primary text-center"
              >
                Download
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}

const SparklesIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M4 14a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M14 4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M14 16a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M4 20h.01" />
      <path d="M8 20h.01" />
      <path d="M12 20h.01" />
      <path d="M16 20h.01" />
      <path d="M20 20h.01" />
      <path d="M20 16h.01" />
      <path d="M20 12h.01" />
      <path d="M20 8h.01" />
      <path d="M8 16h.01" />
      <path d="M12 16h.01" />
      <path d="M16 16h.01" />
      <path d="M16 12h.01" />
      <path d="M16 8h.01" />
      <path d="M8 8h.01" />
      <path d="M12 8h.01" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
    </svg>
  );
};

const CogIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c.996 .608 2.296 .07 2.572 -1.065z" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </svg>
  );
};

const DollarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
      <path d="M12 3v3m0 12v3" />
    </svg>
  );
};

const StarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867 l1.179 6.873z" />
    </svg>
  );
};
