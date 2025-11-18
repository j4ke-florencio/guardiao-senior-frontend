import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { apiLogin } from '../../services/authService'; // 1. Importa a função da API

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado de loading
  const [error, setError] = useState<string | null>(null); // Estado de erro
  
  const navigate = useNavigate();
  const { login } = useAuth(); // Pega o 'login' do contexto

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return; // Não faz nada se já estiver carregando

    setIsLoading(true);
    setError(null);

    try {
      // 2. Chama o SERVIÇO de API (não o contexto)
      const userData = await apiLogin(email, password);
      
      // 3. Se a API retornar sucesso, chama o CONTEXTO
      login(userData); 
      
      // 4. Navega para a tela de conversas
      navigate('/minhas-conversas');

    } catch (err: any) {
      // 5. Se a API falhar (senha errada, etc.)
      setError(err.message || "Erro desconhecido. Tente novamente.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-guardiao-cinza-escuro mb-6">
        Acessar sua conta
      </h1>
      
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
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2 text-guardiao-cinza-escuro">
            Sua Senha:
          </label>
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

        {/* 6. Mostra a mensagem de erro se ela existir */}
        {error && (
          <div className="text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading} // Desabilita o botão durante o loading
          className="w-full py-4 bg-guardiao-azul text-white text-lg font-semibold rounded-xl hover:bg-blue-600 transition-colors
                     disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {/* 7. Mostra 'Entrando...' durante o loading */}
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link 
          to="/esqueci-senha" 
          className="text-guardiao-azul hover:underline"
        >
          Esqueci a senha
        </Link>
      </div>

      <div className="mt-4 text-center">
        <span className="text-guardiao-cinza-medio">Não tem conta? </span>
        <Link 
          to="/cadastro" 
          className="text-guardiao-azul hover:underline font-medium"
        >
          Cadastre-se
        </Link>
      </div>
    </>
  );
}