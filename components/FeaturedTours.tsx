
import React, { useState } from 'react';
import { Clock, Star, ArrowRight, Leaf, Tag, Download, Info } from 'lucide-react';
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

  // Translations for the Price List
  const t = {
    title: language === 'es' ? 'Tarifas Oficiales 2025' : 'Official Rates 2025',
    subtitle: language === 'es' ? 'Experiencias Premium & Pasadías' : 'Premium Experiences & Day Trips',
    citySection: language === 'es' ? 'Experiencias en Ciudad' : 'City Experiences',
    islandSection: language === 'es' ? 'Islas del Rosario & Playas' : 'Rosario Islands & Beaches',
    currency: 'USD',
    book: language === 'es' ? 'Reservar' : 'Book',
    duration: language === 'es' ? 'Duración' : 'Duration',
    fullDay: language === 'es' ? 'Día Completo' : 'Full Day'
  };

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PROFESSIONAL PRICE LIST DESIGN --- */}
        <div className="mb-20 animate-fade-in-up">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-emerald-900/10 relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -ml-16 -mb-16 pointer-events-none"></div>

             {/* Header */}
             <div className="text-center mb-12 relative z-10">
                <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase mb-3 block">EcoExplora Mundo</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-2">{t.title}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-secondary mx-auto rounded-full mb-4"></div>
                <p className="text-gray-500 italic font-serif">{t.subtitle}</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                
                {/* Column 1: City Tours */}
                <div>
                   <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2 border-b border-emerald-100 pb-2">
                      <span className="bg-emerald-100 p-1 rounded text-emerald-700"><Info size={16}/></span>
                      {t.citySection}
                   </h3>
                   <div className="space-y-6">
                      {tours.map((tour) => (
                        <div key={tour.id} className="group cursor-default">
                           <div className="flex items-baseline justify-between mb-1">
                              <h4 className="text-lg font-serif font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                                {tour.title}
                              </h4>
                              {/* Dotted Leader */}
                              <div className="flex-grow mx-4 border-b-2 border-dotted border-gray-300 relative top-[-4px]"></div>
                              <span className="text-lg font-bold text-emerald-900">${tour.price}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm text-gray-500">
                              <span className="italic">{tour.duration}</span>
                              <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                                <Star size={10} fill="currentColor" className="text-yellow-500" /> {tour.rating}
                              </span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Column 2: Islands */}
                <div>
                   <h3 className="text-xl font-bold text-secondary-dark mb-6 flex items-center gap-2 border-b border-secondary/20 pb-2">
                      <span className="bg-secondary/10 p-1 rounded text-secondary"><Leaf size={16}/></span>
                      {t.islandSection}
                   </h3>
                   <div className="space-y-6">
                      {islands.map((island) => (
                        <div key={island.id} className="group cursor-default">
                           <div className="flex items-baseline justify-between mb-1">
                              <h4 className="text-lg font-serif font-bold text-gray-800 group-hover:text-secondary transition-colors">
                                {island.name}
                              </h4>
                              {/* Dotted Leader */}
                              <div className="flex-grow mx-4 border-b-2 border-dotted border-gray-300 relative top-[-4px]"></div>
                              <span className="text-lg font-bold text-emerald-900">${island.price}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm text-gray-500">
                              <span className="italic">{island.vibe} • {t.fullDay}</span>
                              <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                                <Star size={10} fill="currentColor" className="text-yellow-500" /> {island.rating}
                              </span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

             </div>

             {/* Footer of Price List */}
             <div className="mt-12 text-center pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">
                  {language === 'es' ? 'Impuestos incluidos • Reserva flexible • Soporte 24/7' : 'Taxes included • Flexible Booking • 24/7 Support'}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-900 text-white rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-900/30">
                   <Download size={18} /> {language === 'es' ? 'Descargar Catálogo PDF' : 'Download PDF Catalog'}
                </a>
             </div>
          </div>
        </div>

        {/* --- EXISTING VISUAL CARDS SECTION (Visual Hierarchy: Secondary) --- */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{language === 'es' ? 'Galería Detallada' : 'Detailed Gallery'}</h3>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-white text-emerald-800 border-2 border-emerald-600 shadow-sm' 
                    : 'bg-transparent text-gray-500 hover:text-emerald-700 border border-transparent'
                }`}
              >
                {language === 'es' && cat === 'All' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-lg font-bold text-primary shadow-sm border border-emerald-100">
                  ${tour.price} USD
                </div>
                {/* Thematic Category Badge: Teal/Secondary */}
                <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">
                  {tour.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 text-yellow-500 text-xs font-bold">
                        <Star size={14} fill="currentColor" /> {tour.rating} ({tour.reviews})
                    </div>
                    {/* Sustainability Badge */}
                    {tour.ecoScore && (
                        <div className="group/eco relative cursor-help">
                            <div className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded-full font-bold border ${
                                tour.ecoScore.level === 'High' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-teal-50 text-teal-700 border-teal-200'
                            }`}>
                                <Leaf size={10} /> Eco: {tour.ecoScore.level}
                            </div>
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold text-emerald-950 mb-2 leading-tight">{tour.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock size={16} className="mr-1" /> {tour.duration}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{tour.description}</p>
                
                <a href="#contact" className="mt-auto w-full flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors group-hover:bg-primary group-hover:text-white">
                  {language === 'es' ? 'Reservar Ahora' : 'Book Now'} <ArrowRight size={16} />
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
