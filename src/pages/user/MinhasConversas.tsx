import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus } from 'react-bootstrap-icons';
import { useAuth } from '../../context/AuthContext';
import { useChat } from '../../context/ChatContext'; 

interface Conversation {
  id: string;
  title: string;
  lastUpdate: string;
}

// Simulação de dados
const MOCK_CONVERSATIONS: Conversation[] = [
  { id: '1', title: 'O banco me ligou pedindo a senha', lastUpdate: 'Hoje' },
  { id: '2', title: 'Recebi um link estranho no WhatsApp', lastUpdate: 'Ontem' },
  { id: '3', title: 'Boleto falso da conta de luz', lastUpdate: '14/11/2025' },
];

export default function MinhasConversas() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { clearChat } = useChat(); 
  
  const [conversations, setConversations] = useState<Conversation[]>(MOCK_CONVERSATIONS); 

  const handleNewChat = () => {
    clearChat(); 
    navigate('/'); 
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-soft min-h-[calc(100vh-200px)]">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-guardiao-cinza-escuro">
            Minhas conversas
          </h1>
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 px-4 py-2 bg-guardiao-azul text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={24} />
            Novo Chat
          </button>
        </div>

        {conversations.length === 0 ? (
          <div className="text-center text-guardiao-cinza-medio text-lg py-12">
            <p className="mb-4">Você ainda não tem nenhuma conversa</p>
            <p>
              Clique no botão <strong>"Novo Chat +"</strong> acima para fazer sua primeira pergunta.
            </p>
          </div>
        ) : (
          // ESTADO DE CONVERSA CHEIA
          <div className="space-y-4">
            {conversations.map((convo) => (
              <Link
                to={`/chat/${convo.id}`} 
                key={convo.id}
                className="block w-full p-4 bg-guardiao-cinza-claro rounded-lg border-2 border-transparent hover:border-guardiao-azul transition-colors"
              >
                <p className="font-semibold text-lg text-guardiao-cinza-escuro truncate">
                  {convo.title}
                </p>
                <span className="text-sm text-guardiao-cinza-medio">
                  {convo.lastUpdate}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}