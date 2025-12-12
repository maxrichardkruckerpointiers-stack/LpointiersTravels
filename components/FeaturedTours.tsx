
import React, { useState } from 'react';
import { Clock, Star, ArrowRight, Leaf, Download, Info, MapPin, Waves, Music, Camera, ChevronRight, X, Sparkles, CheckCircle, Calendar } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { Language } from '../types';

interface FeaturedToursProps {
  language?: Language;
}

// Unified interface for rendering
interface GalleryItem {
  id: string; // The unified ID (e.g. 'tour-1')
  originalId: string; // The database ID
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
  features: string[]; // Unified highlights/tags
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
  const [selectedProduct, setSelectedProduct] = useState<GalleryItem | null>(null);

  // Translations
  const t = {
    title: language === 'es' ? 'Menú de Experiencias' : 'Experience Menu',
    subtitle: language === 'es' ? 'Colección Exclusiva 2025' : 'Exclusive Collection 2025',
    citySection: language === 'es' ? 'Tours Históricos & Ciudad' : 'City & Historical Tours',
    islandSection: language === 'es' ? 'Pasadías Islas & Playa' : 'Island Day Trips & Beach',
    galleryTitle: language === 'es' ? 'Galería Visual & Destinos' : 'Visual Gallery & Destinations',
    gallerySubtitle: language === 'es' ? 'Explora cada rincón de Cartagena y sus Islas' : 'Explore every corner of Cartagena and its Islands',
    book: language === 'es' ? 'Reservar Cupo' : 'Book Spot',
    details: language === 'es' ? 'Ver Detalles' : 'View Details',
    fullDay: language === 'es' ? 'Día Completo' : 'Full Day',
    close: language === 'es' ? 'Cerrar' : 'Close',
    highlights: language === 'es' ? 'Lo Destacado' : 'Highlights',
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
      originalId: tour.id,
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
      type: 'tour' as const,
      features: tour.highlights
    })),
    // 2. Map Islands
    ...islands.map(island => ({
      id: `island-${island.id}`,
      originalId: island.id,
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
      type: 'island' as const,
      features: island.tags
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

  // Handle Product Click
  const handleProductClick = (item: GalleryItem) => {
    setSelectedProduct(item);
  };

  // Fallback image function
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=800&auto=format&fit=crop"; // Generic Cartagena fallback
  };

  return (
    <section id="experiences" className="py-24 bg-primary-dark relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- PART 1: LUXURY PRICE LIST (MENU STYLE) --- */}
        <div className="mb-32 animate-fade-in-up">
          <div className="bg-[#051c18] p-8 md:p-16 rounded-[2rem] shadow-2xl border border-primary/50 relative overflow-hidden">
             
             <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-secondary/30 rounded-tl-3xl m-4"></div>
             <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl m-4"></div>

             <div className="text-center mb-16 relative">
                <span className="text-xs font-bold tracking-[0.4em] text-secondary uppercase mb-4 block">TurismoVivo Premium</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">{t.title}</h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-secondary"></div>
                    <p className="text-primary-light/80 italic font-serif text-lg">{t.subtitle}</p>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-secondary"></div>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Column 1: City Tours */}
                <div>
                   <h3 className="text-2xl font-serif text-secondary mb-8 flex items-center gap-3 border-b border-primary-dark pb-4">
                      <span className="p-2 bg-primary-dark/50 rounded-full border border-primary/50 text-primary-light"><Info size={18}/></span>
                      {t.citySection}
                   </h3>
                   <div className="space-y-6">
                      {galleryItems.filter(i => i.type === 'tour').map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative cursor-pointer hover:bg-white/5 p-3 -mx-3 rounded-xl transition-all"
                            onClick={() => handleProductClick(item)}
                        >
                           <div className="flex items-baseline justify-between mb-2">
                              <h4 className="text-xl font-serif font-medium text-white group-hover:text-secondary-light transition-colors flex items-center gap-2">
                                {item.title}
                                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                              </h4>
                              <div className="flex-grow mx-4 border-b-2 border-dotted border-primary-dark/50 relative top-[-6px]"></div>
                              <span className="text-xl font-bold text-secondary">${item.price}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm text-primary-light/60 font-light pl-1">
                              <span className="italic tracking-wide">{item.duration}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-xs uppercase tracking-wider border border-primary-dark px-2 py-0.5 rounded text-primary-light">{item.categoryTag}</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Column 2: Islands */}
                <div>
                   <h3 className="text-2xl font-serif text-secondary-light mb-8 flex items-center gap-3 border-b border-primary-dark pb-4">
                      <span className="p-2 bg-secondary/10 rounded-full border border-secondary/30 text-secondary"><Leaf size={18}/></span>
                      {t.islandSection}
                   </h3>
                   <div className="space-y-6">
                      {galleryItems.filter(i => i.type === 'island').map((item) => (
                        <div 
                            key={item.id} 
                            className="group relative cursor-pointer hover:bg-white/5 p-3 -mx-3 rounded-xl transition-all"
                            onClick={() => handleProductClick(item)}
                        >
                           <div className="flex items-baseline justify-between mb-2">
                              <h4 className="text-xl font-serif font-medium text-white group-hover:text-secondary-light transition-colors flex items-center gap-2">
                                {item.title}
                                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                              </h4>
                              <div className="flex-grow mx-4 border-b-2 border-dotted border-primary-dark/50 relative top-[-6px]"></div>
                              <span className="text-xl font-bold text-secondary">${item.price}</span>
                           </div>
                           <div className="flex justify-between items-center text-sm text-primary-light/60 font-light pl-1">
                              <span className="italic tracking-wide">{item.categoryTag}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-xs uppercase tracking-wider border border-primary-dark px-2 py-0.5 rounded text-primary-light">{t.fullDay}</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             
             <div className="mt-16 text-center pt-8 border-t border-primary-dark/50">
                <a href="#contact" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-full font-bold hover:from-secondary-light hover:to-secondary transition-all shadow-lg hover:shadow-secondary/20 transform hover:-translate-y-1">
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
                <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary-light mx-auto rounded-full mb-10"></div>

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
                                    : 'bg-primary-dark/30 text-gray-400 border-primary-dark hover:border-primary-light hover:text-white'
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
                        className="group bg-[#051c18] rounded-2xl overflow-hidden border border-primary-dark/50 hover:border-secondary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-dark/40 flex flex-col h-full"
                    >
                        {/* Image Container with Hover Effect */}
                        <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => handleProductClick(item)}>
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
                                    item.type === 'island' ? 'bg-secondary text-white' : 'bg-primary text-white'
                                }`}>
                                    {item.categoryTag}
                                </span>
                            </div>
                            
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-secondary-light font-bold px-3 py-1 rounded-lg border border-white/10 shadow-lg">
                                ${item.price}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 
                                    className="text-xl font-serif font-bold text-white leading-tight group-hover:text-secondary-light transition-colors cursor-pointer"
                                    onClick={() => handleProductClick(item)}
                                >
                                    {item.title}
                                </h3>
                            </div>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 border-b border-primary-dark pb-4">
                                <div className="flex items-center gap-1 text-secondary">
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

                            <button 
                                onClick={() => handleProductClick(item)} 
                                className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-primary-dark/50 hover:bg-secondary text-white rounded-xl font-semibold border border-primary-dark hover:border-secondary transition-all group-hover:shadow-lg"
                            >
                                {t.details} <ArrowRight size={16} />
                            </button>
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

      {/* --- PRODUCT DETAILS MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
                onClick={() => setSelectedProduct(null)}
            ></div>
            
            {/* Modal Card */}
            <div className="relative bg-[#051c18] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-emerald-800 animate-fade-in-up max-h-[90vh]">
                
                {/* Image Section (Top on mobile, Left on Desktop) */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto bg-black">
                    <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.title}
                        onError={handleImageError}
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051c18] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Mobile Close Button */}
                    <button 
                        onClick={() => setSelectedProduct(null)} 
                        className="absolute top-4 left-4 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white md:hidden backdrop-blur-md border border-white/10"
                    >
                        <X size={20} />
                    </button>

                    <div className="absolute bottom-4 left-4 flex gap-2">
                         {/* Optional Gallery thumbnails could go here */}
                         <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider shadow-lg">
                            {selectedProduct.type === 'tour' ? 'Experience' : 'Island'}
                         </span>
                    </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider block mb-1">{selectedProduct.categoryTag}</span>
                            <h3 className="text-3xl font-serif font-bold text-white leading-tight">{selectedProduct.title}</h3>
                        </div>
                        <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-white hidden md:block bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                    
                    {/* Key Stats */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mb-6 pb-6 border-b border-emerald-900/50 mt-2">
                        <div className="flex items-baseline gap-1">
                             <span className="text-3xl font-bold text-secondary">${selectedProduct.price}</span>
                             <span className="text-sm text-gray-400 font-medium">USD</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                            <Star fill="currentColor" size={16} />
                            <span className="font-bold text-sm">{selectedProduct.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-200 bg-emerald-900/40 px-3 py-1 rounded-full border border-emerald-800">
                            <Clock size={16} /> <span className="text-sm font-medium">{selectedProduct.duration}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-gray-300 leading-relaxed font-light text-base">
                            {selectedProduct.description}
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8 bg-emerald-900/20 p-5 rounded-2xl border border-emerald-900/50">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <Sparkles size={16} className="text-secondary"/> {t.highlights}
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {selectedProduct.features?.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                    <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                             {/* Generic feature if empty */}
                             {(!selectedProduct.features || selectedProduct.features.length === 0) && (
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <CheckCircle size={16} className="text-emerald-500" />
                                    <span>Verified Quality Experience</span>
                                </li>
                             )}
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 flex gap-4">
                        <a 
                            href="#contact" 
                            onClick={() => setSelectedProduct(null)}
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-secondary to-secondary-dark text-white font-bold hover:shadow-lg hover:shadow-secondary/20 transition-all transform hover:-translate-y-0.5"
                        >
                            <Calendar size={18} /> {t.book}
                        </a>
                    </div>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedTours;
