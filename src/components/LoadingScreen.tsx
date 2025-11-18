
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center h-full p-4">
      <div className="w-full max-w-2xl p-8 sm:p-12 border-2 border-guardiao-azul rounded-xl bg-guardiao-branco/80 text-center shadow-soft">
        <div className="w-12 h-12 border-4 border-guardiao-azul border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-6 text-2xl text-guardiao-cinza-escuro font-medium">
          Entendido. Estou buscando a melhor resposta para você..
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;