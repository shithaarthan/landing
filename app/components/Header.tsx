'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
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
            <img src="/icon.png" alt="Tinty Logo" className="w-10 h-10 rounded-xl" />
            <span className={`text-xl font-display font-bold transition-colors ${
              isScrolled ? 'text-[var(--color-charcoal)]' : 'text-white'
            }`}>
              Tinty
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Features', id: 'features' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Pricing', id: 'pricing' },
              { name: 'Reviews', id: 'testimonials' },
            ].map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-[var(--color-charcoal)] hover:text-[var(--color-primary-purple)]' 
                    : 'text-white hover:text-[var(--color-gold)]'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => scrollToSection('cta')}
            >
              Download
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
