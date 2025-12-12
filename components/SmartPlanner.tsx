
import React, { useState } from 'react';
import { Sparkles, Map, Calendar, Users, DollarSign, Loader2, Clock, X } from 'lucide-react';
import { PlannerState, Language, ItineraryPlan } from '../types';
import { generateSmartItinerary } from '../services/plannerService';
import { TRANSLATIONS } from '../translations';

interface SmartPlannerProps {
  language: Language;
}

// Helper to get high-quality images based on category/location
const getImageForActivity = (category: string, location: string): string => {
  const keywords = `${category} ${location}`.toLowerCase();
  if (keywords.includes('beach') || keywords.includes('playa')) return 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=600&auto=format&fit=crop';
  if (keywords.includes('history') || keywords.includes('walled') || keywords.includes('city')) return 'https://images.unsplash.com/photo-1583997052308-5645f7945d78?q=80&w=600&auto=format&fit=crop';
  if (keywords.includes('food') || keywords.includes('restaurante')) return 'https://images.unsplash.com/photo-1574567295843-9878dc137c87?q=80&w=600&auto=format&fit=crop';
  if (keywords.includes('party') || keywords.includes('club')) return 'https://images.unsplash.com/photo-1566415606622-a988184d0092?q=80&w=600&auto=format&fit=crop';
  return 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80&w=600&auto=format&fit=crop';
};

const SmartPlanner: React.FC<SmartPlannerProps> = ({ language }) => {
  const t = TRANSLATIONS[language].planner;
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<ItineraryPlan | null>(null);
  
  const [preferences, setPreferences] = useState<PlannerState>({
    vibe: '',
    days: '',
    budget: '',
    group: ''
  });
  
  // Custom duration state
  const [customDuration, setCustomDuration] = useState('');

  const groupOptions = ['Solo', 'Couple', 'Family', 'Friends'];
  const durationOptions = ['3 Days', '5 Days', '7 Days', '15 Days', 'Other'];
  const vibeOptions = ['Relax & Luxury', 'Party & Nightlife', 'Culture & History', 'Adventure & Nature', 'Vacation', 'Business'];
  const budgetOptions = ['Economy', 'Standard', 'Luxury'];

  const handleGenerate = async () => {
    // Validate inputs
    if (!preferences.vibe || !preferences.days || !preferences.budget || !preferences.group) {
      alert(language === 'es' ? 'Por favor selecciona todas las opciones.' : 'Please select all options.');
      return;
    }

    if (preferences.days === 'Other' && !customDuration.trim()) {
       alert(language === 'es' ? 'Por favor especifica la duración.' : 'Please specify the duration.');
       return;
    }

    setLoading(true);
    // Use custom duration if 'Other' is selected
    const finalPreferences = {
        ...preferences,
        days: preferences.days === 'Other' ? customDuration : preferences.days
    };

    const result = await generateSmartItinerary(finalPreferences, language);
    setPlan(result);
    setLoading(false);
  };

  const resetPlanner = () => {
    setPlan(null);
    setPreferences({ vibe: '', days: '', budget: '', group: '' });
    setCustomDuration('');
  };

  return (
    <section id="ai-planner" className="py-20 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-secondary-light font-bold text-sm mb-4 shadow-lg">
                <Sparkles size={16} className="animate-pulse" /> {t.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {t.title}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                {t.subtitle}
            </p>
        </div>

        {!plan ? (
          /* INPUT FORM */
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl max-w-4xl mx-auto animate-fade-in-up">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Group Selection */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 font-bold text-emerald-200">
                        <Users size={18} /> {t.labelGroup}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {groupOptions.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setPreferences(p => ({...p, group: opt}))}
                                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 border ${
                                    preferences.group === opt 
                                    ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/30' 
                                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Duration Selection */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 font-bold text-emerald-200">
                        <Clock size={18} /> {t.labelDuration}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {durationOptions.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setPreferences(p => ({...p, days: opt}))}
                                className={`py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                                    preferences.days === opt 
                                    ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/30' 
                                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {opt === 'Other' && language === 'es' ? 'Otro' : opt}
                            </button>
                        ))}
                    </div>
                    {/* Custom Duration Input */}
                    {preferences.days === 'Other' && (
                        <div className="animate-fade-in-up">
                            <input 
                                type="text"
                                placeholder={language === 'es' ? "Ej: 2 Meses, 12 Días..." : "Ex: 2 Months, 12 Days..."}
                                value={customDuration}
                                onChange={(e) => setCustomDuration(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                            />
                        </div>
                    )}
                </div>

                {/* Vibe Selection */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 font-bold text-emerald-200">
                        <Sparkles size={18} /> {t.labelVibe}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {vibeOptions.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setPreferences(p => ({...p, vibe: opt}))}
                                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 border text-left ${
                                    preferences.vibe === opt 
                                    ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/30' 
                                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {language === 'es' && opt === 'Vacation' ? 'Vacaciones' : 
                                 language === 'es' && opt === 'Business' ? 'Negocios' : opt}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Budget Selection */}
                <div className="space-y-3">
                    <label className="flex items-center gap-2 font-bold text-emerald-200">
                        <DollarSign size={18} /> {t.labelBudget}
                    </label>
                    <div className="flex gap-2">
                        {budgetOptions.map(opt => (
                            <button
                                key={opt}
                                onClick={() => setPreferences(p => ({...p, budget: opt}))}
                                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                                    preferences.budget === opt 
                                    ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/30' 
                                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

             </div>

             <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-gradient-to-r from-secondary to-teal-500 hover:from-secondary-dark hover:to-teal-700 text-white font-bold py-4 rounded-xl shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
             >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles fill="currentColor" />}
                {loading ? t.btnLoading : t.btnGenerate}
             </button>
          </div>
        ) : (
          /* RESULT DISPLAY */
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden text-gray-900 animate-fade-in-up">
             {/* Result Header */}
             <div className="bg-emerald-900 text-white p-6 md:p-8 flex justify-between items-start">
                <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">{plan.title}</h3>
                    <p className="text-emerald-200 italic">{plan.summary}</p>
                </div>
                <button onClick={resetPlanner} className="text-white/70 hover:text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                    <X size={24} />
                </button>
             </div>

             {/* Activities List */}
             <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {plan.activities.map((act, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        {/* Time & Image */}
                        <div className="w-full md:w-48 flex-shrink-0">
                            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                {act.time}
                            </span>
                            <div className="h-32 w-full rounded-xl overflow-hidden shadow-md">
                                <img 
                                    src={getImageForActivity(act.category, act.location)} 
                                    alt={act.activity} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-bold text-gray-800">{act.activity}</h4>
                                <span className="text-secondary font-bold text-sm bg-teal-50 px-2 py-1 rounded">
                                    {act.priceEstimate}
                                </span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                                <Map size={14} />
                                <span className="font-medium text-gray-700">{act.location}</span>
                                <span className="mx-2 text-gray-300">|</span>
                                <span className="text-secondary">{act.category}</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {act.description}
                            </p>
                        </div>
                    </div>
                ))}
             </div>

             {/* Action Footer */}
             <div className="bg-gray-50 p-6 border-t border-gray-100 text-center">
                 <button className="bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition-colors shadow-lg flex items-center justify-center gap-2 mx-auto">
                    <Calendar size={18} /> {t.bookPlan}
                 </button>
                 <p className="text-xs text-gray-400 mt-3">
                    *Prices are estimates. Final quote provided upon booking.
                 </p>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartPlanner;
