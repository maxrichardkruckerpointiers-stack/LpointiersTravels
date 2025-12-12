
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedTours from './components/FeaturedTours';
import RosarioIslands from './components/RosarioIslands';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import PracticalInfo from './components/PracticalInfo';
import InteractiveMap from './components/InteractiveMap';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import AiChatAssistant from './components/AiChatAssistant';
import SmartPlanner from './components/SmartPlanner';
import TopBanner from './components/TopBanner';
import LoyaltyProgram from './components/LoyaltyProgram';
import AdminPanel from './components/AdminPanel';
import { Language } from './types';
import { DataProvider } from './contexts/DataContext';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdminDevice, setIsAdminDevice] = useState(false);

  // Detect Language
  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0];
    if (userLang.startsWith('es')) {
      setLanguage('es');
    }
  }, []);

  // SEGURIDAD: Detectar "Llave Maestra" para activar modo administrador
  useEffect(() => {
    // 1. Revisar si ya está activado en este navegador
    const isUnlocked = localStorage.getItem('ecoexplorer_admin_unlocked') === 'true';
    
    // 2. Revisar si la URL tiene la llave maestra (ej: ?admin=activar)
    const params = new URLSearchParams(window.location.search);
    const adminParam = params.get('admin');

    if (adminParam === 'activar') {
      // Si escriben la clave, guardamos el permiso y limpiamos la URL para que nadie la vea
      localStorage.setItem('ecoexplorer_admin_unlocked', 'true');
      setIsAdminDevice(true);
      // Limpiar la URL sin recargar
      window.history.replaceState({}, document.title, window.location.pathname);
      alert("¡Modo Administrador Activado! Ahora verás el botón de acceso en el pie de página.");
    } else if (isUnlocked) {
      // Si ya estaba desbloqueado antes
      setIsAdminDevice(true);
    } else {
      setIsAdminDevice(false);
    }
  }, []);

  return (
    <DataProvider>
      <div className="antialiased text-gray-900 font-sans">
        {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}
        
        {/* 0. Top Banner Offer */}
        <TopBanner language={language} />

        {/* 2. Minimalist Navigation */}
        <Navigation language={language} />
        
        {/* 1. Hero Header */}
        <Hero language={language} />
        
        {/* === SECTION 1: CATALOG === */}
        {/* 3. Featured Tours */}
        <FeaturedTours />

        {/* NEW: Rosario Islands Specific Section */}
        <RosarioIslands language={language} />
        
        {/* 8. Interactive Tour Map (Fits well with Catalog) */}
        <InteractiveMap />

        {/* === SECTION 2: AI PLANNER === */}
        {/* NEW: AI Smart Planner V2 */}
        <SmartPlanner language={language} />

        {/* === SECTION 3: CONTACT & INFO === */}
        {/* 6. Practical Info */}
        <PracticalInfo />
        
        {/* 7. Reservation Form (With Promo Code) */}
        <ReservationForm language={language} />
        
        {/* === SECTION 4: REVIEWS & LOYALTY === */}
        {/* 5. Testimonials */}
        <Testimonials />

        {/* NEW: Loyalty Program (Points for reviews) */}
        <LoyaltyProgram language={language} />
        
        {/* === SECTION 5: PHILOSOPHY === */}
        {/* 4. Why Choose Us (Philosophy/Mission/Vision) */}
        <WhyChooseUs language={language} />

        {/* Footer with Admin Trigger - SOLO VISIBLE SI ESTÁ DESBLOQUEADO */}
        <Footer onAdminClick={isAdminDevice ? () => setShowAdminPanel(true) : undefined} />

        {/* AI Chat */}
        <AiChatAssistant />
      </div>
    </DataProvider>
  );
}

export default App;
