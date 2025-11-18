import React from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsCard from '../../components/SettingsCard'; // 1. Importa o novo componente
import { 
  ArrowLeft, 
  PersonCircle, 
  UniversalAccess, 
  BoxArrowRight 
} from 'react-bootstrap-icons'; // 2. Importa os ícones

export default function Configuracoes() {
  const navigate = useNavigate();

  return (
    // Usa o container centralizado do MainLayout
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* 3. Botão "Voltar" (Melhorado) */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)} // Volta para a página anterior (o chat)
          className="flex items-center gap-2 text-guardiao-azul hover:text-blue-700"
          aria-label="Voltar"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Voltar</span>
        </button>
      </div>

      {/* Cabeçalho da Página */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-guardiao-cinza-escuro mb-2">
          Configurações
        </h1>
        <p className="text-xl text-guardiao-cinza-medio">
          Gerencie sua conta, preferências e saia com segurança.
        </p>
      </div>

      {/* 4. Links de Navegação (Agora como Cards) */}
      <div className="space-y-4">
        <SettingsCard
          to="/minha-conta"
          title="Minha Conta"
          icon={<PersonCircle />}
        />
        <SettingsCard
          to="/acessibilidade"
          title="Acessibilidade"
          icon={<UniversalAccess />}
        />
        <SettingsCard
          to="/ajuda-e-saida" // Esta página deve ter o botão de "Sair"
          title="Ajuda e Saída"
          icon={<BoxArrowRight />}
        />
      </div>

    </div>
  );
}