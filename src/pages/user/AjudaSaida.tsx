import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useChat } from '../../context/ChatContext'; // 1. IMPORTA O USECHAT
import SettingsCard from '../../components/SettingsCard'; 
import { 
  ArrowLeft,
  ChatTextFill,
  FileEarmarkTextFill,
  QuestionCircleFill
} from 'react-bootstrap-icons'; 

export default function AjudaSaida() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { clearChat } = useChat(); // 2. PEGA A FUNÇÃO

  const handleLogout = () => {
    logout();
    clearChat(); // 3. CHAMA A FUNÇÃO DE LIMPAR
    navigate('/'); 
  };

  return (
    // ... (o resto do seu JSX continua igual)
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
        <h1 className="text-4xl font-bold text-guardiao-cinza-escuro">Ajuda e Saída</h1>
      </div>
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-soft">
        <div className="space-y-4">
          <SettingsCard
            to="/fale-conosco"
            title="Fale Conosco"
            icon={<ChatTextFill />}
          />
          <SettingsCard
            to="/termos-de-uso"
            title="Termos de Uso"
            icon={<FileEarmarkTextFill />}
          />
          <SettingsCard
            to="/como-funciona"
            title="Como Funciona"
            icon={<QuestionCircleFill />}
          />
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-12 py-3 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition-colors"
        >
          Sair da Conta
        </button>
      </div>
    </div>
  );
}