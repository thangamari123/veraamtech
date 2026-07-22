import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  return (
    <section className="py-10 sm:py-12 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-[11px] sm:text-xs font-bold text-accent uppercase tracking-wider mb-1.5">Our Solutions</h2>
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-heading font-black text-gray-900 leading-tight">Comprehensive Display Services</h3>
          <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed">
            We provide end-to-end services covering every aspect of your visual communication needs.
          </p>
        </div>

        {/* ===== MOBILE LAYOUT: compact 2-col grid ===== */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {services.slice(0, 8).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex flex-col gap-1.5"
              >
                <div className="w-8 h-8 bg-blue-50 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-gray-900 font-heading leading-snug">
                  {service.title}
                </h4>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-primary mt-auto"
                >
                  Learn More <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.slice(0, 8).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="w-10 h-10 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-gray-900 font-heading mb-1.5 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-grow">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform"
                >
                  Explore Solution <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom View All Solutions Button */}
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-blue-500 text-gray-800 hover:text-blue-600 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all"
          >
            View All Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
