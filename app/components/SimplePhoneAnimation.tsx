import React from 'react';

const SimplePhoneAnimation = () => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center">
      {/* Actual Tinty App Icon and Name */}
      <div className="text-center">
        <img
          src="/icon.png"
          alt="Tinty Logo"
          className="w-48 h-48 rounded-xl mx-auto mb-10"
        />

        {/* App name with gradient text style like AI Stylist */}
        <div className="font-bold text-6xl gradient-text">
          Tinty
        </div>
      </div>
    </div>
  );
};

export default SimplePhoneAnimation;
