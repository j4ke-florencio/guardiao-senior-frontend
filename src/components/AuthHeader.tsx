import React from 'react';
import { useNavigate } from 'react-router-dom'; // Removido 'Link'
import { ArrowLeft } from 'react-bootstrap-icons';

// Importar os logos
import logoSenior from '../assets/images/logo-senior.png';
import logoGuardiao from '../assets/images/logo-guardiao.png';

// Removida a interface 'AuthHeaderProps' e a prop 'backTo'
const AuthHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-guardiao-branco border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Botão Voltar */}
          <div className="w-28 flex items-center">
            <button
                // CORREÇÃO: Usa navigate(-1) para voltar para a página anterior
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 text-guardiao-azul hover:text-blue-700"
                aria-label="Voltar"
            >
              <ArrowLeft size={20} />
              <span className="text-lg font-medium">Voltar</span>
            </button>
          </div>

          {/* Logos (Centralizados) */}
          <div className="flex items-center gap-3">
            <img
              src={logoSenior}
              alt=""
              aria-hidden="true"
              className="h-14 w-14"
            />
            <img
              src={logoGuardiao}
              alt="Guardião Sênior"
              className="h-10"
            />
          </div>

          {/* Espaçador para centralizar o logo */}
          <div className="w-28"></div> 

        </div>
      </div>
    </header>
  );
};

export default AuthHeader;