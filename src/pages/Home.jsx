import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import IndustriesSection from '../components/IndustriesSection';
import ProcessTimeline from '../components/ProcessTimeline';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';
import aboutImg from '../assets/about.webp';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>VEERAAM TECH - India's Trusted LED Video Wall Solutions</title>
        <meta name="description" content="Leading provider of premium LED Video Walls, Digital Signage, and Commercial Display Systems in India." />
      </Helmet>
      
      <Hero />
      
      {/* About Preview */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Card for Image on Left */}
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-[#06101e]">
                <img 
                  src={aboutImg} 
                  alt="About VEERAAM TECH" 
                  className="w-full h-[320px] sm:h-[400px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Badge Overlay on Image Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0a1830]/85 backdrop-blur-md border border-white/20 text-white">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-cyan-400 font-bold">15+ Years Excellence</p>
                  <p className="text-xs sm:text-sm font-semibold mt-0.5 text-gray-200">ISO 9001:2015 Certified LED Manufacturer</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-xs font-bold text-accent uppercase tracking-wider">About VEERAAM TECH</h2>
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-heading font-black text-gray-900 leading-tight">
                Pioneering Display Technology in India
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                With over 15 years of industry excellence, VEERAAM TECH has established itself as the most reliable partner for enterprise-grade LED video walls and digital signage solutions.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                We don't just sell screens; we engineer immersive visual experiences. From meticulous site surveys to precision installation and round-the-clock support, we manage every aspect of your display deployment.
              </p>
              <div className="pt-2">
                <a href="/about" className="inline-block bg-primary text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-full hover:bg-blue-800 transition-colors shadow-md">
                  Discover Our Story
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServicesOverview />
      <IndustriesSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default Home;
