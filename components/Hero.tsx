import React from 'react';
import { Play } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language].hero;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image: Real Cartagena Colonial Street */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=1920&auto=format&fit=crop" 
          alt="Colorful streets of Cartagena Old City" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-200 border border-orange-400/30 backdrop-blur-sm text-sm font-semibold tracking-wider mb-6 animate-fade-in-up">
          {t.badge}
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 shadow-sm">
          {t.titlePrefix} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
            Cartagena
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {t.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#experiences" 
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            {t.ctaPrimary}
          </a>
          <button 
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all"
          >
            <Play size={20} fill="currentColor" /> {t.ctaSecondary}
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-xs tracking-widest uppercase mb-2 block">Scroll</span>
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};

export default Hero;