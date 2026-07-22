import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronDown, ChevronUp, Link as LinkIcon, Star, PhoneCall } from 'lucide-react';
import logo from '../assets/veraamtech-logo.webp';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    quickLinks: true,
    topSolutions: false,
    contactInfo: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-[#050C1a] text-gray-300 pt-12 md:pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* =========================================================
            MOBILE VIEW: Brand header + Collapsible Accordions (md:hidden)
        ========================================================= */}
        <div className="md:hidden space-y-6 mb-8">
          
          {/* Brand & Bio */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-3">
              <img src={logo} alt="VEERAAM TECH Logo" className="h-10 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-heading font-black tracking-tighter leading-none mb-1">
                  <span className="bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">VEERAAM</span>{' '}
                  <span className="bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent">TECH</span>
                </span>
                <span className="text-[8px] tracking-[0.2em] text-gray-400 font-semibold uppercase">
                  LED Video Wall Manufacturer
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              India's trusted provider of premium LED Video Walls, Digital Signage and Commercial Display Solutions.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-colors text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.502 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Section 1: QUICK LINKS */}
          <div className="border-t border-white/10 pt-3">
            <button
              onClick={() => toggleSection('quickLinks')}
              className="w-full flex items-center justify-between py-2 text-left text-white font-bold tracking-wider uppercase text-xs font-heading"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <LinkIcon className="w-3.5 h-3.5" />
                <span className="text-white font-bold">QUICK LINKS</span>
              </div>
              {openSections.quickLinks ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {openSections.quickLinks && (
              <ul className="mt-2 space-y-2 pl-2 border-l border-cyan-500/20 text-xs">
                <li><Link to="/about" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Our Services</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Projects</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Case Studies</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Insights & Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Contact Us</Link></li>
              </ul>
            )}
          </div>

          {/* Section 2: TOP SOLUTIONS */}
          <div className="border-t border-white/10 pt-3">
            <button
              onClick={() => toggleSection('topSolutions')}
              className="w-full flex items-center justify-between py-2 text-left text-white font-bold tracking-wider uppercase text-xs font-heading"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <Star className="w-3.5 h-3.5" />
                <span className="text-white font-bold">TOP SOLUTIONS</span>
              </div>
              {openSections.topSolutions ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {openSections.topSolutions && (
              <ul className="mt-2 space-y-2 pl-2 border-l border-cyan-500/20 text-xs">
                <li><Link to="/services/indoor-led-video-walls" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Indoor LED Walls</Link></li>
                <li><Link to="/services/outdoor-led-video-walls" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Outdoor LED Display</Link></li>
                <li><Link to="/services/fine-pixel-pitch-displays" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Fine Pitch LED</Link></li>
                <li><Link to="/services/digital-signage" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Rental LED Solutions</Link></li>
                <li><Link to="/services/commercial-display-systems" className="text-gray-400 hover:text-white flex items-center"><span className="text-cyan-400 mr-2 text-[10px]">›</span>Control Room LED Walls</Link></li>
              </ul>
            )}
          </div>

          {/* Section 3: CONTACT INFO */}
          <div className="border-t border-white/10 pt-3">
            <button
              onClick={() => toggleSection('contactInfo')}
              className="w-full flex items-center justify-between py-2 text-left text-white font-bold tracking-wider uppercase text-xs font-heading"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <PhoneCall className="w-3.5 h-3.5" />
                <span className="text-white font-bold">CONTACT INFO</span>
              </div>
              {openSections.contactInfo ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {openSections.contactInfo && (
              <ul className="mt-2 space-y-3 text-xs text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span>
                    No.353/1B, Bharathy Garden, Avadi, Chennai – 600071
                  </span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col space-y-0.5">
                    <a href="tel:+917845441619" className="hover:text-white transition-colors">+91 78454 41619</a>
                    <a href="tel:+917695055055" className="hover:text-white transition-colors">+91 76950 55055</a>
                    <a href="tel:+919514141619" className="hover:text-white transition-colors">+91 95141 41619</a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-cyan-400 mr-2.5 flex-shrink-0" />
                  <a href="mailto:veeraamtech@gmail.com" className="hover:text-white transition-colors">veeraamtech@gmail.com</a>
                </li>
              </ul>
            )}
          </div>

        </div>


        {/* =========================================================
            DESKTOP VIEW: Perfect 4-Column Grid (hidden md:grid)
        ========================================================= */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 items-start">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="VEERAAM TECH Logo" className="h-12 object-contain" />
              <div className="flex flex-col justify-center">
                <span className="text-xl lg:text-2xl font-heading font-black tracking-tighter leading-none mb-1">
                  <span className="bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">VEERAAM</span>{' '}
                  <span className="bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent">TECH</span>
                </span>
                <span className="text-[9px] tracking-[0.2em] text-gray-400 font-semibold uppercase">
                  LED Video Wall Manufacturer
                </span>
              </div>
            </Link>

            <p className="text-xs lg:text-sm text-gray-400 leading-relaxed pr-2">
              India's trusted provider of enterprise-grade LED Video Walls, Digital Signage, and Commercial Display Systems. We deliver end-to-end solutions from design to 24/7 maintenance.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-105 text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-all hover:scale-105 text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.502 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-105 text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all hover:scale-105 text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 font-heading text-base flex items-center space-x-2">
              <LinkIcon className="w-4 h-4 text-cyan-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs lg:text-sm">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>About Us</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Projects</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Insights & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Solutions */}
          <div>
            <h4 className="text-white font-bold mb-5 font-heading text-base flex items-center space-x-2">
              <Star className="w-4 h-4 text-cyan-400" />
              <span>Top Solutions</span>
            </h4>
            <ul className="space-y-2.5 text-xs lg:text-sm">
              <li><Link to="/services/indoor-led-video-walls" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Indoor LED Walls</Link></li>
              <li><Link to="/services/outdoor-led-video-walls" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Outdoor LED Display</Link></li>
              <li><Link to="/services/fine-pixel-pitch-displays" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Fine Pitch LED</Link></li>
              <li><Link to="/services/digital-signage" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Digital Signage</Link></li>
              <li><Link to="/services/commercial-display-systems" className="hover:text-cyan-400 transition-colors flex items-center"><span className="text-cyan-400 mr-2">›</span>Commercial Displays</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-5 font-heading text-base flex items-center space-x-2">
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Contact Info</span>
            </h4>
            <ul className="space-y-3.5 text-xs lg:text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  No.353/1B, Bharathy Garden,<br />
                  Arunachalam Nagar, Avadi,<br />
                  Chennai – 600071
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+917845441619" className="hover:text-cyan-400 transition-colors">+91 78454 41619</a>
                  <a href="tel:+917695055055" className="hover:text-cyan-400 transition-colors">+91 76950 55055</a>
                  <a href="tel:+919514141619" className="hover:text-cyan-400 transition-colors">+91 95141 41619</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-cyan-400 mr-2.5 flex-shrink-0" />
                <a href="mailto:veeraamtech@gmail.com" className="hover:text-cyan-400 transition-colors truncate">veeraamtech@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright & Links */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs text-gray-500">
          <p className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} VEERAAM TECH. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
