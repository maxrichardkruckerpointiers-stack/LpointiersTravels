import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { MAP_MARKERS } from '../constants';

const InteractiveMap: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-emerald-950">Explore Our Destinations</h2>
            <p className="text-gray-600">Click the markers to discover where adventure awaits.</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] bg-blue-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          {/* Simulated Map Background */}
          <img 
            src="https://picsum.photos/1200/800?grayscale&blur=2" 
            alt="Map of Cartagena" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>

          {/* Markers */}
          {MAP_MARKERS.map((marker) => (
            <div 
              key={marker.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              onClick={() => setActiveMarker(activeMarker === marker.id ? null : marker.id)}
            >
              <div className="relative">
                <MapPin 
                    size={40} 
                    className={`text-orange-600 drop-shadow-lg transition-transform hover:scale-125 ${activeMarker === marker.id ? 'scale-125 text-orange-500' : ''}`} 
                    fill="currentColor"
                />
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 top-0 left-0 -z-10"></span>
              </div>

              {/* Tooltip Card */}
              {activeMarker === marker.id && (
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-64 bg-white p-3 rounded-xl shadow-2xl z-20 animate-fade-in-up">
                  <div className="h-32 w-full rounded-lg overflow-hidden mb-3">
                    <img src={marker.image} alt={marker.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-gray-900">{marker.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{marker.description}</p>
                  <a href="#experiences" className="text-xs font-bold text-orange-500 hover:text-orange-600">View Tours &rarr;</a>
                  
                  {/* Arrow */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;