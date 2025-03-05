import './ButtonCriadoresStyle.scss'
import { useNavigate } from 'react-router-dom';

export default function ButtonCriadores() {
  const navigate = useNavigate();

  return <button onClick={() => navigate('/criadores')} className="button-criadores">Criadores</button>;
}
