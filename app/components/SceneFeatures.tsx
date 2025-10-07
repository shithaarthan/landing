'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'AI Try-On',
    description: 'Ultra-realistic visualization on your photo. See exactly how clothes fit your body.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Smart Wardrobe',
    description: 'Upload your clothes, get organized, style smarter. Your digital closet, always accessible.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Outfit Suggestions',
    description: 'AI builds complete looks from your wardrobe. Get personalized styling ideas daily.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Trend Matching',
    description: 'Discover styles that fit your body & taste. Stay on-trend with personalized recommendations.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Privacy First',
    description: 'Your photos, your control. All data encrypted and secure. We never share your information.',
    gradient: 'from-indigo-500 to-purple-500',
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
    <section ref={ref} className="features-scene section bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)] mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Style Smarter</span>
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] opacity-70 max-w-2xl mx-auto">
            Powerful AI features designed to revolutionize how you shop and style yourself
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group feature-card"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Premium background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${10 + (i % 2) * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Icon with premium effects */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                    rotateY: 180
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-2xl relative`}
                >
                  {/* Icon glow effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {feature.icon}
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>

                {/* Content with enhanced typography */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-charcoal)] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-primary-purple)] group-hover:to-[var(--color-accent-purple)] transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-charcoal)] opacity-70 leading-relaxed group-hover:opacity-90 transition-opacity duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Premium hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`h-1.5 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 relative`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full`}
                    animate={{
                      scaleX: [0, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 45,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-purple)] via-[var(--color-accent-purple)] to-[var(--color-gold)] opacity-10 blur-3xl rounded-full scale-150" />

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-charcoal)] mb-4">
                  Ready to Transform Your{' '}
                  <span className="gradient-text">Style Journey?</span>
                </h3>
                <p className="text-lg text-[var(--color-charcoal)] opacity-70 mb-8 max-w-2xl mx-auto">
                  Join thousands of fashion enthusiasts who've already discovered the power of AI-powered styling
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    className="btn-primary text-lg px-8 py-4 shadow-2xl"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      Download Now
                      <motion.svg
                        className="w-5 h-5"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                  </motion.button>

                  <motion.button
                    className="btn-secondary text-lg px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Watch Demo
                  </motion.button>
                </div>

                {/* Trust indicators */}
                <motion.div
                  className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-[var(--color-charcoal)] opacity-70">
                      10,000+ Happy Users
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--color-charcoal)] opacity-70">
                      100% Free to Start
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--color-charcoal)] opacity-70">
                      Secure & Private
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
