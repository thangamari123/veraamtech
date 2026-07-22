import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import SpecularButton from './SpecularButton';

const CTABanner = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    solution: 'Indoor LED Video Wall',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', phone: '', solution: 'Indoor LED Video Wall', message: '' });
    }, 4000);
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-white text-gray-900 overflow-hidden">
      {/* Background container in clean white with subtle shadow and border */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="relative rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 sm:p-10 md:p-12 overflow-hidden">
          
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-50/80 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-50/80 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* LEFT COLUMN: Info & Contact Details */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Quick Consultation & Quote
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-gray-900 leading-tight"
              >
                Ready to Transform Your Space with{' '}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Next-Gen LED Displays?
                </span>
              </motion.h2>

              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Connect with our display engineering experts for a tailored recommendation, site survey, or price quote within 30 minutes.
              </p>

              {/* Contact Chips */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <a 
                  href="tel:+917845441619"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-700 uppercase font-bold tracking-wider">Call Support</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">+91 78454 41619</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/917845441619" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-200 hover:border-green-500 hover:bg-green-50/50 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 group-hover:scale-105 transition-transform flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-green-700 uppercase font-bold tracking-wider">WhatsApp Us</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">+91 78454 41619</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-blue-700 uppercase font-bold tracking-wider">Official Email</p>
                    <p className="text-xs font-bold text-gray-900 truncate">veeraamtech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-700 uppercase font-bold tracking-wider">Head Office</p>
                    <p className="text-xs font-bold text-gray-900">Avadi, Chennai - 600071</p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact Form Card in White */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-lg relative">
                
                <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
                  <h3 className="text-lg font-bold text-gray-900 font-heading flex items-center gap-2">
                    <Send className="w-5 h-5 text-blue-700" />
                    Send Quick Inquiry
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800 border border-blue-200">
                    Fast Response
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-5">
                  Fill in your details below &amp; our engineer will call you right back.
                </p>

                {isSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto animate-bounce" />
                    <h4 className="text-xl font-bold text-gray-900">Thank You!</h4>
                    <p className="text-xs text-gray-600">
                      Your inquiry has been submitted successfully. We will get back to you shortly!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white border border-gray-300 focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Phone / Mobile *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="Your 10-digit number"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full bg-white border border-gray-300 focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Product Needed</label>
                        <select 
                          value={formState.solution}
                          onChange={(e) => setFormState({ ...formState, solution: e.target.value })}
                          className="w-full bg-white border border-gray-300 focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Indoor LED Video Wall">Indoor LED Video Wall</option>
                          <option value="Outdoor LED Display">Outdoor LED Display</option>
                          <option value="Fine Pixel Pitch Display">Fine Pixel Pitch Display</option>
                          <option value="Digital Signage">Digital Signage Kiosks</option>
                          <option value="Rental / Commercial LED">Rental / Commercial Display</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5">Requirement Details (Optional)</label>
                      <textarea 
                        rows={2}
                        placeholder="Screen size, location, or special requirements..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-white border border-gray-300 focus:border-blue-600 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <SpecularButton
                        size="md"
                        radius={10}
                        tint="#0A3D91"
                        tintOpacity={0.9}
                        blur={6}
                        textColor="#ffffff"
                        lineColor="#00B4D8"
                        baseColor="#031b45"
                        intensity={1.5}
                        speed={0.4}
                        onClick={handleSubmit}
                        className="w-full"
                      >
                        <span className="flex items-center justify-center gap-2 font-bold text-xs sm:text-sm w-full py-1">
                          Submit Quick Inquiry
                          <Send className="w-4 h-4" />
                        </span>
                      </SpecularButton>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
