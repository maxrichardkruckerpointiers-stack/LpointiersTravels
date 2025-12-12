
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';
import { useData } from '../contexts/DataContext';
import Logo from './Logo';

interface NavigationProps {
  language: Language;
}

const Navigation: React.FC<NavigationProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[language].nav;
  const { siteConfig } = useData();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.experiences, href: '#experiences' },
    { name: t.planner, href: '#ai-planner', special: true },
    { name: t.contact, href: '#contact' },
  ];

  return (
    // Updated classes: fixed top-0, and dark background on scroll instead of white
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-emerald-950/90 backdrop-blur-md shadow-lg py-3 border-emerald-800/50' 
        : 'bg-transparent py-5 border-transparent'
    }`}>
      <div className="container px-4 sm:px-6">
        <div className="flex justify-between items-center">
          
          {/* LOGO SECTION */}
          {siteConfig.logoUrl ? (
            <div className="flex-shrink-0">
               <img 
                 src={siteConfig.logoUrl} 
                 alt="EcoExplora Mundo Logo" 
                 // Logo remains bright because background is always dark (transparent or dark emerald)
                 className="h-12 md:h-14 w-auto object-contain transition-all brightness-0 invert" 
               />
            </div>
          ) : (
            <div className="flex-shrink-0">
              <Logo scrolled={scrolled} />
            </div>
          )}
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors flex items-center gap-1 text-sm tracking-wide ${
                  link.special 
                    ? 'text-yellow-400 font-bold hover:text-yellow-300' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.special && <Sparkles size={14} className="animate-pulse" />}
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-secondary/20 flex items-center gap-2 border border-secondary/50"
            >
              <Phone size={16} /> {t.book}
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-2xl focus:outline-none text-white hover:text-secondary transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dark Theme) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-emerald-900/95 backdrop-blur-xl border-t border-emerald-800 shadow-2xl transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
        <div className="px-6 pt-6 pb-8 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 text-base font-medium rounded-xl flex items-center gap-3 transition-colors ${
                  link.special 
                  ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20' 
                  : 'text-gray-200 hover:text-white hover:bg-emerald-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.special && <Sparkles size={18} />}
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-6 block w-full text-center bg-secondary text-white font-bold py-4 rounded-xl shadow-lg" 
            onClick={() => setIsOpen(false)}
          >
            {t.book}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
