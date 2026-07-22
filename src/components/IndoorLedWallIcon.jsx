import React from 'react';

const IndoorLedWallIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Wall Mount Bracket Base behind */}
    <rect x="2" y="6" width="5" height="10" rx="1" fill="currentColor" fillOpacity="0.15" />
    
    {/* Mount Joint Arm */}
    <path d="M7 11h3" strokeWidth="2" />
    
    {/* Main Wall Display Screen */}
    <rect x="9" y="4" width="13" height="15" rx="1.5" />
    
    {/* Screen Inner Display Area */}
    <rect x="10.5" y="5.5" width="10" height="10" rx="0.5" strokeWidth="1" strokeDasharray="none" />

    {/* Diagonal Screen Glare Line */}
    <line x1="12" y1="7" x2="19" y2="14" opacity="0.5" strokeWidth="1.5" />
    
    {/* Sparkle Star on Screen */}
    <path d="M14 9.5l.5.8.9.2-.7.6.2.9-.9-.5-.9.5.2-.9-.7-.6.9-.2z" fill="currentColor" stroke="none" />

    {/* Camera/Sensor Dot */}
    <circle cx="15.5" cy="17" r="0.6" fill="currentColor" />
  </svg>
);

export default IndoorLedWallIcon;
