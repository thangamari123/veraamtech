import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '../data/industries';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayedIndustries = industries.slice(0, 6);
  const activeIndustry = displayedIndustries[activeIndex];
  const ActiveIcon = activeIndustry.icon;

  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-[#f8fafc] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-50 blur-[100px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-2">
              <span className="block w-5 h-px bg-blue-600/60" />
              Industries We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-heading font-black text-gray-900 leading-tight">
              Empowering{' '}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Every Sector
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-xs sm:text-sm leading-relaxed">
              Tailored visual solutions meeting the unique demands of diverse industries across India.
            </p>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full px-4 py-2 transition-all whitespace-nowrap self-start md:self-auto"
          >
            View All Industries
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* ===== DESKTOP LAYOUT: side panel + image ===== */}
        <div className="hidden lg:flex gap-8 items-stretch min-h-[520px]">
          {/* Left: Tab list */}
          <div className="w-72 xl:w-80 flex flex-col gap-2 flex-shrink-0">
            {displayedIndustries.map((industry, index) => {
              const Icon = industry.icon;
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={industry.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 group ${
                    isActive
                      ? 'bg-[#0A3D91] shadow-lg shadow-blue-900/20'
                      : 'bg-white hover:bg-gray-50 border border-gray-100 hover:border-blue-100'
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-white/20' : 'bg-blue-50 group-hover:bg-blue-100'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-700'}`}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Name */}
                  <span
                    className={`font-bold text-sm leading-tight ${
                      isActive ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {industry.name}
                  </span>

                  {/* Active arrow */}
                  {isActive && (
                    <ArrowRight className="w-4 h-4 text-white/60 ml-auto flex-shrink-0" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Active industry panel */}
          <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeIndustry.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/60 to-gray-800/20" />

                {/* Content */}
                <div className="absolute inset-0 p-8 xl:p-10 flex flex-col justify-end">
                  {/* Icon badge */}
                  <div className="mb-4">
                    <div className="inline-flex w-14 h-14 rounded-2xl bg-blue-600/80 backdrop-blur-sm items-center justify-center border border-white/20">
                      <ActiveIcon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-3xl xl:text-4xl font-heading font-black text-white mb-3">
                    {activeIndustry.name}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-2 max-w-lg">
                    {activeIndustry.description}
                  </p>

                  {/* Solution hint */}
                  <div className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 max-w-md">
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">Our Solution</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{activeIndustry.solutions}</p>
                  </div>

                  <Link
                    to={`/industries/${activeIndustry.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors px-5 py-3 rounded-full self-start"
                  >
                    Explore Solutions
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===== MOBILE LAYOUT: compact 2-col grid ===== */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {displayedIndustries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-md"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-active:scale-105"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-900/60 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-3 flex flex-col justify-end">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/80 backdrop-blur-sm flex items-center justify-center mb-2 border border-white/20">
                    <Icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading leading-tight mb-1">
                    {industry.name}
                  </h4>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-cyan-400"
                  >
                    Explore <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center lg:hidden">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full px-6 py-3 transition-all"
          >
            View All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
