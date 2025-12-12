
import React from 'react';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-16", scrolled = false }) => {
  // Brand Colors extracted from the provided image
  const colorOrange = '#ea580c'; // Matches the Sun/Frame
  const colorGreen = '#65a30d';  // Matches the Palm/Nature details
  const colorText = '#ffffff';   // White text for dark background contrast

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Container for the graphic and text */}
      <div className="flex flex-col items-center">
        
        {/* GRAPHIC ICON - Recreated from Image */}
        <svg width="60" height="50" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 drop-shadow-md">
          {/* Arch / Sunset Frame */}
          <path d="M10 50 A 40 40 0 0 1 90 50" stroke={colorOrange} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="5" y1="50" x2="95" y2="50" stroke={colorOrange} strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Sun with Rays */}
          <circle cx="50" cy="20" r="4" stroke={colorOrange} strokeWidth="2" />
          <g stroke={colorOrange} strokeWidth="1.5">
             <line x1="50" y1="12" x2="50" y2="9" /> {/* Top */}
             <line x1="50" y1="28" x2="50" y2="31" /> {/* Bottom */}
             <line x1="42" y1="20" x2="39" y2="20" /> {/* Left */}
             <line x1="58" y1="20" x2="61" y2="20" /> {/* Right */}
             <line x1="44" y1="14" x2="42" y2="12" /> {/* Diagonal */}
             <line x1="56" y1="14" x2="58" y2="12" />
          </g>

          {/* Clouds (Left Side) */}
          <path d="M15 32 Q 18 28 22 30 T 30 32" stroke={colorOrange} strokeWidth="1.5" fill="none" />
          <path d="M12 38 Q 18 34 24 38 T 35 38" stroke={colorGreen} strokeWidth="1.5" fill="none" />

          {/* Palm Tree (Right Side) */}
          <path d="M68 50 Q 72 35 68 25" stroke={colorOrange} strokeWidth="2.5" strokeLinecap="round" /> {/* Trunk */}
          {/* Palm Fronds */}
          <path d="M68 25 Q 60 22 55 28" stroke={colorGreen} strokeWidth="2" fill="none" />
          <path d="M68 25 Q 62 15 58 18" stroke={colorGreen} strokeWidth="2" fill="none" />
          <path d="M68 25 Q 75 15 80 18" stroke={colorGreen} strokeWidth="2" fill="none" />
          <path d="M68 25 Q 80 25 82 32" stroke={colorGreen} strokeWidth="2" fill="none" />

          {/* Grass / Waves at bottom */}
          <path d="M25 58 Q 35 53 45 58" stroke={colorOrange} strokeWidth="1.5" fill="none" />
          <path d="M50 58 Q 60 53 70 58" stroke={colorGreen} strokeWidth="1.5" fill="none" />
          
          {/* Little Grass Tuft */}
          <path d="M58 50 L 60 46 L 62 50" stroke={colorGreen} strokeWidth="2" fill="none" />
        </svg>

        {/* LOGO TEXT */}
        <div className="text-center leading-none mt-1">
           <div className="font-sans font-extrabold text-2xl tracking-tight drop-shadow-sm" style={{ color: colorText }}>
             Turismo<span style={{ color: colorOrange }}>Vivo</span>
           </div>
           <div className="text-[0.4rem] tracking-[0.2em] font-bold mt-1 text-gray-300 uppercase">
             Donde el turismo cobra vida.
           </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
