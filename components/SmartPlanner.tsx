import React, { useState } from 'react';
import { Sparkles, Map, Calendar, Users, DollarSign, Loader2 } from 'lucide-react';
import { PlannerState } from '../types';
import { generateSmartItinerary } from '../services/plannerService';

const SmartPlanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<PlannerState>({
    vibe: 'Relaxing & Beach',
    days: '3 Days',
    budget: 'Standard',
    group: 'Couple'
  });

  const handleGenerate = async () => {
    setLoading(true);
    const plan = await generateSmartItinerary(preferences);
    setResult(plan);
    setLoading(false);
  };

  const handleChange = (field: keyof PlannerState, value: string) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="ai-planner" className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-secondary-light font-bold mb-4 border border-white/10">
            <Sparkles size={18} /> AI-Powered Travel Agent
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6">Create Your Perfect <br/>Cartagena Itinerary</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tell us your style, and our AI will craft a personalized plan including the best islands, cultural spots, and entertainment in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Controls */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Map size={24} className="text-secondary" /> Trip Preferences</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <Users size={16} /> Who is traveling?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Solo', 'Couple', 'Group/Friends', 'Family'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleChange('group', opt)}
                      className={`py-2 px-3 rounded-lg text-sm transition-all ${preferences.group === opt ? 'bg-secondary text-white font-bold' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <Calendar size={16} /> Duration
                </label>
                <select 
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-secondary outline-none"
                  value={preferences.days}
                  onChange={(e) => handleChange('days', e.target.value)}
                >
                  <option className="text-gray-900" value="1 Day">1 Day (Quick Stop)</option>
                  <option className="text-gray-900" value="3 Days">3 Days (Weekend)</option>
                  <option className="text-gray-900" value="5 Days">5 Days (Full Experience)</option>
                  <option className="text-gray-900" value="7 Days">7 Days (Deep Dive)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <Sparkles size={16} /> Vibe & Entertainment
                </label>
                <select 
                  className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-secondary outline-none"
                  value={preferences.vibe}
                  onChange={(e) => handleChange('vibe', e.target.value)}
                >
                  <option className="text-gray-900" value="Relaxing & Beach">Relaxing & Beach (Islands)</option>
                  <option className="text-gray-900" value="Party & Nightlife">Party & Nightlife (Cholón/Clubs)</option>
                  <option className="text-gray-900" value="History & Culture">History & Culture (Walled City)</option>
                  <option className="text-gray-900" value="Luxury & Gastronomy">Luxury & Gastronomy</option>
                  <option className="text-gray-900" value="Eco-Friendly & Nature">Eco-Friendly & Nature</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                   <DollarSign size={16} /> Budget Level
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
                className="w-full mt-4 bg-gradient-to-r from-secondary to-orange-600 hover:from-secondary-dark hover:to-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles />} 
                {loading ? 'Designing Plan...' : 'Generate My Dream Plan'}
              </button>
            </div>
          </div>

          {/* Result Display */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            {!result && !loading && (
              <div className="text-center opacity-50">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Map size={40} />
                </div>
                <p>Your personalized itinerary will appear here.</p>
              </div>
            )}

            {result && !loading && (
              <div className="bg-white text-gray-800 p-8 rounded-3xl shadow-2xl w-full animate-fade-in-up border-4 border-white/50">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-emerald-900">Your Cartagena Plan</h3>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-md">AI Generated</span>
                 </div>
                 <div className="prose prose-emerald prose-sm max-w-none overflow-y-auto max-h-[400px] pr-2">
                    {result.split('\n').map((line, i) => (
                      <p key={i} className="mb-2 leading-relaxed">
                        {line.startsWith('-') || line.startsWith('*') ? (
                          <span className="block ml-4 text-gray-700">• {line.replace(/^[-*]\s/, '')}</span>
                        ) : line.startsWith('#') ? (
                          <span className="block text-lg font-bold text-secondary mt-4 mb-2">{line.replace(/^[#]+\s/, '')}</span>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                 </div>
                 <div className="mt-6 pt-6 border-t border-gray-100">
                    <a href="#contact" className="block w-full text-center bg-emerald-900 text-white font-bold py-3 rounded-lg hover:bg-emerald-800 transition-colors">
                      Book This Plan Now
                    </a>
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