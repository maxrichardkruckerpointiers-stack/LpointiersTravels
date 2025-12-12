import React from 'react';
import { MapPin } from 'lucide-react';

const InteractiveMap: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-emerald-950">Explore Cartagena</h2>
            <p className="text-gray-600">Discover our tour meeting points and popular destinations in real-time.</p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[600px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          {/* Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.627295881372!2d-75.54929762386866!3d10.42144598970669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62ec63e80313d%3A0x6e7655079a4073d4!2sCartagena%2C%20Bolivar%2C%20Colombia!5e0!3m2!1sen!2sus!4v1716300000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Cartagena Map"
          ></iframe>

          {/* Overlay Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-emerald-100 flex items-center gap-2 pointer-events-none">
            <MapPin className="text-red-500" size={20} fill="currentColor" />
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Current Location</p>
              <p className="font-bold text-emerald-950">Cartagena de Indias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;