import React from 'react';

const DigitalSignageIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Top Bracket Pegs */}
    <line x1="6" y1="1.5" x2="6" y2="4" strokeWidth="2" />
    <line x1="12" y1="1.5" x2="12" y2="4" strokeWidth="2" />
    <line x1="18" y1="1.5" x2="18" y2="4" strokeWidth="2" />

    {/* Main Billboard Board */}
    <rect x="2" y="4" width="20" height="12" rx="1" fill="currentColor" fillOpacity="0.08" />

    {/* Left Image Box */}
    <rect x="4" y="6" width="6" height="8" rx="0.5" strokeWidth="1.5" />
    {/* Mountain Triangle Peak Inside Image Box */}
    <path d="M5 12l2-2.5 1.5 1.5 1-1 1.5 2" strokeWidth="1.2" />

    {/* Right Text Content Lines */}
    <line x1="12" y1="7" x2="19" y2="7" strokeWidth="2" />
    <line x1="12" y1="10" x2="19" y2="10" strokeWidth="2" />
    <line x1="12" y1="13" x2="19" y2="13" strokeWidth="2" />

    {/* Bottom Stand Structure */}
    <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" />
    <line x1="12" y1="18" x2="12" y2="22.5" strokeWidth="2.5" />
  </svg>
);

export default DigitalSignageIcon;
