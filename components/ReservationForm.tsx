
import React, { useState } from 'react';
import { Send, Download, Tag } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface ReservationFormProps {
  language?: Language;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ language = 'en' }) => {
  const [submitted, setSubmitted] = useState(false);
  const t = TRANSLATIONS[language].form;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      console.log('Form Submitted');
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-emerald-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-[#051c18] p-12 rounded-[2rem] shadow-2xl animate-fade-in-up border border-emerald-800">
                <div className="w-20 h-20 bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-secondary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{t.successTitle}</h2>
                <p className="text-gray-400 mb-8">{t.successMsg}</p>
                <button className="flex items-center justify-center gap-2 mx-auto px-8 py-4 bg-secondary text-white rounded-xl hover:bg-secondary-dark transition-colors font-bold">
                    <Download size={20} /> {t.download}
                </button>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051c18] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-emerald-800/50">
            
            {/* Form Side */}
            <div className="p-8 md:p-12 w-full md:w-1/2">
                <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Premium Booking</span>
                <h2 className="text-4xl font-serif font-bold text-white mb-3">{t.title}</h2>
                <p className="text-gray-400 mb-10">{t.subtitle}</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-emerald-200 mb-2">{t.name}</label>
                        <input type="text" required className="w-full px-5 py-4 rounded-xl bg-emerald-900/30 border border-emerald-800 text-white placeholder-emerald-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <label className="block text-sm font-medium text-emerald-200 mb-2">{t.email}</label>
                             <input type="email" required className="w-full px-5 py-4 rounded-xl bg-emerald-900/30 border border-emerald-800 text-white placeholder-emerald-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-emerald-200 mb-2">{t.phone}</label>
                             <input type="tel" required className="w-full px-5 py-4 rounded-xl bg-emerald-900/30 border border-emerald-800 text-white placeholder-emerald-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="+1 234..." />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-emerald-200 mb-2">{t.interest}</label>
                        <select className="w-full px-5 py-4 rounded-xl bg-emerald-900/30 border border-emerald-800 text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all">
                            <option className="bg-emerald-950 text-gray-300">General Inquiry</option>
                            <option className="bg-emerald-950 text-gray-300">City & History Tours</option>
                            <option className="bg-emerald-950 text-gray-300">Rosario Islands (Day Trip)</option>
                            <option className="bg-emerald-950 text-gray-300">Private Boat</option>
                            <option className="bg-emerald-950 text-gray-300">Custom Itinerary</option>
                        </select>
                    </div>

                    {/* Promo Code Section */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-emerald-200 mb-2">{t.promo}</label>
                        <div className="relative">
                           <input 
                              type="text" 
                              className="w-full pl-12 pr-4 py-4 rounded-xl border border-dashed border-secondary/50 bg-secondary/10 text-secondary focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all font-bold placeholder-secondary/50" 
                              placeholder="ECO20" 
                           />
                           <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary" size={20} />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary-dark transition-colors shadow-lg shadow-secondary/20 mt-4 text-lg">
                        {t.submit}
                    </button>
                    <p className="text-xs text-center text-emerald-600 mt-4">
                        Secure SSL Connection. Privacy Protected.
                    </p>
                </form>
            </div>

            {/* Image Side - Real Cartagena Image */}
            <div className="w-full md:w-1/2 relative min-h-[400px]">
                <img 
                    src="https://images.unsplash.com/photo-1629833590742-02c31e428df1?q=80&w=1200&auto=format&fit=crop" 
                    alt="Cartagena Balcony with Flowers" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-950/60 flex items-center justify-center p-12">
                    <div className="text-center">
                        <blockquote className="text-white font-serif text-3xl font-bold italic mb-6 leading-relaxed">
                            "The only risk is wanting to stay."
                        </blockquote>
                        <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
                        <p className="text-emerald-200 mt-4 text-sm tracking-widest uppercase">Cartagena de Indias</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
