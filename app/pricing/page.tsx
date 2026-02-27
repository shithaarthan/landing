'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// Plan configurations matching user's pricing
const plans = [
    {
        id: 'free',
        name: 'Free',
        price: 0,
        credits: 3,
        period: '/month',
        tagline: 'Perfect for trying out Tinty',
        features: [
            '3 try-ons per month',
            'Basic AI suggestions',
            'Standard support',
        ],
        cta: 'Get Started',
    },
    {
        id: 'starter',
        name: 'Starter',
        price: 2.50,
        credits: 25,
        period: '/month',
        tagline: 'Most popular for casual users',
        features: [
            '25 try-ons per month',
            'HD quality',
            'Wardrobe sync',
            'Priority support',
        ],
        cta: 'Start Trial',
        popular: true,
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 9,
        credits: 100,
        period: '/month',
        tagline: 'For fashion enthusiasts',
        features: [
            '100 try-ons per month',
            'Custom quality',
            'Custom ratio',
            'Advanced AI suggestions',
        ],
        cta: 'Go Pro',
    },
    {
        id: 'business',
        name: 'Business',
        price: 39,
        credits: 500,
        period: '/month',
        tagline: 'For professionals & teams',
        features: [
            '500 try-ons per month',
            'Commercial use rights',
            'Team sharing',
            'Analytics dashboard',
        ],
        cta: 'Contact Sales',
    },
];

export default function PricingPage() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <div className="min-h-screen bg-[#FAF9F7]">
            {/* Header */}
            <header className="bg-white/95 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/icon.png" alt="Tinty" className="w-10 h-10 rounded-xl" />
                            <span className="text-xl font-display font-bold text-[var(--color-charcoal)]">
                                Tinty
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-sm text-[var(--color-darkmuted)] hover:text-[var(--color-charcoal)]">
                                Home
                            </Link>
                            <Link href="#download" className="px-4 py-2 bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white rounded-full font-semibold text-sm">
                                Download App
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero - Matching reference styling */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)] mb-3">
                        Choose Your <span className="italic text-[var(--color-accent-purple)]">Style Journey</span>
                    </h1>
                    <p className="text-lg text-[var(--color-darkmuted)] max-w-xl mx-auto mb-8">
                        Start free and upgrade as you discover your perfect style. No hidden fees, cancel anytime.
                    </p>

                    {/* Billing Toggle - Matching reference */}
                    <div className="inline-flex items-center bg-[#E8E6E3] rounded-full p-1">
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${billingPeriod === 'monthly'
                                ? 'bg-white text-[var(--color-charcoal)] shadow-sm'
                                : 'text-[var(--color-darkmuted)]'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod('yearly')}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${billingPeriod === 'yearly'
                                ? 'bg-white text-[var(--color-charcoal)] shadow-sm'
                                : 'text-[var(--color-darkmuted)]'
                                }`}
                        >
                            Yearly
                            <span className="bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white text-xs px-2 py-0.5 rounded-full">
                                Coming Soon
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Plans Grid - Matching reference styling */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl p-6 shadow-sm ${plan.popular ? 'border-2 border-[var(--color-primary-purple)]' : 'border border-gray-100'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-[var(--color-gold)] text-white text-xs font-bold px-4 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-4 pt-2">
                                <h3 className="text-lg font-display font-medium text-[var(--color-charcoal)] italic">
                                    {plan.name}
                                </h3>
                            </div>

                            <div className="text-center mb-2">
                                <span className="text-4xl font-display font-bold text-[var(--color-charcoal)]">
                                    ${plan.price.toFixed(plan.price % 1 === 0 ? 0 : 2)}
                                </span>
                                <span className="text-[var(--color-muted)] text-sm">{plan.period}</span>
                            </div>

                            <p className="text-center text-xs text-[var(--color-darkmuted)] mb-5">
                                {plan.tagline}
                            </p>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-charcoal)]">
                                        <span className="text-[var(--color-accent-purple)] mt-0.5 text-lg">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#download"
                                className={`block w-full py-3 rounded-xl font-medium text-sm text-center transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] text-white hover:shadow-lg'
                                    : 'bg-[var(--color-charcoal)] text-white hover:bg-black'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>



            {/* FAQ */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
                <h2 className="text-2xl font-display font-bold text-[var(--color-charcoal)] text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {[
                        {
                            q: 'Can I switch plans anytime?',
                            a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                        },
                        {
                            q: 'Do unused credits roll over?',
                            a: 'Credits reset monthly on your billing date. We recommend choosing a plan that fits your typical usage.',
                        },
                        {
                            q: 'Is yearly billing available?',
                            a: 'Yearly billing with 20% savings is coming soon! Sign up now and we\'ll notify you when it\'s available.',
                        },
                        {
                            q: 'Is there a free trial?',
                            a: 'Yes! Our Free plan gives you 3 try-ons per month to test the service. No credit card required.',
                        },
                    ].map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
                            <h4 className="font-semibold text-[var(--color-charcoal)] mb-2">{faq.q}</h4>
                            <p className="text-sm text-[var(--color-darkmuted)]">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
                <div className="bg-gradient-to-r from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] rounded-3xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-white/80 mb-6">Try Tinty free with 3 try-ons. No credit card required.</p>
                    <Link
                        href="#download"
                        className="inline-block px-8 py-3 bg-white text-[var(--color-primary-purple)] rounded-xl font-semibold hover:shadow-xl transition-all"
                    >
                        Download the App
                    </Link>
                </div>
            </div>
        </div>
    );
}
