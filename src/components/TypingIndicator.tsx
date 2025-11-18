
import React from 'react';
import LogoIcon from './icons/LogoIcon';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-end gap-3 self-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-guardiao-cinza-claro flex items-center justify-center">
            <LogoIcon className="w-6 h-6 text-guardiao-cinza-medio"/>
        </div>
        <div className="bg-guardiao-branco text-guardiao-cinza-escuro px-5 py-4 rounded-xl shadow-soft flex items-center gap-2">
            <span className="w-2 h-2 bg-guardiao-cinza-medio rounded-full animate-bounce delay-0"></span>
            <span className="w-2 h-2 bg-guardiao-cinza-medio rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-guardiao-cinza-medio rounded-full animate-bounce delay-300"></span>
        </div>
    </div>
  );
};

export default TypingIndicator;