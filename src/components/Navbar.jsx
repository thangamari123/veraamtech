import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/veraamtech-logo.webp';
import StarBorder from './StarBorder';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Projects', path: '/projects', hasDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3.5 sm:px-5 md:px-8 flex justify-center w-full transition-all duration-300">
      {/* Pill Container */}
      <div className="w-full max-w-[1400px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 px-4 py-2 sm:px-5 sm:py-2.5 xl:px-6 xl:py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-shrink-0 items-center space-x-2.5 sm:space-x-3">
          <img src={logo} alt="VEERAAM TECH Logo" className="h-8.5 sm:h-10 md:h-12 object-contain" />
          <div className="flex flex-col justify-center">
            <span className="text-base sm:text-xl md:text-2xl font-heading font-black tracking-tighter leading-none mb-0.5">
              <span className="bg-gradient-to-b from-gray-500 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">VEERAAM</span>{' '}
              <span className="bg-gradient-to-b from-cyan-500 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">TECH</span>
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] md:text-[9px] tracking-[0.18em] text-gray-500 font-semibold uppercase">
              LED Video Wall Manufacturer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center text-[15px] font-semibold transition-colors py-2 px-3 rounded-lg ${isActive ? 'text-[#0A3D91]' : 'text-gray-700 hover:text-[#0A3D91] hover:bg-gray-50'}`}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name} <ChevronDown className="ml-1 w-4 h-4" />
                    {isActive && (
                      <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0A3D91]" />
                    )}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-[15px] block font-semibold transition-colors py-2 px-3 rounded-lg relative ${isActive ? 'text-[#0A3D91]' : 'text-gray-700 hover:text-[#0A3D91] hover:bg-gray-50'}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0A3D91]" />
                    )}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden"
                        onMouseEnter={() => setActiveDropdown(link.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="flex flex-col py-2">
                          {link.name === 'Services' && (
                            <>
                              <Link to="/services/led-video-wall-solutions" className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">LED Video Walls</Link>
                              <Link to="/services/digital-signage" className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Digital Signage</Link>
                              <Link to="/services/commercial-display-systems" className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Commercial Displays</Link>
                              <Link to="/services" className="px-6 py-3 text-sm text-primary font-bold hover:bg-gray-50 transition-colors border-t border-gray-100">View All Services →</Link>
                            </>
                          )}
                          {link.name === 'Projects' && (
                            <>
                              <Link to="/products" className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Products</Link>
                              <Link to="/industries" className="px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Industries</Link>
                              <Link to="/projects" className="px-6 py-3 text-sm text-primary font-bold hover:bg-gray-50 transition-colors border-t border-gray-100">View All Projects →</Link>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center">
          <a href="tel:+919876543210" className="flex items-center text-sm font-bold text-gray-800 bg-white border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors shadow-sm">
            <Phone className="w-4 h-4 mr-2 text-blue-600" />
            Sales
          </a>
          
          {/* Vertical Divider */}
          <div className="w-px h-8 bg-gray-200 mx-4"></div>
          
          <StarBorder
            color="#00d4ff"
            speed="5s"
            thickness={1}
            onClick={() => navigate('/contact')}
            className="cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-xs font-bold px-1 py-0.5">Get Quote</span>
          </StarBorder>
        </div>

        {/* Mobile Menu Button (Proportional on mobile) */}
        <button
          className="xl:hidden text-gray-900 bg-gray-50/80 hover:bg-gray-100 p-2 sm:p-2.5 rounded-xl transition-colors border border-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="xl:hidden absolute top-[110%] left-4 right-4 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden z-50"
          >
            <div className="flex flex-col px-6 py-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-lg font-semibold py-2 border-b border-gray-50 ${isActive ? 'text-[#0A3D91]' : 'text-gray-900'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-6 flex flex-col space-y-3">
                <a href="tel:+919876543210" className="flex items-center justify-center w-full py-3 bg-gray-100 rounded-lg text-gray-900 font-bold">
                  <Phone className="w-5 h-5 mr-2" /> Call Sales
                </a>
                <SpecularButton
                  size="md"
                  radius={8}
                  tint="#0A3D91"
                  tintOpacity={1}
                  blur={2}
                  textColor="#ffffff"
                  lineColor="#00B4D8"
                  baseColor="#031b45"
                  intensity={1.5}
                  shineSize={10}
                  shineFade={40}
                  thickness={1.5}
                  speed={0.4}
                  autoAnimate={true}
                  onClick={() => { setIsOpen(false); navigate('/contact'); }}
                  className="w-full flex justify-center"
                >
                  Get Quote
                </SpecularButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
