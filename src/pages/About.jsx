import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <Helmet>
        <title>About Us | VEERAAM TECH</title>
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000)' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading mb-6"
          >
            VEERAAM <span className="text-accent">TECH</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium italic"
          >
            "Delivering Brilliance Through LED Display Technology."
          </motion.p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Company Profile</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-6">Quality, Innovation, and Customer Satisfaction</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Established in 2010, VEERAAM TECH is an ISO 9001:2015 Certified Company committed to delivering excellence. We specialize in the design, supply, installation, and maintenance of LED Video Walls, Digital Signage, and Professional Display Solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over a decade of industry experience, we provide reliable, high-performance solutions tailored to the needs of corporate organizations, educational institutions, commercial establishments, government departments, and public venues.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of skilled professionals is dedicated to delivering premium-quality products, expert technical support, and exceptional after-sales service. We continuously strive to exceed customer expectations by providing innovative display solutions that combine advanced technology with outstanding performance.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Mission */}
              <div className="bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h4 className="text-2xl font-bold font-heading text-gray-900 mb-4">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To deliver world-class LED display solutions through superior quality, innovative technology, and exceptional customer service.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <Eye className="w-12 h-12 text-primary mb-6" />
                <h4 className="text-2xl font-bold font-heading text-gray-900 mb-4">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  To become one of India's leading providers of LED Video Wall and Digital Display Solutions, recognized for excellence, reliability, and innovation.
                </p>
              </div>
              
              {/* Certifications */}
              <div className="bg-primary text-white p-8 rounded-2xl sm:col-span-2 shadow-xl shadow-blue-900/10 flex flex-col sm:flex-row items-center gap-6">
                <div className="bg-white/20 p-4 rounded-full flex-shrink-0">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-heading mb-2">ISO 9001:2015 Certified</h4>
                  <p className="text-blue-100">
                    We maintain the highest international standards in our quality management systems to ensure you receive only the best products and services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Why VEERAAM TECH</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-gray-900">The Trusted Choice</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['14+ Years of Expertise', 'Premium Quality Hardware', 'Skilled Professional Team', 'Tailored Custom Solutions', 'Robust After-Sales Service', 'Pan-India Reach'].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl flex items-center shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="font-bold text-gray-900">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
