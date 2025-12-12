
import React from 'react';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", scrolled = false }) => {
  // In the new Dark Luxury theme, the background is either:
  // 1. Transparent (on top of dark Hero image) -> Text White
  // 2. Dark Emerald (scrolled) -> Text White
  // Therefore, text is ALWAYS white/light.
  
  const textColor = '#ffffff'; 
  const subTextColor = '#cbd5e1'; // slate-300
  const circleColor = '#10b981'; // Emerald-500 for pop
  const leafStroke = '#022c22'; // Dark emerald stroke

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon: Circle with Leaves */}
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 drop-shadow-md">
        {/* Lighter Green Circle Background for contrast against dark header */}
        <circle cx="50" cy="50" r="48" fill={circleColor} />
        
        {/* Stylized Leaves */}
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
          className="font-serif font-extrabold text-xl leading-none tracking-tight drop-shadow-sm"
          style={{ color: textColor }}
        >
          EcoExplora
        </span>
        <span 
          className="font-sans font-medium text-[0.6rem] tracking-[0.2em] uppercase mt-1"
          style={{ color: subTextColor }}
        >
          Mundo
        </span>
      </div>
    </div>
  );
};

export default Logo;
