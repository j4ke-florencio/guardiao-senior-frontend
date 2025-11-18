// src/components/Header.tsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useChat } from '../context/ChatContext'; 
import { List, X } from 'react-bootstrap-icons'; // 1. Importa os ícones de Menu (List) e Fechar (X)

// Importar os logos da pasta de assets
import logoSenior from '../assets/images/logo-senior.png';
import logoGuardiao from '../assets/images/logo-guardiao.png';

export default function Header() {
  const { clearChat } = useChat(); 
  // 2. Adiciona estado para controlar o menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Classes para os links de navegação (Desktop)
  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `text-lg font-medium ${
      isActive ? 'text-guardiao-azul' : 'text-guardiao-cinza-medio'
    } hover:text-guardiao-azul transition-colors duration-200`;

  // Classes para os links de navegação (Mobile)
  const mobileNavLinkClass = "block w-full px-5 py-4 text-lg text-guardiao-cinza-escuro font-medium border-b border-gray-100 hover:bg-gray-50";

  return (
    <header className="bg-guardiao-branco border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3. Layout principal 
            - justify-between: (Mobile) Logo na esquerda, Hambúrguer na direita
            - md:justify-center: (Desktop) Nav centralizada (com logo absoluto)
        */}
        <div className="flex items-center justify-between h-20 relative md:justify-center"> 
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 md:absolute md:left-4 lg:left-8" 
            onClick={() => {
              clearChat();
              setIsMobileMenuOpen(false); // Fecha o menu ao clicar no logo
            }} 
            aria-label="Guardião Sênior - Página Inicial"
          >
            <img
              src={logoSenior}
              alt=""
              aria-hidden="true"
              className="h-14 w-14" 
            />
            <img
              src={logoGuardiao}
              alt="Guardião Sênior"
              className="h-10"
            />
          </Link>

          {/* Navegação Desktop (Escondida no mobile) */}
          <nav 
            className="hidden md:flex items-center gap-6 sm:gap-8"
          >
            <NavLink to="/como-funciona" className={navLinkClass}>
              Como funciona
            </NavLink>
            <NavLink to="/recursos" className={navLinkClass}>
              Recursos
            </NavLink>
            <NavLink to="/sobre" className={navLinkClass}>
              Sobre
            </NavLink>
          </nav>

          {/* 4. Botão Hambúrguer (Aparece SÓ no mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={32} className="text-guardiao-cinza-escuro" />
            ) : (
              <List size={32} className="text-guardiao-cinza-escuro" />
            )}
          </button>
        </div>
      </div>

      {/* 5. Menu Mobile Dropdown (Aparece SÓ no mobile e SÓ se estiver aberto) */}
      {isMobileMenuOpen && (
        <nav className="absolute top-20 left-0 right-0 w-full bg-white shadow-lg md:hidden z-40">
          <NavLink to="/como-funciona" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Como funciona
          </NavLink>
          <NavLink to="/recursos" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Recursos
          </NavLink>
          <NavLink to="/sobre" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
            Sobre
          </NavLink>
        </nav>
      )}
    </header>
  );
}