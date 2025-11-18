import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewPassword() {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    if (code && password) {
      console.log('Password reset successfully');
      navigate('/login');
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-guardiao-cinza-escuro mb-2">
        Crie sua nova senha
      </h1>
      <p className="text-center text-guardiao-cinza-medio mb-6">
        Enviamos um código de 6 dígitos para o seu e-mail. Por favor, insira o código e sua nova senha.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Código de Verificação:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="123456"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Sua nova senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Confirme sua nova senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors"
        >
          Salvar Nova Senha
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link 
          to="#" 
          className="text-guardiao-cinza-medio hover:text-guardiao-azul"
        >
          Não recebeu o código? Reenviar
        </Link>
      </div>
    </>
  );
}