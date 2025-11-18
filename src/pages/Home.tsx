// src/pages/Home.tsx

import React, { useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext'; 
import MessageBubble from '../components/MessageBubble';
import ChatInput from '../components/ChatInput';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const { messages, sendMessage, isLoading } = useChat(); 
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isLoading) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  // 1. ESTADO DE CARREGAMENTO
  if (isLoading) {
    return <LoadingScreen />;
  }

  // 2. LAYOUT DE ESTADO VAZIO (Centralizado)
  // (Este layout já está correto e centralizado)
  if (messages.length === 0) { 
    return (
      <div className="flex flex-col min-h-[calc(100vh-144px)] bg-guardiao-cinza-claro w-full justify-center pb-24"> 
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-guardiao-cinza-escuro mb-2">
              Olá! Sou seu assistente de segurança digital.
            </h1>
            <p className="text-2xl text-guardiao-cinza-medio">
              Como posso ajudar hoje?
            </p>
          </div>

          <div className="w-full">
            <ChatInput onSendMessage={sendMessage} isLoading={isLoading} size="large" />
          </div>
        </div>
      </div>
    );
  }

  // 3. LAYOUT DE CHAT (Input no final)
  return (
    <div className="flex flex-col min-h-[calc(100vh-144px)] bg-guardiao-cinza-claro w-full"> 
      
      {/* Container "Pai" - SEM padding horizontal */}
      <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col pt-8 pb-4"> 
        
        {/* "Filho 1" (Histórico) - PRECISA DE PADDING */}
        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 mb-4 px-4 sm:px-6 lg:px-8">
          
          {messages.map((msg) => (
            <MessageBubble 
              key={msg.id} 
              message={msg}
            />
          ))}
          
          <div ref={messagesEndRef} />
        </div>

        {/* "Filho 2" (Input) - PRECISA DO MESMO PADDING */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} size="large" />
        </div>
      </div>
    </div>
  );
}