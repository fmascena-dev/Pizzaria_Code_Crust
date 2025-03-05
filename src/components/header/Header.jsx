import { NavLink } from 'react-router-dom';
import '../../styles/_header.scss'
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className="header"
      style={{ transform: `translateY(${scrollY}px)` }}
    >
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/cardapio">CARDÁPIO</NavLink>
        <NavLink to="/para_empresas">PARA EMPRESAS</NavLink>
      </nav>
      <nav>
        <NavLink to="/seu_evento">FAÇA SEU EVENTO</NavLink>
        <NavLink to="/reservas">RESERVAS</NavLink>
        <NavLink to="/localizacao">LOCALIZAÇÃO</NavLink>
      </nav>
      <div className='animatedBorder'></div>
    </header>
  );
}
