import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Mock sending code
      console.log(`Sending verification code to ${email}`);
      navigate('/nova-senha');
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-guardiao-cinza-escuro mb-2">
        Restaurar sua senha
      </h1>
      <p className="text-center text-guardiao-cinza-medio mb-6">
        Não se preocupe! Digite seu e-mail e enviaremos um código para você criar uma nova senha.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">
            Seu Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="seu@email.com"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
          Enviar Código de Verificação
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link 
          to="/login" 
          className="text-guardiao-azul hover:underline"
        >
          Lembrou a senha? Voltar para o Login
        </Link>
      </div>
    </>
  );
}