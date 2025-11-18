import React from 'react';


interface ResourceCardProps {
  onClick: () => void; 
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ onClick, icon, title, description }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-white p-6 rounded-xl shadow-soft h-full flex flex-col text-left
                 border-2 border-transparent hover:border-guardiao-azul 
                 hover:shadow-lg transition-all duration-200 group"
    >
      
      <div className="mb-4">
        <div className="w-16 h-16 bg-guardiao-azul text-white rounded-full flex items-center justify-center">
          {React.cloneElement(icon, { size: 32 })} 
        </div>
      </div>

      <h3 className="text-2xl font-bold text-guardiao-cinza-escuro mb-2">
        {title}
      </h3>

      <p className="text-lg text-guardiao-cinza-medio flex-1">
        {description}
      </p>

      
    </button>
  );
};

export default ResourceCard;