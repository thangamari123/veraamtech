import React from 'react';

const DesignConsultationIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Vector Handle Nodes Bar at Top */}
    <rect x="4.5" y="1.5" width="2" height="2" rx="0.5" strokeWidth="1.5" />
    <rect x="11" y="1.5" width="2" height="2" rx="0.5" strokeWidth="1.5" />
    <rect x="17.5" y="1.5" width="2" height="2" rx="0.5" strokeWidth="1.5" />
    <line x1="6.5" y1="2.5" x2="11" y2="2.5" strokeWidth="1.2" />
    <line x1="13" y1="2.5" x2="17.5" y2="2.5" strokeWidth="1.2" />

    {/* Monitor Frame */}
    <rect x="2" y="4.5" width="20" height="12.5" rx="1.5" />
    <line x1="2" y1="14" x2="22" y2="14" strokeWidth="1.2" />

    {/* Monitor Stand Base */}
    <path d="M10 17l-1 3.5h6l-1-3.5" />
    <line x1="7" y1="20.5" x2="17" y2="20.5" strokeWidth="2" />

    {/* Pen Tool Nib in Center */}
    <path d="M12 4.5l3 3.5-1.2 3h-3.6L9 8z" fill="currentColor" fillOpacity="0.12" strokeWidth="1.5" />
    <circle cx="12" cy="7.5" r="0.6" fill="currentColor" />
    <line x1="12" y1="7.5" x2="12" y2="11" strokeWidth="1.2" />
    <rect x="10" y="11" width="4" height="1.8" rx="0.4" strokeWidth="1.2" />
    <line x1="10.8" y1="12.8" x2="10.8" y2="16" strokeWidth="1.4" />
    <line x1="13.2" y1="12.8" x2="13.2" y2="16" strokeWidth="1.4" />
  </svg>
);

export default DesignConsultationIcon;
