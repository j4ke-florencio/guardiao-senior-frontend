
import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-guardiao-cinza-escuro mb-3">{title}</h2>
      <div className="space-y-3 text-lg text-guardiao-cinza-medio text-justify">{children}</div>
    </div>
);

export default function TermosUso() {
  return (
    <div className="bg-guardiao-branco p-8 sm:p-12 rounded-xl shadow-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-guardiao-cinza-escuro">Termos de Uso</h1>
          <p className="mt-4 text-xl text-guardiao-cinza-medio">
            Explicamos nossas regras de forma simples e clara para você.
          </p>
        </div>
        
        <Section title="1. Nosso Compromisso com Você">
            <p>Bem-vindo(a) ao Guardião Sênior! Nosso objetivo é ajudar você a usar a internet com mais segurança. Ao usar nosso serviço, você concorda com estas regras simples.</p>
        </Section>
        
        <Section title="2. O que nós fazemos">
            <p>Oferecemos um assistente de inteligência artificial que dá orientações e conselhos sobre segurança digital, golpes e fraudes online.</p>
        </Section>

        <Section title="3. Importante: Nossas Respostas são Conselhos">
            <p>As informações que damos são para ajudar você, mas elas não substituem o conselho de um advogado, um especialista em segurança ou a polícia. Em situações de emergência ou crime, ou se tiver dúvidas, sempre procure as autoridades.</p>
        </Section>

        <Section title="4. O que você pode fazer">
            <p>Você pode usar o Guardião Sênior para fazer perguntas sobre sua segurança online, aprender a identificar golpes e entender como se proteger melhor.</p>
        </Section>

        <Section title="5. Sua Privacidade e seus Dados">
            <p>Nós respeitamos sua privacidade. Não pedimos suas informações pessoais. As conversas podem ser usadas de forma anônima (sem identificar você) apenas para ajudar nosso assistente a ficar mais inteligente e reconhecer novos golpes.</p>
        </Section>

        <Section title="6. Contato">
            <p>Se tiver qualquer dúvida sobre estes termos, por favor, entre em contato conosco pela página "Fale Conosco".</p>
        </Section>
      </div>
    </div>
  );
}