import { NavLink } from 'react-router-dom';
import '../../styles/_header.scss'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/cardapio'>CARDÁPIO</NavLink>
        <NavLink to='/para_empresas'>PARA EMPRESAS</NavLink>
        </nav>
        <nav>
        <NavLink to='/seu_evento'>FAÇA SEU EVENTO</NavLink>
        <NavLink to='/reservas'>RESERVAS</NavLink>
        <NavLink to='/localizacao'>LOCALIZAÇÃO</NavLink>
      </nav>
    </header>
  );
}
