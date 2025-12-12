import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedTours from './components/FeaturedTours';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import PracticalInfo from './components/PracticalInfo';
import InteractiveMap from './components/InteractiveMap';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import AiChatAssistant from './components/AiChatAssistant';
import SmartPlanner from './components/SmartPlanner';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  // Detect Language
  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0];
    if (userLang.startsWith('es')) {
      setLanguage('es');
      console.log('[App] Language detected: Spanish');
    } else {
      console.log('[App] Language detected: English');
    }

    // Analytics Mock
    const referrer = document.referrer;
    console.log(`[Analytics] Visit started. Referrer: ${referrer || 'Direct'}`);
  }, []);

  return (
    <div className="antialiased text-gray-900 font-sans">
      {/* 2. Minimalist Navigation */}
      <Navigation language={language} />
      
      {/* 1. Hero Header */}
      <Hero language={language} />
      
      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* NEW: AI Smart Planner V2 */}
      <SmartPlanner language={language} />
      
      {/* 3. Featured Tours */}
      <FeaturedTours />
      
      {/* 5. Testimonials */}
      <Testimonials />
      
      {/* 8. Interactive Tour Map */}
      <InteractiveMap />
      
      {/* 6. Practical Info */}
      <PracticalInfo />
      
      {/* 7. Reservation Form */}
      <ReservationForm />
      
      {/* Footer */}
      <Footer />

      {/* AI Chat */}
      <AiChatAssistant />
    </div>
  );
}

export default App;