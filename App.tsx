import React, { useEffect } from 'react';
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

function App() {
  
  // 10. Performance Analytics Mock
  useEffect(() => {
    // Determine user flow source (mock)
    const referrer = document.referrer;
    console.log(`[Analytics] Visit started. Referrer: ${referrer || 'Direct'}`);

    // Track scroll depth or time on page could go here
    return () => {
      console.log('[Analytics] Visit ended.');
    };
  }, []);

  return (
    <div className="antialiased text-gray-900 font-sans">
      {/* 2. Minimalist Navigation */}
      <Navigation />
      
      {/* 1. Hero Header */}
      <Hero />
      
      {/* 4. Why Choose Us (High conversion impact, placed early) */}
      <WhyChooseUs />

      {/* NEW: AI Smart Planner */}
      <SmartPlanner />
      
      {/* 3. Featured Tours (Now with Eco-Badges) */}
      <FeaturedTours />
      
      {/* 5. Testimonials & Social Proof */}
      <Testimonials />
      
      {/* 8. Interactive Tour Map */}
      <InteractiveMap />
      
      {/* 6. Practical Tour Information */}
      <PracticalInfo />
      
      {/* 7. Reservation/Lead Capture */}
      <ReservationForm />
      
      {/* Footer */}
      <Footer />

      {/* Bonus: AI Chat for conversion optimization */}
      <AiChatAssistant />
    </div>
  );
}

export default App;