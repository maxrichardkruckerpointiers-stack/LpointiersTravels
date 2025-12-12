import React, { useState } from 'react';
import { Clock, Star, ArrowRight, Leaf } from 'lucide-react';
import { TOURS } from '../constants';

const FeaturedTours: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Cultural' | 'Adventure' | 'Gastronomic' | 'Family'>('All');

  const filteredTours = filter === 'All' ? TOURS : TOURS.filter(t => t.category === filter);

  const categories = ['All', 'Cultural', 'Adventure', 'Gastronomic', 'Family'];

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-950 mb-4">Unforgettable Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Handpicked adventures designed to immerse you in the authentic culture and beauty of Cartagena.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-emerald-800 text-white shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-emerald-800 shadow-sm">
                  ${tour.price} USD
                </div>
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
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
                                tour.ecoScore.level === 'High' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                            }`}>
                                <Leaf size={10} /> Eco: {tour.ecoScore.level}
                            </div>
                            <div className="absolute bottom-full right-0 mb-2 w-48 bg-gray-800 text-white text-xs rounded-lg p-2 opacity-0 group-hover/eco:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                                <p className="font-bold mb-1">Sustainable Impact:</p>
                                <ul className="list-disc pl-3 space-y-1">
                                    {tour.ecoScore.tags.map(tag => <li key={tag}>{tag}</li>)}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{tour.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock size={16} className="mr-1" /> {tour.duration}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{tour.description}</p>
                
                <a href="#contact" className="mt-auto w-full flex items-center justify-center gap-2 py-3 border border-emerald-800 text-emerald-800 rounded-xl font-semibold hover:bg-emerald-800 hover:text-white transition-colors group-hover:bg-emerald-800 group-hover:text-white">
                  Book Now <ArrowRight size={16} />
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