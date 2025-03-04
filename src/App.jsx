import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Cardapio from './pages/cardapio/Cardapio';
import ParaEmpresas from './pages/para_empresas/ParaEmpresas';
import SeuEvento from './pages/seu_evento/SeuEvento';
import Reservas from './pages/reservas/Reservas';
import Localizacao from './pages/localizacao/Localizacao';

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
