
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, User as UserIcon, LogOut } from 'lucide-react';
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
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const t = TRANSLATIONS[language].nav;
  const { siteConfig, user, setAuthModalOpen, logout } = useData();

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
    // Removed "fixed top-0 left-0 z-50" because the parent container in App.tsx handles the fixing
    <nav className={`w-full transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-emerald-950/90 backdrop-blur-md shadow-lg py-3 border-emerald-800/50' 
        : 'bg-transparent py-5 border-transparent'
    }`}>
      <div className="container px-4 sm:px-6">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          {siteConfig.logoUrl ? (
            <div className="flex-shrink-0">
               {/* Removed 'brightness-0 invert' to show the logo in its original colors as requested */}
               <img 
                 src={siteConfig.logoUrl} 
                 alt="TurismoVivo Logo" 
                 className="h-12 md:h-14 w-auto object-contain transition-all" 
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

            {/* Auth Button */}
            {user ? (
               <div className="relative">
                 <button 
                   onClick={() => setShowProfileMenu(!showProfileMenu)}
                   className="flex items-center gap-3 bg-emerald-900/50 hover:bg-emerald-800 px-3 py-1.5 rounded-full border border-emerald-700 transition-all"
                 >
                   {user.avatar ? (
                     <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-secondary" />
                   ) : (
                     <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">
                       {user.name.charAt(0)}
                     </div>
                   )}
                   <span className="text-sm font-medium text-white pr-2 max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                 </button>

                 {/* Dropdown */}
                 {showProfileMenu && (
                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden py-2 border border-gray-200 animate-fade-in-up">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Cuenta</p>
                        <p className="text-sm font-bold text-gray-800 truncate">{user.email}</p>
                      </div>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mis Reservas</button>
                      <button 
                        onClick={() => { logout(); setShowProfileMenu(false); }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <LogOut size={14} /> Cerrar Sesión
                      </button>
                   </div>
                 )}
               </div>
            ) : (
                <button 
                  onClick={() => setAuthModalOpen(true)}
                  className="bg-transparent hover:bg-white/10 text-white px-5 py-2.5 rounded-full font-bold transition-all border border-white/20 flex items-center gap-2 text-sm whitespace-nowrap"
                >
                  <UserIcon size={16} /> {t.loginBtn}
                </button>
            )}

            <a 
              href="#contact" 
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-secondary/20 flex items-center gap-2 border border-secondary/50 whitespace-nowrap"
            >
              <Phone size={16} /> {t.book}
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Auth Trigger (Icon Only) */}
            {!user && (
              <button onClick={() => setAuthModalOpen(true)} className="text-white hover:text-secondary">
                <UserIcon size={24} />
              </button>
            )}
            {user && (
               <button onClick={() => logout()} className="w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-xs">
                 {user.name.charAt(0)}
               </button>
            )}

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-2xl focus:outline-none text-white hover:text-secondary transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
          
          {!user && (
            <button 
              onClick={() => { setAuthModalOpen(true); setIsOpen(false); }}
              className="mt-2 block w-full text-center border border-white/20 text-white font-bold py-3 rounded-xl hover:bg-white/10"
            >
              {t.loginBtn}
            </button>
          )}

          <a 
            href="#contact" 
            className="mt-2 block w-full text-center bg-secondary text-white font-bold py-4 rounded-xl shadow-lg" 
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
