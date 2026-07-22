import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Send } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#040b18]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.7)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto items-center">
        
        {/* 1. CALL BUTTON */}
        <a 
          href="tel:+917845441619"
          className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl py-2 px-2.5 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95 transition-transform group"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-6 h-6 rounded-full bg-white/30 animate-ping" />
            <Phone className="w-4 h-4 text-white relative z-10" />
          </div>
          <span className="text-xs font-bold font-heading tracking-wide">Call Now</span>
        </a>

        {/* 2. GET QUOTE BUTTON */}
        <Link 
          to="/contact"
          className="bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 rounded-xl py-2 px-2.5 flex items-center justify-center gap-1.5 active:scale-95 transition-transform font-bold text-xs tracking-wide"
        >
          <Send className="w-3.5 h-3.5 text-cyan-400" />
          <span>Get Quote</span>
        </Link>

        {/* 3. WHATSAPP BUTTON (Real WhatsApp Icon & Style) */}
        <a 
          href="https://wa.me/917845441619?text=Hello%20VEERAAM%20TECH%2C%20I%20am%20interested%20in%20LED%20Video%20Wall%20solutions."
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl py-2 px-2.5 shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          {/* Real Official WhatsApp SVG Icon */}
          <svg className="w-4 h-4 fill-current text-white flex-shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-0.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="text-xs font-bold font-heading tracking-wide">WhatsApp</span>
        </a>

      </div>
    </div>
  );
};

export default MobileBottomBar;
