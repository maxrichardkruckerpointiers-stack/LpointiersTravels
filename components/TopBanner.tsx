import React, { useState } from 'react';
import { X, Tag } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface TopBannerProps {
  language: Language;
}

const TopBanner: React.FC<TopBannerProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(true);
  const t = TRANSLATIONS[language].banner;

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-secondary-dark via-secondary to-secondary-dark text-white py-2 px-4 relative z-[60] shadow-md animate-fade-in-up">
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm font-medium">
        <div className="flex items-center gap-2">
            <Tag size={16} className="text-yellow-200 animate-pulse" />
            <span>{t.text}</span>
        </div>
        <div className="bg-white/20 px-3 py-1 rounded-full border border-white/30 tracking-wider font-bold text-yellow-100">
            {t.code}
        </div>
        <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label={t.dismiss}
        >
            <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;