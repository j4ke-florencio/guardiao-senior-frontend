import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-bootstrap-icons';

interface SettingsCardProps {
  to: string;
  title: string;
  icon: React.ReactElement; // Para passar <PersonCircle />, etc.
}

const SettingsCard: React.FC<SettingsCardProps> = ({ to, title, icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-between w-full p-6 bg-white rounded-xl shadow-soft 
                 border-2 border-transparent hover:border-guardiao-azul 
                 transition-colors group"
    >
      {/* Lado Esquerdo: Ícone + Título */}
      <div className="flex items-center">
        {/* Clona o ícone e adiciona cor e tamanho */}
        {React.cloneElement(icon, { size: 28, className: "text-guardiao-azul" })}
        
        <span className="text-xl font-medium text-guardiao-cinza-escuro ml-4">
          {title}
        </span>
      </div>
      
      {/* Lado Direito: Seta (Affordance) */}
      <ChevronRight size={24} className="text-guardiao-cinza-medio group-hover:text-guardiao-azul" />
    </Link>
  );
};

export default SettingsCard;