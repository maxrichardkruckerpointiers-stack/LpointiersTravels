import React from 'react';
import { Anchor, Sun, Utensils, Music, Users, Star } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface RosarioIslandsProps {
  language: Language;
}

const RosarioIslands: React.FC<RosarioIslandsProps> = ({ language }) => {
  const t = TRANSLATIONS[language].rosario;

  // Real market data simulation
  const islands = [
    {
      id: 'bora-bora',
      name: 'Bora Bora Beach Club',
      vibe: 'Party & Exclusive',
      price: 95,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578721200632-6a445c556b6c?q=80&w=600&auto=format&fit=crop', // Party vibe
      tags: ['DJ Live', 'Day Bed', 'Welcome Drink'],
      description: language === 'es' ? 'El club más famoso. Fiesta, música house y ambiente vibrante.' : 'The most famous club. Party, house music, and vibrant atmosphere.'
    },
    {
      id: 'playa-blanca',
      name: 'Playa Blanca (Barú)',
      vibe: 'Popular & Blue Water',
      price: 35,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1596436807738-f689b6e82a45?q=80&w=600&auto=format&fit=crop', // White sand
      tags: ['Budget Friendly', 'Crystal Water', 'Local Food'],
      description: language === 'es' ? 'La playa más azul y popular. Ideal para presupuestos ajustados.' : 'The bluest and most popular beach. Ideal for tight budgets.'
    },
    {
      id: 'cholon',
      name: 'Cholón Party Boat',
      vibe: 'Yacht Party',
      price: 85,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1563294622-c3576cc09307?q=80&w=600&auto=format&fit=crop', // Boats
      tags: ['Young Crowd', 'Boat Party', 'Drinks'],
      description: language === 'es' ? 'La locura en el mar. Lanchas, música a todo volumen y fiesta en el agua.' : 'Madness on the sea. Boats, loud music, and partying in the water.'
    },
    {
      id: 'isla-encanto',
      name: 'Isla Encanto / Luxury',
      vibe: 'Relax & Premium',
      price: 110,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop', // Relax resort
      tags: ['Pool', 'Buffet', 'Private Beach'],
      description: language === 'es' ? 'Desconéctate en un resort ecológico de lujo con piscina y playa privada.' : 'Disconnect in a luxury eco-resort with pool and private beach.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Wave */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gray-50 rounded-b-[50%] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm mb-2">
            <Sun size={18} /> Caribbean Paradise
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-emerald-950 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {islands.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
              
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white text-emerald-950 font-bold px-3 py-1 rounded-full shadow-md text-sm">
                  ${item.price} USD
                </div>

                {/* Vibe Badge */}
                <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                  {item.vibe}
                </div>

                {/* Bottom Content on Image */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold leading-tight mb-1">{item.name}</h3>
                  <div className="flex items-center text-yellow-400 text-xs gap-1">
                    <Star size={12} fill="currentColor" /> {item.rating}
                  </div>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-100">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Includes & CTA */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 justify-center">
                    <Anchor size={14} className="text-secondary" /> 
                    <Utensils size={14} className="text-secondary" /> 
                    <span>{t.included}</span>
                  </div>
                  
                  <a 
                    href="#contact" 
                    className="w-full block text-center bg-emerald-950 text-white font-bold py-3 rounded-xl hover:bg-secondary transition-colors duration-300"
                  >
                    {t.bookBtn}
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