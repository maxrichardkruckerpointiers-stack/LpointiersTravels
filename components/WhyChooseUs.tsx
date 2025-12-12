import React from 'react';
import { ShieldCheck, UserCheck, Heart, Star, Target, Eye } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

// We need to inject language props to access translations here, but for simplicity in this hot-swap
// we will assume the parent passes it or we use a context in a larger app.
// For now, let's just use the App's language state if possible, or default to English/Spanish via props.
// Ideally, we update App.tsx to pass language here, but to avoid changing App.tsx signature too much,
// we will just use a hardcoded check or update App.tsx. 
// Let's update App.tsx to pass language to WhyChooseUs.

interface WhyChooseUsProps {
  language?: Language;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language = 'en' }) => {
  const t = TRANSLATIONS[language];

  const benefits = [
    {
      icon: <UserCheck size={32} />,
      title: language === 'es' ? "Guías Expertos Locales" : "Local Expert Guides",
      description: language === 'es' ? "Nuestros guías son locales certificados que comparten las historias ocultas." : "Our guides are certified locals who share the hidden stories."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: language === 'es' ? "Seguridad Primero" : "Safety First",
      description: language === 'es' ? "Tours asegurados con soporte 24/7 para tu tranquilidad." : "Fully insured tours with 24/7 support for your peace of mind."
    },
    {
      icon: <Heart size={32} />,
      title: language === 'es' ? "Experiencia Única" : "Unique Experience",
      description: language === 'es' ? "Creamos recuerdos imborrables con un toque personal." : "We create unforgettable memories with a personal touch."
    },
    {
      icon: <Star size={32} />,
      title: language === 'es' ? "Alta Reputación" : "High Reputation",
      description: language === 'es' ? "Valorados por miles de viajeros por nuestra calidad." : "Rated by thousands of travelers for our quality."
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision Cards */}
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-950 mb-4">{language === 'es' ? 'Nuestra Filosofía' : 'Our Philosophy'}</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-emerald-600 flex flex-col items-start hover:shadow-xl transition-shadow">
                    <div className="bg-emerald-100 p-3 rounded-full mb-4 text-emerald-800">
                        <Target size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.company.missionTitle}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {t.company.missionText}
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-secondary flex flex-col items-start hover:shadow-xl transition-shadow">
                    <div className="bg-orange-100 p-3 rounded-full mb-4 text-orange-600">
                        <Eye size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.company.visionTitle}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {t.company.visionText}
                    </p>
                </div>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white hover:bg-emerald-50 transition-colors shadow-sm hover:shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;