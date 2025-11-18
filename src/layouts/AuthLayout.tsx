import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthHeader from '../components/AuthHeader'; 
import Footer from '../components/Footer';
import { useSettings } from '../context/SettingsContext';

export default function AuthLayout() {
  const { getFontSizeClass } = useSettings();

  return (
    <div className={`min-h-screen flex flex-col bg-guardiao-cinza-claro font-sans ${getFontSizeClass()}`}>
      
      <AuthHeader /> 

      <main className="flex-1 flex items-center justify-center p-4">
        
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-soft w-full max-w-md">
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}