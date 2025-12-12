
import React, { useState } from 'react';
import { Clock, Star, ArrowRight, Leaf, Download, Info } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { Language } from '../types';

interface FeaturedToursProps {
  language?: Language;
}

const FeaturedTours: React.FC<FeaturedToursProps> = ({ language = 'en' }) => {
  const { tours, islands } = useData();
  const [filter, setFilter] = useState<'All' | 'Cultural' | 'Adventure' | 'Gastronomic' | 'Family'>('All');

  const filteredTours = filter === 'All' ? tours : tours.filter(t => t.category === filter);
  const categories = ['All', 'Cultural', 'Adventure', 'Gastronomic', 'Family'];

  // Translations
  const t = {
    title: language === 'es' ? 'Menú de Experiencias' : 'Experience Menu',
    subtitle: language === 'es' ? 'Colección Exclusiva 2025' : 'Exclusive Collection 2025',
    citySection: language === 'es' ? 'Tours Históricos & Ciudad' : 'City & Historical Tours',
    islandSection: language === 'es' ? 'Pasadías Islas & Playa' : 'Island Day Trips & Beach',
    currency: 'USD',
    book: language === 'es' ? 'Reservar' : 'Book',
    duration: language === 'es' ? 'Duración' : 'Duration',
    fullDay: language === 'es' ? 'Día Completo' : 'Full Day',
    galleryTitle: language === 'es' ? 'Explorar Galería Visual' : 'Explore Visual Gallery'
  };

  return (
    <section id="experiences" className="py-24 bg-emerald-950 relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- LUXURY DARK PRICE LIST (MENU STYLE) --- */}
        <div className="mb-24 animate-fade-in-up">
          <div className="bg-[#051c18] p-8 md:p-16 rounded-[2rem] shadow-2xl border border-emerald-800/50 relative overflow-hidden">
             
             {/* Decorative Corner Accents (Gold) */}
             <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-600/30 rounded-tl-3xl m-4"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-600/30 rounded-br-3xl m-4"></div>

             {/* Header */}
             <div className="text-center mb-16 relative">
                <span className="text-xs font-bold tracking-[0.4em] text-yellow-500 uppercase mb-4 block">EcoExplora Premium</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">{t.title}</h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-yellow-600"></div>
                    <p className="text-emerald-200/80 italic font-serif text-lg">{t.subtitle}</p>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-yellow-600"></div>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Column 1: City Tours */}
                <div>
                   <h3 className="text-2xl font-serif text-yellow-500 mb-8 flex items-center gap-3 border-b border-emerald-900 pb-4">
                      <span className="p-2 bg-emerald-900/50 rounded-full border border-emerald-700/50 text-emerald-400"><Info size={18}/></span>
                      {t.citySection}
                   </h3>
                   <div className="space-y-8">
                      {tours.map((tour) => (
                        <div key={tour.id} className="group relative">
                           <div className="flex items-baseline justify-between mb-2">
                              <h4 className="text-xl font-serif font-medium text-white group-hover:text-secondary-light transition-colors">
                                {tour.title}
                              </h4>
                              {/* Dotted Leader */}
                              <div className="flex-grow mx-4 border-b-2 border-dotted border-emerald-800/50 relative top-[-6px]"></div>
                              <span className="text-xl font-bold text-yellow-500">${tour.price}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm text-emerald-400/60 font-light pl-1">
                              <span className="italic tracking-wide">{tour.duration}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-xs uppercase tracking-wider border border-emerald-800 px-2 py-0.5 rounded text-emerald-500">{tour.category}</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Column 2: Islands (Added as requested) */}
                <div>
                   <h3 className="text-2xl font-serif text-secondary-light mb-8 flex items-center gap-3 border-b border-emerald-900 pb-4">
                      <span className="p-2 bg-secondary/10 rounded-full border border-secondary/30 text-secondary"><Leaf size={18}/></span>
                      {t.islandSection}
                   </h3>
                   <div className="space-y-8">
                      {islands.map((island) => (
                        <div key={island.id} className="group relative">
                           <div className="flex items-baseline justify-between mb-2">
                              <h4 className="text-xl font-serif font-medium text-white group-hover:text-secondary-light transition-colors">
                                {island.name}
                              </h4>
                              {/* Dotted Leader */}
                              <div className="flex-grow mx-4 border-b-2 border-dotted border-emerald-800/50 relative top-[-6px]"></div>
                              <span className="text-xl font-bold text-yellow-500">${island.price}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm text-emerald-400/60 font-light pl-1">
                              <span className="italic tracking-wide">{island.vibe}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-xs uppercase tracking-wider border border-emerald-800 px-2 py-0.5 rounded text-emerald-500">{t.fullDay}</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

             </div>

             {/* Footer of Price List */}
             <div className="mt-16 text-center pt-8 border-t border-emerald-900/50">
                <a href="#contact" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1">
                   <Download size={20} /> {language === 'es' ? 'Descargar Menú PDF' : 'Download Full Menu'}
                </a>
             </div>
          </div>
        </div>

        {/* --- VISUAL CARDS SECTION (City Tours) --- */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-white mb-8">{t.galleryTitle}</h3>
          
          {/* Filter Tabs - Dark Mode */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-secondary text-white border-secondary shadow-glow' 
                    : 'bg-transparent text-gray-400 hover:text-white border-emerald-800 hover:border-emerald-600'
                }`}
              >
                {language === 'es' && cat === 'All' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid - Dark Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-emerald-900/40 backdrop-blur-md rounded-2xl overflow-hidden group hover:bg-emerald-900/60 transition-all duration-300 flex flex-col h-full border border-emerald-800/50 hover:border-emerald-500/50">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-lg font-bold text-yellow-400 shadow-lg border border-white/10">
                  ${tour.price}
                </div>
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                  {tour.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                        <Star size={14} fill="currentColor" /> {tour.rating}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight font-serif">{tour.title}</h3>
                <div className="flex items-center text-emerald-300/70 text-sm mb-4">
                  <Clock size={16} className="mr-1" /> {tour.duration}
                </div>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow font-light">{tour.description}</p>
                
                <a href="#contact" className="mt-auto w-full flex items-center justify-center gap-2 py-3 border border-emerald-600 text-emerald-400 rounded-xl font-semibold hover:bg-secondary hover:text-white hover:border-secondary transition-all group-hover:shadow-glow">
                  {language === 'es' ? 'Ver Detalles' : 'View Details'} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
