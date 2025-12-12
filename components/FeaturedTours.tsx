
import React, { useState } from 'react';
import { Clock, Star, ArrowRight, Leaf, Download, Info, ChevronRight, X, Sparkles, CheckCircle, Calendar, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
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
  type: 'tour' | 'island';
  features: string[]; // Unified highlights/tags
}

const FeaturedTours: React.FC<FeaturedToursProps> = ({ language = 'en' }) => {
  const { tours, islands } = useData();
  
  // State for Catalog Visibility - DEFAULT FALSE (HIDDEN)
  const [isCatalogVisible, setIsCatalogVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<GalleryItem | null>(null);

  // Translations
  const t = {
    title: language === 'es' ? 'Menú de Experiencias' : 'Experience Menu',
    subtitle: language === 'es' ? 'Tarifas Oficiales 2025' : 'Official Rates 2025',
    citySection: language === 'es' ? 'Tours Históricos & Ciudad' : 'City & Historical Tours',
    islandSection: language === 'es' ? 'Pasadías Islas & Playa' : 'Island Day Trips & Beach',
    book: language === 'es' ? 'Reservar Cupo' : 'Book Spot',
    details: language === 'es' ? 'Ver Detalles' : 'View Details',
    fullDay: language === 'es' ? 'Día Completo' : 'Full Day',
    close: language === 'es' ? 'Cerrar' : 'Close',
    highlights: language === 'es' ? 'Lo Destacado' : 'Highlights',
    revealBtn: language === 'es' ? 'Ver Catálogo y Precios' : 'View Catalog & Prices',
    revealSub: language === 'es' ? 'Clic para desbloquear el menú completo' : 'Click to unlock full menu',
    hideBtn: language === 'es' ? 'Ocultar Catálogo' : 'Hide Catalog',
  };

  // --- DATA NORMALIZATION ---
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
      categoryTag: island.vibe, 
      type: 'island' as const,
      features: island.tags
    }))
  ];

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
        
        {/* --- TOGGLE / REVEAL SECTION --- */}
        {!isCatalogVisible ? (
          <div className="flex flex-col items-center justify-center animate-fade-in-up py-10">
            <div 
                className="bg-[#051c18] p-10 rounded-[2rem] shadow-2xl border border-secondary/30 text-center max-w-2xl w-full relative overflow-hidden group cursor-pointer" 
                onClick={() => setIsCatalogVisible(true)}
            >
               {/* Hover Glow Effect */}
               <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <BookOpen size={48} className="text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{t.revealBtn}</h2>
               <p className="text-gray-400 mb-8">{t.revealSub}</p>
               
               <button 
                 onClick={(e) => { e.stopPropagation(); setIsCatalogVisible(true); }}
                 className="inline-flex items-center gap-2 px-8 py-3 bg-secondary hover:bg-secondary-light text-white rounded-full font-bold transition-all shadow-lg hover:shadow-secondary/30"
               >
                 {t.details} <ChevronDown size={20} />
               </button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            
            {/* Header with Close Button */}
            <div className="flex justify-end mb-8">
               <button 
                 onClick={() => { setIsCatalogVisible(false); window.location.href = '#experiences'; }}
                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
               >
                 <ChevronUp size={16} /> {t.hideBtn}
               </button>
            </div>

            {/* --- PRICE LIST TABLE (MENU STYLE) --- */}
            <div className="mb-10">
              <div className="bg-[#051c18] p-8 md:p-16 rounded-[2rem] shadow-2xl border border-primary/50 relative overflow-hidden">
                 
                 <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-secondary/30 rounded-tl-3xl m-4"></div>
                 <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl m-4"></div>

                 <div className="text-center mb-16 relative">
                    <span className="text-xs font-bold tracking-[0.4em] text-secondary uppercase mb-4 block">TurismoVivo Premium</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">{t.title}</h2>
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
                                className="group relative cursor-pointer hover:bg-white/5 p-4 -mx-3 rounded-xl transition-all border border-transparent hover:border-white/10"
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
                                className="group relative cursor-pointer hover:bg-white/5 p-4 -mx-3 rounded-xl transition-all border border-transparent hover:border-white/10"
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
                    <button 
                        onClick={() => { setIsCatalogVisible(false); window.location.href = '#experiences'; }}
                        className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-gray-400 rounded-full font-bold hover:bg-white/5 transition-all"
                    >
                       <X size={20} /> {t.hideBtn}
                    </button>
                    <a href="#contact" className="inline-flex items-center gap-3 px-10 py-4 ml-4 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-full font-bold hover:from-secondary-light hover:to-secondary transition-all shadow-lg hover:shadow-secondary/20 transform hover:-translate-y-1">
                       <Download size={20} /> {language === 'es' ? 'Descargar PDF' : 'Download PDF'}
                    </a>
                 </div>
              </div>
            </div>

          </div>
        )}

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
