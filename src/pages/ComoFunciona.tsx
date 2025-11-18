import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from '../components/MessageBubble'; 
import logoSenior from '../assets/images/logo-senior.png'; 



interface FauxMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
}


const COMO_FUNCIONA_MESSAGES: FauxMessage[] = [
  { id: 'cf1', sender: 'assistant', text: 'Olá! Que bom te ver aqui. Eu sou o Guardião Sênior, seu assistente de segurança digital.' },
  { id: 'cf2', sender: 'assistant', text: 'Muitas pessoas me perguntam: "Como você funciona?"' },
  { id: 'cf3', sender: 'assistant', text: 'É bem simples! Vou te mostrar em 3 passos como eu protejo você na internet.' },
  
  { id: 'cf4', sender: 'assistant', text: '**Passo 1: Você faz a pergunta.**' },
  { id: 'cf5', sender: 'assistant', text: 'Na página inicial, você pode digitar sua dúvida (como "Recebi um link estranho, é golpe?") ou tocar no ícone de microfone para perguntar com sua voz, da mesma forma que você já faz no WhatsApp.' },
  
  { id: 'cf6', sender: 'assistant', text: '**Passo 2: Nós analisamos para você.**' },
  { id: 'cf7', sender: 'assistant', text: 'Nosso assistente de inteligência artificial lê sua pergunta e compara sua situação com milhares de golpes e regras de segurança. Ele foi treinado para identificar táticas de golpistas.' },
  
  { id: 'cf8', sender: 'assistant', text: '**Passo 3: Você recebe uma orientação clara.**' },
  { id: 'cf9', sender: 'assistant', text: 'Em segundos, você recebe uma resposta em português claro, explicando se aquilo é um golpe, o que você deve fazer para se proteger e quais são os seus direitos. Simples e seguro.' },
  
  { id: 'cf10', sender: 'assistant', text: 'Viu como é fácil? Eu estou aqui para te ajudar a navegar na internet com mais segurança.' },
  { id: 'cf11', sender: 'assistant', text: 'Quer testar? Volte para a página inicial e me faça uma pergunta!' },
];



export default function ComoFunciona() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<FauxMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentStep < COMO_FUNCIONA_MESSAGES.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, COMO_FUNCIONA_MESSAGES[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    scrollToBottom();
  }, [displayedMessages]);

  const handleNextStep = () => {
    if (currentStep < COMO_FUNCIONA_MESSAGES.length) {
      setDisplayedMessages((prev) => [...prev, COMO_FUNCIONA_MESSAGES[currentStep]]);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const showContinueButton = currentStep < COMO_FUNCIONA_MESSAGES.length;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-soft w-full max-w-2xl flex flex-col h-[calc(100vh-280px)]">
        
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 mb-4">
          {displayedMessages.map((msg) => (
            <MessageBubble 
              key={msg.id} 
              message={msg}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Botão de Continuar (simula o input do usuário) */}
        {showContinueButton && (
          <div className="flex-shrink-0 mt-4">
            <button
              onClick={handleNextStep}
              className="w-full py-3 bg-guardiao-azul text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}