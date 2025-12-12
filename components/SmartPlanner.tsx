import React, { useState } from 'react';
import { Sparkles, Map, Calendar, Users, DollarSign, Loader2, Clock, Tag } from 'lucide-react';
import { PlannerState, Language, ItineraryPlan } from '../types';
import { generateSmartItinerary } from '../services/plannerService';
import { TRANSLATIONS } from '../translations';

interface SmartPlannerProps {
  language: Language;
}

// Helper to get high-quality images based on category/location
const getImageForActivity = (category: string, location: string): string => {
  const images: Record<string, string> = {
    'Beach': 'https://images.unsplash.com/photo-1596436807738-f689b6e82a45?q=80&w=800&auto=format&fit=crop',
    'History': 'https://images.unsplash.com/photo-1629833590742-02c31e428df1?q=80&w=800&auto=format&fit=crop',
    'Food': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    'Party': 'https://images.unsplash.com/photo-1542114633-289b52a550eb?q=80&w=800&auto=format&fit=crop',
    'Nature': 'https://images.unsplash.com/photo-1582791694766-3d3cb0152439?q=80&w=800&auto=format&fit=crop',
  };
  const loc = location.toLowerCase();
  if (loc.includes('rosario') || loc.includes('cholon') || loc.includes('island')) return images['Beach'];
  if (loc.includes('castle') || loc.includes('felipe') || loc.includes('walled')) return images['History'];
  return images[category] || images['History'];
};

const SmartPlanner: React.FC<SmartPlannerProps> = ({ language }) => {
  const t = TRANSLATIONS[language].planner;
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<ItineraryPlan | null>(null);
  const [preferences, setPreferences] = useState<PlannerState>({
    vibe: 'Relaxing & Beach',
    days: '3 Days',
    budget: 'Standard',
    group: 'Couple'
  });

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateSmartItinerary(preferences, language);
    setPlan(result);
    setLoading(false);
  };

  const handleChange = (field: keyof PlannerState, value: string) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="ai-planner" className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-secondary-light font-bold mb-4 border border-white/10">
            <Sparkles size={18} /> {t.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6">{t.title}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Map size={24} className="text-secondary" /> {language === 'es' ? 'Preferencias' : 'Preferences'}</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <Users size={16} /> {t.labelGroup}
                </label>
                <select 
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-secondary outline-none"
                  value={preferences.group}
                  onChange={(e) => handleChange('group', e.target.value)}
                >
                  <option className="text-gray-900" value="Solo">Solo</option>
                  <option className="text-gray-900" value="Couple">Couple / Pareja</option>
                  <option className="text-gray-900" value="Group/Friends">Friends / Amigos</option>
                  <option className="text-gray-900" value="Family">Family / Familia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <Calendar size={16} /> {t.labelDuration}
                </label>
                <select 
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-secondary outline-none"
                  value={preferences.days}
                  onChange={(e) => handleChange('days', e.target.value)}
                >
                  <option className="text-gray-900" value="1 Day">1 Day</option>
                  <option className="text-gray-900" value="3 Days">3 Days</option>
                  <option className="text-gray-900" value="5 Days">5 Days</option>
                  <option className="text-gray-900" value="7 Days">7 Days</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <Sparkles size={16} /> {t.labelVibe}
                </label>
                <select 
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-secondary outline-none"
                  value={preferences.vibe}
                  onChange={(e) => handleChange('vibe', e.target.value)}
                >
                  <option className="text-gray-900" value="Relaxing & Beach">Relaxing & Beach</option>
                  <option className="text-gray-900" value="Party & Nightlife">Party & Nightlife</option>
                  <option className="text-gray-900" value="History & Culture">History & Culture</option>
                  <option className="text-gray-900" value="Luxury & Gastronomy">Luxury & Gastronomy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <DollarSign size={16} /> {t.labelBudget}
                </label>
                <div className="flex gap-4">
                  {['Budget', 'Standard', 'Luxury'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="budget" 
                        checked={preferences.budget === opt}
                        onChange={() => handleChange('budget', opt)}
                        className="text-secondary focus:ring-secondary bg-transparent"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-secondary to-primary-light hover:from-secondary-dark hover:to-primary text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles />} 
                {loading ? t.btnLoading : t.btnGenerate}
              </button>
            </div>
          </div>

          {/* Result Display */}
          <div className="lg:col-span-8 min-h-[400px] flex items-center justify-center">
            {!plan && !loading && (
              <div className="text-center opacity-50 p-12 border-2 border-dashed border-white/20 rounded-3xl w-full h-full flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                  <Map size={40} />
                </div>
                <p className="text-xl">
                  {language === 'es' 
                    ? 'Tu itinerario personalizado aparecerá aquí.' 
                    : 'Your personalized itinerary will appear here.'}
                </p>
              </div>
            )}

            {plan && !loading && (
              <div className="w-full animate-fade-in-up space-y-6">
                 {/* Header of Plan */}
                 <div className="bg-white/95 text-emerald-950 p-6 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-serif font-bold mb-2">{plan.title}</h3>
                    <p className="text-gray-600">{plan.summary}</p>
                 </div>

                 {/* Activities Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {plan.activities.map((item, idx) => (
                      <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="h-40 overflow-hidden relative">
                           <img 
                              src={getImageForActivity(item.category, item.location)} 
                              alt={item.activity}
                              className="w-full h-full object-cover"
                           />
                           <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                              {item.priceEstimate}
                           </div>
                           <div className="absolute bottom-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                              {item.category}
                           </div>
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                           <div className="flex items-center text-xs text-secondary font-bold mb-1 uppercase tracking-wide">
                              <Clock size={12} className="mr-1" /> {item.time}
                           </div>
                           <h4 className="font-bold text-gray-900 mb-1 leading-tight">{item.activity}</h4>
                           <p className="text-xs text-emerald-700 font-semibold mb-2 flex items-center">
                              <Map size={12} className="mr-1" /> {item.location}
                           </p>
                           <p className="text-gray-600 text-sm line-clamp-3 mb-4">{item.description}</p>
                           <a href="#contact" className="mt-auto block text-center w-full py-2 border border-emerald-900 text-emerald-900 rounded-lg text-sm font-bold hover:bg-emerald-900 hover:text-white transition-colors">
                              {t.bookPlan}
                           </a>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartPlanner;