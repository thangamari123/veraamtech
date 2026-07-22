import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  MapPin, 
  PenTool, 
  Package, 
  Wrench, 
  CheckCircle2, 
  GraduationCap, 
  Headphones, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const timelineSteps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'Understanding your vision, budget, and technical requirements in detail.',
    color: 'bg-blue-600',
    underline: 'bg-blue-600',
  },
  {
    step: '02',
    icon: MapPin,
    title: 'Site Survey',
    desc: 'Evaluating the environment, analyzing conditions, and technical constraints.',
    color: 'bg-cyan-500',
    underline: 'bg-cyan-500',
  },
  {
    step: '03',
    icon: PenTool,
    title: 'Design & Planning',
    desc: 'Engineering the optimal design, blueprint and structure support plan.',
    color: 'bg-indigo-600',
    underline: 'bg-indigo-600',
  },
  {
    step: '04',
    icon: Package,
    title: 'Supply',
    desc: 'Sourcing premium, rigorously tested LED modules and components.',
    color: 'bg-purple-600',
    underline: 'bg-purple-600',
  },
  {
    step: '05',
    icon: Wrench,
    title: 'Installation',
    desc: 'Precision mounting and seamless setup by certified engineers.',
    color: 'bg-teal-500',
    underline: 'bg-teal-500',
  },
  {
    step: '06',
    icon: CheckCircle2,
    title: 'Testing & QC',
    desc: 'Rigorous calibration for color accuracy, brightness, and seamless playback.',
    color: 'bg-emerald-500',
    underline: 'bg-emerald-500',
  },
  {
    step: '07',
    icon: GraduationCap,
    title: 'Training',
    desc: 'Empowering your team with the knowledge to manage and operate the system.',
    color: 'bg-blue-600',
    underline: 'bg-blue-600',
  },
  {
    step: '08',
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock technical support and comprehensive AMC coverage.',
    color: 'bg-sky-500',
    underline: 'bg-sky-500',
  },
];

const ProcessTimeline = () => {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-[#f4f7fc] text-gray-900 overflow-hidden">
      
      {/* Background Soft Wave Accent */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 via-cyan-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-200/30 via-blue-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

        {/* ═════════════════════════════════════════════════════════
            DESKTOP VIEW (Light Card Grid 4x2)
        ═════════════════════════════════════════════════════════ */}
        <div className="hidden md:block">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-blue-600/50" />
              <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-xs">
                HOW WE WORK
              </span>
              <span className="w-6 h-px bg-blue-600/50" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-black text-gray-900 mb-4">
              Our Proven{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                8-Step Methodology
              </span>
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              A systematic approach ensuring flawless execution from concept to completion — every single time.
            </p>
          </div>

          {/* 8 Cards Flow (Row 1: 01 to 04, Row 2: 05 to 08) */}
          <div className="space-y-12 relative max-w-6xl mx-auto">
            
            {/* ROW 1: Steps 01 - 04 */}
            <div className="grid grid-cols-4 gap-6 relative">
              {timelineSteps.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-blue-900/5 hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    {/* Top Row: Icon + Faded Step Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black font-heading text-gray-200 group-hover:text-blue-200 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Title with Colored Underline */}
                    <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 relative inline-block">
                      {item.title}
                      <span className={`block h-0.5 w-6 ${item.underline} rounded-full mt-1`} />
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* ROW 2: Steps 05 - 08 */}
            <div className="grid grid-cols-4 gap-6 relative">
              {timelineSteps.slice(4, 8).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-blue-900/5 hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    {/* Top Row: Icon + Faded Step Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black font-heading text-gray-200 group-hover:text-blue-200 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Title with Colored Underline */}
                    <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 relative inline-block">
                      {item.title}
                      <span className={`block h-0.5 w-6 ${item.underline} rounded-full mt-1`} />
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Bottom Shield Pill Redirecting to Contact */}
          <div className="mt-14 text-center">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-blue-500 px-6 py-3 rounded-2xl text-xs font-semibold text-gray-700 hover:text-blue-600 transition-all group"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>
                From consultation to 24/7 support —{' '}
                <span className="text-blue-600 font-bold underline underline-offset-2 group-hover:text-blue-700">we handle it all.</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>


        {/* ═════════════════════════════════════════════════════════
            MOBILE VIEW (White Background & Sequential Stagger Animation)
        ═════════════════════════════════════════════════════════ */}
        <div className="block md:hidden">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-px bg-blue-600/50" />
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                HOW WE WORK
              </span>
              <span className="w-4 h-px bg-blue-600/50" />
            </div>
            
            <h2 className="text-2xl font-heading font-black text-gray-900 leading-tight mb-2">
              Our Proven{' '}
              <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                8-Step Methodology
              </span>
            </h2>
            
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs mx-auto">
              A systematic approach ensuring flawless execution from concept to completion — every single time.
            </p>
          </motion.div>

          {/* Sequential One-by-One Animated Card List */}
          <div className="space-y-3.5 relative">
            {timelineSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                  className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-md shadow-blue-900/5 flex items-start gap-3.5 relative overflow-hidden"
                >
                  {/* Left Icon Badge */}
                  <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center flex-shrink-0 shadow-md mt-0.5`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-gray-900 font-heading">
                        {item.title}
                      </h3>
                      <span className="text-xs font-black font-heading text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        {item.step}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Shield Pill for Mobile Redirecting to Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-center"
          >
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 active:border-blue-500 shadow-sm px-4 py-3 rounded-xl text-xs text-gray-700 w-full justify-center group"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="text-[11px]">
                From consultation to 24/7 support —{' '}
                <span className="text-blue-600 font-bold underline underline-offset-2">we handle it all.</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
