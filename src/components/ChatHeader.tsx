import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, GearFill } from 'react-bootstrap-icons';


import logoSenior from '../assets/images/logo-senior.png';
import logoGuardiao from '../assets/images/logo-guardiao.png';

interface ChatHeaderProps {
  isAuthenticated: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-guardiao-branco border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="w-28"> 
            {isAuthenticated && (
              <button
                onClick={() => navigate('/minhas-conversas')} 
                className="flex items-center gap-2 text-guardiao-azul hover:text-blue-700"
                aria-label="Voltar para Minhas Conversas"
              >
                <ArrowLeft size={20} />
                <span className="text-lg font-medium">Voltar</span>
              </button>
            )}
          </div>

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


          <div className="w-28 flex justify-end"> 

            {isAuthenticated ? (
              
              <Link
                to="/configuracoes"
                className="w-12 h-12 flex items-center justify-center rounded-full text-guardiao-cinza-medio hover:bg-gray-200 transition-colors"
                aria-label="Configurações"
              >
                <GearFill size={28} />
              </Link>
            ) : (
             
              <Link
                to="/login"
                className="px-5 py-2 bg-guardiao-azul text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Entrar
              </Link>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default ChatHeader;