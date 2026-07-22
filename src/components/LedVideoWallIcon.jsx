import React from 'react';

const LedVideoWallIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Screen Outer Frame */}
    <rect x="2" y="3" width="20" height="13" rx="1.5" />
    
    {/* Matrix Dots */}
    <circle cx="5.5" cy="6" r="0.7" fill="currentColor" />
    <circle cx="8.5" cy="6" r="0.7" fill="currentColor" />
    <circle cx="11.5" cy="6" r="0.7" fill="currentColor" />
    <circle cx="14.5" cy="6" r="0.7" fill="currentColor" />
    <circle cx="17.5" cy="6" r="0.7" fill="currentColor" />

    <circle cx="5.5" cy="8.5" r="0.7" fill="currentColor" />
    <circle cx="8.5" cy="8.5" r="0.7" fill="currentColor" />
    <circle cx="11.5" cy="8.5" r="0.7" fill="currentColor" />
    <circle cx="14.5" cy="8.5" r="0.7" fill="currentColor" />

    <circle cx="5.5" cy="11" r="0.7" fill="currentColor" />
    <circle cx="8.5" cy="11" r="0.7" fill="currentColor" />
    <circle cx="11.5" cy="11" r="0.7" fill="currentColor" />

    <circle cx="5.5" cy="13.5" r="0.7" fill="currentColor" />
    <circle cx="8.5" cy="13.5" r="0.7" fill="currentColor" />

    {/* Stand legs */}
    <line x1="6" y1="16" x2="6" y2="21" />
    <line x1="18" y1="16" x2="18" y2="21" />
    {/* Feet */}
    <line x1="4" y1="21" x2="8" y2="21" />
    <line x1="16" y1="21" x2="20" y2="21" />
  </svg>
);

export default LedVideoWallIcon;
