// src/index.tsx
// (Este é o ponto de entrada, ele NUNCA muda)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

// Pega a <div id="root"> do index.html e inicia o React dentro dela
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);