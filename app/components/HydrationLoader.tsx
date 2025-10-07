'use client';

import { useEffect, useState } from 'react';

export default function HydrationLoader({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Set hydrated state immediately
    setIsHydrated(true);

    // Add a small delay to ensure animations start properly after hydration
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isHydrated) {
    // Before hydration, show nothing (prevents flash of initial states)
    return null;
  }

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-white to-[var(--color-bg)] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[var(--color-accent-purple)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[var(--color-charcoal)] font-display text-lg">Loading Tinty...</p>
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-300 ${showLoader ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
