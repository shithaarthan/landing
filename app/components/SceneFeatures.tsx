'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const features = [
  {
    icon: '🪞',
    title: 'Virtual Try-On',
    description: 'See exactly how clothes look on your body before buying. Ultra-realistic AI visualization.',
    gradient: 'from-[var(--color-primary-purple)]/80 to-[var(--color-accent-purple)]/80',
  },
  {
    icon: '🎨',
    title: 'Smart Styling',
    description: 'Get personalized outfit recommendations based on your preferences and body type.',
    gradient: 'from-[var(--color-primary-purple)]/70 to-[var(--color-accent-purple)]/70',
  },
  {
    icon: '👗',
    title: 'Digital Wardrobe',
    description: 'Upload and organize your clothes digitally. Build outfit combinations easily.',
    gradient: 'from-[var(--color-primary-purple)]/60 to-[var(--color-accent-purple)]/80',
  },
  {
    icon: '⚡',
    title: '10-Second Results',
    description: 'Advanced AI generates realistic try-on images in just 10-20 seconds.',
    gradient: 'from-[var(--color-accent-purple)]/80 to-[var(--color-primary-purple)]/70',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Your photos stay private. All data encrypted. We never share your information.',
    gradient: 'from-[var(--color-primary-purple)]/90 to-[var(--color-accent-purple)]/80',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Designed exclusively for your phone. Try clothes from any store, anywhere, anytime.',
    gradient: 'from-[var(--color-accent-purple)]/70 to-[var(--color-primary-purple)]/80',
  },
];

export default function SceneFeatures() {
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
    <section ref={ref} className="section bg-gradient-to-br from-[var(--color-bg)] via-slate-50 to-violet-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)] mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] opacity-70 max-w-2xl mx-auto">
            Everything you need to shop smarter and style better
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white rounded-2xl shadow-sm border border-[var(--color-muted)]/20 hover:shadow-lg hover:border-[var(--color-primary-purple)]/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-primary-purple)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-charcoal)] opacity-70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white rounded-full font-semibold hover:shadow-xl transition-all"
          >
            ✨ Download App
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
