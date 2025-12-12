
import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import Logo from './Logo';

const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen, login } = useData();
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleGoogleLogin = () => {
    setLoading(true);
    // Simulate Google Auth Delay
    setTimeout(() => {
      login({
        name: 'Viajero EcoExplora',
        email: 'traveler@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
      });
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate Email Auth Delay
    setTimeout(() => {
      login({
        name: 'Nuevo Usuario',
        email: 'usuario@ecoexplora.com',
        // No avatar for email login simulation
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setAuthModalOpen(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#051c18] border border-emerald-800 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-white/5 p-2 rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
               <Logo className="h-10" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mb-2">
              {isLogin ? 'Bienvenido de nuevo' : 'Únete a EcoExplora'}
            </h2>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Accede a tus reservas y descuentos exclusivos.' : 'Crea una cuenta y obtén 20% OFF en tu primer tour.'}
            </p>
          </div>

          {/* Google Button */}
          <button 
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-3 mb-6 shadow-lg transform hover:scale-[1.02]"
          >
            {loading ? (
               <Loader2 className="animate-spin text-gray-900" size={20} />
            ) : (
               <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
               </svg>
            )}
            {isLogin ? 'Iniciar sesión con Google' : 'Registrarse con Google'}
          </button>

          <div className="relative flex py-2 items-center mb-6">
            <div className="flex-grow border-t border-emerald-800"></div>
            <span className="flex-shrink-0 mx-4 text-emerald-700 text-xs uppercase tracking-wider">O usa tu email</span>
            <div className="flex-grow border-t border-emerald-800"></div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500" size={18} />
              <input 
                type="email" 
                placeholder="correo@ejemplo.com"
                required
                className="w-full bg-emerald-900/30 border border-emerald-800 text-white pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none placeholder-emerald-700 transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                required
                className="w-full bg-emerald-900/30 border border-emerald-800 text-white pl-12 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none placeholder-emerald-700 transition-all"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? 'Procesando...' : (
                <>
                  {isLogin ? 'Ingresar' : 'Crear Cuenta'} <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Footer Toggle */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              {isLogin ? '¿Aún no tienes cuenta?' : '¿Ya tienes cuenta?'}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-secondary font-bold hover:underline focus:outline-none"
              >
                {isLogin ? 'Regístrate' : 'Inicia Sesión'}
              </button>
            </p>
          </div>
        </div>
        
        {/* Decorative Bottom Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-800 via-secondary to-emerald-800"></div>
      </div>
    </div>
  );
};

export default AuthModal;
