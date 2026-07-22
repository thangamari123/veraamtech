import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/veraamtech-logo.webp';

const loadingSteps = [
  'Initializing LED Display Systems...',
  'Loading Fine Pixel Technology...',
  'Optimizing Visual Performance...',
  'Welcome to VEERAAM TECH',
];

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400); // smooth fade out
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle status text
    const textInterval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % loadingSteps.length);
    }, 600);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#04091a] flex flex-col items-center justify-center p-4 overflow-hidden select-none"
        >
          {/* Ambient Background Glow Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

          {/* Center Brand Block */}
          <div className="relative z-10 text-center max-w-sm w-full flex flex-col items-center">
            
            {/* Logo Container with Glowing Ring */}
            <div className="relative mb-6">
              {/* Outer Pulsing Cyan Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-500 opacity-30 blur-md animate-pulse" />
              
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#08152e] border border-cyan-400/30 flex items-center justify-center p-3 shadow-2xl">
                <img src={logo} alt="VEERAAM TECH" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="text-2xl sm:text-3xl font-heading font-black tracking-tight leading-none mb-1">
              <span className="bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                VEERAAM
              </span>{' '}
              <span className="bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                TECH
              </span>
            </h1>

            <p className="text-[10px] sm:text-xs tracking-[0.25em] text-cyan-400/80 font-bold uppercase mb-8">
              LED Video Wall Manufacturer
            </p>

            {/* Smooth Loading Progress Bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4 relative p-0.5 border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Progress Percentage & Status Text */}
            <div className="w-full flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="text-[11px] text-gray-400 font-sans tracking-wide">
                {loadingSteps[stepIndex]}
              </span>
              <span className="font-bold text-cyan-400 ml-2">{progress}%</span>
            </div>

          </div>

          {/* Bottom Corporate Badge */}
          <div className="absolute bottom-8 text-center text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
            ISO 9001:2015 Certified Manufacturer
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
