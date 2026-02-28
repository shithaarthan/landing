'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Fashion Enthusiast',
    avatar: 'SC',
    content: 'This changed how I shop online. I can finally see what actually looks good on me before buying. No more returns!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Marcus Johnson',
    role: 'Online Shopper',
    avatar: 'MJ',
    content: 'As someone who hates shopping, this is perfect. Quick, easy, and I know exactly what I\'m getting.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Style Blogger',
    avatar: 'ER',
    content: 'The AI is incredibly accurate. It\'s like having a personal fitting room on my phone.',
    rating: 5,
    verified: true,
  },
  {
    name: 'David Kim',
    role: 'Tech Professional',
    avatar: 'DK',
    content: 'No more guessing games. I see exactly how clothes will look and it saves me so much time and money.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Amelia Watson',
    role: 'Personal Stylist',
    avatar: 'AW',
    content: 'I recommend this to all my clients. The virtual try-on is so realistic, it\'s game-changing.',
    rating: 5,
    verified: true,
  },
  {
    name: 'James Liu',
    role: 'Privacy Advocate',
    avatar: 'JL',
    content: 'Love that my photos stay private. Great tech, great security, great results.',
    rating: 5,
    verified: true,
  },
];

export default function SceneTestimonials() {
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
    <section ref={ref} className="section bg-gradient-to-br from-[var(--color-bg)] to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)] mb-4">
            Real People.{' '}
            <span className="gradient-text">Real Feedback.</span>
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] opacity-70 max-w-2xl mx-auto">
            Here's what our beta testers are saying
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="w-5 h-5 text-[var(--color-gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-[var(--color-charcoal)] mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary-purple)] to-[var(--color-accent-purple)] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[var(--color-charcoal)]">
                      {testimonial.name}
                    </span>
                    {testimonial.verified && (
                      <svg className="w-4 h-4 text-[var(--color-primary-purple)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="text-sm text-[var(--color-charcoal)] opacity-70">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-[var(--color-primary-purple)]/20">
            <svg className="w-6 h-6 text-[var(--color-primary-purple)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-[var(--color-charcoal)]">All reviews verified by real users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
