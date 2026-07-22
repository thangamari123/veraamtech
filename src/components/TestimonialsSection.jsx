import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Shield, Award, Headphones } from 'lucide-react';

/* Multi-color conic gradients for animated running border lines */
const borderGradients = [
  'bg-[conic-gradient(from_0deg,#00f2fe,#3b82f6,#a855f7,#00f2fe)]',
  'bg-[conic-gradient(from_0deg,#a855f7,#ec4899,#06b6d4,#a855f7)]',
  'bg-[conic-gradient(from_0deg,#10b981,#06b6d4,#3b82f6,#10b981)]',
  'bg-[conic-gradient(from_0deg,#f59e0b,#ef4444,#a855f7,#f59e0b)]',
  'bg-[conic-gradient(from_0deg,#3b82f6,#00f2fe,#10b981,#3b82f6)]',
  'bg-[conic-gradient(from_0deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4)]',
];

const quoteColors = [
  'text-cyan-400',
  'text-pink-400',
  'text-emerald-400',
  'text-amber-400',
  'text-blue-400',
  'text-purple-400',
];

/* Triple the array for smooth seamless infinite scroll */
const allCards = [...testimonials, ...testimonials, ...testimonials];

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

const TestimonialCard = ({ t, index }) => {
  const gradientClass = borderGradients[index % borderGradients.length];
  const quoteColor = quoteColors[index % quoteColors.length];

  return (
    <div className="flex-shrink-0 w-[270px] sm:w-[350px] md:w-[380px] mx-2.5 sm:mx-3.5">
      {/* Outer Card with Animated Multi-Color Border Line Loop */}
      <div className="relative p-[1.5px] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-xl">
        
        {/* Continuous Spinning Multi-Color Gradient Line Loop */}
        <div className={`absolute -inset-[150%] animate-[spin_5s_linear_infinite] ${gradientClass} opacity-85 group-hover:opacity-100 transition-opacity pointer-events-none`} />

        {/* Inner Card Body */}
        <div className="relative bg-[#050e1d] rounded-[15px] sm:rounded-[23px] p-5 sm:p-7 text-white h-full flex flex-col justify-between z-10">
          
          {/* Top Row: Quote Icon on Left + Star Rating on Right */}
          <div className="flex items-center justify-between mb-4">
            <Quote className={`w-8 h-8 sm:w-10 sm:h-10 ${quoteColor} rotate-180 fill-current opacity-90`} />
            <StarRating rating={t.rating} />
          </div>

          {/* Review Text */}
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
            "{t.text}"
          </p>

          {/* Bottom Author Row */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-white/20 flex-shrink-0"
              />
              <div className="min-w-0">
                <h4 className="font-bold text-white text-xs sm:text-sm font-heading leading-tight truncate">
                  {t.name}
                </h4>
                <p className="text-[10px] sm:text-xs text-cyan-400/80 font-medium truncate mt-0.5">
                  {t.company}
                </p>
              </div>
            </div>

            {/* Verified Badge */}
            <span className="text-[9px] sm:text-[10px] font-bold text-green-400 bg-green-950/60 border border-green-500/30 rounded-full px-2 py-0.5 flex-shrink-0 flex items-center gap-1">
              ✓ Verified
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const speed = 0.6; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = track.scrollWidth / 3;

    const animate = () => {
      if (!isPaused) {
        posRef.current += speed;
        if (posRef.current >= singleSetWidth) {
          posRef.current -= singleSetWidth;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  const scrollLeft = () => {
    posRef.current = Math.max(0, posRef.current - 350);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      const singleSetWidth = trackRef.current.scrollWidth / 3;
      posRef.current = (posRef.current + 350) % singleSetWidth;
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-[#030914] text-white overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 mb-8 md:mb-12"
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
            <span className="text-gray-400 text-[10px] sm:text-xs">from 500+ clients</span>
          </div>
        </motion.div>

        {/* ── Carousel Track with Side Arrows ── */}
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-12">
          
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            aria-label="Previous Testimonials"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/15 hover:border-cyan-400 text-white items-center justify-center transition-all z-20 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            aria-label="Next Testimonials"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/15 hover:border-cyan-400 text-white items-center justify-center transition-all z-20 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#030914] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#030914] to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            className="overflow-hidden py-3"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{ width: 'max-content' }}
            >
              {allCards.map((t, i) => (
                <TestimonialCard key={i} t={t} index={i} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
