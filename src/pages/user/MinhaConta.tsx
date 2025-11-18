import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft } from 'react-bootstrap-icons'; 

export default function MinhaConta() {
  const navigate = useNavigate();
  const { user } = useAuth();

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
        <h1 className="text-4xl font-bold text-guardiao-cinza-escuro">Minha Conta</h1>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-soft">
        <div className="space-y-6 text-lg">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

            <span className="text-guardiao-cinza-medio mb-1 sm:mb-0">Nome:</span>
            <span className="font-medium text-guardiao-cinza-escuro">{user?.name || 'Não informado'}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="text-guardiao-cinza-medio mb-1 sm:mb-0">Email:</span>
            <span className="font-medium text-guardiao-cinza-escuro break-all">{user?.email || 'Não informado'}</span>
          </div>
          
          <hr className="my-4"/>
          <Link to="/nova-senha" className="block text-center w-full py-3 text-guardiao-azul font-semibold rounded-xl hover:bg-blue-50 transition-colors">
            Alterar Senha
          </Link>
        </div>
      </div>
      
    </div>
  );
}