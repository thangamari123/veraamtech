import React from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 min-h-screen bg-[#f8fafc]">
      <Helmet>
        <title>Our Services &amp; Solutions | VEERAAM TECH</title>
        <meta name="description" content="Explore VEERAAM TECH's comprehensive range of LED Video Walls, Digital Signage, AMC Maintenance, and Custom Installation services." />
      </Helmet>

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#04091a] via-[#08152e] to-[#04091a] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Comprehensive Solutions
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading leading-tight mb-3">
            Our LED &amp; Display Services
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            End-to-end display engineering covering design, manufacturing, precision installation, and 24/7 maintenance.
          </p>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <Link 
                    to={`/services/${service.slug}`} 
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 pt-2 border-t border-gray-100 group-hover:translate-x-0.5 transition-transform"
                  >
                    View Service Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
