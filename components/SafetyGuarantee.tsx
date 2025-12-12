
import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, Lock, Ban } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface SafetyGuaranteeProps {
  language: Language;
}

const SafetyGuarantee: React.FC<SafetyGuaranteeProps> = ({ language }) => {
  const t = TRANSLATIONS[language].safety;

  return (
    <section className="py-20 bg-[#022c22] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                    <Lock size={14} /> {language === 'es' ? 'Compra Segura' : 'Secure Booking'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                    {t.title}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Left Side: The Risk (Education) */}
                <div className="bg-red-900/10 border border-red-900/30 rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertTriangle size={120} className="text-red-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                        <Ban size={24} /> {t.riskTitle}
                    </h3>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-400">
                            <div className="min-w-[20px] pt-1"><div className="w-2 h-2 rounded-full bg-red-500"></div></div>
                            <span>{t.risk1}</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-400">
                            <div className="min-w-[20px] pt-1"><div className="w-2 h-2 rounded-full bg-red-500"></div></div>
                            <span>{t.risk2}</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-400">
                            <div className="min-w-[20px] pt-1"><div className="w-2 h-2 rounded-full bg-red-500"></div></div>
                            <span>{t.risk3}</span>
                        </li>
                    </ul>
                </div>

                {/* Right Side: The Solution (Trust) */}
                <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-emerald-900/20 transform md:scale-105 transition-transform">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ShieldCheck size={120} className="text-emerald-400" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                        <ShieldCheck size={28} className="text-emerald-400" /> {t.safeTitle}
                    </h3>

                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <div className="bg-emerald-500/20 p-1.5 rounded-full text-emerald-400 mt-1">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <span className="text-white font-medium block text-lg">{t.safe1}</span>
                                <span className="text-sm text-gray-400">{language === 'es' ? 'Sin sorpresas al llegar.' : 'No surprises upon arrival.'}</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-emerald-500/20 p-1.5 rounded-full text-emerald-400 mt-1">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <span className="text-white font-medium block text-lg">{t.safe2}</span>
                                <span className="text-sm text-gray-400">RNT: 145290 (Active License)</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-emerald-500/20 p-1.5 rounded-full text-emerald-400 mt-1">
                                <CheckCircle size={18} />
                            </div>
                            <div>
                                <span className="text-white font-medium block text-lg">{t.safe3}</span>
                                <span className="text-sm text-gray-400">Stripe / PayPal / Wompi Protected</span>
                            </div>
                        </li>
                    </ul>

                    {/* Seal of Trust */}
                    <div className="mt-8 pt-6 border-t border-emerald-800/50 flex items-center justify-between">
                        <div className="text-xs text-gray-500 uppercase tracking-widest">
                            {language === 'es' ? 'Agencia Verificada' : 'Verified Agency'}
                        </div>
                        <div className="flex gap-2 text-yellow-500">
                             <div className="bg-[#051c18] border border-emerald-800 px-3 py-1 rounded text-xs font-bold">SSL SECURE</div>
                             <div className="bg-[#051c18] border border-emerald-800 px-3 py-1 rounded text-xs font-bold">MONEY BACK</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default SafetyGuarantee;
