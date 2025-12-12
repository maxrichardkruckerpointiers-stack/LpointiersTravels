import React from 'react';
import { Sun, Footprints, Droplets, MapPin } from 'lucide-react';

const PracticalInfo: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-8 text-center">Good to Know Before You Go</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Sun className="text-orange-500 mb-3" size={32} />
              <h4 className="font-bold text-gray-900 mb-1">Weather</h4>
              <p className="text-sm text-gray-600">Hot & humid. Bring sunscreen and hats.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Footprints className="text-orange-500 mb-3" size={32} />
              <h4 className="font-bold text-gray-900 mb-1">Walking</h4>
              <p className="text-sm text-gray-600">Wear comfortable shoes. Old streets are uneven.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Droplets className="text-orange-500 mb-3" size={32} />
              <h4 className="font-bold text-gray-900 mb-1">Hydration</h4>
              <p className="text-sm text-gray-600">We provide water bottles on all tours.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-orange-500 mb-3" size={32} />
              <h4 className="font-bold text-gray-900 mb-1">Meeting Points</h4>
              <p className="text-sm text-gray-600">Central locations near Clock Tower or Hotels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;