const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

if (!BACKEND_API_URL) {
  throw new Error("VITE_BACKEND_API_URL não está definida no .env.local");
}


export const getChatResponse = async (text: string): Promise<string> => {
  try {
    const response = await fetch(BACKEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API do Backend: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.response) {
      throw new Error("Formato de resposta da API inválido.");
    }

    return data.response; 

  } catch (error) {
    console.error("Falha ao buscar resposta do geminiService:", error);
 
    throw new Error("Não foi possível conectar ao serviço de chat.");
  }
};