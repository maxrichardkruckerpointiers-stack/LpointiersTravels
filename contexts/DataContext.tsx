
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, Island, User } from '../types';
import { TOURS, ISLANDS_DATA } from '../constants';

interface SiteConfig {
  logoUrl: string;
}

interface DataContextType {
  tours: Tour[];
  islands: Island[];
  siteConfig: SiteConfig;
  user: User | null;
  isAuthModalOpen: boolean;
  updateTour: (id: string, updatedTour: Partial<Tour>) => void;
  updateIsland: (id: string, updatedIsland: Partial<Island>) => void;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  resetData: () => void;
  login: (userData: User) => void;
  logout: () => void;
  setAuthModalOpen: (isOpen: boolean) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [islands, setIslands] = useState<Island[]>([]);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({ logoUrl: '' });
  
  // Auth State
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  // Load from LocalStorage or Constants on mount
  useEffect(() => {
    const savedTours = localStorage.getItem('ecoexplorer_tours');
    const savedIslands = localStorage.getItem('ecoexplorer_islands');
    const savedConfig = localStorage.getItem('ecoexplorer_config');
    const savedUser = localStorage.getItem('ecoexplorer_user');

    if (savedTours) {
      setTours(JSON.parse(savedTours));
    } else {
      setTours(TOURS);
    }

    if (savedIslands) {
      setIslands(JSON.parse(savedIslands));
    } else {
      setIslands(ISLANDS_DATA);
    }

    if (savedConfig) {
      setSiteConfig(JSON.parse(savedConfig));
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    if (tours.length > 0) localStorage.setItem('ecoexplorer_tours', JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    if (islands.length > 0) localStorage.setItem('ecoexplorer_islands', JSON.stringify(islands));
  }, [islands]);

  useEffect(() => {
    localStorage.setItem('ecoexplorer_config', JSON.stringify(siteConfig));
  }, [siteConfig]);

  // Auth Methods
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('ecoexplorer_user', JSON.stringify(userData));
    setAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ecoexplorer_user');
  };

  const updateTour = (id: string, updatedTour: Partial<Tour>) => {
    setTours(prev => prev.map(t => t.id === id ? { ...t, ...updatedTour } : t));
  };

  const updateIsland = (id: string, updatedIsland: Partial<Island>) => {
    setIslands(prev => prev.map(i => i.id === id ? { ...i, ...updatedIsland } : i));
  };

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setSiteConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetData = () => {
    setTours(TOURS);
    setIslands(ISLANDS_DATA);
    setSiteConfig({ logoUrl: '' });
    localStorage.removeItem('ecoexplorer_tours');
    localStorage.removeItem('ecoexplorer_islands');
    localStorage.removeItem('ecoexplorer_config');
    window.location.reload();
  };

  return (
    <DataContext.Provider value={{ 
      tours, islands, siteConfig, user, isAuthModalOpen,
      updateTour, updateIsland, updateConfig, resetData, 
      login, logout, setAuthModalOpen 
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
