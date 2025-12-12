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
      // Track Analytics event here
      console.log('Form Submitted');
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-emerald-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-white p-12 rounded-3xl shadow-xl animate-fade-in-up border border-emerald-100">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-4">{t.successTitle}</h2>
                <p className="text-gray-600 mb-8">{t.successMsg}</p>
                <button className="flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-emerald-900 transition-colors">
                    <Download size={18} /> {t.download}
                </button>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Form Side */}
            <div className="p-8 md:p-12 w-full md:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">{t.title}</h2>
                <p className="text-gray-600 mb-8">{t.subtitle}</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.name}</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                             <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
                             <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+1 234 567 8900" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.interest}</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                            <option>General Inquiry</option>
                            <option>Walled City Walk</option>
                            <option>Rosario Islands</option>
                            <option>Street Food Safari</option>
                            <option>Custom Itinerary</option>
                        </select>
                    </div>

                    {/* Promo Code Section */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.promo}</label>
                        <div className="relative">
                           <input 
                              type="text" 
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-dashed border-secondary/50 bg-teal-50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-secondary-dark font-medium placeholder-secondary/50" 
                              placeholder="ECO20" 
                           />
                           <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" size={18} />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-500/20">
                        {t.submit}
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        We respect your privacy. No spam, ever.
                    </p>
                </form>
            </div>

            {/* Image Side - Real Cartagena Image */}
            <div className="w-full md:w-1/2 relative min-h-[300px]">
                <img 
                    src="https://images.unsplash.com/photo-1629833590742-02c31e428df1?q=80&w=1200&auto=format&fit=crop" 
                    alt="Cartagena Balcony with Flowers" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900/40 flex items-center justify-center p-12">
                    <blockquote className="text-white text-center font-serif text-2xl font-bold italic">
                        "The only risk is wanting to stay."
                        <footer className="text-sm font-sans font-normal mt-4 not-italic opacity-80">- Colombia Tourism</footer>
                    </blockquote>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;