import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Travelers Love Us</h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <span className="text-white font-medium ml-2">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-secondary" />
                <div>
                  <h4 className="font-bold text-lg leading-none">{t.name}</h4>
                  <span className="text-xs text-gray-300">{t.location}</span>
                </div>
                <div className="ml-auto">
                   {/* Simplified platform icon simulation */}
                   <span className={`text-xs font-bold px-2 py-1 rounded ${t.platform === 'TripAdvisor' ? 'bg-primary-light text-white' : 'bg-blue-500 text-white'}`}>
                     {t.platform}
                   </span>
                </div>
              </div>
              <p className="text-gray-200 italic mb-4">"{t.text}"</p>
              <div className="flex text-yellow-400">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">Trusted by over 10,000 travelers worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;