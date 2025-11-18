import React from 'react';
import AppRoutes from './routes';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <ChatProvider>
          <AppRoutes />
        </ChatProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;