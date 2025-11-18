import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const teamMembers = [
  { name: 'Vitória Almeida', role: 'Líder de Pesquisa e Redatora', imgSrc: '/src/assets/images/team/vitori.jpeg' },
  { name: 'Thalison Oliveira', role: 'Pesquisador Técnico', imgSrc: '/src/assets/images/team/thalison.png' },
  { name: 'Raffaela  Beatriz', role: 'Líder de Research (Conteúdo IA)', imgSrc: '/src/assets/images/team/raffa.png' },
  { name: 'Vander', role: 'Especialista em Formatação de Conteúdo', imgSrc: '/src/assets/images/team/Vander.jpeg' },
  { name: 'Renan Vinícius', role: 'PM / Analista de Segurança e Vulnerabilidade', imgSrc: '/src/assets/images/team/Renan.jpeg' },
  { name: 'Danilo Silva', role: 'Arquiteto de Solução', imgSrc: '/src/assets/images/team/Danilo.jpeg' },
  { name: 'Rafael Nogueira', role: 'Arquiteto de Solução', imgSrc: '/src/assets/images/team/rafael.png' },
  { name: 'Jakeline Florencio', role: 'Líder de UI/UX', imgSrc: '/src/assets/images/team/jakeline.png' },
  { name: 'Pedro Paulo', role: 'UI/UX Designer', imgSrc: '/src/assets/images/team/pedro.png' },
  { name: 'Daniel Silva', role: 'Desenvolvedor de Aplicação', imgSrc: '/src/assets/images/team/Daniel.jpeg' },
  { name: 'Bruna Sodré', role: 'Líder de Staff e Apresentação', imgSrc: undefined }, // Usará o fallback
  { name: 'Bianca Martins', role: 'Coordenadora de Design e ID Visual', imgSrc: '/src/assets/images/team/bianca.png' },
  { name: 'Gabrielly Ramos', role: 'Responsável pela Confecção do Banner', imgSrc: '/src/assets/images/team/Gab.jpeg' },
];

export default function Sobre() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-guardiao-cinza-escuro mb-4">
          Sobre Nós
        </h1>
        <p className="text-2xl text-guardiao-cinza-medio max-w-4xl mx-auto mb-4">
          Nossa missão é criar um ambiente digital mais seguro para você
        </p>
        <p className="text-lg text-guardiao-cinza-medio max-w-3xl mx-auto leading-relaxed">
          O Guardião Sênior nasceu de uma preocupação real: a internet pode ser um lugar confuso e, às vezes, perigoso. Nossa missão é simples: queremos que nossos pais, avós e amigos possam aproveitar todos os benefícios da tecnologia com total confiança e segurança.
          Acreditamos que ninguém deve se sentir inseguro ou com medo de cair em um golpe. Este assistente foi criado com muito cuidado, pensando em ser um parceiro fácil de usar, que fala a sua língua e está sempre aqui para ajudar.
        </p>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-guardiao-cinza-escuro">
          Nossa Equipe
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {teamMembers.map((member) => (
          <TeamMemberCard 
            key={member.name}
            name={member.name}
            role={member.role}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>

    </div>
  );
}