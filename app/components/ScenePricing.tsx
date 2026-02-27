'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const pricingTiers = [
  {
    name: 'Explorer',
    price: '$0',
    period: '/month',
    description: 'Test the waters',
    features: [
      '3 try-ons per month',
      'Basic AI visualization',
      'Mobile app access',
      'Standard quality',
    ],
    popular: false,
    cta: 'Start Free',
    gradient: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Trendsetter',
    price: '$2.50',
    period: '/month',
    description: 'Perfect for regular shoppers',
    features: [
      '20 try-ons per month',
      'HD quality results',
      'Priority processing',
      'Save favorite looks',
    ],
    popular: true,
    cta: 'Get Started',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Style Icon',
    price: '$5',
    period: '/month',
    description: 'For fashion lovers',
    features: [
      '50 HD try-ons per month',
      'All features in previous plan',
    ],
    popular: false,
    cta: 'Level Up',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export default function ScenePricing() {
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
    <section ref={ref} className="section bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)] mb-4">
            Pick Your{' '}
            <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] opacity-70 max-w-2xl mx-auto mb-8">
            Launch pricing. Lock it in now before we raise prices.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8"
          >
            <button
              className="px-6 py-2 rounded-full text-sm font-semibold bg-white text-[var(--color-primary-purple)] shadow-sm"
            >
              Monthly
            </button>
            <div className="relative px-6 py-2 rounded-full text-sm font-semibold text-gray-400 cursor-not-allowed">
              Yearly
              <span className="absolute -top-2 -right-2 bg-gray-400 text-white text-xs px-2 py-0.5 rounded-full">
                Soon
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${tier.popular ? 'scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className={`card h-full flex flex-col ${tier.popular ? 'ring-2 ring-[var(--color-primary-purple)]' : ''}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-charcoal)] mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-4xl font-display font-bold text-[var(--color-charcoal)]">
                      {tier.price}
                    </span>
                    {tier.price !== '$0' && (
                      <span className="text-[var(--color-charcoal)] opacity-70">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--color-charcoal)] opacity-70 text-sm">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-[var(--color-charcoal)]">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all mt-auto ${tier.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
