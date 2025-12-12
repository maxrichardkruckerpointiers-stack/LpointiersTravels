
import React from 'react';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", scrolled = false }) => {
  // Colors derived from the brand logic and the image provided
  // Dark text color changes based on scroll state if needed, but the logo itself has specific colors.
  // We'll make the text adhere to the 'scrolled' prop for visibility on dark backgrounds.
  
  const textColor = scrolled ? '#064e3b' : '#ffffff'; // Emerald-950 or White
  const circleColor = '#86efac'; // Light green circle
  const leafStroke = '#064e3b'; // Dark green stroke for leaves

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: Circle with Leaves */}
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        {/* Light Green Circle Background */}
        <circle cx="50" cy="50" r="48" fill={circleColor} />
        
        {/* Stylized Leaves - Recreated from the image idea */}
        {/* Left Leaf */}
        <path 
          d="M50 85 C50 85 20 70 20 45 C20 25 35 20 50 40" 
          stroke={leafStroke} 
          strokeWidth="3" 
          fill="white"
          strokeLinecap="round"
        />
        <path d="M25 45 L50 60" stroke={leafStroke} strokeWidth="2" />
        <path d="M30 35 L45 50" stroke={leafStroke} strokeWidth="2" />
        
        {/* Right Leaf */}
        <path 
          d="M50 85 C50 85 80 70 80 45 C80 25 65 20 50 40" 
          stroke={leafStroke} 
          strokeWidth="3" 
          fill="white"
          strokeLinecap="round"
        />
        <path d="M75 45 L50 60" stroke={leafStroke} strokeWidth="2" />
        <path d="M70 35 L55 50" stroke={leafStroke} strokeWidth="2" />
      </svg>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <span 
          className="font-sans font-extrabold text-xl leading-none tracking-tight"
          style={{ color: textColor }}
        >
          EcoExplora Mundo
        </span>
        <span 
          className="font-sans font-medium text-[0.55rem] tracking-widest uppercase mt-1 opacity-90"
          style={{ color: textColor }}
        >
          Portal de Turismo
        </span>
      </div>
    </div>
  );
};

export default Logo;
