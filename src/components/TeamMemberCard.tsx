import React from 'react';
import { PersonCircle } from 'react-bootstrap-icons'; 

interface TeamMemberCardProps {
  name: string;
  role: string;
  imgSrc?: string; 
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imgSrc }) => {
  return (
    <div className="flex flex-col items-center text-center w-52">
      
      <div className="w-36 h-36 rounded-full mb-4 bg-gray-200 flex items-center justify-center overflow-hidden">
        {imgSrc ? (
          <img 
            src={imgSrc} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <PersonCircle size={90} className="text-gray-400" />
        )}
      </div>
      
      <h3 className="text-xl font-bold text-guardiao-cinza-escuro">
        {name}
      </h3>
      
      <p className="text-base text-guardiao-cinza-medio">
        {role}
      </p>
    </div>
  );
};

export default TeamMemberCard;