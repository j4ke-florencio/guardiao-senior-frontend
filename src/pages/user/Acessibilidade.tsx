import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { ArrowLeft } from 'react-bootstrap-icons'; // 1. Importa o ícone correto

type FontSizeOption = 'Padrão' | 'Grande' | 'Extra Grande';

export default function Acessibilidade() {
  const navigate = useNavigate();
  const { fontSize, setFontSize } = useSettings();

  const options: FontSizeOption[] = ['Padrão', 'Grande', 'Extra Grande'];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="mb-6">
        <button
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-guardiao-azul hover:text-blue-700"
          aria-label="Voltar para Configurações"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Voltar</span>
        </button>
      </div>

      <div className="text-left mb-8">
        <h1 className="text-4xl font-bold text-guardiao-cinza-escuro">Acessibilidade</h1>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-soft">
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-guardiao-cinza-escuro">Tamanho do Texto</h2>
          
          {options.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                id={option}
                name="fontSize"
                value={option}
                checked={fontSize === option}
                onChange={() => setFontSize(option)}
                className="h-5 w-5 text-guardiao-azul focus:ring-guardiao-azul border-gray-300"
              />
              <label htmlFor={option} className="ml-3 block text-lg text-guardiao-cinza-escuro">
                {option}
              </label>
            </div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
}