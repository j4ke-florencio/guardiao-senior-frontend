
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type FontSize = 'Padrão' | 'Grande' | 'Extra Grande';

interface SettingsContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  getFontSizeClass: () => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem('fontSize') as FontSize) || 'Padrão';
  });

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.classList.remove('text-base', 'text-lg', 'text-xl');
    document.documentElement.classList.add(getFontSizeClass());
  }, [fontSize]);

  const getFontSizeClass = (): string => {
    switch (fontSize) {
      case 'Grande':
        return 'text-lg';
      case 'Extra Grande':
        return 'text-xl';
      case 'Padrão':
      default:
        return 'text-base';
    }
  };


  return (
    <SettingsContext.Provider value={{ fontSize, setFontSize, getFontSizeClass }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};