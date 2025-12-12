import React from 'react';
import { ShieldCheck, UserCheck, CalendarCheck, MapPin } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <UserCheck size={32} />,
      title: "Local Expert Guides",
      description: "Our guides are certified locals who share the hidden stories you won't find in guidebooks."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Safety First",
      description: "Fully insured tours with vetted partners and 24/7 support for your peace of mind."
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "Immediate Availability",
      description: "Easy online booking with instant confirmation. Last minute plans? We've got you covered."
    },
    {
      icon: <MapPin size={32} />,
      title: "Personalized Experience",
      description: "Small groups or private options ensuring you get the attention you deserve."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
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