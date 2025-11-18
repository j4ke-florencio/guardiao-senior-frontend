import React from 'react';
import logoSenior from '../assets/images/logo-senior.png';
import { marked } from 'marked'; // Importar marked
import DOMPurify from 'dompurify'; // Importar DOMPurify

// Tipo 'Message' (ajuste 'assistant' ou 'bot' conforme seu app)
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant' | 'bot'; 
  timestamp?: Date;
}

interface MessageBubbleProps {
  message: Message;
}

// Configurar o marked
marked.setOptions({
  breaks: true, // Adiciona <br> em quebras de linha simples
  gfm: true,
});

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user'; 

  const bubbleClasses = isUser
    ? "bg-guardiao-azul text-white self-end rounded-2xl rounded-br-none"
    : "bg-white text-guardiao-cinza-escuro self-start rounded-2xl rounded-bl-none";

  const containerClasses = isUser
    ? "flex justify-end"
    : "flex justify-start";

  // Função para processar o markdown e sanitizar
  const createMarkup = (text: string) => {
    // 1. Converte Markdown para HTML
    const rawMarkup = marked.parse(text) as string; 
    // 2. Sanitiza o HTML para prevenir XSS
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitizedMarkup };
  };

  return (
    <div className={`${containerClasses} max-w-[80%]`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-3 mt-1">
          <img 
            src={logoSenior} 
            alt="Logo Guardião Sênior" 
            className="h-10 w-10 rounded-full"
          />
        </div>
      )}
      {/* CORREÇÃO: 
        1. Usando dangerouslySetInnerHTML para renderizar o HTML.
        2. Removido 'whitespace-pre-wrap' (não é mais necessário).
      */}
      <div 
        className={`p-4 shadow-md text-lg break-words ${bubbleClasses}`}
        dangerouslySetInnerHTML={createMarkup(message.text)}
      />
    </div>
  );
};

export default MessageBubble;