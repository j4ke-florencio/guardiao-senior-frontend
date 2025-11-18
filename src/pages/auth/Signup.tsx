import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { apiSignup } from '../../services/authService'; // Importa a nova função

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false); // Estado de loading
  const [error, setError] = useState<string | null>(null); // Estado de erro
  
  const navigate = useNavigate();
  const { login } = useAuth(); // Pega o 'login' do contexto

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (password !== confirmPassword) {
      setError("As senhas não coincidem!"); // Usa o estado de erro
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      // Chama o SERVIÇO de API
      const userData = await apiSignup(name, email, password);
      
      // Se a API retornar sucesso, chama o CONTEXTO (auto-login)
      login(userData); 
      
      // Navega para a tela de conversas
      navigate('/minhas-conversas');

    } catch (err: any) {
      // Se a API falhar (email já existe, etc.)
      setError(err.message || "Erro desconhecido. Tente novamente.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-guardiao-cinza-escuro mb-6">
        Crie sua conta
      </h1>
      
      {/* Ajustado para 'space-y-6' (como no Login) */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Seu Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="Nome Completo"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Seu Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="seu@email.com"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Sua Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="••••••••"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">Confirme sua Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-guardiao-branco focus:border-guardiao-azul focus:outline-none text-lg text-black"
            placeholder="••••••••"
            required
            disabled={isLoading}
          />
        </div>

        {/* Mostra a mensagem de erro se ela existir */}
        {error && (
          <div className="text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors
                     disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Criando conta...' : 'Cadastrar'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-guardiao-cinza-medio">Já tem conta? </span>
        <Link 
          to="/login" 
          className="text-guardiao-azul hover:underline font-medium"
        >
          Faça Login
        </Link>
      </div>
    </>
  );
}