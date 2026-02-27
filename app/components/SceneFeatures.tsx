'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const features = [
  {
    icon: '🪞',
    title: 'Virtual Try-On',
    description: 'See exactly how clothes look on your body. Ultra-realistic AI that actually works.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '⚡',
    title: '10-Second Results',
    description: 'No waiting around. Get photorealistic try-ons in seconds, not minutes.',
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Your photos stay on your device. Encrypted, secure, never shared. Period.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: '📱',
    title: 'Works Everywhere',
    description: 'Try clothes from any store, any brand. If you can screenshot it, you can try it.',
    gradient: 'from-yellow-500 to-green-500',
  },
  {
    icon: '🎨',
    title: 'Mix & Match',
    description: 'Create unlimited outfit combinations. Find what actually works for you.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: '💡',
    title: 'Smart Insights',
    description: 'Learn what colors, cuts, and styles work best for your body type.',
    gradient: 'from-teal-500 to-blue-500',
  },
];

export default function SceneFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section ref={ref} className="relative py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)] mb-4">
            Why You'll{' '}
            <span className="gradient-text">Love It</span>
          </h2>
          <p className="text-xl text-[var(--color-charcoal)] opacity-70 max-w-2xl mx-auto">
            Everything you need, nothing you don't
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 hover:border-[var(--color-primary-purple)]/30 transition-all duration-300 overflow-hidden">
                {/* Hover gradient effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`}
                />

                {/* Icon */}
                <motion.div
                  animate={{ 
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative text-6xl mb-6"
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold text-[var(--color-charcoal)] mb-3">
                  {feature.title}
                </h3>
                <p className="relative text-[var(--color-charcoal)] opacity-70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            See Pricing
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
