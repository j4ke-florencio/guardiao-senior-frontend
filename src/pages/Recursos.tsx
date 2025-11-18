import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../context/ChatContext'; 
import ResourceCard from '../components/ResourceCard';
import { 
  ShieldLock, 
  Whatsapp, 
  KeyFill, 
  PeopleFill, 
  Cart4, 
  PhoneFill 
} from 'react-bootstrap-icons';

export default function Recursos() {
  const navigate = useNavigate();
  const { sendMessage } = useChat(); 

  const handleResourceClick = (prompt: string) => {
    sendMessage(prompt); 
    navigate('/');      
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-guardiao-cinza-escuro mb-4">
          Recursos
        </h1>
        <p className="text-2xl text-guardiao-cinza-medio max-w-3xl mx-auto">
          Um guia de consulta rápida. Clique em um tópico para iniciar a conversa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <ResourceCard 
          onClick={() => handleResourceClick("Me fale sobre os golpes mais comuns")}
          icon={<ShieldLock />}
          title="Golpes Mais Comuns"
          description="Aprenda a identificar os golpes de phishing, falsos prêmios e boletos falsos."
        />

        <ResourceCard 
          onClick={() => handleResourceClick("Quais são as dicas de segurança no WhatsApp?")}
          icon={<Whatsapp />}
          title="Dicas de Segurança no WhatsApp"
          description="Configure a verificação em duas etapas e saiba como não cair em golpes pelo app."
        />

        <ResourceCard 
          onClick={() => handleResourceClick("Como posso criar senhas fortes?")}
          icon={<KeyFill />}
          title="Como Criar Senhas Fortes"
          description="Dicas para criar e gerenciar senhas que protegem suas contas de verdade."
        />

        <ResourceCard 
          onClick={() => handleResourceClick("Como me proteger em redes sociais?")}
          icon={<PeopleFill />}
          title="Segurança em Redes Sociais"
          description="Proteja suas informações pessoais no Facebook, Instagram e outras redes."
        />

        <ResourceCard 
          onClick={() => handleResourceClick("Quais cuidados devo ter com compras online?")}
          icon={<Cart4 />}
          title="Cuidado com Compras Online"
          description="Verifique a reputação de lojas online e saiba como identificar sites falsos."
        />

        <ResourceCard 
          onClick={() => handleResourceClick("Como proteger meu celular contra invasores?")}
          icon={<PhoneFill />}
          title="Protegendo seu Celular"
          description="Dicas essenciais para manter seu smartphone seguro contra invasores e malwares."
        />

      </div>
    </div>
  );
}