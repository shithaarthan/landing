'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const demoImage = {
    before: '/demo/after.jpeg',
    after: '/demo/before.png'
};

export default function InteractiveTryOnDemo() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    return (
        <section
            ref={sectionRef}
            className="section bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 relative overflow-hidden"
            id="demo"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        See It In <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Action</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Experience the power of AI-driven fashion visualization. Drag the slider to compare before and after.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Interactive Comparison Slider */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div
                            ref={containerRef}
                            className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none bg-slate-800"
                            onMouseMove={handleMouseMove}
                            onMouseDown={() => setIsDragging(true)}
                            onMouseUp={() => setIsDragging(false)}
                            onMouseLeave={() => setIsDragging(false)}
                            onTouchMove={handleTouchMove}
                        >
                            <div className="absolute inset-0 bg-slate-900">
                                <Image
                                    src={demoImage.before}
                                    alt="Before Try-on"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* After Image (Clipped) */}
                            <div
                                className="absolute inset-0 bg-slate-900"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <Image
                                    src={demoImage.after}
                                    alt="After Try-on"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-purple-500">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </div>

                            {/* Labels */}
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                                Original
                            </div>
                            <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                                AI Fitted
                            </div>
                        </div>

                        {/* Instruction */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-center text-white/60 text-sm mt-6 font-medium"
                        >
                            <span className="hidden md:inline">👆 Drag the slider to compare</span>
                            <span className="md:hidden">👆 Swipe the slider to compare</span>
                        </motion.p>
                    </motion.div>

                    {/* Features & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Creative Benefits Grid */}
                        <div>
                            <h3 className="text-3xl font-display font-bold text-white mb-4">See the Transformation</h3>
                            <p className="text-white/80 mb-8 text-lg">
                                Stop guessing how clothes will fit. Our AI analyzes the garment and perfectly drapes it over your unique photo.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: '✨', label: 'Photorealistic', desc: 'Studio-quality results' },
                                { icon: '🎨', label: 'Any Style', desc: 'All clothing types' },
                                { icon: '💼', label: 'Portfolio Ready', desc: 'Professional output' },
                                { icon: '🚀', label: 'Instant Results', desc: 'No waiting' }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={benefit.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
                                >
                                    <div className="text-3xl mb-2">{benefit.icon}</div>
                                    <div className="text-sm font-semibold text-white">{benefit.label}</div>
                                    <div className="text-xs text-white/70">{benefit.desc}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="pt-6"
                        >
                            <a
                                href="#download"
                                className="block w-full text-center py-4 px-8 bg-white text-[var(--color-charcoal)] rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                            >
                                Download the App
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
