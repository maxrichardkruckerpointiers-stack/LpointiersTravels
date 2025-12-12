
import React from 'react';
import { Anchor, Sun, Utensils, Star, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';
import { useData } from '../contexts/DataContext';

interface RosarioIslandsProps {
  language: Language;
}

const RosarioIslands: React.FC<RosarioIslandsProps> = ({ language }) => {
  const t = TRANSLATIONS[language].rosario;
  const { islands } = useData();

  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden border-t border-emerald-900/50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-secondary-light font-bold uppercase tracking-wider text-sm mb-3">
            <Sun size={18} /> Caribbean Paradise
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6">{t.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">{t.subtitle}</p>
        </div>

        {/* Grid 3 Columns - Dark Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {islands.map((item) => (
            <div key={item.id} className="group relative bg-[#051c18] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-800/50 overflow-hidden flex flex-col h-full hover:border-secondary/50">
              
              {/* Image Header */}
              <div className="h-72 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051c18] via-transparent to-transparent opacity-90"></div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-black/80 text-yellow-400 font-bold px-4 py-1.5 rounded-full backdrop-blur-md text-sm border border-white/10">
                  ${item.price} USD
                </div>

                {/* Vibe Badge */}
                <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide shadow-lg">
                  {item.vibe}
                </div>

                {/* Bottom Content on Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-serif font-bold leading-tight mb-2 text-white drop-shadow-lg">{item.name}</h3>
                  <div className="flex items-center text-yellow-400 text-sm gap-1 font-medium">
                    <Star size={16} fill="currentColor" /> {item.rating}
                  </div>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-8 flex-grow flex flex-col pt-2">
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed font-light">
                  {language === 'es' ? item.descriptionEs : item.descriptionEn}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold bg-emerald-900/50 text-emerald-300 px-3 py-1.5 rounded border border-emerald-800">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Includes & CTA */}
                <div className="mt-auto pt-6 border-t border-emerald-900">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                     <div className="flex items-center gap-2">
                        <Utensils size={14} className="text-secondary" /> Lunch Included
                     </div>
                     <div className="flex items-center gap-2">
                        <Anchor size={14} className="text-secondary" /> Boat Transfer
                     </div>
                  </div>
                  
                  <a 
                    href="#contact" 
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white font-bold py-4 rounded-xl hover:from-secondary hover:to-secondary-dark transition-all duration-300 shadow-lg border border-emerald-700/50"
                  >
                    {t.bookBtn} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RosarioIslands;
