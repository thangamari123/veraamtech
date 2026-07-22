import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react';

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-slate-50">
        <h1 className="text-2xl font-bold mb-4 font-heading text-gray-900">Service Not Found</h1>
        <Link to="/services" className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-20 md:pt-24 pb-16 min-h-screen bg-[#f8fafc]">
      <Helmet>
        <title>{service.title} | VEERAAM TECH</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#04091a] via-[#08152e] to-[#04091a] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-bold mb-4 hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" /> All Services
          </Link>

          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading leading-tight">{service.title}</h1>
          </div>
          
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Details Content Grid */}
      <div className="container mx-auto px-4 md:px-6 py-10 sm:py-14 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
            
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={service.image} alt={service.title} className="w-full h-60 sm:h-80 object-cover" />
            </div>
            
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-gray-900 mb-2">Overview</h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.overview}</p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold font-heading text-gray-900 mb-3">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-slate-50 p-2.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold font-heading text-gray-900 mb-3">Target Applications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100">
                    <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar CTA (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-[#050e1a] text-white p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
              <h3 className="text-base font-bold font-heading text-white">Interested in this solution?</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Connect with our LED engineers for technical advice, site survey, or a customized price quote.
              </p>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Request Custom Quote</span>
                <Send className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
