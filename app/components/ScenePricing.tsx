'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out Tinty',
    features: [
      '1 try-on per month',
      'Basic AI suggestions',
      'Standard support',
      'Mobile app access',
    ],
    limitations: [
      'Limited try-ons',
      'Basic features only',
      'Standard processing time',
    ],
    popular: false,
    cta: 'Download Now',
    gradient: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Starter',
    price: '$2.50',
    period: '/month',
    description: 'Most popular for casual users',
    features: [
      '10 try-ons per month',
      'Wardrobe sync',
      'Priority support',
      'HD quality try-ons',
      'Style recommendations',
    ],
    limitations: [],
    popular: true,
    cta: 'Start Free Trial',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Essentials',
    price: '$10',
    period: '/month',
    description: 'For fashion enthusiasts',
    features: [
      '30 HD try-ons per month',
      'Advanced AI suggestions',
      'Unlimited wardrobe items',
      'Instant processing',
      'Style analytics',
      'Trend insights',
    ],
    limitations: [],
    popular: false,
    cta: 'Go Essentials',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Pro',
    price: '$25',
    period: '/month',
    description: 'For professionals & influencers',
    features: [
      '100+ credits per month',
      'Commercial use rights',
      'Priority support',
      'API access',
      'Custom integrations',
      'Advanced analytics',
      'White-label options',
    ],
    limitations: [],
    popular: false,
    cta: 'Go Pro',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export default function ScenePricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
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
            Choose Your{' '}
            <span className="gradient-text">Style Journey</span>
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] opacity-70 max-w-2xl mx-auto mb-8">
            Start free and upgrade as you discover your perfect style. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${billingCycle === 'monthly'
                  ? 'bg-white text-[var(--color-primary-purple)] shadow-sm'
                  : 'text-gray-600 hover:text-[var(--color-charcoal)]'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all relative ${billingCycle === 'yearly'
                  ? 'bg-white text-[var(--color-primary-purple)] shadow-sm'
                  : 'text-gray-600 hover:text-[var(--color-charcoal)]'
                }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-[var(--color-gold)] text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

              <div className={`card h-full ${tier.popular ? 'ring-2 ring-[var(--color-primary-purple)]' : ''}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-charcoal)] mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-4xl font-display font-bold text-[var(--color-charcoal)]">
                      {billingCycle === 'yearly' && tier.price !== '$0'
                        ? `$${(parseFloat(tier.price.replace('$', '')) * 0.8 * 12).toFixed(0)}`
                        : tier.price
                      }
                    </span>
                    {tier.price !== '$0' && (
                      <span className="text-[var(--color-charcoal)] opacity-70">
                        {billingCycle === 'yearly' ? '/year' : tier.period}
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--color-charcoal)] opacity-70 text-sm">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
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

                  {tier.limitations.map((limitation, limitationIndex) => (
                    <motion.div
                      key={limitationIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + (tier.features.length + limitationIndex) * 0.05 }}
                      className="flex items-center gap-3 opacity-50"
                    >
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-400">{limitation}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${tier.popular
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-[var(--color-charcoal)] text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan anytime?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                question: 'What happens if I exceed my monthly limit?',
                answer: 'You can upgrade to a higher plan or wait for your next billing cycle when credits reset.',
              },
              {
                question: 'Is my data secure?',
                answer: 'Absolutely. We use bank-level encryption and never share your photos or personal information.',
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes, you can cancel your subscription at any time. You\'ll retain access until the end of your billing period.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h4 className="font-semibold text-[var(--color-charcoal)] mb-2">
                  {faq.question}
                </h4>
                <p className="text-[var(--color-charcoal)] opacity-70 text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
