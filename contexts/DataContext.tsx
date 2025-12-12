
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tour, Island } from '../types';
import { TOURS, ISLANDS_DATA } from '../constants';

interface DataContextType {
  tours: Tour[];
  islands: Island[];
  updateTour: (id: string, updatedTour: Partial<Tour>) => void;
  updateIsland: (id: string, updatedIsland: Partial<Island>) => void;
  resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [islands, setIslands] = useState<Island[]>([]);

  // Load from LocalStorage or Constants on mount
  useEffect(() => {
    const savedTours = localStorage.getItem('ecoexplorer_tours');
    const savedIslands = localStorage.getItem('ecoexplorer_islands');

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
  }, []);

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    if (tours.length > 0) localStorage.setItem('ecoexplorer_tours', JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    if (islands.length > 0) localStorage.setItem('ecoexplorer_islands', JSON.stringify(islands));
  }, [islands]);

  const updateTour = (id: string, updatedTour: Partial<Tour>) => {
    setTours(prev => prev.map(t => t.id === id ? { ...t, ...updatedTour } : t));
  };

  const updateIsland = (id: string, updatedIsland: Partial<Island>) => {
    setIslands(prev => prev.map(i => i.id === id ? { ...i, ...updatedIsland } : i));
  };

  const resetData = () => {
    setTours(TOURS);
    setIslands(ISLANDS_DATA);
    localStorage.removeItem('ecoexplorer_tours');
    localStorage.removeItem('ecoexplorer_islands');
    window.location.reload();
  };

  return (
    <DataContext.Provider value={{ tours, islands, updateTour, updateIsland, resetData }}>
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
