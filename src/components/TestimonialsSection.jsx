import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const quoteColors = [
  'text-cyan-400',
  'text-pink-400',
  'text-emerald-400',
  'text-amber-400',
  'text-blue-400',
  'text-purple-400',
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval: slide 1 card every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-[#030914] text-white overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-px bg-cyan-400/60" />
            <span className="text-cyan-400 font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs">
              CLIENT SUCCESS STORIES
            </span>
            <span className="w-4 h-px bg-cyan-400/60" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight mb-2">
            What Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partners Say
            </span>
          </h2>
          
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Hear directly from businesses who transformed their spaces with VEERAAM TECH.
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2.5 mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-xs sm:text-sm">5.0</span>
            <span className="text-gray-400 text-[10px] sm:text-xs">from 500+ verified clients</span>
          </div>
        </motion.div>

        {/* ── Card-by-Card Auto Slider Container ── */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center transition-all z-20 shadow-2xl active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-cyan-500/20 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center transition-all z-20 shadow-2xl active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Active Testimonial Card Display with Smooth Fade & Slide */}
          <div className="px-4 sm:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="bg-[#050e1d] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative"
              >
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-5">
                  <Quote className={`w-10 h-10 sm:w-12 sm:h-12 ${quoteColors[currentIndex % quoteColors.length]} rotate-180 fill-current opacity-90`} />
                  <StarRating rating={testimonials[currentIndex].rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-normal italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-cyan-400/50 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base font-heading leading-tight">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-0.5">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <span className="text-xs font-bold text-green-400 bg-green-950/70 border border-green-500/40 rounded-full px-3 py-1 flex items-center gap-1.5">
                    ✓ Verified Client
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
