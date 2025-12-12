
import React from 'react';
import { ShieldCheck, UserCheck, Heart, Star, Target, Eye } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

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
    <section id="philosophy" className="py-24 bg-emerald-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision Cards */}
        <div className="mb-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">{language === 'es' ? 'Nuestra Filosofía' : 'Our Philosophy'}</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Mission - Dark Card */}
                <div className="bg-[#051c18] p-10 rounded-[2rem] shadow-xl border border-emerald-800 hover:border-secondary/50 flex flex-col items-start hover:shadow-2xl transition-all group">
                    <div className="bg-emerald-900/50 p-4 rounded-full mb-6 text-emerald-400 group-hover:text-white group-hover:bg-emerald-600 transition-colors">
                        <Target size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">{t.company.missionTitle}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {t.company.missionText}
                    </p>
                </div>

                {/* Vision - Dark Card */}
                <div className="bg-[#051c18] p-10 rounded-[2rem] shadow-xl border border-emerald-800 hover:border-secondary/50 flex flex-col items-start hover:shadow-2xl transition-all group">
                    <div className="bg-emerald-900/50 p-4 rounded-full mb-6 text-secondary group-hover:text-white group-hover:bg-secondary transition-colors">
                        <Eye size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">{t.company.visionTitle}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {t.company.visionText}
                    </p>
                </div>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-emerald-900/20 hover:bg-emerald-900/40 transition-colors border border-emerald-800 hover:border-emerald-600 group">
              <div className="w-16 h-16 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
