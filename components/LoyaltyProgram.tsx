import React from 'react';
import { Star, Gift, Ticket, Award } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface LoyaltyProgramProps {
  language: Language;
}

const LoyaltyProgram: React.FC<LoyaltyProgramProps> = ({ language }) => {
  const t = TRANSLATIONS[language].loyalty;

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 to-emerald-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-secondary rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-yellow-300 font-bold mb-4 border border-white/10">
                <Award size={18} /> L-Points Rewards
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{t.title}</h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-4 text-blue-200">
                    <Ticket size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.step1Title}</h3>
                <p className="text-gray-300">{t.step1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-yellow-500/30 rounded-full flex items-center justify-center mb-4 text-yellow-200">
                    <Star size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.step2Title}</h3>
                <p className="text-gray-300">{t.step2Desc}</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-emerald-500/30 rounded-full flex items-center justify-center mb-4 text-emerald-200">
                    <Gift size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.step3Title}</h3>
                <p className="text-gray-300">{t.step3Desc}</p>
            </div>
          </div>

          <div className="mt-12 text-center relative z-10">
            <a href="#experiences" className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-orange-500/40 transition-all">
                {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;