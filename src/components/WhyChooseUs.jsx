import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Award, Zap, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    id: '01',
    icon: Factory,
    title: 'Direct Manufacturer Quality',
    desc: 'ISO 9001:2015 certified in-house production ensuring factory-direct pricing, strict QC, and custom sizes.',
    color: 'from-blue-600 to-indigo-600',
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: '02',
    icon: Award,
    title: '15+ Years Display Expertise',
    desc: 'Over 1,000+ successful LED video wall installations delivered across retail, corporate, and government sectors.',
    color: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    id: '03',
    icon: Zap,
    title: 'Ultra-Bright & High Refresh',
    desc: 'Energy-efficient LED modules with 3840Hz+ refresh rates, seamless splicing, and 100,000+ operating hours.',
    color: 'from-purple-600 to-indigo-600',
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    id: '04',
    icon: ShieldCheck,
    title: 'Pan-India 24/7 AMC Support',
    desc: 'Rapid site response, dedicated certified engineers, and ready spare parts inventory for maximum uptime.',
    color: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#f8fafc] text-gray-900 relative overflow-hidden">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-blue-600/60" />
            <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] sm:text-xs">
              WHY CHOOSE VEERAAM TECH
            </span>
            <span className="w-5 h-px bg-blue-600/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-3xl font-heading font-black text-gray-900 leading-tight mb-2">
            Why Industry Leaders{' '}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Trust Our Displays
            </span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Engineered for high performance, maximum durability, and seamless visual impact for your business.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & ID Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.accent} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-2xl font-black font-heading text-gray-200 group-hover:text-blue-200 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold font-heading text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Accent Bottom Line */}
                <div className={`h-1 w-8 bg-gradient-to-r ${item.color} rounded-full mt-5 group-hover:w-full transition-all duration-300`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
