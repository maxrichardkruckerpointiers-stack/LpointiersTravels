
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
    // Removed Philosophy and Reviews links as requested
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container">
        <div className="flex justify-between items-center">
          
          {/* LOGO SECTION */}
          {siteConfig.logoUrl ? (
            <div className="flex-shrink-0">
               <img 
                 src={siteConfig.logoUrl} 
                 alt="EcoExplora Mundo Logo" 
                 className={`h-12 md:h-14 w-auto object-contain transition-all ${scrolled ? '' : 'brightness-0 invert'}`} 
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
                className={`font-medium transition-colors flex items-center gap-1 ${
                  link.special 
                    ? 'text-secondary font-bold hover:text-secondary-dark' 
                    : scrolled ? 'text-gray-700 hover:text-secondary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.special && <Sparkles size={14} />}
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-secondary-dark text-white px-5 py-2.5 rounded-full font-bold transition-transform transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Phone size={16} /> {t.book}
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`text-2xl focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`block px-3 py-3 text-base font-medium rounded-md flex items-center gap-2 ${
                  link.special ? 'text-secondary bg-orange-50' : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.special && <Sparkles size={16} />}
              {link.name}
            </a>
          ))}
          <a href="#contact" className="mt-4 block w-full text-center bg-primary text-white font-bold py-3 rounded-lg" onClick={() => setIsOpen(false)}>
            {t.book}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
