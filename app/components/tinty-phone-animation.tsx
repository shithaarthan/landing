import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TintyPhoneAnimation = () => {
  const [stage, setStage] = useState(0);
  
  // Animation stages: 0-hanger, 1-woman appears, 2-particles flow, 3-woman colored, 4-complete
  useEffect(() => {
    const timeline = [
      { stage: 0, duration: 3000 }, // Hanger swaying - LONGER
      { stage: 1, duration: 2500 }, // Woman appears
      { stage: 2, duration: 3500 }, // Particles flow
      { stage: 3, duration: 2500 }, // Woman colors
      { stage: 4, duration: 2500 }, // Complete scene
    ];
    
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout | undefined;
    
    const runTimeline = () => {
      setStage(timeline[currentIndex].stage);
      console.log(`Stage ${timeline[currentIndex].stage} starting`); // DEBUG
      
      timeoutId = setTimeout(() => {
        currentIndex++;
        if (currentIndex >= timeline.length) {
          currentIndex = 0; // Loop
        }
        runTimeline();
      }, timeline[currentIndex].duration);
    };
    
    runTimeline();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Generate particle positions
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
  }));


  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Soft ambient light effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/40 to-transparent opacity-60" />
      
      {/* Hanger with cloth */}
      <motion.div
        className="absolute top-[15%] left-1/2 z-20"
        initial={{ x: '-50%', y: 0, opacity: 1 }}
        animate={{
          x: '-50%',
          y: stage >= 4 ? -150 : 0,
          opacity: stage >= 4 ? 0 : 1,
          rotate: stage < 4 ? [0, -3, 3, -2, 2, 0] : 0,
        }}
        transition={{
          y: { duration: 1, ease: 'easeOut' },
          opacity: { duration: 0.8 },
          rotate: {
            duration: 3,
            repeat: stage < 4 ? Infinity : 0,
            ease: 'easeInOut',
          },
        }}
      >
        {/* Hanger hook */}
        <div className="relative">
          <svg width="60" height="40" viewBox="0 0 60 40" className="mx-auto">
            <path
              d="M30 5 Q30 0 35 0 Q40 0 40 5 L40 10"
              stroke="#C4B5FD"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <line
              x1="15"
              y1="10"
              x2="45"
              y2="10"
              stroke="#C4B5FD"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Cloth */}
          <motion.div
            className="relative w-32 h-48 mx-auto mt-2"
            animate={{
              scale: stage >= 2 ? 0.5 : 1,
              opacity: stage >= 2 ? 0 : 1,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <svg width="128" height="192" viewBox="0 0 128 192" className="w-full h-full">
              <defs>
                <linearGradient id="clothGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E0BBE4" />
                  <stop offset="50%" stopColor="#FEC8D8" />
                  <stop offset="100%" stopColor="#FFC7A6" />
                </linearGradient>
                <filter id="clothGlow">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
              </defs>
              <motion.path
                d="M20 10 Q64 0 108 10 L100 180 Q64 192 28 180 Z"
                fill="url(#clothGradient)"
                filter="url(#clothGlow)"
                animate={{
                  d: [
                    'M20 10 Q64 0 108 10 L100 180 Q64 192 28 180 Z',
                    'M20 10 Q64 5 108 10 L100 180 Q64 188 28 180 Z',
                    'M20 10 Q64 0 108 10 L100 180 Q64 192 28 180 Z',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Flowing particles */}
      <AnimatePresence>
        {stage >= 2 && stage < 4 && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(135deg, #E0BBE4, #FFC7A6)`,
              boxShadow: '0 0 8px rgba(224, 187, 228, 0.6)',
              left: '50%',
              top: '30%',
            }}
            initial={{ 
              x: Math.random() * 60 - 30, 
              y: 0, 
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: [
                Math.random() * 60 - 30,
                Math.random() * 40 - 20,
                Math.random() * 20 - 10,
                0,
              ],
              y: [0, 100, 200, 250],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      {/* Woman silhouette */}
      <motion.div
        className="absolute bottom-[15%] left-1/2 z-10"
        initial={{ x: '-50%', opacity: 0, scale: 0.8 }}
        animate={{
          x: '-50%',
          opacity: stage >= 1 ? 1 : 0,
          scale: stage >= 1 ? 1 : 0.8,
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <svg width="140" height="220" viewBox="0 0 140 220" className="w-full h-full">
          <defs>
            <linearGradient id="womanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <motion.stop
                offset="0%"
                animate={{
                  stopColor: stage >= 3 ? '#C084FC' : '#D1D5DB',
                }}
                transition={{ duration: 1.5 }}
              />
              <motion.stop
                offset="100%"
                animate={{
                  stopColor: stage >= 3 ? '#F472B6' : '#9CA3AF',
                }}
                transition={{ duration: 1.5 }}
              />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>
          
          {/* Head */}
          <ellipse
            cx="70"
            cy="30"
            rx="18"
            ry="22"
            fill="url(#womanGradient)"
          />
          
          {/* Body */}
          <path
            d="M70 52 L70 120 M70 70 L50 100 M70 70 L90 100 M70 120 L55 180 M70 120 L85 180"
            stroke="url(#womanGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Hair */}
          <path
            d="M52 30 Q52 15 70 10 Q88 15 88 30"
            stroke="url(#womanGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Dress outline */}
          <motion.path
            d="M50 100 Q70 110 90 100 L85 180 Q70 185 55 180 Z"
            fill="url(#womanGradient)"
            fillOpacity="0.3"
            stroke="url(#womanGradient)"
            strokeWidth="2"
            animate={{
              fillOpacity: stage >= 3 ? 0.5 : 0.3,
            }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Glow effect when colored */}
          {stage >= 3 && (
            <motion.circle
              cx="70"
              cy="110"
              r="80"
              fill="url(#womanGradient)"
              opacity="0"
              filter="url(#softGlow)"
              animate={{
                opacity: [0, 0.2, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </svg>
      </motion.div>

      {/* Completion sparkles */}
      <AnimatePresence>
        {stage === 4 && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 60,
                  y: Math.sin((i * Math.PI * 2) / 8) * 60,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeOut',
                }}
                exit={{ opacity: 0 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Subtle text hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: stage === 4 ? 1 : 0,
          y: stage === 4 ? 0 : 20,
        }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-medium text-purple-600 tracking-wide">
          AI-Powered Styling
        </p>
      </motion.div>
    </div>
  );
};

export default TintyPhoneAnimation;
