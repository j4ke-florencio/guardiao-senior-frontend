# Guardião Sênior

> Seu assistente pessoal de segurança digital. Protegendo a terceira idade com tecnologia acessível e inteligência artificial.

## Sobre o Projeto

O **Guardião Sênior** é uma aplicação web projetada para ajudar idosos (60+) a identificar e evitar golpes digitais. Através de uma interface de chat simplificada e acessível, o usuário pode relatar situações suspeitas (como mensagens de banco ou links estranhos) e receber orientações claras e imediatas de uma IA.

A interface foi construída seguindo princípios rigorosos de **UI/UX para a terceira idade**: fontes legíveis, alto contraste, navegação linear ("uma tela de cada vez") e feedback visual claro.

## Funcionalidades Principais

* **Chat com IA:** Converse naturalmente para verificar suspeitas de golpes.
* **Acessibilidade:** Design pensado para legibilidade e facilidade de uso.
* **Modo Visitante:** Use o chat imediatamente sem necessidade de login.
* **Área do Usuário:** Crie uma conta para salvar seu histórico de conversas ("Minhas Conversas").
* **Recursos Educativos:** Cards informativos sobre os golpes mais comuns e como se proteger.
* **Interface Responsiva:** Funciona perfeitamente em computadores e celulares.

## Tecnologias Utilizadas (Frontend)

* **Core:** React 18, TypeScript
* **Build Tool:** Vite
* **Estilização:** Tailwind CSS
* **Roteamento:** React Router DOM 6
* **Ícones:** React Bootstrap Icons
* **Renderização de Texto:** Marked (Markdown para HTML)

## Como Rodar o Projeto

### Pré-requisitos

* Node.js instalado.
* Gerenciador de pacotes `npm`.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/j4ke-florencio/guardiao-senior-frontend.git](https://github.com/j4ke-florencio/guardiao-senior-frontend.git)
    cd guardiao-senior-frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz do projeto e adicione as URLs da API (consulte a equipe de Backend):
    ```env
    VITE_BACKEND_API_URL=http://localhost:3001/api/chat
    VITE_AUTH_API_URL=http://localhost:3001/api/auth
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará rodando em `http://localhost:5173` (ou a porta indicada no terminal).

## Equipe (Frontend)

* **Jakeline:** Líder de Frontend (Arquitetura, Estado, Integração API, Acessibilidade)
* **Pedro:** UI Designer & Developer (Componentes Visuais, Estilização)


Desenvolvido com <3 para tornar a internet um lugar mais seguro.