import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/veraamtech-logo.webp';
import { Sparkles, Plus } from 'lucide-react';

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
          setTimeout(() => setIsLoading(false), 500); // smooth fade out
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
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#04091a] flex flex-col items-center justify-center p-4 overflow-hidden select-none"
        >
          {/* Ambient Background Glow Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

          {/* Center Brand & Logo Effect Container */}
          <div className="relative z-10 text-center max-w-sm w-full flex flex-col items-center">
            
            {/* LOGO PLUS EFFECT CONTAINER */}
            <div className="relative mb-8 flex items-center justify-center">
              
              {/* Outer Continuous Rotating Conic Gradient Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-[conic-gradient(from_0deg,#00f2fe,#0072ff,#9b51e0,#00f2fe)] animate-[spin_5s_linear_infinite] opacity-60 blur-sm" />

              {/* Pulsing Cyan Radial Light Aura */}
              <div className="absolute -inset-2 rounded-2xl bg-cyan-400/30 animate-pulse blur-md" />

              {/* Orbiting Sparkle Plus Accent Icons */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 pointer-events-none"
              >
                <Plus className="absolute top-0 left-2 w-4 h-4 text-cyan-400 animate-pulse" />
                <Plus className="absolute bottom-0 right-2 w-4 h-4 text-blue-400 animate-pulse" />
                <Sparkles className="absolute top-2 right-0 w-3.5 h-3.5 text-sky-300" />
                <Sparkles className="absolute bottom-2 left-0 w-3.5 h-3.5 text-cyan-300" />
              </motion.div>

              {/* Main Logo Card Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#071328] border border-cyan-400/40 flex items-center justify-center p-3.5 shadow-[0_0_30px_rgba(0,212,255,0.25)] overflow-hidden">
                
                {/* Logo Image */}
                <img src={logo} alt="VEERAAM TECH" className="w-full h-full object-contain relative z-10" />

                {/* Shimmer Light Reflection Sweep Line */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 z-20 pointer-events-none"
                />
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

            {/* Smooth Progress Bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4 relative p-0.5 border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 rounded-full shadow-[0_0_10px_#00d4ff]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Progress Percentage & Status Text */}
            <div className="w-full flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="text-[11px] text-gray-400 font-sans tracking-wide truncate pr-2">
                {loadingSteps[stepIndex]}
              </span>
              <span className="font-bold text-cyan-400 flex-shrink-0">{progress}%</span>
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
