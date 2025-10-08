'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Fashion Blogger',
    avatar: 'SC',
    content: 'Finally know what looks good before buying! Tinty has saved me hundreds on returns and helped me discover my perfect style.',
    rating: 5,
    platform: 'Instagram',
  },
  {
    name: 'Marcus Johnson',
    role: 'Busy Professional',
    avatar: 'MJ',
    content: 'As someone who hates shopping, Tinty is a game-changer. I can try outfits in seconds and know exactly what works for my body type.',
    rating: 5,
    platform: 'LinkedIn',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Style Enthusiast',
    avatar: 'ER',
    content: 'The AI suggestions are incredibly accurate. It\'s like having a personal stylist who knows my wardrobe better than I do!',
    rating: 5,
    platform: 'TikTok',
  },
  {
    name: 'David Kim',
    role: 'Online Shopper',
    avatar: 'DK',
    content: 'No more guessing games with online shopping. Tinty shows me exactly how clothes will look - it\'s revolutionary.',
    rating: 5,
    platform: 'Twitter',
  },
  {
    name: 'Amelia Watson',
    role: 'Wardrobe Consultant',
    avatar: 'AW',
    content: 'I recommend Tinty to all my clients. The virtual try-on technology is incredibly realistic and the style suggestions are spot-on.',
    rating: 5,
    platform: 'Instagram',
  },
  {
    name: 'James Liu',
    role: 'Tech Professional',
    avatar: 'JL',
    content: 'The privacy features give me peace of mind. My photos stay secure while I get amazing style recommendations.',
    rating: 5,
    platform: 'LinkedIn',
  },
];

const stats = [
  { number: '10k+', label: 'Happy Users' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '50k+', label: 'Outfits Tried' },
  { number: '95%', label: 'Accuracy Rate' },
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
      const currentRef = ref.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="testimonials" ref={ref} className="section bg-gradient-to-br from-[var(--color-bg)] to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-charcoal)] mb-4">
            Loved by{' '}
            <span className="gradient-text">Fashion Lovers</span>
            {' '}Everywhere
          </h2>
          <p className="text-lg text-[var(--color-charcoal)] opacity-70 max-w-2xl mx-auto">
            Join thousands of users who have transformed their shopping experience with Tinty
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-[var(--color-primary-purple)] mb-2">
                {stat.number}
              </div>
              <div className="text-[var(--color-charcoal)] opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
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
                  <div className="font-semibold text-[var(--color-charcoal)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--color-charcoal)] opacity-70">
                    {testimonial.role}
                  </div>
                </div>
                <div className="text-xs text-[var(--color-primary-purple)] font-semibold">
                  {testimonial.platform}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-[var(--color-charcoal)] opacity-70 mb-6">
            Follow us on social media for more success stories
          </p>
          <div className="flex justify-center gap-4">
            {[
              { name: 'Instagram', icon: '📷', color: 'hover:text-pink-500' },
              { name: 'TikTok', icon: '🎵', color: 'hover:text-black' },
              { name: 'Twitter', icon: '🐦', color: 'hover:text-blue-400' },
              { name: 'LinkedIn', icon: '💼', color: 'hover:text-blue-600' },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl transition-colors ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
