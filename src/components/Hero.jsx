import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, Clock, Users } from 'lucide-react';
import SpecularButton from './SpecularButton';
import DotGrid from './DotGrid';
import GradientText from './GradientText';

const stats = [
  { value: '15+',   label: 'Years Experience',   icon: Award },
  { value: '1000+', label: 'Installations',       icon: Shield },
  { value: '500+',  label: 'Happy Clients',       icon: Users },
  { value: '24/7',  label: 'Technical Support',   icon: Clock },
];

const tags = ['LED Video Walls', 'Digital Signage', 'Fine Pixel Pitch', 'Outdoor Displays'];

const cyclingWords = [
  'LED Video Walls',
  'Digital Signage',
  'Outdoor Displays',
  'Fine Pixel Pitch',
  'Control Rooms',
  'Commercial Screens',
];

const Hero = () => {
  const navigate = useNavigate();
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % cyclingWords.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#04091a]">

      {/* ── DotGrid interactive background ── */}
      <div className="absolute inset-0 z-[1] opacity-30 pointer-events-auto">
        <DotGrid
          dotSize={4}
          gap={22}
          baseColor="#1a3a6b"
          activeColor="#00d4ff"
          proximity={120}
          shockRadius={260}
          shockStrength={4}
          resistance={800}
          returnDuration={1.5}
          speedTrigger={80}
        />
      </div>



      {/* ── Ambient glow accents ── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none" />



      {/* ═══════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-center pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28 md:pb-32">
        <div className="container mx-auto px-5 md:px-8 max-w-7xl w-full">

          {/* Top eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm text-cyan-400 text-xs font-bold uppercase tracking-[0.25em]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              India's #1 LED Display Solutions Provider
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center font-heading font-black text-white leading-[1.08] tracking-tight mb-6
                       text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]"
          >
            Premium{' '}
            <span className="relative inline-block">
              <GradientText
                colors={["#00f2fe", "#4facfe", "#00c6ff", "#0072ff", "#9b51e0", "#f093fb", "#00f2fe"]}
                animationSpeed={3}
                showBorder={false}
                className="inline-block"
              >
                <span
                  style={{
                    display: 'inline-block',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(-12px)',
                  }}
                >
                  {cyclingWords[wordIndex]}
                </span>
              </GradientText>
              {/* underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full origin-left"
              />
            </span>
            <br className="hidden sm:block" />
            {' '}& Display Solutions
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-center text-gray-300 max-w-2xl mx-auto mb-4
                       text-sm sm:text-base md:text-lg leading-relaxed"
          >
            End-to-end visual communication solutions — from design and supply
            to precision installation and 24/7 support across India.
          </motion.p>

          {/* Service tags (Compact on mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[11px] md:text-xs font-semibold text-gray-300 border border-white/15 bg-white/5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons (Compact & Small on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4"
          >
            <div className="sm:hidden">
              <SpecularButton
                size="sm"
                radius={20}
                tint="#0A3D91"
                tintOpacity={0.85}
                blur={6}
                textColor="#ffffff"
                lineColor="#00B4D8"
                baseColor="#031b45"
                intensity={1.5}
                thickness={1}
                speed={0.4}
                autoAnimate={true}
                onClick={() => navigate('/contact')}
              >
                <span className="text-[11px] font-bold px-1 py-0.5">Get Free Consultation</span>
              </SpecularButton>
            </div>

            <div className="hidden sm:block">
              <SpecularButton
                size="lg"
                radius={28}
                tint="#0A3D91"
                tintOpacity={0.85}
                blur={8}
                textColor="#ffffff"
                lineColor="#00B4D8"
                baseColor="#031b45"
                intensity={1.5}
                shineSize={12}
                shineFade={50}
                thickness={1.5}
                speed={0.4}
                autoAnimate={true}
                onClick={() => navigate('/contact')}
              >
                Get Free Consultation
              </SpecularButton>
            </div>

            <div className="sm:hidden">
              <SpecularButton
                size="sm"
                radius={20}
                tint="#ffffff"
                tintOpacity={0.05}
                blur={8}
                textColor="#ffffff"
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={1}
                thickness={1}
                speed={0.35}
                onClick={() => navigate('/services')}
              >
                <span className="text-[11px] font-bold px-1 py-0.5">Explore Solutions</span>
              </SpecularButton>
            </div>

            <div className="hidden sm:block">
              <SpecularButton
                size="lg"
                radius={28}
                tint="#ffffff"
                tintOpacity={0.05}
                blur={12}
                textColor="#ffffff"
                lineColor="#ffffff"
                baseColor="#525252"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                onClick={() => navigate('/services')}
              >
                Explore Solutions
              </SpecularButton>
            </div>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center text-gray-500 text-xs mt-6 tracking-wide"
          >
            Trusted by 500+ businesses across Chennai, Bangalore &amp; pan-India
          </motion.p>

        </div>
      </div>

      {/* ═══════════════════════════════════════
          STATS BAR — Pinned to bottom in a SINGLE LINE on Mobile
      ═══════════════════════════════════════ */}
      <div
        ref={ref}
        className="absolute bottom-0 left-0 right-0 z-20
                   bg-[#04091a]/95 backdrop-blur-lg
                   border-t border-white/[0.08]
                   shadow-[0_-12px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          <div className="grid grid-cols-4 gap-0">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className={`
                    flex flex-col items-center justify-center text-center
                    py-2 md:py-4 px-1
                    ${i < 3 ? 'border-r border-white/[0.08]' : ''}
                  `}
                >
                  {/* Icon */}
                  <div className="w-5 h-5 md:w-7 md:h-7 mb-1 rounded-md bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-cyan-400" strokeWidth={2} />
                  </div>
                  {/* Number */}
                  <span className="text-xs sm:text-lg md:text-2xl font-heading font-black text-white tracking-tight leading-none">
                    {stat.value.replace('+', '')}
                    {stat.value.includes('+') && (
                      <span className="text-cyan-400">+</span>
                    )}
                  </span>
                  {/* Label */}
                  <p className="text-[7px] sm:text-[9px] md:text-[10px] text-gray-400 uppercase tracking-tighter sm:tracking-widest font-bold mt-0.5 leading-tight truncate max-w-full">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
