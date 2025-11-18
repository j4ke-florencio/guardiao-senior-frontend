import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto flex flex-row flex-wrap justify-center items-center h-16 px-4 gap-x-6 gap-y-2">
        <Link to="/termos-de-uso" className="text-sm text-gray-600 hover:text-blue-600">
          Termos de Uso
        </Link>
        <Link to="/fale-conosco" className="text-sm text-gray-600 hover:text-blue-600">
          Fale Conosco
        </Link>
      </div>
    </footer>
  );
};

export default Footer;