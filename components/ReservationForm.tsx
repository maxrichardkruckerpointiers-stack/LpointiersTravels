import React, { useState } from 'react';
import { Send, Download } from 'lucide-react';

const ReservationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

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
            <div className="bg-white p-12 rounded-3xl shadow-xl">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-green-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-emerald-950 mb-4">You're All Set!</h2>
                <p className="text-gray-600 mb-8">Thank you for your interest. One of our travel specialists will contact you shortly via WhatsApp or Email.</p>
                <button className="flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors">
                    <Download size={18} /> Download Free Cartagena Guide
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
                <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-2">Plan Your Experience</h2>
                <p className="text-gray-600 mb-8">Fill out the form below to book a tour or request a custom itinerary.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                             <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Phone</label>
                             <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="+1 234 567 8900" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all">
                            <option>General Inquiry</option>
                            <option>Walled City Walk</option>
                            <option>Rosario Islands</option>
                            <option>Street Food Safari</option>
                            <option>Custom Itinerary</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                        Start Planning My Trip
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        We respect your privacy. No spam, ever.
                    </p>
                </form>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 relative min-h-[300px]">
                <img 
                    src="https://picsum.photos/800/1000?random=88" 
                    alt="Cartagena Balcony" 
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