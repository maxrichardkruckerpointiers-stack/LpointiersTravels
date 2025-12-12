
import React, { useState } from 'react';
import { Clock, Star, ArrowRight, Leaf, Download, Info, MapPin, Waves, Music, Camera } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { Language } from '../types';

interface FeaturedToursProps {
  language?: Language;
}

// Unified interface for rendering
interface GalleryItem {
  id: string;
  title: string;
  price: number;
  image: string;
  gallery?: string[];
  rating: number;
  duration: string;
  description: string;
  categoryTag: string; // Visual tag text
  filterCategory: string; // For logic filtering
  type: 'tour' | 'island';
}

const FeaturedTours: React.FC<FeaturedToursProps> = ({ language = 'en' }) => {
  const { tours, islands } = useData();
  
  // Filter Categories
  const FILTER_ALL = 'All';
  const FILTER_HISTORY = 'History & Culture';
  const FILTER_ISLANDS = 'Islands & Beach';
  const FILTER_PARTY = 'Party & Nightlife';
  const FILTER_RELAX = 'Relax & Nature';

  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  // Translations
  const t = {
    title: language === 'es' ? 'Menú de Experiencias' : 'Experience Menu',
    subtitle: language === 'es' ? 'Colección Exclusiva 2025' : 'Exclusive Collection 2025',
    citySection: language === 'es' ? 'Tours Históricos & Ciudad' : 'City & Historical Tours',
    islandSection: language === 'es' ? 'Pasadías Islas & Playa' : 'Island Day Trips & Beach',
    galleryTitle: language === 'es' ? 'Galería Visual & Destinos' : 'Visual Gallery & Destinations',
    gallerySubtitle: language === 'es' ? 'Explora cada rincón de Cartagena y sus Islas' : 'Explore every corner of Cartagena and its Islands',
    book: language === 'es' ? 'Reservar' : 'Book',
    details: language === 'es' ? 'Ver Detalles' : 'View Details',
    fullDay: language === 'es' ? 'Día Completo' : 'Full Day',
    filters: {
      all: language === 'es' ? 'Todos' : 'All',
      history: language === 'es' ? 'Historia' : 'History',
      islands: language === 'es' ? 'Islas' : 'Islands',
      party: language === 'es' ? 'Fiesta' : 'Party',
      relax: language === 'es' ? 'Relax' : 'Relax'
    }
  };

  // --- DATA NORMALIZATION & MERGING ---
  const galleryItems: GalleryItem[] = [
    // 1. Map Tours
    ...tours.map(tour => ({
      id: `tour-${tour.id}`,
      title: tour.title,
      price: tour.price,
      image: tour.image,
      gallery: tour.gallery,
      rating: tour.rating,
      duration: tour.duration,
      description: tour.description,
      categoryTag: tour.category,
      filterCategory: tour.category === 'Cultural' ? FILTER_HISTORY : 
                      tour.category === 'Gastronomic' ? FILTER_HISTORY : 
                      tour.category === 'Adventure' ? FILTER_RELAX : FILTER_PARTY,
      type: 'tour' as const
    })),
    // 2. Map Islands
    ...islands.map(island => ({
      id: `island-${island.id}`,
      title: island.name,
      price: island.price,
      image: island.image,
      gallery: island.gallery,
      rating: island.rating,
      duration: t.fullDay,
      description: language === 'es' ? island.descriptionEs : island.descriptionEn,
      categoryTag: island.vibe, // e.g. "Party", "Luxury"
      filterCategory: island.tags.some(t => t.toLowerCase().includes('party') || t.toLowerCase().includes('rumba')) ? FILTER_PARTY :
                      island.vibe.includes('Relax') || island.vibe.includes('Eco') ? FILTER_RELAX : FILTER_ISLANDS,
      type: 'island' as const
    }))
  ];

  // Logic to determine if an island should also show up in "Islands" general tab
  const getFilteredItems = () => {
    if (activeFilter === FILTER_ALL) return galleryItems;
    
    return galleryItems.filter(item => {
      // Special case: "Islands & Beach" should show ALL islands, regardless of sub-vibe
      if (activeFilter === FILTER_ISLANDS && item.type === 'island') return true;
      return item.filterCategory === activeFilter;
    });
  };

  const filteredItems = getFilteredItems();

  // Fallback image function
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=800&auto=format&fit=crop"; // Generic Cartagena fallback
  };

  return (
    <section id="experiences" className="py-24 bg-emerald-950 relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: LUXURY PRICE LIST (MENU STYLE) --- */}
        {/* Kept as requested for the professional list view */}
        <div className="mb-32 animate-fade-in-up">
          <div className="bg-[#051c18] p-8 md:p-16 rounded-[2rem] shadow-2xl border border-emerald-800/50 relative overflow-hidden">
             
             <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-600/30 rounded-tl-3xl m-4"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-600/30 rounded-br-3xl m-4"></div>

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
                              <h4 className="text-xl font-serif font-medium text-white group-hover:text-secondary-light transition-colors cursor-pointer">
                                {tour.title}
                              </h4>
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

                {/* Column 2: Islands */}
                <div>
                   <h3 className="text-2xl font-serif text-secondary-light mb-8 flex items-center gap-3 border-b border-emerald-900 pb-4">
                      <span className="p-2 bg-secondary/10 rounded-full border border-secondary/30 text-secondary"><Leaf size={18}/></span>
                      {t.islandSection}
                   </h3>
                   <div className="space-y-8">
                      {islands.map((island) => (
                        <div key={island.id} className="group relative">
                           <div className="flex items-baseline justify-between mb-2">
                              <h4 className="text-xl font-serif font-medium text-white group-hover:text-secondary-light transition-colors cursor-pointer">
                                {island.name}
                              </h4>
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
             
             <div className="mt-16 text-center pt-8 border-t border-emerald-900/50">
                <a href="#contact" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1">
                   <Download size={20} /> {language === 'es' ? 'Descargar Menú PDF' : 'Download Full Menu'}
                </a>
             </div>
          </div>
        </div>

        {/* --- PART 2: UNIFIED VISUAL GALLERY --- */}
        <div className="relative">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-secondary-light font-bold uppercase tracking-wider text-sm mb-3">
                    <Camera size={18} /> {t.galleryTitle}
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.gallerySubtitle}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-secondary to-yellow-500 mx-auto rounded-full mb-10"></div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {[
                        { key: FILTER_ALL, label: t.filters.all, icon: null },
                        { key: FILTER_ISLANDS, label: t.filters.islands, icon: <Waves size={16} /> },
                        { key: FILTER_HISTORY, label: t.filters.history, icon: <MapPin size={16} /> },
                        { key: FILTER_PARTY, label: t.filters.party, icon: <Music size={16} /> },
                        { key: FILTER_RELAX, label: t.filters.relax, icon: <Leaf size={16} /> },
                    ].map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                                activeFilter === filter.key 
                                    ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/30 transform scale-105' 
                                    : 'bg-emerald-900/30 text-gray-400 border-emerald-800 hover:border-emerald-500 hover:text-white'
                            }`}
                        >
                            {filter.icon} {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="group bg-[#051c18] rounded-2xl overflow-hidden border border-emerald-800/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/40 flex flex-col h-full"
                    >
                        {/* Image Container with Hover Effect */}
                        <div className="relative h-64 overflow-hidden">
                            {/* Main Image */}
                            <img 
                                src={item.image || "https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=800"} 
                                alt={item.title}
                                onError={handleImageError}
                                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${item.gallery && item.gallery.length > 1 ? 'opacity-90 group-hover:opacity-0' : 'opacity-90 group-hover:opacity-100'}`}
                            />

                            {/* Second Image (Visible on Hover if available) */}
                            {item.gallery && item.gallery.length > 1 && (
                                <img 
                                    src={item.gallery[1]}
                                    alt={item.title + " view 2"}
                                    onError={handleImageError}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                                />
                            )}
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 pointer-events-none"></div>

                            {/* Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg ${
                                    item.type === 'island' ? 'bg-secondary text-white' : 'bg-emerald-700 text-white'
                                }`}>
                                    {item.categoryTag}
                                </span>
                            </div>
                            
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-yellow-400 font-bold px-3 py-1 rounded-lg border border-white/10 shadow-lg">
                                ${item.price}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-serif font-bold text-white leading-tight group-hover:text-secondary-light transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 border-b border-emerald-900 pb-4">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={14} fill="currentColor" /> 
                                    <span className="font-bold">{item.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} /> {item.duration}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-light">
                                {item.description}
                            </p>

                            <a 
                                href="#contact" 
                                className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-emerald-900/50 hover:bg-secondary text-white rounded-xl font-semibold border border-emerald-800 hover:border-secondary transition-all group-hover:shadow-lg"
                            >
                                {t.details} <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Empty State */}
            {filteredItems.length === 0 && (
                <div className="text-center py-12 bg-white/5 rounded-2xl border border-dashed border-white/10">
                    <p className="text-gray-400">No products found in this category.</p>
                    <button onClick={() => setActiveFilter(FILTER_ALL)} className="text-secondary hover:underline mt-2">View All</button>
                </div>
            )}
        </div>

      </div>
    </section>
  );
};

export default FeaturedTours;
