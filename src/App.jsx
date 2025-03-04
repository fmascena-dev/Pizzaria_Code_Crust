import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Cardapio from './components/cardapio/Cardapio';
import ParaEmpresas from './components/para_empresas/ParaEmpresas';
import SeuEvento from './components/seu_evento/SeuEvento';
import Reservas from './components/reservas/Reservas';
import Localizacao from './components/localizacao/Localizacao';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/para_empresas" element={<ParaEmpresas />} />
        <Route path="/seu_evento" element={<SeuEvento />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/localizacao" element={<Localizacao />} />
      </Routes>
    </BrowserRouter>
  );
}
