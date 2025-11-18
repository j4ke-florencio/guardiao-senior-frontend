import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';       
import Footer from '../components/Footer';
import ChatHeader from '../components/ChatHeader'; 
import { useSettings } from '../context/SettingsContext';
import { useChat } from '../context/ChatContext';
import { useAuth } from '../context/AuthContext';    

export default function MainLayout() {
  const { getFontSizeClass } = useSettings();
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const { messages } = useChat();

  const isHomePage = location.pathname === '/';
  
  const isChatActive = isHomePage && messages.length > 0;

  const mainContainerClasses = isChatActive
    ? "flex-1 flex flex-col"
    : "flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8";

  return (
    <div className={`min-h-screen flex flex-col bg-guardiao-cinza-claro font-sans ${getFontSizeClass()}`}>
      
      {isChatActive ? (
        <ChatHeader isAuthenticated={isAuthenticated} />
      ) : (
        <Header />
      )}

      <main className={mainContainerClasses}>
        <Outlet />
      </main>

      {!isChatActive && <Footer />}

    </div>
  );
}