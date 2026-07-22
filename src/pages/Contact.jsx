import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, CheckCircle2, Building2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: 'Indoor LED Video Wall',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build structured WhatsApp message text
    const textMessage = 
      `*New Inquiry from VEERAAM TECH Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}` +
      `${formData.city ? `📍 *City/Location:* ${formData.city}\n` : ''}` +
      `📺 *Product Required:* ${formData.product}\n` +
      `${formData.message ? `💬 *Requirement Details:* ${formData.message}\n` : ''}` +
      `\nThank you!`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/917845441619?text=${encodedText}`;

    setIsSubmitted(true);

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        product: 'Indoor LED Video Wall',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 min-h-screen bg-[#f8fafc]">
      <Helmet>
        <title>Contact Us | VEERAAM TECH - LED Video Wall Solutions</title>
        <meta name="description" content="Get in touch with VEERAAM TECH experts for site surveys, custom quotes, or technical support for LED Video Walls and Digital Signage." />
      </Helmet>

      {/* ── Page Hero Header ── */}
      <section className="bg-gradient-to-b from-[#04091a] via-[#08152e] to-[#04091a] text-white py-10 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight mb-3"
          >
            Let's Build Your Next{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Visual Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or need expert advice? Contact our team for free consultation, technical advice, or site surveys.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Top Quick Contact Cards Grid (2-cols mobile, 4-cols desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 md:mb-12">
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-gray-200/80 shadow-sm sm:shadow-md hover:shadow-lg transition-all">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 sm:mb-4">
                <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-gray-900 font-heading mb-0.5 sm:mb-1">Call Support</h3>
              <p className="text-[10px] sm:text-xs text-gray-500 mb-2 hidden sm:block">Mon-Sat 9am to 8pm</p>
              <div className="space-y-0.5 text-[11px] sm:text-xs font-bold text-blue-600">
                <a href="tel:+917845441619" className="block hover:underline truncate">+91 78454 41619</a>
                <a href="tel:+917695055055" className="block hover:underline truncate">+91 76950 55055</a>
                <a href="tel:+919514141619" className="block hover:underline truncate">+91 95141 41619</a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-gray-200/80 shadow-sm sm:shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-2.5 sm:mb-4">
                  <MessageSquare className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-gray-900 font-heading mb-0.5 sm:mb-1">WhatsApp Chat</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mb-2.5 hidden sm:block">Instant response</p>
              </div>
              <a 
                href="https://wa.me/917845441619" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-bold text-[10px] sm:text-xs px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-colors shadow-sm w-full mt-1"
              >
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-gray-200/80 shadow-sm sm:shadow-md hover:shadow-lg transition-all">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-2.5 sm:mb-4">
                <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-gray-900 font-heading mb-0.5 sm:mb-1">Email Us</h3>
              <p className="text-[10px] sm:text-xs text-gray-500 mb-2 hidden sm:block">Send detailed inquiry</p>
              <a href="mailto:veeraamtech@gmail.com" className="text-[11px] sm:text-xs font-bold text-blue-600 hover:underline break-all">
                veeraamtech@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-gray-200/80 shadow-sm sm:shadow-md hover:shadow-lg transition-all">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5 sm:mb-4">
                <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-gray-900 font-heading mb-0.5 sm:mb-1">Head Office</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed font-medium">
                Avadi, Chennai – 600071
              </p>
            </div>

          </div>

          {/* Contact Form + Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Contact Form Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-gray-200 shadow-lg sm:shadow-xl">
              <div className="mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">Instant Inquiry</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-gray-900">
                  Send Your Inquiry via WhatsApp
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Fill in your details below. Submitting will open WhatsApp pre-filled with your message.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 sm:py-12 text-center space-y-3 bg-green-50 rounded-2xl border border-green-200 p-4 sm:p-6">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto animate-bounce" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Opening WhatsApp...</h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Your inquiry details have been pre-filled. Please tap Send in WhatsApp to complete!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-gray-300 focus:border-blue-600 rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-gray-300 focus:border-blue-600 rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rajesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-gray-300 focus:border-blue-600 rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chennai / Bangalore"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-50 border border-gray-300 focus:border-blue-600 rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Product Interested In
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-slate-50 border border-gray-300 focus:border-blue-600 rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-900 focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Indoor LED Video Wall">Indoor LED Video Wall</option>
                      <option value="Outdoor LED Display">Outdoor LED Display</option>
                      <option value="Fine Pixel Pitch Display">Fine Pixel Pitch Display</option>
                      <option value="Digital Signage Kiosks">Digital Signage Kiosks</option>
                      <option value="Commercial LCD Display">Commercial LCD Display</option>
                      <option value="Rental LED Display">Rental LED Display</option>
                      <option value="AMC & Maintenance">AMC & Maintenance Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Message / Requirement Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify screen dimensions, installation site details, or special requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-gray-300 focus:border-blue-600 rounded-lg sm:rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-base py-3 sm:py-3.5 px-6 rounded-xl shadow-md sm:shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-2 group"
                    >
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                      Submit & Chat on WhatsApp
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Map & Office Info Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              <div className="bg-[#050e1a] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white">VEERAAM TECH HQ</h3>
                    <p className="text-[11px] sm:text-xs text-cyan-400 font-semibold">Avadi, Chennai, Tamil Nadu</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-xs text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>
                      No.353/1B, Bharathy Garden, Arunachalam Nagar, Avadi, Chennai – 600071
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div className="space-y-0.5">
                      <p>+91 78454 41619</p>
                      <p>+91 76950 55055</p>
                      <p>+91 95141 41619</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Working Hours: Mon - Sat (9:00 AM - 8:00 PM)</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 sm:mt-6 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-gray-400">Pan-India Support</span>
                  <span className="text-green-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available 24/7
                  </span>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-lg sm:shadow-xl h-[240px] sm:h-[300px]">
                <iframe
                  title="VEERAAM TECH Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.59051515257!2d80.0984!3d13.1182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526279f0000001%3A0x1!2sAvadi%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
