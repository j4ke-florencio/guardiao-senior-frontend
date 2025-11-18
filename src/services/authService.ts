import { User } from '../context/AuthContext'; 

export const apiLogin = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    
    console.log(`[AuthService] Tentando login com: ${email}`);
    
    // Simula uma chamada de API (1 segundo)
    setTimeout(() => {
      // Simulação de sucesso (o backend nos devolve os dados do usuário)
      if (email.includes('@') && password.length > 5) {
        const mockUserData: User = {
          // O backend nos devolve o nome
          name: 'Usuário Logado', 
          email: email,
        };
        resolve(mockUserData);
      } else {
        // Simulação de falha (senha errada)
        reject(new Error("Email ou senha inválidos"));
      }
    }, 1000);

  });
};


export const apiSignup = (name: string, email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    
    console.log(`[AuthService] Tentando cadastro com: ${email}`);
    
    // Simula uma chamada de API (1 segundo)
    setTimeout(() => {
      // Simulação de sucesso (o backend nos devolve o novo usuário)
      if (name && email.includes('@') && password.length > 5) {
        const mockUserData: User = {
          name: name, // O nome que o usuário digitou
          email: email,
        };
        resolve(mockUserData);
      } else {
        // Simulação de falha (ex: email já existe)
        reject(new Error("Não foi possível criar a conta. Tente outro email."));
      }
    }, 1000);

  });
};