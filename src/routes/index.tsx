import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import { useAuth } from '../context/AuthContext';


import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import NewPassword from '../pages/auth/NewPassword';
import Home from '../pages/Home';
import ComoFunciona from '../pages/ComoFunciona';
import Recursos from '../pages/Recursos';
import Sobre from '../pages/Sobre';
import TermosUso from '../pages/TermosUso';
import FaleConosco from '../pages/FaleConosco';
import Configuracoes from '../pages/user/Configuracoes';
import MinhaConta from '../pages/user/MinhaConta';
import Acessibilidade from '../pages/user/Acessibilidade';
import AjudaSaida from '../pages/user/AjudaSaida';


import MinhasConversas from '../pages/user/MinhasConversas'; 


const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/esqueci-senha" element={<ForgotPassword />} />
          <Route path="/nova-senha" element={<NewPassword />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />

          <Route path="/minhas-conversas" element={<PrivateRoute><MinhasConversas /></PrivateRoute>} />
          
          <Route path="/configuracoes" element={<PrivateRoute><Configuracoes /></PrivateRoute>} />
          <Route path="/minha-conta" element={<PrivateRoute><MinhaConta /></PrivateRoute>} />
          <Route path="/acessibilidade" element={<PrivateRoute><Acessibilidade /></PrivateRoute>} />
          <Route path="/ajuda-e-saida" element={<PrivateRoute><AjudaSaida /></PrivateRoute>} />
        </Route>

         <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}