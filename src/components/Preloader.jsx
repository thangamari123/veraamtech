import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/veraamtech-logo.webp';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show logo preloader briefly then fade out smoothly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#04091a] flex items-center justify-center p-4 overflow-hidden select-none"
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />

          {/* Center Logo Only with Pulse & Glow Effect */}
          <div className="relative">
            {/* Glowing Ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-500 opacity-40 blur-lg animate-pulse" />
            
            {/* Logo Card Container */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#08152e] border border-cyan-400/30 flex items-center justify-center p-4 shadow-2xl">
              <img 
                src={logo} 
                alt="VEERAAM TECH Logo" 
                className="w-full h-full object-contain animate-pulse" 
              />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
