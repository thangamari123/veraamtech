import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, MonitorPlay, Presentation, LayoutDashboard, Package, Factory } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/veraamtech-logo.webp';
import StarBorder from './StarBorder';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services', 
      hasDropdown: true,
      children: [
        { name: 'LED Video Walls', path: '/services/led-video-wall-solutions', icon: MonitorPlay },
        { name: 'Digital Signage', path: '/services/digital-signage', icon: Presentation },
        { name: 'Commercial Displays', path: '/services/commercial-display-systems', icon: LayoutDashboard },
        { name: 'View All Services →', path: '/services', isHighlight: true },
      ] 
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      hasDropdown: true,
      children: [
        { name: 'Products Catalog', path: '/products', icon: Package },
        { name: 'Industries We Serve', path: '/industries', icon: Factory },
        { name: 'View All Projects →', path: '/projects', isHighlight: true },
      ] 
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileSubmenu = (name) => {
    setMobileSubmenu(mobileSubmenu === name ? null : name);
  };

  return (
    <>
      <header className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3.5 sm:px-5 md:px-8 flex justify-center w-full transition-all duration-300">
        {/* Main Floating Pill Header */}
        <div className="w-full max-w-[1400px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 flex items-center justify-between relative z-50">
          
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
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              
              return (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <Link
                      to={link.path}
                      className={`flex items-center text-sm xl:text-[15px] font-semibold transition-colors py-2 px-3 rounded-lg ${isActive ? 'text-[#0A3D91]' : 'text-gray-700 hover:text-[#0A3D91] hover:bg-gray-50'}`}
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name} <ChevronDown className="ml-1 w-3.5 h-3.5" />
                      {isActive && (
                        <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0A3D91]" />
                      )}
                    </Link>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-sm xl:text-[15px] block font-semibold transition-colors py-2 px-3 rounded-lg relative ${isActive ? 'text-[#0A3D91]' : 'text-gray-700 hover:text-[#0A3D91] hover:bg-gray-50'}`}
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
                            {link.children?.map((child, idx) => (
                              <Link
                                key={idx}
                                to={child.path}
                                className={`px-6 py-2.5 text-xs sm:text-sm transition-colors flex items-center ${
                                  child.isHighlight
                                    ? 'text-primary font-bold hover:bg-gray-50 border-t border-gray-100 mt-1 pt-3 justify-center'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary gap-2.5'
                                }`}
                              >
                                {child.icon && !child.isHighlight && <child.icon className="w-4 h-4 text-blue-500" />}
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:+917845441619" 
              className="flex items-center text-xs xl:text-sm font-bold text-gray-800 bg-white border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
              Sales
            </a>
            
            <div className="w-px h-7 bg-gray-200 mx-3"></div>
            
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

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-gray-900 bg-gray-50/90 hover:bg-gray-100 p-2 rounded-xl transition-colors border border-gray-200/80 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-gray-900" /> : <Menu className="w-5 h-5 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-[115%] left-3.5 right-3.5 bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden z-50 max-h-[80vh] overflow-y-auto"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  
                  if (link.hasDropdown) {
                    const isSubOpen = mobileSubmenu === link.name;
                    return (
                      <div key={link.name} className="border-b border-gray-100 py-1">
                        <div
                          className={`w-full flex items-center justify-between rounded-xl transition-colors ${
                            isActive ? 'text-blue-600 bg-blue-50/60' : 'text-gray-800 hover:bg-gray-50'
                          }`}
                        >
                          <Link 
                            to={link.path} 
                            onClick={() => setIsOpen(false)}
                            className="flex-1 py-2 pl-3 text-sm font-bold"
                          >
                            {link.name}
                          </Link>
                          <button 
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className="p-2 pr-3"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                          </button>
                        </div>

                        {/* Collapsible Mobile Submenu */}
                        <AnimatePresence>
                          {isSubOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl my-1"
                            >
                              {link.children?.map((child, idx) => (
                                <Link
                                  key={idx}
                                  to={child.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`py-2 px-3 text-xs font-semibold rounded-lg transition-colors flex items-center ${
                                    child.isHighlight
                                      ? 'text-blue-600 font-bold bg-blue-100/50 justify-center'
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-white gap-2'
                                  }`}
                                >
                                  {child.icon && !child.isHighlight && <child.icon className="w-3.5 h-3.5 text-blue-500" />}
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2.5 px-3 rounded-xl text-sm font-bold border-b border-gray-100 transition-colors ${
                        isActive ? 'text-blue-600 bg-blue-50/60' : 'text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile Call & Action Buttons */}
                <div className="pt-4 pb-2 space-y-2.5">
                  <a 
                    href="tel:+917845441619" 
                    className="flex items-center justify-center w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl text-gray-900 font-bold text-xs transition-colors border border-gray-200"
                  >
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    Call Sales (+91 78454 41619)
                  </a>

                  <div className="flex justify-center pt-1">
                    <StarBorder
                      color="#00d4ff"
                      speed="4s"
                      thickness={1.5}
                      onClick={() => {
                        setIsOpen(false);
                        navigate('/contact');
                      }}
                      className="w-full flex justify-center cursor-pointer"
                    >
                      <span className="text-xs font-bold py-0.5">Request Custom Quote</span>
                    </StarBorder>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity" 
        />
      )}
    </>
  );
};

export default Navbar;
