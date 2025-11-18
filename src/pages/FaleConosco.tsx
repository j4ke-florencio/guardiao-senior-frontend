
import React, { useState } from 'react';

export default function FaleConosco() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    setStatus('sending');
    // Mock API call
    setTimeout(() => {
        console.log({ name, email, message });
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Fale Conosco</h1>
          <p className="mt-4 text-xl text-guardiao-cinza-medio">
            Tem alguma dúvida, sugestão ou quer reportar um problema? Estamos aqui para ouvir.
          </p>
        </div>
        
        {status === 'sent' ? (
            <div className="text-center p-6 bg-green-100 text-green-800 rounded-xl">
                <h3 className="text-2xl font-semibold">Mensagem enviada com sucesso!</h3>
                <p>Obrigado pelo seu contato. Responderemos em breve.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Seu nome:</label>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
                required
                />
            </div>
            <div>
                <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Seu email (para podermos responder):</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
                required
                />
            </div>
            <div>
                <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Sua mensagem:</label>
                <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
                required
                />
            </div>
            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            </form>
        )}
      </div>
    </div>
  );
}