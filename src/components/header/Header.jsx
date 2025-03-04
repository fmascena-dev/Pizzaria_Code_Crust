import { NavLink } from 'react-router-dom';
import '../../styles/_header.scss'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cardapio'>Cardápio</NavLink>
        <NavLink to='/para_empresas'>Para Empresas</NavLink>
        </nav>
        <nav>
        <NavLink to='/seu_evento'>Faça seu Evento</NavLink>
        <NavLink to='/reservas'>Reservas</NavLink>
        <NavLink to='/localizacao'>Localização</NavLink>
      </nav>
    </header>
  );
}
